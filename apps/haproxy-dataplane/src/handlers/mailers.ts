import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationMailersSectionNameRoute,
  getServicesHaproxyConfigurationMailersSectionNameRoute,
  getServicesHaproxyConfigurationMailersSectionRoute,
  postServicesHaproxyConfigurationMailersSectionRoute,
  putServicesHaproxyConfigurationMailersSectionNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mailersHandler = app
  .openapi(getServicesHaproxyConfigurationMailersSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationMailersSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationMailersSectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationMailersSectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationMailersSectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
