import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsUsersHandler = app.openapi(postDocumentsUsersRoute, (c) => {
  throw new Error('Not implemented')
})
