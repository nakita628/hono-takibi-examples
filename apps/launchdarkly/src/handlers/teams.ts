import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TeamsTeamKeyRoute,
  getApiV2TeamsRoute,
  getApiV2TeamsTeamKeyMaintainersRoute,
  getApiV2TeamsTeamKeyRolesRoute,
  getApiV2TeamsTeamKeyRoute,
  patchApiV2TeamsTeamKeyRoute,
  postApiV2TeamsRoute,
  postApiV2TeamsTeamKeyMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getApiV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsTeamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TeamsTeamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamsTeamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsTeamKeyMaintainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamsTeamKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsTeamKeyRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
