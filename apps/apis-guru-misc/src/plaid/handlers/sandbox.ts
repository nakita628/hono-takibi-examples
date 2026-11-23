import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSandboxBankTransferFireWebhookRoute,
  postSandboxBankTransferSimulateRoute,
  postSandboxIncomeFireWebhookRoute,
  postSandboxItemFireWebhookRoute,
  postSandboxItemResetLoginRoute,
  postSandboxItemSetVerificationStatusRoute,
  postSandboxOauthSelectAccountsRoute,
  postSandboxPaymentProfileResetLoginRoute,
  postSandboxProcessorTokenCreateRoute,
  postSandboxPublicTokenCreateRoute,
  postSandboxTransferFireWebhookRoute,
  postSandboxTransferRepaymentSimulateRoute,
  postSandboxTransferSimulateRoute,
  postSandboxTransferSweepSimulateRoute,
  postSandboxTransferTestClockAdvanceRoute,
  postSandboxTransferTestClockCreateRoute,
  postSandboxTransferTestClockGetRoute,
  postSandboxTransferTestClockListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxHandler = app
  .openapi(postSandboxBankTransferFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankTransferSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxIncomeFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemSetVerificationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxOauthSelectAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPaymentProfileResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPublicTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferRepaymentSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferSweepSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockListRoute, (c) => {
    throw new Error('Not implemented')
  })
