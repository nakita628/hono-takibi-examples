import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeAnswersRoute,
  getMeAssociatedRoute,
  getMeBadgesRoute,
  getMeCommentsRoute,
  getMeCommentsToIdRoute,
  getMeFavoritesRoute,
  getMeInboxRoute,
  getMeInboxUnreadRoute,
  getMeMentionedRoute,
  getMeMergesRoute,
  getMeNotificationsRoute,
  getMeNotificationsUnreadRoute,
  getMePrivilegesRoute,
  getMeQuestionsFeaturedRoute,
  getMeQuestionsNoAnswersRoute,
  getMeQuestionsRoute,
  getMeQuestionsUnacceptedRoute,
  getMeQuestionsUnansweredRoute,
  getMeReputationHistoryFullRoute,
  getMeReputationHistoryRoute,
  getMeReputationRoute,
  getMeRoute,
  getMeSuggestedEditsRoute,
  getMeTagsRoute,
  getMeTagsTagsTopAnswersRoute,
  getMeTagsTagsTopQuestionsRoute,
  getMeTimelineRoute,
  getMeTopAnswerTagsRoute,
  getMeTopQuestionTagsRoute,
  getMeWritePermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAssociatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCommentsToIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInboxUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMentionedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotificationsUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeQuestionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeQuestionsNoAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeQuestionsUnacceptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeQuestionsUnansweredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeReputationHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeReputationHistoryFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSuggestedEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTagsTagsTopAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTagsTagsTopQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTopAnswerTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTopQuestionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeWritePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
