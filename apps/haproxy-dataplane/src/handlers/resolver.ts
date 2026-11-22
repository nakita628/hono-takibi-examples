import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationResolversNameRoute,
  getServicesHaproxyConfigurationResolversNameRoute,
  getServicesHaproxyConfigurationResolversRoute,
  postServicesHaproxyConfigurationResolversRoute,
  putServicesHaproxyConfigurationResolversNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resolverHandler = app
  .openapi(getServicesHaproxyConfigurationResolversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationResolversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationResolversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationResolversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationResolversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
