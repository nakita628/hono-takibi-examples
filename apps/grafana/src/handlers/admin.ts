import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUsersUserIdRoute,
  getAdminLdapStatusRoute,
  getAdminLdapSyncStatusRoute,
  getAdminLdapUserNameRoute,
  getAdminSettingsRoute,
  getAdminStatsRoute,
  getAdminUsersUserIdAuthTokensRoute,
  getAdminUsersUserIdQuotasRoute,
  postAdminLdapReloadRoute,
  postAdminLdapSyncUserIdRoute,
  postAdminProvisioningAccessControlReloadRoute,
  postAdminProvisioningDashboardsReloadRoute,
  postAdminProvisioningDatasourcesReloadRoute,
  postAdminProvisioningPluginsReloadRoute,
  postAdminUsersRoute,
  postAdminUsersUserIdDisableRoute,
  postAdminUsersUserIdEnableRoute,
  postAdminUsersUserIdLogoutRoute,
  postAdminUsersUserIdRevokeAuthTokenRoute,
  putAdminUsersUserIdPasswordRoute,
  putAdminUsersUserIdPermissionsRoute,
  putAdminUsersUserIdQuotasQuotaTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminLdapSyncStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLdapReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLdapStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLdapSyncUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLdapUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningAccessControlReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningDashboardsReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningDatasourcesReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProvisioningPluginsReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersUserIdAuthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersUserIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdQuotasQuotaTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdRevokeAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
