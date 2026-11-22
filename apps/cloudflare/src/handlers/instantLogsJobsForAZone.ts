import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdLogpushEdgeJobsRoute, postZonesZoneIdLogpushEdgeJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const instantLogsJobsForAZoneHandler = app
  .openapi(getZonesZoneIdLogpushEdgeJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogpushEdgeJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
