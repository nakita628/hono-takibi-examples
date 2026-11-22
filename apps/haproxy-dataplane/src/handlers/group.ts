import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationGroupsNameRoute,
  getServicesHaproxyConfigurationGroupsNameRoute,
  getServicesHaproxyConfigurationGroupsRoute,
  postServicesHaproxyConfigurationGroupsRoute,
  putServicesHaproxyConfigurationGroupsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(getServicesHaproxyConfigurationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
