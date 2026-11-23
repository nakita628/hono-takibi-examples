import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrderOrderIdRoute,
  getOrderOrderIdShippingFulfillmentFulfillmentIdRoute,
  getOrderOrderIdShippingFulfillmentRoute,
  getOrderRoute,
  getPaymentDisputePaymentDisputeIdActivityRoute,
  getPaymentDisputePaymentDisputeIdFetchEvidenceContentRoute,
  getPaymentDisputePaymentDisputeIdRoute,
  getPaymentDisputeSummaryRoute,
  postOrderOrderIdIssueRefundRoute,
  postOrderOrderIdShippingFulfillmentRoute,
  postPaymentDisputePaymentDisputeIdAcceptRoute,
  postPaymentDisputePaymentDisputeIdAddEvidenceRoute,
  postPaymentDisputePaymentDisputeIdContestRoute,
  postPaymentDisputePaymentDisputeIdUpdateEvidenceRoute,
  postPaymentDisputePaymentDisputeIdUploadEvidenceFileRoute,
} from './routes'
import {
  getOrderOrderIdRouteHandler,
  getOrderOrderIdShippingFulfillmentFulfillmentIdRouteHandler,
  getOrderOrderIdShippingFulfillmentRouteHandler,
  getOrderRouteHandler,
  getPaymentDisputePaymentDisputeIdActivityRouteHandler,
  getPaymentDisputePaymentDisputeIdFetchEvidenceContentRouteHandler,
  getPaymentDisputePaymentDisputeIdRouteHandler,
  getPaymentDisputeSummaryRouteHandler,
  postOrderOrderIdIssueRefundRouteHandler,
  postOrderOrderIdShippingFulfillmentRouteHandler,
  postPaymentDisputePaymentDisputeIdAcceptRouteHandler,
  postPaymentDisputePaymentDisputeIdAddEvidenceRouteHandler,
  postPaymentDisputePaymentDisputeIdContestRouteHandler,
  postPaymentDisputePaymentDisputeIdUpdateEvidenceRouteHandler,
  postPaymentDisputePaymentDisputeIdUploadEvidenceFileRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOrderRoute, getOrderRouteHandler)
  .openapi(getOrderOrderIdRoute, getOrderOrderIdRouteHandler)
  .openapi(getOrderOrderIdShippingFulfillmentRoute, getOrderOrderIdShippingFulfillmentRouteHandler)
  .openapi(
    postOrderOrderIdShippingFulfillmentRoute,
    postOrderOrderIdShippingFulfillmentRouteHandler,
  )
  .openapi(
    getOrderOrderIdShippingFulfillmentFulfillmentIdRoute,
    getOrderOrderIdShippingFulfillmentFulfillmentIdRouteHandler,
  )
  .openapi(postOrderOrderIdIssueRefundRoute, postOrderOrderIdIssueRefundRouteHandler)
  .openapi(getPaymentDisputePaymentDisputeIdRoute, getPaymentDisputePaymentDisputeIdRouteHandler)
  .openapi(
    postPaymentDisputePaymentDisputeIdAcceptRoute,
    postPaymentDisputePaymentDisputeIdAcceptRouteHandler,
  )
  .openapi(
    getPaymentDisputePaymentDisputeIdActivityRoute,
    getPaymentDisputePaymentDisputeIdActivityRouteHandler,
  )
  .openapi(
    postPaymentDisputePaymentDisputeIdAddEvidenceRoute,
    postPaymentDisputePaymentDisputeIdAddEvidenceRouteHandler,
  )
  .openapi(
    postPaymentDisputePaymentDisputeIdContestRoute,
    postPaymentDisputePaymentDisputeIdContestRouteHandler,
  )
  .openapi(
    getPaymentDisputePaymentDisputeIdFetchEvidenceContentRoute,
    getPaymentDisputePaymentDisputeIdFetchEvidenceContentRouteHandler,
  )
  .openapi(
    postPaymentDisputePaymentDisputeIdUpdateEvidenceRoute,
    postPaymentDisputePaymentDisputeIdUpdateEvidenceRouteHandler,
  )
  .openapi(
    postPaymentDisputePaymentDisputeIdUploadEvidenceFileRoute,
    postPaymentDisputePaymentDisputeIdUploadEvidenceFileRouteHandler,
  )
  .openapi(getPaymentDisputeSummaryRoute, getPaymentDisputeSummaryRouteHandler)

export default app
