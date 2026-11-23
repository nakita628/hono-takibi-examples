import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersProviderRoute,
  getProvidersProviderTemplatesRoute,
  getProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providersHandler = app
  .openapi(getProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
