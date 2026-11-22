import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCopilotUsersAiUserIdInteractionHistoryRoute,
  deleteCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCallAiInsightIdRoute,
  deleteCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdRoute,
  deleteCopilotUsersAiUserIdRoute,
  getCopilotUsersAiUserIdInteractionHistoryGetAllEnterpriseInteractionsRoute,
  getCopilotUsersAiUserIdInteractionHistoryRoute,
  getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCallAiInsightIdRoute,
  getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCountRoute,
  getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsRoute,
  getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdRoute,
  getCopilotUsersAiUserIdOnlineMeetingsCountRoute,
  getCopilotUsersAiUserIdOnlineMeetingsRoute,
  getCopilotUsersAiUserIdRoute,
  getCopilotUsersCountRoute,
  getCopilotUsersRoute,
  patchCopilotUsersAiUserIdInteractionHistoryRoute,
  patchCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCallAiInsightIdRoute,
  patchCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdRoute,
  patchCopilotUsersAiUserIdRoute,
  postCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsRoute,
  postCopilotUsersAiUserIdOnlineMeetingsRoute,
  postCopilotUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const copilotAiUserHandler = app
  .openapi(getCopilotUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCopilotUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotUsersAiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotUsersAiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdInteractionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotUsersAiUserIdInteractionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotUsersAiUserIdInteractionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdInteractionHistoryGetAllEnterpriseInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCopilotUsersAiUserIdOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCallAiInsightIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCallAiInsightIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCallAiInsightIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCopilotUsersAiUserIdOnlineMeetingsAiOnlineMeetingIdAiInsightsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersAiUserIdOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCopilotUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
