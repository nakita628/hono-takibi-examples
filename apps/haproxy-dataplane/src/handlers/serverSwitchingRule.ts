import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverSwitchingRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
