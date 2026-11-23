import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsAddUserRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsAddUserHandler = app.openapi(postDocumentsAddUserRoute, (c) => {
  throw new Error('Not implemented')
})
