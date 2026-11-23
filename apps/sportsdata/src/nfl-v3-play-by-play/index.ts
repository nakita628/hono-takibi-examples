import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatPlayByPlayDeltaSeasonWeekMinutesRoute,
  getFormatPlayByPlaySeasonWeekHometeamRoute,
  getFormatSimulatedPlayByPlayNumberofplaysRoute,
} from './routes'
import {
  getFormatPlayByPlayDeltaSeasonWeekMinutesRouteHandler,
  getFormatPlayByPlaySeasonWeekHometeamRouteHandler,
  getFormatSimulatedPlayByPlayNumberofplaysRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getFormatPlayByPlaySeasonWeekHometeamRoute,
    getFormatPlayByPlaySeasonWeekHometeamRouteHandler,
  )
  .openapi(
    getFormatPlayByPlayDeltaSeasonWeekMinutesRoute,
    getFormatPlayByPlayDeltaSeasonWeekMinutesRouteHandler,
  )
  .openapi(
    getFormatSimulatedPlayByPlayNumberofplaysRoute,
    getFormatSimulatedPlayByPlayNumberofplaysRouteHandler,
  )

export default app
