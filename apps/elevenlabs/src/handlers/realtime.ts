import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute,
  deleteV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute,
  getV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute,
  getV1ConvaiRealtimeConversationGroupsRoute,
  patchV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute,
  postV1ConvaiRealtimeClientSecretsRoute,
  postV1ConvaiRealtimeConversationGroupsRoute,
  putV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realtimeHandler = app
  .openapi(getV1ConvaiRealtimeConversationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiRealtimeConversationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiRealtimeConversationGroupsConversationGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConvaiRealtimeConversationsConversationIdConversationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiRealtimeClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
