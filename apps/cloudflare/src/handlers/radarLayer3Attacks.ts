import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAttacksLayer3SummaryBitrateRoute,
  getRadarAttacksLayer3SummaryDimensionRoute,
  getRadarAttacksLayer3SummaryDurationRoute,
  getRadarAttacksLayer3SummaryIndustryRoute,
  getRadarAttacksLayer3SummaryIpVersionRoute,
  getRadarAttacksLayer3SummaryProtocolRoute,
  getRadarAttacksLayer3SummaryVectorRoute,
  getRadarAttacksLayer3SummaryVerticalRoute,
  getRadarAttacksLayer3TimeseriesGroupsBitrateRoute,
  getRadarAttacksLayer3TimeseriesGroupsDimensionRoute,
  getRadarAttacksLayer3TimeseriesGroupsDurationRoute,
  getRadarAttacksLayer3TimeseriesGroupsIndustryRoute,
  getRadarAttacksLayer3TimeseriesGroupsIpVersionRoute,
  getRadarAttacksLayer3TimeseriesGroupsProtocolRoute,
  getRadarAttacksLayer3TimeseriesGroupsVectorRoute,
  getRadarAttacksLayer3TimeseriesGroupsVerticalRoute,
  getRadarAttacksLayer3TimeseriesRoute,
  getRadarAttacksLayer3TopAttacksRoute,
  getRadarAttacksLayer3TopIndustryRoute,
  getRadarAttacksLayer3TopLocationsOriginRoute,
  getRadarAttacksLayer3TopLocationsTargetRoute,
  getRadarAttacksLayer3TopVerticalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarLayer3AttacksHandler = app
  .openapi(getRadarAttacksLayer3SummaryBitrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryDurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryVectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryVerticalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3SummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsBitrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsDurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsVectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsVerticalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TopAttacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TopIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TopLocationsOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TopLocationsTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer3TopVerticalRoute, (c) => {
    throw new Error('Not implemented')
  })
