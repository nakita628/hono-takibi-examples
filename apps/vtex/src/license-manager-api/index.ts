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
} from './routes'
import {
  deleteApiLicenseManagerUsersUserIdRolesRoleIdRouteHandler,
  getApiLicenseManagerSitePvtLoginsListPagedRouteHandler,
  getApiLicenseManagerSitePvtRolesListPagedRouteHandler,
  getApiLicenseManagerUsersUserIdRolesRouteHandler,
  getApiLicenseManagerUsersUserIdRouteHandler,
  getApiVlmAccountRouteHandler,
  getApiVlmAccountStoresRouteHandler,
  getApiVlmAppkeysRouteHandler,
  postApiLicenseManagerUsersRouteHandler,
  postApiVlmAppkeysRouteHandler,
  putApiLicenseManagerUsersUserIdRolesRouteHandler,
  putApiVlmAppkeysIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiLicenseManagerSitePvtLoginsListPagedRoute,
    getApiLicenseManagerSitePvtLoginsListPagedRouteHandler,
  )
  .openapi(
    getApiLicenseManagerSitePvtRolesListPagedRoute,
    getApiLicenseManagerSitePvtRolesListPagedRouteHandler,
  )
  .openapi(postApiLicenseManagerUsersRoute, postApiLicenseManagerUsersRouteHandler)
  .openapi(getApiLicenseManagerUsersUserIdRoute, getApiLicenseManagerUsersUserIdRouteHandler)
  .openapi(
    getApiLicenseManagerUsersUserIdRolesRoute,
    getApiLicenseManagerUsersUserIdRolesRouteHandler,
  )
  .openapi(
    putApiLicenseManagerUsersUserIdRolesRoute,
    putApiLicenseManagerUsersUserIdRolesRouteHandler,
  )
  .openapi(
    deleteApiLicenseManagerUsersUserIdRolesRoleIdRoute,
    deleteApiLicenseManagerUsersUserIdRolesRoleIdRouteHandler,
  )
  .openapi(getApiVlmAccountRoute, getApiVlmAccountRouteHandler)
  .openapi(getApiVlmAccountStoresRoute, getApiVlmAccountStoresRouteHandler)
  .openapi(getApiVlmAppkeysRoute, getApiVlmAppkeysRouteHandler)
  .openapi(postApiVlmAppkeysRoute, postApiVlmAppkeysRouteHandler)
  .openapi(putApiVlmAppkeysIdRoute, putApiVlmAppkeysIdRouteHandler)

export default app
