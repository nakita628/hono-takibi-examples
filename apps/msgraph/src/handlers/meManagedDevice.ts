import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
  deleteMeManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  deleteMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  deleteMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  deleteMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  deleteMeManagedDevicesManagedDeviceIdRoute,
  deleteMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  deleteMeManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  getMeManagedDevicesCountRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
  getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  getMeManagedDevicesManagedDeviceIdLogCollectionRequestsCountRoute,
  getMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  getMeManagedDevicesManagedDeviceIdLogCollectionRequestsRoute,
  getMeManagedDevicesManagedDeviceIdRoute,
  getMeManagedDevicesManagedDeviceIdUsersRoute,
  getMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateCountRoute,
  getMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
  getMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  getMeManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  getMeManagedDevicesRoute,
  patchMeManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  patchMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  patchMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  patchMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
  patchMeManagedDevicesManagedDeviceIdRoute,
  patchMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
  patchMeManagedDevicesManagedDeviceIdWindowsProtectionStateRoute,
  postMeManagedDevicesManagedDeviceIdBypassActivationLockRoute,
  postMeManagedDevicesManagedDeviceIdCleanWindowsDeviceRoute,
  postMeManagedDevicesManagedDeviceIdDeleteUserFromSharedAppleDeviceRoute,
  postMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  postMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  postMeManagedDevicesManagedDeviceIdDisableLostModeRoute,
  postMeManagedDevicesManagedDeviceIdLocateDeviceRoute,
  postMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdCreateDownloadUrlRoute,
  postMeManagedDevicesManagedDeviceIdLogCollectionRequestsRoute,
  postMeManagedDevicesManagedDeviceIdLogoutSharedAppleDeviceActiveUserRoute,
  postMeManagedDevicesManagedDeviceIdRebootNowRoute,
  postMeManagedDevicesManagedDeviceIdRecoverPasscodeRoute,
  postMeManagedDevicesManagedDeviceIdRemoteLockRoute,
  postMeManagedDevicesManagedDeviceIdRequestRemoteAssistanceRoute,
  postMeManagedDevicesManagedDeviceIdResetPasscodeRoute,
  postMeManagedDevicesManagedDeviceIdRetireRoute,
  postMeManagedDevicesManagedDeviceIdShutDownRoute,
  postMeManagedDevicesManagedDeviceIdSyncDeviceRoute,
  postMeManagedDevicesManagedDeviceIdUpdateWindowsDeviceAccountRoute,
  postMeManagedDevicesManagedDeviceIdWindowsDefenderScanRoute,
  postMeManagedDevicesManagedDeviceIdWindowsDefenderUpdateSignaturesRoute,
  postMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
  postMeManagedDevicesManagedDeviceIdWipeRoute,
  postMeManagedDevicesRoute,
  putMeManagedDevicesManagedDeviceIdDeviceCategoryRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meManagedDeviceHandler = app
  .openapi(getMeManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagedDevicesManagedDeviceIdDeviceCategoryRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdLogCollectionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdLogCollectionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeManagedDevicesManagedDeviceIdLogCollectionRequestsDeviceLogCollectionResponseIdCreateDownloadUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeManagedDevicesManagedDeviceIdLogCollectionRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdBypassActivationLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdCleanWindowsDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdDeleteUserFromSharedAppleDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdDisableLostModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdLocateDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdLogoutSharedAppleDeviceActiveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdRebootNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdRecoverPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdRemoteLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdRequestRemoteAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdResetPasscodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdRetireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdShutDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdSyncDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdUpdateWindowsDeviceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdWindowsDefenderScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdWindowsDefenderUpdateSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagedDevicesManagedDeviceIdWindowsProtectionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateWindowsDeviceMalwareStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeManagedDevicesManagedDeviceIdWindowsProtectionStateDetectedMalwareStateCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
