import { OpenAPIHono } from '@hono/zod-openapi'
import { getServerInfoRoute, getServerPingRoute } from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(getServerInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerPingRoute, (c) => {
    throw new Error('Not implemented')
  })
