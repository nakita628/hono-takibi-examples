import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDiscoursePostEventEventsJson(
  args: InferRequestType<(typeof client)['discourse-post-event']['events.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discourse-post-event']['events.json'].$get(args, options))
}

export async function getDiscoursePostEventEventsIcs(
  args: InferRequestType<(typeof client)['discourse-post-event']['events.ics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discourse-post-event']['events.ics'].$get(args, options))
}

export async function getAdminBackupsJson(options?: ClientRequestOptions) {
  return await parseResponse(client.admin['backups.json'].$get(undefined, options))
}

export async function postAdminBackupsJson(
  args: InferRequestType<(typeof client.admin)['backups.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['backups.json'].$post(args, options))
}

export async function getAdminBackupsFilename(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.backups[':filename'].$get(args, options))
}

export async function putAdminBackupsFilename(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.backups[':filename'].$put(args, options))
}

export async function getAdminBadgesJson(options?: ClientRequestOptions) {
  return await parseResponse(client.admin['badges.json'].$get(undefined, options))
}

export async function postAdminBadgesJson(
  args: InferRequestType<(typeof client.admin)['badges.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['badges.json'].$post(args, options))
}

export async function putAdminBadgesIdJson(
  args: InferRequestType<(typeof client.admin.badges)[':id.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.badges[':id.json'].$put(args, options))
}

export async function deleteAdminBadgesIdJson(
  args: InferRequestType<(typeof client.admin.badges)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.badges[':id.json'].$delete(args, options))
}

export async function getCategoriesJson(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['categories.json'].$get(args, options))
}

export async function postCategoriesJson(
  args: InferRequestType<(typeof client)['categories.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['categories.json'].$post(args, options))
}

export async function putCategoriesIdJson(
  args: InferRequestType<(typeof client.categories)[':id.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id.json'].$put(args, options))
}

export async function getCSlugIdJson(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c[':slug'][':id.json'].$get(args, options))
}

export async function getCIdShowJson(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.c[':id']['show.json'].$get(args, options))
}

export async function postAdminGroupsJson(
  args: InferRequestType<(typeof client.admin)['groups.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['groups.json'].$post(args, options))
}

export async function deleteAdminGroupsIdJson(
  args: InferRequestType<(typeof client.admin.groups)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.groups[':id.json'].$delete(args, options))
}

export async function getGroupsNameJson(
  args: InferRequestType<(typeof client.groups)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':name.json'].$get(args, options))
}

export async function putGroupsIdJson(
  args: InferRequestType<(typeof client.groups)[':id.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id.json'].$put(args, options))
}

export async function getGroupsByIdIdJson(
  args: InferRequestType<(typeof client.groups)['by-id'][':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups['by-id'][':id.json'].$get(args, options))
}

export async function getGroupsNameMembersJson(
  args: InferRequestType<(typeof client.groups)[':name']['members.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':name']['members.json'].$get(args, options))
}

export async function putGroupsIdMembersJson(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id']['members.json'].$put(args, options))
}

export async function deleteGroupsIdMembersJson(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id']['members.json'].$delete(args, options))
}

export async function getGroupsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['groups.json'].$get(undefined, options))
}

export async function postInvitesJson(
  args: InferRequestType<(typeof client)['invites.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['invites.json'].$post(args, options))
}

export async function postInvitesCreateMultipleJson(
  args: InferRequestType<(typeof client.invites)['create-multiple.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites['create-multiple.json'].$post(args, options))
}

export async function getNotificationsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['notifications.json'].$get(undefined, options))
}

export async function putNotificationsMarkReadJson(
  args: InferRequestType<(typeof client.notifications)['mark-read.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['mark-read.json'].$put(args, options))
}

export async function getPostsJson(
  args: InferRequestType<(typeof client)['posts.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['posts.json'].$get(args, options))
}

export async function postPostsJson(
  args: InferRequestType<(typeof client)['posts.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['posts.json'].$post(args, options))
}

export async function getPostsIdJson(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':id.json'].$get(args, options))
}

export async function putPostsIdJson(
  args: InferRequestType<(typeof client.posts)[':id.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':id.json'].$put(args, options))
}

export async function deletePostsIdJson(
  args: InferRequestType<(typeof client.posts)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':id.json'].$delete(args, options))
}

export async function getPostsIdRepliesJson(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':id']['replies.json'].$get(args, options))
}

export async function putPostsIdLockedJson(
  args: InferRequestType<(typeof client.posts)[':id']['locked.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':id']['locked.json'].$put(args, options))
}

export async function postPostActionsJson(
  args: InferRequestType<(typeof client)['post_actions.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['post_actions.json'].$post(args, options))
}

export async function getTopicsPrivateMessagesUsernameJson(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.topics['private-messages'][':username.json'].$get(args, options),
  )
}

export async function getTopicsPrivateMessagesSentUsernameJson(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.topics['private-messages-sent'][':username.json'].$get(args, options),
  )
}

export async function getSearchJson(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search.json'].$get(args, options))
}

export async function getSiteJson(options?: ClientRequestOptions) {
  return await parseResponse(client['site.json'].$get(undefined, options))
}

export async function getSiteBasicInfoJson(options?: ClientRequestOptions) {
  return await parseResponse(client.site['basic-info.json'].$get(undefined, options))
}

export async function getTagGroupsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['tag_groups.json'].$get(undefined, options))
}

export async function postTagGroupsJson(
  args: InferRequestType<(typeof client)['tag_groups.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tag_groups.json'].$post(args, options))
}

export async function getTagGroupsIdJson(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tag_groups[':id.json'].$get(args, options))
}

export async function putTagGroupsIdJson(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tag_groups[':id.json'].$put(args, options))
}

export async function getTagsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['tags.json'].$get(undefined, options))
}

export async function getTagNameJson(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tag[':name.json'].$get(args, options))
}

export async function getTIdPostsJson(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['posts.json'].$get(args, options))
}

export async function getTIdJson(
  args: InferRequestType<(typeof client.t)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id.json'].$get(args, options))
}

export async function deleteTIdJson(
  args: InferRequestType<(typeof client.t)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id.json'].$delete(args, options))
}

export async function putTDashIdJson(
  args: InferRequestType<(typeof client.t)['-'][':id.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t['-'][':id.json'].$put(args, options))
}

export async function postTIdInviteJson(
  args: InferRequestType<(typeof client.t)[':id']['invite.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['invite.json'].$post(args, options))
}

export async function postTIdInviteGroupJson(
  args: InferRequestType<(typeof client.t)[':id']['invite-group.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['invite-group.json'].$post(args, options))
}

export async function putTIdBookmarkJson(
  args: InferRequestType<(typeof client.t)[':id']['bookmark.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['bookmark.json'].$put(args, options))
}

export async function putTIdStatusJson(
  args: InferRequestType<(typeof client.t)[':id']['status.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['status.json'].$put(args, options))
}

export async function getLatestJson(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['latest.json'].$get(args, options))
}

export async function getTopJson(
  args: InferRequestType<(typeof client)['top.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['top.json'].$get(args, options))
}

export async function postTIdNotificationsJson(
  args: InferRequestType<(typeof client.t)[':id']['notifications.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['notifications.json'].$post(args, options))
}

export async function putTIdChangeTimestampJson(
  args: InferRequestType<(typeof client.t)[':id']['change-timestamp.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['change-timestamp.json'].$put(args, options))
}

export async function postTIdTimerJson(
  args: InferRequestType<(typeof client.t)[':id']['timer.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t[':id']['timer.json'].$post(args, options))
}

export async function getTExternalIdExternalIdJson(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t.external_id[':external_id.json'].$get(args, options))
}

export async function postUploadsJson(
  args: InferRequestType<(typeof client)['uploads.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['uploads.json'].$post(args, options))
}

export async function postUploadsGeneratePresignedPutJson(
  args: InferRequestType<(typeof client.uploads)['generate-presigned-put.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads['generate-presigned-put.json'].$post(args, options))
}

export async function postUploadsCompleteExternalUploadJson(
  args: InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads['complete-external-upload.json'].$post(args, options))
}

export async function postUploadsCreateMultipartJson(
  args: InferRequestType<(typeof client.uploads)['create-multipart.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads['create-multipart.json'].$post(args, options))
}

export async function postUploadsBatchPresignMultipartPartsJson(
  args: InferRequestType<(typeof client.uploads)['batch-presign-multipart-parts.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.uploads['batch-presign-multipart-parts.json'].$post(args, options),
  )
}

export async function postUploadsAbortMultipartJson(
  args: InferRequestType<(typeof client.uploads)['abort-multipart.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads['abort-multipart.json'].$post(args, options))
}

export async function postUploadsCompleteMultipartJson(
  args: InferRequestType<(typeof client.uploads)['complete-multipart.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads['complete-multipart.json'].$post(args, options))
}

export async function postUserBadgesJson(
  args: InferRequestType<(typeof client)['user_badges.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user_badges.json'].$post(args, options))
}

export async function getUserBadgesUsernameJson(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-badges'][':username.json'].$get(args, options))
}

export async function postUsersJson(
  args: InferRequestType<(typeof client)['users.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.json'].$post(args, options))
}

export async function getUUsernameJson(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.u[':username.json'].$get(args, options))
}

export async function putUUsernameJson(
  args: InferRequestType<(typeof client.u)[':username.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.u[':username.json'].$put(args, options))
}

export async function getUByExternalExternalIdJson(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.u['by-external'][':external_id.json'].$get(args, options))
}

export async function getUByExternalProviderExternalIdJson(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.u['by-external'][':provider'][':external_id.json'].$get(args, options),
  )
}

export async function putUUsernamePreferencesAvatarPickJson(
  args: InferRequestType<
    (typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.u[':username'].preferences.avatar['pick.json'].$put(args, options),
  )
}

export async function putUUsernamePreferencesEmailJson(
  args: InferRequestType<(typeof client.u)[':username']['preferences']['email.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.u[':username'].preferences['email.json'].$put(args, options))
}

export async function putUUsernamePreferencesUsernameJson(
  args: InferRequestType<(typeof client.u)[':username']['preferences']['username.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.u[':username'].preferences['username.json'].$put(args, options))
}

export async function getDirectoryItemsJson(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['directory_items.json'].$get(args, options))
}

export async function getAdminUsersIdJson(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id.json'].$get(args, options))
}

export async function deleteAdminUsersIdJson(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id.json'].$delete(args, options))
}

export async function putAdminUsersIdActivateJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['activate.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['activate.json'].$put(args, options))
}

export async function putAdminUsersIdDeactivateJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['deactivate.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['deactivate.json'].$put(args, options))
}

export async function putAdminUsersIdSuspendJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['suspend.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['suspend.json'].$put(args, options))
}

export async function putAdminUsersIdSilenceJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['silence.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['silence.json'].$put(args, options))
}

export async function putAdminUsersIdAnonymizeJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['anonymize.json'].$put(args, options))
}

export async function postAdminUsersIdMergeJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['merge.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['merge.json'].$post(args, options))
}

export async function postAdminUsersIdLogOutJson(
  args: InferRequestType<(typeof client.admin.users)[':id']['log_out.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['log_out.json'].$post(args, options))
}

export async function postUserAvatarUsernameRefreshGravatarJson(
  args: InferRequestType<
    (typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_avatar[':username']['refresh_gravatar.json'].$post(args, options),
  )
}

export async function getAdminUsersJson(
  args: InferRequestType<(typeof client.admin)['users.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin['users.json'].$get(args, options))
}

export async function getAdminUsersListFlagJson(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.list[':flag.json'].$get(args, options))
}

export async function getUserActionsJson(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user_actions.json'].$get(args, options))
}

export async function postSessionForgotPasswordJson(
  args: InferRequestType<(typeof client.session)['forgot_password.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session['forgot_password.json'].$post(args, options))
}

export async function putUsersPasswordResetTokenJson(
  args: InferRequestType<(typeof client.users)['password-reset'][':token.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['password-reset'][':token.json'].$put(args, options))
}

export async function getUUsernameEmailsJson(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.u[':username']['emails.json'].$get(args, options))
}
