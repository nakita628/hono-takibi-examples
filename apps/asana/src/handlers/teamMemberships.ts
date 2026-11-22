import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamMembershipsRoute,
  getTeamMembershipsTeamMembershipGidRoute,
  getTeamsTeamGidTeamMembershipsRoute,
  getUsersUserGidTeamMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamMembershipsHandler = app
  .openapi(getTeamMembershipsTeamMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
