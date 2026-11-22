import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationInvitationsRoute,
  getOrganizationsOrganizationIdInvitationsInvitationIdRoute,
  getOrganizationsOrganizationIdInvitationsPendingRoute,
  getOrganizationsOrganizationIdInvitationsRoute,
  postOrganizationsOrganizationIdInvitationsBulkRoute,
  postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute,
  postOrganizationsOrganizationIdInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationInvitationsHandler = app
  .openapi(getOrganizationInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
