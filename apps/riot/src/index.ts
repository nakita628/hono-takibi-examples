import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountV1Handler,
  championMasteryV4Handler,
  championV3Handler,
  clashV1Handler,
  leagueExpV4Handler,
  leagueV4Handler,
  lolChallengesV1Handler,
  lolRsoMatchV1Handler,
  lolStatusV4Handler,
  lorDeckV1Handler,
  lorInventoryV1Handler,
  lorMatchV1Handler,
  lorRankedV1Handler,
  lorStatusV1Handler,
  matchV5Handler,
  riftboundContentV1Handler,
  spectatorTftV5Handler,
  spectatorV5Handler,
  summonerV4Handler,
  tftLeagueV1Handler,
  tftMatchV1Handler,
  tftStatusV1Handler,
  tftSummonerV1Handler,
  tournamentStubV5Handler,
  tournamentV5Handler,
  valConsoleMatchV1Handler,
  valConsoleRankedV1Handler,
  valContentV1Handler,
  valMatchV1Handler,
  valRankedV1Handler,
  valStatusV1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountV1Handler)
  .route('/', championMasteryV4Handler)
  .route('/', championV3Handler)
  .route('/', clashV1Handler)
  .route('/', leagueExpV4Handler)
  .route('/', leagueV4Handler)
  .route('/', lolChallengesV1Handler)
  .route('/', lolRsoMatchV1Handler)
  .route('/', lolStatusV4Handler)
  .route('/', lorDeckV1Handler)
  .route('/', lorInventoryV1Handler)
  .route('/', lorMatchV1Handler)
  .route('/', lorRankedV1Handler)
  .route('/', lorStatusV1Handler)
  .route('/', matchV5Handler)
  .route('/', riftboundContentV1Handler)
  .route('/', spectatorTftV5Handler)
  .route('/', spectatorV5Handler)
  .route('/', summonerV4Handler)
  .route('/', tftLeagueV1Handler)
  .route('/', tftMatchV1Handler)
  .route('/', tftStatusV1Handler)
  .route('/', tftSummonerV1Handler)
  .route('/', tournamentStubV5Handler)
  .route('/', tournamentV5Handler)
  .route('/', valConsoleMatchV1Handler)
  .route('/', valConsoleRankedV1Handler)
  .route('/', valContentV1Handler)
  .route('/', valMatchV1Handler)
  .route('/', valRankedV1Handler)
  .route('/', valStatusV1Handler)

export default app
