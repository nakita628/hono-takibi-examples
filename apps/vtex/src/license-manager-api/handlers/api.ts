import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLicenseManagerUsersUserIdRolesRoleIdRoute,
  getApiLicenseManagerSitePvtLoginsListPagedRoute,
  getApiLicenseManagerSitePvtRolesListPagedRoute,
  getApiLicenseManagerUsersUserIdRolesRoute,
  getApiLicenseManagerUsersUserIdRoute,
  getApiVlmAccountRoute,
  getApiVlmAccountStoresRoute,
  getApiVlmAppkeysRoute,
  postApiLicenseManagerUsersRoute,
  postApiVlmAppkeysRoute,
  putApiLicenseManagerUsersUserIdRolesRoute,
  putApiVlmAppkeysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiLicenseManagerSitePvtLoginsListPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseManagerSitePvtRolesListPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseManagerUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseManagerUsersUserIdRoute, (c) => {
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
  .openapi(getApiVlmAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVlmAccountStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVlmAppkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVlmAppkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVlmAppkeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
