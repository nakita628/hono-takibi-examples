import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationNameserversNameRoute,
  getServicesHaproxyConfigurationNameserversNameRoute,
  getServicesHaproxyConfigurationNameserversRoute,
  postServicesHaproxyConfigurationNameserversRoute,
  putServicesHaproxyConfigurationNameserversNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nameserverHandler = app
  .openapi(getServicesHaproxyConfigurationNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationNameserversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationNameserversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationNameserversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
