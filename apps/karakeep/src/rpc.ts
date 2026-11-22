import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBookmarks(
  args: InferRequestType<typeof client.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks.$get(args, options))
}

export async function postBookmarks(
  args: InferRequestType<typeof client.bookmarks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks.$post(args, options))
}

export async function getBookmarksSearch(
  args: InferRequestType<typeof client.bookmarks.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks.search.$get(args, options))
}

export async function getBookmarksCheckUrl(
  args: InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks['check-url'].$get(args, options))
}

export async function getBookmarksBookmarkId(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].$get(args, options))
}

export async function deleteBookmarksBookmarkId(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].$delete(args, options))
}

export async function patchBookmarksBookmarkId(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].$patch(args, options))
}

export async function getBookmarksBookmarkIdContent(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].content.$get(args, options))
}

export async function postBookmarksBookmarkIdSummarize(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].summarize.$post(args, options))
}

export async function postBookmarksBookmarkIdTags(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].tags.$post(args, options))
}

export async function deleteBookmarksBookmarkIdTags(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].tags.$delete(args, options))
}

export async function getBookmarksBookmarkIdLists(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].lists.$get(args, options))
}

export async function getBookmarksBookmarkIdHighlights(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].highlights.$get(args, options))
}

export async function postBookmarksBookmarkIdAssets(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].assets.$post(args, options))
}

export async function putBookmarksBookmarkIdAssetsAssetId(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':bookmarkId'].assets[':assetId'].$put(args, options))
}

export async function deleteBookmarksBookmarkIdAssetsAssetId(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bookmarks[':bookmarkId'].assets[':assetId'].$delete(args, options),
  )
}

export async function getLists(options?: ClientRequestOptions) {
  return await parseResponse(client.lists.$get(undefined, options))
}

export async function postLists(
  args: InferRequestType<typeof client.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$post(args, options))
}

export async function getListsListId(
  args: InferRequestType<(typeof client.lists)[':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':listId'].$get(args, options))
}

export async function deleteListsListId(
  args: InferRequestType<(typeof client.lists)[':listId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':listId'].$delete(args, options))
}

export async function patchListsListId(
  args: InferRequestType<(typeof client.lists)[':listId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':listId'].$patch(args, options))
}

export async function getListsListIdBookmarks(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':listId'].bookmarks.$get(args, options))
}

export async function putListsListIdBookmarksBookmarkId(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':listId'].bookmarks[':bookmarkId'].$put(args, options))
}

export async function deleteListsListIdBookmarksBookmarkId(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lists[':listId'].bookmarks[':bookmarkId'].$delete(args, options),
  )
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function getTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].$get(args, options))
}

export async function deleteTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].$delete(args, options))
}

export async function patchTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tagId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].$patch(args, options))
}

export async function getTagsTagIdBookmarks(
  args: InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].bookmarks.$get(args, options))
}

export async function getHighlights(
  args: InferRequestType<typeof client.highlights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.highlights.$get(args, options))
}

export async function postHighlights(
  args: InferRequestType<typeof client.highlights.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.highlights.$post(args, options))
}

export async function getHighlightsHighlightId(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.highlights[':highlightId'].$get(args, options))
}

export async function deleteHighlightsHighlightId(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.highlights[':highlightId'].$delete(args, options))
}

export async function patchHighlightsHighlightId(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.highlights[':highlightId'].$patch(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function getUsersMeStats(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.stats.$get(undefined, options))
}

export async function postAssets(
  args: InferRequestType<typeof client.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$post(args, options))
}

export async function getAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$get(args, options))
}

export async function getAssetsAssetIdSignedUrl(
  args: InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId']['signed-url'].$get(args, options))
}

export async function putAdminUsersUserId(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':userId'].$put(args, options))
}

export async function postAdminJobsTriggerRecrawl(
  args: InferRequestType<typeof client.admin.jobs.trigger.recrawl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.jobs.trigger.recrawl.$post(args, options))
}

export async function postAdminJobsTriggerReindex(
  args: InferRequestType<typeof client.admin.jobs.trigger.reindex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.jobs.trigger.reindex.$post(args, options))
}

export async function postAdminJobsTriggerInference(
  args: InferRequestType<typeof client.admin.jobs.trigger.inference.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.jobs.trigger.inference.$post(args, options))
}

export async function getBackups(options?: ClientRequestOptions) {
  return await parseResponse(client.backups.$get(undefined, options))
}

export async function postBackups(options?: ClientRequestOptions) {
  return await parseResponse(client.backups.$post(undefined, options))
}

export async function getBackupsBackupId(
  args: InferRequestType<(typeof client.backups)[':backupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':backupId'].$get(args, options))
}

export async function deleteBackupsBackupId(
  args: InferRequestType<(typeof client.backups)[':backupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':backupId'].$delete(args, options))
}

export async function getBackupsBackupIdDownload(
  args: InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backups[':backupId'].download.$get(args, options))
}

export async function getFeeds(options?: ClientRequestOptions) {
  return await parseResponse(client.feeds.$get(undefined, options))
}

export async function postFeeds(
  args: InferRequestType<typeof client.feeds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.$post(args, options))
}

export async function getFeedsFeedId(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':feedId'].$get(args, options))
}

export async function deleteFeedsFeedId(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':feedId'].$delete(args, options))
}

export async function patchFeedsFeedId(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':feedId'].$patch(args, options))
}

export async function postFeedsFeedIdFetch(
  args: InferRequestType<(typeof client.feeds)[':feedId']['fetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':feedId'].fetch.$post(args, options))
}
