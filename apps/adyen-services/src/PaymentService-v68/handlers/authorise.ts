import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthoriseRoute } from '../routes'

const app = new OpenAPIHono()

export const authoriseHandler = app.openapi(postAuthoriseRoute, (c) => {
  throw new Error('Not implemented')
})
