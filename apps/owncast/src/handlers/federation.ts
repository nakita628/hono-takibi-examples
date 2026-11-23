import { OpenAPIHono } from '@hono/zod-openapi'
import { getFederationServersRoute } from '../routes'

const app = new OpenAPIHono()

export const federationHandler = app.openapi(getFederationServersRoute, (c) => {
  throw new Error('Not implemented')
})
