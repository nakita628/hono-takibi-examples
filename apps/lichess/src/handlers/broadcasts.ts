import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBroadcastBroadcastTournamentIdPgnRoute,
  getApiBroadcastBroadcastTournamentIdRoute,
  getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRoute,
  getApiBroadcastByUsernameRoute,
  getApiBroadcastMyRoundsRoute,
  getApiBroadcastRoundBroadcastRoundIdPgnRoute,
  getApiBroadcastRoute,
  getApiBroadcastSearchRoute,
  getApiBroadcastTopRoute,
  getApiStreamBroadcastGroupBroadcastGroupIdPgnRoute,
  getApiStreamBroadcastRoundBroadcastRoundIdPgnRoute,
  getApiStreamBroadcastTourBroadcastTourIdPgnRoute,
  getBroadcastBroadcastTournamentIdPlayersPlayerIdRoute,
  getBroadcastBroadcastTournamentIdPlayersRoute,
  getBroadcastBroadcastTournamentIdTeamsStandingsRoute,
  postApiBroadcastRoundBroadcastRoundIdPushRoute,
  postApiBroadcastRoundBroadcastRoundIdResetRoute,
  postBroadcastBroadcastTournamentIdEditRoute,
  postBroadcastBroadcastTournamentIdNewRoute,
  postBroadcastNewRoute,
  postBroadcastRoundBroadcastRoundIdEditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const broadcastsHandler = app
  .openapi(getApiBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastByUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastBroadcastTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastBroadcastTournamentIdPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastBroadcastTournamentIdPlayersPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastBroadcastTournamentIdTeamsStandingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastBroadcastTournamentIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastBroadcastTournamentIdNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastBroadcastTournamentSlugBroadcastRoundSlugBroadcastRoundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastRoundBroadcastRoundIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBroadcastRoundBroadcastRoundIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBroadcastRoundBroadcastRoundIdPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamBroadcastRoundBroadcastRoundIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamBroadcastTourBroadcastTourIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamBroadcastGroupBroadcastGroupIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastRoundBroadcastRoundIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastBroadcastTournamentIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBroadcastMyRoundsRoute, (c) => {
    throw new Error('Not implemented')
  })
