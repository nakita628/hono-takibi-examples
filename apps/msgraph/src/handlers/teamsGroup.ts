import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsTeamIdGroupRoute,
  getTeamsTeamIdGroupServiceProvisioningErrorsCountRoute,
  getTeamsTeamIdGroupServiceProvisioningErrorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsGroupHandler = app
  .openapi(getTeamsTeamIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdGroupServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdGroupServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
