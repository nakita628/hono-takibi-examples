import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationDefaultsNameRoute,
  getServicesHaproxyConfigurationDefaultsNameRoute,
  getServicesHaproxyConfigurationDefaultsRoute,
  postServicesHaproxyConfigurationDefaultsRoute,
  putServicesHaproxyConfigurationDefaultsNameRoute,
  putServicesHaproxyConfigurationDefaultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const defaultsHandler = app
  .openapi(getServicesHaproxyConfigurationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
