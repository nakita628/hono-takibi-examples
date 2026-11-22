import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneInstancesInstanceRoute,
  getProjectsProjectAggregatedInstancesRoute,
  getProjectsProjectZonesZoneInstancesInstanceGetEffectiveFirewallsRoute,
  getProjectsProjectZonesZoneInstancesInstanceGetGuestAttributesRoute,
  getProjectsProjectZonesZoneInstancesInstanceGetShieldedInstanceIdentityRoute,
  getProjectsProjectZonesZoneInstancesInstanceReferrersRoute,
  getProjectsProjectZonesZoneInstancesInstanceRoute,
  getProjectsProjectZonesZoneInstancesInstanceScreenshotRoute,
  getProjectsProjectZonesZoneInstancesInstanceSerialPortRoute,
  getProjectsProjectZonesZoneInstancesResourceGetIamPolicyRoute,
  getProjectsProjectZonesZoneInstancesRoute,
  patchProjectsProjectZonesZoneInstancesInstanceSetShieldedInstanceIntegrityPolicyRoute,
  patchProjectsProjectZonesZoneInstancesInstanceUpdateDisplayDeviceRoute,
  patchProjectsProjectZonesZoneInstancesInstanceUpdateNetworkInterfaceRoute,
  patchProjectsProjectZonesZoneInstancesInstanceUpdateShieldedInstanceConfigRoute,
  postProjectsProjectZonesZoneInstancesBulkInsertRoute,
  postProjectsProjectZonesZoneInstancesInstanceAddAccessConfigRoute,
  postProjectsProjectZonesZoneInstancesInstanceAddResourcePoliciesRoute,
  postProjectsProjectZonesZoneInstancesInstanceAttachDiskRoute,
  postProjectsProjectZonesZoneInstancesInstanceDeleteAccessConfigRoute,
  postProjectsProjectZonesZoneInstancesInstanceDetachDiskRoute,
  postProjectsProjectZonesZoneInstancesInstancePerformMaintenanceRoute,
  postProjectsProjectZonesZoneInstancesInstanceRemoveResourcePoliciesRoute,
  postProjectsProjectZonesZoneInstancesInstanceResetRoute,
  postProjectsProjectZonesZoneInstancesInstanceResumeRoute,
  postProjectsProjectZonesZoneInstancesInstanceSendDiagnosticInterruptRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetDiskAutoDeleteRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetLabelsRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetMachineResourcesRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetMachineTypeRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetMetadataRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetMinCpuPlatformRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetNameRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetSchedulingRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetSecurityPolicyRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetServiceAccountRoute,
  postProjectsProjectZonesZoneInstancesInstanceSetTagsRoute,
  postProjectsProjectZonesZoneInstancesInstanceSimulateMaintenanceEventRoute,
  postProjectsProjectZonesZoneInstancesInstanceStartRoute,
  postProjectsProjectZonesZoneInstancesInstanceStartWithEncryptionKeyRoute,
  postProjectsProjectZonesZoneInstancesInstanceStopRoute,
  postProjectsProjectZonesZoneInstancesInstanceSuspendRoute,
  postProjectsProjectZonesZoneInstancesInstanceUpdateAccessConfigRoute,
  postProjectsProjectZonesZoneInstancesResourceSetDeletionProtectionRoute,
  postProjectsProjectZonesZoneInstancesResourceSetIamPolicyRoute,
  postProjectsProjectZonesZoneInstancesResourceTestIamPermissionsRoute,
  postProjectsProjectZonesZoneInstancesRoute,
  putProjectsProjectZonesZoneInstancesInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instancesHandler = app
  .openapi(getProjectsProjectAggregatedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesBulkInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectZonesZoneInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceAddAccessConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceAddResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceAttachDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceDeleteAccessConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceDetachDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceGetEffectiveFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceGetGuestAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceGetShieldedInstanceIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstancePerformMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceReferrersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceRemoveResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSendDiagnosticInterruptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesInstanceSerialPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetDiskAutoDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetMachineResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetMachineTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetMinCpuPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetSchedulingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchProjectsProjectZonesZoneInstancesInstanceSetShieldedInstanceIntegrityPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSetTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSimulateMaintenanceEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceStartWithEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesInstanceUpdateAccessConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneInstancesInstanceUpdateDisplayDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneInstancesInstanceUpdateNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneInstancesInstanceUpdateShieldedInstanceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstancesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesResourceSetDeletionProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstancesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
