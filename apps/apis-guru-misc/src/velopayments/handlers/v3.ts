import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3PayeesPayeeIdRoute,
  deleteV3PayoutsPayoutIdRoute,
  deleteV3PayoutsPayoutIdScheduleRoute,
  deleteV3SourceAccountsSourceAccountIdRoute,
  getV3PayeesBatchBatchIdRoute,
  getV3PayeesDeltasRoute,
  getV3PayeesPayeeIdRoute,
  getV3PayeesPayorsPayorIdInvitationStatusRoute,
  getV3PayeesRoute,
  getV3PaymentauditPaymentsPaymentIdRoute,
  getV3PaymentauditPaymentsRoute,
  getV3PaymentauditPayoutsPayoutIdRoute,
  getV3PaymentauditPayoutsRoute,
  getV3PaymentauditTransactionsRoute,
  getV3PayoutsPayoutIdPaymentsRoute,
  getV3PayoutsPayoutIdRoute,
  getV3SourceAccountsRoute,
  getV3SourceAccountsSourceAccountIdRoute,
  postV3PayeesPayeeIdInviteRoute,
  postV3PayeesPayeeIdPayeeDetailsUpdateRoute,
  postV3PayeesPayeeIdRemoteIdUpdateRoute,
  postV3PayeesRoute,
  postV3PayoutsPayoutIdQuoteRoute,
  postV3PayoutsPayoutIdRoute,
  postV3PayoutsPayoutIdScheduleRoute,
  postV3PayoutsRoute,
  postV3SourceAccountsSourceAccountIdFundingRequestRoute,
  postV3SourceAccountsSourceAccountIdNotificationsRoute,
  postV3SourceAccountsSourceAccountIdTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesPayorsPayorIdInvitationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesPayeeIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesPayeeIdPayeeDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesPayeeIdRemoteIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayoutsPayoutIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsPayoutIdQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3PayoutsPayoutIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsPayoutIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SourceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SourceAccountsSourceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SourceAccountsSourceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourceAccountsSourceAccountIdFundingRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourceAccountsSourceAccountIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourceAccountsSourceAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
