import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsUpdateHandler = app.openapi(postDocumentsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
