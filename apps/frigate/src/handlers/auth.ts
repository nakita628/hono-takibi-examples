import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthFirstTimeLoginRoute, getAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthFirstTimeLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
