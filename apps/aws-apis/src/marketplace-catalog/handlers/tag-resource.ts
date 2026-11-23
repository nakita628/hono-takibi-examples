import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const tagResourceHandler = app.openapi(postTagResourceRoute, (c) => {
  throw new Error('Not implemented')
})
