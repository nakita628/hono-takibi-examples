import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementOrganizationMembershipsIdRoute,
  getUserManagementOrganizationMembershipsIdRoute,
  getUserManagementOrganizationMembershipsRoute,
  postUserManagementOrganizationMembershipsRoute,
  putUserManagementOrganizationMembershipsIdDeactivateRoute,
  putUserManagementOrganizationMembershipsIdReactivateRoute,
  putUserManagementOrganizationMembershipsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementOrganizationMembershipHandler = app
  .openapi(getUserManagementOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementOrganizationMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementOrganizationMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementOrganizationMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementOrganizationMembershipsIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementOrganizationMembershipsIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
