import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccessTokensAccessTokensInvalidateRoute,
  getAccessTokensAccessTokensRoute,
  getAnswersIdsCommentsRoute,
  getAnswersIdsRoute,
  getAnswersRoute,
  getAppsAccessTokensDeAuthenticateRoute,
  getBadgesIdsRecipientsRoute,
  getBadgesIdsRoute,
  getBadgesNameRoute,
  getBadgesRecipientsRoute,
  getBadgesRoute,
  getBadgesTagsRoute,
  getCommentsIdsRoute,
  getCommentsRoute,
  getErrorsIdRoute,
  getErrorsRoute,
  getEventsRoute,
  getFiltersCreateRoute,
  getFiltersFiltersRoute,
  getInboxRoute,
  getInboxUnreadRoute,
  getInfoRoute,
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
  getNotificationsRoute,
  getNotificationsUnreadRoute,
  getPostsIdsCommentsRoute,
  getPostsIdsRevisionsRoute,
  getPostsIdsRoute,
  getPostsIdsSuggestedEditsRoute,
  getPostsRoute,
  getPrivilegesRoute,
  getQuestionsFeaturedRoute,
  getQuestionsIdsAnswersRoute,
  getQuestionsIdsCommentsRoute,
  getQuestionsIdsLinkedRoute,
  getQuestionsIdsRelatedRoute,
  getQuestionsIdsRoute,
  getQuestionsIdsTimelineRoute,
  getQuestionsNoAnswersRoute,
  getQuestionsRoute,
  getQuestionsUnansweredRoute,
  getRevisionsIdsRoute,
  getSearchAdvancedRoute,
  getSearchRoute,
  getSimilarRoute,
  getSitesRoute,
  getSuggestedEditsIdsRoute,
  getSuggestedEditsRoute,
  getTagsModeratorOnlyRoute,
  getTagsRequiredRoute,
  getTagsRoute,
  getTagsSynonymsRoute,
  getTagsTagsFaqRoute,
  getTagsTagsInfoRoute,
  getTagsTagsRelatedRoute,
  getTagsTagsSynonymsRoute,
  getTagsTagsWikisRoute,
  getTagsTagTopAnswerersPeriodRoute,
  getTagsTagTopAskersPeriodRoute,
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
  postCommentsIdDeleteRoute,
  postCommentsIdEditRoute,
  postPostsIdCommentsAddRoute,
} from './routes'
import {
  getAccessTokensAccessTokensInvalidateRouteHandler,
  getAccessTokensAccessTokensRouteHandler,
  getAnswersIdsCommentsRouteHandler,
  getAnswersIdsRouteHandler,
  getAnswersRouteHandler,
  getAppsAccessTokensDeAuthenticateRouteHandler,
  getBadgesIdsRecipientsRouteHandler,
  getBadgesIdsRouteHandler,
  getBadgesNameRouteHandler,
  getBadgesRecipientsRouteHandler,
  getBadgesRouteHandler,
  getBadgesTagsRouteHandler,
  getCommentsIdsRouteHandler,
  getCommentsRouteHandler,
  getErrorsIdRouteHandler,
  getErrorsRouteHandler,
  getEventsRouteHandler,
  getFiltersCreateRouteHandler,
  getFiltersFiltersRouteHandler,
  getInboxRouteHandler,
  getInboxUnreadRouteHandler,
  getInfoRouteHandler,
  getMeAnswersRouteHandler,
  getMeAssociatedRouteHandler,
  getMeBadgesRouteHandler,
  getMeCommentsRouteHandler,
  getMeCommentsToIdRouteHandler,
  getMeFavoritesRouteHandler,
  getMeInboxRouteHandler,
  getMeInboxUnreadRouteHandler,
  getMeMentionedRouteHandler,
  getMeMergesRouteHandler,
  getMeNotificationsRouteHandler,
  getMeNotificationsUnreadRouteHandler,
  getMePrivilegesRouteHandler,
  getMeQuestionsFeaturedRouteHandler,
  getMeQuestionsNoAnswersRouteHandler,
  getMeQuestionsRouteHandler,
  getMeQuestionsUnacceptedRouteHandler,
  getMeQuestionsUnansweredRouteHandler,
  getMeReputationHistoryFullRouteHandler,
  getMeReputationHistoryRouteHandler,
  getMeReputationRouteHandler,
  getMeRouteHandler,
  getMeSuggestedEditsRouteHandler,
  getMeTagsRouteHandler,
  getMeTagsTagsTopAnswersRouteHandler,
  getMeTagsTagsTopQuestionsRouteHandler,
  getMeTimelineRouteHandler,
  getMeTopAnswerTagsRouteHandler,
  getMeTopQuestionTagsRouteHandler,
  getMeWritePermissionsRouteHandler,
  getNotificationsRouteHandler,
  getNotificationsUnreadRouteHandler,
  getPostsIdsCommentsRouteHandler,
  getPostsIdsRevisionsRouteHandler,
  getPostsIdsRouteHandler,
  getPostsIdsSuggestedEditsRouteHandler,
  getPostsRouteHandler,
  getPrivilegesRouteHandler,
  getQuestionsFeaturedRouteHandler,
  getQuestionsIdsAnswersRouteHandler,
  getQuestionsIdsCommentsRouteHandler,
  getQuestionsIdsLinkedRouteHandler,
  getQuestionsIdsRelatedRouteHandler,
  getQuestionsIdsRouteHandler,
  getQuestionsIdsTimelineRouteHandler,
  getQuestionsNoAnswersRouteHandler,
  getQuestionsRouteHandler,
  getQuestionsUnansweredRouteHandler,
  getRevisionsIdsRouteHandler,
  getSearchAdvancedRouteHandler,
  getSearchRouteHandler,
  getSimilarRouteHandler,
  getSitesRouteHandler,
  getSuggestedEditsIdsRouteHandler,
  getSuggestedEditsRouteHandler,
  getTagsModeratorOnlyRouteHandler,
  getTagsRequiredRouteHandler,
  getTagsRouteHandler,
  getTagsSynonymsRouteHandler,
  getTagsTagsFaqRouteHandler,
  getTagsTagsInfoRouteHandler,
  getTagsTagsRelatedRouteHandler,
  getTagsTagsSynonymsRouteHandler,
  getTagsTagsWikisRouteHandler,
  getTagsTagTopAnswerersPeriodRouteHandler,
  getTagsTagTopAskersPeriodRouteHandler,
  getUsersIdInboxRouteHandler,
  getUsersIdInboxUnreadRouteHandler,
  getUsersIdNotificationsRouteHandler,
  getUsersIdNotificationsUnreadRouteHandler,
  getUsersIdPrivilegesRouteHandler,
  getUsersIdReputationHistoryFullRouteHandler,
  getUsersIdsAnswersRouteHandler,
  getUsersIdsAssociatedRouteHandler,
  getUsersIdsBadgesRouteHandler,
  getUsersIdsCommentsRouteHandler,
  getUsersIdsCommentsToidRouteHandler,
  getUsersIdsFavoritesRouteHandler,
  getUsersIdsMentionedRouteHandler,
  getUsersIdsMergesRouteHandler,
  getUsersIdsQuestionsFeaturedRouteHandler,
  getUsersIdsQuestionsNoAnswersRouteHandler,
  getUsersIdsQuestionsRouteHandler,
  getUsersIdsQuestionsUnacceptedRouteHandler,
  getUsersIdsQuestionsUnansweredRouteHandler,
  getUsersIdsReputationHistoryRouteHandler,
  getUsersIdsReputationRouteHandler,
  getUsersIdsRouteHandler,
  getUsersIdsSuggestedEditsRouteHandler,
  getUsersIdsTagsRouteHandler,
  getUsersIdsTimelineRouteHandler,
  getUsersIdTagsTagsTopAnswersRouteHandler,
  getUsersIdTagsTagsTopQuestionsRouteHandler,
  getUsersIdTopAnswerTagsRouteHandler,
  getUsersIdTopQuestionTagsRouteHandler,
  getUsersIdWritePermissionsRouteHandler,
  getUsersModeratorsElectedRouteHandler,
  getUsersModeratorsRouteHandler,
  getUsersRouteHandler,
  postCommentsIdDeleteRouteHandler,
  postCommentsIdEditRouteHandler,
  postPostsIdCommentsAddRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccessTokensAccessTokensRoute, getAccessTokensAccessTokensRouteHandler)
  .openapi(
    getAccessTokensAccessTokensInvalidateRoute,
    getAccessTokensAccessTokensInvalidateRouteHandler,
  )
  .openapi(getAnswersRoute, getAnswersRouteHandler)
  .openapi(getAnswersIdsRoute, getAnswersIdsRouteHandler)
  .openapi(getAnswersIdsCommentsRoute, getAnswersIdsCommentsRouteHandler)
  .openapi(getAppsAccessTokensDeAuthenticateRoute, getAppsAccessTokensDeAuthenticateRouteHandler)
  .openapi(getBadgesRoute, getBadgesRouteHandler)
  .openapi(getBadgesNameRoute, getBadgesNameRouteHandler)
  .openapi(getBadgesRecipientsRoute, getBadgesRecipientsRouteHandler)
  .openapi(getBadgesTagsRoute, getBadgesTagsRouteHandler)
  .openapi(getBadgesIdsRoute, getBadgesIdsRouteHandler)
  .openapi(getBadgesIdsRecipientsRoute, getBadgesIdsRecipientsRouteHandler)
  .openapi(getCommentsRoute, getCommentsRouteHandler)
  .openapi(getCommentsIdsRoute, getCommentsIdsRouteHandler)
  .openapi(postCommentsIdDeleteRoute, postCommentsIdDeleteRouteHandler)
  .openapi(postCommentsIdEditRoute, postCommentsIdEditRouteHandler)
  .openapi(getErrorsRoute, getErrorsRouteHandler)
  .openapi(getErrorsIdRoute, getErrorsIdRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getFiltersCreateRoute, getFiltersCreateRouteHandler)
  .openapi(getFiltersFiltersRoute, getFiltersFiltersRouteHandler)
  .openapi(getInboxRoute, getInboxRouteHandler)
  .openapi(getInboxUnreadRoute, getInboxUnreadRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMeAnswersRoute, getMeAnswersRouteHandler)
  .openapi(getMeAssociatedRoute, getMeAssociatedRouteHandler)
  .openapi(getMeBadgesRoute, getMeBadgesRouteHandler)
  .openapi(getMeCommentsRoute, getMeCommentsRouteHandler)
  .openapi(getMeCommentsToIdRoute, getMeCommentsToIdRouteHandler)
  .openapi(getMeFavoritesRoute, getMeFavoritesRouteHandler)
  .openapi(getMeInboxRoute, getMeInboxRouteHandler)
  .openapi(getMeInboxUnreadRoute, getMeInboxUnreadRouteHandler)
  .openapi(getMeMentionedRoute, getMeMentionedRouteHandler)
  .openapi(getMeMergesRoute, getMeMergesRouteHandler)
  .openapi(getMeNotificationsRoute, getMeNotificationsRouteHandler)
  .openapi(getMeNotificationsUnreadRoute, getMeNotificationsUnreadRouteHandler)
  .openapi(getMePrivilegesRoute, getMePrivilegesRouteHandler)
  .openapi(getMeQuestionsRoute, getMeQuestionsRouteHandler)
  .openapi(getMeQuestionsFeaturedRoute, getMeQuestionsFeaturedRouteHandler)
  .openapi(getMeQuestionsNoAnswersRoute, getMeQuestionsNoAnswersRouteHandler)
  .openapi(getMeQuestionsUnacceptedRoute, getMeQuestionsUnacceptedRouteHandler)
  .openapi(getMeQuestionsUnansweredRoute, getMeQuestionsUnansweredRouteHandler)
  .openapi(getMeReputationRoute, getMeReputationRouteHandler)
  .openapi(getMeReputationHistoryRoute, getMeReputationHistoryRouteHandler)
  .openapi(getMeReputationHistoryFullRoute, getMeReputationHistoryFullRouteHandler)
  .openapi(getMeSuggestedEditsRoute, getMeSuggestedEditsRouteHandler)
  .openapi(getMeTagsRoute, getMeTagsRouteHandler)
  .openapi(getMeTagsTagsTopAnswersRoute, getMeTagsTagsTopAnswersRouteHandler)
  .openapi(getMeTagsTagsTopQuestionsRoute, getMeTagsTagsTopQuestionsRouteHandler)
  .openapi(getMeTimelineRoute, getMeTimelineRouteHandler)
  .openapi(getMeTopAnswerTagsRoute, getMeTopAnswerTagsRouteHandler)
  .openapi(getMeTopQuestionTagsRoute, getMeTopQuestionTagsRouteHandler)
  .openapi(getMeWritePermissionsRoute, getMeWritePermissionsRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(getNotificationsUnreadRoute, getNotificationsUnreadRouteHandler)
  .openapi(getPostsRoute, getPostsRouteHandler)
  .openapi(getPostsIdsRoute, getPostsIdsRouteHandler)
  .openapi(getPostsIdsCommentsRoute, getPostsIdsCommentsRouteHandler)
  .openapi(getPostsIdsRevisionsRoute, getPostsIdsRevisionsRouteHandler)
  .openapi(getPostsIdsSuggestedEditsRoute, getPostsIdsSuggestedEditsRouteHandler)
  .openapi(postPostsIdCommentsAddRoute, postPostsIdCommentsAddRouteHandler)
  .openapi(getPrivilegesRoute, getPrivilegesRouteHandler)
  .openapi(getQuestionsRoute, getQuestionsRouteHandler)
  .openapi(getQuestionsFeaturedRoute, getQuestionsFeaturedRouteHandler)
  .openapi(getQuestionsNoAnswersRoute, getQuestionsNoAnswersRouteHandler)
  .openapi(getQuestionsUnansweredRoute, getQuestionsUnansweredRouteHandler)
  .openapi(getQuestionsIdsRoute, getQuestionsIdsRouteHandler)
  .openapi(getQuestionsIdsAnswersRoute, getQuestionsIdsAnswersRouteHandler)
  .openapi(getQuestionsIdsCommentsRoute, getQuestionsIdsCommentsRouteHandler)
  .openapi(getQuestionsIdsLinkedRoute, getQuestionsIdsLinkedRouteHandler)
  .openapi(getQuestionsIdsRelatedRoute, getQuestionsIdsRelatedRouteHandler)
  .openapi(getQuestionsIdsTimelineRoute, getQuestionsIdsTimelineRouteHandler)
  .openapi(getRevisionsIdsRoute, getRevisionsIdsRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchAdvancedRoute, getSearchAdvancedRouteHandler)
  .openapi(getSimilarRoute, getSimilarRouteHandler)
  .openapi(getSitesRoute, getSitesRouteHandler)
  .openapi(getSuggestedEditsRoute, getSuggestedEditsRouteHandler)
  .openapi(getSuggestedEditsIdsRoute, getSuggestedEditsIdsRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(getTagsModeratorOnlyRoute, getTagsModeratorOnlyRouteHandler)
  .openapi(getTagsRequiredRoute, getTagsRequiredRouteHandler)
  .openapi(getTagsSynonymsRoute, getTagsSynonymsRouteHandler)
  .openapi(getTagsTagsFaqRoute, getTagsTagsFaqRouteHandler)
  .openapi(getTagsTagsInfoRoute, getTagsTagsInfoRouteHandler)
  .openapi(getTagsTagsRelatedRoute, getTagsTagsRelatedRouteHandler)
  .openapi(getTagsTagsSynonymsRoute, getTagsTagsSynonymsRouteHandler)
  .openapi(getTagsTagsWikisRoute, getTagsTagsWikisRouteHandler)
  .openapi(getTagsTagTopAnswerersPeriodRoute, getTagsTagTopAnswerersPeriodRouteHandler)
  .openapi(getTagsTagTopAskersPeriodRoute, getTagsTagTopAskersPeriodRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersModeratorsRoute, getUsersModeratorsRouteHandler)
  .openapi(getUsersModeratorsElectedRoute, getUsersModeratorsElectedRouteHandler)
  .openapi(getUsersIdsRoute, getUsersIdsRouteHandler)
  .openapi(getUsersIdsAnswersRoute, getUsersIdsAnswersRouteHandler)
  .openapi(getUsersIdsAssociatedRoute, getUsersIdsAssociatedRouteHandler)
  .openapi(getUsersIdsBadgesRoute, getUsersIdsBadgesRouteHandler)
  .openapi(getUsersIdsCommentsRoute, getUsersIdsCommentsRouteHandler)
  .openapi(getUsersIdsCommentsToidRoute, getUsersIdsCommentsToidRouteHandler)
  .openapi(getUsersIdsFavoritesRoute, getUsersIdsFavoritesRouteHandler)
  .openapi(getUsersIdsMentionedRoute, getUsersIdsMentionedRouteHandler)
  .openapi(getUsersIdsMergesRoute, getUsersIdsMergesRouteHandler)
  .openapi(getUsersIdsQuestionsRoute, getUsersIdsQuestionsRouteHandler)
  .openapi(getUsersIdsQuestionsFeaturedRoute, getUsersIdsQuestionsFeaturedRouteHandler)
  .openapi(getUsersIdsQuestionsNoAnswersRoute, getUsersIdsQuestionsNoAnswersRouteHandler)
  .openapi(getUsersIdsQuestionsUnacceptedRoute, getUsersIdsQuestionsUnacceptedRouteHandler)
  .openapi(getUsersIdsQuestionsUnansweredRoute, getUsersIdsQuestionsUnansweredRouteHandler)
  .openapi(getUsersIdsReputationRoute, getUsersIdsReputationRouteHandler)
  .openapi(getUsersIdsReputationHistoryRoute, getUsersIdsReputationHistoryRouteHandler)
  .openapi(getUsersIdsSuggestedEditsRoute, getUsersIdsSuggestedEditsRouteHandler)
  .openapi(getUsersIdsTagsRoute, getUsersIdsTagsRouteHandler)
  .openapi(getUsersIdsTimelineRoute, getUsersIdsTimelineRouteHandler)
  .openapi(getUsersIdInboxRoute, getUsersIdInboxRouteHandler)
  .openapi(getUsersIdInboxUnreadRoute, getUsersIdInboxUnreadRouteHandler)
  .openapi(getUsersIdNotificationsRoute, getUsersIdNotificationsRouteHandler)
  .openapi(getUsersIdNotificationsUnreadRoute, getUsersIdNotificationsUnreadRouteHandler)
  .openapi(getUsersIdPrivilegesRoute, getUsersIdPrivilegesRouteHandler)
  .openapi(getUsersIdReputationHistoryFullRoute, getUsersIdReputationHistoryFullRouteHandler)
  .openapi(getUsersIdTagsTagsTopAnswersRoute, getUsersIdTagsTagsTopAnswersRouteHandler)
  .openapi(getUsersIdTagsTagsTopQuestionsRoute, getUsersIdTagsTagsTopQuestionsRouteHandler)
  .openapi(getUsersIdTopAnswerTagsRoute, getUsersIdTopAnswerTagsRouteHandler)
  .openapi(getUsersIdTopQuestionTagsRoute, getUsersIdTopQuestionTagsRouteHandler)
  .openapi(getUsersIdWritePermissionsRoute, getUsersIdWritePermissionsRouteHandler)

export default app
