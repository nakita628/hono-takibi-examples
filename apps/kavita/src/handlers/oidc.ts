import { OpenAPIHono } from '@hono/zod-openapi'
import { getOidcLoginRoute, getOidcLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const oidcHandler = app
  .openapi(getOidcLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOidcLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
