import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRosterRoute,
  getTalentRoute,
  getTeamsFbsRoute,
  getTeamsMatchupRoute,
  getTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getRosterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTalentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsFbsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsMatchupRoute, (c) => {
    throw new Error('Not implemented')
  })
