import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIDMembershipsRoute,
  deleteGroupsMessagesIDRoute,
  deletePositionsIDRoute,
  deleteWebhooksIDRoute,
  getAppsIDRoute,
  getAppsRoute,
  getAudiencesIDRoute,
  getAudiencesRoute,
  getAutocompletesRoute,
  getConversationsIDMessagesRoute,
  getConversationsIDRoute,
  getConversationsIDStatusesRoute,
  getConversationsStatusesRoute,
  getGroupsIDMembershipsRoute,
  getGroupsIDMessagesRoute,
  getGroupsIDRoute,
  getGroupsIDStatusesRoute,
  getGroupsMessagesIDMetadataCollectionsRoute,
  getGroupsMessagesIDMetadataRoute,
  getGroupsMessagesIDRoute,
  getGroupsRoute,
  getGroupsStatusesRoute,
  getIndustriesRoute,
  getMarkdownEmoticonsRoute,
  getMessagesIDMetadataCollectionsRoute,
  getMessagesIDMetadataRoute,
  getMessagesIDRoute,
  getUsersIDGroupsMessagesRoute,
  getUsersIDGroupsRoute,
  getUsersIDMetadataCollectionsRoute,
  getUsersIDMetadataRoute,
  getUsersIDPositionsRoute,
  getUsersIDRoute,
  getUsersIDSynergiesRoute,
  getUsersNearbyRoute,
  getUsersRoute,
  getUsersTildeRoute,
  getWebhooksRoute,
  patchConversationsIDStatusesRoute,
  patchGroupsIDMembershipsRoute,
  patchGroupsIDRoute,
  patchPositionsIDRoute,
  patchUsersIDSynergiesRoute,
  patchUsersTildeRoute,
  postAudiencesIDMembershipsRoute,
  postConversationsIDMessagesRoute,
  postConversationsIDSchedulesRoute,
  postConversationsIDSearchesRoute,
  postConversationsSchedulesRoute,
  postConversationsSearchesRoute,
  postGroupsIDMembershipsRoute,
  postGroupsIDMessagesRoute,
  postGroupsIDSchedulesRoute,
  postGroupsMessagesIDMetadataRoute,
  postGroupsMessagesMetadataFiltersRoute,
  postGroupsRoute,
  postGroupsSchedulesRoute,
  postMarkdownRoute,
  postMessagesIDMetadataRoute,
  postMessagesMetadataFiltersRoute,
  postPositionsRoute,
  postUsersIDMessagesRoute,
  postUsersIDMetadataRoute,
  postUsersInvitesRoute,
  postUsersMetadataFiltersRoute,
  postUsersSearchesRoute,
  postWebhooksRoute,
} from './routes'
import {
  deleteGroupsIDMembershipsRouteHandler,
  deleteGroupsMessagesIDRouteHandler,
  deletePositionsIDRouteHandler,
  deleteWebhooksIDRouteHandler,
  getAppsIDRouteHandler,
  getAppsRouteHandler,
  getAudiencesIDRouteHandler,
  getAudiencesRouteHandler,
  getAutocompletesRouteHandler,
  getConversationsIDMessagesRouteHandler,
  getConversationsIDRouteHandler,
  getConversationsIDStatusesRouteHandler,
  getConversationsStatusesRouteHandler,
  getGroupsIDMembershipsRouteHandler,
  getGroupsIDMessagesRouteHandler,
  getGroupsIDRouteHandler,
  getGroupsIDStatusesRouteHandler,
  getGroupsMessagesIDMetadataCollectionsRouteHandler,
  getGroupsMessagesIDMetadataRouteHandler,
  getGroupsMessagesIDRouteHandler,
  getGroupsRouteHandler,
  getGroupsStatusesRouteHandler,
  getIndustriesRouteHandler,
  getMarkdownEmoticonsRouteHandler,
  getMessagesIDMetadataCollectionsRouteHandler,
  getMessagesIDMetadataRouteHandler,
  getMessagesIDRouteHandler,
  getUsersIDGroupsMessagesRouteHandler,
  getUsersIDGroupsRouteHandler,
  getUsersIDMetadataCollectionsRouteHandler,
  getUsersIDMetadataRouteHandler,
  getUsersIDPositionsRouteHandler,
  getUsersIDRouteHandler,
  getUsersIDSynergiesRouteHandler,
  getUsersNearbyRouteHandler,
  getUsersRouteHandler,
  getUsersTildeRouteHandler,
  getWebhooksRouteHandler,
  patchConversationsIDStatusesRouteHandler,
  patchGroupsIDMembershipsRouteHandler,
  patchGroupsIDRouteHandler,
  patchPositionsIDRouteHandler,
  patchUsersIDSynergiesRouteHandler,
  patchUsersTildeRouteHandler,
  postAudiencesIDMembershipsRouteHandler,
  postConversationsIDMessagesRouteHandler,
  postConversationsIDSchedulesRouteHandler,
  postConversationsIDSearchesRouteHandler,
  postConversationsSchedulesRouteHandler,
  postConversationsSearchesRouteHandler,
  postGroupsIDMembershipsRouteHandler,
  postGroupsIDMessagesRouteHandler,
  postGroupsIDSchedulesRouteHandler,
  postGroupsMessagesIDMetadataRouteHandler,
  postGroupsMessagesMetadataFiltersRouteHandler,
  postGroupsRouteHandler,
  postGroupsSchedulesRouteHandler,
  postMarkdownRouteHandler,
  postMessagesIDMetadataRouteHandler,
  postMessagesMetadataFiltersRouteHandler,
  postPositionsRouteHandler,
  postUsersIDMessagesRouteHandler,
  postUsersIDMetadataRouteHandler,
  postUsersInvitesRouteHandler,
  postUsersMetadataFiltersRouteHandler,
  postUsersSearchesRouteHandler,
  postWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(getAppsIDRoute, getAppsIDRouteHandler)
  .openapi(getAudiencesRoute, getAudiencesRouteHandler)
  .openapi(getAudiencesIDRoute, getAudiencesIDRouteHandler)
  .openapi(postAudiencesIDMembershipsRoute, postAudiencesIDMembershipsRouteHandler)
  .openapi(getAutocompletesRoute, getAutocompletesRouteHandler)
  .openapi(postConversationsSchedulesRoute, postConversationsSchedulesRouteHandler)
  .openapi(postConversationsSearchesRoute, postConversationsSearchesRouteHandler)
  .openapi(getConversationsStatusesRoute, getConversationsStatusesRouteHandler)
  .openapi(getConversationsIDRoute, getConversationsIDRouteHandler)
  .openapi(getConversationsIDMessagesRoute, getConversationsIDMessagesRouteHandler)
  .openapi(postConversationsIDMessagesRoute, postConversationsIDMessagesRouteHandler)
  .openapi(postConversationsIDSchedulesRoute, postConversationsIDSchedulesRouteHandler)
  .openapi(postConversationsIDSearchesRoute, postConversationsIDSearchesRouteHandler)
  .openapi(getConversationsIDStatusesRoute, getConversationsIDStatusesRouteHandler)
  .openapi(patchConversationsIDStatusesRoute, patchConversationsIDStatusesRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(postGroupsMessagesMetadataFiltersRoute, postGroupsMessagesMetadataFiltersRouteHandler)
  .openapi(deleteGroupsMessagesIDRoute, deleteGroupsMessagesIDRouteHandler)
  .openapi(getGroupsMessagesIDRoute, getGroupsMessagesIDRouteHandler)
  .openapi(getGroupsMessagesIDMetadataRoute, getGroupsMessagesIDMetadataRouteHandler)
  .openapi(postGroupsMessagesIDMetadataRoute, postGroupsMessagesIDMetadataRouteHandler)
  .openapi(
    getGroupsMessagesIDMetadataCollectionsRoute,
    getGroupsMessagesIDMetadataCollectionsRouteHandler,
  )
  .openapi(postGroupsSchedulesRoute, postGroupsSchedulesRouteHandler)
  .openapi(getGroupsStatusesRoute, getGroupsStatusesRouteHandler)
  .openapi(getGroupsIDRoute, getGroupsIDRouteHandler)
  .openapi(patchGroupsIDRoute, patchGroupsIDRouteHandler)
  .openapi(deleteGroupsIDMembershipsRoute, deleteGroupsIDMembershipsRouteHandler)
  .openapi(getGroupsIDMembershipsRoute, getGroupsIDMembershipsRouteHandler)
  .openapi(patchGroupsIDMembershipsRoute, patchGroupsIDMembershipsRouteHandler)
  .openapi(postGroupsIDMembershipsRoute, postGroupsIDMembershipsRouteHandler)
  .openapi(getGroupsIDMessagesRoute, getGroupsIDMessagesRouteHandler)
  .openapi(postGroupsIDMessagesRoute, postGroupsIDMessagesRouteHandler)
  .openapi(postGroupsIDSchedulesRoute, postGroupsIDSchedulesRouteHandler)
  .openapi(getGroupsIDStatusesRoute, getGroupsIDStatusesRouteHandler)
  .openapi(getIndustriesRoute, getIndustriesRouteHandler)
  .openapi(postMarkdownRoute, postMarkdownRouteHandler)
  .openapi(getMarkdownEmoticonsRoute, getMarkdownEmoticonsRouteHandler)
  .openapi(postMessagesMetadataFiltersRoute, postMessagesMetadataFiltersRouteHandler)
  .openapi(getMessagesIDRoute, getMessagesIDRouteHandler)
  .openapi(getMessagesIDMetadataRoute, getMessagesIDMetadataRouteHandler)
  .openapi(postMessagesIDMetadataRoute, postMessagesIDMetadataRouteHandler)
  .openapi(getMessagesIDMetadataCollectionsRoute, getMessagesIDMetadataCollectionsRouteHandler)
  .openapi(postPositionsRoute, postPositionsRouteHandler)
  .openapi(deletePositionsIDRoute, deletePositionsIDRouteHandler)
  .openapi(patchPositionsIDRoute, patchPositionsIDRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersInvitesRoute, postUsersInvitesRouteHandler)
  .openapi(postUsersMetadataFiltersRoute, postUsersMetadataFiltersRouteHandler)
  .openapi(getUsersNearbyRoute, getUsersNearbyRouteHandler)
  .openapi(postUsersSearchesRoute, postUsersSearchesRouteHandler)
  .openapi(getUsersIDRoute, getUsersIDRouteHandler)
  .openapi(getUsersIDGroupsRoute, getUsersIDGroupsRouteHandler)
  .openapi(getUsersIDGroupsMessagesRoute, getUsersIDGroupsMessagesRouteHandler)
  .openapi(postUsersIDMessagesRoute, postUsersIDMessagesRouteHandler)
  .openapi(getUsersIDMetadataRoute, getUsersIDMetadataRouteHandler)
  .openapi(postUsersIDMetadataRoute, postUsersIDMetadataRouteHandler)
  .openapi(getUsersIDMetadataCollectionsRoute, getUsersIDMetadataCollectionsRouteHandler)
  .openapi(getUsersIDPositionsRoute, getUsersIDPositionsRouteHandler)
  .openapi(getUsersIDSynergiesRoute, getUsersIDSynergiesRouteHandler)
  .openapi(patchUsersIDSynergiesRoute, patchUsersIDSynergiesRouteHandler)
  .openapi(getUsersTildeRoute, getUsersTildeRouteHandler)
  .openapi(patchUsersTildeRoute, patchUsersTildeRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksIDRoute, deleteWebhooksIDRouteHandler)

export default app
