import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
  deleteOrganizationsOrganizationIdAdaptivePolicyAclsAclIdRoute,
  deleteOrganizationsOrganizationIdAdaptivePolicyGroupsIdRoute,
  deleteOrganizationsOrganizationIdAdaptivePolicyPoliciesIdRoute,
  deleteOrganizationsOrganizationIdAdminsAdminIdRoute,
  deleteOrganizationsOrganizationIdAlertsProfilesAlertConfigIdRoute,
  deleteOrganizationsOrganizationIdAssuranceAlertsProfilesProfileIdRoute,
  deleteOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyIdRoute,
  deleteOrganizationsOrganizationIdCertificatesAuthoritiesRoute,
  deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute,
  deleteOrganizationsOrganizationIdDevicesCellularDataProfilesProfileIdRoute,
  deleteOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdRoute,
  deleteOrganizationsOrganizationIdDevicesPacketCaptureSchedulesScheduleIdRoute,
  deleteOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInIdRoute,
  deleteOrganizationsOrganizationIdNetworksGroupsGroupIdRoute,
  deleteOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesetIdRoute,
  deleteOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRuleIdRoute,
  deleteOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsAssignmentIdRoute,
  deleteOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesPolicyIdRoute,
  deleteOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupIdRoute,
  deleteOrganizationsOrganizationIdPolicyObjectsPolicyObjectIdRoute,
  deleteOrganizationsOrganizationIdRoute,
  deleteOrganizationsOrganizationIdSamlIdpsIdpIdRoute,
  deleteOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
  deleteOrganizationsOrganizationIdSaseIntegrationsIntegrationIdRoute,
  deleteOrganizationsOrganizationIdSplashAssetsIdRoute,
  deleteOrganizationsOrganizationIdSplashThemesIdRoute,
  getOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
  getOrganizationsOrganizationIdActionBatchesRoute,
  getOrganizationsOrganizationIdAdaptivePolicyAclsAclIdRoute,
  getOrganizationsOrganizationIdAdaptivePolicyAclsRoute,
  getOrganizationsOrganizationIdAdaptivePolicyGroupsIdRoute,
  getOrganizationsOrganizationIdAdaptivePolicyGroupsRoute,
  getOrganizationsOrganizationIdAdaptivePolicyOverviewRoute,
  getOrganizationsOrganizationIdAdaptivePolicyPoliciesIdRoute,
  getOrganizationsOrganizationIdAdaptivePolicyPoliciesRoute,
  getOrganizationsOrganizationIdAdaptivePolicySettingsRoute,
  getOrganizationsOrganizationIdAdminsRoute,
  getOrganizationsOrganizationIdAlertsProfilesRoute,
  getOrganizationsOrganizationIdApiRequestsOverviewResponseCodesByIntervalRoute,
  getOrganizationsOrganizationIdApiRequestsOverviewRoute,
  getOrganizationsOrganizationIdApiRequestsRoute,
  getOrganizationsOrganizationIdApiRestProvisioningPipelinesJobsOverviewsByPipelineRoute,
  getOrganizationsOrganizationIdApiRestProvisioningPipelinesJobsRoute,
  getOrganizationsOrganizationIdApiRestProvisioningPipelinesRoute,
  getOrganizationsOrganizationIdAssuranceAlertsIdRoute,
  getOrganizationsOrganizationIdAssuranceAlertsOverviewByNetworkRoute,
  getOrganizationsOrganizationIdAssuranceAlertsOverviewByTypeRoute,
  getOrganizationsOrganizationIdAssuranceAlertsOverviewHistoricalRoute,
  getOrganizationsOrganizationIdAssuranceAlertsOverviewRoute,
  getOrganizationsOrganizationIdAssuranceAlertsProfilesRoute,
  getOrganizationsOrganizationIdAssuranceAlertsRoute,
  getOrganizationsOrganizationIdAssuranceAlertsTaxonomyCategoriesRoute,
  getOrganizationsOrganizationIdAssuranceAlertsTaxonomyTypesRoute,
  getOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyIdRoute,
  getOrganizationsOrganizationIdBrandingPoliciesPrioritiesRoute,
  getOrganizationsOrganizationIdBrandingPoliciesRoute,
  getOrganizationsOrganizationIdCertificatesAuthoritiesJobsJobIdRoute,
  getOrganizationsOrganizationIdCertificatesAuthoritiesRoute,
  getOrganizationsOrganizationIdCertificatesRevocationListsRoute,
  getOrganizationsOrganizationIdClientsBandwidthUsageHistoryRoute,
  getOrganizationsOrganizationIdClientsOverviewRoute,
  getOrganizationsOrganizationIdClientsSearchRoute,
  getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute,
  getOrganizationsOrganizationIdConfigTemplatesRoute,
  getOrganizationsOrganizationIdConfigurationChangesRoute,
  getOrganizationsOrganizationIdDevicesAvailabilitiesChangeHistoryRoute,
  getOrganizationsOrganizationIdDevicesAvailabilitiesRoute,
  getOrganizationsOrganizationIdDevicesCellularDataDevicesRoute,
  getOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsRoute,
  getOrganizationsOrganizationIdDevicesCellularDataProfilesRoute,
  getOrganizationsOrganizationIdDevicesCellularDataUsageByDeviceRoute,
  getOrganizationsOrganizationIdDevicesCellularDataUsageHistoryByDeviceByIntervalRoute,
  getOrganizationsOrganizationIdDevicesCellularGeolocationsRoute,
  getOrganizationsOrganizationIdDevicesCellularUplinksBandsByDeviceRoute,
  getOrganizationsOrganizationIdDevicesCellularUplinksTowersByDeviceRoute,
  getOrganizationsOrganizationIdDevicesCertificatesRoute,
  getOrganizationsOrganizationIdDevicesControllerMigrationsRoute,
  getOrganizationsOrganizationIdDevicesOverviewByModelRoute,
  getOrganizationsOrganizationIdDevicesPacketCaptureCapturesRoute,
  getOrganizationsOrganizationIdDevicesPacketCaptureSchedulesRoute,
  getOrganizationsOrganizationIdDevicesPowerModulesStatusesByDeviceRoute,
  getOrganizationsOrganizationIdDevicesProvisioningStatusesRoute,
  getOrganizationsOrganizationIdDevicesRoute,
  getOrganizationsOrganizationIdDevicesStatusesOverviewRoute,
  getOrganizationsOrganizationIdDevicesStatusesRoute,
  getOrganizationsOrganizationIdDevicesSyslogServersByNetworkRoute,
  getOrganizationsOrganizationIdDevicesSyslogServersRolesByNetworkRoute,
  getOrganizationsOrganizationIdDevicesSystemMemoryUsageHistoryByIntervalRoute,
  getOrganizationsOrganizationIdDevicesUplinksAddressesByDeviceRoute,
  getOrganizationsOrganizationIdDevicesUplinksLossAndLatencyRoute,
  getOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInIdRoute,
  getOrganizationsOrganizationIdEarlyAccessFeaturesOptInsRoute,
  getOrganizationsOrganizationIdEarlyAccessFeaturesRoute,
  getOrganizationsOrganizationIdFirmwareUpgradesByDeviceRoute,
  getOrganizationsOrganizationIdFirmwareUpgradesRoute,
  getOrganizationsOrganizationIdFloorPlansAutoLocateDevicesRoute,
  getOrganizationsOrganizationIdFloorPlansAutoLocateStatusesRoute,
  getOrganizationsOrganizationIdIntegrationsDeployableRoute,
  getOrganizationsOrganizationIdIntegrationsDeployedRoute,
  getOrganizationsOrganizationIdIntegrationsXdrNetworksRoute,
  getOrganizationsOrganizationIdInventoryDevicesEoxOverviewRoute,
  getOrganizationsOrganizationIdInventoryDevicesRoute,
  getOrganizationsOrganizationIdInventoryDevicesSerialRoute,
  getOrganizationsOrganizationIdInventoryDevicesSwapsBulkIdRoute,
  getOrganizationsOrganizationIdLicensesLicenseIdRoute,
  getOrganizationsOrganizationIdLicensesOverviewRoute,
  getOrganizationsOrganizationIdLicensesRoute,
  getOrganizationsOrganizationIdLoginSecurityRoute,
  getOrganizationsOrganizationIdNetworksGroupsOverviewByGroupRoute,
  getOrganizationsOrganizationIdNetworksGroupsRoute,
  getOrganizationsOrganizationIdNetworksMovesRoute,
  getOrganizationsOrganizationIdNetworksRoute,
  getOrganizationsOrganizationIdOpenapiSpecRoute,
  getOrganizationsOrganizationIdPoliciesAssignmentsByClientRoute,
  getOrganizationsOrganizationIdPoliciesGlobalFirewallApplicationCategoriesRoute,
  getOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRoute,
  getOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssignmentsRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesRoute,
  getOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupIdRoute,
  getOrganizationsOrganizationIdPolicyObjectsGroupsRoute,
  getOrganizationsOrganizationIdPolicyObjectsPolicyObjectIdRoute,
  getOrganizationsOrganizationIdPolicyObjectsRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdSamlIdpsIdpIdRoute,
  getOrganizationsOrganizationIdSamlIdpsRoute,
  getOrganizationsOrganizationIdSamlRolesRoute,
  getOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
  getOrganizationsOrganizationIdSamlRoute,
  getOrganizationsOrganizationIdSaseConnectorsRoute,
  getOrganizationsOrganizationIdSaseIntegrationsIntegrationIdRoute,
  getOrganizationsOrganizationIdSaseNetworksEligibleRoute,
  getOrganizationsOrganizationIdSaseRegionsRoute,
  getOrganizationsOrganizationIdSaseSitesConnectivityHistoryBySiteRoute,
  getOrganizationsOrganizationIdSaseSitesConnectivityOverviewRoute,
  getOrganizationsOrganizationIdSaseSitesRoute,
  getOrganizationsOrganizationIdSnmpRoute,
  getOrganizationsOrganizationIdSplashAssetsIdRoute,
  getOrganizationsOrganizationIdSplashThemesRoute,
  getOrganizationsOrganizationIdSummarySustainabilityDailyConsumerMetricsNetworksRoute,
  getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDeviceCategoriesAggregatedRoute,
  getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDeviceCategoriesRoute,
  getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDevicesRoute,
  getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsNetworksAggregatedRoute,
  getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsNetworksRoute,
  getOrganizationsOrganizationIdSummaryTopAppliancesByUtilizationRoute,
  getOrganizationsOrganizationIdSummaryTopApplicationsByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopApplicationsCategoriesByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopClientsByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopClientsManufacturersByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopDevicesByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopDevicesModelsByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopNetworksByStatusRoute,
  getOrganizationsOrganizationIdSummaryTopSsidsByUsageRoute,
  getOrganizationsOrganizationIdSummaryTopSwitchesByEnergyUsageRoute,
  getOrganizationsOrganizationIdUplinksStatusesRoute,
  getOrganizationsOrganizationIdWebhooksAlertTypesRoute,
  getOrganizationsOrganizationIdWebhooksCallbacksStatusesCallbackIdRoute,
  getOrganizationsOrganizationIdWebhooksLogsRoute,
  getOrganizationsRoute,
  postOrganizationsOrganizationIdActionBatchesRoute,
  postOrganizationsOrganizationIdAdaptivePolicyAclsRoute,
  postOrganizationsOrganizationIdAdaptivePolicyGroupsRoute,
  postOrganizationsOrganizationIdAdaptivePolicyPoliciesRoute,
  postOrganizationsOrganizationIdAdminsRoute,
  postOrganizationsOrganizationIdAlertsProfilesRoute,
  postOrganizationsOrganizationIdAssuranceAlertsDismissRoute,
  postOrganizationsOrganizationIdAssuranceAlertsProfilesRoute,
  postOrganizationsOrganizationIdAssuranceAlertsRestoreRoute,
  postOrganizationsOrganizationIdBrandingPoliciesRoute,
  postOrganizationsOrganizationIdCertificatesAuthoritiesRevokeRoute,
  postOrganizationsOrganizationIdCertificatesAuthoritiesRoute,
  postOrganizationsOrganizationIdClaimRoute,
  postOrganizationsOrganizationIdCloneRoute,
  postOrganizationsOrganizationIdConfigTemplatesRoute,
  postOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsBatchCreateRoute,
  postOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsBulkDeleteRoute,
  postOrganizationsOrganizationIdDevicesCellularDataProfilesRoute,
  postOrganizationsOrganizationIdDevicesControllerMigrationsRoute,
  postOrganizationsOrganizationIdDevicesDetailsBulkUpdateRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureCapturesBulkCreateRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureCapturesBulkDeleteRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdDownloadUrlGenerateRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdStopRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureCapturesRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureSchedulesReorderRoute,
  postOrganizationsOrganizationIdDevicesPacketCaptureSchedulesRoute,
  postOrganizationsOrganizationIdEarlyAccessFeaturesOptInsRoute,
  postOrganizationsOrganizationIdIntegrationsXdrNetworksDisableRoute,
  postOrganizationsOrganizationIdIntegrationsXdrNetworksEnableRoute,
  postOrganizationsOrganizationIdInventoryClaimRoute,
  postOrganizationsOrganizationIdInventoryDevicesSwapsBulkRoute,
  postOrganizationsOrganizationIdInventoryOrdersClaimRoute,
  postOrganizationsOrganizationIdInventoryOrdersPreviewRoute,
  postOrganizationsOrganizationIdInventoryReleaseRoute,
  postOrganizationsOrganizationIdLicensesAssignSeatsRoute,
  postOrganizationsOrganizationIdLicensesMoveRoute,
  postOrganizationsOrganizationIdLicensesMoveSeatsRoute,
  postOrganizationsOrganizationIdLicensesRenewSeatsRoute,
  postOrganizationsOrganizationIdNetworksCombineRoute,
  postOrganizationsOrganizationIdNetworksGroupsGroupIdBulkAssignRoute,
  postOrganizationsOrganizationIdNetworksGroupsGroupIdBulkUnassignRoute,
  postOrganizationsOrganizationIdNetworksGroupsRoute,
  postOrganizationsOrganizationIdNetworksMovesRoute,
  postOrganizationsOrganizationIdNetworksRoute,
  postOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRoute,
  postOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssignRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsRemoveRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsCommitRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsBulkAssignRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsBulkDeleteRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesRoute,
  postOrganizationsOrganizationIdPolicyObjectsGroupsRoute,
  postOrganizationsOrganizationIdPolicyObjectsRoute,
  postOrganizationsOrganizationIdSamlIdpsRoute,
  postOrganizationsOrganizationIdSamlRolesRoute,
  postOrganizationsOrganizationIdSaseConnectorsBatchDeleteRoute,
  postOrganizationsOrganizationIdSaseIntegrationsRoute,
  postOrganizationsOrganizationIdSaseSitesAttachRoute,
  postOrganizationsOrganizationIdSaseSitesDetachRoute,
  postOrganizationsOrganizationIdSplashThemesRoute,
  postOrganizationsOrganizationIdSplashThemesThemeIdentifierAssetsRoute,
  postOrganizationsRoute,
  putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
  putOrganizationsOrganizationIdAdaptivePolicyAclsAclIdRoute,
  putOrganizationsOrganizationIdAdaptivePolicyGroupsIdRoute,
  putOrganizationsOrganizationIdAdaptivePolicyPoliciesIdRoute,
  putOrganizationsOrganizationIdAdaptivePolicySettingsRoute,
  putOrganizationsOrganizationIdAdminsAdminIdRoute,
  putOrganizationsOrganizationIdAlertsProfilesAlertConfigIdRoute,
  putOrganizationsOrganizationIdAssuranceAlertsProfilesProfileIdRoute,
  putOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyIdRoute,
  putOrganizationsOrganizationIdBrandingPoliciesPrioritiesRoute,
  putOrganizationsOrganizationIdCertificatesAuthoritiesRoute,
  putOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute,
  putOrganizationsOrganizationIdDevicesCellularDataProfilesProfileIdRoute,
  putOrganizationsOrganizationIdDevicesPacketCaptureSchedulesScheduleIdRoute,
  putOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInIdRoute,
  putOrganizationsOrganizationIdLicensesLicenseIdRoute,
  putOrganizationsOrganizationIdLoginSecurityRoute,
  putOrganizationsOrganizationIdNetworksGroupsGroupIdRoute,
  putOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesetIdRoute,
  putOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRuleIdRoute,
  putOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsAssignmentIdRoute,
  putOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesPolicyIdRoute,
  putOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupIdRoute,
  putOrganizationsOrganizationIdPolicyObjectsPolicyObjectIdRoute,
  putOrganizationsOrganizationIdRoute,
  putOrganizationsOrganizationIdSamlIdpsIdpIdRoute,
  putOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute,
  putOrganizationsOrganizationIdSamlRoute,
  putOrganizationsOrganizationIdSaseSitesSiteIdRoute,
  putOrganizationsOrganizationIdSnmpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdActionBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdActionBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAdaptivePolicyAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdaptivePolicyAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAdaptivePolicyAclsAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAdaptivePolicyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdaptivePolicyGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAdaptivePolicyGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAdaptivePolicyPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicyPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdaptivePolicyPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAdaptivePolicyPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdaptivePolicySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdaptivePolicySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAlertsProfilesAlertConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAlertsProfilesAlertConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRestProvisioningPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRestProvisioningPipelinesJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdApiRestProvisioningPipelinesJobsOverviewsByPipelineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdApiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRequestsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRequestsOverviewResponseCodesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAssuranceAlertsDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsOverviewByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsOverviewByTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsOverviewHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAssuranceAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdAssuranceAlertsProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdAssuranceAlertsProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdAssuranceAlertsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsTaxonomyCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsTaxonomyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAssuranceAlertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBrandingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdBrandingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBrandingPoliciesPrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdBrandingPoliciesPrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCertificatesAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCertificatesAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdCertificatesAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdCertificatesAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCertificatesAuthoritiesJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCertificatesAuthoritiesRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCertificatesRevocationListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdClientsBandwidthUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdClientsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdConfigTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdConfigTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdConfigurationChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesAvailabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesAvailabilitiesChangeHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCellularDataDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCellularDataProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesCellularDataProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsBatchCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsBulkDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationsOrganizationIdDevicesCellularDataProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdDevicesCellularDataProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCellularDataUsageByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdDevicesCellularDataUsageHistoryByDeviceByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdDevicesCellularGeolocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCellularUplinksBandsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCellularUplinksTowersByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesControllerMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesControllerMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesDetailsBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesOverviewByModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesPacketCaptureCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesPacketCaptureCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesPacketCaptureCapturesBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesPacketCaptureCapturesBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdDownloadUrlGenerateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesPacketCaptureSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesPacketCaptureSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDevicesPacketCaptureSchedulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdDevicesPacketCaptureSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdDevicesPacketCaptureSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesPowerModulesStatusesByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesProvisioningStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesStatusesOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesSyslogServersByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesSyslogServersRolesByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesSystemMemoryUsageHistoryByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesUplinksAddressesByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesUplinksLossAndLatencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdEarlyAccessFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdEarlyAccessFeaturesOptInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdEarlyAccessFeaturesOptInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdFirmwareUpgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdFirmwareUpgradesByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdFloorPlansAutoLocateDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdFloorPlansAutoLocateStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdIntegrationsDeployableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdIntegrationsDeployedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdIntegrationsXdrNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdIntegrationsXdrNetworksDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdIntegrationsXdrNetworksEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInventoryClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInventoryDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInventoryDevicesEoxOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInventoryDevicesSwapsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInventoryDevicesSwapsBulkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInventoryDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInventoryOrdersClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInventoryOrdersPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInventoryReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesAssignSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesMoveSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesRenewSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdLicensesLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLoginSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdLoginSecurityRoute, (c) => {
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
  .openapi(getOrganizationsOrganizationIdNetworksGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdNetworksGroupsOverviewByGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdNetworksGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdNetworksGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksGroupsGroupIdBulkAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksGroupsGroupIdBulkUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdNetworksMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdNetworksMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOpenapiSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPoliciesAssignmentsByClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPoliciesGlobalFirewallApplicationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsRemoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsCommitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsBulkAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsBulkDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPolicyObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdPolicyObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPolicyObjectsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdPolicyObjectsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdPolicyObjectsPolicyObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdPolicyObjectsPolicyObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdPolicyObjectsPolicyObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSamlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSamlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSamlIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSamlIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSamlIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSamlIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdSamlIdpsIdpIdRoute, (c) => {
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
  .openapi(deleteOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSaseConnectorsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSaseIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdSaseIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseNetworksEligibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSaseSitesAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseSitesConnectivityHistoryBySiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSaseSitesConnectivityOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSaseSitesDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSaseSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSplashAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdSplashAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSplashThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSplashThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdSplashThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSplashThemesThemeIdentifierAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdSummarySustainabilityDailyConsumerMetricsNetworksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDeviceCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDeviceCategoriesAggregatedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDevicesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsNetworksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsNetworksAggregatedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdSummaryTopAppliancesByUtilizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopApplicationsByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopApplicationsCategoriesByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopClientsByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopClientsManufacturersByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopDevicesByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopDevicesModelsByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopNetworksByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopSsidsByUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSummaryTopSwitchesByEnergyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdUplinksStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWebhooksAlertTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWebhooksCallbacksStatusesCallbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWebhooksLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
