import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAttacksLayer7SummaryDimensionRoute,
  getRadarAttacksLayer7SummaryHttpMethodRoute,
  getRadarAttacksLayer7SummaryHttpVersionRoute,
  getRadarAttacksLayer7SummaryIndustryRoute,
  getRadarAttacksLayer7SummaryIpVersionRoute,
  getRadarAttacksLayer7SummaryManagedRulesRoute,
  getRadarAttacksLayer7SummaryMitigationProductRoute,
  getRadarAttacksLayer7SummaryVerticalRoute,
  getRadarAttacksLayer7TimeseriesGroupsDimensionRoute,
  getRadarAttacksLayer7TimeseriesGroupsHttpMethodRoute,
  getRadarAttacksLayer7TimeseriesGroupsHttpVersionRoute,
  getRadarAttacksLayer7TimeseriesGroupsIndustryRoute,
  getRadarAttacksLayer7TimeseriesGroupsIpVersionRoute,
  getRadarAttacksLayer7TimeseriesGroupsManagedRulesRoute,
  getRadarAttacksLayer7TimeseriesGroupsMitigationProductRoute,
  getRadarAttacksLayer7TimeseriesGroupsVerticalRoute,
  getRadarAttacksLayer7TimeseriesRoute,
  getRadarAttacksLayer7TopAsesOriginRoute,
  getRadarAttacksLayer7TopAttacksRoute,
  getRadarAttacksLayer7TopIndustryRoute,
  getRadarAttacksLayer7TopLocationsOriginRoute,
  getRadarAttacksLayer7TopLocationsTargetRoute,
  getRadarAttacksLayer7TopVerticalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarLayer7AttacksHandler = app
  .openapi(getRadarAttacksLayer7SummaryHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryHttpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryManagedRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryMitigationProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryVerticalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7SummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsHttpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsManagedRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsMitigationProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsVerticalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TopAsesOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TopAttacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TopIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TopLocationsOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TopLocationsTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAttacksLayer7TopVerticalRoute, (c) => {
    throw new Error('Not implemented')
  })
