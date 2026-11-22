import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AgentSessionsRoute,
  getV1AgentSessionsSessionIdMessagesRoute,
  getV1AgentSessionsSessionIdRoute,
  patchV1AgentSessionsSessionIdRoute,
  postAgentsServerSessionsSessionIdChatRoute,
  postV1AgentSessionsRoute,
  postV1AgentSessionsSessionIdChatRoute,
  postV1AgentSessionsSessionIdCompactRoute,
  postV1AgentSessionsSessionIdToolApprovalsRoute,
  postV1AgentSessionsSessionIdToolOutputsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(postAgentsServerSessionsSessionIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AgentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentSessionsSessionIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdCompactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdToolOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdToolApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentSessionsSessionIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
