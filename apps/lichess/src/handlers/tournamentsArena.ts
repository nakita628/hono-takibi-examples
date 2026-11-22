import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiTournamentIdGamesRoute,
  getApiTournamentIdResultsRoute,
  getApiTournamentIdRoute,
  getApiTournamentIdTeamsRoute,
  getApiTournamentRoute,
  getApiUserUsernameTournamentCreatedRoute,
  getApiUserUsernameTournamentPlayedRoute,
  postApiTournamentIdJoinRoute,
  postApiTournamentIdRoute,
  postApiTournamentIdTerminateRoute,
  postApiTournamentIdWithdrawRoute,
  postApiTournamentRoute,
  postApiTournamentTeamBattleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tournamentsArenaHandler = app
  .openapi(getApiTournamentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTournamentTeamBattleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTournamentIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameTournamentCreatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserUsernameTournamentPlayedRoute, (c) => {
    throw new Error('Not implemented')
  })
