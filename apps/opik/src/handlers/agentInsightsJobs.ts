import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateAgentInsightsJobsProjectIdRoute,
  patchV1PrivateAgentInsightsJobsProjectIdRoute,
  postV1PrivateAgentInsightsJobsProjectIdRoute,
  postV1PrivateAgentInsightsJobsProjectIdTriggerRoute,
  putV1PrivateAgentInsightsJobsProjectIdGuidanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentInsightsJobsHandler = app
  .openapi(getV1PrivateAgentInsightsJobsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentInsightsJobsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAgentInsightsJobsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentInsightsJobsProjectIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAgentInsightsJobsProjectIdGuidanceRoute, (c) => {
    throw new Error('Not implemented')
  })
