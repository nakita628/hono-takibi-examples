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
} from './routes'
import {
  deleteV1SubscriptionsSubIdRouteHandler,
  getV1EstimateRouteHandler,
  getV1MinAmountRouteHandler,
  getV1PaymentIndexRouteHandler,
  getV1PaymentPaymentIdRouteHandler,
  getV1SubPartnerBalanceIdRouteHandler,
  getV1SubPartnerRouteHandler,
  getV1SubPartnerTransferIdRouteHandler,
  getV1SubPartnerTransfersRouteHandler,
  getV1SubscriptionsPlansPlanIdRouteHandler,
  getV1SubscriptionsPlansRouteHandler,
  getV1SubscriptionsRouteHandler,
  getV1SubscriptionsSubIdRouteHandler,
  patchV1SubscriptionsPlansPlanIdRouteHandler,
  postV1PaymentIdUpdateMerchantEstimateRouteHandler,
  postV1PayoutWithdrawalsIdVerifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1EstimateRoute, getV1EstimateRouteHandler)
  .openapi(getV1MinAmountRoute, getV1MinAmountRouteHandler)
  .openapi(getV1PaymentIndexRoute, getV1PaymentIndexRouteHandler)
  .openapi(
    postV1PaymentIdUpdateMerchantEstimateRoute,
    postV1PaymentIdUpdateMerchantEstimateRouteHandler,
  )
  .openapi(getV1PaymentPaymentIdRoute, getV1PaymentPaymentIdRouteHandler)
  .openapi(postV1PayoutWithdrawalsIdVerifyRoute, postV1PayoutWithdrawalsIdVerifyRouteHandler)
  .openapi(getV1SubPartnerRoute, getV1SubPartnerRouteHandler)
  .openapi(getV1SubPartnerBalanceIdRoute, getV1SubPartnerBalanceIdRouteHandler)
  .openapi(getV1SubPartnerTransferIdRoute, getV1SubPartnerTransferIdRouteHandler)
  .openapi(getV1SubPartnerTransfersRoute, getV1SubPartnerTransfersRouteHandler)
  .openapi(getV1SubscriptionsRoute, getV1SubscriptionsRouteHandler)
  .openapi(getV1SubscriptionsPlansRoute, getV1SubscriptionsPlansRouteHandler)
  .openapi(getV1SubscriptionsPlansPlanIdRoute, getV1SubscriptionsPlansPlanIdRouteHandler)
  .openapi(patchV1SubscriptionsPlansPlanIdRoute, patchV1SubscriptionsPlansPlanIdRouteHandler)
  .openapi(deleteV1SubscriptionsSubIdRoute, deleteV1SubscriptionsSubIdRouteHandler)
  .openapi(getV1SubscriptionsSubIdRoute, getV1SubscriptionsSubIdRouteHandler)

export default app
