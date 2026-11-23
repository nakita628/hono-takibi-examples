import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLorDeckV1DecksMeRoute,
  getLorInventoryV1CardsMeRoute,
  getLorMatchV1MatchesByPuuidPuuidIdsRoute,
  getLorMatchV1MatchesMatchIdRoute,
  getLorRankedV1LeaderboardsRoute,
  getLorStatusV1PlatformDataRoute,
  postLorDeckV1DecksMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lorHandler = app
  .openapi(getLorDeckV1DecksMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLorDeckV1DecksMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLorInventoryV1CardsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLorMatchV1MatchesByPuuidPuuidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLorMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLorRankedV1LeaderboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLorStatusV1PlatformDataRoute, (c) => {
    throw new Error('Not implemented')
  })
