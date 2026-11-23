import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupsPidEpisodesRoute, getGroupsPopularEpisodesRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsPopularEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsPidEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
