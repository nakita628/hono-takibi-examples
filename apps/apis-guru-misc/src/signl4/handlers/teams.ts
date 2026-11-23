import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdMembershipsUserIdRoute,
  deleteTeamsTeamIdSchedulesDutyIdRoute,
  getTeamsRoute,
  getTeamsTeamIdAlertReportsFileNameRoute,
  getTeamsTeamIdAlertReportsRoute,
  getTeamsTeamIdAlertSettingsRoute,
  getTeamsTeamIdDutyReportsFileNameRoute,
  getTeamsTeamIdDutyReportsRoute,
  getTeamsTeamIdDutysummaryRoute,
  getTeamsTeamIdEventSourcesRoute,
  getTeamsTeamIdMembershipsRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdSchedulesRoute,
  getTeamsTeamIdSchedulesScheduleIdRoute,
  getTeamsTeamIdSetupProgressRoute,
  postTeamsTeamIdAlertSettingsRoute,
  postTeamsTeamIdMembershipsResendInviteMailRoute,
  postTeamsTeamIdMembershipsRoute,
  postTeamsTeamIdSchedulesDeleteRangeRoute,
  postTeamsTeamIdSchedulesMultipleRoute,
  postTeamsTeamIdSchedulesRoute,
  putTeamsTeamIdMembershipsUserIdRoute,
  putTeamsTeamIdProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
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
  .openapi(getTeamsTeamIdDutyReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdDutyReportsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdDutysummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdEventSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembershipsResendInviteMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdSchedulesDeleteRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdSchedulesMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdSchedulesDutyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdSetupProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
