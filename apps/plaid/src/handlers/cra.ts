import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCraCheckReportBaseReportGetRoute,
  postCraCheckReportCashflowInsightsGetRoute,
  postCraCheckReportCreateRoute,
  postCraCheckReportIncomeInsightsGetRoute,
  postCraCheckReportLendScoreGetRoute,
  postCraCheckReportNetworkInsightsGetRoute,
  postCraCheckReportPartnerInsightsGetRoute,
  postCraCheckReportPdfGetRoute,
  postCraCheckReportVerificationGetRoute,
  postCraCheckReportVerificationPdfGetRoute,
  postCraCreditProfileReportGetRoute,
  postCraLoansApplicationsRegisterRoute,
  postCraLoansRegisterRoute,
  postCraLoansUnregisterRoute,
  postCraLoansUpdateRoute,
  postCraMonitoringInsightsGetRoute,
  postCraMonitoringInsightsSubscribeRoute,
  postCraMonitoringInsightsUnsubscribeRoute,
  postCraPartnerInsightsGetRoute,
  postCraReportCreateRoute,
  postCraReportGetRoute,
  postCraServicingSubscriptionCreateRoute,
  postCraServicingSubscriptionDeleteRoute,
  postCraServicingSubscriptionGetRoute,
  postCraServicingSubscriptionListRoute,
  postCraServicingSubscriptionUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const craHandler = app
  .openapi(postCraMonitoringInsightsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraMonitoringInsightsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraMonitoringInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraPartnerInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportIncomeInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportBaseReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportPartnerInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportCashflowInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportLendScoreGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportNetworkInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportVerificationPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansApplicationsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCreditProfileReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
