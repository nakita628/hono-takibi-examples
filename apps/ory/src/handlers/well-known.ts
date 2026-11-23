import { OpenAPIHono } from '@hono/zod-openapi'
import { getWellKnownChangePasswordRoute, getWellKnownOryWebauthnJsRoute } from '../routes'

const app = new OpenAPIHono()

export const wellKnownHandler = app
  .openapi(getWellKnownChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownOryWebauthnJsRoute, (c) => {
    throw new Error('Not implemented')
  })
