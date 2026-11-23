import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImportErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const listImportErrorsHandler = app.openapi(postListImportErrorsRoute, (c) => {
  throw new Error('Not implemented')
})
