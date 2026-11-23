import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
  deleteOrganizationsOrganizationIdAdminsAdminIdRoute,
  deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute,
  deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  getOrganizationsOrganizationIdActionBatchesRoute,
  getOrganizationsOrganizationIdAdminsRoute,
  getOrganizationsOrganizationIdApiRequestsOverviewRoute,
  getOrganizationsOrganizationIdApiRequestsRoute,
  getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute,
  getOrganizationsOrganizationIdConfigTemplatesRoute,
  getOrganizationsOrganizationIdConfigurationChangesRoute,
  getOrganizationsOrganizationIdDevicesRoute,
  getOrganizationsOrganizationIdDeviceStatusesRoute,
  getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute,
  getOrganizationsOrganizationIdInventoryRoute,
  getOrganizationsOrganizationIdLicensesLicenseIdRoute,
  getOrganizationsOrganizationIdLicensesRoute,
  getOrganizationsOrganizationIdLicenseStateRoute,
  getOrganizationsOrganizationIdNetworksRoute,
  getOrganizationsOrganizationIdOpenapiSpecRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdSamlRolesRoute,
  getOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
  getOrganizationsOrganizationIdSecurityEventsRoute,
  getOrganizationsOrganizationIdSecurityIntrusionSettingsRoute,
  getOrganizationsOrganizationIdSnmpRoute,
  getOrganizationsOrganizationIdThirdPartyVPNPeersRoute,
  getOrganizationsOrganizationIdUplinksLossAndLatencyRoute,
  getOrganizationsOrganizationIdVpnFirewallRulesRoute,
  getOrganizationsRoute,
  postOrganizationsOrganizationIdActionBatchesRoute,
  postOrganizationsOrganizationIdAdminsRoute,
  postOrganizationsOrganizationIdClaimRoute,
  postOrganizationsOrganizationIdCloneRoute,
  postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute,
  postOrganizationsOrganizationIdLicensesAssignSeatsRoute,
  postOrganizationsOrganizationIdLicensesMoveSeatsRoute,
  postOrganizationsOrganizationIdLicensesRenewSeatsRoute,
  postOrganizationsOrganizationIdNetworksCombineRoute,
  postOrganizationsOrganizationIdNetworksRoute,
  postOrganizationsOrganizationIdSamlRolesRoute,
  putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
  putOrganizationsOrganizationIdAdminsAdminIdRoute,
  putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
  putOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
  putOrganizationsOrganizationIdSecurityIntrusionSettingsRoute,
  putOrganizationsOrganizationIdThirdPartyVPNPeersRoute,
  putOrganizationsOrganizationIdVpnFirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdActionBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdActionBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRequestsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdConfigTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdConfigurationChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDeviceStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicenseStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesAssignSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesMoveSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesRenewSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksCombineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOpenapiSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSamlRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSamlRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdThirdPartyVPNPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdThirdPartyVPNPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdUplinksLossAndLatencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdVpnFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdVpnFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
