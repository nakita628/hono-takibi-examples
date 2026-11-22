import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPingMethodCodeIdRoute, getApiPingMethodCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const pingMethodCodeHandler = app
  .openapi(getApiPingMethodCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingMethodCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
