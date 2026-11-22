import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLorMatchV1MatchesByPuuidPuuidIdsRoute,
  getLorMatchV1MatchesMatchIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lorMatchV1Handler = app
  .openapi(getLorMatchV1MatchesByPuuidPuuidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLorMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
