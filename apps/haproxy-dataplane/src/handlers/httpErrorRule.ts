import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpErrorRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
