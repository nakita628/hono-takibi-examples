import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute,
  getAndroidenterpriseV1EnterprisesRoute,
  getAndroidenterpriseV1PermissionsPermissionIdRoute,
  postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRoute,
  postAndroidenterpriseV1EnterprisesCompleteSignupRoute,
  postAndroidenterpriseV1EnterprisesEnrollRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute,
  postAndroidenterpriseV1EnterprisesPullNotificationSetRoute,
  postAndroidenterpriseV1EnterprisesSignupUrlRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute,
} from '../routes'

export const getAndroidenterpriseV1EnterprisesRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesCompleteSignupRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesCompleteSignupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnrollRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesPullNotificationSetRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesPullNotificationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesSignupUrlRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesSignupUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRouteHandler: RouteHandler<
  typeof postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRouteHandler: RouteHandler<
  typeof deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRouteHandler: RouteHandler<
  typeof putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAndroidenterpriseV1PermissionsPermissionIdRouteHandler: RouteHandler<
  typeof getAndroidenterpriseV1PermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
