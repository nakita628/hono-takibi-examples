import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesRoute,
  postServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const forceBeSwitchHandler = app
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
