import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesRoute,
  postServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpRequestRuleHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
