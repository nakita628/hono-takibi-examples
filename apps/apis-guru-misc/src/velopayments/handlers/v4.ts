import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4PayeesPayeeIdRoute,
  getV4PayeesBatchBatchIdRoute,
  getV4PayeesDeltasRoute,
  getV4PayeesPayeeIdRoute,
  getV4PayeesPayorsPayorIdInvitationStatusRoute,
  getV4PayeesRoute,
  getV4PaymentauditFundingsRoute,
  getV4PaymentauditPaymentsPaymentIdRoute,
  getV4PaymentauditPaymentsRoute,
  getV4PaymentauditPayoutsPayoutIdRoute,
  getV4PaymentauditPayoutsRoute,
  getV4PaymentauditPayoutStatisticsRoute,
  getV4PaymentauditTransactionsRoute,
  getV4PaymentsDeltasRoute,
  postV4PayeesPayeeIdInviteRoute,
  postV4PayeesPayeeIdPayeeDetailsUpdateRoute,
  postV4PayeesPayeeIdRemoteIdUpdateRoute,
  postV4PayeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(getV4PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesPayorsPayorIdInvitationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesPayeeIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesPayeeIdPayeeDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesPayeeIdRemoteIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPayoutStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentsDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
