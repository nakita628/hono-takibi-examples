import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarTcpResetsTimeoutsSummaryRoute,
  getRadarTcpResetsTimeoutsTimeseriesGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarTCPResetsAndTimeoutsHandler = app
  .openapi(getRadarTcpResetsTimeoutsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarTcpResetsTimeoutsTimeseriesGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
