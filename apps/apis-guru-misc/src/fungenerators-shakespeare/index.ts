import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShakespeareGenerateInsultRoute,
  getShakespeareGenerateLoremIpsumRoute,
  getShakespeareGenerateNameRoute,
  getShakespeareQuoteRoute,
  getShakespeareTranslateRoute,
} from './routes'
import {
  getShakespeareGenerateInsultRouteHandler,
  getShakespeareGenerateLoremIpsumRouteHandler,
  getShakespeareGenerateNameRouteHandler,
  getShakespeareQuoteRouteHandler,
  getShakespeareTranslateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getShakespeareGenerateInsultRoute, getShakespeareGenerateInsultRouteHandler)
  .openapi(getShakespeareGenerateLoremIpsumRoute, getShakespeareGenerateLoremIpsumRouteHandler)
  .openapi(getShakespeareGenerateNameRoute, getShakespeareGenerateNameRouteHandler)
  .openapi(getShakespeareQuoteRoute, getShakespeareQuoteRouteHandler)
  .openapi(getShakespeareTranslateRoute, getShakespeareTranslateRouteHandler)

export default app
