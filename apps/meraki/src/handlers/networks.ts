import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute,
  deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  deleteNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute,
  deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  deleteNetworksNetworkIdMqttBrokersMqttBrokerIdRoute,
  deleteNetworksNetworkIdPiiRequestsRequestIdRoute,
  deleteNetworksNetworkIdRoute,
  deleteNetworksNetworkIdVlanProfilesInameRoute,
  deleteNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute,
  deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute,
  getNetworksNetworkIdAlertsHistoryRoute,
  getNetworksNetworkIdAlertsSettingsRoute,
  getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute,
  getNetworksNetworkIdBluetoothClientsRoute,
  getNetworksNetworkIdClientsApplicationUsageRoute,
  getNetworksNetworkIdClientsBandwidthUsageHistoryRoute,
  getNetworksNetworkIdClientsClientIdPolicyRoute,
  getNetworksNetworkIdClientsClientIdRoute,
  getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  getNetworksNetworkIdClientsClientIdTrafficHistoryRoute,
  getNetworksNetworkIdClientsClientIdUsageHistoryRoute,
  getNetworksNetworkIdClientsOverviewRoute,
  getNetworksNetworkIdClientsRoute,
  getNetworksNetworkIdClientsUsageHistoriesRoute,
  getNetworksNetworkIdDevicesRoute,
  getNetworksNetworkIdEventsEventTypesRoute,
  getNetworksNetworkIdEventsRoute,
  getNetworksNetworkIdFirmwareUpgradesRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedEventsRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedStagesRoute,
  getNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  getNetworksNetworkIdFloorPlansRoute,
  getNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute,
  getNetworksNetworkIdGroupPoliciesRoute,
  getNetworksNetworkIdHealthAlertsRoute,
  getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  getNetworksNetworkIdMerakiAuthUsersRoute,
  getNetworksNetworkIdMqttBrokersMqttBrokerIdRoute,
  getNetworksNetworkIdMqttBrokersRoute,
  getNetworksNetworkIdNetflowRoute,
  getNetworksNetworkIdNetworkHealthChannelUtilizationRoute,
  getNetworksNetworkIdPiiPiiKeysRoute,
  getNetworksNetworkIdPiiRequestsRequestIdRoute,
  getNetworksNetworkIdPiiRequestsRoute,
  getNetworksNetworkIdPiiSmDevicesForKeyRoute,
  getNetworksNetworkIdPiiSmOwnersForKeyRoute,
  getNetworksNetworkIdPoliciesByClientRoute,
  getNetworksNetworkIdRoute,
  getNetworksNetworkIdSettingsRoute,
  getNetworksNetworkIdSnmpRoute,
  getNetworksNetworkIdSplashLoginAttemptsRoute,
  getNetworksNetworkIdSyslogServersRoute,
  getNetworksNetworkIdTopologyLinkLayerRoute,
  getNetworksNetworkIdTrafficAnalysisRoute,
  getNetworksNetworkIdTrafficRoute,
  getNetworksNetworkIdTrafficShapingApplicationCategoriesRoute,
  getNetworksNetworkIdTrafficShapingDscpTaggingOptionsRoute,
  getNetworksNetworkIdVlanProfilesAssignmentsByDeviceRoute,
  getNetworksNetworkIdVlanProfilesInameRoute,
  getNetworksNetworkIdVlanProfilesRoute,
  getNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute,
  getNetworksNetworkIdWebhooksHttpServersRoute,
  getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute,
  getNetworksNetworkIdWebhooksPayloadTemplatesRoute,
  getNetworksNetworkIdWebhooksWebhookTestsWebhookTestIdRoute,
  postNetworksNetworkIdBindRoute,
  postNetworksNetworkIdClientsProvisionRoute,
  postNetworksNetworkIdDevicesClaimRoute,
  postNetworksNetworkIdDevicesClaimVmxRoute,
  postNetworksNetworkIdDevicesRemoveRoute,
  postNetworksNetworkIdFirmwareUpgradesRollbacksRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedEventsDeferRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacksRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedEventsRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsBatchRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancelRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublishRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculateRoute,
  postNetworksNetworkIdFloorPlansDevicesBatchUpdateRoute,
  postNetworksNetworkIdFloorPlansRoute,
  postNetworksNetworkIdGroupPoliciesRoute,
  postNetworksNetworkIdMerakiAuthUsersRoute,
  postNetworksNetworkIdMqttBrokersRoute,
  postNetworksNetworkIdPiiRequestsRoute,
  postNetworksNetworkIdSplitRoute,
  postNetworksNetworkIdUnbindRoute,
  postNetworksNetworkIdVlanProfilesAssignmentsReassignRoute,
  postNetworksNetworkIdVlanProfilesRoute,
  postNetworksNetworkIdWebhooksHttpServersRoute,
  postNetworksNetworkIdWebhooksPayloadTemplatesRoute,
  postNetworksNetworkIdWebhooksWebhookTestsRoute,
  putNetworksNetworkIdAlertsSettingsRoute,
  putNetworksNetworkIdClientsClientIdPolicyRoute,
  putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  putNetworksNetworkIdDevicesSyslogServersRoute,
  putNetworksNetworkIdFirmwareUpgradesRoute,
  putNetworksNetworkIdFirmwareUpgradesStagedEventsRoute,
  putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute,
  putNetworksNetworkIdFirmwareUpgradesStagedStagesRoute,
  putNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  putNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute,
  putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  putNetworksNetworkIdMqttBrokersMqttBrokerIdRoute,
  putNetworksNetworkIdNetflowRoute,
  putNetworksNetworkIdRoute,
  putNetworksNetworkIdSettingsRoute,
  putNetworksNetworkIdSnmpRoute,
  putNetworksNetworkIdSyslogServersRoute,
  putNetworksNetworkIdTrafficAnalysisRoute,
  putNetworksNetworkIdVlanProfilesInameRoute,
  putNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute,
  putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAlertsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAlertsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAlertsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdBindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdBluetoothClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsApplicationUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsBandwidthUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdClientsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsUsageHistoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdClientsClientIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdTrafficHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesClaimVmxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdDevicesSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesRollbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesStagedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedEventsDeferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesStagedStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansDevicesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdHealthAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdMerakiAuthUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMqttBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdMqttBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdNetflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdNetflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdNetworkHealthChannelUtilizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiPiiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdPiiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmDevicesForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmOwnersForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPoliciesByClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSplashLoginAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSplitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTopologyLinkLayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdTrafficAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficShapingApplicationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficShapingDscpTaggingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdUnbindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlanProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdVlanProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlanProfilesAssignmentsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdVlanProfilesAssignmentsReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlanProfilesInameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdVlanProfilesInameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdVlanProfilesInameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksHttpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWebhooksHttpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksPayloadTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWebhooksPayloadTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWebhooksWebhookTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksWebhookTestsWebhookTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
