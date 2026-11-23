import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSandboxBankIncomeFireWebhookRoute,
  postSandboxBankTransferFireWebhookRoute,
  postSandboxBankTransferSimulateRoute,
  postSandboxCraCashflowUpdatesUpdateRoute,
  postSandboxCraServicingSimulateRoute,
  postSandboxFdxConsentSeedRoute,
  postSandboxIncomeFireWebhookRoute,
  postSandboxItemApplicationSeedRoute,
  postSandboxItemFireWebhookRoute,
  postSandboxItemResetLoginRoute,
  postSandboxItemSetVerificationStatusRoute,
  postSandboxOauthSelectAccountsRoute,
  postSandboxPaymentProfileResetLoginRoute,
  postSandboxPaymentSimulateRoute,
  postSandboxProcessorTokenCreateRoute,
  postSandboxPublicTokenCreateRoute,
  postSandboxTransactionsCreateRoute,
  postSandboxTransferFireWebhookRoute,
  postSandboxTransferLedgerDepositSimulateRoute,
  postSandboxTransferLedgerSimulateAvailableRoute,
  postSandboxTransferLedgerWithdrawSimulateRoute,
  postSandboxTransferRefundSimulateRoute,
  postSandboxTransferSimulateRoute,
  postSandboxTransferSweepSimulateRoute,
  postSandboxTransferTestClockAdvanceRoute,
  postSandboxTransferTestClockCreateRoute,
  postSandboxTransferTestClockGetRoute,
  postSandboxTransferTestClockListRoute,
  postSandboxUserFireWebhookRoute,
  postSandboxUserResetLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxHandler = app
  .openapi(postSandboxTransactionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPublicTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxUserFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemApplicationSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxFdxConsentSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemSetVerificationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxUserResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankTransferSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferSweepSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferRefundSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferLedgerSimulateAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferLedgerDepositSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferLedgerWithdrawSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPaymentProfileResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPaymentSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankTransferFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxIncomeFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankIncomeFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxCraCashflowUpdatesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxCraServicingSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxOauthSelectAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
