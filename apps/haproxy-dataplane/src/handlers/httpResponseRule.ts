import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpResponseRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
