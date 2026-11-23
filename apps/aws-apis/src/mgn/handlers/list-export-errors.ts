import { OpenAPIHono } from '@hono/zod-openapi'
import { postListExportErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const listExportErrorsHandler = app.openapi(postListExportErrorsRoute, (c) => {
  throw new Error('Not implemented')
})
