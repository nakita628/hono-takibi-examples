import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AgreementsEnduserIdIndexRoute,
  deleteApiV2PaymentsCreditorsIdIndexRoute,
  deleteApiV2PaymentsIdIndexRoute,
  deleteApiV2RequisitionsIdIndexRoute,
  getApiV2AccountsIdBalancesIndexRoute,
  getApiV2AccountsIdDetailsIndexRoute,
  getApiV2AccountsIdIndexRoute,
  getApiV2AccountsIdTransactionsIndexRoute,
  getApiV2AccountsPremiumIdTransactionsIndexRoute,
  getApiV2AgreementsEnduserIdIndexRoute,
  getApiV2AgreementsEnduserIndexRoute,
  getApiV2InstitutionsIdIndexRoute,
  getApiV2InstitutionsIndexRoute,
  getApiV2PaymentsAccountIndexRoute,
  getApiV2PaymentsCreditorsIdIndexRoute,
  getApiV2PaymentsCreditorsIndexRoute,
  getApiV2PaymentsFieldsInstitutionIdIndexRoute,
  getApiV2PaymentsIdIndexRoute,
  getApiV2PaymentsIndexRoute,
  getApiV2RequisitionsIdIndexRoute,
  getApiV2RequisitionsIndexRoute,
  postApiV2AgreementsEnduserIndexRoute,
  postApiV2PaymentsCreditorsIndexRoute,
  postApiV2PaymentsIndexRoute,
  postApiV2RequisitionsIndexRoute,
  postApiV2TokenNewIndexRoute,
  postApiV2TokenRefreshIndexRoute,
  putApiV2AgreementsEnduserIdAcceptIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2AccountsPremiumIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdBalancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdDetailsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgreementsEnduserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgreementsEnduserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgreementsEnduserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgreementsEnduserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgreementsEnduserIdAcceptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2InstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2InstitutionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PaymentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsCreditorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PaymentsCreditorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PaymentsCreditorsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsCreditorsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsFieldsInstitutionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PaymentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequisitionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RequisitionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RequisitionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequisitionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokenNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokenRefreshIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
