import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getValMatchConsoleV1MatchesMatchIdRoute,
  getValMatchConsoleV1MatchlistsByPuuidPuuidRoute,
  getValMatchConsoleV1RecentMatchesByQueueQueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const valConsoleMatchV1Handler = app
  .openapi(getValMatchConsoleV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchConsoleV1MatchlistsByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchConsoleV1RecentMatchesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
