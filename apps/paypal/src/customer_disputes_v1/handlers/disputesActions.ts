import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const disputesActionsHandler = app
  .openapi(postV1CustomerDisputesIdProvideEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdAppealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdAcceptClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdAdjudicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdRequireEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdEscalateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdSendMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdMakeOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdAcceptOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdDenyOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdAcknowledgeReturnItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerDisputesIdProvideSupportingInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
