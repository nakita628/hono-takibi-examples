import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatStartingGoaltendersByDateDateRoute,
} from './routes'
import {
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatInjuredPlayersRouteHandler,
  getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  getFormatStartingGoaltendersByDateDateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
  .openapi(getFormatInjuredPlayersRoute, getFormatInjuredPlayersRouteHandler)
  .openapi(
    getFormatPlayerGameProjectionStatsByDateDateRoute,
    getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  )
  .openapi(
    getFormatStartingGoaltendersByDateDateRoute,
    getFormatStartingGoaltendersByDateDateRouteHandler,
  )

export default app
