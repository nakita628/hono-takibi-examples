import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsNameRoute,
  getServicesHaproxyConfigurationBackendsNameRoute,
  getServicesHaproxyConfigurationBackendsRoute,
  postServicesHaproxyConfigurationBackendsRoute,
  putServicesHaproxyConfigurationBackendsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backendHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
