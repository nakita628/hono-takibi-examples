import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceIdRoute,
  deleteOrganizationsOrganizationIdSmAdminsRolesRoleIdRoute,
  getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute,
  getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistoryRoute,
  getNetworksNetworkIdSmDevicesDeviceIdCertsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdConnectivityRoute,
  getNetworksNetworkIdSmDevicesDeviceIdDesktopLogsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdDeviceProfilesRoute,
  getNetworksNetworkIdSmDevicesDeviceIdNetworkAdaptersRoute,
  getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistoryRoute,
  getNetworksNetworkIdSmDevicesDeviceIdRestrictionsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdSecurityCentersRoute,
  getNetworksNetworkIdSmDevicesDeviceIdSoftwaresRoute,
  getNetworksNetworkIdSmDevicesDeviceIdWlanListsRoute,
  getNetworksNetworkIdSmDevicesRoute,
  getNetworksNetworkIdSmProfilesRoute,
  getNetworksNetworkIdSmTargetGroupsRoute,
  getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  getNetworksNetworkIdSmTrustedAccessConfigsRoute,
  getNetworksNetworkIdSmUserAccessDevicesRoute,
  getNetworksNetworkIdSmUsersRoute,
  getNetworksNetworkIdSmUsersUserIdDeviceProfilesRoute,
  getNetworksNetworkIdSmUsersUserIdSoftwaresRoute,
  getOrganizationsOrganizationIdSmAdminsRolesRoleIdRoute,
  getOrganizationsOrganizationIdSmAdminsRolesRoute,
  getOrganizationsOrganizationIdSmApnsCertRoute,
  getOrganizationsOrganizationIdSmSentryPoliciesAssignmentsByNetworkRoute,
  getOrganizationsOrganizationIdSmVppAccountsRoute,
  getOrganizationsOrganizationIdSmVppAccountsVppAccountIdRoute,
  postNetworksNetworkIdSmBypassActivationLockAttemptsRoute,
  postNetworksNetworkIdSmDevicesCheckinRoute,
  postNetworksNetworkIdSmDevicesDeviceIdInstallAppsRoute,
  postNetworksNetworkIdSmDevicesDeviceIdRefreshDetailsRoute,
  postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute,
  postNetworksNetworkIdSmDevicesDeviceIdUninstallAppsRoute,
  postNetworksNetworkIdSmDevicesLockRoute,
  postNetworksNetworkIdSmDevicesModifyTagsRoute,
  postNetworksNetworkIdSmDevicesMoveRoute,
  postNetworksNetworkIdSmDevicesRebootRoute,
  postNetworksNetworkIdSmDevicesShutdownRoute,
  postNetworksNetworkIdSmDevicesWipeRoute,
  postNetworksNetworkIdSmTargetGroupsRoute,
  postOrganizationsOrganizationIdSmAdminsRolesRoute,
  putNetworksNetworkIdSmDevicesFieldsRoute,
  putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  putOrganizationsOrganizationIdSmAdminsRolesRoleIdRoute,
  putOrganizationsOrganizationIdSmSentryPoliciesAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smHandler = app
  .openapi(postNetworksNetworkIdSmBypassActivationLockAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesModifyTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdDesktopLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdInstallAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdNetworkAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdRefreshDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdSecurityCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdUninstallAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdWlanListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTrustedAccessConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUserAccessDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersUserIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersUserIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSmAdminsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSmAdminsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSmAdminsRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSmAdminsRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdSmAdminsRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSmApnsCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSmSentryPoliciesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSmSentryPoliciesAssignmentsByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSmVppAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSmVppAccountsVppAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
