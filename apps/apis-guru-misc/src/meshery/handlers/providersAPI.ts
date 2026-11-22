import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiProviderCapabilitiesRoute,
  getApiProviderExtensionRoute,
  getApiProviderRoute,
  getApiProvidersRoute,
  getProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providersAPIHandler = app
  .openapi(getApiProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProviderCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProviderExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
