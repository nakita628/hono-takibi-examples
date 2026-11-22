import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLineItemsIdRoute,
  getApiBillingProfilesIdRoute,
  getApiBillingProfilesRoute,
  getApiCommLogsIdRoute,
  getApiCommLogsRoute,
  getApiCustomInsurancePlanNamesIdRoute,
  getApiCustomInsurancePlanNamesRoute,
  getApiEligibilityChecksIdRoute,
  getApiEligibilityChecksRoute,
  getApiLineItemsIdRoute,
  getApiLineItemsRoute,
  getApiPatientPaymentLogIdRoute,
  getApiPatientPaymentLogRoute,
  getApiPatientPaymentsIdRoute,
  getApiPatientPaymentsRoute,
  getApiProceduresIdRoute,
  getApiProceduresRoute,
  getApiTransactionsIdRoute,
  getApiTransactionsRoute,
  patchApiCommLogsIdRoute,
  patchApiLineItemsIdRoute,
  postApiCommLogsRoute,
  postApiLineItemsRoute,
  postApiPatientPaymentsRoute,
  putApiCommLogsIdRoute,
  putApiLineItemsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getApiBillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCommLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCommLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomInsurancePlanNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomInsurancePlanNamesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEligibilityChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEligibilityChecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProceduresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
