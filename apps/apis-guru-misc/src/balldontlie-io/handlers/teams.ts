import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1Teams1Route, getApiV1TeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getApiV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Teams1Route, (c) => {
    throw new Error('Not implemented')
  })
