import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlatformTeamsTeamIdRoute, postPlatformTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const platformTeamsHandler = app
  .openapi(postPlatformTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
