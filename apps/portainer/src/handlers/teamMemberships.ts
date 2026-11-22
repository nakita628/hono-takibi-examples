import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamMembershipsIdRoute,
  getTeamMembershipsRoute,
  getTeamsIdMembershipsRoute,
  postTeamMembershipsRoute,
  putTeamMembershipsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamMembershipsHandler = app
  .openapi(getTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
