import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatRotoBallerPremiumNewsByDateDateRoute,
  getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute,
  getFormatRotoBallerPremiumNewsByTeamTeamRoute,
  getFormatRotoBallerPremiumNewsRoute,
} from './routes'
import {
  getFormatRotoBallerPremiumNewsByDateDateRouteHandler,
  getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRouteHandler,
  getFormatRotoBallerPremiumNewsByTeamTeamRouteHandler,
  getFormatRotoBallerPremiumNewsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatRotoBallerPremiumNewsRoute, getFormatRotoBallerPremiumNewsRouteHandler)
  .openapi(
    getFormatRotoBallerPremiumNewsByDateDateRoute,
    getFormatRotoBallerPremiumNewsByDateDateRouteHandler,
  )
  .openapi(
    getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute,
    getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRouteHandler,
  )
  .openapi(
    getFormatRotoBallerPremiumNewsByTeamTeamRoute,
    getFormatRotoBallerPremiumNewsByTeamTeamRouteHandler,
  )

export default app
