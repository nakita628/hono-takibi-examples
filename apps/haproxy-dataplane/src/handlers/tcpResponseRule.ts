import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesRoute,
  getServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesRoute,
  putServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tcpResponseRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
