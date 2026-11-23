import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionTokenCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app.openapi(postSessionTokenCreateRoute, (c) => {
  throw new Error('Not implemented')
})
