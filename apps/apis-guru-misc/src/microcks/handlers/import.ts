import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportRoute } from '../routes'

const app = new OpenAPIHono()

export const importHandler = app.openapi(postImportRoute, (c) => {
  throw new Error('Not implemented')
})
