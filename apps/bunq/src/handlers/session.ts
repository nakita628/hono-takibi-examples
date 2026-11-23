import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSessionItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app.openapi(deleteSessionItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
