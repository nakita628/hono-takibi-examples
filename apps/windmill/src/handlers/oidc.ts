import { OpenAPIHono } from '@hono/zod-openapi'
import { getOidcSigningStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const oidcHandler = app.openapi(getOidcSigningStatusRoute, (c) => {
  throw new Error('Not implemented')
})
