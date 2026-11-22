import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DisputesDisputeIdEvidenceEvidenceIdRoute,
  getV2DisputesDisputeIdEvidenceEvidenceIdRoute,
  getV2DisputesDisputeIdEvidenceRoute,
  getV2DisputesDisputeIdRoute,
  getV2DisputesRoute,
  postV2DisputesDisputeIdAcceptRoute,
  postV2DisputesDisputeIdEvidenceTextRoute,
  postV2DisputesDisputeIdSubmitEvidenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app
  .openapi(getV2DisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisputesDisputeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeIdEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisputesDisputeIdEvidenceTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DisputesDisputeIdEvidenceEvidenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeIdEvidenceEvidenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisputesDisputeIdSubmitEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
