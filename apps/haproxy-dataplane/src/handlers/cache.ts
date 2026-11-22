import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationCachesNameRoute,
  getServicesHaproxyConfigurationCachesNameRoute,
  getServicesHaproxyConfigurationCachesRoute,
  postServicesHaproxyConfigurationCachesRoute,
  putServicesHaproxyConfigurationCachesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app
  .openapi(getServicesHaproxyConfigurationCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationCachesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationCachesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationCachesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
