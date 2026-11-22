import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const checkHandler = app.openapi(postCheckRoute, (c) => {
  throw new Error('Not implemented')
})
