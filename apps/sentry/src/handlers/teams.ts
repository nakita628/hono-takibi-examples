import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute,
  deleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute,
  getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute,
  getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexRoute,
  getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute,
  postTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexRoute,
  postTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute,
  putTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute,
  putTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
