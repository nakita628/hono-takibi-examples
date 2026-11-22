import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1DocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app.openapi(getApiV1DocumentsRoute, (c) => {
  throw new Error('Not implemented')
})
