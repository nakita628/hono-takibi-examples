import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
  getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute,
  postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute,
  postGamesV1managementAchievementsAchievementIdResetRoute,
  postGamesV1managementAchievementsResetAllForAllPlayersRoute,
  postGamesV1managementAchievementsResetMultipleForAllPlayersRoute,
  postGamesV1managementAchievementsResetRoute,
  postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute,
  postGamesV1managementEventsEventIdResetForAllPlayersRoute,
  postGamesV1managementEventsEventIdResetRoute,
  postGamesV1managementEventsResetAllForAllPlayersRoute,
  postGamesV1managementEventsResetMultipleForAllPlayersRoute,
  postGamesV1managementEventsResetRoute,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute,
  postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute,
  postGamesV1managementScoresResetAllForAllPlayersRoute,
  postGamesV1managementScoresResetMultipleForAllPlayersRoute,
  postGamesV1managementScoresResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(postGamesV1managementAchievementsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsResetAllForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsResetMultipleForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsAchievementIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsResetAllForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsResetMultipleForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsEventIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsEventIdResetForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementScoresResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementScoresResetAllForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementScoresResetMultipleForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
