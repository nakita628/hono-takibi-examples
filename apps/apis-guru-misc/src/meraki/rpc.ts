import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDevicesSerialCameraAnalyticsLive(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['analytics']['live']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.analytics.live.$get(args, options))
}

export async function getDevicesSerialCameraAnalyticsOverview(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.analytics.overview.$get(args, options),
  )
}

export async function getDevicesSerialCameraAnalyticsRecent(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['recent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.analytics.recent.$get(args, options))
}

export async function getDevicesSerialCameraAnalyticsZones(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.analytics.zones.$get(args, options))
}

export async function getDevicesSerialCameraAnalyticsZonesZoneIdHistory(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['analytics']['zones'][':zoneId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.analytics.zones[':zoneId'].history.$get(args, options),
  )
}

export async function getDevicesSerialCameraQualityAndRetentionSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.qualityAndRetentionSettings.$get(args, options),
  )
}

export async function putDevicesSerialCameraQualityAndRetentionSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetentionSettings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.qualityAndRetentionSettings.$put(args, options),
  )
}

export async function getDevicesSerialCameraVideoSettings(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.video.settings.$get(args, options))
}

export async function putDevicesSerialCameraVideoSettings(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['video']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.video.settings.$put(args, options))
}

export async function getDevicesSerialCellularGatewaySettings(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellularGateway.settings.$get(args, options))
}

export async function putDevicesSerialCellularGatewaySettings(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellularGateway.settings.$put(args, options))
}

export async function getDevicesSerialCellularGatewaySettingsPortForwardingRules(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].cellularGateway.settings.portForwardingRules.$get(args, options),
  )
}

export async function putDevicesSerialCellularGatewaySettingsPortForwardingRules(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['settings']['portForwardingRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].cellularGateway.settings.portForwardingRules.$put(args, options),
  )
}

export async function getDevicesSerialClients(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].clients.$get(args, options))
}

export async function postDevicesSerialSwitchPortsCycle(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.ports.cycle.$post(args, options))
}

export async function getDevicesSerialSwitchPortStatuses(
  args: InferRequestType<(typeof client.devices)[':serial']['switchPortStatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switchPortStatuses.$get(args, options))
}

export async function getDevicesSerialSwitchPortStatusesPackets(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switchPortStatuses']['packets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switchPortStatuses.packets.$get(args, options),
  )
}

export async function putDevicesSerialWirelessBluetoothSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.bluetooth.settings.$put(args, options),
  )
}

export async function getNetworksNetworkId(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].$get(args, options))
}

export async function putNetworksNetworkId(
  args: InferRequestType<(typeof client.networks)[':networkId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].$put(args, options))
}

export async function deleteNetworksNetworkId(
  args: InferRequestType<(typeof client.networks)[':networkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].$delete(args, options))
}

export async function getNetworksNetworkIdAccessPolicies(
  args: InferRequestType<(typeof client.networks)[':networkId']['accessPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].accessPolicies.$get(args, options))
}

export async function getNetworksNetworkIdAirMarshal(
  args: InferRequestType<(typeof client.networks)[':networkId']['airMarshal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].airMarshal.$get(args, options))
}

export async function getNetworksNetworkIdAlertSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].alertSettings.$get(args, options))
}

export async function putNetworksNetworkIdAlertSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['alertSettings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].alertSettings.$put(args, options))
}

export async function getNetworksNetworkIdApplianceFirewallInboundFirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallInboundFirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundFirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.inboundFirewallRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdAppliancePorts(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliancePorts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliancePorts.$get(args, options))
}

export async function getNetworksNetworkIdAppliancePortsAppliancePortId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliancePorts[':appliancePortId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdAppliancePortsAppliancePortId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliancePorts'][':appliancePortId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliancePorts[':appliancePortId'].$put(args, options),
  )
}

export async function postNetworksNetworkIdBind(
  args: InferRequestType<(typeof client.networks)[':networkId']['bind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].bind.$post(args, options))
}

export async function getNetworksNetworkIdBluetoothClients(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothClients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].bluetoothClients.$get(args, options))
}

export async function getNetworksNetworkIdBluetoothClientsBluetoothClientId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['bluetoothClients'][':bluetoothClientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].bluetoothClients[':bluetoothClientId'].$get(args, options),
  )
}

export async function getNetworksNetworkIdBluetoothSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].bluetoothSettings.$get(args, options))
}

export async function putNetworksNetworkIdBluetoothSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['bluetoothSettings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].bluetoothSettings.$put(args, options))
}

export async function getNetworksNetworkIdCameraQualityRetentionProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.qualityRetentionProfiles.$get(args, options),
  )
}

export async function postNetworksNetworkIdCameraQualityRetentionProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.qualityRetentionProfiles.$post(args, options),
  )
}

export async function getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.qualityRetentionProfiles[
      ':qualityRetentionProfileId'
    ].$get(args, options),
  )
}

export async function putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.qualityRetentionProfiles[
      ':qualityRetentionProfileId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['qualityRetentionProfiles'][':qualityRetentionProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.qualityRetentionProfiles[
      ':qualityRetentionProfileId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdCameraSchedules(
  args: InferRequestType<(typeof client.networks)[':networkId']['camera']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].camera.schedules.$get(args, options))
}

export async function postNetworksNetworkIdCamerasSerialSnapshot(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['snapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cameras[':serial'].snapshot.$post(args, options),
  )
}

export async function getNetworksNetworkIdCamerasSerialVideoLink(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cameras'][':serial']['videoLink']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cameras[':serial'].videoLink.$get(args, options),
  )
}

export async function getNetworksNetworkIdCellularFirewallRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularFirewallRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdCellularFirewallRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularFirewallRules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularFirewallRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdClients(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients.$get(args, options))
}

export async function getNetworksNetworkIdClientsConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients.connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsLatencyStats(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients.latencyStats.$get(args, options))
}

export async function postNetworksNetworkIdClientsProvision(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients.provision.$post(args, options))
}

export async function getNetworksNetworkIdClientsClientId(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients[':clientId'].$get(args, options))
}

export async function getNetworksNetworkIdClientsClientIdConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsClientIdEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].events.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsClientIdLatencyHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].latencyHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsClientIdLatencyStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].latencyStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsClientIdPolicy(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].policy.$get(args, options),
  )
}

export async function putNetworksNetworkIdClientsClientIdPolicy(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].policy.$put(args, options),
  )
}

export async function getNetworksNetworkIdClientsClientIdSplashAuthorizationStatus(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdClientsClientIdSplashAuthorizationStatus(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['splashAuthorizationStatus']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].splashAuthorizationStatus.$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdClientsClientIdUsageHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['usageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].usageHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdConnectionStats(
  args: InferRequestType<(typeof client.networks)[':networkId']['connectionStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].connectionStats.$get(args, options))
}

export async function getNetworksNetworkIdContentFiltering(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].contentFiltering.$get(args, options))
}

export async function putNetworksNetworkIdContentFiltering(
  args: InferRequestType<(typeof client.networks)[':networkId']['contentFiltering']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].contentFiltering.$put(args, options))
}

export async function getNetworksNetworkIdContentFilteringCategories(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['contentFiltering']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].contentFiltering.categories.$get(args, options),
  )
}

export async function getNetworksNetworkIdDevices(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices.$get(args, options))
}

export async function postNetworksNetworkIdDevicesClaim(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices.claim.$post(args, options))
}

export async function getNetworksNetworkIdDevicesConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices.connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdDevicesLatencyStats(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices.latencyStats.$get(args, options))
}

export async function getNetworksNetworkIdDevicesSerial(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices[':serial'].$get(args, options))
}

export async function putNetworksNetworkIdDevicesSerial(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices'][':serial']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices[':serial'].$put(args, options))
}

export async function getNetworksNetworkIdDevicesSerialConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdDevicesSerialLatencyStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].latencyStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdDevicesSerialLossAndLatencyHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['lossAndLatencyHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].lossAndLatencyHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdDevicesSerialPerformance(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['performance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].performance.$get(args, options),
  )
}

export async function postNetworksNetworkIdDevicesSerialReboot(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['reboot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].reboot.$post(args, options),
  )
}

export async function postNetworksNetworkIdDevicesSerialRemove(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].remove.$post(args, options),
  )
}

export async function getNetworksNetworkIdDevicesSerialUplink(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['uplink']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].uplink.$get(args, options),
  )
}

export async function getNetworksNetworkIdDevicesSerialWirelessStatus(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices'][':serial']['wireless']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices[':serial'].wireless.status.$get(args, options),
  )
}

export async function getNetworksNetworkIdEvents(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].events.$get(args, options))
}

export async function getNetworksNetworkIdEventsEventTypes(
  args: InferRequestType<(typeof client.networks)[':networkId']['events']['eventTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].events.eventTypes.$get(args, options))
}

export async function getNetworksNetworkIdFailedConnections(
  args: InferRequestType<(typeof client.networks)[':networkId']['failedConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].failedConnections.$get(args, options))
}

export async function getNetworksNetworkIdFirewalledServices(
  args: InferRequestType<(typeof client.networks)[':networkId']['firewalledServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].firewalledServices.$get(args, options))
}

export async function getNetworksNetworkIdFirewalledServicesService(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firewalledServices[':service'].$get(args, options),
  )
}

export async function putNetworksNetworkIdFirewalledServicesService(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firewalledServices'][':service']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firewalledServices[':service'].$put(args, options),
  )
}

export async function getNetworksNetworkIdFloorPlans(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].floorPlans.$get(args, options))
}

export async function postNetworksNetworkIdFloorPlans(
  args: InferRequestType<(typeof client.networks)[':networkId']['floorPlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].floorPlans.$post(args, options))
}

export async function getNetworksNetworkIdFloorPlansFloorPlanId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans[':floorPlanId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdFloorPlansFloorPlanId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans[':floorPlanId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdFloorPlansFloorPlanId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans'][':floorPlanId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans[':floorPlanId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdL3FirewallRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].l3FirewallRules.$get(args, options))
}

export async function putNetworksNetworkIdL3FirewallRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['l3FirewallRules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].l3FirewallRules.$put(args, options))
}

export async function getNetworksNetworkIdL7FirewallRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].l7FirewallRules.$get(args, options))
}

export async function putNetworksNetworkIdL7FirewallRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['l7FirewallRules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].l7FirewallRules.$put(args, options))
}

export async function getNetworksNetworkIdL7FirewallRulesApplicationCategories(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['l7FirewallRules']['applicationCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].l7FirewallRules.applicationCategories.$get(args, options),
  )
}

export async function getNetworksNetworkIdLatencyStats(
  args: InferRequestType<(typeof client.networks)[':networkId']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].latencyStats.$get(args, options))
}

export async function getNetworksNetworkIdMerakiAuthUsers(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].merakiAuthUsers.$get(args, options))
}

export async function getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$get(args, options),
  )
}

export async function getNetworksNetworkIdOneToManyNatRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].oneToManyNatRules.$get(args, options))
}

export async function putNetworksNetworkIdOneToManyNatRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToManyNatRules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].oneToManyNatRules.$put(args, options))
}

export async function getNetworksNetworkIdOneToOneNatRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].oneToOneNatRules.$get(args, options))
}

export async function putNetworksNetworkIdOneToOneNatRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['oneToOneNatRules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].oneToOneNatRules.$put(args, options))
}

export async function getNetworksNetworkIdPiiPiiKeys(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['piiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].pii.piiKeys.$get(args, options))
}

export async function getNetworksNetworkIdPiiRequests(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].pii.requests.$get(args, options))
}

export async function postNetworksNetworkIdPiiRequests(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].pii.requests.$post(args, options))
}

export async function getNetworksNetworkIdPiiRequestsRequestId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].pii.requests[':requestId'].$get(args, options),
  )
}

export async function deleteNetworksNetworkIdPiiRequestsRequestId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['pii']['requests'][':requestId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].pii.requests[':requestId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdPiiSmDevicesForKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smDevicesForKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].pii.smDevicesForKey.$get(args, options))
}

export async function getNetworksNetworkIdPiiSmOwnersForKey(
  args: InferRequestType<(typeof client.networks)[':networkId']['pii']['smOwnersForKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].pii.smOwnersForKey.$get(args, options))
}

export async function getNetworksNetworkIdPortForwardingRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].portForwardingRules.$get(args, options))
}

export async function putNetworksNetworkIdPortForwardingRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['portForwardingRules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].portForwardingRules.$put(args, options))
}

export async function getNetworksNetworkIdSecurityIntrusionSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].security.intrusionSettings.$get(args, options),
  )
}

export async function putNetworksNetworkIdSecurityIntrusionSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['intrusionSettings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].security.intrusionSettings.$put(args, options),
  )
}

export async function getNetworksNetworkIdSecurityMalwareSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].security.malwareSettings.$get(args, options),
  )
}

export async function putNetworksNetworkIdSecurityMalwareSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['security']['malwareSettings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].security.malwareSettings.$put(args, options),
  )
}

export async function getNetworksNetworkIdSecurityEvents(
  args: InferRequestType<(typeof client.networks)[':networkId']['securityEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].securityEvents.$get(args, options))
}

export async function getNetworksNetworkIdSiteToSiteVpn(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].siteToSiteVpn.$get(args, options))
}

export async function putNetworksNetworkIdSiteToSiteVpn(
  args: InferRequestType<(typeof client.networks)[':networkId']['siteToSiteVpn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].siteToSiteVpn.$put(args, options))
}

export async function postNetworksNetworkIdSmBypassActivationLockAttempts(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.bypassActivationLockAttempts.$post(args, options),
  )
}

export async function getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['bypassActivationLockAttempts'][':attemptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.bypassActivationLockAttempts[':attemptId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSmDeviceFields(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['fields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.device.fields.$put(args, options))
}

export async function putNetworksNetworkIdSmDeviceWipe(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['device']['wipe']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.device.wipe.$put(args, options))
}

export async function postNetworksNetworkIdSmDeviceDeviceIdRefreshDetails(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['device'][':deviceId']['refreshDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.device[':deviceId'].refreshDetails.$post(args, options),
  )
}

export async function getNetworksNetworkIdSmDevices(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.$get(args, options))
}

export async function putNetworksNetworkIdSmDevicesCheckin(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices']['checkin']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.checkin.$put(args, options))
}

export async function putNetworksNetworkIdSmDevicesTags(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.tags.$put(args, options))
}

export async function postNetworksNetworkIdSmDevicesDeviceIdUnenroll(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['unenroll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].unenroll.$post(args, options),
  )
}

export async function getNetworksNetworkIdSmProfiles(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.profiles.$get(args, options))
}

export async function getNetworksNetworkIdSmTargetGroups(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.targetGroups.$get(args, options))
}

export async function postNetworksNetworkIdSmTargetGroups(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['targetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.targetGroups.$post(args, options))
}

export async function getNetworksNetworkIdSmTargetGroupsTargetGroupId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSmTargetGroupsTargetGroupId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSmTargetGroupsTargetGroupId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['targetGroups'][':targetGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.targetGroups[':targetGroupId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSmUserUserIdDeviceProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['deviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.user[':userId'].deviceProfiles.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmUserUserIdSoftwares(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['user'][':userId']['softwares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.user[':userId'].softwares.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmUsers(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.users.$get(args, options))
}

export async function getNetworksNetworkIdSmDeviceIdCellularUsageHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['cellularUsageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].cellularUsageHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdCerts(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].certs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdDeviceProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['deviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].deviceProfiles.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdNetworkAdapters(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['networkAdapters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].networkAdapters.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdRestrictions(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['restrictions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].restrictions.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdSecurityCenters(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['securityCenters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].securityCenters.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdSoftwares(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['softwares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].softwares.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDeviceIdWlanLists(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm'][':deviceId']['wlanLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm[':deviceId'].wlanLists.$get(args, options),
  )
}

export async function getNetworksNetworkIdSnmpSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmpSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].snmpSettings.$get(args, options))
}

export async function getNetworksNetworkIdSplashLoginAttempts(
  args: InferRequestType<(typeof client.networks)[':networkId']['splashLoginAttempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].splashLoginAttempts.$get(args, options))
}

export async function postNetworksNetworkIdSplit(
  args: InferRequestType<(typeof client.networks)[':networkId']['split']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].split.$post(args, options))
}

export async function getNetworksNetworkIdSsids(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].ssids.$get(args, options))
}

export async function getNetworksNetworkIdSsidsNumber(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].ssids[':number'].$get(args, options))
}

export async function putNetworksNetworkIdSsidsNumber(
  args: InferRequestType<(typeof client.networks)[':networkId']['ssids'][':number']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].ssids[':number'].$put(args, options))
}

export async function getNetworksNetworkIdSsidsNumberL3FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].ssids[':number'].l3FirewallRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdSsidsNumberL3FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['l3FirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].ssids[':number'].l3FirewallRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdSsidsNumberSplashSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].ssids[':number'].splashSettings.$get(args, options),
  )
}

export async function putNetworksNetworkIdSsidsNumberSplashSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['ssids'][':number']['splashSettings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].ssids[':number'].splashSettings.$put(args, options),
  )
}

export async function getNetworksNetworkIdStaticRoutes(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].staticRoutes.$get(args, options))
}

export async function postNetworksNetworkIdStaticRoutes(
  args: InferRequestType<(typeof client.networks)[':networkId']['staticRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].staticRoutes.$post(args, options))
}

export async function getNetworksNetworkIdStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].staticRoutes[':staticRouteId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].staticRoutes[':staticRouteId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['staticRoutes'][':staticRouteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].staticRoutes[':staticRouteId'].$delete(args, options),
  )
}

export async function postNetworksNetworkIdSwapWarmSpare(
  args: InferRequestType<(typeof client.networks)[':networkId']['swapWarmSpare']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].swapWarmSpare.$post(args, options))
}

export async function getNetworksNetworkIdSwitchLinkAggregations(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.linkAggregations.$get(args, options),
  )
}

export async function postNetworksNetworkIdSwitchLinkAggregations(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.linkAggregations.$post(args, options),
  )
}

export async function putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.linkAggregations[':linkAggregationId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['linkAggregations'][':linkAggregationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.linkAggregations[':linkAggregationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdSwitchPortSchedules(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['portSchedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.portSchedules.$get(args, options))
}

export async function postNetworksNetworkIdSwitchPortSchedules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['portSchedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.portSchedules.$post(args, options),
  )
}

export async function putNetworksNetworkIdSwitchPortSchedulesPortScheduleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.portSchedules[':portScheduleId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['portSchedules'][':portScheduleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.portSchedules[':portScheduleId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.settings.$get(args, options))
}

export async function putNetworksNetworkIdSwitchSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.settings.$put(args, options))
}

export async function getNetworksNetworkIdSwitchSettingsMtu(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.settings.mtu.$get(args, options))
}

export async function putNetworksNetworkIdSwitchSettingsMtu(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['mtu']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.settings.mtu.$put(args, options))
}

export async function getNetworksNetworkIdSwitchSettingsMulticast(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.multicast.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchSettingsMulticast(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['multicast']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.multicast.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchSettingsQosRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules.$get(args, options),
  )
}

export async function postNetworksNetworkIdSwitchSettingsQosRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules.$post(args, options),
  )
}

export async function getNetworksNetworkIdSwitchSettingsQosRulesOrder(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules.order.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchSettingsQosRulesOrder(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules']['order']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules.order.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchSettingsQosRulesQosRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchSettingsQosRulesQosRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['qosRules'][':qosRuleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.qosRules[':qosRuleId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchSettingsStormControl(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.stormControl.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchSettingsStormControl(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['settings']['stormControl']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.settings.stormControl.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchStacks(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switchStacks.$get(args, options))
}

export async function postNetworksNetworkIdSwitchStacks(
  args: InferRequestType<(typeof client.networks)[':networkId']['switchStacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switchStacks.$post(args, options))
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switchStacks[':switchStackId'].$get(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchStacksSwitchStackId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switchStacks[':switchStackId'].$delete(args, options),
  )
}

export async function postNetworksNetworkIdSwitchStacksSwitchStackIdAdd(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switchStacks[':switchStackId'].add.$post(args, options),
  )
}

export async function postNetworksNetworkIdSwitchStacksSwitchStackIdRemove(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switchStacks'][':switchStackId']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switchStacks[':switchStackId'].remove.$post(args, options),
  )
}

export async function getNetworksNetworkIdSyslogServers(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].syslogServers.$get(args, options))
}

export async function putNetworksNetworkIdSyslogServers(
  args: InferRequestType<(typeof client.networks)[':networkId']['syslogServers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].syslogServers.$put(args, options))
}

export async function getNetworksNetworkIdTraffic(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].traffic.$get(args, options))
}

export async function postNetworksNetworkIdUnbind(
  args: InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].unbind.$post(args, options))
}

export async function getNetworksNetworkIdUplinkSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].uplinkSettings.$get(args, options))
}

export async function putNetworksNetworkIdUplinkSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['uplinkSettings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].uplinkSettings.$put(args, options))
}

export async function getNetworksNetworkIdVlans(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlans.$get(args, options))
}

export async function postNetworksNetworkIdVlans(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlans.$post(args, options))
}

export async function getNetworksNetworkIdVlansVlanId(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlans[':vlanId'].$get(args, options))
}

export async function putNetworksNetworkIdVlansVlanId(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlans[':vlanId'].$put(args, options))
}

export async function deleteNetworksNetworkIdVlansVlanId(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlans'][':vlanId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlans[':vlanId'].$delete(args, options))
}

export async function getNetworksNetworkIdVlansEnabledState(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlansEnabledState.$get(args, options))
}

export async function putNetworksNetworkIdVlansEnabledState(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlansEnabledState']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlansEnabledState.$put(args, options))
}

export async function getNetworksNetworkIdWarmSpareSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].warmSpareSettings.$get(args, options))
}

export async function putNetworksNetworkIdWarmSpareSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['warmSpareSettings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].warmSpareSettings.$put(args, options))
}

export async function getNetworksNetworkIdWirelessRfProfiles(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.rfProfiles.$get(args, options))
}

export async function postNetworksNetworkIdWirelessRfProfiles(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['rfProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.rfProfiles.$post(args, options))
}

export async function getNetworksNetworkIdWirelessRfProfilesRfProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessRfProfilesRfProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdWirelessRfProfilesRfProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['rfProfiles'][':rfProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.rfProfiles[':rfProfileId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.settings.$get(args, options))
}

export async function putNetworksNetworkIdWirelessSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.settings.$put(args, options))
}

export async function putNetworksNetworkIdSmDevicesLock(
  args: InferRequestType<(typeof client.networks)[':network_id']['sm']['devices']['lock']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':network_id'].sm.devices.lock.$put(args, options))
}

export async function getNetworksNetworkIdSmIdConnectivity(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['connectivity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':network_id'].sm[':id'].connectivity.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmIdDesktopLogs(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['desktopLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':network_id'].sm[':id'].desktopLogs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmIdDeviceCommandLogs(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['deviceCommandLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':network_id'].sm[':id'].deviceCommandLogs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmIdPerformanceHistory(
  args: InferRequestType<
    (typeof client.networks)[':network_id']['sm'][':id']['performanceHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':network_id'].sm[':id'].performanceHistory.$get(args, options),
  )
}

export async function getOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.$get(undefined, options))
}

export async function getOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$get(args, options))
}

export async function getOrganizationsOrganizationIdActionBatches(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['actionBatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].actionBatches.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdActionBatches(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['actionBatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].actionBatches.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdActionBatchesActionBatchId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].actionBatches[':actionBatchId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdActionBatchesActionBatchId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].actionBatches[':actionBatchId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdmins(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].admins.$get(args, options))
}

export async function postOrganizationsOrganizationIdAdmins(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['admins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].admins.$post(args, options))
}

export async function putOrganizationsOrganizationIdAdminsAdminId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['admins'][':adminId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].admins[':adminId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdAdminsAdminId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['admins'][':adminId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].admins[':adminId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdApiRequests(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['apiRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].apiRequests.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApiRequestsOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].apiRequests.overview.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdClaim(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].claim.$post(args, options))
}

export async function postOrganizationsOrganizationIdClone(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].clone.$post(args, options))
}

export async function getOrganizationsOrganizationIdConfigTemplates(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates.$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[':configTemplateId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switchProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[
      ':configTemplateId'
    ].switchProfiles.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdConfigurationChanges(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configurationChanges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configurationChanges.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDeviceStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['deviceStatuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].deviceStatuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevices(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].devices.$get(args, options))
}

export async function getOrganizationsOrganizationIdInsightMonitoredMediaServers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].insight.monitoredMediaServers.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdInsightMonitoredMediaServers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].insight.monitoredMediaServers.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].insight.monitoredMediaServers[
      ':monitoredMediaServerId'
    ].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].insight.monitoredMediaServers[
      ':monitoredMediaServerId'
    ].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['monitoredMediaServers'][':monitoredMediaServerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].insight.monitoredMediaServers[
      ':monitoredMediaServerId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdInventory(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].inventory.$get(args, options))
}

export async function getOrganizationsOrganizationIdLicenseState(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenseState']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenseState.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdLicenses(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].licenses.$get(args, options))
}

export async function postOrganizationsOrganizationIdLicensesAssignSeats(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses']['assignSeats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses.assignSeats.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdLicensesMoveSeats(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses']['moveSeats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses.moveSeats.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdLicensesRenewSeats(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses']['renewSeats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses.renewSeats.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdLicensesLicenseId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses[':licenseId'].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdNetworks(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].networks.$get(args, options))
}

export async function postOrganizationsOrganizationIdNetworks(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['networks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].networks.$post(args, options))
}

export async function postOrganizationsOrganizationIdNetworksCombine(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['combine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.combine.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOpenapiSpec(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['openapiSpec']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].openapiSpec.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSamlRoles(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].samlRoles.$get(args, options))
}

export async function postOrganizationsOrganizationIdSamlRoles(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['samlRoles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].samlRoles.$post(args, options))
}

export async function getOrganizationsOrganizationIdSamlRolesSamlRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].samlRoles[':samlRoleId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdSamlRolesSamlRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].samlRoles[':samlRoleId'].$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdSecurityIntrusionSettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].security.intrusionSettings.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdSecurityIntrusionSettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['security']['intrusionSettings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].security.intrusionSettings.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdSecurityEvents(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['securityEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].securityEvents.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSnmp(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].snmp.$get(args, options))
}

export async function getOrganizationsOrganizationIdThirdPartyVPNPeers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].thirdPartyVPNPeers.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdThirdPartyVPNPeers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['thirdPartyVPNPeers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].thirdPartyVPNPeers.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdUplinksLossAndLatency(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinksLossAndLatency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].uplinksLossAndLatency.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdVpnFirewallRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].vpnFirewallRules.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdVpnFirewallRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['vpnFirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].vpnFirewallRules.$put(args, options),
  )
}
