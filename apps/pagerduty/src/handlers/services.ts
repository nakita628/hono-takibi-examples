import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesIdRoute,
  deleteServicesIdRulesRuleIdRoute,
  getServicesIdAuditRecordsRoute,
  getServicesIdCustomFieldsValuesRoute,
  getServicesIdEnablementsRoute,
  getServicesIdIntegrationsIntegrationIdRoute,
  getServicesIdRoute,
  getServicesIdRulesRoute,
  getServicesIdRulesRuleIdRoute,
  getServicesRoute,
  postServicesIdIntegrationsRoute,
  postServicesIdRulesConvertRoute,
  postServicesIdRulesRoute,
  postServicesRoute,
  putServicesIdCustomFieldsValuesRoute,
  putServicesIdEnablementsFeatureNameRoute,
  putServicesIdIntegrationsIntegrationIdRoute,
  putServicesIdRoute,
  putServicesIdRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesIdRulesConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdCustomFieldsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdCustomFieldsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdEnablementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdEnablementsFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
