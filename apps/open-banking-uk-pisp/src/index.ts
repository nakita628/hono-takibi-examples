import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticPaymentConsentsConsentIdFundsConfirmationRoute,
  getDomesticPaymentConsentsConsentIdRoute,
  getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute,
  getDomesticPaymentsDomesticPaymentIdRoute,
  getDomesticScheduledPaymentConsentsConsentIdRoute,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute,
  getDomesticStandingOrderConsentsConsentIdRoute,
  getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute,
  getDomesticStandingOrdersDomesticStandingOrderIdRoute,
  getFilePaymentConsentsConsentIdFileRoute,
  getFilePaymentConsentsConsentIdRoute,
  getFilePaymentsFilePaymentIdPaymentDetailsRoute,
  getFilePaymentsFilePaymentIdReportFileRoute,
  getFilePaymentsFilePaymentIdRoute,
  getInternationalPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalPaymentConsentsConsentIdRoute,
  getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute,
  getInternationalPaymentsInternationalPaymentIdRoute,
  getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalScheduledPaymentConsentsConsentIdRoute,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute,
  getInternationalStandingOrderConsentsConsentIdRoute,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute,
  postDomesticPaymentConsentsRoute,
  postDomesticPaymentsRoute,
  postDomesticScheduledPaymentConsentsRoute,
  postDomesticScheduledPaymentsRoute,
  postDomesticStandingOrderConsentsRoute,
  postDomesticStandingOrdersRoute,
  postFilePaymentConsentsConsentIdFileRoute,
  postFilePaymentConsentsRoute,
  postFilePaymentsRoute,
  postInternationalPaymentConsentsRoute,
  postInternationalPaymentsRoute,
  postInternationalScheduledPaymentConsentsRoute,
  postInternationalScheduledPaymentsRoute,
  postInternationalStandingOrderConsentsRoute,
  postInternationalStandingOrdersRoute,
} from './routes'
import {
  getDomesticPaymentConsentsConsentIdFundsConfirmationRouteHandler,
  getDomesticPaymentConsentsConsentIdRouteHandler,
  getDomesticPaymentsDomesticPaymentIdPaymentDetailsRouteHandler,
  getDomesticPaymentsDomesticPaymentIdRouteHandler,
  getDomesticScheduledPaymentConsentsConsentIdRouteHandler,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRouteHandler,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdRouteHandler,
  getDomesticStandingOrderConsentsConsentIdRouteHandler,
  getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRouteHandler,
  getDomesticStandingOrdersDomesticStandingOrderIdRouteHandler,
  getFilePaymentConsentsConsentIdFileRouteHandler,
  getFilePaymentConsentsConsentIdRouteHandler,
  getFilePaymentsFilePaymentIdPaymentDetailsRouteHandler,
  getFilePaymentsFilePaymentIdReportFileRouteHandler,
  getFilePaymentsFilePaymentIdRouteHandler,
  getInternationalPaymentConsentsConsentIdFundsConfirmationRouteHandler,
  getInternationalPaymentConsentsConsentIdRouteHandler,
  getInternationalPaymentsInternationalPaymentIdPaymentDetailsRouteHandler,
  getInternationalPaymentsInternationalPaymentIdRouteHandler,
  getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRouteHandler,
  getInternationalScheduledPaymentConsentsConsentIdRouteHandler,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRouteHandler,
  getInternationalScheduledPaymentsInternationalScheduledPaymentIdRouteHandler,
  getInternationalStandingOrderConsentsConsentIdRouteHandler,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRouteHandler,
  getInternationalStandingOrdersInternationalStandingOrderPaymentIdRouteHandler,
  postDomesticPaymentConsentsRouteHandler,
  postDomesticPaymentsRouteHandler,
  postDomesticScheduledPaymentConsentsRouteHandler,
  postDomesticScheduledPaymentsRouteHandler,
  postDomesticStandingOrderConsentsRouteHandler,
  postDomesticStandingOrdersRouteHandler,
  postFilePaymentConsentsConsentIdFileRouteHandler,
  postFilePaymentConsentsRouteHandler,
  postFilePaymentsRouteHandler,
  postInternationalPaymentConsentsRouteHandler,
  postInternationalPaymentsRouteHandler,
  postInternationalScheduledPaymentConsentsRouteHandler,
  postInternationalScheduledPaymentsRouteHandler,
  postInternationalStandingOrderConsentsRouteHandler,
  postInternationalStandingOrdersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDomesticPaymentConsentsRoute, postDomesticPaymentConsentsRouteHandler)
  .openapi(
    getDomesticPaymentConsentsConsentIdRoute,
    getDomesticPaymentConsentsConsentIdRouteHandler,
  )
  .openapi(
    getDomesticPaymentConsentsConsentIdFundsConfirmationRoute,
    getDomesticPaymentConsentsConsentIdFundsConfirmationRouteHandler,
  )
  .openapi(postDomesticPaymentsRoute, postDomesticPaymentsRouteHandler)
  .openapi(
    getDomesticPaymentsDomesticPaymentIdRoute,
    getDomesticPaymentsDomesticPaymentIdRouteHandler,
  )
  .openapi(
    getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute,
    getDomesticPaymentsDomesticPaymentIdPaymentDetailsRouteHandler,
  )
  .openapi(
    postDomesticScheduledPaymentConsentsRoute,
    postDomesticScheduledPaymentConsentsRouteHandler,
  )
  .openapi(
    getDomesticScheduledPaymentConsentsConsentIdRoute,
    getDomesticScheduledPaymentConsentsConsentIdRouteHandler,
  )
  .openapi(postDomesticScheduledPaymentsRoute, postDomesticScheduledPaymentsRouteHandler)
  .openapi(
    getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute,
    getDomesticScheduledPaymentsDomesticScheduledPaymentIdRouteHandler,
  )
  .openapi(
    getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute,
    getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRouteHandler,
  )
  .openapi(postDomesticStandingOrderConsentsRoute, postDomesticStandingOrderConsentsRouteHandler)
  .openapi(
    getDomesticStandingOrderConsentsConsentIdRoute,
    getDomesticStandingOrderConsentsConsentIdRouteHandler,
  )
  .openapi(postDomesticStandingOrdersRoute, postDomesticStandingOrdersRouteHandler)
  .openapi(
    getDomesticStandingOrdersDomesticStandingOrderIdRoute,
    getDomesticStandingOrdersDomesticStandingOrderIdRouteHandler,
  )
  .openapi(
    getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute,
    getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRouteHandler,
  )
  .openapi(postFilePaymentConsentsRoute, postFilePaymentConsentsRouteHandler)
  .openapi(getFilePaymentConsentsConsentIdRoute, getFilePaymentConsentsConsentIdRouteHandler)
  .openapi(
    postFilePaymentConsentsConsentIdFileRoute,
    postFilePaymentConsentsConsentIdFileRouteHandler,
  )
  .openapi(
    getFilePaymentConsentsConsentIdFileRoute,
    getFilePaymentConsentsConsentIdFileRouteHandler,
  )
  .openapi(postFilePaymentsRoute, postFilePaymentsRouteHandler)
  .openapi(getFilePaymentsFilePaymentIdRoute, getFilePaymentsFilePaymentIdRouteHandler)
  .openapi(
    getFilePaymentsFilePaymentIdPaymentDetailsRoute,
    getFilePaymentsFilePaymentIdPaymentDetailsRouteHandler,
  )
  .openapi(
    getFilePaymentsFilePaymentIdReportFileRoute,
    getFilePaymentsFilePaymentIdReportFileRouteHandler,
  )
  .openapi(postInternationalPaymentConsentsRoute, postInternationalPaymentConsentsRouteHandler)
  .openapi(
    getInternationalPaymentConsentsConsentIdRoute,
    getInternationalPaymentConsentsConsentIdRouteHandler,
  )
  .openapi(
    getInternationalPaymentConsentsConsentIdFundsConfirmationRoute,
    getInternationalPaymentConsentsConsentIdFundsConfirmationRouteHandler,
  )
  .openapi(postInternationalPaymentsRoute, postInternationalPaymentsRouteHandler)
  .openapi(
    getInternationalPaymentsInternationalPaymentIdRoute,
    getInternationalPaymentsInternationalPaymentIdRouteHandler,
  )
  .openapi(
    getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute,
    getInternationalPaymentsInternationalPaymentIdPaymentDetailsRouteHandler,
  )
  .openapi(
    postInternationalScheduledPaymentConsentsRoute,
    postInternationalScheduledPaymentConsentsRouteHandler,
  )
  .openapi(
    getInternationalScheduledPaymentConsentsConsentIdRoute,
    getInternationalScheduledPaymentConsentsConsentIdRouteHandler,
  )
  .openapi(
    getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute,
    getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRouteHandler,
  )
  .openapi(postInternationalScheduledPaymentsRoute, postInternationalScheduledPaymentsRouteHandler)
  .openapi(
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute,
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdRouteHandler,
  )
  .openapi(
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute,
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRouteHandler,
  )
  .openapi(
    postInternationalStandingOrderConsentsRoute,
    postInternationalStandingOrderConsentsRouteHandler,
  )
  .openapi(
    getInternationalStandingOrderConsentsConsentIdRoute,
    getInternationalStandingOrderConsentsConsentIdRouteHandler,
  )
  .openapi(postInternationalStandingOrdersRoute, postInternationalStandingOrdersRouteHandler)
  .openapi(
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute,
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdRouteHandler,
  )
  .openapi(
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute,
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRouteHandler,
  )

export default app
