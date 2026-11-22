import { OpenAPIHono } from '@hono/zod-openapi'
import { putImportComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const ImportComponentHandler = app.openapi(putImportComponentRoute, (c) => {
  throw new Error('Not implemented')
})
