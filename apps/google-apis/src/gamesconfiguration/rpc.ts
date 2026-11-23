import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGamesV1configurationAchievementsAchievementId(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.achievements[':achievementId'].$get(args, options),
  )
}

export async function putGamesV1configurationAchievementsAchievementId(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.achievements[':achievementId'].$put(args, options),
  )
}

export async function deleteGamesV1configurationAchievementsAchievementId(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.achievements[':achievementId'].$delete(args, options),
  )
}

export async function getGamesV1configurationApplicationsApplicationIdAchievements(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.applications[':applicationId'].achievements.$get(args, options),
  )
}

export async function postGamesV1configurationApplicationsApplicationIdAchievements(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.applications[':applicationId'].achievements.$post(args, options),
  )
}

export async function getGamesV1configurationApplicationsApplicationIdLeaderboards(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.applications[':applicationId'].leaderboards.$get(args, options),
  )
}

export async function postGamesV1configurationApplicationsApplicationIdLeaderboards(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.applications[':applicationId'].leaderboards.$post(args, options),
  )
}

export async function getGamesV1configurationLeaderboardsLeaderboardId(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.leaderboards[':leaderboardId'].$get(args, options),
  )
}

export async function putGamesV1configurationLeaderboardsLeaderboardId(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.leaderboards[':leaderboardId'].$put(args, options),
  )
}

export async function deleteGamesV1configurationLeaderboardsLeaderboardId(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1configuration.leaderboards[':leaderboardId'].$delete(args, options),
  )
}
