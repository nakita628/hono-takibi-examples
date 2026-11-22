import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationLogForwardsNameRoute,
  getServicesHaproxyConfigurationLogForwardsNameRoute,
  getServicesHaproxyConfigurationLogForwardsRoute,
  postServicesHaproxyConfigurationLogForwardsRoute,
  putServicesHaproxyConfigurationLogForwardsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logForwardHandler = app
  .openapi(getServicesHaproxyConfigurationLogForwardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationLogForwardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationLogForwardsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationLogForwardsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationLogForwardsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
