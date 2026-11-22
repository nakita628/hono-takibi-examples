import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesRoute,
  getServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesRoute,
  getServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesRoute,
  putServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tcpRequestRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
