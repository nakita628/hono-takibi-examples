import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersProviderIdLogoRoute,
  getProvidersProviderIdLogoVersionRoute,
  getProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providerHandler = app
  .openapi(getProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdLogoVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
