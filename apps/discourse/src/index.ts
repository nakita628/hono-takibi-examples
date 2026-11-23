import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminBadgesIdJsonRoute,
  deleteAdminGroupsIdJsonRoute,
  deleteAdminUsersIdJsonRoute,
  deleteGroupsIdMembersJsonRoute,
  deletePostsIdJsonRoute,
  deleteTIdJsonRoute,
  getAdminBackupsFilenameRoute,
  getAdminBackupsJsonRoute,
  getAdminBadgesJsonRoute,
  getAdminUsersIdJsonRoute,
  getAdminUsersJsonRoute,
  getAdminUsersListFlagJsonRoute,
  getCategoriesJsonRoute,
  getCIdShowJsonRoute,
  getCSlugIdJsonRoute,
  getDirectoryItemsJsonRoute,
  getDiscoursePostEventEventsIcsRoute,
  getDiscoursePostEventEventsJsonRoute,
  getGroupsByIdIdJsonRoute,
  getGroupsJsonRoute,
  getGroupsNameJsonRoute,
  getGroupsNameMembersJsonRoute,
  getLatestJsonRoute,
  getNotificationsJsonRoute,
  getPostsIdJsonRoute,
  getPostsIdRepliesJsonRoute,
  getPostsJsonRoute,
  getSearchJsonRoute,
  getSiteBasicInfoJsonRoute,
  getSiteJsonRoute,
  getTagGroupsIdJsonRoute,
  getTagGroupsJsonRoute,
  getTagNameJsonRoute,
  getTagsJsonRoute,
  getTExternalIdExternalIdJsonRoute,
  getTIdJsonRoute,
  getTIdPostsJsonRoute,
  getTopicsPrivateMessagesSentUsernameJsonRoute,
  getTopicsPrivateMessagesUsernameJsonRoute,
  getTopJsonRoute,
  getUByExternalExternalIdJsonRoute,
  getUByExternalProviderExternalIdJsonRoute,
  getUserActionsJsonRoute,
  getUserBadgesUsernameJsonRoute,
  getUUsernameEmailsJsonRoute,
  getUUsernameJsonRoute,
  postAdminBackupsJsonRoute,
  postAdminBadgesJsonRoute,
  postAdminGroupsJsonRoute,
  postAdminUsersIdLogOutJsonRoute,
  postAdminUsersIdMergeJsonRoute,
  postCategoriesJsonRoute,
  postInvitesCreateMultipleJsonRoute,
  postInvitesJsonRoute,
  postPostActionsJsonRoute,
  postPostsJsonRoute,
  postSessionForgotPasswordJsonRoute,
  postTagGroupsJsonRoute,
  postTIdInviteGroupJsonRoute,
  postTIdInviteJsonRoute,
  postTIdNotificationsJsonRoute,
  postTIdTimerJsonRoute,
  postUploadsAbortMultipartJsonRoute,
  postUploadsBatchPresignMultipartPartsJsonRoute,
  postUploadsCompleteExternalUploadJsonRoute,
  postUploadsCompleteMultipartJsonRoute,
  postUploadsCreateMultipartJsonRoute,
  postUploadsGeneratePresignedPutJsonRoute,
  postUploadsJsonRoute,
  postUserAvatarUsernameRefreshGravatarJsonRoute,
  postUserBadgesJsonRoute,
  postUsersJsonRoute,
  putAdminBackupsFilenameRoute,
  putAdminBadgesIdJsonRoute,
  putAdminUsersIdActivateJsonRoute,
  putAdminUsersIdAnonymizeJsonRoute,
  putAdminUsersIdDeactivateJsonRoute,
  putAdminUsersIdSilenceJsonRoute,
  putAdminUsersIdSuspendJsonRoute,
  putCategoriesIdJsonRoute,
  putGroupsIdJsonRoute,
  putGroupsIdMembersJsonRoute,
  putNotificationsMarkReadJsonRoute,
  putPostsIdJsonRoute,
  putPostsIdLockedJsonRoute,
  putTagGroupsIdJsonRoute,
  putTDashIdJsonRoute,
  putTIdBookmarkJsonRoute,
  putTIdChangeTimestampJsonRoute,
  putTIdStatusJsonRoute,
  putUsersPasswordResetTokenJsonRoute,
  putUUsernameJsonRoute,
  putUUsernamePreferencesAvatarPickJsonRoute,
  putUUsernamePreferencesEmailJsonRoute,
  putUUsernamePreferencesUsernameJsonRoute,
} from './routes'
import {
  deleteAdminBadgesIdJsonRouteHandler,
  deleteAdminGroupsIdJsonRouteHandler,
  deleteAdminUsersIdJsonRouteHandler,
  deleteGroupsIdMembersJsonRouteHandler,
  deletePostsIdJsonRouteHandler,
  deleteTIdJsonRouteHandler,
  getAdminBackupsFilenameRouteHandler,
  getAdminBackupsJsonRouteHandler,
  getAdminBadgesJsonRouteHandler,
  getAdminUsersIdJsonRouteHandler,
  getAdminUsersJsonRouteHandler,
  getAdminUsersListFlagJsonRouteHandler,
  getCategoriesJsonRouteHandler,
  getCIdShowJsonRouteHandler,
  getCSlugIdJsonRouteHandler,
  getDirectoryItemsJsonRouteHandler,
  getDiscoursePostEventEventsIcsRouteHandler,
  getDiscoursePostEventEventsJsonRouteHandler,
  getGroupsByIdIdJsonRouteHandler,
  getGroupsJsonRouteHandler,
  getGroupsNameJsonRouteHandler,
  getGroupsNameMembersJsonRouteHandler,
  getLatestJsonRouteHandler,
  getNotificationsJsonRouteHandler,
  getPostsIdJsonRouteHandler,
  getPostsIdRepliesJsonRouteHandler,
  getPostsJsonRouteHandler,
  getSearchJsonRouteHandler,
  getSiteBasicInfoJsonRouteHandler,
  getSiteJsonRouteHandler,
  getTagGroupsIdJsonRouteHandler,
  getTagGroupsJsonRouteHandler,
  getTagNameJsonRouteHandler,
  getTagsJsonRouteHandler,
  getTExternalIdExternalIdJsonRouteHandler,
  getTIdJsonRouteHandler,
  getTIdPostsJsonRouteHandler,
  getTopicsPrivateMessagesSentUsernameJsonRouteHandler,
  getTopicsPrivateMessagesUsernameJsonRouteHandler,
  getTopJsonRouteHandler,
  getUByExternalExternalIdJsonRouteHandler,
  getUByExternalProviderExternalIdJsonRouteHandler,
  getUserActionsJsonRouteHandler,
  getUserBadgesUsernameJsonRouteHandler,
  getUUsernameEmailsJsonRouteHandler,
  getUUsernameJsonRouteHandler,
  postAdminBackupsJsonRouteHandler,
  postAdminBadgesJsonRouteHandler,
  postAdminGroupsJsonRouteHandler,
  postAdminUsersIdLogOutJsonRouteHandler,
  postAdminUsersIdMergeJsonRouteHandler,
  postCategoriesJsonRouteHandler,
  postInvitesCreateMultipleJsonRouteHandler,
  postInvitesJsonRouteHandler,
  postPostActionsJsonRouteHandler,
  postPostsJsonRouteHandler,
  postSessionForgotPasswordJsonRouteHandler,
  postTagGroupsJsonRouteHandler,
  postTIdInviteGroupJsonRouteHandler,
  postTIdInviteJsonRouteHandler,
  postTIdNotificationsJsonRouteHandler,
  postTIdTimerJsonRouteHandler,
  postUploadsAbortMultipartJsonRouteHandler,
  postUploadsBatchPresignMultipartPartsJsonRouteHandler,
  postUploadsCompleteExternalUploadJsonRouteHandler,
  postUploadsCompleteMultipartJsonRouteHandler,
  postUploadsCreateMultipartJsonRouteHandler,
  postUploadsGeneratePresignedPutJsonRouteHandler,
  postUploadsJsonRouteHandler,
  postUserAvatarUsernameRefreshGravatarJsonRouteHandler,
  postUserBadgesJsonRouteHandler,
  postUsersJsonRouteHandler,
  putAdminBackupsFilenameRouteHandler,
  putAdminBadgesIdJsonRouteHandler,
  putAdminUsersIdActivateJsonRouteHandler,
  putAdminUsersIdAnonymizeJsonRouteHandler,
  putAdminUsersIdDeactivateJsonRouteHandler,
  putAdminUsersIdSilenceJsonRouteHandler,
  putAdminUsersIdSuspendJsonRouteHandler,
  putCategoriesIdJsonRouteHandler,
  putGroupsIdJsonRouteHandler,
  putGroupsIdMembersJsonRouteHandler,
  putNotificationsMarkReadJsonRouteHandler,
  putPostsIdJsonRouteHandler,
  putPostsIdLockedJsonRouteHandler,
  putTagGroupsIdJsonRouteHandler,
  putTDashIdJsonRouteHandler,
  putTIdBookmarkJsonRouteHandler,
  putTIdChangeTimestampJsonRouteHandler,
  putTIdStatusJsonRouteHandler,
  putUsersPasswordResetTokenJsonRouteHandler,
  putUUsernameJsonRouteHandler,
  putUUsernamePreferencesAvatarPickJsonRouteHandler,
  putUUsernamePreferencesEmailJsonRouteHandler,
  putUUsernamePreferencesUsernameJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDiscoursePostEventEventsJsonRoute, getDiscoursePostEventEventsJsonRouteHandler)
  .openapi(getDiscoursePostEventEventsIcsRoute, getDiscoursePostEventEventsIcsRouteHandler)
  .openapi(getAdminBackupsJsonRoute, getAdminBackupsJsonRouteHandler)
  .openapi(postAdminBackupsJsonRoute, postAdminBackupsJsonRouteHandler)
  .openapi(putAdminBackupsFilenameRoute, putAdminBackupsFilenameRouteHandler)
  .openapi(getAdminBackupsFilenameRoute, getAdminBackupsFilenameRouteHandler)
  .openapi(getAdminBadgesJsonRoute, getAdminBadgesJsonRouteHandler)
  .openapi(postAdminBadgesJsonRoute, postAdminBadgesJsonRouteHandler)
  .openapi(putAdminBadgesIdJsonRoute, putAdminBadgesIdJsonRouteHandler)
  .openapi(deleteAdminBadgesIdJsonRoute, deleteAdminBadgesIdJsonRouteHandler)
  .openapi(postCategoriesJsonRoute, postCategoriesJsonRouteHandler)
  .openapi(getCategoriesJsonRoute, getCategoriesJsonRouteHandler)
  .openapi(putCategoriesIdJsonRoute, putCategoriesIdJsonRouteHandler)
  .openapi(getCSlugIdJsonRoute, getCSlugIdJsonRouteHandler)
  .openapi(getCIdShowJsonRoute, getCIdShowJsonRouteHandler)
  .openapi(postAdminGroupsJsonRoute, postAdminGroupsJsonRouteHandler)
  .openapi(deleteAdminGroupsIdJsonRoute, deleteAdminGroupsIdJsonRouteHandler)
  .openapi(getGroupsNameJsonRoute, getGroupsNameJsonRouteHandler)
  .openapi(putGroupsIdJsonRoute, putGroupsIdJsonRouteHandler)
  .openapi(getGroupsByIdIdJsonRoute, getGroupsByIdIdJsonRouteHandler)
  .openapi(getGroupsNameMembersJsonRoute, getGroupsNameMembersJsonRouteHandler)
  .openapi(putGroupsIdMembersJsonRoute, putGroupsIdMembersJsonRouteHandler)
  .openapi(deleteGroupsIdMembersJsonRoute, deleteGroupsIdMembersJsonRouteHandler)
  .openapi(getGroupsJsonRoute, getGroupsJsonRouteHandler)
  .openapi(postInvitesJsonRoute, postInvitesJsonRouteHandler)
  .openapi(postInvitesCreateMultipleJsonRoute, postInvitesCreateMultipleJsonRouteHandler)
  .openapi(getNotificationsJsonRoute, getNotificationsJsonRouteHandler)
  .openapi(putNotificationsMarkReadJsonRoute, putNotificationsMarkReadJsonRouteHandler)
  .openapi(getPostsJsonRoute, getPostsJsonRouteHandler)
  .openapi(postPostsJsonRoute, postPostsJsonRouteHandler)
  .openapi(getPostsIdJsonRoute, getPostsIdJsonRouteHandler)
  .openapi(putPostsIdJsonRoute, putPostsIdJsonRouteHandler)
  .openapi(deletePostsIdJsonRoute, deletePostsIdJsonRouteHandler)
  .openapi(getPostsIdRepliesJsonRoute, getPostsIdRepliesJsonRouteHandler)
  .openapi(putPostsIdLockedJsonRoute, putPostsIdLockedJsonRouteHandler)
  .openapi(postPostActionsJsonRoute, postPostActionsJsonRouteHandler)
  .openapi(
    getTopicsPrivateMessagesUsernameJsonRoute,
    getTopicsPrivateMessagesUsernameJsonRouteHandler,
  )
  .openapi(
    getTopicsPrivateMessagesSentUsernameJsonRoute,
    getTopicsPrivateMessagesSentUsernameJsonRouteHandler,
  )
  .openapi(getSearchJsonRoute, getSearchJsonRouteHandler)
  .openapi(getSiteJsonRoute, getSiteJsonRouteHandler)
  .openapi(getSiteBasicInfoJsonRoute, getSiteBasicInfoJsonRouteHandler)
  .openapi(getTagGroupsJsonRoute, getTagGroupsJsonRouteHandler)
  .openapi(postTagGroupsJsonRoute, postTagGroupsJsonRouteHandler)
  .openapi(getTagGroupsIdJsonRoute, getTagGroupsIdJsonRouteHandler)
  .openapi(putTagGroupsIdJsonRoute, putTagGroupsIdJsonRouteHandler)
  .openapi(getTagsJsonRoute, getTagsJsonRouteHandler)
  .openapi(getTagNameJsonRoute, getTagNameJsonRouteHandler)
  .openapi(getTIdPostsJsonRoute, getTIdPostsJsonRouteHandler)
  .openapi(getTIdJsonRoute, getTIdJsonRouteHandler)
  .openapi(deleteTIdJsonRoute, deleteTIdJsonRouteHandler)
  .openapi(putTDashIdJsonRoute, putTDashIdJsonRouteHandler)
  .openapi(postTIdInviteJsonRoute, postTIdInviteJsonRouteHandler)
  .openapi(postTIdInviteGroupJsonRoute, postTIdInviteGroupJsonRouteHandler)
  .openapi(putTIdBookmarkJsonRoute, putTIdBookmarkJsonRouteHandler)
  .openapi(putTIdStatusJsonRoute, putTIdStatusJsonRouteHandler)
  .openapi(getLatestJsonRoute, getLatestJsonRouteHandler)
  .openapi(getTopJsonRoute, getTopJsonRouteHandler)
  .openapi(postTIdNotificationsJsonRoute, postTIdNotificationsJsonRouteHandler)
  .openapi(putTIdChangeTimestampJsonRoute, putTIdChangeTimestampJsonRouteHandler)
  .openapi(postTIdTimerJsonRoute, postTIdTimerJsonRouteHandler)
  .openapi(getTExternalIdExternalIdJsonRoute, getTExternalIdExternalIdJsonRouteHandler)
  .openapi(postUploadsJsonRoute, postUploadsJsonRouteHandler)
  .openapi(
    postUploadsGeneratePresignedPutJsonRoute,
    postUploadsGeneratePresignedPutJsonRouteHandler,
  )
  .openapi(
    postUploadsCompleteExternalUploadJsonRoute,
    postUploadsCompleteExternalUploadJsonRouteHandler,
  )
  .openapi(postUploadsCreateMultipartJsonRoute, postUploadsCreateMultipartJsonRouteHandler)
  .openapi(
    postUploadsBatchPresignMultipartPartsJsonRoute,
    postUploadsBatchPresignMultipartPartsJsonRouteHandler,
  )
  .openapi(postUploadsAbortMultipartJsonRoute, postUploadsAbortMultipartJsonRouteHandler)
  .openapi(postUploadsCompleteMultipartJsonRoute, postUploadsCompleteMultipartJsonRouteHandler)
  .openapi(postUserBadgesJsonRoute, postUserBadgesJsonRouteHandler)
  .openapi(getUserBadgesUsernameJsonRoute, getUserBadgesUsernameJsonRouteHandler)
  .openapi(postUsersJsonRoute, postUsersJsonRouteHandler)
  .openapi(getUUsernameJsonRoute, getUUsernameJsonRouteHandler)
  .openapi(putUUsernameJsonRoute, putUUsernameJsonRouteHandler)
  .openapi(getUByExternalExternalIdJsonRoute, getUByExternalExternalIdJsonRouteHandler)
  .openapi(
    getUByExternalProviderExternalIdJsonRoute,
    getUByExternalProviderExternalIdJsonRouteHandler,
  )
  .openapi(
    putUUsernamePreferencesAvatarPickJsonRoute,
    putUUsernamePreferencesAvatarPickJsonRouteHandler,
  )
  .openapi(putUUsernamePreferencesEmailJsonRoute, putUUsernamePreferencesEmailJsonRouteHandler)
  .openapi(
    putUUsernamePreferencesUsernameJsonRoute,
    putUUsernamePreferencesUsernameJsonRouteHandler,
  )
  .openapi(getDirectoryItemsJsonRoute, getDirectoryItemsJsonRouteHandler)
  .openapi(getAdminUsersIdJsonRoute, getAdminUsersIdJsonRouteHandler)
  .openapi(deleteAdminUsersIdJsonRoute, deleteAdminUsersIdJsonRouteHandler)
  .openapi(putAdminUsersIdActivateJsonRoute, putAdminUsersIdActivateJsonRouteHandler)
  .openapi(putAdminUsersIdDeactivateJsonRoute, putAdminUsersIdDeactivateJsonRouteHandler)
  .openapi(putAdminUsersIdSuspendJsonRoute, putAdminUsersIdSuspendJsonRouteHandler)
  .openapi(putAdminUsersIdSilenceJsonRoute, putAdminUsersIdSilenceJsonRouteHandler)
  .openapi(putAdminUsersIdAnonymizeJsonRoute, putAdminUsersIdAnonymizeJsonRouteHandler)
  .openapi(postAdminUsersIdMergeJsonRoute, postAdminUsersIdMergeJsonRouteHandler)
  .openapi(postAdminUsersIdLogOutJsonRoute, postAdminUsersIdLogOutJsonRouteHandler)
  .openapi(
    postUserAvatarUsernameRefreshGravatarJsonRoute,
    postUserAvatarUsernameRefreshGravatarJsonRouteHandler,
  )
  .openapi(getAdminUsersJsonRoute, getAdminUsersJsonRouteHandler)
  .openapi(getAdminUsersListFlagJsonRoute, getAdminUsersListFlagJsonRouteHandler)
  .openapi(getUserActionsJsonRoute, getUserActionsJsonRouteHandler)
  .openapi(postSessionForgotPasswordJsonRoute, postSessionForgotPasswordJsonRouteHandler)
  .openapi(putUsersPasswordResetTokenJsonRoute, putUsersPasswordResetTokenJsonRouteHandler)
  .openapi(getUUsernameEmailsJsonRoute, getUUsernameEmailsJsonRouteHandler)

export default app
