import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  getDeviceManagementManagedDevicesCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdUsersRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  getDeviceManagementManagedDevicesRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdBypassActivationLockRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdCleanWindowsDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdDeleteUserFromSharedAppleDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdDisableLostModeRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdLocateDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdCreateDownloadUrlRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdLogoutSharedAppleDeviceActiveUserRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdRebootNowRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdRecoverPasscodeRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdRemoteLockRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdRequestRemoteAssistanceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdResetPasscodeRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdRetireRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdShutDownRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdSyncDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdUpdateWindowsDeviceAccountRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdWindowsDefenderScanRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdWindowsDefenderUpdateSignaturesRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdWipeRoute,
  postDeviceManagementManagedDevicesRoute,
  putDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementManagedDeviceHandler = app
  .openapi(getDeviceManagementManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdCreateDownloadUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdLogCollectionRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdBypassActivationLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdCleanWindowsDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdDeleteUserFromSharedAppleDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdDisableLostModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdLocateDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdLogoutSharedAppleDeviceActiveUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdRebootNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdRecoverPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdRemoteLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdRequestRemoteAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdResetPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdRetireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdShutDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdSyncDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdUpdateWindowsDeviceAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdWindowsDefenderScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdWindowsDefenderUpdateSignaturesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
