import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFrontendsNameRoute,
  getServicesHaproxyConfigurationFrontendsNameRoute,
  getServicesHaproxyConfigurationFrontendsRoute,
  postServicesHaproxyConfigurationFrontendsRoute,
  putServicesHaproxyConfigurationFrontendsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const frontendHandler = app
  .openapi(getServicesHaproxyConfigurationFrontendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
