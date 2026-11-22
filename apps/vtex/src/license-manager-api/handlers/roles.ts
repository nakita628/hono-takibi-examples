import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLicenseManagerUsersUserIdRolesRoleIdRoute,
  getApiLicenseManagerSitePvtRolesListPagedRoute,
  getApiLicenseManagerUsersUserIdRolesRoute,
  putApiLicenseManagerUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getApiLicenseManagerSitePvtRolesListPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseManagerUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLicenseManagerUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLicenseManagerUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
