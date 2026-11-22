import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDisputesDisputeIdRoute,
  getApiDisputesRoute,
  postApiDisputesDisputeIdAcceptRoute,
  postApiDisputesDisputeIdChallengeRoute,
  postApiDisputesDisputeIdEvidencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app
  .openapi(getApiDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDisputesDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisputesDisputeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisputesDisputeIdEvidencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisputesDisputeIdChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
