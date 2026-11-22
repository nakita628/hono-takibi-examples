import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app.openapi(postSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
