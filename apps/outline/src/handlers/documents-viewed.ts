import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsViewedRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsViewedHandler = app.openapi(postDocumentsViewedRoute, (c) => {
  throw new Error('Not implemented')
})
