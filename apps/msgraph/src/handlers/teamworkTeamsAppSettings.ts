import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamworkTeamsAppSettingsRoute,
  getTeamworkTeamsAppSettingsRoute,
  patchTeamworkTeamsAppSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamworkTeamsAppSettingsHandler = app
  .openapi(getTeamworkTeamsAppSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkTeamsAppSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkTeamsAppSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
