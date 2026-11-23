import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSettingsV1SettingsServiceDeleteRoute,
  postSettingsV1SettingsServiceGetRoute,
  postSettingsV1SettingsServiceSetRoute,
} from './routes'
import {
  postSettingsV1SettingsServiceDeleteRouteHandler,
  postSettingsV1SettingsServiceGetRouteHandler,
  postSettingsV1SettingsServiceSetRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postSettingsV1SettingsServiceDeleteRoute,
    postSettingsV1SettingsServiceDeleteRouteHandler,
  )
  .openapi(postSettingsV1SettingsServiceGetRoute, postSettingsV1SettingsServiceGetRouteHandler)
  .openapi(postSettingsV1SettingsServiceSetRoute, postSettingsV1SettingsServiceSetRouteHandler)

export default app
