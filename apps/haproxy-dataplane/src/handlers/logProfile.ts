import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationLogProfilesNameRoute,
  getServicesHaproxyConfigurationLogProfilesNameRoute,
  getServicesHaproxyConfigurationLogProfilesRoute,
  postServicesHaproxyConfigurationLogProfilesRoute,
  putServicesHaproxyConfigurationLogProfilesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logProfileHandler = app
  .openapi(getServicesHaproxyConfigurationLogProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationLogProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationLogProfilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationLogProfilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationLogProfilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
