import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoute,
  getServicesHaproxyConfigurationRoute,
  getServicesHaproxyRoute,
  getServicesHaproxyRuntimeRoute,
  getServicesHaproxySpoeRoute,
  getServicesHaproxyStatsRoute,
  getServicesHaproxyStorageRoute,
  getServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoveryHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
