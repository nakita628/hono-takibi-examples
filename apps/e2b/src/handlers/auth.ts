import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsTeamIDMetricsMaxRoute,
  getTeamsTeamIDMetricsRoute,
  getUnstableTeamsTeamIDLimitsRoute,
  getUnstableTeamsTeamIDStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getTeamsTeamIDMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIDMetricsMaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableTeamsTeamIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableTeamsTeamIDLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
