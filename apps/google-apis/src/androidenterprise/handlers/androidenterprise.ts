import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const androidenterpriseHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesCompleteSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesPullNotificationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesSignupUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
