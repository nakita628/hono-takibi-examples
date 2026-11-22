import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  getUsersUserIdManagedDevicesCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdUsersRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateCountRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  getUsersUserIdManagedDevicesRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdBypassActivationLockRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdCleanWindowsDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdDeleteUserFromSharedAppleDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdDisableLostModeRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdLocateDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdCreateDownloadUrlRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdLogoutSharedAppleDeviceActiveUserRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdRebootNowRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdRecoverPasscodeRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdRemoteLockRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdRequestRemoteAssistanceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdResetPasscodeRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdRetireRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdShutDownRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdSyncDeviceRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdUpdateWindowsDeviceAccountRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdWindowsDefenderScanRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdWindowsDefenderUpdateSignaturesRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdWipeRoute,
  postUsersUserIdManagedDevicesRoute,
  putUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersManagedDeviceHandler = app
  .openapi(getUsersUserIdManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdCreateDownloadUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdLogCollectionRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdBypassActivationLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdCleanWindowsDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdDeleteUserFromSharedAppleDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdDisableLostModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdLocateDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdLogoutSharedAppleDeviceActiveUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdRebootNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdRecoverPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdRemoteLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdRequestRemoteAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdResetPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdRetireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdShutDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdSyncDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdUpdateWindowsDeviceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdWindowsDefenderScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdWindowsDefenderUpdateSignaturesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
