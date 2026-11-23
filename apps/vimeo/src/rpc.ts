import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function getCategoriesCategory(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].$get(args, options))
}

export async function getCategoriesCategoryChannels(
  args: InferRequestType<(typeof client.categories)[':category']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].channels.$get(args, options))
}

export async function getCategoriesCategoryGroups(
  args: InferRequestType<(typeof client.categories)[':category']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].groups.$get(args, options))
}

export async function getCategoriesCategoryVideos(
  args: InferRequestType<(typeof client.categories)[':category']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].videos.$get(args, options))
}

export async function getCategoriesCategoryVideosVideoId(
  args: InferRequestType<(typeof client.categories)[':category']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].videos[':video_id'].$get(args, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function postChannels(
  args: InferRequestType<typeof client.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$post(args, options))
}

export async function getChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$get(args, options))
}

export async function deleteChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$delete(args, options))
}

export async function patchChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$patch(args, options))
}

export async function getChannelsChannelIdCategories(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].categories.$get(args, options))
}

export async function putChannelsChannelIdCategories(
  args: InferRequestType<(typeof client.channels)[':channel_id']['categories']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].categories.$put(args, options))
}

export async function putChannelsChannelIdCategoriesCategory(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['categories'][':category']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].categories[':category'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdCategoriesCategory(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['categories'][':category']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].categories[':category'].$delete(args, options),
  )
}

export async function getChannelsChannelIdModerators(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].moderators.$get(args, options))
}

export async function putChannelsChannelIdModerators(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].moderators.$put(args, options))
}

export async function deleteChannelsChannelIdModerators(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].moderators.$delete(args, options))
}

export async function patchChannelsChannelIdModerators(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].moderators.$patch(args, options))
}

export async function getChannelsChannelIdModeratorsUserId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].moderators[':user_id'].$get(args, options),
  )
}

export async function putChannelsChannelIdModeratorsUserId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['moderators'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].moderators[':user_id'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdModeratorsUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['moderators'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].moderators[':user_id'].$delete(args, options),
  )
}

export async function getChannelsChannelIdPrivacyUsers(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].privacy.users.$get(args, options))
}

export async function putChannelsChannelIdPrivacyUsers(
  args: InferRequestType<(typeof client.channels)[':channel_id']['privacy']['users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].privacy.users.$put(args, options))
}

export async function putChannelsChannelIdPrivacyUsersUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].privacy.users[':user_id'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdPrivacyUsersUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['privacy']['users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].privacy.users[':user_id'].$delete(args, options),
  )
}

export async function getChannelsChannelIdTags(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].tags.$get(args, options))
}

export async function putChannelsChannelIdTags(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].tags.$put(args, options))
}

export async function getChannelsChannelIdTagsWord(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].tags[':word'].$get(args, options))
}

export async function putChannelsChannelIdTagsWord(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].tags[':word'].$put(args, options))
}

export async function deleteChannelsChannelIdTagsWord(
  args: InferRequestType<(typeof client.channels)[':channel_id']['tags'][':word']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].tags[':word'].$delete(args, options))
}

export async function getChannelsChannelIdUsers(
  args: InferRequestType<(typeof client.channels)[':channel_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].users.$get(args, options))
}

export async function getChannelsChannelIdVideos(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].videos.$get(args, options))
}

export async function putChannelsChannelIdVideos(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].videos.$put(args, options))
}

export async function deleteChannelsChannelIdVideos(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].videos.$delete(args, options))
}

export async function getChannelsChannelIdVideosVideoId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].videos[':video_id'].$get(args, options))
}

export async function putChannelsChannelIdVideosVideoId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].videos[':video_id'].$put(args, options))
}

export async function deleteChannelsChannelIdVideosVideoId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['videos'][':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function getChannelsChannelIdVideosVideoIdComments(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].comments.$get(args, options),
  )
}

export async function postChannelsChannelIdVideosVideoIdComments(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].comments.$post(args, options),
  )
}

export async function getChannelsChannelIdVideosVideoIdCredits(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].credits.$get(args, options),
  )
}

export async function postChannelsChannelIdVideosVideoIdCredits(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['credits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].credits.$post(args, options),
  )
}

export async function getChannelsChannelIdVideosVideoIdLikes(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['likes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].likes.$get(args, options),
  )
}

export async function getChannelsChannelIdVideosVideoIdPictures(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].pictures.$get(args, options),
  )
}

export async function postChannelsChannelIdVideosVideoIdPictures(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['pictures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].pictures.$post(args, options),
  )
}

export async function getChannelsChannelIdVideosVideoIdPrivacyUsers(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].privacy.users.$get(args, options),
  )
}

export async function putChannelsChannelIdVideosVideoIdPrivacyUsers(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['privacy']['users']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].privacy.users.$put(args, options),
  )
}

export async function getChannelsChannelIdVideosVideoIdTexttracks(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].texttracks.$get(args, options),
  )
}

export async function postChannelsChannelIdVideosVideoIdTexttracks(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['videos'][':video_id']['texttracks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].videos[':video_id'].texttracks.$post(args, options),
  )
}

export async function getContentratings(options?: ClientRequestOptions) {
  return await parseResponse(client.contentratings.$get(undefined, options))
}

export async function getCreativecommons(options?: ClientRequestOptions) {
  return await parseResponse(client.creativecommons.$get(undefined, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function getGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].$get(args, options))
}

export async function deleteGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].$delete(args, options))
}

export async function getGroupsGroupIdUsers(
  args: InferRequestType<(typeof client.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].users.$get(args, options))
}

export async function getGroupsGroupIdVideos(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].videos.$get(args, options))
}

export async function getGroupsGroupIdVideosVideoId(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].videos[':video_id'].$get(args, options))
}

export async function putGroupsGroupIdVideosVideoId(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].videos[':video_id'].$put(args, options))
}

export async function deleteGroupsGroupIdVideosVideoId(
  args: InferRequestType<(typeof client.groups)[':group_id']['videos'][':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].videos[':video_id'].$delete(args, options))
}

export async function getLanguages(
  args: InferRequestType<typeof client.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.languages.$get(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function patchMe(
  args: InferRequestType<typeof client.me.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$patch(args, options))
}

export async function getMeAlbums(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums.$get(args, options))
}

export async function postMeAlbums(
  args: InferRequestType<typeof client.me.albums.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums.$post(args, options))
}

export async function getMeAlbumsAlbumId(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].$get(args, options))
}

export async function deleteMeAlbumsAlbumId(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].$delete(args, options))
}

export async function patchMeAlbumsAlbumId(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].$patch(args, options))
}

export async function getMeAlbumsAlbumIdVideos(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].videos.$get(args, options))
}

export async function putMeAlbumsAlbumIdVideos(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].videos.$put(args, options))
}

export async function getMeAlbumsAlbumIdVideosVideoId(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].videos[':video_id'].$get(args, options))
}

export async function putMeAlbumsAlbumIdVideosVideoId(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums[':album_id'].videos[':video_id'].$put(args, options))
}

export async function deleteMeAlbumsAlbumIdVideosVideoId(
  args: InferRequestType<(typeof client.me.albums)[':album_id']['videos'][':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.albums[':album_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnail(
  args: InferRequestType<
    (typeof client.me.albums)[':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.albums[':album_id'].videos[':video_id'].set_album_thumbnail.$post(args, options),
  )
}

export async function getMeAppearances(
  args: InferRequestType<typeof client.me.appearances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.appearances.$get(args, options))
}

export async function getMeCategories(
  args: InferRequestType<typeof client.me.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.categories.$get(args, options))
}

export async function getMeCategoriesCategory(
  args: InferRequestType<(typeof client.me.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.categories[':category'].$get(args, options))
}

export async function putMeCategoriesCategory(
  args: InferRequestType<(typeof client.me.categories)[':category']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.categories[':category'].$put(args, options))
}

export async function deleteMeCategoriesCategory(
  args: InferRequestType<(typeof client.me.categories)[':category']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.categories[':category'].$delete(args, options))
}

export async function getMeChannels(
  args: InferRequestType<typeof client.me.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.channels.$get(args, options))
}

export async function getMeChannelsChannelId(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.channels[':channel_id'].$get(args, options))
}

export async function putMeChannelsChannelId(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.channels[':channel_id'].$put(args, options))
}

export async function deleteMeChannelsChannelId(
  args: InferRequestType<(typeof client.me.channels)[':channel_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.channels[':channel_id'].$delete(args, options))
}

export async function getMeCustomlogos(options?: ClientRequestOptions) {
  return await parseResponse(client.me.customlogos.$get(undefined, options))
}

export async function postMeCustomlogos(options?: ClientRequestOptions) {
  return await parseResponse(client.me.customlogos.$post(undefined, options))
}

export async function getMeCustomlogosLogoId(
  args: InferRequestType<(typeof client.me.customlogos)[':logo_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.customlogos[':logo_id'].$get(args, options))
}

export async function getMeFeed(
  args: InferRequestType<typeof client.me.feed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.feed.$get(args, options))
}

export async function getMeFollowers(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followers.$get(args, options))
}

export async function getMeFollowing(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following.$get(args, options))
}

export async function postMeFollowing(
  args: InferRequestType<typeof client.me.following.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following.$post(args, options))
}

export async function getMeFollowingFollowUserId(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following[':follow_user_id'].$get(args, options))
}

export async function putMeFollowingFollowUserId(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following[':follow_user_id'].$put(args, options))
}

export async function deleteMeFollowingFollowUserId(
  args: InferRequestType<(typeof client.me.following)[':follow_user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following[':follow_user_id'].$delete(args, options))
}

export async function getMeGroups(
  args: InferRequestType<typeof client.me.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.groups.$get(args, options))
}

export async function getMeGroupsGroupId(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.groups[':group_id'].$get(args, options))
}

export async function putMeGroupsGroupId(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.groups[':group_id'].$put(args, options))
}

export async function deleteMeGroupsGroupId(
  args: InferRequestType<(typeof client.me.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.groups[':group_id'].$delete(args, options))
}

export async function getMeLikes(
  args: InferRequestType<typeof client.me.likes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.likes.$get(args, options))
}

export async function getMeLikesVideoId(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.likes[':video_id'].$get(args, options))
}

export async function putMeLikesVideoId(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.likes[':video_id'].$put(args, options))
}

export async function deleteMeLikesVideoId(
  args: InferRequestType<(typeof client.me.likes)[':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.likes[':video_id'].$delete(args, options))
}

export async function getMeOndemandPages(
  args: InferRequestType<typeof client.me.ondemand.pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.ondemand.pages.$get(args, options))
}

export async function postMeOndemandPages(
  args: InferRequestType<typeof client.me.ondemand.pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.ondemand.pages.$post(args, options))
}

export async function getMeOndemandPurchases(
  args: InferRequestType<typeof client.me.ondemand.purchases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.ondemand.purchases.$get(args, options))
}

export async function getMeOndemandPurchasesOndemandId(
  args: InferRequestType<(typeof client.me.ondemand.purchases)[':ondemand_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.ondemand.purchases[':ondemand_id'].$get(args, options))
}

export async function getMePictures(
  args: InferRequestType<typeof client.me.pictures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.pictures.$get(args, options))
}

export async function postMePictures(options?: ClientRequestOptions) {
  return await parseResponse(client.me.pictures.$post(undefined, options))
}

export async function getMePicturesPortraitsetId(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.pictures[':portraitset_id'].$get(args, options))
}

export async function deleteMePicturesPortraitsetId(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.pictures[':portraitset_id'].$delete(args, options))
}

export async function patchMePicturesPortraitsetId(
  args: InferRequestType<(typeof client.me.pictures)[':portraitset_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.pictures[':portraitset_id'].$patch(args, options))
}

export async function getMePortfolios(
  args: InferRequestType<typeof client.me.portfolios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.portfolios.$get(args, options))
}

export async function getMePortfoliosPortfolioId(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.portfolios[':portfolio_id'].$get(args, options))
}

export async function getMePortfoliosPortfolioIdVideos(
  args: InferRequestType<(typeof client.me.portfolios)[':portfolio_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.portfolios[':portfolio_id'].videos.$get(args, options))
}

export async function getMePortfoliosPortfolioIdVideosVideoId(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.portfolios[':portfolio_id'].videos[':video_id'].$get(args, options),
  )
}

export async function putMePortfoliosPortfolioIdVideosVideoId(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.portfolios[':portfolio_id'].videos[':video_id'].$put(args, options),
  )
}

export async function deleteMePortfoliosPortfolioIdVideosVideoId(
  args: InferRequestType<
    (typeof client.me.portfolios)[':portfolio_id']['videos'][':video_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.portfolios[':portfolio_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function getMePresets(
  args: InferRequestType<typeof client.me.presets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.presets.$get(args, options))
}

export async function getMePresetsPresetId(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.presets[':preset_id'].$get(args, options))
}

export async function patchMePresetsPresetId(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.presets[':preset_id'].$patch(args, options))
}

export async function getMePresetsPresetIdVideos(
  args: InferRequestType<(typeof client.me.presets)[':preset_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.presets[':preset_id'].videos.$get(args, options))
}

export async function getMeProjects(
  args: InferRequestType<typeof client.me.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects.$get(args, options))
}

export async function postMeProjects(
  args: InferRequestType<typeof client.me.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects.$post(args, options))
}

export async function getMeProjectsProjectId(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects[':project_id'].$get(args, options))
}

export async function deleteMeProjectsProjectId(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects[':project_id'].$delete(args, options))
}

export async function patchMeProjectsProjectId(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects[':project_id'].$patch(args, options))
}

export async function getMeProjectsProjectIdVideos(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects[':project_id'].videos.$get(args, options))
}

export async function putMeProjectsProjectIdVideos(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects[':project_id'].videos.$put(args, options))
}

export async function deleteMeProjectsProjectIdVideos(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.projects[':project_id'].videos.$delete(args, options))
}

export async function putMeProjectsProjectIdVideosVideoId(
  args: InferRequestType<(typeof client.me.projects)[':project_id']['videos'][':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.projects[':project_id'].videos[':video_id'].$put(args, options),
  )
}

export async function deleteMeProjectsProjectIdVideosVideoId(
  args: InferRequestType<
    (typeof client.me.projects)[':project_id']['videos'][':video_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.me.projects[':project_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function getMeVideos(
  args: InferRequestType<typeof client.me.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.videos.$get(args, options))
}

export async function postMeVideos(
  args: InferRequestType<typeof client.me.videos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.videos.$post(args, options))
}

export async function getMeVideosVideoId(
  args: InferRequestType<(typeof client.me.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.videos[':video_id'].$get(args, options))
}

export async function getMeWatchedVideos(
  args: InferRequestType<typeof client.me.watched.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.watched.videos.$get(args, options))
}

export async function deleteMeWatchedVideos(options?: ClientRequestOptions) {
  return await parseResponse(client.me.watched.videos.$delete(undefined, options))
}

export async function deleteMeWatchedVideosVideoId(
  args: InferRequestType<(typeof client.me.watched.videos)[':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.watched.videos[':video_id'].$delete(args, options))
}

export async function getMeWatchlater(
  args: InferRequestType<typeof client.me.watchlater.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.watchlater.$get(args, options))
}

export async function getMeWatchlaterVideoId(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.watchlater[':video_id'].$get(args, options))
}

export async function putMeWatchlaterVideoId(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.watchlater[':video_id'].$put(args, options))
}

export async function deleteMeWatchlaterVideoId(
  args: InferRequestType<(typeof client.me.watchlater)[':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.watchlater[':video_id'].$delete(args, options))
}

export async function postOauthAccessToken(
  args: InferRequestType<typeof client.oauth.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.access_token.$post(args, options))
}

export async function postOauthAuthorizeClient(
  args: InferRequestType<typeof client.oauth.authorize.client.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.client.$post(args, options))
}

export async function postOauthAuthorizeVimeoOauth1(
  args: InferRequestType<typeof client.oauth.authorize.vimeo_oauth1.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.vimeo_oauth1.$post(args, options))
}

export async function getOauthVerify(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.verify.$get(undefined, options))
}

export async function getOndemandGenres(options?: ClientRequestOptions) {
  return await parseResponse(client.ondemand.genres.$get(undefined, options))
}

export async function getOndemandGenresGenreId(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.genres[':genre_id'].$get(args, options))
}

export async function getOndemandGenresGenreIdPages(
  args: InferRequestType<(typeof client.ondemand.genres)[':genre_id']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.genres[':genre_id'].pages.$get(args, options))
}

export async function getOndemandGenresGenreIdPagesOndemandId(
  args: InferRequestType<
    (typeof client.ondemand.genres)[':genre_id']['pages'][':ondemand_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.genres[':genre_id'].pages[':ondemand_id'].$get(args, options),
  )
}

export async function getOndemandPagesOndemandId(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].$get(args, options))
}

export async function deleteOndemandPagesOndemandId(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].$delete(args, options))
}

export async function patchOndemandPagesOndemandId(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].$patch(args, options))
}

export async function getOndemandPagesOndemandIdBackgrounds(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].backgrounds.$get(args, options))
}

export async function postOndemandPagesOndemandIdBackgrounds(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['backgrounds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].backgrounds.$post(args, options))
}

export async function getOndemandPagesOndemandIdBackgroundsBackgroundId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$get(args, options),
  )
}

export async function deleteOndemandPagesOndemandIdBackgroundsBackgroundId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$delete(args, options),
  )
}

export async function patchOndemandPagesOndemandIdBackgroundsBackgroundId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['backgrounds'][':background_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].backgrounds[':background_id'].$patch(args, options),
  )
}

export async function getOndemandPagesOndemandIdGenres(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['genres']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].genres.$get(args, options))
}

export async function getOndemandPagesOndemandIdGenresGenreId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$get(args, options),
  )
}

export async function putOndemandPagesOndemandIdGenresGenreId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$put(args, options),
  )
}

export async function deleteOndemandPagesOndemandIdGenresGenreId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['genres'][':genre_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].genres[':genre_id'].$delete(args, options),
  )
}

export async function getOndemandPagesOndemandIdLikes(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].likes.$get(args, options))
}

export async function getOndemandPagesOndemandIdPictures(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].pictures.$get(args, options))
}

export async function postOndemandPagesOndemandIdPictures(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['pictures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].pictures.$post(args, options))
}

export async function getOndemandPagesOndemandIdPicturesPosterId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$get(args, options),
  )
}

export async function patchOndemandPagesOndemandIdPicturesPosterId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['pictures'][':poster_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].pictures[':poster_id'].$patch(args, options),
  )
}

export async function getOndemandPagesOndemandIdPromotions(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].promotions.$get(args, options))
}

export async function postOndemandPagesOndemandIdPromotions(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['promotions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].promotions.$post(args, options))
}

export async function getOndemandPagesOndemandIdPromotionsPromotionId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$get(args, options),
  )
}

export async function deleteOndemandPagesOndemandIdPromotionsPromotionId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].$delete(args, options),
  )
}

export async function getOndemandPagesOndemandIdPromotionsPromotionIdCodes(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['promotions'][':promotion_id']['codes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].promotions[':promotion_id'].codes.$get(args, options),
  )
}

export async function getOndemandPagesOndemandIdRegions(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].regions.$get(args, options))
}

export async function putOndemandPagesOndemandIdRegions(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].regions.$put(args, options))
}

export async function deleteOndemandPagesOndemandIdRegions(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['regions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].regions.$delete(args, options))
}

export async function getOndemandPagesOndemandIdRegionsCountry(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].regions[':country'].$get(args, options),
  )
}

export async function putOndemandPagesOndemandIdRegionsCountry(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].regions[':country'].$put(args, options),
  )
}

export async function deleteOndemandPagesOndemandIdRegionsCountry(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['regions'][':country']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].regions[':country'].$delete(args, options),
  )
}

export async function getOndemandPagesOndemandIdSeasons(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['seasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].seasons.$get(args, options))
}

export async function getOndemandPagesOndemandIdSeasonsSeasonId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].seasons[':season_id'].$get(args, options),
  )
}

export async function getOndemandPagesOndemandIdSeasonsSeasonIdVideos(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['seasons'][':season_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].seasons[':season_id'].videos.$get(args, options),
  )
}

export async function getOndemandPagesOndemandIdVideos(
  args: InferRequestType<(typeof client.ondemand.pages)[':ondemand_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.pages[':ondemand_id'].videos.$get(args, options))
}

export async function getOndemandPagesOndemandIdVideosVideoId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].videos[':video_id'].$get(args, options),
  )
}

export async function putOndemandPagesOndemandIdVideosVideoId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].videos[':video_id'].$put(args, options),
  )
}

export async function deleteOndemandPagesOndemandIdVideosVideoId(
  args: InferRequestType<
    (typeof client.ondemand.pages)[':ondemand_id']['videos'][':video_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ondemand.pages[':ondemand_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function getOndemandRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.ondemand.regions.$get(undefined, options))
}

export async function getOndemandRegionsCountry(
  args: InferRequestType<(typeof client.ondemand.regions)[':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ondemand.regions[':country'].$get(args, options))
}

export async function getTagsWord(
  args: InferRequestType<(typeof client.tags)[':word']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':word'].$get(args, options))
}

export async function getTagsWordVideos(
  args: InferRequestType<(typeof client.tags)[':word']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':word'].videos.$get(args, options))
}

export async function deleteTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.tokens.$delete(undefined, options))
}

export async function getTutorial(options?: ClientRequestOptions) {
  return await parseResponse(client.tutorial.$get(undefined, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$patch(args, options))
}

export async function getUsersUserIdAlbums(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].albums.$get(args, options))
}

export async function postUsersUserIdAlbums(
  args: InferRequestType<(typeof client.users)[':user_id']['albums']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].albums.$post(args, options))
}

export async function getUsersUserIdAlbumsAlbumId(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].albums[':album_id'].$get(args, options))
}

export async function deleteUsersUserIdAlbumsAlbumId(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].albums[':album_id'].$delete(args, options))
}

export async function patchUsersUserIdAlbumsAlbumId(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].albums[':album_id'].$patch(args, options))
}

export async function getUsersUserIdAlbumsAlbumIdCustomThumbnails(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].custom_thumbnails.$get(args, options),
  )
}

export async function postUsersUserIdAlbumsAlbumIdCustomThumbnails(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].custom_thumbnails.$post(args, options),
  )
}

export async function getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['custom_thumbnails'][':thumbnail_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].custom_thumbnails[':thumbnail_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getUsersUserIdAlbumsAlbumIdLogos(
  args: InferRequestType<(typeof client.users)[':user_id']['albums'][':album_id']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].albums[':album_id'].logos.$get(args, options))
}

export async function postUsersUserIdAlbumsAlbumIdLogos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].logos.$post(args, options),
  )
}

export async function getUsersUserIdAlbumsAlbumIdLogosLogoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$get(args, options),
  )
}

export async function deleteUsersUserIdAlbumsAlbumIdLogosLogoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$delete(args, options),
  )
}

export async function patchUsersUserIdAlbumsAlbumIdLogosLogoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['logos'][':logo_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].logos[':logo_id'].$patch(args, options),
  )
}

export async function getUsersUserIdAlbumsAlbumIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].videos.$get(args, options),
  )
}

export async function putUsersUserIdAlbumsAlbumIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].videos.$put(args, options),
  )
}

export async function getUsersUserIdAlbumsAlbumIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].videos[':video_id'].$get(args, options),
  )
}

export async function putUsersUserIdAlbumsAlbumIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].videos[':video_id'].$put(args, options),
  )
}

export async function deleteUsersUserIdAlbumsAlbumIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnail(
  args: InferRequestType<
    (typeof client.users)[':user_id']['albums'][':album_id']['videos'][':video_id']['set_album_thumbnail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].albums[':album_id'].videos[':video_id'].set_album_thumbnail.$post(
      args,
      options,
    ),
  )
}

export async function getUsersUserIdAppearances(
  args: InferRequestType<(typeof client.users)[':user_id']['appearances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].appearances.$get(args, options))
}

export async function getUsersUserIdCategories(
  args: InferRequestType<(typeof client.users)[':user_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].categories.$get(args, options))
}

export async function getUsersUserIdCategoriesCategory(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].categories[':category'].$get(args, options))
}

export async function putUsersUserIdCategoriesCategory(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].categories[':category'].$put(args, options))
}

export async function deleteUsersUserIdCategoriesCategory(
  args: InferRequestType<(typeof client.users)[':user_id']['categories'][':category']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].categories[':category'].$delete(args, options),
  )
}

export async function getUsersUserIdChannels(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].channels.$get(args, options))
}

export async function getUsersUserIdChannelsChannelId(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].channels[':channel_id'].$get(args, options))
}

export async function putUsersUserIdChannelsChannelId(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].channels[':channel_id'].$put(args, options))
}

export async function deleteUsersUserIdChannelsChannelId(
  args: InferRequestType<(typeof client.users)[':user_id']['channels'][':channel_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].channels[':channel_id'].$delete(args, options),
  )
}

export async function getUsersUserIdCustomlogos(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].customlogos.$get(args, options))
}

export async function postUsersUserIdCustomlogos(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].customlogos.$post(args, options))
}

export async function getUsersUserIdCustomlogosLogoId(
  args: InferRequestType<(typeof client.users)[':user_id']['customlogos'][':logo_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].customlogos[':logo_id'].$get(args, options))
}

export async function getUsersUserIdFeed(
  args: InferRequestType<(typeof client.users)[':user_id']['feed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].feed.$get(args, options))
}

export async function getUsersUserIdFollowers(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].followers.$get(args, options))
}

export async function getUsersUserIdFollowing(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].following.$get(args, options))
}

export async function postUsersUserIdFollowing(
  args: InferRequestType<(typeof client.users)[':user_id']['following']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].following.$post(args, options))
}

export async function getUsersUserIdFollowingFollowUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].following[':follow_user_id'].$get(args, options),
  )
}

export async function putUsersUserIdFollowingFollowUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['following'][':follow_user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].following[':follow_user_id'].$put(args, options),
  )
}

export async function deleteUsersUserIdFollowingFollowUserId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['following'][':follow_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].following[':follow_user_id'].$delete(args, options),
  )
}

export async function getUsersUserIdGroups(
  args: InferRequestType<(typeof client.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].groups.$get(args, options))
}

export async function getUsersUserIdGroupsGroupId(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].groups[':group_id'].$get(args, options))
}

export async function putUsersUserIdGroupsGroupId(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].groups[':group_id'].$put(args, options))
}

export async function deleteUsersUserIdGroupsGroupId(
  args: InferRequestType<(typeof client.users)[':user_id']['groups'][':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].groups[':group_id'].$delete(args, options))
}

export async function getUsersUserIdLikes(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].likes.$get(args, options))
}

export async function getUsersUserIdLikesVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].likes[':video_id'].$get(args, options))
}

export async function putUsersUserIdLikesVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].likes[':video_id'].$put(args, options))
}

export async function deleteUsersUserIdLikesVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['likes'][':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].likes[':video_id'].$delete(args, options))
}

export async function getUsersUserIdOndemandPages(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].ondemand.pages.$get(args, options))
}

export async function postUsersUserIdOndemandPages(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].ondemand.pages.$post(args, options))
}

export async function getUsersUserIdOndemandPurchases(
  args: InferRequestType<(typeof client.users)[':user_id']['ondemand']['purchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].ondemand.purchases.$get(args, options))
}

export async function getUsersUserIdPictures(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].pictures.$get(args, options))
}

export async function postUsersUserIdPictures(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].pictures.$post(args, options))
}

export async function getUsersUserIdPicturesPortraitsetId(
  args: InferRequestType<(typeof client.users)[':user_id']['pictures'][':portraitset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].pictures[':portraitset_id'].$get(args, options),
  )
}

export async function deleteUsersUserIdPicturesPortraitsetId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].pictures[':portraitset_id'].$delete(args, options),
  )
}

export async function patchUsersUserIdPicturesPortraitsetId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['pictures'][':portraitset_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].pictures[':portraitset_id'].$patch(args, options),
  )
}

export async function getUsersUserIdPortfolios(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].portfolios.$get(args, options))
}

export async function getUsersUserIdPortfoliosPortfolioId(
  args: InferRequestType<(typeof client.users)[':user_id']['portfolios'][':portfolio_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].portfolios[':portfolio_id'].$get(args, options),
  )
}

export async function getUsersUserIdPortfoliosPortfolioIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].portfolios[':portfolio_id'].videos.$get(args, options),
  )
}

export async function getUsersUserIdPortfoliosPortfolioIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$get(args, options),
  )
}

export async function putUsersUserIdPortfoliosPortfolioIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$put(args, options),
  )
}

export async function deleteUsersUserIdPortfoliosPortfolioIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['portfolios'][':portfolio_id']['videos'][':video_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].portfolios[':portfolio_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function getUsersUserIdPresets(
  args: InferRequestType<(typeof client.users)[':user_id']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].presets.$get(args, options))
}

export async function getUsersUserIdPresetsPresetId(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].presets[':preset_id'].$get(args, options))
}

export async function patchUsersUserIdPresetsPresetId(
  args: InferRequestType<(typeof client.users)[':user_id']['presets'][':preset_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].presets[':preset_id'].$patch(args, options))
}

export async function getUsersUserIdPresetsPresetIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['presets'][':preset_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].presets[':preset_id'].videos.$get(args, options),
  )
}

export async function getUsersUserIdProjects(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].projects.$get(args, options))
}

export async function postUsersUserIdProjects(
  args: InferRequestType<(typeof client.users)[':user_id']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].projects.$post(args, options))
}

export async function getUsersUserIdProjectsProjectId(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].projects[':project_id'].$get(args, options))
}

export async function deleteUsersUserIdProjectsProjectId(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projects[':project_id'].$delete(args, options),
  )
}

export async function patchUsersUserIdProjectsProjectId(
  args: InferRequestType<(typeof client.users)[':user_id']['projects'][':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].projects[':project_id'].$patch(args, options))
}

export async function getUsersUserIdProjectsProjectIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projects[':project_id'].videos.$get(args, options),
  )
}

export async function putUsersUserIdProjectsProjectIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projects[':project_id'].videos.$put(args, options),
  )
}

export async function deleteUsersUserIdProjectsProjectIdVideos(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projects[':project_id'].videos.$delete(args, options),
  )
}

export async function putUsersUserIdProjectsProjectIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projects[':project_id'].videos[':video_id'].$put(args, options),
  )
}

export async function deleteUsersUserIdProjectsProjectIdVideosVideoId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projects'][':project_id']['videos'][':video_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projects[':project_id'].videos[':video_id'].$delete(args, options),
  )
}

export async function getUsersUserIdUploadsUploadId(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].uploads[':upload_id'].$get(args, options))
}

export async function deleteUsersUserIdUploadsUploadId(
  args: InferRequestType<(typeof client.users)[':user_id']['uploads'][':upload_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].uploads[':upload_id'].$delete(args, options))
}

export async function getUsersUserIdVideos(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].videos.$get(args, options))
}

export async function postUsersUserIdVideos(
  args: InferRequestType<(typeof client.users)[':user_id']['videos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].videos.$post(args, options))
}

export async function getUsersUserIdVideosVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['videos'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].videos[':video_id'].$get(args, options))
}

export async function getUsersUserIdWatchlater(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].watchlater.$get(args, options))
}

export async function getUsersUserIdWatchlaterVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].watchlater[':video_id'].$get(args, options))
}

export async function putUsersUserIdWatchlaterVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].watchlater[':video_id'].$put(args, options))
}

export async function deleteUsersUserIdWatchlaterVideoId(
  args: InferRequestType<(typeof client.users)[':user_id']['watchlater'][':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].watchlater[':video_id'].$delete(args, options),
  )
}

export async function getVideos(
  args: InferRequestType<typeof client.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$get(args, options))
}

export async function getVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].$get(args, options))
}

export async function deleteVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':video_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].$delete(args, options))
}

export async function patchVideosVideoId(
  args: InferRequestType<(typeof client.videos)[':video_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].$patch(args, options))
}

export async function getVideosVideoIdAvailableAlbums(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].available_albums.$get(args, options))
}

export async function getVideosVideoIdAvailableChannels(
  args: InferRequestType<(typeof client.videos)[':video_id']['available_channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].available_channels.$get(args, options))
}

export async function getVideosVideoIdCategories(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].categories.$get(args, options))
}

export async function putVideosVideoIdCategories(
  args: InferRequestType<(typeof client.videos)[':video_id']['categories']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].categories.$put(args, options))
}

export async function getVideosVideoIdComments(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].comments.$get(args, options))
}

export async function postVideosVideoIdComments(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].comments.$post(args, options))
}

export async function getVideosVideoIdCommentsCommentId(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].comments[':comment_id'].$get(args, options))
}

export async function deleteVideosVideoIdCommentsCommentId(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].comments[':comment_id'].$delete(args, options),
  )
}

export async function patchVideosVideoIdCommentsCommentId(
  args: InferRequestType<(typeof client.videos)[':video_id']['comments'][':comment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].comments[':comment_id'].$patch(args, options),
  )
}

export async function getVideosVideoIdCommentsCommentIdReplies(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].comments[':comment_id'].replies.$get(args, options),
  )
}

export async function postVideosVideoIdCommentsCommentIdReplies(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['comments'][':comment_id']['replies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].comments[':comment_id'].replies.$post(args, options),
  )
}

export async function getVideosVideoIdCredits(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].credits.$get(args, options))
}

export async function postVideosVideoIdCredits(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].credits.$post(args, options))
}

export async function getVideosVideoIdCreditsCreditId(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].credits[':credit_id'].$get(args, options))
}

export async function deleteVideosVideoIdCreditsCreditId(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].credits[':credit_id'].$delete(args, options),
  )
}

export async function patchVideosVideoIdCreditsCreditId(
  args: InferRequestType<(typeof client.videos)[':video_id']['credits'][':credit_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].credits[':credit_id'].$patch(args, options))
}

export async function getVideosVideoIdLikes(
  args: InferRequestType<(typeof client.videos)[':video_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].likes.$get(args, options))
}

export async function getVideosVideoIdPictures(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].pictures.$get(args, options))
}

export async function postVideosVideoIdPictures(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].pictures.$post(args, options))
}

export async function getVideosVideoIdPicturesPictureId(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].pictures[':picture_id'].$get(args, options))
}

export async function deleteVideosVideoIdPicturesPictureId(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].pictures[':picture_id'].$delete(args, options),
  )
}

export async function patchVideosVideoIdPicturesPictureId(
  args: InferRequestType<(typeof client.videos)[':video_id']['pictures'][':picture_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].pictures[':picture_id'].$patch(args, options),
  )
}

export async function getVideosVideoIdPresetsPresetId(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].presets[':preset_id'].$get(args, options))
}

export async function putVideosVideoIdPresetsPresetId(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].presets[':preset_id'].$put(args, options))
}

export async function deleteVideosVideoIdPresetsPresetId(
  args: InferRequestType<(typeof client.videos)[':video_id']['presets'][':preset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].presets[':preset_id'].$delete(args, options),
  )
}

export async function getVideosVideoIdPrivacyDomains(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].privacy.domains.$get(args, options))
}

export async function putVideosVideoIdPrivacyDomainsDomain(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].privacy.domains[':domain'].$put(args, options),
  )
}

export async function deleteVideosVideoIdPrivacyDomainsDomain(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['privacy']['domains'][':domain']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].privacy.domains[':domain'].$delete(args, options),
  )
}

export async function getVideosVideoIdPrivacyUsers(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].privacy.users.$get(args, options))
}

export async function putVideosVideoIdPrivacyUsers(
  args: InferRequestType<(typeof client.videos)[':video_id']['privacy']['users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].privacy.users.$put(args, options))
}

export async function putVideosVideoIdPrivacyUsersUserId(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].privacy.users[':user_id'].$put(args, options),
  )
}

export async function deleteVideosVideoIdPrivacyUsersUserId(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['privacy']['users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].privacy.users[':user_id'].$delete(args, options),
  )
}

export async function getVideosVideoIdTags(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].tags.$get(args, options))
}

export async function putVideosVideoIdTags(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].tags.$put(args, options))
}

export async function getVideosVideoIdTagsWord(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].tags[':word'].$get(args, options))
}

export async function putVideosVideoIdTagsWord(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].tags[':word'].$put(args, options))
}

export async function deleteVideosVideoIdTagsWord(
  args: InferRequestType<(typeof client.videos)[':video_id']['tags'][':word']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].tags[':word'].$delete(args, options))
}

export async function getVideosVideoIdTexttracks(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].texttracks.$get(args, options))
}

export async function postVideosVideoIdTexttracks(
  args: InferRequestType<(typeof client.videos)[':video_id']['texttracks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].texttracks.$post(args, options))
}

export async function getVideosVideoIdTexttracksTexttrackId(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].texttracks[':texttrack_id'].$get(args, options),
  )
}

export async function deleteVideosVideoIdTexttracksTexttrackId(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].texttracks[':texttrack_id'].$delete(args, options),
  )
}

export async function patchVideosVideoIdTexttracksTexttrackId(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['texttracks'][':texttrack_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].texttracks[':texttrack_id'].$patch(args, options),
  )
}

export async function postVideosVideoIdTimelinethumbnails(
  args: InferRequestType<(typeof client.videos)[':video_id']['timelinethumbnails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].timelinethumbnails.$post(args, options))
}

export async function getVideosVideoIdTimelinethumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.videos)[':video_id']['timelinethumbnails'][':thumbnail_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.videos[':video_id'].timelinethumbnails[':thumbnail_id'].$get(args, options),
  )
}

export async function postVideosVideoIdVersions(
  args: InferRequestType<(typeof client.videos)[':video_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].versions.$post(args, options))
}

export async function getVideosVideoIdVideos(
  args: InferRequestType<(typeof client.videos)[':video_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos[':video_id'].videos.$get(args, options))
}
