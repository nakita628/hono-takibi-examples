import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntraAuthProvidersIdRoute, getEntraAuthProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const entraAuthProvidersHandler = app
  .openapi(getEntraAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntraAuthProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
