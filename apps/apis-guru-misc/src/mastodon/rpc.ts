import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiOembed(
  args: InferRequestType<typeof client.api.oembed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oembed.$get(args, options))
}

export async function getApiProofs(
  args: InferRequestType<typeof client.api.proofs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.proofs.$get(args, options))
}

export async function postApiV1Accounts(
  args: InferRequestType<typeof client.api.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts.$post(args, options))
}

export async function getApiV1AccountsRelationships(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts.relationships.$get(args, options))
}

export async function getApiV1AccountsSearch(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts.search.$get(args, options))
}

export async function patchApiV1AccountsUpdateCredentials(
  args: InferRequestType<typeof client.api.v1.accounts.update_credentials.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts.update_credentials.$patch(args, options))
}

export async function getApiV1AccountsVerifyCredentials(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.accounts.verify_credentials.$get(undefined, options))
}

export async function getApiV1AccountsId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].$get(args, options))
}

export async function postApiV1AccountsIdBlock(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].block.$post(args, options))
}

export async function getApiV1AccountsIdFeaturedTags(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].featured_tags.$get(args, options))
}

export async function postApiV1AccountsIdFollow(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].follow.$post(args, options))
}

export async function getApiV1AccountsIdFollowers(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].followers.$get(args, options))
}

export async function getApiV1AccountsIdFollowing(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].following.$get(args, options))
}

export async function getApiV1AccountsIdIdentityProofs(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].identity_proofs.$get(args, options))
}

export async function getApiV1AccountsIdLists(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].lists.$get(args, options))
}

export async function postApiV1AccountsIdMute(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].mute.$post(args, options))
}

export async function postApiV1AccountsIdNote(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['note']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].note.$post(args, options))
}

export async function postApiV1AccountsIdPin(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].pin.$post(args, options))
}

export async function getApiV1AccountsIdStatuses(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].statuses.$get(args, options))
}

export async function postApiV1AccountsIdUnblock(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].unblock.$post(args, options))
}

export async function postApiV1AccountsIdUnfollow(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].unfollow.$post(args, options))
}

export async function postApiV1AccountsIdUnmute(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].unmute.$post(args, options))
}

export async function postApiV1AccountsIdUnpin(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':id'].unpin.$post(args, options))
}

export async function getApiV1AdminAccounts(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts.$get(args, options))
}

export async function getApiV1AdminAccountsId(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].$get(args, options))
}

export async function postApiV1AdminAccountsIdAction(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].action.$post(args, options))
}

export async function postApiV1AdminAccountsIdApprove(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].approve.$post(args, options))
}

export async function postApiV1AdminAccountsIdEnable(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].enable.$post(args, options))
}

export async function postApiV1AdminAccountsIdReject(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].reject.$post(args, options))
}

export async function postApiV1AdminAccountsIdUnsilence(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].unsilence.$post(args, options))
}

export async function postApiV1AdminAccountsIdUnsuspend(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.accounts[':id'].unsuspend.$post(args, options))
}

export async function getApiV1AdminReports(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.reports.$get(args, options))
}

export async function getApiV1AdminReportsId(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.reports[':id'].$get(args, options))
}

export async function postApiV1AdminReportsIdAssignToSelf(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.reports[':id'].assign_to_self.$post(args, options))
}

export async function postApiV1AdminReportsIdReopen(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.reports[':id'].reopen.$post(args, options))
}

export async function postApiV1AdminReportsIdResolve(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.reports[':id'].resolve.$post(args, options))
}

export async function postApiV1AdminReportsIdUnassign(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.admin.reports[':id'].unassign.$post(args, options))
}

export async function getApiV1Announcements(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.announcements.$get(args, options))
}

export async function postApiV1AnnouncementsIdDismiss(
  args: InferRequestType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.announcements[':id'].dismiss.$post(args, options))
}

export async function putApiV1AnnouncementsIdReactionsName(
  args: InferRequestType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.announcements[':id'].reactions[':name'].$put(args, options),
  )
}

export async function deleteApiV1AnnouncementsIdReactionsName(
  args: InferRequestType<
    (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.announcements[':id'].reactions[':name'].$delete(args, options),
  )
}

export async function postApiV1Apps(
  args: InferRequestType<typeof client.api.v1.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps.$post(args, options))
}

export async function getApiV1AppsVerifyCredentials(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.apps.verify_credentials.$get(undefined, options))
}

export async function getApiV1Blocks(
  args: InferRequestType<typeof client.api.v1.blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.blocks.$get(args, options))
}

export async function getApiV1Bookmarks(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bookmarks.$get(args, options))
}

export async function getApiV1Conversations(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.conversations.$get(args, options))
}

export async function deleteApiV1ConversationsId(
  args: InferRequestType<(typeof client.api.v1.conversations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.conversations[':id'].$delete(args, options))
}

export async function postApiV1ConversationsIdRead(
  args: InferRequestType<(typeof client.api.v1.conversations)[':id']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.conversations[':id'].read.$post(args, options))
}

export async function getApiV1CustomEmojis(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.custom_emojis.$get(undefined, options))
}

export async function getApiV1Directory(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.directory.$get(args, options))
}

export async function getApiV1DomainBlocks(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.domain_blocks.$get(args, options))
}

export async function postApiV1DomainBlocks(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.domain_blocks.$post(args, options))
}

export async function deleteApiV1DomainBlocks(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.domain_blocks.$delete(args, options))
}

export async function getApiV1Endorsements(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.endorsements.$get(args, options))
}

export async function getApiV1Favourites(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.favourites.$get(args, options))
}

export async function getApiV1FeaturedTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.featured_tags.$get(undefined, options))
}

export async function postApiV1FeaturedTags(
  args: InferRequestType<typeof client.api.v1.featured_tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.featured_tags.$post(args, options))
}

export async function getApiV1FeaturedTagsSuggestions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.featured_tags.suggestions.$get(undefined, options))
}

export async function deleteApiV1FeaturedTagsId(
  args: InferRequestType<(typeof client.api.v1.featured_tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.featured_tags[':id'].$delete(args, options))
}

export async function getApiV1Filters(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.filters.$get(undefined, options))
}

export async function postApiV1Filters(
  args: InferRequestType<typeof client.api.v1.filters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filters.$post(args, options))
}

export async function getApiV1FiltersId(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filters[':id'].$get(args, options))
}

export async function putApiV1FiltersId(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filters[':id'].$put(args, options))
}

export async function deleteApiV1FiltersId(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filters[':id'].$delete(args, options))
}

export async function getApiV1FollowRequests(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.follow_requests.$get(args, options))
}

export async function postApiV1FollowRequestsIdAuthorize(
  args: InferRequestType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.follow_requests[':id'].authorize.$post(args, options))
}

export async function postApiV1FollowRequestsIdReject(
  args: InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.follow_requests[':id'].reject.$post(args, options))
}

export async function getApiV1Instance(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.instance.$get(undefined, options))
}

export async function getApiV1InstanceActivity(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.instance.activity.$get(undefined, options))
}

export async function getApiV1InstancePeers(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.instance.peers.$get(undefined, options))
}

export async function getApiV1Lists(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.lists.$get(undefined, options))
}

export async function putApiV1Lists(
  args: InferRequestType<typeof client.api.v1.lists.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.lists.$put(args, options))
}

export async function postApiV1Lists(
  args: InferRequestType<typeof client.api.v1.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.lists.$post(args, options))
}

export async function deleteApiV1Lists(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.lists.$delete(undefined, options))
}

export async function getApiV1ListsId(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.lists[':id'].$get(args, options))
}

export async function getApiV1ListsIdAccounts(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.lists[':id'].accounts.$get(args, options))
}

export async function postApiV1ListsIdAccounts(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.lists[':id'].accounts.$post(args, options))
}

export async function deleteApiV1ListsIdAccounts(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.lists[':id'].accounts.$delete(args, options))
}

export async function getApiV1Markers(
  args: InferRequestType<typeof client.api.v1.markers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.markers.$get(args, options))
}

export async function postApiV1Markers(
  args: InferRequestType<typeof client.api.v1.markers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.markers.$post(args, options))
}

export async function postApiV1Media(
  args: InferRequestType<typeof client.api.v1.media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.media.$post(args, options))
}

export async function getApiV1MediaId(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.media[':id'].$get(args, options))
}

export async function postApiV1MediaId(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.media[':id'].$post(args, options))
}

export async function getApiV1Mutes(
  args: InferRequestType<typeof client.api.v1.mutes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.mutes.$get(args, options))
}

export async function getApiV1Notifications(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notifications.$get(args, options))
}

export async function postApiV1NotificationsClear(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.notifications.clear.$post(undefined, options))
}

export async function getApiV1NotificationsId(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notifications[':id'].$get(args, options))
}

export async function postApiV1NotificationsIdDismiss(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notifications[':id'].dismiss.$post(args, options))
}

export async function getApiV1PollsId(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.polls[':id'].$get(args, options))
}

export async function postApiV1PollsId(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.polls[':id'].$post(args, options))
}

export async function getApiV1Preferences(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.preferences.$get(undefined, options))
}

export async function getApiV1PushSubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.push.subscription.$get(undefined, options))
}

export async function putApiV1PushSubscription(
  args: InferRequestType<typeof client.api.v1.push.subscription.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.push.subscription.$put(args, options))
}

export async function postApiV1PushSubscription(
  args: InferRequestType<typeof client.api.v1.push.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.push.subscription.$post(args, options))
}

export async function deleteApiV1PushSubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.push.subscription.$delete(undefined, options))
}

export async function postApiV1Reports(
  args: InferRequestType<typeof client.api.v1.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.$post(args, options))
}

export async function getApiV1ScheduledStatuses(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scheduled_statuses.$get(args, options))
}

export async function getApiV1ScheduledStatusesId(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scheduled_statuses[':id'].$get(args, options))
}

export async function putApiV1ScheduledStatusesId(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scheduled_statuses[':id'].$put(args, options))
}

export async function deleteApiV1ScheduledStatusesId(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scheduled_statuses[':id'].$delete(args, options))
}

export async function postApiV1Statuses(
  args: InferRequestType<typeof client.api.v1.statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses.$post(args, options))
}

export async function getApiV1StatusesId(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].$get(args, options))
}

export async function deleteApiV1StatusesId(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].$delete(args, options))
}

export async function postApiV1StatusesIdBookmark(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].bookmark.$post(args, options))
}

export async function getApiV1StatusesIdContext(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].context.$get(args, options))
}

export async function postApiV1StatusesIdFavourite(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].favourite.$post(args, options))
}

export async function getApiV1StatusesIdFavouritedBy(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].favourited_by.$get(args, options))
}

export async function postApiV1StatusesIdMute(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].mute.$post(args, options))
}

export async function postApiV1StatusesIdPin(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].pin.$post(args, options))
}

export async function postApiV1StatusesIdReblog(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].reblog.$post(args, options))
}

export async function getApiV1StatusesIdRebloggedBy(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].reblogged_by.$get(args, options))
}

export async function postApiV1StatusesIdUnbookmark(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].unbookmark.$post(args, options))
}

export async function postApiV1StatusesIdUnfavourite(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].unfavourite.$post(args, options))
}

export async function postApiV1StatusesIdUnmute(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].unmute.$post(args, options))
}

export async function postApiV1StatusesIdUnpin(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].unpin.$post(args, options))
}

export async function postApiV1StatusesIdUnreblog(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statuses[':id'].unreblog.$post(args, options))
}

export async function getApiV1Suggestions(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.suggestions.$get(args, options))
}

export async function deleteApiV1SuggestionsId(
  args: InferRequestType<(typeof client.api.v1.suggestions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.suggestions[':id'].$delete(args, options))
}

export async function getApiV1TimelinesHome(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.timelines.home.$get(args, options))
}

export async function getApiV1TimelinesListListId(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.timelines.list[':list_id'].$get(args, options))
}

export async function getApiV1TimelinesPublic(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.timelines.public.$get(args, options))
}

export async function getApiV1TimelinesTagHashtag(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.timelines.tag[':hashtag'].$get(args, options))
}

export async function getApiV1Trends(
  args: InferRequestType<typeof client.api.v1.trends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.trends.$get(args, options))
}

export async function getApiV2Search(
  args: InferRequestType<typeof client.api.v2.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.search.$get(args, options))
}

export async function getOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$get(args, options))
}

export async function postOauthRevoke(
  args: InferRequestType<typeof client.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.revoke.$post(args, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}
