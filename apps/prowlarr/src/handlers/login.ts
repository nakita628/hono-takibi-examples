import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoginRoute, postLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
