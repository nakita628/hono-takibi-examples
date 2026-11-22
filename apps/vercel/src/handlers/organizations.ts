import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute,
  deleteV1OrganizationsOrganizationIdTeamsTargetTeamIdRoute,
  getV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute,
  getV1OrganizationsOrganizationIdDsyncGroupsRoute,
  getV1OrganizationsOrganizationIdRoute,
  getV1OrganizationsOrganizationIdTeamsRoute,
  getV1OrganizationsRoute,
  patchV1OrganizationsOrganizationIdRoute,
  postV1OrganizationsOrganizationIdTeamsRoute,
  postV1OrganizationsRoute,
  putV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute,
  putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdTeamsTargetTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdDsyncGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
