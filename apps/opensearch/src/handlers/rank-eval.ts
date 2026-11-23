import { OpenAPIHono } from '@hono/zod-openapi'
import { getRankEvalRoute, postRankEvalRoute } from '../routes'

const app = new OpenAPIHono()

export const rankEvalHandler = app
  .openapi(getRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
