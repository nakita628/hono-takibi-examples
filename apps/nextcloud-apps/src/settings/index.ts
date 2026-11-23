import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpSettingsAdminLogDownloadRoute,
  getOcsV2PhpSettingsApiDeclarativeFormsRoute,
  postOcsV2PhpSettingsApiDeclarativeValueRoute,
  postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute,
} from './routes'
import {
  getIndexPhpSettingsAdminLogDownloadRouteHandler,
  getOcsV2PhpSettingsApiDeclarativeFormsRouteHandler,
  postOcsV2PhpSettingsApiDeclarativeValueRouteHandler,
  postOcsV2PhpSettingsApiDeclarativeValueSensitiveRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getIndexPhpSettingsAdminLogDownloadRoute,
    getIndexPhpSettingsAdminLogDownloadRouteHandler,
  )
  .openapi(
    postOcsV2PhpSettingsApiDeclarativeValueRoute,
    postOcsV2PhpSettingsApiDeclarativeValueRouteHandler,
  )
  .openapi(
    postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute,
    postOcsV2PhpSettingsApiDeclarativeValueSensitiveRouteHandler,
  )
  .openapi(
    getOcsV2PhpSettingsApiDeclarativeFormsRoute,
    getOcsV2PhpSettingsApiDeclarativeFormsRouteHandler,
  )

export default app
