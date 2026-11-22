import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolClashV1PlayersByPuuidPuuidRoute,
  getLolClashV1TeamsTeamIdRoute,
  getLolClashV1TournamentsByTeamTeamIdRoute,
  getLolClashV1TournamentsRoute,
  getLolClashV1TournamentsTournamentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clashV1Handler = app
  .openapi(getLolClashV1PlayersByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TournamentsByTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolClashV1TournamentsTournamentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
