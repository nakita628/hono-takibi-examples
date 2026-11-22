import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTftMatchV1MatchesByPuuidPuuidIdsRoute,
  getTftMatchV1MatchesMatchIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tftMatchV1Handler = app
  .openapi(getTftMatchV1MatchesByPuuidPuuidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTftMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
