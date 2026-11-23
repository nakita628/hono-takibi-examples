import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  deleteServicesCustomFieldsFieldIdRoute,
  deleteServicesIdRoute,
  deleteServicesIdRulesRuleIdRoute,
  getServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  getServicesCustomFieldsFieldIdFieldOptionsRoute,
  getServicesCustomFieldsFieldIdRoute,
  getServicesCustomFieldsRoute,
  getServicesIdAuditRecordsRoute,
  getServicesIdChangeEventsRoute,
  getServicesIdCustomFieldsValuesRoute,
  getServicesIdEnablementsRoute,
  getServicesIdIntegrationsIntegrationIdRoute,
  getServicesIdRoute,
  getServicesIdRulesRoute,
  getServicesIdRulesRuleIdRoute,
  getServicesRoute,
  postServicesCustomFieldsFieldIdFieldOptionsRoute,
  postServicesCustomFieldsRoute,
  postServicesIdIntegrationsRoute,
  postServicesIdRulesConvertRoute,
  postServicesIdRulesRoute,
  postServicesRoute,
  putServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  putServicesCustomFieldsFieldIdRoute,
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
  .openapi(getServicesIdChangeEventsRoute, (c) => {
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
  .openapi(postServicesCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
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
