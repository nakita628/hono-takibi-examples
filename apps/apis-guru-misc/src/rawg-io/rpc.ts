import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCreatorRoles(
  args: InferRequestType<(typeof client)['creator-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['creator-roles'].$get(args, options))
}

export async function getCreators(
  args: InferRequestType<typeof client.creators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creators.$get(args, options))
}

export async function getCreatorsId(
  args: InferRequestType<(typeof client.creators)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creators[':id'].$get(args, options))
}

export async function getDevelopers(
  args: InferRequestType<typeof client.developers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers.$get(args, options))
}

export async function getDevelopersId(
  args: InferRequestType<(typeof client.developers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.developers[':id'].$get(args, options))
}

export async function getGames(
  args: InferRequestType<typeof client.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.$get(args, options))
}

export async function getGamesGamePkAdditions(
  args: InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':game_pk'].additions.$get(args, options))
}

export async function getGamesGamePkDevelopmentTeam(
  args: InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':game_pk']['development-team'].$get(args, options))
}

export async function getGamesGamePkGameSeries(
  args: InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':game_pk']['game-series'].$get(args, options))
}

export async function getGamesGamePkParentGames(
  args: InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':game_pk']['parent-games'].$get(args, options))
}

export async function getGamesGamePkScreenshots(
  args: InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':game_pk'].screenshots.$get(args, options))
}

export async function getGamesGamePkStores(
  args: InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':game_pk'].stores.$get(args, options))
}

export async function getGamesId(
  args: InferRequestType<(typeof client.games)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].$get(args, options))
}

export async function getGamesIdAchievements(
  args: InferRequestType<(typeof client.games)[':id']['achievements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].achievements.$get(args, options))
}

export async function getGamesIdMovies(
  args: InferRequestType<(typeof client.games)[':id']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].movies.$get(args, options))
}

export async function getGamesIdReddit(
  args: InferRequestType<(typeof client.games)[':id']['reddit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].reddit.$get(args, options))
}

export async function getGamesIdSuggested(
  args: InferRequestType<(typeof client.games)[':id']['suggested']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].suggested.$get(args, options))
}

export async function getGamesIdTwitch(
  args: InferRequestType<(typeof client.games)[':id']['twitch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].twitch.$get(args, options))
}

export async function getGamesIdYoutube(
  args: InferRequestType<(typeof client.games)[':id']['youtube']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games[':id'].youtube.$get(args, options))
}

export async function getGenres(
  args: InferRequestType<typeof client.genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres.$get(args, options))
}

export async function getGenresId(
  args: InferRequestType<(typeof client.genres)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres[':id'].$get(args, options))
}

export async function getPlatforms(
  args: InferRequestType<typeof client.platforms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platforms.$get(args, options))
}

export async function getPlatformsListsParents(
  args: InferRequestType<typeof client.platforms.lists.parents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platforms.lists.parents.$get(args, options))
}

export async function getPlatformsId(
  args: InferRequestType<(typeof client.platforms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platforms[':id'].$get(args, options))
}

export async function getPublishers(
  args: InferRequestType<typeof client.publishers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publishers.$get(args, options))
}

export async function getPublishersId(
  args: InferRequestType<(typeof client.publishers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publishers[':id'].$get(args, options))
}

export async function getStores(
  args: InferRequestType<typeof client.stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores.$get(args, options))
}

export async function getStoresId(
  args: InferRequestType<(typeof client.stores)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':id'].$get(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function getTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$get(args, options))
}
