import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolChallengesV1ChallengesChallengeIdConfigRoute,
  getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRoute,
  getLolChallengesV1ChallengesChallengeIdPercentilesRoute,
  getLolChallengesV1ChallengesConfigRoute,
  getLolChallengesV1ChallengesPercentilesRoute,
  getLolChallengesV1PlayerDataPuuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lolChallengesV1Handler = app
  .openapi(getLolChallengesV1ChallengesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesChallengeIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1ChallengesChallengeIdPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolChallengesV1PlayerDataPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
