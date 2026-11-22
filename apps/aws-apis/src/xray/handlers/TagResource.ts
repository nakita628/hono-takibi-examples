import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const TagResourceHandler = app.openapi(postTagResourceRoute, (c) => {
  throw new Error('Not implemented')
})
