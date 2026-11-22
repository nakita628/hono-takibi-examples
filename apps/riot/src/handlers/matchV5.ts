import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolMatchV5MatchesByPuuidPuuidIdsRoute,
  getLolMatchV5MatchesMatchIdRoute,
  getLolMatchV5MatchesMatchIdTimelineRoute,
  getLolMatchV5MatchesReplaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matchV5Handler = app
  .openapi(getLolMatchV5MatchesByPuuidPuuidIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesReplaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolMatchV5MatchesMatchIdTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
