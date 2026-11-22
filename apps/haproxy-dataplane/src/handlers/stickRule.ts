import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameStickRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameStickRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stickRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameStickRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameStickRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameStickRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
