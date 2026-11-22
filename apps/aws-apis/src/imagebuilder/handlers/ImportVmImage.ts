import { OpenAPIHono } from '@hono/zod-openapi'
import { putImportVmImageRoute } from '../routes'

const app = new OpenAPIHono()

export const ImportVmImageHandler = app.openapi(putImportVmImageRoute, (c) => {
  throw new Error('Not implemented')
})
