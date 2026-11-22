import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListJsonRoute,
  getMetricsJsonRoute,
  getProviderJsonRoute,
  getProviderServicesJsonRoute,
  getProvidersJsonRoute,
  getSpecsProviderApiJsonRoute,
  getSpecsProviderServiceApiJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(getListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecsProviderApiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecsProviderServiceApiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderServicesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
