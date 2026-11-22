import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarTldsPerformanceSummaryDimensionRoute,
  getRadarTldsPerformanceTimeseriesGroupsDimensionRoute,
  getRadarTldsRoute,
  getRadarTldsTldRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarTopLevelDomainsHandler = app
  .openapi(getRadarTldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarTldsPerformanceSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarTldsPerformanceTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarTldsTldRoute, (c) => {
    throw new Error('Not implemented')
  })
