import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsRemoveUserRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsRemoveUserHandler = app.openapi(postDocumentsRemoveUserRoute, (c) => {
  throw new Error('Not implemented')
})
