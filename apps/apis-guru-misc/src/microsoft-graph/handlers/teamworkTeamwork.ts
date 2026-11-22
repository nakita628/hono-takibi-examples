import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamworkRoute, patchTeamworkRoute } from '../routes'

const app = new OpenAPIHono()

export const teamworkTeamworkHandler = app
  .openapi(getTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkRoute, (c) => {
    throw new Error('Not implemented')
  })
