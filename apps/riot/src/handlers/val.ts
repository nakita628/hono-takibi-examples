import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getValConsoleRankedV1LeaderboardsByActActIdRoute,
  getValContentV1ContentsRoute,
  getValMatchConsoleV1MatchesMatchIdRoute,
  getValMatchConsoleV1MatchlistsByPuuidPuuidRoute,
  getValMatchConsoleV1RecentMatchesByQueueQueueRoute,
  getValMatchV1MatchesMatchIdRoute,
  getValMatchV1MatchlistsByPuuidPuuidRoute,
  getValMatchV1RecentMatchesByQueueQueueRoute,
  getValRankedV1LeaderboardsByActActIdRoute,
  getValStatusV1PlatformDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const valHandler = app
  .openapi(getValMatchConsoleV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchConsoleV1MatchlistsByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchConsoleV1RecentMatchesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValConsoleRankedV1LeaderboardsByActActIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValContentV1ContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchV1MatchlistsByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchV1RecentMatchesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValRankedV1LeaderboardsByActActIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValStatusV1PlatformDataRoute, (c) => {
    throw new Error('Not implemented')
  })
