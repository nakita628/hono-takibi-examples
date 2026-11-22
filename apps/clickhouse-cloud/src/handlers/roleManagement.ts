import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdRolesRoleIdRoute,
  getV1OrganizationsOrganizationIdRolesRoleIdRoute,
  getV1OrganizationsOrganizationIdRolesRoute,
  patchV1OrganizationsOrganizationIdRolesRoleIdRoute,
  postV1OrganizationsOrganizationIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleManagementHandler = app
  .openapi(getV1OrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
