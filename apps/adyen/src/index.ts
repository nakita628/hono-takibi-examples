import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoredPaymentMethodsStoredPaymentMethodIdRoute,
  getPaymentLinksLinkIdRoute,
  getSessionsSessionIdRoute,
  getStoredPaymentMethodsRoute,
  patchPaymentLinksLinkIdRoute,
  postApplePaySessionsRoute,
  postCancelsRoute,
  postCardDetailsRoute,
  postDonationCampaignsRoute,
  postDonationsRoute,
  postForwardRoute,
  postOrdersCancelRoute,
  postOrdersRoute,
  postOriginKeysRoute,
  postPaymentLinksRoute,
  postPaymentMethodsBalanceRoute,
  postPaymentMethodsRoute,
  postPaymentsDetailsRoute,
  postPaymentsPaymentPspReferenceAmountUpdatesRoute,
  postPaymentsPaymentPspReferenceCancelsRoute,
  postPaymentsPaymentPspReferenceCapturesRoute,
  postPaymentsPaymentPspReferenceRefundsRoute,
  postPaymentsPaymentPspReferenceReversalsRoute,
  postPaymentsRoute,
  postPaypalUpdateOrderRoute,
  postSessionsRoute,
  postStoredPaymentMethodsRoute,
  postValidateShopperIdRoute,
} from './routes'
import {
  deleteStoredPaymentMethodsStoredPaymentMethodIdRouteHandler,
  getPaymentLinksLinkIdRouteHandler,
  getSessionsSessionIdRouteHandler,
  getStoredPaymentMethodsRouteHandler,
  patchPaymentLinksLinkIdRouteHandler,
  postApplePaySessionsRouteHandler,
  postCancelsRouteHandler,
  postCardDetailsRouteHandler,
  postDonationCampaignsRouteHandler,
  postDonationsRouteHandler,
  postForwardRouteHandler,
  postOrdersCancelRouteHandler,
  postOrdersRouteHandler,
  postOriginKeysRouteHandler,
  postPaymentLinksRouteHandler,
  postPaymentMethodsBalanceRouteHandler,
  postPaymentMethodsRouteHandler,
  postPaymentsDetailsRouteHandler,
  postPaymentsPaymentPspReferenceAmountUpdatesRouteHandler,
  postPaymentsPaymentPspReferenceCancelsRouteHandler,
  postPaymentsPaymentPspReferenceCapturesRouteHandler,
  postPaymentsPaymentPspReferenceRefundsRouteHandler,
  postPaymentsPaymentPspReferenceReversalsRouteHandler,
  postPaymentsRouteHandler,
  postPaypalUpdateOrderRouteHandler,
  postSessionsRouteHandler,
  postStoredPaymentMethodsRouteHandler,
  postValidateShopperIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApplePaySessionsRoute, postApplePaySessionsRouteHandler)
  .openapi(postCancelsRoute, postCancelsRouteHandler)
  .openapi(postCardDetailsRoute, postCardDetailsRouteHandler)
  .openapi(postDonationCampaignsRoute, postDonationCampaignsRouteHandler)
  .openapi(postDonationsRoute, postDonationsRouteHandler)
  .openapi(postForwardRoute, postForwardRouteHandler)
  .openapi(postOrdersRoute, postOrdersRouteHandler)
  .openapi(postOrdersCancelRoute, postOrdersCancelRouteHandler)
  .openapi(postOriginKeysRoute, postOriginKeysRouteHandler)
  .openapi(postPaymentLinksRoute, postPaymentLinksRouteHandler)
  .openapi(getPaymentLinksLinkIdRoute, getPaymentLinksLinkIdRouteHandler)
  .openapi(patchPaymentLinksLinkIdRoute, patchPaymentLinksLinkIdRouteHandler)
  .openapi(postPaymentMethodsRoute, postPaymentMethodsRouteHandler)
  .openapi(postPaymentMethodsBalanceRoute, postPaymentMethodsBalanceRouteHandler)
  .openapi(postPaymentsRoute, postPaymentsRouteHandler)
  .openapi(postPaymentsDetailsRoute, postPaymentsDetailsRouteHandler)
  .openapi(
    postPaymentsPaymentPspReferenceAmountUpdatesRoute,
    postPaymentsPaymentPspReferenceAmountUpdatesRouteHandler,
  )
  .openapi(
    postPaymentsPaymentPspReferenceCancelsRoute,
    postPaymentsPaymentPspReferenceCancelsRouteHandler,
  )
  .openapi(
    postPaymentsPaymentPspReferenceCapturesRoute,
    postPaymentsPaymentPspReferenceCapturesRouteHandler,
  )
  .openapi(
    postPaymentsPaymentPspReferenceRefundsRoute,
    postPaymentsPaymentPspReferenceRefundsRouteHandler,
  )
  .openapi(
    postPaymentsPaymentPspReferenceReversalsRoute,
    postPaymentsPaymentPspReferenceReversalsRouteHandler,
  )
  .openapi(postPaypalUpdateOrderRoute, postPaypalUpdateOrderRouteHandler)
  .openapi(postSessionsRoute, postSessionsRouteHandler)
  .openapi(getSessionsSessionIdRoute, getSessionsSessionIdRouteHandler)
  .openapi(getStoredPaymentMethodsRoute, getStoredPaymentMethodsRouteHandler)
  .openapi(postStoredPaymentMethodsRoute, postStoredPaymentMethodsRouteHandler)
  .openapi(
    deleteStoredPaymentMethodsStoredPaymentMethodIdRoute,
    deleteStoredPaymentMethodsStoredPaymentMethodIdRouteHandler,
  )
  .openapi(postValidateShopperIdRoute, postValidateShopperIdRouteHandler)

export default app
