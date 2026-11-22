import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationRingsNameRoute,
  getServicesHaproxyConfigurationRingsNameRoute,
  getServicesHaproxyConfigurationRingsRoute,
  postServicesHaproxyConfigurationRingsRoute,
  putServicesHaproxyConfigurationRingsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ringHandler = app
  .openapi(getServicesHaproxyConfigurationRingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationRingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationRingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationRingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationRingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
