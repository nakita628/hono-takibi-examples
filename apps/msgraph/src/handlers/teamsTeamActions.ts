import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTeamsTeamIdArchiveRoute,
  postTeamsTeamIdCloneRoute,
  postTeamsTeamIdCompleteMigrationRoute,
  postTeamsTeamIdSendActivityNotificationRoute,
  postTeamsTeamIdUnarchiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsTeamActionsHandler = app
  .openapi(postTeamsTeamIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdCompleteMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdSendActivityNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
