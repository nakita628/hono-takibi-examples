import { OpenAPIHono } from '@hono/zod-openapi'
import { getDraftPicksRoute, getDraftPositionsRoute, getDraftTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const draftHandler = app
  .openapi(getDraftPicksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
