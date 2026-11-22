import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdInvitationsInvitationIdRoute,
  deleteV1OrganizationsOrganizationIdMembersUserIdRoute,
  getV1OrganizationsOrganizationIdInvitationsInvitationIdRoute,
  getV1OrganizationsOrganizationIdInvitationsRoute,
  getV1OrganizationsOrganizationIdMembersRoute,
  getV1OrganizationsOrganizationIdMembersUserIdRoute,
  getV1WhoamiRoute,
  patchV1OrganizationsOrganizationIdMembersUserIdRoute,
  postV1OrganizationsOrganizationIdInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementHandler = app
  .openapi(getV1WhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
