import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConvaiConversationsConversationIdAnalysisEvaluationsRunRoute,
  postV1ConvaiConversationsConversationIdAnalysisRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsWorkspaceAnalyticsHandler = app
  .openapi(postV1ConvaiConversationsConversationIdAnalysisRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiConversationsConversationIdAnalysisEvaluationsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
