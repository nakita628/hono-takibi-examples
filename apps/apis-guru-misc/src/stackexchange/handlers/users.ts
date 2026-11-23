import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersIdInboxRoute,
  getUsersIdInboxUnreadRoute,
  getUsersIdNotificationsRoute,
  getUsersIdNotificationsUnreadRoute,
  getUsersIdPrivilegesRoute,
  getUsersIdReputationHistoryFullRoute,
  getUsersIdsAnswersRoute,
  getUsersIdsAssociatedRoute,
  getUsersIdsBadgesRoute,
  getUsersIdsCommentsRoute,
  getUsersIdsCommentsToidRoute,
  getUsersIdsFavoritesRoute,
  getUsersIdsMentionedRoute,
  getUsersIdsMergesRoute,
  getUsersIdsQuestionsFeaturedRoute,
  getUsersIdsQuestionsNoAnswersRoute,
  getUsersIdsQuestionsRoute,
  getUsersIdsQuestionsUnacceptedRoute,
  getUsersIdsQuestionsUnansweredRoute,
  getUsersIdsReputationHistoryRoute,
  getUsersIdsReputationRoute,
  getUsersIdsRoute,
  getUsersIdsSuggestedEditsRoute,
  getUsersIdsTagsRoute,
  getUsersIdsTimelineRoute,
  getUsersIdTagsTagsTopAnswersRoute,
  getUsersIdTagsTagsTopQuestionsRoute,
  getUsersIdTopAnswerTagsRoute,
  getUsersIdTopQuestionTagsRoute,
  getUsersIdWritePermissionsRoute,
  getUsersModeratorsElectedRoute,
  getUsersModeratorsRoute,
  getUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersModeratorsElectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsAssociatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsCommentsToidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsMentionedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsQuestionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsQuestionsNoAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsQuestionsUnacceptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsQuestionsUnansweredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsReputationHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsSuggestedEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdsTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdInboxUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdNotificationsUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdReputationHistoryFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTagsTagsTopAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTagsTagsTopQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTopAnswerTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTopQuestionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdWritePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
