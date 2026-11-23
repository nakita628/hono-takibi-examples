import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagRoute } from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app.openapi(postTagRoute, (c) => {
  throw new Error('Not implemented')
})
