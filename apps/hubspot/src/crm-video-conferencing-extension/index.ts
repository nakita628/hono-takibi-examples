import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
  getCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
  putCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
} from './routes'
import {
  deleteCrmExtensionsVideoconferencing202609SettingsAppIdRouteHandler,
  getCrmExtensionsVideoconferencing202609SettingsAppIdRouteHandler,
  putCrmExtensionsVideoconferencing202609SettingsAppIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
    getCrmExtensionsVideoconferencing202609SettingsAppIdRouteHandler,
  )
  .openapi(
    putCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
    putCrmExtensionsVideoconferencing202609SettingsAppIdRouteHandler,
  )
  .openapi(
    deleteCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
    deleteCrmExtensionsVideoconferencing202609SettingsAppIdRouteHandler,
  )

export default app
