import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormatPlayByPlayDeltaDateMinutesRoute, getFormatPlayByPlayGameidRoute } from './routes'
import {
  getFormatPlayByPlayDeltaDateMinutesRouteHandler,
  getFormatPlayByPlayGameidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatPlayByPlayGameidRoute, getFormatPlayByPlayGameidRouteHandler)
  .openapi(
    getFormatPlayByPlayDeltaDateMinutesRoute,
    getFormatPlayByPlayDeltaDateMinutesRouteHandler,
  )

export default app
