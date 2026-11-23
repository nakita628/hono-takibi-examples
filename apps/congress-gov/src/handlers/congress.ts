import { OpenAPIHono } from '@hono/zod-openapi'
import { getCongressCongressRoute, getCongressCurrentRoute, getCongressRoute } from '../routes'

const app = new OpenAPIHono()

export const congressHandler = app
  .openapi(getCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCongressCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCongressCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
