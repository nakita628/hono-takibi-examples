import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPirateGenerateInsultRoute,
  getPirateGenerateLoremIpsumRoute,
  getPirateGenerateNameRoute,
  getPirateTranslateRoute,
} from './routes'
import {
  getPirateGenerateInsultRouteHandler,
  getPirateGenerateLoremIpsumRouteHandler,
  getPirateGenerateNameRouteHandler,
  getPirateTranslateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPirateGenerateInsultRoute, getPirateGenerateInsultRouteHandler)
  .openapi(getPirateGenerateLoremIpsumRoute, getPirateGenerateLoremIpsumRouteHandler)
  .openapi(getPirateGenerateNameRoute, getPirateGenerateNameRouteHandler)
  .openapi(getPirateTranslateRoute, getPirateTranslateRouteHandler)

export default app
