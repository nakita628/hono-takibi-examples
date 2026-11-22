import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarCtAuthoritiesCaSlugRoute,
  getRadarCtAuthoritiesRoute,
  getRadarCtLogsLogSlugRoute,
  getRadarCtLogsRoute,
  getRadarCtSummaryDimensionRoute,
  getRadarCtTimeseriesGroupsDimensionRoute,
  getRadarCtTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarCertificateTransparencyHandler = app
  .openapi(getRadarCtAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarCtAuthoritiesCaSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarCtLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarCtLogsLogSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarCtSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarCtTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarCtTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
