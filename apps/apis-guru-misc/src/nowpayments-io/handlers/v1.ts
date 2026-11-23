import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SubscriptionsSubIdRoute,
  getV1EstimateRoute,
  getV1MinAmountRoute,
  getV1PaymentIndexRoute,
  getV1PaymentPaymentIdRoute,
  getV1SubPartnerBalanceIdRoute,
  getV1SubPartnerRoute,
  getV1SubPartnerTransferIdRoute,
  getV1SubPartnerTransfersRoute,
  getV1SubscriptionsPlansPlanIdRoute,
  getV1SubscriptionsPlansRoute,
  getV1SubscriptionsRoute,
  getV1SubscriptionsSubIdRoute,
  patchV1SubscriptionsPlansPlanIdRoute,
  postV1PaymentIdUpdateMerchantEstimateRoute,
  postV1PayoutWithdrawalsIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1EstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MinAmountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIdUpdateMerchantEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayoutWithdrawalsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerBalanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscriptionsPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionsSubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
