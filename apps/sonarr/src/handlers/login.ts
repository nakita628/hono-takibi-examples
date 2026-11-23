import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoginRoute, getLoginSsoRoute, postLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app
  .openapi(getLoginSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
