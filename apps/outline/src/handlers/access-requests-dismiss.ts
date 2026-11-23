import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccessRequestsDismissRoute } from '../routes'

const app = new OpenAPIHono()

export const accessRequestsDismissHandler = app.openapi(postAccessRequestsDismissRoute, (c) => {
  throw new Error('Not implemented')
})
