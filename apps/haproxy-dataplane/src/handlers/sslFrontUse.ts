import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesRoute,
  postServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslFrontUseHandler = app
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
