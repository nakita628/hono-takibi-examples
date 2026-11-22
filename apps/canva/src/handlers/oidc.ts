import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OidcJwksRoute, getV1OidcUserinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const oidcHandler = app
  .openapi(getV1OidcJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OidcUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
