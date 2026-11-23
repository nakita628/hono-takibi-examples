import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CustomerDisputesIdRoute,
  getV1CustomerDisputesRoute,
  patchV1CustomerDisputesIdRoute,
  postV1CustomerDisputesIdAcceptClaimRoute,
  postV1CustomerDisputesIdAcceptOfferRoute,
  postV1CustomerDisputesIdAcknowledgeReturnItemRoute,
  postV1CustomerDisputesIdAdjudicateRoute,
  postV1CustomerDisputesIdAppealRoute,
  postV1CustomerDisputesIdDenyOfferRoute,
  postV1CustomerDisputesIdEscalateRoute,
  postV1CustomerDisputesIdMakeOfferRoute,
  postV1CustomerDisputesIdProvideEvidenceRoute,
  postV1CustomerDisputesIdProvideSupportingInfoRoute,
  postV1CustomerDisputesIdRequireEvidenceRoute,
  postV1CustomerDisputesIdSendMessageRoute,
} from './routes'
import {
  getV1CustomerDisputesIdRouteHandler,
  getV1CustomerDisputesRouteHandler,
  patchV1CustomerDisputesIdRouteHandler,
  postV1CustomerDisputesIdAcceptClaimRouteHandler,
  postV1CustomerDisputesIdAcceptOfferRouteHandler,
  postV1CustomerDisputesIdAcknowledgeReturnItemRouteHandler,
  postV1CustomerDisputesIdAdjudicateRouteHandler,
  postV1CustomerDisputesIdAppealRouteHandler,
  postV1CustomerDisputesIdDenyOfferRouteHandler,
  postV1CustomerDisputesIdEscalateRouteHandler,
  postV1CustomerDisputesIdMakeOfferRouteHandler,
  postV1CustomerDisputesIdProvideEvidenceRouteHandler,
  postV1CustomerDisputesIdProvideSupportingInfoRouteHandler,
  postV1CustomerDisputesIdRequireEvidenceRouteHandler,
  postV1CustomerDisputesIdSendMessageRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1CustomerDisputesRoute, getV1CustomerDisputesRouteHandler)
  .openapi(getV1CustomerDisputesIdRoute, getV1CustomerDisputesIdRouteHandler)
  .openapi(patchV1CustomerDisputesIdRoute, patchV1CustomerDisputesIdRouteHandler)
  .openapi(
    postV1CustomerDisputesIdProvideEvidenceRoute,
    postV1CustomerDisputesIdProvideEvidenceRouteHandler,
  )
  .openapi(postV1CustomerDisputesIdAppealRoute, postV1CustomerDisputesIdAppealRouteHandler)
  .openapi(
    postV1CustomerDisputesIdAcceptClaimRoute,
    postV1CustomerDisputesIdAcceptClaimRouteHandler,
  )
  .openapi(postV1CustomerDisputesIdAdjudicateRoute, postV1CustomerDisputesIdAdjudicateRouteHandler)
  .openapi(
    postV1CustomerDisputesIdRequireEvidenceRoute,
    postV1CustomerDisputesIdRequireEvidenceRouteHandler,
  )
  .openapi(postV1CustomerDisputesIdEscalateRoute, postV1CustomerDisputesIdEscalateRouteHandler)
  .openapi(
    postV1CustomerDisputesIdSendMessageRoute,
    postV1CustomerDisputesIdSendMessageRouteHandler,
  )
  .openapi(postV1CustomerDisputesIdMakeOfferRoute, postV1CustomerDisputesIdMakeOfferRouteHandler)
  .openapi(
    postV1CustomerDisputesIdAcceptOfferRoute,
    postV1CustomerDisputesIdAcceptOfferRouteHandler,
  )
  .openapi(postV1CustomerDisputesIdDenyOfferRoute, postV1CustomerDisputesIdDenyOfferRouteHandler)
  .openapi(
    postV1CustomerDisputesIdAcknowledgeReturnItemRoute,
    postV1CustomerDisputesIdAcknowledgeReturnItemRouteHandler,
  )
  .openapi(
    postV1CustomerDisputesIdProvideSupportingInfoRoute,
    postV1CustomerDisputesIdProvideSupportingInfoRouteHandler,
  )

export default app
