import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdMembershipsMembershipIdRoute,
  deleteTeamsTeamIdRoute,
  getTeamsRoute,
  getTeamsTeamIdMembershipsMembershipIdRoute,
  getTeamsTeamIdMembershipsRoute,
  getTeamsTeamIdPrefsRoute,
  getTeamsTeamIdRoute,
  patchTeamsTeamIdMembershipsMembershipIdRoute,
  patchTeamsTeamIdMembershipsMembershipIdStatusRoute,
  postTeamsRoute,
  postTeamsTeamIdMembershipsRoute,
  putTeamsTeamIdPrefsRoute,
  putTeamsTeamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdMembershipsMembershipIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
