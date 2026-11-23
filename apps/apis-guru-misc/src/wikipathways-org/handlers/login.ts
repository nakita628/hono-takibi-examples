import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app.openapi(getLoginRoute, (c) => {
  throw new Error('Not implemented')
})
