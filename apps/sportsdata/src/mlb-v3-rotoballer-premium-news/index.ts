import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatRotoBallerPremiumNewsByDateDateRoute,
  getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute,
  getFormatRotoBallerPremiumNewsRoute,
} from './routes'
import {
  getFormatRotoBallerPremiumNewsByDateDateRouteHandler,
  getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRouteHandler,
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

export default app
