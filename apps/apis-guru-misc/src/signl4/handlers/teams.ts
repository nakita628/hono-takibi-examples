import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsSubscriptionIdTeamsRoute,
  getTeamsRoute,
  getTeamsTeamIdAlertReportsFileNameRoute,
  getTeamsTeamIdAlertReportsRoute,
  getTeamsTeamIdAlertSettingsRoute,
  getTeamsTeamIdEventSourcesRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdSetupProgressRoute,
  postTeamsTeamIdAlertSettingsRoute,
  putTeamsTeamIdProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getSubscriptionsSubscriptionIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdAlertReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdAlertReportsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdAlertSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdAlertSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdEventSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdSetupProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
