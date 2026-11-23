import { OpenAPIHono } from '@hono/zod-openapi'
import { postLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app.openapi(postLoginRoute, (c) => {
  throw new Error('Not implemented')
})
