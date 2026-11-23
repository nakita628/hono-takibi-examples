import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBetaCashAdvanceIncomeInsightsV1GetRoute,
  postBetaCreditV1BankEmploymentGetRoute,
  postBetaEwaReportV1GetRoute,
  postBetaIssuesV1GetRoute,
  postBetaIssuesV1ListRoute,
  postBetaIssuesV1MatchRoute,
  postBetaIssuesV1SubscribeRoute,
  postBetaIssuesV1UnsubscribeRoute,
  postBetaPartnerCustomerV1CreateRoute,
  postBetaPartnerCustomerV1EnableRoute,
  postBetaPartnerCustomerV1GetRoute,
  postBetaPartnerCustomerV1UpdateRoute,
  postBetaTransactionsRulesV1CreateRoute,
  postBetaTransactionsRulesV1ListRoute,
  postBetaTransactionsRulesV1RemoveRoute,
  postBetaTransactionsUserInsightsV1GetRoute,
  postBetaWebhookEventsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaHandler = app
  .openapi(postBetaWebhookEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaCreditV1BankEmploymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1CreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1ListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1RemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsUserInsightsV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaEwaReportV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaCashAdvanceIncomeInsightsV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1ListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1MatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1SubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1UnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1CreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1UpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1EnableRoute, (c) => {
    throw new Error('Not implemented')
  })
