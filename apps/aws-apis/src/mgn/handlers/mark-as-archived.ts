import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarkAsArchivedRoute } from '../routes'

const app = new OpenAPIHono()

export const markAsArchivedHandler = app.openapi(postMarkAsArchivedRoute, (c) => {
  throw new Error('Not implemented')
})
