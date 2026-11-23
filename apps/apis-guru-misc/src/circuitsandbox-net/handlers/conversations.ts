import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsCommunityConvIdParticipantsRoute,
  deleteConversationsConvIdArchiveRoute,
  deleteConversationsConvIdFavoriteRoute,
  deleteConversationsConvIdLabelLabelIdRoute,
  deleteConversationsConvIdMessagesItemIdFlagRoute,
  deleteConversationsConvIdMessagesItemIdLikeRoute,
  deleteConversationsConvIdMessagesItemIdRoute,
  deleteConversationsConvIdModeratorsRoute,
  deleteConversationsConvIdPinsItemIdRoute,
  deleteConversationsGroupConvIdParticipantsRoute,
  getConversationsByIdsRoute,
  getConversationsCommunityRoute,
  getConversationsConversationdetailsRoute,
  getConversationsConvIdConversationdetailsRoute,
  getConversationsConvIdItemsRoute,
  getConversationsConvIdMessagesFlagRoute,
  getConversationsConvIdParticipantsRoute,
  getConversationsConvIdPinsRoute,
  getConversationsConvIdRoute,
  getConversationsDirectRoute,
  getConversationsFavoriteRoute,
  getConversationsLabelLabelIdRoute,
  getConversationsMessagesFlagRoute,
  getConversationsMessagesItemIdRoute,
  getConversationsResolveinvitetokenRoute,
  getConversationsRoute,
  getConversationsSearchRoute,
  postConversationsCommunityConvIdJoinRoute,
  postConversationsCommunityConvIdParticipantsRoute,
  postConversationsCommunityRoute,
  postConversationsConvIdArchiveRoute,
  postConversationsConvIdFavoriteRoute,
  postConversationsConvIdLabelRoute,
  postConversationsConvIdMessagesItemIdFlagRoute,
  postConversationsConvIdMessagesItemIdLikeRoute,
  postConversationsConvIdMessagesItemIdRoute,
  postConversationsConvIdMessagesRoute,
  postConversationsConvIdModeratorsRoute,
  postConversationsConvIdPinsItemIdRoute,
  postConversationsDirectRoute,
  postConversationsGroupConvIdParticipantsRoute,
  postConversationsGroupRoute,
  postConversationsModerateConvIdRoute,
  postConversationsUnmoderateConvIdRoute,
  putConversationsCommunityConvIdRoute,
  putConversationsConvIdMessagesItemIdRoute,
  putConversationsGroupConvIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsCommunityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCommunityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsCommunityConvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCommunityConvIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsCommunityConvIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCommunityConvIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsDirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsDirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsGroupConvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsGroupConvIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsGroupConvIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsLabelLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsMessagesFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsMessagesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsModerateConvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsResolveinvitetokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsUnmoderateConvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConvIdConversationdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConvIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdLabelLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConvIdMessagesFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdMessagesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdMessagesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConvIdMessagesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdMessagesItemIdFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdMessagesItemIdFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdMessagesItemIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdMessagesItemIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConvIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConvIdPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConvIdPinsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConvIdPinsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
