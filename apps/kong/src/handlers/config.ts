import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigRoute, postConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(postConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
