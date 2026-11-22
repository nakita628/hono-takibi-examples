import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationLogForwardsParentNameDgramBindsNameRoute,
  getServicesHaproxyConfigurationLogForwardsParentNameDgramBindsNameRoute,
  getServicesHaproxyConfigurationLogForwardsParentNameDgramBindsRoute,
  postServicesHaproxyConfigurationLogForwardsParentNameDgramBindsRoute,
  putServicesHaproxyConfigurationLogForwardsParentNameDgramBindsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dgramBindHandler = app
  .openapi(getServicesHaproxyConfigurationLogForwardsParentNameDgramBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationLogForwardsParentNameDgramBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationLogForwardsParentNameDgramBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationLogForwardsParentNameDgramBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationLogForwardsParentNameDgramBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
