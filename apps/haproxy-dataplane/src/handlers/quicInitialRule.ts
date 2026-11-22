import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesRoute,
  getServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesRoute,
  postServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quicInitialRuleHandler = app
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
