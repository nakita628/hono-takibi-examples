import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlayersPlayerIdOrSlugMatchesRoute,
  getPlayersPlayerIdOrSlugRoute,
  getPlayersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(getPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersPlayerIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersPlayerIdOrSlugMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
