import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpSettingsAdminLogDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app.openapi(getIndexPhpSettingsAdminLogDownloadRoute, (c) => {
  throw new Error('Not implemented')
})
