import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGamesV1managementAchievementsReset(
  args: InferRequestType<typeof client.games.v1management.achievements.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1management.achievements.reset.$post(args, options))
}

export async function postGamesV1managementAchievementsResetAllForAllPlayers(
  args: InferRequestType<typeof client.games.v1management.achievements.resetAllForAllPlayers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.achievements.resetAllForAllPlayers.$post(args, options),
  )
}

export async function postGamesV1managementAchievementsResetMultipleForAllPlayers(
  args: InferRequestType<
    typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.achievements.resetMultipleForAllPlayers.$post(args, options),
  )
}

export async function postGamesV1managementAchievementsAchievementIdReset(
  args: InferRequestType<
    (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.achievements[':achievementId'].reset.$post(args, options),
  )
}

export async function postGamesV1managementAchievementsAchievementIdResetForAllPlayers(
  args: InferRequestType<
    (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.achievements[':achievementId'].resetForAllPlayers.$post(
      args,
      options,
    ),
  )
}

export async function getGamesV1managementApplicationsApplicationIdPlayersHidden(
  args: InferRequestType<
    (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.applications[':applicationId'].players.hidden.$get(args, options),
  )
}

export async function postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerId(
  args: InferRequestType<
    (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.applications[':applicationId'].players.hidden[':playerId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerId(
  args: InferRequestType<
    (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.applications[':applicationId'].players.hidden[':playerId'].$delete(
      args,
      options,
    ),
  )
}

export async function postGamesV1managementEventsReset(
  args: InferRequestType<typeof client.games.v1management.events.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1management.events.reset.$post(args, options))
}

export async function postGamesV1managementEventsResetAllForAllPlayers(
  args: InferRequestType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.events.resetAllForAllPlayers.$post(args, options),
  )
}

export async function postGamesV1managementEventsResetMultipleForAllPlayers(
  args: InferRequestType<typeof client.games.v1management.events.resetMultipleForAllPlayers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.events.resetMultipleForAllPlayers.$post(args, options),
  )
}

export async function postGamesV1managementEventsEventIdReset(
  args: InferRequestType<(typeof client.games.v1management.events)[':eventId']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.events[':eventId'].reset.$post(args, options),
  )
}

export async function postGamesV1managementEventsEventIdResetForAllPlayers(
  args: InferRequestType<
    (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.events[':eventId'].resetForAllPlayers.$post(args, options),
  )
}

export async function postGamesV1managementLeaderboardsLeaderboardIdScoresReset(
  args: InferRequestType<
    (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.leaderboards[':leaderboardId'].scores.reset.$post(args, options),
  )
}

export async function postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayers(
  args: InferRequestType<
    (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.leaderboards[':leaderboardId'].scores.resetForAllPlayers.$post(
      args,
      options,
    ),
  )
}

export async function postGamesV1managementScoresReset(
  args: InferRequestType<typeof client.games.v1management.scores.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.v1management.scores.reset.$post(args, options))
}

export async function postGamesV1managementScoresResetAllForAllPlayers(
  args: InferRequestType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.scores.resetAllForAllPlayers.$post(args, options),
  )
}

export async function postGamesV1managementScoresResetMultipleForAllPlayers(
  args: InferRequestType<typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.games.v1management.scores.resetMultipleForAllPlayers.$post(args, options),
  )
}
