import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItvPurchasePlatformRoute,
  getItvEntitlementsCurrentRoute,
  getItvEntitlementsHistoryRoute,
  getItvFeatureFlagFeatureRoute,
  getItvHadEntitlementsRoute,
  getItvItemsummaryExternalIdRoute,
  getItvPageRoute,
  getItvPlansPlatformRoute,
  getItvProfileRecommendationListRoute,
  getItvProfileRoute,
  getItvPurchasePlatformRoute,
  getItvRokuPlansRoute,
  getItvSaveOfferRoute,
  getItvSubscriptionFullpricerenewalRoute,
  getItvSubscriptionstateRoute,
  getItvSubscriptionStatusPlatformRoute,
  getItvUpcominginvoiceRoute,
  getItvVoucherPlanIdVoucherIdRoute,
  postItvBillinghistoryPlatformRoute,
  postItvCardsPlatformRoute,
  postItvChangeemailRoute,
  postItvChangemarketingRoute,
  postItvDeleteaccountRoute,
  postItvGooglepaySubscriptionRoute,
  postItvItemsClipsRoute,
  postItvItemsDownloadableRoute,
  postItvPinauthorizationRoute,
  postItvPlanPlatformRoute,
  postItvProfiletokenRoute,
  postItvPurchasePlatformRoute,
  postItvPurchasePlatformStrongRoute,
  postItvPurchasePlatformWithofferRoute,
  postItvResubscribePlatformRoute,
  postItvRokuTransactionTransactionidRoute,
  postItvSaveOfferRoute,
  postItvVoucherPlatformRoute,
  putItvCardsPlatformRoute,
  putItvProfileRoute,
  putItvUpdateIntentStrongPlatformRoute,
  putItvUpdatePaymentStrongPlatformRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itvHandler = app
  .openapi(postItvBillinghistoryPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvCardsPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItvCardsPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvChangeemailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvChangemarketingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvDeleteaccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvEntitlementsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvEntitlementsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvFeatureFlagFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvGooglepaySubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvHadEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvItemsClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvItemsDownloadableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvItemsummaryExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvPinauthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvPlanPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvPlansPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItvProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvProfileRecommendationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvProfiletokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItvPurchasePlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvPurchasePlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvPurchasePlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvPurchasePlatformStrongRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvPurchasePlatformWithofferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvResubscribePlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvRokuPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvRokuTransactionTransactionidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvSaveOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvSaveOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvSubscriptionFullpricerenewalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvSubscriptionStatusPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvSubscriptionstateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvUpcominginvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItvUpdateIntentStrongPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItvUpdatePaymentStrongPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvVoucherPlanIdVoucherIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvVoucherPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
