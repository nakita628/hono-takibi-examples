import { OpenAPIHono } from '@hono/zod-openapi'
import { getOidcAuthProvidersIdRoute, getOidcAuthProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const oidcAuthProvidersHandler = app
  .openapi(getOidcAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOidcAuthProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
