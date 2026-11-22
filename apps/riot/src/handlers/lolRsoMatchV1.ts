import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLolRsoMatchV1MatchesIdsRoute,
  getLolRsoMatchV1MatchesMatchIdRoute,
  getLolRsoMatchV1MatchesMatchIdTimelineRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lolRsoMatchV1Handler = app
  .openapi(getLolRsoMatchV1MatchesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolRsoMatchV1MatchesMatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLolRsoMatchV1MatchesMatchIdTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
