import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigDefaultsRoute, getConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configUserHandler = app
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
