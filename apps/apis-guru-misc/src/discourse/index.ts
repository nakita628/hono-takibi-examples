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
  getAdminUsersListFlagJsonRoute,
  getCategoriesJsonRoute,
  getCIdShowJsonRoute,
  getCSlugIdJsonRoute,
  getDirectoryItemsJsonRoute,
  getGroupsIdJsonRoute,
  getGroupsIdMembersJsonRoute,
  getGroupsJsonRoute,
  getLatestJsonRoute,
  getNotificationsJsonRoute,
  getPostsIdJsonRoute,
  getPostsIdRepliesJsonRoute,
  getPostsJsonRoute,
  getSearchJsonRoute,
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
  postCategoriesJsonRoute,
  postInvitesJsonRoute,
  postPostActionsJsonRoute,
  postPostsJsonRoute,
  postSessionForgotPasswordJsonRoute,
  postTagGroupsJsonRoute,
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
  postUsersJsonRoute,
  putAdminBackupsFilenameRoute,
  putAdminBadgesIdJsonRoute,
  putAdminUsersIdAnonymizeJsonRoute,
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
  getAdminUsersListFlagJsonRouteHandler,
  getCategoriesJsonRouteHandler,
  getCIdShowJsonRouteHandler,
  getCSlugIdJsonRouteHandler,
  getDirectoryItemsJsonRouteHandler,
  getGroupsIdJsonRouteHandler,
  getGroupsIdMembersJsonRouteHandler,
  getGroupsJsonRouteHandler,
  getLatestJsonRouteHandler,
  getNotificationsJsonRouteHandler,
  getPostsIdJsonRouteHandler,
  getPostsIdRepliesJsonRouteHandler,
  getPostsJsonRouteHandler,
  getSearchJsonRouteHandler,
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
  postCategoriesJsonRouteHandler,
  postInvitesJsonRouteHandler,
  postPostActionsJsonRouteHandler,
  postPostsJsonRouteHandler,
  postSessionForgotPasswordJsonRouteHandler,
  postTagGroupsJsonRouteHandler,
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
  postUsersJsonRouteHandler,
  putAdminBackupsFilenameRouteHandler,
  putAdminBadgesIdJsonRouteHandler,
  putAdminUsersIdAnonymizeJsonRouteHandler,
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
  .openapi(getAdminBackupsJsonRoute, getAdminBackupsJsonRouteHandler)
  .openapi(postAdminBackupsJsonRoute, postAdminBackupsJsonRouteHandler)
  .openapi(getAdminBackupsFilenameRoute, getAdminBackupsFilenameRouteHandler)
  .openapi(putAdminBackupsFilenameRoute, putAdminBackupsFilenameRouteHandler)
  .openapi(getAdminBadgesJsonRoute, getAdminBadgesJsonRouteHandler)
  .openapi(postAdminBadgesJsonRoute, postAdminBadgesJsonRouteHandler)
  .openapi(deleteAdminBadgesIdJsonRoute, deleteAdminBadgesIdJsonRouteHandler)
  .openapi(putAdminBadgesIdJsonRoute, putAdminBadgesIdJsonRouteHandler)
  .openapi(postAdminGroupsJsonRoute, postAdminGroupsJsonRouteHandler)
  .openapi(deleteAdminGroupsIdJsonRoute, deleteAdminGroupsIdJsonRouteHandler)
  .openapi(getAdminUsersListFlagJsonRoute, getAdminUsersListFlagJsonRouteHandler)
  .openapi(deleteAdminUsersIdJsonRoute, deleteAdminUsersIdJsonRouteHandler)
  .openapi(getAdminUsersIdJsonRoute, getAdminUsersIdJsonRouteHandler)
  .openapi(putAdminUsersIdAnonymizeJsonRoute, putAdminUsersIdAnonymizeJsonRouteHandler)
  .openapi(postAdminUsersIdLogOutJsonRoute, postAdminUsersIdLogOutJsonRouteHandler)
  .openapi(putAdminUsersIdSilenceJsonRoute, putAdminUsersIdSilenceJsonRouteHandler)
  .openapi(putAdminUsersIdSuspendJsonRoute, putAdminUsersIdSuspendJsonRouteHandler)
  .openapi(getCIdShowJsonRoute, getCIdShowJsonRouteHandler)
  .openapi(getCSlugIdJsonRoute, getCSlugIdJsonRouteHandler)
  .openapi(getCategoriesJsonRoute, getCategoriesJsonRouteHandler)
  .openapi(postCategoriesJsonRoute, postCategoriesJsonRouteHandler)
  .openapi(putCategoriesIdJsonRoute, putCategoriesIdJsonRouteHandler)
  .openapi(getDirectoryItemsJsonRoute, getDirectoryItemsJsonRouteHandler)
  .openapi(getGroupsJsonRoute, getGroupsJsonRouteHandler)
  .openapi(getGroupsIdJsonRoute, getGroupsIdJsonRouteHandler)
  .openapi(putGroupsIdJsonRoute, putGroupsIdJsonRouteHandler)
  .openapi(deleteGroupsIdMembersJsonRoute, deleteGroupsIdMembersJsonRouteHandler)
  .openapi(getGroupsIdMembersJsonRoute, getGroupsIdMembersJsonRouteHandler)
  .openapi(putGroupsIdMembersJsonRoute, putGroupsIdMembersJsonRouteHandler)
  .openapi(postInvitesJsonRoute, postInvitesJsonRouteHandler)
  .openapi(getLatestJsonRoute, getLatestJsonRouteHandler)
  .openapi(getNotificationsJsonRoute, getNotificationsJsonRouteHandler)
  .openapi(putNotificationsMarkReadJsonRoute, putNotificationsMarkReadJsonRouteHandler)
  .openapi(postPostActionsJsonRoute, postPostActionsJsonRouteHandler)
  .openapi(getPostsJsonRoute, getPostsJsonRouteHandler)
  .openapi(postPostsJsonRoute, postPostsJsonRouteHandler)
  .openapi(deletePostsIdJsonRoute, deletePostsIdJsonRouteHandler)
  .openapi(getPostsIdJsonRoute, getPostsIdJsonRouteHandler)
  .openapi(putPostsIdJsonRoute, putPostsIdJsonRouteHandler)
  .openapi(putPostsIdLockedJsonRoute, putPostsIdLockedJsonRouteHandler)
  .openapi(getPostsIdRepliesJsonRoute, getPostsIdRepliesJsonRouteHandler)
  .openapi(getSearchJsonRoute, getSearchJsonRouteHandler)
  .openapi(postSessionForgotPasswordJsonRoute, postSessionForgotPasswordJsonRouteHandler)
  .openapi(getSiteJsonRoute, getSiteJsonRouteHandler)
  .openapi(putTDashIdJsonRoute, putTDashIdJsonRouteHandler)
  .openapi(getTExternalIdExternalIdJsonRoute, getTExternalIdExternalIdJsonRouteHandler)
  .openapi(deleteTIdJsonRoute, deleteTIdJsonRouteHandler)
  .openapi(getTIdJsonRoute, getTIdJsonRouteHandler)
  .openapi(putTIdBookmarkJsonRoute, putTIdBookmarkJsonRouteHandler)
  .openapi(putTIdChangeTimestampJsonRoute, putTIdChangeTimestampJsonRouteHandler)
  .openapi(postTIdInviteJsonRoute, postTIdInviteJsonRouteHandler)
  .openapi(postTIdNotificationsJsonRoute, postTIdNotificationsJsonRouteHandler)
  .openapi(getTIdPostsJsonRoute, getTIdPostsJsonRouteHandler)
  .openapi(putTIdStatusJsonRoute, putTIdStatusJsonRouteHandler)
  .openapi(postTIdTimerJsonRoute, postTIdTimerJsonRouteHandler)
  .openapi(getTagNameJsonRoute, getTagNameJsonRouteHandler)
  .openapi(getTagGroupsJsonRoute, getTagGroupsJsonRouteHandler)
  .openapi(postTagGroupsJsonRoute, postTagGroupsJsonRouteHandler)
  .openapi(getTagGroupsIdJsonRoute, getTagGroupsIdJsonRouteHandler)
  .openapi(putTagGroupsIdJsonRoute, putTagGroupsIdJsonRouteHandler)
  .openapi(getTagsJsonRoute, getTagsJsonRouteHandler)
  .openapi(getTopJsonRoute, getTopJsonRouteHandler)
  .openapi(
    getTopicsPrivateMessagesSentUsernameJsonRoute,
    getTopicsPrivateMessagesSentUsernameJsonRouteHandler,
  )
  .openapi(
    getTopicsPrivateMessagesUsernameJsonRoute,
    getTopicsPrivateMessagesUsernameJsonRouteHandler,
  )
  .openapi(getUByExternalExternalIdJsonRoute, getUByExternalExternalIdJsonRouteHandler)
  .openapi(
    getUByExternalProviderExternalIdJsonRoute,
    getUByExternalProviderExternalIdJsonRouteHandler,
  )
  .openapi(getUUsernameJsonRoute, getUUsernameJsonRouteHandler)
  .openapi(putUUsernameJsonRoute, putUUsernameJsonRouteHandler)
  .openapi(getUUsernameEmailsJsonRoute, getUUsernameEmailsJsonRouteHandler)
  .openapi(
    putUUsernamePreferencesAvatarPickJsonRoute,
    putUUsernamePreferencesAvatarPickJsonRouteHandler,
  )
  .openapi(putUUsernamePreferencesEmailJsonRoute, putUUsernamePreferencesEmailJsonRouteHandler)
  .openapi(
    putUUsernamePreferencesUsernameJsonRoute,
    putUUsernamePreferencesUsernameJsonRouteHandler,
  )
  .openapi(postUploadsJsonRoute, postUploadsJsonRouteHandler)
  .openapi(postUploadsAbortMultipartJsonRoute, postUploadsAbortMultipartJsonRouteHandler)
  .openapi(
    postUploadsBatchPresignMultipartPartsJsonRoute,
    postUploadsBatchPresignMultipartPartsJsonRouteHandler,
  )
  .openapi(
    postUploadsCompleteExternalUploadJsonRoute,
    postUploadsCompleteExternalUploadJsonRouteHandler,
  )
  .openapi(postUploadsCompleteMultipartJsonRoute, postUploadsCompleteMultipartJsonRouteHandler)
  .openapi(postUploadsCreateMultipartJsonRoute, postUploadsCreateMultipartJsonRouteHandler)
  .openapi(
    postUploadsGeneratePresignedPutJsonRoute,
    postUploadsGeneratePresignedPutJsonRouteHandler,
  )
  .openapi(getUserBadgesUsernameJsonRoute, getUserBadgesUsernameJsonRouteHandler)
  .openapi(getUserActionsJsonRoute, getUserActionsJsonRouteHandler)
  .openapi(
    postUserAvatarUsernameRefreshGravatarJsonRoute,
    postUserAvatarUsernameRefreshGravatarJsonRouteHandler,
  )
  .openapi(postUsersJsonRoute, postUsersJsonRouteHandler)
  .openapi(putUsersPasswordResetTokenJsonRoute, putUsersPasswordResetTokenJsonRouteHandler)

export default app
