import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAccountLoginRoute, postApiAccountLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getApiAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
