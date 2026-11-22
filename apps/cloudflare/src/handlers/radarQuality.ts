import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarQualityIqiSummaryRoute,
  getRadarQualityIqiTimeseriesGroupsRoute,
  getRadarQualitySpeedHistogramRoute,
  getRadarQualitySpeedSummaryRoute,
  getRadarQualitySpeedTopAsesRoute,
  getRadarQualitySpeedTopLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarQualityHandler = app
  .openapi(getRadarQualityIqiSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarQualityIqiTimeseriesGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarQualitySpeedHistogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarQualitySpeedSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarQualitySpeedTopAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarQualitySpeedTopLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
