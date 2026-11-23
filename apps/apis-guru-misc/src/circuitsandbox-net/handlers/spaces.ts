import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSpacesIdLabelsUnassignRoute,
  deleteSpacesIdRoute,
  deleteSpacesItemItemIdRoute,
  getSpacesDirectoryRoute,
  getSpacesExistsNameRoute,
  getSpacesFlaggedRoute,
  getSpacesIdParticipantsPendingRoute,
  getSpacesIdParticipantsRoute,
  getSpacesIdPinnedTopicsRoute,
  getSpacesIdSearchParticipantsToAddRoute,
  getSpacesIdSearchSpaceParticipantsRoute,
  getSpacesIdsRoute,
  getSpacesLikesItemIdRoute,
  getSpacesRoute,
  getSpacesSearchRecentRoute,
  getSpacesSearchStartBasicRoute,
  getSpacesSearchStartDetailedRoute,
  getSpacesSpaceIdParticipantImportIndexRoute,
  getSpacesSpaceIdTopicsRoute,
  getSpacesSpaceIdTopicTopicIdReplyRoute,
  getSpacesSpaceIdTopicTopicIdRoute,
  postSpacesCreateRoute,
  postSpacesIdJoinRoute,
  postSpacesIdLabelsAssignRoute,
  postSpacesIdLeaveRoute,
  postSpacesIdParticipantRemoveRoute,
  postSpacesIdParticipantRoute,
  postSpacesSpaceIdParticipantParticipantIdDenyRoute,
  postSpacesSpaceIdParticipantParticipantIdGrantRoute,
  postSpacesSpaceIdParticipantRequestRoute,
  postSpacesSpaceIdTopicRoute,
  postSpacesSpaceIdTopicTopicIdReplyRoute,
  putSpacesFlagItemIdRoute,
  putSpacesIdRoute,
  putSpacesIdUpdateTimestampRoute,
  putSpacesLikeItemIdRoute,
  putSpacesSearchAddRecentRoute,
  putSpacesSearchCancelSearchIdRoute,
  putSpacesSpaceIdParticipantRoute,
  putSpacesSpaceIdTopicTopicIdReplyReplyIdRoute,
  putSpacesSpaceIdTopicTopicIdRoute,
  putSpacesSpaceIdWelcomeboxContentRoute,
  putSpacesTopicIdPinRoute,
  putSpacesTopicIdUnpinRoute,
  putSpacesTopicTopicIdUpdateTagsRoute,
  putSpacesUnflagItemIdRoute,
  putSpacesUnlikeItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacesHandler = app
  .openapi(getSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesExistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesFlagItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesFlaggedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesLikeItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesLikesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesSearchAddRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesSearchCancelSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSearchRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSearchStartBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSearchStartDetailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesTopicTopicIdUpdateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesUnflagItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesUnlikeItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdLabelsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpacesIdLabelsUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdParticipantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesIdParticipantRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdParticipantsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdPinnedTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdSearchParticipantsToAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesIdSearchSpaceParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesIdUpdateTimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesSpaceIdParticipantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdParticipantImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdParticipantRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdParticipantParticipantIdDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdParticipantParticipantIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdTopicTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesSpaceIdTopicTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdTopicTopicIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpacesSpaceIdTopicTopicIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesSpaceIdTopicTopicIdReplyReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpacesSpaceIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesSpaceIdWelcomeboxContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesTopicIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpacesTopicIdUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
