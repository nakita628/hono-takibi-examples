import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrmExports202609ExportExportIdRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(getCrmExports202609ExportExportIdRoute, (c) => {
  throw new Error('Not implemented')
})
