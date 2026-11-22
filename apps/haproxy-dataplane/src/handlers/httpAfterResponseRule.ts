import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpAfterResponseRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
