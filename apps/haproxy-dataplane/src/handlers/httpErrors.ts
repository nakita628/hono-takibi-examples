import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationHttpErrorsSectionsNameRoute,
  getServicesHaproxyConfigurationHttpErrorsSectionsNameRoute,
  getServicesHaproxyConfigurationHttpErrorsSectionsRoute,
  postServicesHaproxyConfigurationHttpErrorsSectionsRoute,
  putServicesHaproxyConfigurationHttpErrorsSectionsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpErrorsHandler = app
  .openapi(getServicesHaproxyConfigurationHttpErrorsSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationHttpErrorsSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationHttpErrorsSectionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationHttpErrorsSectionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationHttpErrorsSectionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
