import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolTournamentStubV5CodesTournamentCodeRoute,
  getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRoute,
  postLolTournamentStubV5CodesRoute,
  postLolTournamentStubV5ProvidersRoute,
  postLolTournamentStubV5TournamentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tournamentStubV5Handler = app
  .openapi(postLolTournamentStubV5CodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentStubV5CodesTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentStubV5ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLolTournamentStubV5TournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
