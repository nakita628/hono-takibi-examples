import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImportErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImportErrorsHandler = app.openapi(postListImportErrorsRoute, (c) => {
  throw new Error('Not implemented')
})
