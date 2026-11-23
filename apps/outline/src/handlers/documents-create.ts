import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsCreateHandler = app.openapi(postDocumentsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
