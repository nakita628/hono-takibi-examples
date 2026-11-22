import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolTournamentV5CodesTournamentCodeRoute,
  getLolTournamentV5GamesByCodeTournamentCodeRoute,
  getLolTournamentV5LobbyEventsByCodeTournamentCodeRoute,
  postLolTournamentV5CodesRoute,
  postLolTournamentV5ProvidersRoute,
  postLolTournamentV5TournamentsRoute,
  putLolTournamentV5CodesTournamentCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tournamentV5Handler = app
  .openapi(postLolTournamentV5CodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentV5CodesTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLolTournamentV5CodesTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentV5GamesByCodeTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentV5LobbyEventsByCodeTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentV5ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentV5TournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
