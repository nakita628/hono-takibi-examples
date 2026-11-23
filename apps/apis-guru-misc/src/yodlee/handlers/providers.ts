import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersCountRoute, getProvidersProviderIdRoute, getProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const providersHandler = app
  .openapi(getProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
