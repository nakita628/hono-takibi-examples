import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementVirtualEndpointAuditEventsCloudPcAuditEventIdRoute,
  deleteDeviceManagementVirtualEndpointCloudPCsCloudPCIdRoute,
  deleteDeviceManagementVirtualEndpointDeviceImagesCloudPcDeviceImageIdRoute,
  deleteDeviceManagementVirtualEndpointGalleryImagesCloudPcGalleryImageIdRoute,
  deleteDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRoute,
  deleteDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdRoute,
  deleteDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdRoute,
  deleteDeviceManagementVirtualEndpointReportRoute,
  deleteDeviceManagementVirtualEndpointRoute,
  deleteDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCloudPcUserSettingAssignmentIdRoute,
  deleteDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdRoute,
  getDeviceManagementVirtualEndpointAuditEventsCloudPcAuditEventIdRoute,
  getDeviceManagementVirtualEndpointAuditEventsCountRoute,
  getDeviceManagementVirtualEndpointAuditEventsGetAuditActivityTypesRoute,
  getDeviceManagementVirtualEndpointAuditEventsRoute,
  getDeviceManagementVirtualEndpointCloudPCsCloudPCIdRetrieveCloudPcLaunchDetailRoute,
  getDeviceManagementVirtualEndpointCloudPCsCloudPCIdRoute,
  getDeviceManagementVirtualEndpointCloudPCsCountRoute,
  getDeviceManagementVirtualEndpointCloudPCsRoute,
  getDeviceManagementVirtualEndpointDeviceImagesCloudPcDeviceImageIdRoute,
  getDeviceManagementVirtualEndpointDeviceImagesCountRoute,
  getDeviceManagementVirtualEndpointDeviceImagesGetSourceImagesRoute,
  getDeviceManagementVirtualEndpointDeviceImagesRoute,
  getDeviceManagementVirtualEndpointGalleryImagesCloudPcGalleryImageIdRoute,
  getDeviceManagementVirtualEndpointGalleryImagesCountRoute,
  getDeviceManagementVirtualEndpointGalleryImagesRoute,
  getDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRoute,
  getDeviceManagementVirtualEndpointOnPremisesConnectionsCountRoute,
  getDeviceManagementVirtualEndpointOnPremisesConnectionsRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersCountRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdMailboxSettingsRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdServiceProvisioningErrorsCountRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdServiceProvisioningErrorsRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserPrincipalNameUserPrincipalNameRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCountRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesCountRoute,
  getDeviceManagementVirtualEndpointProvisioningPoliciesRoute,
  getDeviceManagementVirtualEndpointReportRoute,
  getDeviceManagementVirtualEndpointRoute,
  getDeviceManagementVirtualEndpointServicePlansCloudPcServicePlanIdRoute,
  getDeviceManagementVirtualEndpointServicePlansCountRoute,
  getDeviceManagementVirtualEndpointServicePlansRoute,
  getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCloudPcUserSettingAssignmentIdRoute,
  getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCountRoute,
  getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsRoute,
  getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdRoute,
  getDeviceManagementVirtualEndpointUserSettingsCountRoute,
  getDeviceManagementVirtualEndpointUserSettingsRoute,
  patchDeviceManagementVirtualEndpointAuditEventsCloudPcAuditEventIdRoute,
  patchDeviceManagementVirtualEndpointCloudPCsCloudPCIdRoute,
  patchDeviceManagementVirtualEndpointDeviceImagesCloudPcDeviceImageIdRoute,
  patchDeviceManagementVirtualEndpointGalleryImagesCloudPcGalleryImageIdRoute,
  patchDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRoute,
  patchDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdMailboxSettingsRoute,
  patchDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdRoute,
  patchDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdRoute,
  patchDeviceManagementVirtualEndpointReportRoute,
  patchDeviceManagementVirtualEndpointRoute,
  patchDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCloudPcUserSettingAssignmentIdRoute,
  patchDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdRoute,
  postDeviceManagementVirtualEndpointAuditEventsRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdEndGracePeriodRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdRebootRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdRenameRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdReprovisionRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdResizeRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdRestoreRoute,
  postDeviceManagementVirtualEndpointCloudPCsCloudPCIdTroubleshootRoute,
  postDeviceManagementVirtualEndpointCloudPCsRoute,
  postDeviceManagementVirtualEndpointDeviceImagesRoute,
  postDeviceManagementVirtualEndpointGalleryImagesRoute,
  postDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRunHealthChecksRoute,
  postDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdUpdateAdDomainPasswordRoute,
  postDeviceManagementVirtualEndpointOnPremisesConnectionsRoute,
  postDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsRoute,
  postDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignRoute,
  postDeviceManagementVirtualEndpointProvisioningPoliciesRoute,
  postDeviceManagementVirtualEndpointReportRetrieveCloudPcRecommendationReportsRoute,
  postDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsRoute,
  postDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignRoute,
  postDeviceManagementVirtualEndpointUserSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementVirtualEndpointHandler = app
  .openapi(getDeviceManagementVirtualEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointAuditEventsCloudPcAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointAuditEventsCloudPcAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointAuditEventsCloudPcAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointAuditEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointAuditEventsGetAuditActivityTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointCloudPCsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdEndGracePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdReprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementVirtualEndpointCloudPCsCloudPCIdRetrieveCloudPcLaunchDetailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementVirtualEndpointCloudPCsCloudPCIdTroubleshootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointCloudPCsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointDeviceImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointDeviceImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointDeviceImagesCloudPcDeviceImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointDeviceImagesCloudPcDeviceImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointDeviceImagesCloudPcDeviceImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointDeviceImagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointDeviceImagesGetSourceImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointGalleryImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointGalleryImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointGalleryImagesCloudPcGalleryImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointGalleryImagesCloudPcGalleryImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointGalleryImagesCloudPcGalleryImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointGalleryImagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointOnPremisesConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointOnPremisesConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdRunHealthChecksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementVirtualEndpointOnPremisesConnectionsCloudPcOnPremisesConnectionIdUpdateAdDomainPasswordRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementVirtualEndpointOnPremisesConnectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointProvisioningPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointProvisioningPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCloudPcProvisioningPolicyAssignmentIdAssignedUsersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementVirtualEndpointProvisioningPoliciesCloudPcProvisioningPolicyIdAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementVirtualEndpointProvisioningPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementVirtualEndpointReportRetrieveCloudPcRecommendationReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementVirtualEndpointServicePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointServicePlansCloudPcServicePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointServicePlansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementVirtualEndpointUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCloudPcUserSettingAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCloudPcUserSettingAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCloudPcUserSettingAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementVirtualEndpointUserSettingsCloudPcUserSettingIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementVirtualEndpointUserSettingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
