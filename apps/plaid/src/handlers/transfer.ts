import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTransferAuthorizationCancelRoute,
  postTransferAuthorizationCreateRoute,
  postTransferBalanceGetRoute,
  postTransferCancelRoute,
  postTransferCapabilitiesGetRoute,
  postTransferConfigurationGetRoute,
  postTransferCreateRoute,
  postTransferDiligenceDocumentUploadRoute,
  postTransferDiligenceSubmitRoute,
  postTransferEventListRoute,
  postTransferEventSyncRoute,
  postTransferGetRoute,
  postTransferIntentCreateRoute,
  postTransferIntentGetRoute,
  postTransferLedgerDepositRoute,
  postTransferLedgerDistributeRoute,
  postTransferLedgerEventListRoute,
  postTransferLedgerGetRoute,
  postTransferLedgerWithdrawRoute,
  postTransferListRoute,
  postTransferMetricsGetRoute,
  postTransferMigrateAccountRoute,
  postTransferOriginatorCreateRoute,
  postTransferOriginatorFundingAccountCreateRoute,
  postTransferOriginatorFundingAccountUpdateRoute,
  postTransferOriginatorGetRoute,
  postTransferOriginatorListRoute,
  postTransferPlatformOriginatorCreateRoute,
  postTransferPlatformPersonCreateRoute,
  postTransferPlatformRequirementSubmitRoute,
  postTransferQuestionnaireCreateRoute,
  postTransferRecurringCancelRoute,
  postTransferRecurringCreateRoute,
  postTransferRecurringGetRoute,
  postTransferRecurringListRoute,
  postTransferRefundCancelRoute,
  postTransferRefundCreateRoute,
  postTransferRefundGetRoute,
  postTransferRepaymentListRoute,
  postTransferRepaymentReturnListRoute,
  postTransferReturnRecoverRoute,
  postTransferSweepGetRoute,
  postTransferSweepListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferHandler = app
  .openapi(postTransferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferAuthorizationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferAuthorizationCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCapabilitiesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferConfigurationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerDistributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorFundingAccountUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorFundingAccountCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferMetricsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferEventSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferSweepGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferSweepListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferMigrateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferIntentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferIntentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRepaymentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRepaymentReturnListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferPlatformRequirementSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferQuestionnaireCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferDiligenceSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferDiligenceDocumentUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferReturnRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferPlatformOriginatorCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferPlatformPersonCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
