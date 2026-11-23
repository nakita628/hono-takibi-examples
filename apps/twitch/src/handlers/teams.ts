import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsChannelRoute, getTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
