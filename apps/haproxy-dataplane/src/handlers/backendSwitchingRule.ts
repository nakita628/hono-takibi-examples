import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesRoute,
  postServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backendSwitchingRuleHandler = app
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
