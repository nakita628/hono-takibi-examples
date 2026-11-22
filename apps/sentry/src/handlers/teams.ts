import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
  deleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugTeamsIndexRoute,
  getOrganizationsOrganizationIdOrSlugUserTeamsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexRoute,
  getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute,
  getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexRoute,
  getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute,
  postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
  postOrganizationsOrganizationIdOrSlugTeamsIndexRoute,
  putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
  putTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugUserTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
