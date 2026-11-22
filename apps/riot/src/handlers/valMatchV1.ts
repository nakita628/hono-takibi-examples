import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getValMatchV1MatchesMatchIdRoute,
  getValMatchV1MatchlistsByPuuidPuuidRoute,
  getValMatchV1RecentMatchesByQueueQueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const valMatchV1Handler = app
  .openapi(getValMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchV1MatchlistsByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValMatchV1RecentMatchesByQueueQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
