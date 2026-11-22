import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchasesHandler = app
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
