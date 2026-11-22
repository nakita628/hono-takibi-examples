import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrganizationMembershipsDestroyManyRoute,
  deleteApiV2OrganizationMembershipsOrganizationMembershipIdRoute,
  deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute,
  deleteApiV2UsersUserIdOrganizationsOrganizationIdRoute,
  getApiV2OrganizationMembershipsOrganizationMembershipIdRoute,
  getApiV2OrganizationMembershipsRoute,
  getApiV2OrganizationsOrganizationIdOrganizationMembershipsRoute,
  getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute,
  getApiV2UsersUserIdOrganizationMembershipsRoute,
  postApiV2OrganizationMembershipsCreateManyRoute,
  postApiV2OrganizationMembershipsRoute,
  postApiV2UsersUserIdOrganizationMembershipsRoute,
  putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefaultRoute,
  putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationMembershipsHandler = app
  .openapi(getApiV2OrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationMembershipsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationMembershipsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefaultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiV2UsersUserIdOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
