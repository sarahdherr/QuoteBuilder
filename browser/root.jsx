// dev dependencies
import React from "react"

// components
import Title from "./components/Title"
import FixtureType from "./components/FixtureType"
import OptionalFixtureType from "./components/OptionalFixtureType"
import ChannelLengthTable from "./components/ChannelLengthTable"

export default function Root () {
  return (
    <div>
      <Title />
      <FixtureType />
      <OptionalFixtureType />
      <ChannelLengthTable />
    </div>
  )
}
