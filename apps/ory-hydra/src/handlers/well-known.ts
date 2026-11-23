import { OpenAPIHono } from '@hono/zod-openapi'
import { getWellKnownJwksJsonRoute, getWellKnownOpenidConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const wellKnownHandler = app
  .openapi(getWellKnownJwksJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
