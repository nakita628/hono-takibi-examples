import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTftLeagueV1ByPuuidPuuidRoute,
  getTftLeagueV1ChallengerRoute,
  getTftLeagueV1EntriesTierDivisionRoute,
  getTftLeagueV1GrandmasterRoute,
  getTftLeagueV1MasterRoute,
  getTftLeagueV1RatedLaddersQueueTopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tftLeagueV1Handler = app
  .openapi(getTftLeagueV1ByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftLeagueV1ChallengerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftLeagueV1EntriesTierDivisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftLeagueV1GrandmasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftLeagueV1MasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftLeagueV1RatedLaddersQueueTopRoute, (c) => {
    throw new Error('Not implemented')
  })
