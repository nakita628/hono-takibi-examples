import { OpenAPIHono } from '@hono/zod-openapi'
import { putImportComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const importComponentHandler = app.openapi(putImportComponentRoute, (c) => {
  throw new Error('Not implemented')
})
