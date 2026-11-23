import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DeltasFundingsRoute,
  getV1DeltasPaymentsRoute,
  getV1FundingsFundingIdRoute,
  getV1PaymentauditFundingsRoute,
  getV1PaymentauditPayoutStatisticsRoute,
  getV1PaymentChannelRulesRoute,
  getV1PayorLinksRoute,
  getV1PayorsPayorIdBrandingRoute,
  getV1PayorsPayorIdRoute,
  getV1SupportedCountriesRoute,
  getV1WebhooksRoute,
  getV1WebhooksWebhookIdRoute,
  postV1AuthenticateRoute,
  postV1LogoutRoute,
  postV1PasswordResetRoute,
  postV1PaymentsPaymentIdWithdrawRoute,
  postV1PayorLinksRoute,
  postV1PayorsPayorIdApplicationsApplicationIdKeysRoute,
  postV1PayorsPayorIdApplicationsRoute,
  postV1PayorsPayorIdBrandingLogosRoute,
  postV1PayorsPayorIdReminderEmailsUpdateRoute,
  postV1SourceAccountsSourceAccountIdNotificationsRoute,
  postV1ValidateRoute,
  postV1WebhooksRoute,
  postV1WebhooksWebhookIdPingRoute,
  postV1WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeltasFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeltasPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FundingsFundingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentChannelRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentauditFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentauditPayoutStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPaymentIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayorLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayorsPayorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdApplicationsApplicationIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayorsPayorIdBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdBrandingLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdReminderEmailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceAccountsSourceAccountIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SupportedCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
