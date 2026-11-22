import { OpenAPIHono } from '@hono/zod-openapi'
import { getWellKnownJwksJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const wellknownHandler = app.openapi(getWellKnownJwksJsonRoute, (c) => {
  throw new Error('Not implemented')
})
