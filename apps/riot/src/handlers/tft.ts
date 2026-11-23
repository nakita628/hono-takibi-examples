import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTftLeagueV1ByPuuidPuuidRoute,
  getTftLeagueV1ChallengerRoute,
  getTftLeagueV1EntriesTierDivisionRoute,
  getTftLeagueV1GrandmasterRoute,
  getTftLeagueV1MasterRoute,
  getTftLeagueV1RatedLaddersQueueTopRoute,
  getTftMatchV1MatchesByPuuidPuuidIdsRoute,
  getTftMatchV1MatchesMatchIdRoute,
  getTftStatusV1PlatformDataRoute,
  getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute,
  getTftSummonerV1SummonersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tftHandler = app
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
  .openapi(getTftMatchV1MatchesByPuuidPuuidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftStatusV1PlatformDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftSummonerV1SummonersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
