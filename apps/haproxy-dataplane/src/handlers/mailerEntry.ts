import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationMailerEntriesNameRoute,
  getServicesHaproxyConfigurationMailerEntriesNameRoute,
  getServicesHaproxyConfigurationMailerEntriesRoute,
  postServicesHaproxyConfigurationMailerEntriesRoute,
  putServicesHaproxyConfigurationMailerEntriesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mailerEntryHandler = app
  .openapi(getServicesHaproxyConfigurationMailerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationMailerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationMailerEntriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationMailerEntriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationMailerEntriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
