import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarOriginsRoute,
  getRadarOriginsSlugRoute,
  getRadarOriginsSummaryDimensionRoute,
  getRadarOriginsTimeseriesGroupsDimensionRoute,
  getRadarOriginsTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarOriginsHandler = app
  .openapi(getRadarOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarOriginsSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarOriginsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarOriginsTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarOriginsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
