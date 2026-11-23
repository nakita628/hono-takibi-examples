import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthPoll(
  args: InferRequestType<typeof client.auth.poll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.poll.$post(args, options))
}

export async function postAuthStart(
  args: InferRequestType<typeof client.auth.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.start.$post(args, options))
}

export async function getAuthValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.validate.$get(undefined, options))
}

export async function postScrobbleEpisodes(
  args: InferRequestType<typeof client.scrobble.episodes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.episodes.$post(args, options))
}

export async function putScrobbleEpisodesEpisodeId(
  args: InferRequestType<(typeof client.scrobble.episodes)[':episode_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.episodes[':episode_id'].$put(args, options))
}

export async function postScrobbleShows(
  args: InferRequestType<typeof client.scrobble.shows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.shows.$post(args, options))
}

export async function getScrobbleShowsShowId(
  args: InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.shows[':show_id'].$get(args, options))
}

export async function getUserEpisodes(
  args: InferRequestType<typeof client.user.episodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.episodes.$get(args, options))
}

export async function getUserEpisodesEpisodeId(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.episodes[':episode_id'].$get(args, options))
}

export async function putUserEpisodesEpisodeId(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.episodes[':episode_id'].$put(args, options))
}

export async function deleteUserEpisodesEpisodeId(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.episodes[':episode_id'].$delete(args, options))
}

export async function getUserFollowsNetworks(
  args: InferRequestType<typeof client.user.follows.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.networks.$get(args, options))
}

export async function getUserFollowsNetworksNetworkId(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.networks[':network_id'].$get(args, options))
}

export async function putUserFollowsNetworksNetworkId(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.networks[':network_id'].$put(args, options))
}

export async function deleteUserFollowsNetworksNetworkId(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.networks[':network_id'].$delete(args, options))
}

export async function getUserFollowsPeople(
  args: InferRequestType<typeof client.user.follows.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.people.$get(args, options))
}

export async function getUserFollowsPeoplePersonId(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.people[':person_id'].$get(args, options))
}

export async function putUserFollowsPeoplePersonId(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.people[':person_id'].$put(args, options))
}

export async function deleteUserFollowsPeoplePersonId(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.people[':person_id'].$delete(args, options))
}

export async function getUserFollowsShows(
  args: InferRequestType<typeof client.user.follows.shows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.shows.$get(args, options))
}

export async function getUserFollowsShowsShowId(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.shows[':show_id'].$get(args, options))
}

export async function putUserFollowsShowsShowId(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.shows[':show_id'].$put(args, options))
}

export async function deleteUserFollowsShowsShowId(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.shows[':show_id'].$delete(args, options))
}

export async function getUserFollowsWebchannels(
  args: InferRequestType<typeof client.user.follows.webchannels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.webchannels.$get(args, options))
}

export async function getUserFollowsWebchannelsWebchannelId(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.webchannels[':webchannel_id'].$get(args, options))
}

export async function putUserFollowsWebchannelsWebchannelId(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.follows.webchannels[':webchannel_id'].$put(args, options))
}

export async function deleteUserFollowsWebchannelsWebchannelId(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.follows.webchannels[':webchannel_id'].$delete(args, options),
  )
}

export async function getUserTags(options?: ClientRequestOptions) {
  return await parseResponse(client.user.tags.$get(undefined, options))
}

export async function postUserTags(
  args: InferRequestType<typeof client.user.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.tags.$post(args, options))
}

export async function deleteUserTagsTagId(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.tags[':tag_id'].$delete(args, options))
}

export async function patchUserTagsTagId(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.tags[':tag_id'].$patch(args, options))
}

export async function getUserTagsTagIdShows(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.tags[':tag_id'].shows.$get(args, options))
}

export async function putUserTagsTagIdShowsShowId(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.tags[':tag_id'].shows[':show_id'].$put(args, options))
}

export async function deleteUserTagsTagIdShowsShowId(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.tags[':tag_id'].shows[':show_id'].$delete(args, options))
}

export async function getUserVotesEpisodes(options?: ClientRequestOptions) {
  return await parseResponse(client.user.votes.episodes.$get(undefined, options))
}

export async function getUserVotesEpisodesEpisodeId(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.episodes[':episode_id'].$get(args, options))
}

export async function putUserVotesEpisodesEpisodeId(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.episodes[':episode_id'].$put(args, options))
}

export async function deleteUserVotesEpisodesEpisodeId(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.episodes[':episode_id'].$delete(args, options))
}

export async function getUserVotesShows(
  args: InferRequestType<typeof client.user.votes.shows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.shows.$get(args, options))
}

export async function getUserVotesShowsShowId(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.shows[':show_id'].$get(args, options))
}

export async function putUserVotesShowsShowId(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.shows[':show_id'].$put(args, options))
}

export async function deleteUserVotesShowsShowId(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.votes.shows[':show_id'].$delete(args, options))
}
