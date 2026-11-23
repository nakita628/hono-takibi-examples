import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGamesV1Achievements(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.achievements.$get(args, options))
}

export async function postGamesV1AchievementsUpdateMultiple(
  args: InferRequestType<typeof client.games.v1.achievements.updateMultiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.achievements.updateMultiple.$post(args, options))
}

export async function postGamesV1AchievementsAchievementIdIncrement(
  args: InferRequestType<
    (typeof client.games.v1.achievements)[':achievementId']['increment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.achievements[':achievementId'].increment.$post(args, options),
  )
}

export async function postGamesV1AchievementsAchievementIdReveal(
  args: InferRequestType<
    (typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.achievements[':achievementId'].reveal.$post(args, options),
  )
}

export async function postGamesV1AchievementsAchievementIdSetStepsAtLeast(
  args: InferRequestType<
    (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.achievements[':achievementId'].setStepsAtLeast.$post(args, options),
  )
}

export async function postGamesV1AchievementsAchievementIdUnlock(
  args: InferRequestType<
    (typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.achievements[':achievementId'].unlock.$post(args, options),
  )
}

export async function postGamesV1ApplicationsGetEndPoint(
  args: InferRequestType<typeof client.games.v1.applications.getEndPoint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.applications.getEndPoint.$post(args, options))
}

export async function postGamesV1ApplicationsPlayed(
  args: InferRequestType<typeof client.games.v1.applications.played.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.applications.played.$post(args, options))
}

export async function getGamesV1ApplicationsApplicationId(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.applications[':applicationId'].$get(args, options))
}

export async function getGamesV1ApplicationsApplicationIdVerify(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.applications[':applicationId'].verify.$get(args, options),
  )
}

export async function getGamesV1EventDefinitions(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.eventDefinitions.$get(args, options))
}

export async function getGamesV1Events(
  args: InferRequestType<typeof client.games.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.events.$get(args, options))
}

export async function postGamesV1Events(
  args: InferRequestType<typeof client.games.v1.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.events.$post(args, options))
}

export async function getGamesV1Leaderboards(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.leaderboards.$get(args, options))
}

export async function postGamesV1LeaderboardsScores(
  args: InferRequestType<typeof client.games.v1.leaderboards.scores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.leaderboards.scores.$post(args, options))
}

export async function getGamesV1LeaderboardsLeaderboardId(
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.leaderboards[':leaderboardId'].$get(args, options))
}

export async function postGamesV1LeaderboardsLeaderboardIdScores(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.leaderboards[':leaderboardId'].scores.$post(args, options),
  )
}

export async function getGamesV1LeaderboardsLeaderboardIdScoresCollection(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.leaderboards[':leaderboardId'].scores[':collection'].$get(args, options),
  )
}

export async function getGamesV1LeaderboardsLeaderboardIdWindowCollection(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.leaderboards[':leaderboardId'].window[':collection'].$get(args, options),
  )
}

export async function getGamesV1MetagameConfig(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.metagameConfig.$get(args, options))
}

export async function getGamesV1PlayersMeMultipleApplicationPlayerIds(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.players.me.multipleApplicationPlayerIds.$get(args, options),
  )
}

export async function getGamesV1PlayersMePlayersCollection(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.players.me.players[':collection'].$get(args, options))
}

export async function getGamesV1PlayersMeScopedIds(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.players.me.scopedIds.$get(args, options))
}

export async function getGamesV1PlayersPlayerId(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.players[':playerId'].$get(args, options))
}

export async function getGamesV1PlayersPlayerIdAchievements(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.players[':playerId'].achievements.$get(args, options))
}

export async function getGamesV1PlayersPlayerIdCategoriesCollection(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.players[':playerId'].categories[':collection'].$get(args, options),
  )
}

export async function getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpan(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1.players[':playerId'].leaderboards[':leaderboardId'].scores[':timeSpan'].$get(
      args,
      options,
    ),
  )
}

export async function getGamesV1PlayersPlayerIdSnapshots(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.players[':playerId'].snapshots.$get(args, options))
}

export async function getGamesV1RevisionsCheck(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.revisions.check.$get(args, options))
}

export async function getGamesV1SnapshotsSnapshotId(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.snapshots[':snapshotId'].$get(args, options))
}

export async function getGamesV1Stats(
  args: InferRequestType<typeof client.games.v1.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1.stats.$get(args, options))
}
