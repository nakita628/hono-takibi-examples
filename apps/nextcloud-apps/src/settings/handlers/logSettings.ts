import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpSettingsAdminLogDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const logSettingsHandler = app.openapi(getIndexPhpSettingsAdminLogDownloadRoute, (c) => {
  throw new Error('Not implemented')
})
