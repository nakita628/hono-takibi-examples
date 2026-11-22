import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationUsersUsernameRoute,
  getServicesHaproxyConfigurationUsersRoute,
  getServicesHaproxyConfigurationUsersUsernameRoute,
  postServicesHaproxyConfigurationUsersRoute,
  putServicesHaproxyConfigurationUsersUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getServicesHaproxyConfigurationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
