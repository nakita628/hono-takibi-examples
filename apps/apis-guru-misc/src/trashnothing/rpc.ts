import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConversations(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$get(args, options))
}

export async function putConversationsArchiveAll(
  args: InferRequestType<(typeof client.conversations)['archive-all']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations['archive-all'].$put(args, options))
}

export async function putConversationsMarkAllRead(
  args: InferRequestType<(typeof client.conversations)['mark-all-read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations['mark-all-read'].$put(args, options))
}

export async function getConversationsSearch(
  args: InferRequestType<typeof client.conversations.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.search.$get(args, options))
}

export async function deleteConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$delete(args, options))
}

export async function putConversationsConversationIdArchive(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].archive.$put(args, options))
}

export async function putConversationsConversationIdBlock(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['block']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].block.$put(args, options))
}

export async function putConversationsConversationIdMarkRead(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['mark-read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id']['mark-read'].$put(args, options),
  )
}

export async function getConversationsConversationIdMessages(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].messages.$get(args, options))
}

export async function postConversationsConversationIdReply(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].reply.$post(args, options))
}

export async function postConversationsConversationIdReport(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['report']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].report.$post(args, options))
}

export async function putConversationsConversationIdUnarchive(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].unarchive.$put(args, options))
}

export async function putConversationsConversationIdUnblock(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].unblock.$put(args, options))
}

export async function postFeedback(
  args: InferRequestType<typeof client.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback.$post(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function getGroupsMultiple(
  args: InferRequestType<typeof client.groups.multiple.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.multiple.$get(args, options))
}

export async function postGroupsSubscribe(
  args: InferRequestType<typeof client.groups.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.subscribe.$post(args, options))
}

export async function getGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].$get(args, options))
}

export async function postGroupsGroupIdAnswers(
  args: InferRequestType<(typeof client.groups)[':group_id']['answers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].answers.$post(args, options))
}

export async function postGroupsGroupIdContact(
  args: InferRequestType<(typeof client.groups)[':group_id']['contact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].contact.$post(args, options))
}

export async function postGroupsGroupIdUnsubscribe(
  args: InferRequestType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].unsubscribe.$post(args, options))
}

export async function postPhotos(
  args: InferRequestType<typeof client.photos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.photos.$post(args, options))
}

export async function getPhotosMultiple(
  args: InferRequestType<typeof client.photos.multiple.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.photos.multiple.$get(args, options))
}

export async function deletePhotosPhotoId(
  args: InferRequestType<(typeof client.photos)[':photo_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.photos[':photo_id'].$delete(args, options))
}

export async function postPhotosPhotoIdRotate(
  args: InferRequestType<(typeof client.photos)[':photo_id']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.photos[':photo_id'].rotate.$post(args, options))
}

export async function getPosts(
  args: InferRequestType<typeof client.posts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.$get(args, options))
}

export async function postPosts(
  args: InferRequestType<typeof client.posts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.$post(args, options))
}

export async function getPostsAll(
  args: InferRequestType<typeof client.posts.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.all.$get(args, options))
}

export async function getPostsAllChanges(
  args: InferRequestType<typeof client.posts.all.changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.all.changes.$get(args, options))
}

export async function getPostsMultiple(
  args: InferRequestType<typeof client.posts.multiple.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.multiple.$get(args, options))
}

export async function getPostsSearch(
  args: InferRequestType<typeof client.posts.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.search.$get(args, options))
}

export async function getPostsPostId(
  args: InferRequestType<(typeof client.posts)[':post_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].$get(args, options))
}

export async function putPostsPostId(
  args: InferRequestType<(typeof client.posts)[':post_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].$put(args, options))
}

export async function deletePostsPostId(
  args: InferRequestType<(typeof client.posts)[':post_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].$delete(args, options))
}

export async function putPostsPostIdBookmark(
  args: InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].bookmark.$put(args, options))
}

export async function deletePostsPostIdBookmark(
  args: InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].bookmark.$delete(args, options))
}

export async function getPostsPostIdDisplay(
  args: InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].display.$get(args, options))
}

export async function putPostsPostIdPromise(
  args: InferRequestType<(typeof client.posts)[':post_id']['promise']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].promise.$put(args, options))
}

export async function postPostsPostIdReply(
  args: InferRequestType<(typeof client.posts)[':post_id']['reply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].reply.$post(args, options))
}

export async function postPostsPostIdReport(
  args: InferRequestType<(typeof client.posts)[':post_id']['report']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].report.$post(args, options))
}

export async function putPostsPostIdSatisfy(
  args: InferRequestType<(typeof client.posts)[':post_id']['satisfy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].satisfy.$put(args, options))
}

export async function postPostsPostIdShare(
  args: InferRequestType<(typeof client.posts)[':post_id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].share.$post(args, options))
}

export async function putPostsPostIdUnpromise(
  args: InferRequestType<(typeof client.posts)[':post_id']['unpromise']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].unpromise.$put(args, options))
}

export async function putPostsPostIdWithdraw(
  args: InferRequestType<(typeof client.posts)[':post_id']['withdraw']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':post_id'].withdraw.$put(args, options))
}

export async function getStories(
  args: InferRequestType<typeof client.stories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories.$get(args, options))
}

export async function postStories(
  args: InferRequestType<typeof client.stories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories.$post(args, options))
}

export async function getStoriesStoryId(
  args: InferRequestType<(typeof client.stories)[':story_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_id'].$get(args, options))
}

export async function putStoriesStoryIdLike(
  args: InferRequestType<(typeof client.stories)[':story_id']['like']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_id'].like.$put(args, options))
}

export async function putStoriesStoryIdUnlike(
  args: InferRequestType<(typeof client.stories)[':story_id']['unlike']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_id'].unlike.$put(args, options))
}

export async function postStoriesStoryIdViewed(
  args: InferRequestType<(typeof client.stories)[':story_id']['viewed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_id'].viewed.$post(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function putUsersMe(
  args: InferRequestType<typeof client.users.me.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.$put(args, options))
}

export async function getUsersMeAlerts(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.alerts.$get(undefined, options))
}

export async function putUsersMeAlerts(
  args: InferRequestType<typeof client.users.me.alerts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.alerts.$put(args, options))
}

export async function deleteUsersMeAlertsAlertId(
  args: InferRequestType<(typeof client.users.me.alerts)[':alert_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.alerts[':alert_id'].$delete(args, options))
}

export async function postUsersMeEmail(
  args: InferRequestType<typeof client.users.me.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.email.$post(args, options))
}

export async function putUsersMeEmailNotBouncing(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.email['not-bouncing'].$put(undefined, options))
}

export async function getUsersMeGroups(
  args: InferRequestType<typeof client.users.me.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.groups.$get(args, options))
}

export async function putUsersMeLocation(
  args: InferRequestType<typeof client.users.me.location.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.location.$put(args, options))
}

export async function getUsersMeNotices(
  args: InferRequestType<typeof client.users.me.notices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.notices.$get(args, options))
}

export async function getUsersMePostLocations(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me['post-locations'].$get(undefined, options))
}

export async function putUsersMePostLocations(
  args: InferRequestType<(typeof client.users.me)['post-locations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me['post-locations'].$put(args, options))
}

export async function getUsersMePosts(
  args: InferRequestType<typeof client.users.me.posts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.posts.$get(args, options))
}

export async function getUsersMePostsSearch(
  args: InferRequestType<typeof client.users.me.posts.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.posts.search.$get(args, options))
}

export async function postUsersMeProfileImage(
  args: InferRequestType<(typeof client.users.me)['profile-image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me['profile-image'].$post(args, options))
}

export async function getUsersMeProfileImages(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me['profile-images'].$get(undefined, options))
}

export async function postUsersMeResendVerification(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me['resend-verification'].$post(undefined, options))
}

export async function postUsersMeResetPassword(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me['reset-password'].$post(undefined, options))
}

export async function postUsersReport(
  args: InferRequestType<typeof client.users.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.report.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function getUsersUserIdDisplay(
  args: InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].display.$get(args, options))
}

export async function postUsersUserIdFeedback(
  args: InferRequestType<(typeof client.users)[':user_id']['feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].feedback.$post(args, options))
}

export async function deleteUsersUserIdFeedback(
  args: InferRequestType<(typeof client.users)[':user_id']['feedback']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].feedback.$delete(args, options))
}

export async function getUsersUserIdPosts(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].posts.$get(args, options))
}

export async function getUsersUserIdPostsSearch(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].posts.search.$get(args, options))
}

export async function getUsersUserIdProfileImage(
  args: InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id']['profile-image'].$get(args, options))
}
