import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdSchedulesDutyIdRoute,
  getTeamsTeamIdDutyReportsFileNameRoute,
  getTeamsTeamIdDutyReportsRoute,
  getTeamsTeamIdDutysummaryRoute,
  getTeamsTeamIdSchedulesRoute,
  getTeamsTeamIdSchedulesScheduleIdRoute,
  postTeamsTeamIdSchedulesDeleteRangeRoute,
  postTeamsTeamIdSchedulesMultipleRoute,
  postTeamsTeamIdSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dutiesHandler = app
  .openapi(getTeamsTeamIdDutyReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdDutyReportsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdDutysummaryRoute, (c) => {
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
