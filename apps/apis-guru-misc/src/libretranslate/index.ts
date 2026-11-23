import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFrontendSettingsRoute,
  getLanguagesRoute,
  postDetectRoute,
  postSuggestRoute,
  postTranslateFileRoute,
  postTranslateRoute,
} from './routes'
import {
  getFrontendSettingsRouteHandler,
  getLanguagesRouteHandler,
  postDetectRouteHandler,
  postSuggestRouteHandler,
  postTranslateFileRouteHandler,
  postTranslateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDetectRoute, postDetectRouteHandler)
  .openapi(getFrontendSettingsRoute, getFrontendSettingsRouteHandler)
  .openapi(getLanguagesRoute, getLanguagesRouteHandler)
  .openapi(postSuggestRoute, postSuggestRouteHandler)
  .openapi(postTranslateRoute, postTranslateRouteHandler)
  .openapi(postTranslateFileRoute, postTranslateFileRouteHandler)

export default app
