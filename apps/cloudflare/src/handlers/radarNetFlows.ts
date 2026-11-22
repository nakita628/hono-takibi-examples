import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarNetflowsSummaryDimensionRoute,
  getRadarNetflowsSummaryRoute,
  getRadarNetflowsTimeseriesGroupsDimensionRoute,
  getRadarNetflowsTimeseriesRoute,
  getRadarNetflowsTopAsesRoute,
  getRadarNetflowsTopLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarNetFlowsHandler = app
  .openapi(getRadarNetflowsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarNetflowsSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarNetflowsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarNetflowsTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarNetflowsTopAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarNetflowsTopLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
