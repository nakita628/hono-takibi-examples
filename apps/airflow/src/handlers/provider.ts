import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ProvidersProviderNameRoute, getApiV2ProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const providerHandler = app
  .openapi(getApiV2ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
