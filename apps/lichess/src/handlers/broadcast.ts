import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBroadcastBroadcastTournamentIdPlayersPlayerIdRoute,
  getBroadcastBroadcastTournamentIdPlayersRoute,
  getBroadcastBroadcastTournamentIdTeamsStandingsRoute,
  postBroadcastBroadcastTournamentIdEditRoute,
  postBroadcastBroadcastTournamentIdNewRoute,
  postBroadcastNewRoute,
  postBroadcastRoundBroadcastRoundIdEditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const broadcastHandler = app
  .openapi(postBroadcastNewRoute, (c) => {
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
  .openapi(postBroadcastRoundBroadcastRoundIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
