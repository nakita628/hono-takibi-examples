import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationHealthchecksNameRoute,
  getServicesHaproxyConfigurationHealthchecksNameRoute,
  getServicesHaproxyConfigurationHealthchecksRoute,
  postServicesHaproxyConfigurationHealthchecksRoute,
  putServicesHaproxyConfigurationHealthchecksNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthCheckHandler = app
  .openapi(getServicesHaproxyConfigurationHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationHealthchecksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationHealthchecksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationHealthchecksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
