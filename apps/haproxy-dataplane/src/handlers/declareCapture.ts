import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameCapturesRoute,
  postServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameCapturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const declareCaptureHandler = app
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameCapturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
