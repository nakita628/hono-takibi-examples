import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigRoute, getFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
