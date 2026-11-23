import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdRoute,
  deletePhotosPhotoIdRoute,
  deletePostsPostIdBookmarkRoute,
  deletePostsPostIdRoute,
  deleteUsersMeAlertsAlertIdRoute,
  deleteUsersUserIdFeedbackRoute,
  getConversationsConversationIdMessagesRoute,
  getConversationsRoute,
  getConversationsSearchRoute,
  getGroupsGroupIdRoute,
  getGroupsMultipleRoute,
  getGroupsRoute,
  getPhotosMultipleRoute,
  getPostsAllChangesRoute,
  getPostsAllRoute,
  getPostsMultipleRoute,
  getPostsPostIdDisplayRoute,
  getPostsPostIdRoute,
  getPostsRoute,
  getPostsSearchRoute,
  getStoriesRoute,
  getStoriesStoryIdRoute,
  getUsersMeAlertsRoute,
  getUsersMeGroupsRoute,
  getUsersMeNoticesRoute,
  getUsersMePostLocationsRoute,
  getUsersMePostsRoute,
  getUsersMePostsSearchRoute,
  getUsersMeProfileImagesRoute,
  getUsersMeRoute,
  getUsersUserIdDisplayRoute,
  getUsersUserIdPostsRoute,
  getUsersUserIdPostsSearchRoute,
  getUsersUserIdProfileImageRoute,
  getUsersUserIdRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsConversationIdReportRoute,
  postFeedbackRoute,
  postGroupsGroupIdAnswersRoute,
  postGroupsGroupIdContactRoute,
  postGroupsGroupIdUnsubscribeRoute,
  postGroupsSubscribeRoute,
  postPhotosPhotoIdRotateRoute,
  postPhotosRoute,
  postPostsPostIdReplyRoute,
  postPostsPostIdReportRoute,
  postPostsPostIdShareRoute,
  postPostsRoute,
  postStoriesRoute,
  postStoriesStoryIdViewedRoute,
  postUsersMeEmailRoute,
  postUsersMeProfileImageRoute,
  postUsersMeResendVerificationRoute,
  postUsersMeResetPasswordRoute,
  postUsersReportRoute,
  postUsersUserIdFeedbackRoute,
  putConversationsArchiveAllRoute,
  putConversationsConversationIdArchiveRoute,
  putConversationsConversationIdBlockRoute,
  putConversationsConversationIdMarkReadRoute,
  putConversationsConversationIdUnarchiveRoute,
  putConversationsConversationIdUnblockRoute,
  putConversationsMarkAllReadRoute,
  putPostsPostIdBookmarkRoute,
  putPostsPostIdPromiseRoute,
  putPostsPostIdRoute,
  putPostsPostIdSatisfyRoute,
  putPostsPostIdUnpromiseRoute,
  putPostsPostIdWithdrawRoute,
  putStoriesStoryIdLikeRoute,
  putStoriesStoryIdUnlikeRoute,
  putUsersMeAlertsRoute,
  putUsersMeEmailNotBouncingRoute,
  putUsersMeLocationRoute,
  putUsersMePostLocationsRoute,
  putUsersMeRoute,
} from './routes'
import {
  deleteConversationsConversationIdRouteHandler,
  deletePhotosPhotoIdRouteHandler,
  deletePostsPostIdBookmarkRouteHandler,
  deletePostsPostIdRouteHandler,
  deleteUsersMeAlertsAlertIdRouteHandler,
  deleteUsersUserIdFeedbackRouteHandler,
  getConversationsConversationIdMessagesRouteHandler,
  getConversationsRouteHandler,
  getConversationsSearchRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsMultipleRouteHandler,
  getGroupsRouteHandler,
  getPhotosMultipleRouteHandler,
  getPostsAllChangesRouteHandler,
  getPostsAllRouteHandler,
  getPostsMultipleRouteHandler,
  getPostsPostIdDisplayRouteHandler,
  getPostsPostIdRouteHandler,
  getPostsRouteHandler,
  getPostsSearchRouteHandler,
  getStoriesRouteHandler,
  getStoriesStoryIdRouteHandler,
  getUsersMeAlertsRouteHandler,
  getUsersMeGroupsRouteHandler,
  getUsersMeNoticesRouteHandler,
  getUsersMePostLocationsRouteHandler,
  getUsersMePostsRouteHandler,
  getUsersMePostsSearchRouteHandler,
  getUsersMeProfileImagesRouteHandler,
  getUsersMeRouteHandler,
  getUsersUserIdDisplayRouteHandler,
  getUsersUserIdPostsRouteHandler,
  getUsersUserIdPostsSearchRouteHandler,
  getUsersUserIdProfileImageRouteHandler,
  getUsersUserIdRouteHandler,
  postConversationsConversationIdReplyRouteHandler,
  postConversationsConversationIdReportRouteHandler,
  postFeedbackRouteHandler,
  postGroupsGroupIdAnswersRouteHandler,
  postGroupsGroupIdContactRouteHandler,
  postGroupsGroupIdUnsubscribeRouteHandler,
  postGroupsSubscribeRouteHandler,
  postPhotosPhotoIdRotateRouteHandler,
  postPhotosRouteHandler,
  postPostsPostIdReplyRouteHandler,
  postPostsPostIdReportRouteHandler,
  postPostsPostIdShareRouteHandler,
  postPostsRouteHandler,
  postStoriesRouteHandler,
  postStoriesStoryIdViewedRouteHandler,
  postUsersMeEmailRouteHandler,
  postUsersMeProfileImageRouteHandler,
  postUsersMeResendVerificationRouteHandler,
  postUsersMeResetPasswordRouteHandler,
  postUsersReportRouteHandler,
  postUsersUserIdFeedbackRouteHandler,
  putConversationsArchiveAllRouteHandler,
  putConversationsConversationIdArchiveRouteHandler,
  putConversationsConversationIdBlockRouteHandler,
  putConversationsConversationIdMarkReadRouteHandler,
  putConversationsConversationIdUnarchiveRouteHandler,
  putConversationsConversationIdUnblockRouteHandler,
  putConversationsMarkAllReadRouteHandler,
  putPostsPostIdBookmarkRouteHandler,
  putPostsPostIdPromiseRouteHandler,
  putPostsPostIdRouteHandler,
  putPostsPostIdSatisfyRouteHandler,
  putPostsPostIdUnpromiseRouteHandler,
  putPostsPostIdWithdrawRouteHandler,
  putStoriesStoryIdLikeRouteHandler,
  putStoriesStoryIdUnlikeRouteHandler,
  putUsersMeAlertsRouteHandler,
  putUsersMeEmailNotBouncingRouteHandler,
  putUsersMeLocationRouteHandler,
  putUsersMePostLocationsRouteHandler,
  putUsersMeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConversationsRoute, getConversationsRouteHandler)
  .openapi(putConversationsArchiveAllRoute, putConversationsArchiveAllRouteHandler)
  .openapi(putConversationsMarkAllReadRoute, putConversationsMarkAllReadRouteHandler)
  .openapi(getConversationsSearchRoute, getConversationsSearchRouteHandler)
  .openapi(deleteConversationsConversationIdRoute, deleteConversationsConversationIdRouteHandler)
  .openapi(
    putConversationsConversationIdArchiveRoute,
    putConversationsConversationIdArchiveRouteHandler,
  )
  .openapi(
    putConversationsConversationIdBlockRoute,
    putConversationsConversationIdBlockRouteHandler,
  )
  .openapi(
    putConversationsConversationIdMarkReadRoute,
    putConversationsConversationIdMarkReadRouteHandler,
  )
  .openapi(
    getConversationsConversationIdMessagesRoute,
    getConversationsConversationIdMessagesRouteHandler,
  )
  .openapi(
    postConversationsConversationIdReplyRoute,
    postConversationsConversationIdReplyRouteHandler,
  )
  .openapi(
    postConversationsConversationIdReportRoute,
    postConversationsConversationIdReportRouteHandler,
  )
  .openapi(
    putConversationsConversationIdUnarchiveRoute,
    putConversationsConversationIdUnarchiveRouteHandler,
  )
  .openapi(
    putConversationsConversationIdUnblockRoute,
    putConversationsConversationIdUnblockRouteHandler,
  )
  .openapi(postFeedbackRoute, postFeedbackRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(getGroupsMultipleRoute, getGroupsMultipleRouteHandler)
  .openapi(postGroupsSubscribeRoute, postGroupsSubscribeRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(postGroupsGroupIdAnswersRoute, postGroupsGroupIdAnswersRouteHandler)
  .openapi(postGroupsGroupIdContactRoute, postGroupsGroupIdContactRouteHandler)
  .openapi(postGroupsGroupIdUnsubscribeRoute, postGroupsGroupIdUnsubscribeRouteHandler)
  .openapi(postPhotosRoute, postPhotosRouteHandler)
  .openapi(getPhotosMultipleRoute, getPhotosMultipleRouteHandler)
  .openapi(deletePhotosPhotoIdRoute, deletePhotosPhotoIdRouteHandler)
  .openapi(postPhotosPhotoIdRotateRoute, postPhotosPhotoIdRotateRouteHandler)
  .openapi(getPostsRoute, getPostsRouteHandler)
  .openapi(postPostsRoute, postPostsRouteHandler)
  .openapi(getPostsAllRoute, getPostsAllRouteHandler)
  .openapi(getPostsAllChangesRoute, getPostsAllChangesRouteHandler)
  .openapi(getPostsMultipleRoute, getPostsMultipleRouteHandler)
  .openapi(getPostsSearchRoute, getPostsSearchRouteHandler)
  .openapi(deletePostsPostIdRoute, deletePostsPostIdRouteHandler)
  .openapi(getPostsPostIdRoute, getPostsPostIdRouteHandler)
  .openapi(putPostsPostIdRoute, putPostsPostIdRouteHandler)
  .openapi(deletePostsPostIdBookmarkRoute, deletePostsPostIdBookmarkRouteHandler)
  .openapi(putPostsPostIdBookmarkRoute, putPostsPostIdBookmarkRouteHandler)
  .openapi(getPostsPostIdDisplayRoute, getPostsPostIdDisplayRouteHandler)
  .openapi(putPostsPostIdPromiseRoute, putPostsPostIdPromiseRouteHandler)
  .openapi(postPostsPostIdReplyRoute, postPostsPostIdReplyRouteHandler)
  .openapi(postPostsPostIdReportRoute, postPostsPostIdReportRouteHandler)
  .openapi(putPostsPostIdSatisfyRoute, putPostsPostIdSatisfyRouteHandler)
  .openapi(postPostsPostIdShareRoute, postPostsPostIdShareRouteHandler)
  .openapi(putPostsPostIdUnpromiseRoute, putPostsPostIdUnpromiseRouteHandler)
  .openapi(putPostsPostIdWithdrawRoute, putPostsPostIdWithdrawRouteHandler)
  .openapi(getStoriesRoute, getStoriesRouteHandler)
  .openapi(postStoriesRoute, postStoriesRouteHandler)
  .openapi(getStoriesStoryIdRoute, getStoriesStoryIdRouteHandler)
  .openapi(putStoriesStoryIdLikeRoute, putStoriesStoryIdLikeRouteHandler)
  .openapi(putStoriesStoryIdUnlikeRoute, putStoriesStoryIdUnlikeRouteHandler)
  .openapi(postStoriesStoryIdViewedRoute, postStoriesStoryIdViewedRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(putUsersMeRoute, putUsersMeRouteHandler)
  .openapi(getUsersMeAlertsRoute, getUsersMeAlertsRouteHandler)
  .openapi(putUsersMeAlertsRoute, putUsersMeAlertsRouteHandler)
  .openapi(deleteUsersMeAlertsAlertIdRoute, deleteUsersMeAlertsAlertIdRouteHandler)
  .openapi(postUsersMeEmailRoute, postUsersMeEmailRouteHandler)
  .openapi(putUsersMeEmailNotBouncingRoute, putUsersMeEmailNotBouncingRouteHandler)
  .openapi(getUsersMeGroupsRoute, getUsersMeGroupsRouteHandler)
  .openapi(putUsersMeLocationRoute, putUsersMeLocationRouteHandler)
  .openapi(getUsersMeNoticesRoute, getUsersMeNoticesRouteHandler)
  .openapi(getUsersMePostLocationsRoute, getUsersMePostLocationsRouteHandler)
  .openapi(putUsersMePostLocationsRoute, putUsersMePostLocationsRouteHandler)
  .openapi(getUsersMePostsRoute, getUsersMePostsRouteHandler)
  .openapi(getUsersMePostsSearchRoute, getUsersMePostsSearchRouteHandler)
  .openapi(postUsersMeProfileImageRoute, postUsersMeProfileImageRouteHandler)
  .openapi(getUsersMeProfileImagesRoute, getUsersMeProfileImagesRouteHandler)
  .openapi(postUsersMeResendVerificationRoute, postUsersMeResendVerificationRouteHandler)
  .openapi(postUsersMeResetPasswordRoute, postUsersMeResetPasswordRouteHandler)
  .openapi(postUsersReportRoute, postUsersReportRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(getUsersUserIdDisplayRoute, getUsersUserIdDisplayRouteHandler)
  .openapi(deleteUsersUserIdFeedbackRoute, deleteUsersUserIdFeedbackRouteHandler)
  .openapi(postUsersUserIdFeedbackRoute, postUsersUserIdFeedbackRouteHandler)
  .openapi(getUsersUserIdPostsRoute, getUsersUserIdPostsRouteHandler)
  .openapi(getUsersUserIdPostsSearchRoute, getUsersUserIdPostsSearchRouteHandler)
  .openapi(getUsersUserIdProfileImageRoute, getUsersUserIdProfileImageRouteHandler)

export default app
