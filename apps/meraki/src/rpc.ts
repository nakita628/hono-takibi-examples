import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdministeredIdentitiesMe(options?: ClientRequestOptions) {
  return await parseResponse(client.administered.identities.me.$get(undefined, options))
}

export async function getAdministeredIdentitiesMeApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.administered.identities.me.api.keys.$get(undefined, options))
}

export async function postAdministeredIdentitiesMeApiKeysGenerate(options?: ClientRequestOptions) {
  return await parseResponse(
    client.administered.identities.me.api.keys.generate.$post(undefined, options),
  )
}

export async function postAdministeredIdentitiesMeApiKeysSuffixRevoke(
  args: InferRequestType<
    (typeof client.administered.identities.me.api.keys)[':suffix']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.identities.me.api.keys[':suffix'].revoke.$post(args, options),
  )
}

export async function getAdministeredLicensingSubscriptionEntitlements(
  args: InferRequestType<typeof client.administered.licensing.subscription.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.licensing.subscription.entitlements.$get(args, options),
  )
}

export async function getAdministeredLicensingSubscriptionSubscriptions(
  args: InferRequestType<typeof client.administered.licensing.subscription.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.licensing.subscription.subscriptions.$get(args, options),
  )
}

export async function postAdministeredLicensingSubscriptionSubscriptionsClaim(
  args: InferRequestType<
    typeof client.administered.licensing.subscription.subscriptions.claim.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.licensing.subscription.subscriptions.claim.$post(args, options),
  )
}

export async function postAdministeredLicensingSubscriptionSubscriptionsClaimKeyValidate(
  args: InferRequestType<
    typeof client.administered.licensing.subscription.subscriptions.claimKey.validate.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.licensing.subscription.subscriptions.claimKey.validate.$post(args, options),
  )
}

export async function getAdministeredLicensingSubscriptionSubscriptionsComplianceStatuses(
  args: InferRequestType<
    typeof client.administered.licensing.subscription.subscriptions.compliance.statuses.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.licensing.subscription.subscriptions.compliance.statuses.$get(
      args,
      options,
    ),
  )
}

export async function postAdministeredLicensingSubscriptionSubscriptionsSubscriptionIdBind(
  args: InferRequestType<
    (typeof client.administered.licensing.subscription.subscriptions)[':subscriptionId']['bind']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administered.licensing.subscription.subscriptions[':subscriptionId'].bind.$post(
      args,
      options,
    ),
  )
}

export async function getDevicesSerial(
  args: InferRequestType<(typeof client.devices)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].$get(args, options))
}

export async function putDevicesSerial(
  args: InferRequestType<(typeof client.devices)[':serial']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].$put(args, options))
}

export async function getDevicesSerialApplianceDhcpSubnets(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['dhcp']['subnets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].appliance.dhcp.subnets.$get(args, options))
}

export async function postDevicesSerialApplianceInterfacesPortsUpdate(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['interfaces']['ports']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.interfaces.ports.update.$post(args, options),
  )
}

export async function putDevicesSerialApplianceInterfacesPortsNumber(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['interfaces']['ports'][':number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.interfaces.ports[':number'].$put(args, options),
  )
}

export async function getDevicesSerialAppliancePerformance(
  args: InferRequestType<(typeof client.devices)[':serial']['appliance']['performance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].appliance.performance.$get(args, options))
}

export async function getDevicesSerialAppliancePrefixesDelegated(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['prefixes']['delegated']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.prefixes.delegated.$get(args, options),
  )
}

export async function getDevicesSerialAppliancePrefixesDelegatedVlanAssignments(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['prefixes']['delegated']['vlanAssignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.prefixes.delegated.vlanAssignments.$get(args, options),
  )
}

export async function getDevicesSerialApplianceRadioSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['radio']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].appliance.radio.settings.$get(args, options))
}

export async function putDevicesSerialApplianceRadioSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['radio']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].appliance.radio.settings.$put(args, options))
}

export async function getDevicesSerialApplianceUplinksSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['uplinks']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.uplinks.settings.$get(args, options),
  )
}

export async function putDevicesSerialApplianceUplinksSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['uplinks']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.uplinks.settings.$put(args, options),
  )
}

export async function postDevicesSerialApplianceVmxAuthenticationToken(
  args: InferRequestType<
    (typeof client.devices)[':serial']['appliance']['vmx']['authenticationToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].appliance.vmx.authenticationToken.$post(args, options),
  )
}

export async function postDevicesSerialBlinkLeds(
  args: InferRequestType<(typeof client.devices)[':serial']['blinkLeds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].blinkLeds.$post(args, options))
}

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

export async function getDevicesSerialCameraClip(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['clip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.clip.$get(args, options))
}

export async function getDevicesSerialCameraCustomAnalytics(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['customAnalytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.customAnalytics.$get(args, options))
}

export async function putDevicesSerialCameraCustomAnalytics(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['customAnalytics']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.customAnalytics.$put(args, options))
}

export async function postDevicesSerialCameraGenerateSnapshot(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['generateSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.generateSnapshot.$post(args, options))
}

export async function getDevicesSerialCameraQualityAndRetention(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.qualityAndRetention.$get(args, options),
  )
}

export async function putDevicesSerialCameraQualityAndRetention(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['qualityAndRetention']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.qualityAndRetention.$put(args, options),
  )
}

export async function getDevicesSerialCameraSense(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['sense']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.sense.$get(args, options))
}

export async function putDevicesSerialCameraSense(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['sense']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.sense.$put(args, options))
}

export async function getDevicesSerialCameraSenseObjectDetectionModels(
  args: InferRequestType<
    (typeof client.devices)[':serial']['camera']['sense']['objectDetectionModels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].camera.sense.objectDetectionModels.$get(args, options),
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

export async function getDevicesSerialCameraVideoLink(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['videoLink']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.videoLink.$get(args, options))
}

export async function getDevicesSerialCameraWirelessProfiles(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['wirelessProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.wirelessProfiles.$get(args, options))
}

export async function putDevicesSerialCameraWirelessProfiles(
  args: InferRequestType<(typeof client.devices)[':serial']['camera']['wirelessProfiles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].camera.wirelessProfiles.$put(args, options))
}

export async function putDevicesSerialCellularGeolocations(
  args: InferRequestType<(typeof client.devices)[':serial']['cellular']['geolocations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellular.geolocations.$put(args, options))
}

export async function getDevicesSerialCellularSims(
  args: InferRequestType<(typeof client.devices)[':serial']['cellular']['sims']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellular.sims.$get(args, options))
}

export async function putDevicesSerialCellularSims(
  args: InferRequestType<(typeof client.devices)[':serial']['cellular']['sims']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellular.sims.$put(args, options))
}

export async function postDevicesSerialCellularUplinksBandsMasksUpdate(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellular']['uplinks']['bands']['masks']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].cellular.uplinks.bands.masks.update.$post(args, options),
  )
}

export async function getDevicesSerialCellularGatewayLan(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['lan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellularGateway.lan.$get(args, options))
}

export async function putDevicesSerialCellularGatewayLan(
  args: InferRequestType<(typeof client.devices)[':serial']['cellularGateway']['lan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].cellularGateway.lan.$put(args, options))
}

export async function getDevicesSerialCellularGatewayPortForwardingRules(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['portForwardingRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].cellularGateway.portForwardingRules.$get(args, options),
  )
}

export async function putDevicesSerialCellularGatewayPortForwardingRules(
  args: InferRequestType<
    (typeof client.devices)[':serial']['cellularGateway']['portForwardingRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].cellularGateway.portForwardingRules.$put(args, options),
  )
}

export async function postDevicesSerialCertificatesCertificateSerialRevoke(
  args: InferRequestType<
    (typeof client.devices)[':serial']['certificates'][':certificateSerial']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].certificates[':certificateSerial'].revoke.$post(args, options),
  )
}

export async function getDevicesSerialClients(
  args: InferRequestType<(typeof client.devices)[':serial']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].clients.$get(args, options))
}

export async function postDevicesSerialLiveToolsArpTable(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['arpTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.arpTable.$post(args, options))
}

export async function getDevicesSerialLiveToolsArpTableArpTableId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['arpTable'][':arpTableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.arpTable[':arpTableId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsCableTest(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['cableTest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.cableTest.$post(args, options))
}

export async function getDevicesSerialLiveToolsCableTestId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['cableTest'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.cableTest[':id'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsLedsBlink(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['leds']['blink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.leds.blink.$post(args, options))
}

export async function getDevicesSerialLiveToolsLedsBlinkLedsBlinkId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['leds']['blink'][':ledsBlinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.leds.blink[':ledsBlinkId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsMacTable(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['macTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.macTable.$post(args, options))
}

export async function getDevicesSerialLiveToolsMacTableMacTableId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['macTable'][':macTableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.macTable[':macTableId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsMulticastRouting(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['multicastRouting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.multicastRouting.$post(args, options),
  )
}

export async function getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['multicastRouting'][':multicastRoutingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.multicastRouting[':multicastRoutingId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsPing(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.ping.$post(args, options))
}

export async function getDevicesSerialLiveToolsPingId(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['ping'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.ping[':id'].$get(args, options))
}

export async function postDevicesSerialLiveToolsPingDevice(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['pingDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.pingDevice.$post(args, options))
}

export async function getDevicesSerialLiveToolsPingDeviceId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['pingDevice'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.pingDevice[':id'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsPortsCycle(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['ports']['cycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.ports.cycle.$post(args, options))
}

export async function getDevicesSerialLiveToolsPortsCycleId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['ports']['cycle'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.ports.cycle[':id'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsPortsStatus(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['ports']['status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.ports.status.$post(args, options))
}

export async function getDevicesSerialLiveToolsPortsStatusJobId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['ports']['status'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.ports.status[':jobId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsPowerUsage(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['power']['usage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.power.usage.$post(args, options))
}

export async function getDevicesSerialLiveToolsPowerUsageJobId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['power']['usage'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.power.usage[':jobId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsRouteDetails(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['route']['details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.route.details.$post(args, options))
}

export async function getDevicesSerialLiveToolsRouteDetailsJobId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['route']['details'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.route.details[':jobId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsRoutingTableLookups(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['routingTable']['lookups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.routingTable.lookups.$post(args, options),
  )
}

export async function getDevicesSerialLiveToolsRoutingTableLookupsId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['routingTable']['lookups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.routingTable.lookups[':id'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsRoutingTableSummaries(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['routingTable']['summaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.routingTable.summaries.$post(args, options),
  )
}

export async function getDevicesSerialLiveToolsRoutingTableSummariesId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['routingTable']['summaries'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.routingTable.summaries[':id'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsThroughputTest(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['throughputTest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.throughputTest.$post(args, options),
  )
}

export async function getDevicesSerialLiveToolsThroughputTestThroughputTestId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['throughputTest'][':throughputTestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.throughputTest[':throughputTestId'].$get(args, options),
  )
}

export async function postDevicesSerialLiveToolsWakeOnLan(
  args: InferRequestType<(typeof client.devices)[':serial']['liveTools']['wakeOnLan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].liveTools.wakeOnLan.$post(args, options))
}

export async function getDevicesSerialLiveToolsWakeOnLanWakeOnLanId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['liveTools']['wakeOnLan'][':wakeOnLanId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].liveTools.wakeOnLan[':wakeOnLanId'].$get(args, options),
  )
}

export async function getDevicesSerialLldpCdp(
  args: InferRequestType<(typeof client.devices)[':serial']['lldpCdp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].lldpCdp.$get(args, options))
}

export async function getDevicesSerialLossAndLatencyHistory(
  args: InferRequestType<(typeof client.devices)[':serial']['lossAndLatencyHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].lossAndLatencyHistory.$get(args, options))
}

export async function getDevicesSerialManagementInterface(
  args: InferRequestType<(typeof client.devices)[':serial']['managementInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].managementInterface.$get(args, options))
}

export async function putDevicesSerialManagementInterface(
  args: InferRequestType<(typeof client.devices)[':serial']['managementInterface']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].managementInterface.$put(args, options))
}

export async function postDevicesSerialReboot(
  args: InferRequestType<(typeof client.devices)[':serial']['reboot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].reboot.$post(args, options))
}

export async function getDevicesSerialSensorCommands(
  args: InferRequestType<(typeof client.devices)[':serial']['sensor']['commands']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].sensor.commands.$get(args, options))
}

export async function postDevicesSerialSensorCommands(
  args: InferRequestType<(typeof client.devices)[':serial']['sensor']['commands']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].sensor.commands.$post(args, options))
}

export async function getDevicesSerialSensorCommandsCommandId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['sensor']['commands'][':commandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].sensor.commands[':commandId'].$get(args, options),
  )
}

export async function getDevicesSerialSensorRelationships(
  args: InferRequestType<(typeof client.devices)[':serial']['sensor']['relationships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].sensor.relationships.$get(args, options))
}

export async function putDevicesSerialSensorRelationships(
  args: InferRequestType<(typeof client.devices)[':serial']['sensor']['relationships']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].sensor.relationships.$put(args, options))
}

export async function getDevicesSerialSwitchPorts(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.ports.$get(args, options))
}

export async function postDevicesSerialSwitchPortsCycle(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['cycle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.ports.cycle.$post(args, options))
}

export async function getDevicesSerialSwitchPortsStatuses(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['ports']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.ports.statuses.$get(args, options))
}

export async function getDevicesSerialSwitchPortsStatusesPackets(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['ports']['statuses']['packets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.ports.statuses.packets.$get(args, options),
  )
}

export async function getDevicesSerialSwitchPortsPortId(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['ports'][':portId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.ports[':portId'].$get(args, options))
}

export async function putDevicesSerialSwitchPortsPortId(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['ports'][':portId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.ports[':portId'].$put(args, options))
}

export async function getDevicesSerialSwitchRoutingInterfaces(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces.$get(args, options),
  )
}

export async function postDevicesSerialSwitchRoutingInterfaces(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces.$post(args, options),
  )
}

export async function getDevicesSerialSwitchRoutingInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces'][':interfaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces[':interfaceId'].$get(args, options),
  )
}

export async function putDevicesSerialSwitchRoutingInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces'][':interfaceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces[':interfaceId'].$put(args, options),
  )
}

export async function deleteDevicesSerialSwitchRoutingInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces'][':interfaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces[':interfaceId'].$delete(args, options),
  )
}

export async function getDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcp(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces'][':interfaceId']['dhcp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces[':interfaceId'].dhcp.$get(args, options),
  )
}

export async function putDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcp(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['interfaces'][':interfaceId']['dhcp']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.interfaces[':interfaceId'].dhcp.$put(args, options),
  )
}

export async function getDevicesSerialSwitchRoutingStaticRoutes(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['staticRoutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.staticRoutes.$get(args, options),
  )
}

export async function postDevicesSerialSwitchRoutingStaticRoutes(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['staticRoutes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.staticRoutes.$post(args, options),
  )
}

export async function getDevicesSerialSwitchRoutingStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.staticRoutes[':staticRouteId'].$get(args, options),
  )
}

export async function putDevicesSerialSwitchRoutingStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['staticRoutes'][':staticRouteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.staticRoutes[':staticRouteId'].$put(args, options),
  )
}

export async function deleteDevicesSerialSwitchRoutingStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['switch']['routing']['staticRoutes'][':staticRouteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].switch.routing.staticRoutes[':staticRouteId'].$delete(args, options),
  )
}

export async function getDevicesSerialSwitchWarmSpare(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['warmSpare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.warmSpare.$get(args, options))
}

export async function putDevicesSerialSwitchWarmSpare(
  args: InferRequestType<(typeof client.devices)[':serial']['switch']['warmSpare']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].switch.warmSpare.$put(args, options))
}

export async function putDevicesSerialWirelessAlternateManagementInterfaceIpv6(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['alternateManagementInterface']['ipv6']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.alternateManagementInterface.ipv6.$put(args, options),
  )
}

export async function getDevicesSerialWirelessBluetoothSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['bluetooth']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.bluetooth.settings.$get(args, options),
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

export async function getDevicesSerialWirelessConnectionStats(
  args: InferRequestType<(typeof client.devices)[':serial']['wireless']['connectionStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.connectionStats.$get(args, options))
}

export async function getDevicesSerialWirelessElectronicShelfLabel(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['electronicShelfLabel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.electronicShelfLabel.$get(args, options),
  )
}

export async function putDevicesSerialWirelessElectronicShelfLabel(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['electronicShelfLabel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.electronicShelfLabel.$put(args, options),
  )
}

export async function getDevicesSerialWirelessLatencyStats(
  args: InferRequestType<(typeof client.devices)[':serial']['wireless']['latencyStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.latencyStats.$get(args, options))
}

export async function getDevicesSerialWirelessRadioOverrides(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['radio']['overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.radio.overrides.$get(args, options))
}

export async function putDevicesSerialWirelessRadioOverrides(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['radio']['overrides']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.radio.overrides.$put(args, options))
}

export async function getDevicesSerialWirelessRadioSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['radio']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.radio.settings.$get(args, options))
}

export async function putDevicesSerialWirelessRadioSettings(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['radio']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.radio.settings.$put(args, options))
}

export async function getDevicesSerialWirelessStatus(
  args: InferRequestType<(typeof client.devices)[':serial']['wireless']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':serial'].wireless.status.$get(args, options))
}

export async function postDevicesSerialWirelessZigbeeEnrollments(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['zigbee']['enrollments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.zigbee.enrollments.$post(args, options),
  )
}

export async function getDevicesSerialWirelessZigbeeEnrollmentsEnrollmentId(
  args: InferRequestType<
    (typeof client.devices)[':serial']['wireless']['zigbee']['enrollments'][':enrollmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':serial'].wireless.zigbee.enrollments[':enrollmentId'].$get(args, options),
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

export async function getNetworksNetworkIdAlertsHistory(
  args: InferRequestType<(typeof client.networks)[':networkId']['alerts']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].alerts.history.$get(args, options))
}

export async function getNetworksNetworkIdAlertsSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['alerts']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].alerts.settings.$get(args, options))
}

export async function putNetworksNetworkIdAlertsSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['alerts']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].alerts.settings.$put(args, options))
}

export async function getNetworksNetworkIdApplianceClientsClientIdSecurityEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['clients'][':clientId']['security']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.clients[':clientId'].security.events.$get(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdApplianceConnectivityMonitoringDestinations(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['connectivityMonitoringDestinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.connectivityMonitoringDestinations.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceConnectivityMonitoringDestinations(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['connectivityMonitoringDestinations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.connectivityMonitoringDestinations.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceContentFiltering(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['contentFiltering']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.contentFiltering.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceContentFiltering(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['contentFiltering']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.contentFiltering.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceContentFilteringCategories(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['contentFiltering']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.contentFiltering.categories.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceDevicesRedundancy(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['devices']['redundancy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.devices.redundancy.$put(args, options),
  )
}

export async function postNetworksNetworkIdApplianceDevicesRedundancySwap(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['devices']['redundancy']['swap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.devices.redundancy.swap.$post(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallCellularFirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['cellularFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.cellularFirewallRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallCellularFirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['cellularFirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.cellularFirewallRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallFirewalledServices(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['firewalledServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.firewalledServices.$get(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallFirewalledServicesService(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['firewalledServices'][':service']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.firewalledServices[':service'].$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdApplianceFirewallFirewalledServicesService(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['firewalledServices'][':service']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.firewalledServices[':service'].$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdApplianceFirewallInboundCellularFirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundCellularFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.inboundCellularFirewallRules.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdApplianceFirewallInboundCellularFirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['inboundCellularFirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.inboundCellularFirewallRules.$put(
      args,
      options,
    ),
  )
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

export async function getNetworksNetworkIdApplianceFirewallL3FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['l3FirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.l3FirewallRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallL3FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['l3FirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.l3FirewallRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallL7FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['l7FirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.l7FirewallRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallL7FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['l7FirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.l7FirewallRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallL7FirewallRulesApplicationCategories(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['l7FirewallRules']['applicationCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.l7FirewallRules.applicationCategories.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdApplianceFirewallMulticastForwarding(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['multicastForwarding']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.multicastForwarding.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallOneToManyNatRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['oneToManyNatRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.oneToManyNatRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallOneToManyNatRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['oneToManyNatRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.oneToManyNatRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallOneToOneNatRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['oneToOneNatRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.oneToOneNatRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallOneToOneNatRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['oneToOneNatRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.oneToOneNatRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallPortForwardingRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['portForwardingRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.portForwardingRules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallPortForwardingRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['portForwardingRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.portForwardingRules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceFirewallSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.settings.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceFirewallSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['firewall']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.firewall.settings.$put(args, options),
  )
}

export async function postNetworksNetworkIdApplianceInterfacesL3(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['interfaces']['l3']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.interfaces.l3.$post(args, options),
  )
}

export async function putNetworksNetworkIdApplianceInterfacesL3InterfaceId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['interfaces']['l3'][':interfaceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.interfaces.l3[':interfaceId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdApplianceInterfacesL3InterfaceId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['interfaces']['l3'][':interfaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.interfaces.l3[':interfaceId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdAppliancePorts(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['ports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.ports.$get(args, options))
}

export async function getNetworksNetworkIdAppliancePortsPortId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['ports'][':portId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.ports[':portId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdAppliancePortsPortId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['ports'][':portId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.ports[':portId'].$put(args, options),
  )
}

export async function getNetworksNetworkIdAppliancePrefixesDelegatedStatics(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['prefixes']['delegated']['statics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.prefixes.delegated.statics.$get(args, options),
  )
}

export async function postNetworksNetworkIdAppliancePrefixesDelegatedStatics(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['prefixes']['delegated']['statics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.prefixes.delegated.statics.$post(args, options),
  )
}

export async function getNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['prefixes']['delegated']['statics'][':staticDelegatedPrefixId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.prefixes.delegated.statics[
      ':staticDelegatedPrefixId'
    ].$get(args, options),
  )
}

export async function putNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['prefixes']['delegated']['statics'][':staticDelegatedPrefixId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.prefixes.delegated.statics[
      ':staticDelegatedPrefixId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['prefixes']['delegated']['statics'][':staticDelegatedPrefixId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.prefixes.delegated.statics[
      ':staticDelegatedPrefixId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdApplianceRfProfiles(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['rfProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.rfProfiles.$get(args, options))
}

export async function postNetworksNetworkIdApplianceRfProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['rfProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.rfProfiles.$post(args, options),
  )
}

export async function getNetworksNetworkIdApplianceRfProfilesRfProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['rfProfiles'][':rfProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.rfProfiles[':rfProfileId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceRfProfilesRfProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['rfProfiles'][':rfProfileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.rfProfiles[':rfProfileId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdApplianceRfProfilesRfProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['rfProfiles'][':rfProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.rfProfiles[':rfProfileId'].$delete(args, options),
  )
}

export async function putNetworksNetworkIdApplianceSdwanInternetPolicies(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['sdwan']['internetPolicies']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.sdwan.internetPolicies.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceSecurityEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['security']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.security.events.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceSecurityHttpsInspection(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['security']['httpsInspection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.security.httpsInspection.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceSecurityIntrusion(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['security']['intrusion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.security.intrusion.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceSecurityIntrusion(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['security']['intrusion']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.security.intrusion.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceSecurityMalware(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['security']['malware']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.security.malware.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceSecurityMalware(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['security']['malware']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.security.malware.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.settings.$get(args, options))
}

export async function putNetworksNetworkIdApplianceSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.settings.$put(args, options))
}

export async function getNetworksNetworkIdApplianceSingleLan(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['singleLan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.singleLan.$get(args, options))
}

export async function putNetworksNetworkIdApplianceSingleLan(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['singleLan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.singleLan.$put(args, options))
}

export async function getNetworksNetworkIdApplianceSsids(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['ssids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.ssids.$get(args, options))
}

export async function getNetworksNetworkIdApplianceSsidsNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['ssids'][':number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.ssids[':number'].$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceSsidsNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['ssids'][':number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.ssids[':number'].$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceStaticRoutes(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['staticRoutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.staticRoutes.$get(args, options),
  )
}

export async function postNetworksNetworkIdApplianceStaticRoutes(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['staticRoutes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.staticRoutes.$post(args, options),
  )
}

export async function getNetworksNetworkIdApplianceStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.staticRoutes[':staticRouteId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['staticRoutes'][':staticRouteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.staticRoutes[':staticRouteId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdApplianceStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['staticRoutes'][':staticRouteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.staticRoutes[':staticRouteId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdApplianceTrafficShaping(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceTrafficShaping(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClasses(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['customPerformanceClasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.customPerformanceClasses.$get(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClasses(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['customPerformanceClasses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.customPerformanceClasses.$post(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['customPerformanceClasses'][':customPerformanceClassId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.customPerformanceClasses[
      ':customPerformanceClassId'
    ].$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['customPerformanceClasses'][':customPerformanceClassId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.customPerformanceClasses[
      ':customPerformanceClassId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['customPerformanceClasses'][':customPerformanceClassId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.customPerformanceClasses[
      ':customPerformanceClassId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdApplianceTrafficShapingRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.rules.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceTrafficShapingRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.rules.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceTrafficShapingUplinkBandwidth(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['uplinkBandwidth']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.uplinkBandwidth.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceTrafficShapingUplinkBandwidth(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['uplinkBandwidth']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.uplinkBandwidth.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceTrafficShapingUplinkSelection(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['uplinkSelection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.uplinkSelection.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceTrafficShapingUplinkSelection(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['uplinkSelection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.uplinkSelection.$put(args, options),
  )
}

export async function putNetworksNetworkIdApplianceTrafficShapingVpnExclusions(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['trafficShaping']['vpnExclusions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.trafficShaping.vpnExclusions.$put(args, options),
  )
}

export async function postNetworksNetworkIdApplianceUmbrellaAccountConnect(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['umbrella']['account']['connect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.umbrella.account.connect.$post(args, options),
  )
}

export async function postNetworksNetworkIdApplianceUmbrellaAccountDisconnect(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['umbrella']['account']['disconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.umbrella.account.disconnect.$post(args, options),
  )
}

export async function putNetworksNetworkIdApplianceUmbrellaDomainsExclusions(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['umbrella']['domains']['exclusions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.umbrella.domains.exclusions.$put(args, options),
  )
}

export async function postNetworksNetworkIdApplianceUmbrellaPoliciesAdd(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['umbrella']['policies']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.umbrella.policies.add.$post(args, options),
  )
}

export async function postNetworksNetworkIdApplianceUmbrellaPoliciesRemove(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['umbrella']['policies']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.umbrella.policies.remove.$post(args, options),
  )
}

export async function putNetworksNetworkIdApplianceUmbrellaProtection(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['umbrella']['protection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.umbrella.protection.$put(args, options),
  )
}

export async function putNetworksNetworkIdApplianceUplinksNat(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['uplinks']['nat']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.uplinks.nat.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceUplinksUsageHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['uplinks']['usageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.uplinks.usageHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdApplianceVlans(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['vlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.vlans.$get(args, options))
}

export async function postNetworksNetworkIdApplianceVlans(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['vlans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.vlans.$post(args, options))
}

export async function getNetworksNetworkIdApplianceVlansSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vlans']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vlans.settings.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceVlansSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vlans']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vlans.settings.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceVlansVlanId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vlans'][':vlanId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vlans[':vlanId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceVlansVlanId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vlans'][':vlanId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vlans[':vlanId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdApplianceVlansVlanId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vlans'][':vlanId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vlans[':vlanId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdApplianceVpnBgp(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['vpn']['bgp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.vpn.bgp.$get(args, options))
}

export async function putNetworksNetworkIdApplianceVpnBgp(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['vpn']['bgp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.vpn.bgp.$put(args, options))
}

export async function getNetworksNetworkIdApplianceVpnSiteToSiteVpn(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vpn']['siteToSiteVpn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vpn.siteToSiteVpn.$get(args, options),
  )
}

export async function putNetworksNetworkIdApplianceVpnSiteToSiteVpn(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['vpn']['siteToSiteVpn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.vpn.siteToSiteVpn.$put(args, options),
  )
}

export async function getNetworksNetworkIdApplianceWarmSpare(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['warmSpare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.warmSpare.$get(args, options))
}

export async function putNetworksNetworkIdApplianceWarmSpare(
  args: InferRequestType<(typeof client.networks)[':networkId']['appliance']['warmSpare']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].appliance.warmSpare.$put(args, options))
}

export async function postNetworksNetworkIdApplianceWarmSpareSwap(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['appliance']['warmSpare']['swap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].appliance.warmSpare.swap.$post(args, options),
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

export async function getNetworksNetworkIdCameraWirelessProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['wirelessProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.wirelessProfiles.$get(args, options),
  )
}

export async function postNetworksNetworkIdCameraWirelessProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['wirelessProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.wirelessProfiles.$post(args, options),
  )
}

export async function getNetworksNetworkIdCameraWirelessProfilesWirelessProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['wirelessProfiles'][':wirelessProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.wirelessProfiles[':wirelessProfileId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdCameraWirelessProfilesWirelessProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['wirelessProfiles'][':wirelessProfileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.wirelessProfiles[':wirelessProfileId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['camera']['wirelessProfiles'][':wirelessProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].camera.wirelessProfiles[':wirelessProfileId'].$delete(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdCampusGatewayClusters(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['campusGateway']['clusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].campusGateway.clusters.$post(args, options),
  )
}

export async function putNetworksNetworkIdCampusGatewayClustersClusterId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['campusGateway']['clusters'][':clusterId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].campusGateway.clusters[':clusterId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdCampusGatewayClustersClusterId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['campusGateway']['clusters'][':clusterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].campusGateway.clusters[':clusterId'].$delete(args, options),
  )
}

export async function putNetworksNetworkIdCampusGatewaySsidsNumberMdns(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['campusGateway']['ssids'][':number']['mdns']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].campusGateway.ssids[':number'].mdns.$put(args, options),
  )
}

export async function getNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinations(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cellularGateway']['connectivityMonitoringDestinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularGateway.connectivityMonitoringDestinations.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinations(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cellularGateway']['connectivityMonitoringDestinations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularGateway.connectivityMonitoringDestinations.$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdCellularGatewayDhcp(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularGateway']['dhcp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].cellularGateway.dhcp.$get(args, options))
}

export async function putNetworksNetworkIdCellularGatewayDhcp(
  args: InferRequestType<(typeof client.networks)[':networkId']['cellularGateway']['dhcp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].cellularGateway.dhcp.$put(args, options))
}

export async function getNetworksNetworkIdCellularGatewaySubnetPool(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cellularGateway']['subnetPool']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularGateway.subnetPool.$get(args, options),
  )
}

export async function putNetworksNetworkIdCellularGatewaySubnetPool(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cellularGateway']['subnetPool']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularGateway.subnetPool.$put(args, options),
  )
}

export async function getNetworksNetworkIdCellularGatewayUplink(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cellularGateway']['uplink']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularGateway.uplink.$get(args, options),
  )
}

export async function putNetworksNetworkIdCellularGatewayUplink(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['cellularGateway']['uplink']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].cellularGateway.uplink.$put(args, options),
  )
}

export async function getNetworksNetworkIdClients(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients.$get(args, options))
}

export async function getNetworksNetworkIdClientsApplicationUsage(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['applicationUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients.applicationUsage.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsBandwidthUsageHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['bandwidthUsageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients.bandwidthUsageHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsOverview(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients.overview.$get(args, options))
}

export async function postNetworksNetworkIdClientsProvision(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients']['provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients.provision.$post(args, options))
}

export async function getNetworksNetworkIdClientsUsageHistories(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients']['usageHistories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients.usageHistories.$get(args, options),
  )
}

export async function getNetworksNetworkIdClientsClientId(
  args: InferRequestType<(typeof client.networks)[':networkId']['clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].clients[':clientId'].$get(args, options))
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

export async function getNetworksNetworkIdClientsClientIdTrafficHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['clients'][':clientId']['trafficHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].clients[':clientId'].trafficHistory.$get(args, options),
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

export async function postNetworksNetworkIdDevicesClaimVmx(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['claim']['vmx']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices.claim.vmx.$post(args, options))
}

export async function postNetworksNetworkIdDevicesRemove(
  args: InferRequestType<(typeof client.networks)[':networkId']['devices']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].devices.remove.$post(args, options))
}

export async function putNetworksNetworkIdDevicesSyslogServers(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['devices']['syslog']['servers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].devices.syslog.servers.$put(args, options),
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

export async function getNetworksNetworkIdFirmwareUpgrades(
  args: InferRequestType<(typeof client.networks)[':networkId']['firmwareUpgrades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].firmwareUpgrades.$get(args, options))
}

export async function putNetworksNetworkIdFirmwareUpgrades(
  args: InferRequestType<(typeof client.networks)[':networkId']['firmwareUpgrades']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].firmwareUpgrades.$put(args, options))
}

export async function postNetworksNetworkIdFirmwareUpgradesRollbacks(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['rollbacks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.rollbacks.$post(args, options),
  )
}

export async function getNetworksNetworkIdFirmwareUpgradesStagedEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.events.$get(args, options),
  )
}

export async function putNetworksNetworkIdFirmwareUpgradesStagedEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['events']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.events.$put(args, options),
  )
}

export async function postNetworksNetworkIdFirmwareUpgradesStagedEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.events.$post(args, options),
  )
}

export async function postNetworksNetworkIdFirmwareUpgradesStagedEventsDefer(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['events']['defer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.events.defer.$post(args, options),
  )
}

export async function postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacks(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['events']['rollbacks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.events.rollbacks.$post(args, options),
  )
}

export async function getNetworksNetworkIdFirmwareUpgradesStagedGroups(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.groups.$get(args, options),
  )
}

export async function postNetworksNetworkIdFirmwareUpgradesStagedGroups(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.groups.$post(args, options),
  )
}

export async function getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.groups[':groupId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.groups[':groupId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.groups[':groupId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdFirmwareUpgradesStagedStages(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['stages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.stages.$get(args, options),
  )
}

export async function putNetworksNetworkIdFirmwareUpgradesStagedStages(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['firmwareUpgrades']['staged']['stages']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].firmwareUpgrades.staged.stages.$put(args, options),
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

export async function postNetworksNetworkIdFloorPlansAutoLocateJobsBatch(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans']['autoLocate']['jobs']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans.autoLocate.jobs.batch.$post(args, options),
  )
}

export async function postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans']['autoLocate']['jobs'][':jobId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans.autoLocate.jobs[':jobId'].cancel.$post(args, options),
  )
}

export async function postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublish(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans']['autoLocate']['jobs'][':jobId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans.autoLocate.jobs[':jobId'].publish.$post(args, options),
  )
}

export async function postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculate(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans']['autoLocate']['jobs'][':jobId']['recalculate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans.autoLocate.jobs[':jobId'].recalculate.$post(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdFloorPlansDevicesBatchUpdate(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['floorPlans']['devices']['batchUpdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].floorPlans.devices.batchUpdate.$post(args, options),
  )
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

export async function getNetworksNetworkIdGroupPolicies(
  args: InferRequestType<(typeof client.networks)[':networkId']['groupPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].groupPolicies.$get(args, options))
}

export async function postNetworksNetworkIdGroupPolicies(
  args: InferRequestType<(typeof client.networks)[':networkId']['groupPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].groupPolicies.$post(args, options))
}

export async function getNetworksNetworkIdGroupPoliciesGroupPolicyId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['groupPolicies'][':groupPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].groupPolicies[':groupPolicyId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdGroupPoliciesGroupPolicyId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['groupPolicies'][':groupPolicyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].groupPolicies[':groupPolicyId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdGroupPoliciesGroupPolicyId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['groupPolicies'][':groupPolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].groupPolicies[':groupPolicyId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdHealthAlerts(
  args: InferRequestType<(typeof client.networks)[':networkId']['health']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].health.alerts.$get(args, options))
}

export async function getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTime(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['insight']['applications'][':applicationId']['healthByTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].insight.applications[':applicationId'].healthByTime.$get(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdMerakiAuthUsers(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].merakiAuthUsers.$get(args, options))
}

export async function postNetworksNetworkIdMerakiAuthUsers(
  args: InferRequestType<(typeof client.networks)[':networkId']['merakiAuthUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].merakiAuthUsers.$post(args, options))
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

export async function putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['merakiAuthUsers'][':merakiAuthUserId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].merakiAuthUsers[':merakiAuthUserId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdMqttBrokers(
  args: InferRequestType<(typeof client.networks)[':networkId']['mqttBrokers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].mqttBrokers.$get(args, options))
}

export async function postNetworksNetworkIdMqttBrokers(
  args: InferRequestType<(typeof client.networks)[':networkId']['mqttBrokers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].mqttBrokers.$post(args, options))
}

export async function getNetworksNetworkIdMqttBrokersMqttBrokerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['mqttBrokers'][':mqttBrokerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].mqttBrokers[':mqttBrokerId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdMqttBrokersMqttBrokerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['mqttBrokers'][':mqttBrokerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].mqttBrokers[':mqttBrokerId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdMqttBrokersMqttBrokerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['mqttBrokers'][':mqttBrokerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].mqttBrokers[':mqttBrokerId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdNetflow(
  args: InferRequestType<(typeof client.networks)[':networkId']['netflow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].netflow.$get(args, options))
}

export async function putNetworksNetworkIdNetflow(
  args: InferRequestType<(typeof client.networks)[':networkId']['netflow']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].netflow.$put(args, options))
}

export async function getNetworksNetworkIdNetworkHealthChannelUtilization(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['networkHealth']['channelUtilization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].networkHealth.channelUtilization.$get(args, options),
  )
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

export async function getNetworksNetworkIdPoliciesByClient(
  args: InferRequestType<(typeof client.networks)[':networkId']['policies']['byClient']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].policies.byClient.$get(args, options))
}

export async function getNetworksNetworkIdSensorAlertsCurrentOverviewByMetric(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['current']['overview']['byMetric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.current.overview.byMetric.$get(args, options),
  )
}

export async function getNetworksNetworkIdSensorAlertsOverviewByMetric(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['overview']['byMetric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.overview.byMetric.$get(args, options),
  )
}

export async function getNetworksNetworkIdSensorAlertsProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.profiles.$get(args, options),
  )
}

export async function postNetworksNetworkIdSensorAlertsProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.profiles.$post(args, options),
  )
}

export async function getNetworksNetworkIdSensorAlertsProfilesId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['profiles'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.profiles[':id'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSensorAlertsProfilesId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['profiles'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.profiles[':id'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSensorAlertsProfilesId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['alerts']['profiles'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.alerts.profiles[':id'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSensorMqttBrokers(
  args: InferRequestType<(typeof client.networks)[':networkId']['sensor']['mqttBrokers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sensor.mqttBrokers.$get(args, options))
}

export async function getNetworksNetworkIdSensorMqttBrokersMqttBrokerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['mqttBrokers'][':mqttBrokerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.mqttBrokers[':mqttBrokerId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSensorMqttBrokersMqttBrokerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sensor']['mqttBrokers'][':mqttBrokerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sensor.mqttBrokers[':mqttBrokerId'].$put(args, options),
  )
}

export async function getNetworksNetworkIdSensorRelationships(
  args: InferRequestType<(typeof client.networks)[':networkId']['sensor']['relationships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sensor.relationships.$get(args, options))
}

export async function getNetworksNetworkIdSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].settings.$get(args, options))
}

export async function putNetworksNetworkIdSettings(
  args: InferRequestType<(typeof client.networks)[':networkId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].settings.$put(args, options))
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

export async function getNetworksNetworkIdSmDevices(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.$get(args, options))
}

export async function postNetworksNetworkIdSmDevicesCheckin(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices']['checkin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.checkin.$post(args, options))
}

export async function putNetworksNetworkIdSmDevicesFields(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['fields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.fields.$put(args, options))
}

export async function postNetworksNetworkIdSmDevicesLock(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.lock.$post(args, options))
}

export async function postNetworksNetworkIdSmDevicesModifyTags(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices']['modifyTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices.modifyTags.$post(args, options),
  )
}

export async function postNetworksNetworkIdSmDevicesMove(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.move.$post(args, options))
}

export async function postNetworksNetworkIdSmDevicesReboot(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices']['reboot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.reboot.$post(args, options))
}

export async function postNetworksNetworkIdSmDevicesShutdown(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices']['shutdown']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.shutdown.$post(args, options))
}

export async function postNetworksNetworkIdSmDevicesWipe(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['devices']['wipe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.devices.wipe.$post(args, options))
}

export async function getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['cellularUsageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].cellularUsageHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdCerts(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].certs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdConnectivity(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['connectivity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].connectivity.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdDesktopLogs(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['desktopLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].desktopLogs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogs(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['deviceCommandLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].deviceCommandLogs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdDeviceProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['deviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].deviceProfiles.$get(args, options),
  )
}

export async function postNetworksNetworkIdSmDevicesDeviceIdInstallApps(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['installApps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].installApps.$post(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdNetworkAdapters(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['networkAdapters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].networkAdapters.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['performanceHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].performanceHistory.$get(args, options),
  )
}

export async function postNetworksNetworkIdSmDevicesDeviceIdRefreshDetails(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['refreshDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].refreshDetails.$post(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdRestrictions(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['restrictions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].restrictions.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdSecurityCenters(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['securityCenters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].securityCenters.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdSoftwares(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['softwares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].softwares.$get(args, options),
  )
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

export async function postNetworksNetworkIdSmDevicesDeviceIdUninstallApps(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['uninstallApps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].uninstallApps.$post(args, options),
  )
}

export async function getNetworksNetworkIdSmDevicesDeviceIdWlanLists(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['devices'][':deviceId']['wlanLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.devices[':deviceId'].wlanLists.$get(args, options),
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

export async function getNetworksNetworkIdSmTrustedAccessConfigs(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['trustedAccessConfigs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.trustedAccessConfigs.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmUserAccessDevices(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['userAccessDevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.userAccessDevices.$get(args, options))
}

export async function deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['userAccessDevices'][':userAccessDeviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.userAccessDevices[':userAccessDeviceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdSmUsers(
  args: InferRequestType<(typeof client.networks)[':networkId']['sm']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].sm.users.$get(args, options))
}

export async function getNetworksNetworkIdSmUsersUserIdDeviceProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['users'][':userId']['deviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.users[':userId'].deviceProfiles.$get(args, options),
  )
}

export async function getNetworksNetworkIdSmUsersUserIdSoftwares(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['sm']['users'][':userId']['softwares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].sm.users[':userId'].softwares.$get(args, options),
  )
}

export async function getNetworksNetworkIdSnmp(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].snmp.$get(args, options))
}

export async function putNetworksNetworkIdSnmp(
  args: InferRequestType<(typeof client.networks)[':networkId']['snmp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].snmp.$put(args, options))
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

export async function getNetworksNetworkIdSwitchAccessControlLists(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessControlLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessControlLists.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchAccessControlLists(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessControlLists']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessControlLists.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchAccessPolicies(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessPolicies.$get(args, options),
  )
}

export async function postNetworksNetworkIdSwitchAccessPolicies(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessPolicies.$post(args, options),
  )
}

export async function getNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessPolicies'][':accessPolicyNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessPolicies[':accessPolicyNumber'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessPolicies'][':accessPolicyNumber']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessPolicies[':accessPolicyNumber'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['accessPolicies'][':accessPolicyNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.accessPolicies[':accessPolicyNumber'].$delete(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdSwitchAlternateManagementInterface(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['alternateManagementInterface']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.alternateManagementInterface.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchAlternateManagementInterface(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['alternateManagementInterface']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.alternateManagementInterface.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchDhcpV4ServersSeen(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcp']['v4']['servers']['seen']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcp.v4.servers.seen.$get(args, options),
  )
}

export async function getNetworksNetworkIdSwitchDhcpServerPolicy(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchDhcpServerPolicy(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServers(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['arpInspection']['trustedServers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.arpInspection.trustedServers.$get(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServers(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['arpInspection']['trustedServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.arpInspection.trustedServers.$post(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['arpInspection']['trustedServers'][':trustedServerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.arpInspection.trustedServers[
      ':trustedServerId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['arpInspection']['trustedServers'][':trustedServerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.arpInspection.trustedServers[
      ':trustedServerId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionWarningsByDevice(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dhcpServerPolicy']['arpInspection']['warnings']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dhcpServerPolicy.arpInspection.warnings.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdSwitchDscpToCosMappings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dscpToCosMappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dscpToCosMappings.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchDscpToCosMappings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['dscpToCosMappings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.dscpToCosMappings.$put(args, options),
  )
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

export async function getNetworksNetworkIdSwitchMtu(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['mtu']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.mtu.$get(args, options))
}

export async function putNetworksNetworkIdSwitchMtu(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['mtu']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.mtu.$put(args, options))
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

export async function getNetworksNetworkIdSwitchQosRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['qosRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.qosRules.$get(args, options))
}

export async function postNetworksNetworkIdSwitchQosRules(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['qosRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.qosRules.$post(args, options))
}

export async function getNetworksNetworkIdSwitchQosRulesOrder(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['qosRules']['order']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.qosRules.order.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchQosRulesOrder(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['qosRules']['order']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.qosRules.order.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchQosRulesQosRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['qosRules'][':qosRuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.qosRules[':qosRuleId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchQosRulesQosRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['qosRules'][':qosRuleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.qosRules[':qosRuleId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchQosRulesQosRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['qosRules'][':qosRuleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.qosRules[':qosRuleId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchRoutingMulticast(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchRoutingMulticast(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchRoutingMulticastRendezvousPoints(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['rendezvousPoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.rendezvousPoints.$get(args, options),
  )
}

export async function postNetworksNetworkIdSwitchRoutingMulticastRendezvousPoints(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['rendezvousPoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.rendezvousPoints.$post(args, options),
  )
}

export async function getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['rendezvousPoints'][':rendezvousPointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.rendezvousPoints[
      ':rendezvousPointId'
    ].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['rendezvousPoints'][':rendezvousPointId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.rendezvousPoints[
      ':rendezvousPointId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['multicast']['rendezvousPoints'][':rendezvousPointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.routing.multicast.rendezvousPoints[
      ':rendezvousPointId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchRoutingOspf(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['ospf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.routing.ospf.$get(args, options))
}

export async function putNetworksNetworkIdSwitchRoutingOspf(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['routing']['ospf']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.routing.ospf.$put(args, options))
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

export async function getNetworksNetworkIdSwitchStacks(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['stacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.stacks.$get(args, options))
}

export async function postNetworksNetworkIdSwitchStacks(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['stacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.stacks.$post(args, options))
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchStacksSwitchStackId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchStacksSwitchStackId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].$delete(args, options),
  )
}

export async function postNetworksNetworkIdSwitchStacksSwitchStackIdAdd(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].add.$post(args, options),
  )
}

export async function postNetworksNetworkIdSwitchStacksSwitchStackIdRemove(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].remove.$post(args, options),
  )
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfaces(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces.$get(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfaces(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces.$post(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces'][':interfaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces[
      ':interfaceId'
    ].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces'][':interfaceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces[
      ':interfaceId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces'][':interfaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces[
      ':interfaceId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcp(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces'][':interfaceId']['dhcp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces[
      ':interfaceId'
    ].dhcp.$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcp(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['interfaces'][':interfaceId']['dhcp']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.interfaces[
      ':interfaceId'
    ].dhcp.$put(args, options),
  )
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutes(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['staticRoutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.staticRoutes.$get(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutes(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['staticRoutes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.staticRoutes.$post(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['staticRoutes'][':staticRouteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.staticRoutes[
      ':staticRouteId'
    ].$get(args, options),
  )
}

export async function putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['staticRoutes'][':staticRouteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.staticRoutes[
      ':staticRouteId'
    ].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['switch']['stacks'][':switchStackId']['routing']['staticRoutes'][':staticRouteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].switch.stacks[':switchStackId'].routing.staticRoutes[
      ':staticRouteId'
    ].$delete(args, options),
  )
}

export async function getNetworksNetworkIdSwitchStormControl(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['stormControl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.stormControl.$get(args, options))
}

export async function putNetworksNetworkIdSwitchStormControl(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['stormControl']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.stormControl.$put(args, options))
}

export async function getNetworksNetworkIdSwitchStp(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['stp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.stp.$get(args, options))
}

export async function putNetworksNetworkIdSwitchStp(
  args: InferRequestType<(typeof client.networks)[':networkId']['switch']['stp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].switch.stp.$put(args, options))
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

export async function getNetworksNetworkIdTopologyLinkLayer(
  args: InferRequestType<(typeof client.networks)[':networkId']['topology']['linkLayer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].topology.linkLayer.$get(args, options))
}

export async function getNetworksNetworkIdTraffic(
  args: InferRequestType<(typeof client.networks)[':networkId']['traffic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].traffic.$get(args, options))
}

export async function getNetworksNetworkIdTrafficAnalysis(
  args: InferRequestType<(typeof client.networks)[':networkId']['trafficAnalysis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].trafficAnalysis.$get(args, options))
}

export async function putNetworksNetworkIdTrafficAnalysis(
  args: InferRequestType<(typeof client.networks)[':networkId']['trafficAnalysis']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].trafficAnalysis.$put(args, options))
}

export async function getNetworksNetworkIdTrafficShapingApplicationCategories(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['trafficShaping']['applicationCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].trafficShaping.applicationCategories.$get(args, options),
  )
}

export async function getNetworksNetworkIdTrafficShapingDscpTaggingOptions(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['trafficShaping']['dscpTaggingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].trafficShaping.dscpTaggingOptions.$get(args, options),
  )
}

export async function postNetworksNetworkIdUnbind(
  args: InferRequestType<(typeof client.networks)[':networkId']['unbind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].unbind.$post(args, options))
}

export async function getNetworksNetworkIdVlanProfiles(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlanProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlanProfiles.$get(args, options))
}

export async function postNetworksNetworkIdVlanProfiles(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlanProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].vlanProfiles.$post(args, options))
}

export async function getNetworksNetworkIdVlanProfilesAssignmentsByDevice(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['vlanProfiles']['assignments']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].vlanProfiles.assignments.byDevice.$get(args, options),
  )
}

export async function postNetworksNetworkIdVlanProfilesAssignmentsReassign(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['vlanProfiles']['assignments']['reassign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].vlanProfiles.assignments.reassign.$post(args, options),
  )
}

export async function getNetworksNetworkIdVlanProfilesIname(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlanProfiles'][':iname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].vlanProfiles[':iname'].$get(args, options),
  )
}

export async function putNetworksNetworkIdVlanProfilesIname(
  args: InferRequestType<(typeof client.networks)[':networkId']['vlanProfiles'][':iname']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].vlanProfiles[':iname'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdVlanProfilesIname(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['vlanProfiles'][':iname']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].vlanProfiles[':iname'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdWebhooksHttpServers(
  args: InferRequestType<(typeof client.networks)[':networkId']['webhooks']['httpServers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].webhooks.httpServers.$get(args, options))
}

export async function postNetworksNetworkIdWebhooksHttpServers(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['httpServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.httpServers.$post(args, options),
  )
}

export async function getNetworksNetworkIdWebhooksHttpServersHttpServerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['httpServers'][':httpServerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.httpServers[':httpServerId'].$get(args, options),
  )
}

export async function putNetworksNetworkIdWebhooksHttpServersHttpServerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['httpServers'][':httpServerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.httpServers[':httpServerId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdWebhooksHttpServersHttpServerId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['httpServers'][':httpServerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.httpServers[':httpServerId'].$delete(args, options),
  )
}

export async function getNetworksNetworkIdWebhooksPayloadTemplates(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['payloadTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.payloadTemplates.$get(args, options),
  )
}

export async function postNetworksNetworkIdWebhooksPayloadTemplates(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['payloadTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.payloadTemplates.$post(args, options),
  )
}

export async function getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['payloadTemplates'][':payloadTemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.payloadTemplates[':payloadTemplateId'].$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['payloadTemplates'][':payloadTemplateId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.payloadTemplates[':payloadTemplateId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['payloadTemplates'][':payloadTemplateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.payloadTemplates[':payloadTemplateId'].$delete(
      args,
      options,
    ),
  )
}

export async function postNetworksNetworkIdWebhooksWebhookTests(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['webhookTests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.webhookTests.$post(args, options),
  )
}

export async function getNetworksNetworkIdWebhooksWebhookTestsWebhookTestId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['webhooks']['webhookTests'][':webhookTestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].webhooks.webhookTests[':webhookTestId'].$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessAirMarshal(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['airMarshal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.airMarshal.$get(args, options))
}

export async function postNetworksNetworkIdWirelessAirMarshalRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['airMarshal']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.airMarshal.rules.$post(args, options),
  )
}

export async function putNetworksNetworkIdWirelessAirMarshalRulesRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['airMarshal']['rules'][':ruleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.airMarshal.rules[':ruleId'].$put(args, options),
  )
}

export async function deleteNetworksNetworkIdWirelessAirMarshalRulesRuleId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['airMarshal']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.airMarshal.rules[':ruleId'].$delete(args, options),
  )
}

export async function putNetworksNetworkIdWirelessAirMarshalSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['airMarshal']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.airMarshal.settings.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessAlternateManagementInterface(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['alternateManagementInterface']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.alternateManagementInterface.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessAlternateManagementInterface(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['alternateManagementInterface']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.alternateManagementInterface.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessBilling(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['billing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.billing.$get(args, options))
}

export async function putNetworksNetworkIdWirelessBilling(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['billing']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.billing.$put(args, options))
}

export async function getNetworksNetworkIdWirelessBluetoothSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['bluetooth']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.bluetooth.settings.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessBluetoothSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['bluetooth']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.bluetooth.settings.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessChannelUtilizationHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['channelUtilizationHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.channelUtilizationHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessClientCountHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clientCountHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clientCountHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessClientsConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clients']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clients.connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessClientsLatencyStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clients']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clients.latencyStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessClientsClientIdConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clients'][':clientId']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clients[':clientId'].connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessClientsClientIdConnectivityEvents(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clients'][':clientId']['connectivityEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clients[':clientId'].connectivityEvents.$get(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessClientsClientIdLatencyHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clients'][':clientId']['latencyHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clients[':clientId'].latencyHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessClientsClientIdLatencyStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['clients'][':clientId']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.clients[':clientId'].latencyStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessDataRateHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['dataRateHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.dataRateHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessDevicesConnectionStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['devices']['connectionStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.devices.connectionStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessDevicesLatencyStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['devices']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.devices.latencyStats.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessElectronicShelfLabel(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['electronicShelfLabel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.electronicShelfLabel.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessElectronicShelfLabel(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['electronicShelfLabel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.electronicShelfLabel.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessElectronicShelfLabelConfiguredDevices(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['electronicShelfLabel']['configuredDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.electronicShelfLabel.configuredDevices.$get(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessEthernetPortsProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles.$get(args, options),
  )
}

export async function postNetworksNetworkIdWirelessEthernetPortsProfiles(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles.$post(args, options),
  )
}

export async function postNetworksNetworkIdWirelessEthernetPortsProfilesAssign(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles']['assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles.assign.$post(args, options),
  )
}

export async function postNetworksNetworkIdWirelessEthernetPortsProfilesSetDefault(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles']['setDefault']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles.setDefault.$post(args, options),
  )
}

export async function getNetworksNetworkIdWirelessEthernetPortsProfilesProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles'][':profileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles[':profileId'].$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessEthernetPortsProfilesProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles'][':profileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles[':profileId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteNetworksNetworkIdWirelessEthernetPortsProfilesProfileId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ethernet']['ports']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ethernet.ports.profiles[':profileId'].$delete(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessFailedConnections(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['failedConnections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.failedConnections.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessLatencyHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['latencyHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.latencyHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessLatencyStats(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['latencyStats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.latencyStats.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessLocationScanning(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['location']['scanning']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.location.scanning.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessMeshStatuses(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['meshStatuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.meshStatuses.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessRadioRrm(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['radio']['rrm']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.radio.rrm.$put(args, options))
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

export async function getNetworksNetworkIdWirelessSignalQualityHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['signalQualityHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.signalQualityHistory.$get(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsids(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['ssids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.ssids.$get(args, options))
}

export async function putNetworksNetworkIdWirelessSsidsOwe(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids']['owe']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.ssids.owe.$put(args, options))
}

export async function getNetworksNetworkIdWirelessSsidsNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumber(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberBonjourForwarding(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['bonjourForwarding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].bonjourForwarding.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberBonjourForwarding(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['bonjourForwarding']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].bonjourForwarding.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPolicies(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['deviceTypeGroupPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].deviceTypeGroupPolicies.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPolicies(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['deviceTypeGroupPolicies']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].deviceTypeGroupPolicies.$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberEapOverride(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['eapOverride']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].eapOverride.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberEapOverride(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['eapOverride']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].eapOverride.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['firewall']['l3FirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].firewall.l3FirewallRules.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['firewall']['l3FirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].firewall.l3FirewallRules.$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['firewall']['l7FirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].firewall.l7FirewallRules.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['firewall']['l7FirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].firewall.l7FirewallRules.$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberHotspot20(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['hotspot20']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].hotspot20.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberHotspot20(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['hotspot20']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].hotspot20.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberIdentityPsks(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['identityPsks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].identityPsks.$get(args, options),
  )
}

export async function postNetworksNetworkIdWirelessSsidsNumberIdentityPsks(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['identityPsks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].identityPsks.$post(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['identityPsks'][':identityPskId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].identityPsks[':identityPskId'].$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['identityPsks'][':identityPskId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].identityPsks[':identityPskId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['identityPsks'][':identityPskId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].identityPsks[':identityPskId'].$delete(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberOpenRoaming(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['openRoaming']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].openRoaming.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberOverrides(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].overrides.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberOverrides(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['overrides']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].overrides.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberSchedules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['schedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].schedules.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberSchedules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['schedules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].schedules.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberSplashSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['splash']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].splash.settings.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberSplashSettings(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['splash']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].splash.settings.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberTrafficShapingRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['trafficShaping']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].trafficShaping.rules.$get(
      args,
      options,
    ),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberTrafficShapingRules(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['trafficShaping']['rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].trafficShaping.rules.$put(
      args,
      options,
    ),
  )
}

export async function getNetworksNetworkIdWirelessSsidsNumberVpn(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['vpn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].vpn.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessSsidsNumberVpn(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['ssids'][':number']['vpn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.ssids[':number'].vpn.$put(args, options),
  )
}

export async function getNetworksNetworkIdWirelessUsageHistory(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['wireless']['usageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].wireless.usageHistory.$get(args, options),
  )
}

export async function putNetworksNetworkIdWirelessZigbee(
  args: InferRequestType<(typeof client.networks)[':networkId']['wireless']['zigbee']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].wireless.zigbee.$put(args, options))
}

export async function getOrganizations(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$get(args, options))
}

export async function putOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$put(args, options))
}

export async function deleteOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$delete(args, options))
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

export async function getOrganizationsOrganizationIdActionBatchesActionBatchId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['actionBatches'][':actionBatchId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].actionBatches[':actionBatchId'].$get(args, options),
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

export async function getOrganizationsOrganizationIdAdaptivePolicyAcls(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['acls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.acls.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdAdaptivePolicyAcls(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['acls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.acls.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicyAclsAclId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['acls'][':aclId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.acls[':aclId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdAdaptivePolicyAclsAclId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['acls'][':aclId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.acls[':aclId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdAdaptivePolicyAclsAclId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['acls'][':aclId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.acls[':aclId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicyGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.groups.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdAdaptivePolicyGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.groups.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicyGroupsId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['groups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.groups[':id'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdAdaptivePolicyGroupsId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['groups'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.groups[':id'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdAdaptivePolicyGroupsId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['groups'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.groups[':id'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicyOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicyPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.policies.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdAdaptivePolicyPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.policies.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicyPoliciesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['policies'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.policies[':id'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdAdaptivePolicyPoliciesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['policies'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.policies[':id'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdAdaptivePolicyPoliciesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['policies'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.policies[':id'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdAdaptivePolicySettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.settings.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdAdaptivePolicySettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['adaptivePolicy']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].adaptivePolicy.settings.$put(args, options),
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

export async function getOrganizationsOrganizationIdAlertsProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['alerts']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].alerts.profiles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdAlertsProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['alerts']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].alerts.profiles.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdAlertsProfilesAlertConfigId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['alerts']['profiles'][':alertConfigId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].alerts.profiles[':alertConfigId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdAlertsProfilesAlertConfigId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['alerts']['profiles'][':alertConfigId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].alerts.profiles[':alertConfigId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApiRestProvisioningPipelines(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['api']['rest']['provisioning']['pipelines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].api.rest.provisioning.pipelines.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApiRestProvisioningPipelinesJobs(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['api']['rest']['provisioning']['pipelines']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].api.rest.provisioning.pipelines.jobs.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApiRestProvisioningPipelinesJobsOverviewsByPipeline(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['api']['rest']['provisioning']['pipelines']['jobs']['overviews']['byPipeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].api.rest.provisioning.pipelines.jobs.overviews.byPipeline.$get(args, options),
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

export async function getOrganizationsOrganizationIdApiRequestsOverviewResponseCodesByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['apiRequests']['overview']['responseCodes']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].apiRequests.overview.responseCodes.byInterval.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceDevicesInterfacesL3(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['devices']['interfaces']['l3']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.devices.interfaces.l3.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceDevicesInterfacesPortsByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['devices']['interfaces']['ports']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.devices.interfaces.ports.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceDevicesInterfacesPortsProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['devices']['interfaces']['ports']['profiles']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].appliance.devices.interfaces.ports.profiles.assignments.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceDevicesPortsTransceiversReadingsHistoryByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['devices']['ports']['transceivers']['readings']['history']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].appliance.devices.ports.transceivers.readings.history.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceDevicesRedundancyByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['devices']['redundancy']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.devices.redundancy.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceDnsLocalProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.profiles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsLocalProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.profiles.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.profiles.assignments.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsBulkCreate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles']['assignments']['bulkCreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].appliance.dns.local.profiles.assignments.bulkCreate.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsBulkDelete(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles']['assignments']['bulkDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].appliance.dns.local.profiles.assignments.bulkDelete.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceDnsLocalProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles'][':profileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.profiles[':profileId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdApplianceDnsLocalProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.profiles[':profileId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceDnsLocalRecords(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.records.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsLocalRecords(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.records.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceDnsLocalRecordsRecordId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['records'][':recordId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.records[':recordId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdApplianceDnsLocalRecordsRecordId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['local']['records'][':recordId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.local.records[':recordId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceDnsSplitProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.split.profiles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsSplitProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.split.profiles.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.split.profiles.assignments.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsBulkCreate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles']['assignments']['bulkCreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].appliance.dns.split.profiles.assignments.bulkCreate.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsBulkDelete(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles']['assignments']['bulkDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].appliance.dns.split.profiles.assignments.bulkDelete.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceDnsSplitProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles'][':profileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.split.profiles[':profileId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdApplianceDnsSplitProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['dns']['split']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.dns.split.profiles[':profileId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceFirewallMulticastForwardingByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['firewall']['multicastForwarding']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.firewall.multicastForwarding.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceInterfacesPacketsOverviewsByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['interfaces']['packets']['overviews']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.interfaces.packets.overviews.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceRoutingVrfsSettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['routing']['vrfs']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.routing.vrfs.settings.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceRoutingVrfsSettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['routing']['vrfs']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.routing.vrfs.settings.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityEvents(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.events.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityHttpsInspectionByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['httpsInspection']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.httpsInspection.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityHttpsi(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['httpsi']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.httpsi.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceSecurityHttpsiCertificates(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['httpsi']['certificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.httpsi.certificates.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusion(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceSecurityIntrusion(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdApplianceSecurityIntrusionPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesOverviews(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies']['overviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies.overviews.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[':policyId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsOverridesDeclare(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['ruleGroups']['overrides']['declare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].ruleGroups.overrides.declare.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsRuleGroupIdOverride(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['ruleGroups'][':ruleGroupId']['override']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].ruleGroups[':ruleGroupId'].override.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsRuleGroupIdOverride(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['ruleGroups'][':ruleGroupId']['override']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].ruleGroups[':ruleGroupId'].override.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesOverridesDeclare(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['rules']['overrides']['declare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].rules.overrides.declare.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesRuleIdOverride(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['rules'][':ruleId']['override']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].rules[':ruleId'].override.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesRuleIdOverride(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['policies'][':policyId']['rules'][':ruleId']['override']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.policies[
      ':policyId'
    ].rules[':ruleId'].override.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['ruleGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.ruleGroups.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverrides(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['ruleGroups']['overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.ruleGroups.overrides.$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverridesOverrideId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['ruleGroups']['overrides'][':overrideId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.ruleGroups.overrides[
      ':overrideId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverviews(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['ruleGroups']['overviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.ruleGroups.overviews.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.rules.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceSecurityIntrusionRulesOverrides(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['rules']['overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.rules.overrides.$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdApplianceSecurityIntrusionRulesOverridesOverrideId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['security']['intrusion']['rules']['overrides'][':overrideId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.security.intrusion.rules.overrides[
      ':overrideId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceTrafficShapingVpnExclusionsByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['trafficShaping']['vpnExclusions']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.trafficShaping.vpnExclusions.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceUplinkStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['uplink']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.uplink.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceUplinksNatByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['uplinks']['nat']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.uplinks.nat.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceUplinksStatusesOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['uplinks']['statuses']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.uplinks.statuses.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceUplinksUsageByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['uplinks']['usage']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.uplinks.usage.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceVpnSiteToSiteIpsecPeersSlas(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['siteToSite']['ipsec']['peers']['slas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.siteToSite.ipsec.peers.slas.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdApplianceVpnSiteToSiteIpsecPeersSlas(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['siteToSite']['ipsec']['peers']['slas']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.siteToSite.ipsec.peers.slas.$put(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdApplianceVpnStats(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.stats.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceVpnStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceVpnThirdPartyVPNPeers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['thirdPartyVPNPeers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.thirdPartyVPNPeers.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceVpnThirdPartyVPNPeers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['thirdPartyVPNPeers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.thirdPartyVPNPeers.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdApplianceVpnVpnFirewallRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['vpnFirewallRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.vpnFirewallRules.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdApplianceVpnVpnFirewallRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['appliance']['vpn']['vpnFirewallRules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].appliance.vpn.vpnFirewallRules.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlerts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdAssuranceAlertsDismiss(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['dismiss']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.dismiss.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsOverviewByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['overview']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.overview.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsOverviewByType(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['overview']['byType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.overview.byType.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsOverviewHistorical(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['overview']['historical']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.overview.historical.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.profiles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdAssuranceAlertsProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.profiles.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdAssuranceAlertsProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['profiles'][':profileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.profiles[':profileId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdAssuranceAlertsProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.profiles[':profileId'].$delete(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdAssuranceAlertsRestore(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.restore.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsTaxonomyCategories(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['taxonomy']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.taxonomy.categories.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsTaxonomyTypes(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts']['taxonomy']['types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts.taxonomy.types.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceAlertsId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['alerts'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.alerts[':id'].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdAssuranceImpactedDeviceWirelessByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['impactedDevice']['wireless']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].assurance.impactedDevice.wireless.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdAssuranceWirelessExperienceSuccessfulConnectionsByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['assurance']['wireless']['experience']['successfulConnections']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].assurance.wireless.experience.successfulConnections.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdBrandingPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdBrandingPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdBrandingPoliciesPriorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies']['priorities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies.priorities.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdBrandingPoliciesPriorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies']['priorities']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies.priorities.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies'][':brandingPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies[':brandingPolicyId'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies'][':brandingPolicyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies[':brandingPolicyId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdBrandingPoliciesBrandingPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['brandingPolicies'][':brandingPolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].brandingPolicies[':brandingPolicyId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCameraBoundariesAreasByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['boundaries']['areas']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.boundaries.areas.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCameraBoundariesLinesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['boundaries']['lines']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.boundaries.lines.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCameraCustomAnalyticsArtifacts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['customAnalytics']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.customAnalytics.artifacts.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdCameraCustomAnalyticsArtifacts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['customAnalytics']['artifacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.customAnalytics.artifacts.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['customAnalytics']['artifacts'][':artifactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.customAnalytics.artifacts[':artifactId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['customAnalytics']['artifacts'][':artifactId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.customAnalytics.artifacts[':artifactId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCameraDetectionsHistoryByBoundaryByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['detections']['history']['byBoundary']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.detections.history.byBoundary.byInterval.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCameraOnboardingStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['onboarding']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.onboarding.statuses.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdCameraOnboardingStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['onboarding']['statuses']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.onboarding.statuses.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdCameraPermissions(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.permissions.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCameraPermissionsPermissionScopeId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['permissions'][':permissionScopeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.permissions[':permissionScopeId'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCameraRoles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.roles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdCameraRoles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.roles.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdCameraRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['roles'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.roles[':roleId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdCameraRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['roles'][':roleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.roles[':roleId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdCameraRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['camera']['roles'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].camera.roles[':roleId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClientsUsageByNetworkByCluster(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clients']['usage']['byNetwork']['byCluster']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clients.usage.byNetwork.byCluster.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClusters(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClustersFailoverTargets(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['failover']['targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.failover.targets.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClustersFailoverTargetsByCluster(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['failover']['targets']['byCluster']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.failover.targets.byCluster.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClustersNetworksOverviews(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['networks']['overviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.networks.overviews.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdCampusGatewayClustersProvision(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['provision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.provision.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClustersSsids(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['ssids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.ssids.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClustersTunnelable(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['tunnelable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.tunnelable.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdCampusGatewayClustersTunnelingBatchUpdate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['tunneling']['batchUpdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.clusters.tunneling.batchUpdate.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayClustersTunnelingByClusterByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['clusters']['tunneling']['byCluster']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].campusGateway.clusters.tunneling.byCluster.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayConnections(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.connections.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayConnectionsOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['connections']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.connections.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayDevicesSystemCpuLoad(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['devices']['system']['cpu']['load']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].campusGateway.devices.system.cpu.load.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCampusGatewayDevicesUplinksLocalOverridesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['campusGateway']['devices']['uplinks']['localOverrides']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].campusGateway.devices.uplinks.localOverrides.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCellularGatewayEsimsInventory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['inventory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.inventory.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdCellularGatewayEsimsInventoryId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['inventory'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.inventory[':id'].$put(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCellularGatewayEsimsServiceProviders(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.serviceProviders.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccounts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.serviceProviders.accounts.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccounts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.serviceProviders.accounts.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsCommunicationPlans(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['accounts']['communicationPlans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].cellularGateway.esims.serviceProviders.accounts.communicationPlans.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRatePlans(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['accounts']['ratePlans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].cellularGateway.esims.serviceProviders.accounts.ratePlans.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsAccountId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['accounts'][':accountId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.serviceProviders.accounts[
      ':accountId'
    ].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsAccountId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['serviceProviders']['accounts'][':accountId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.serviceProviders.accounts[
      ':accountId'
    ].$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdCellularGatewayEsimsSwap(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['swap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.swap.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdCellularGatewayEsimsSwapId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['esims']['swap'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.esims.swap[':id'].$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdCellularGatewayUplinkStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['cellularGateway']['uplink']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].cellularGateway.uplink.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['authorities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.authorities.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['authorities']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.authorities.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['authorities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.authorities.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['authorities']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.authorities.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdCertificatesAuthoritiesJobsJobId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['authorities']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.authorities.jobs[':jobId'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdCertificatesAuthoritiesRevoke(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['authorities']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.authorities.revoke.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdCertificatesRevocationLists(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['certificates']['revocationLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].certificates.revocationLists.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdClaim(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].claim.$post(args, options))
}

export async function getOrganizationsOrganizationIdClientsBandwidthUsageHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['clients']['bandwidthUsageHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].clients.bandwidthUsageHistory.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdClientsOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['clients']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].clients.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdClientsSearch(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['clients']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].clients.search.$get(args, options),
  )
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

export async function postOrganizationsOrganizationIdConfigTemplates(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[':configTemplateId'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdConfigTemplatesConfigTemplateId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[':configTemplateId'].$put(
      args,
      options,
    ),
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
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switch']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[
      ':configTemplateId'
    ].switch.profiles.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPorts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switch']['profiles'][':profileId']['ports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[':configTemplateId'].switch.profiles[
      ':profileId'
    ].ports.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsPortId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switch']['profiles'][':profileId']['ports'][':portId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[':configTemplateId'].switch.profiles[
      ':profileId'
    ].ports[':portId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsPortId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['configTemplates'][':configTemplateId']['switch']['profiles'][':profileId']['ports'][':portId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].configTemplates[':configTemplateId'].switch.profiles[
      ':profileId'
    ].ports[':portId'].$put(args, options),
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

export async function getOrganizationsOrganizationIdDevices(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].devices.$get(args, options))
}

export async function getOrganizationsOrganizationIdDevicesAvailabilities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['availabilities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.availabilities.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesAvailabilitiesChangeHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['availabilities']['changeHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.availabilities.changeHistory.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularDataDevices(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.devices.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularDataProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.profiles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesCellularDataProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.profiles.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularDataProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.profiles.assignments.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsBatchCreate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles']['assignments']['batchCreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].devices.cellular.data.profiles.assignments.batchCreate.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesCellularDataProfilesAssignmentsBulkDelete(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles']['assignments']['bulkDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].devices.cellular.data.profiles.assignments.bulkDelete.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdDevicesCellularDataProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles'][':profileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.profiles[':profileId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdDevicesCellularDataProfilesProfileId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.profiles[':profileId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularDataUsageByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['usage']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.data.usage.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularDataUsageHistoryByDeviceByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['data']['usage']['history']['byDevice']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].devices.cellular.data.usage.history.byDevice.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularGeolocations(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['geolocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.geolocations.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularUplinksBandsByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['uplinks']['bands']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.uplinks.bands.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesCellularUplinksTowersByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['cellular']['uplinks']['towers']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.cellular.uplinks.towers.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesCertificates(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['certificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.certificates.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesControllerMigrations(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['controller']['migrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.controller.migrations.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesControllerMigrations(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['controller']['migrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.controller.migrations.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesDetailsBulkUpdate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['details']['bulkUpdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.details.bulkUpdate.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesOverviewByModel(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['overview']['byModel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.overview.byModel.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesPacketCaptureCaptures(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureCaptures(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureCapturesBulkCreate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures']['bulkCreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures.bulkCreate.$post(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureCapturesBulkDelete(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures']['bulkDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures.bulkDelete.$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures'][':captureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures[':captureId'].$delete(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdDownloadUrlGenerate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures'][':captureId']['downloadUrl']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures[
      ':captureId'
    ].downloadUrl.generate.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureCapturesCaptureIdStop(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['captures'][':captureId']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.captures[':captureId'].stop.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesPacketCaptureSchedules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['schedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.schedules.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureSchedules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['schedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.schedules.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdDevicesPacketCaptureSchedulesReorder(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['schedules']['reorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.schedules.reorder.$post(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdDevicesPacketCaptureSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['schedules'][':scheduleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.schedules[':scheduleId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdDevicesPacketCaptureSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['packetCapture']['schedules'][':scheduleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.packetCapture.schedules[':scheduleId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesPowerModulesStatusesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['powerModules']['statuses']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.powerModules.statuses.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesProvisioningStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['provisioning']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.provisioning.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesStatusesOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['statuses']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.statuses.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesSyslogServersByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['syslog']['servers']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.syslog.servers.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesSyslogServersRolesByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['syslog']['servers']['roles']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.syslog.servers.roles.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesSystemMemoryUsageHistoryByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['system']['memory']['usage']['history']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.system.memory.usage.history.byInterval.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdDevicesUplinksAddressesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['uplinks']['addresses']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.uplinks.addresses.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdDevicesUplinksLossAndLatency(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['devices']['uplinksLossAndLatency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].devices.uplinksLossAndLatency.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdEarlyAccessFeatures(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['earlyAccess']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].earlyAccess.features.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdEarlyAccessFeaturesOptIns(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['earlyAccess']['features']['optIns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].earlyAccess.features.optIns.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdEarlyAccessFeaturesOptIns(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['earlyAccess']['features']['optIns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].earlyAccess.features.optIns.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['earlyAccess']['features']['optIns'][':optInId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].earlyAccess.features.optIns[':optInId'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['earlyAccess']['features']['optIns'][':optInId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].earlyAccess.features.optIns[':optInId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdEarlyAccessFeaturesOptInsOptInId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['earlyAccess']['features']['optIns'][':optInId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].earlyAccess.features.optIns[':optInId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdFirmwareUpgrades(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['firmware']['upgrades']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].firmware.upgrades.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdFirmwareUpgradesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['firmware']['upgrades']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].firmware.upgrades.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdFloorPlansAutoLocateDevices(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['floorPlans']['autoLocate']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].floorPlans.autoLocate.devices.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdFloorPlansAutoLocateStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['floorPlans']['autoLocate']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].floorPlans.autoLocate.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdInsightApplications(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['insight']['applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].insight.applications.$get(args, options),
  )
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

export async function getOrganizationsOrganizationIdIntegrationsDeployable(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['integrations']['deployable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].integrations.deployable.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdIntegrationsDeployed(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['integrations']['deployed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].integrations.deployed.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdIntegrationsXdrNetworks(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['integrations']['xdr']['networks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].integrations.xdr.networks.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdIntegrationsXdrNetworksDisable(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['integrations']['xdr']['networks']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].integrations.xdr.networks.disable.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdIntegrationsXdrNetworksEnable(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['integrations']['xdr']['networks']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].integrations.xdr.networks.enable.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdInventoryClaim(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['claim']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.claim.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdInventoryDevices(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.devices.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdInventoryDevicesEoxOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['devices']['eox']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.devices.eox.overview.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdInventoryDevicesSwapsBulk(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['devices']['swaps']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.devices.swaps.bulk.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdInventoryDevicesSwapsBulkId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['devices']['swaps']['bulk'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.devices.swaps.bulk[':id'].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdInventoryDevicesSerial(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['devices'][':serial']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.devices[':serial'].$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdInventoryOrdersClaim(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['orders']['claim']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.orders.claim.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdInventoryOrdersPreview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['orders']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.orders.preview.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdInventoryRelease(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['inventory']['release']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].inventory.release.$post(args, options),
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

export async function postOrganizationsOrganizationIdLicensesMove(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses.move.$post(args, options),
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

export async function getOrganizationsOrganizationIdLicensesOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses.overview.$get(args, options),
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

export async function putOrganizationsOrganizationIdLicensesLicenseId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licenses'][':licenseId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licenses[':licenseId'].$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdLicensingCotermLicenses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licensing']['coterm']['licenses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licensing.coterm.licenses.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdLicensingCotermLicensesMove(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['licensing']['coterm']['licenses']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].licensing.coterm.licenses.move.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdLoginSecurity(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['loginSecurity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].loginSecurity.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdLoginSecurity(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['loginSecurity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].loginSecurity.$put(args, options),
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

export async function getOrganizationsOrganizationIdNetworksGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdNetworksGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdNetworksGroupsOverviewByGroup(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups']['overview']['byGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups.overview.byGroup.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdNetworksGroupsGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups[':groupId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdNetworksGroupsGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups[':groupId'].$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdNetworksGroupsGroupIdBulkAssign(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups'][':groupId']['bulkAssign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups[':groupId'].bulkAssign.$post(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdNetworksGroupsGroupIdBulkUnassign(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['groups'][':groupId']['bulkUnassign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.groups[':groupId'].bulkUnassign.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdNetworksMoves(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['moves']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.moves.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdNetworksMoves(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['networks']['moves']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].networks.moves.$post(args, options),
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

export async function getOrganizationsOrganizationIdPoliciesAssignmentsByClient(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['assignments']['byClient']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.assignments.byClient.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalFirewallApplicationCategories(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['applicationCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.applicationCategories.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalFirewallRulesets(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalFirewallRulesets(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets.rules.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets.rules.$post(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRuleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets']['rules'][':ruleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets.rules[':ruleId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesRuleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets.rules[
      ':ruleId'
    ].$delete(args, options),
  )
}

export async function putOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesetId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets'][':rulesetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets[':rulesetId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdPoliciesGlobalFirewallRulesetsRulesetId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['firewall']['rulesets'][':rulesetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.firewall.rulesets[':rulesetId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.group.policies.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPolicies(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.group.policies.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssign(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['adaptivePolicyGroups']['assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.adaptivePolicyGroups.assign.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['adaptivePolicyGroups']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.adaptivePolicyGroups.assignments.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsRemove(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['adaptivePolicyGroups']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.adaptivePolicyGroups.remove.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssign(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['appliance']['vlans']['assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.appliance.vlans.assign.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['appliance']['vlans']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.appliance.vlans.assignments.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignmentsByVlan(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['appliance']['vlans']['assignments']['byVlan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.appliance.vlans.assignments.byVlan.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansRemove(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['appliance']['vlans']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.appliance.vlans.remove.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['firewall']['rulesets']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.firewall.rulesets.assignments.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['firewall']['rulesets']['assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.firewall.rulesets.assignments.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsCommit(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['firewall']['rulesets']['assignments']['commit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.firewall.rulesets.assignments.commit.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsAssignmentId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['firewall']['rulesets']['assignments'][':assignmentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.firewall.rulesets.assignments[':assignmentId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesFirewallRulesetsAssignmentsAssignmentId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['firewall']['rulesets']['assignments'][':assignmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.firewall.rulesets.assignments[':assignmentId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworks(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['networks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.group.policies.networks.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['networks']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.networks.assignments.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsBulkAssign(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['networks']['assignments']['bulkAssign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.networks.assignments.bulkAssign.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesNetworksAssignmentsBulkDelete(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies']['networks']['assignments']['bulkDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].policies.global.group.policies.networks.assignments.bulkDelete.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies'][':policyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.group.policies[':policyId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policies']['global']['group']['policies'][':policyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policies.global.group.policies[':policyId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdPolicyObjects(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['policyObjects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPolicyObjects(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdPolicyObjectsGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.groups.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdPolicyObjectsGroups(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.groups.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects']['groups'][':policyObjectGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.groups[':policyObjectGroupId'].$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects']['groups'][':policyObjectGroupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.groups[':policyObjectGroupId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdPolicyObjectsGroupsPolicyObjectGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects']['groups'][':policyObjectGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects.groups[':policyObjectGroupId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdPolicyObjectsPolicyObjectId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects'][':policyObjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects[':policyObjectId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdPolicyObjectsPolicyObjectId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects'][':policyObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects[':policyObjectId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdPolicyObjectsPolicyObjectId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['policyObjects'][':policyObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].policyObjects[':policyObjectId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdSaml(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['saml']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].saml.$get(args, options))
}

export async function putOrganizationsOrganizationIdSaml(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['saml']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].saml.$put(args, options))
}

export async function getOrganizationsOrganizationIdSamlIdps(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['saml']['idps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].saml.idps.$get(args, options))
}

export async function postOrganizationsOrganizationIdSamlIdps(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['saml']['idps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].saml.idps.$post(args, options))
}

export async function getOrganizationsOrganizationIdSamlIdpsIdpId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['saml']['idps'][':idpId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].saml.idps[':idpId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdSamlIdpsIdpId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['saml']['idps'][':idpId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].saml.idps[':idpId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdSamlIdpsIdpId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['saml']['idps'][':idpId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].saml.idps[':idpId'].$delete(args, options),
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

export async function deleteOrganizationsOrganizationIdSamlRolesSamlRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['samlRoles'][':samlRoleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].samlRoles[':samlRoleId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdSaseConnectors(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['connectors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.connectors.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdSaseConnectorsBatchDelete(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['connectors']['batchDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.connectors.batchDelete.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdSaseIntegrations(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['integrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.integrations.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdSaseIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['integrations'][':integrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.integrations[':integrationId'].$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdSaseIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['integrations'][':integrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.integrations[':integrationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSaseNetworksEligible(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['networks']['eligible']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.networks.eligible.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSaseRegions(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['regions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.regions.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSaseSites(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['sase']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].sase.sites.$get(args, options))
}

export async function postOrganizationsOrganizationIdSaseSitesAttach(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['sites']['attach']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.sites.attach.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdSaseSitesConnectivityHistoryBySite(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['sites']['connectivity']['history']['bySite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.sites.connectivity.history.bySite.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSaseSitesConnectivityOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['sites']['connectivity']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.sites.connectivity.overview.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdSaseSitesDetach(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['sites']['detach']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.sites.detach.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdSaseSitesSiteId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sase']['sites'][':siteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sase.sites[':siteId'].$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdSensorGatewaysConnectionsLatest(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sensor']['gateways']['connections']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sensor.gateways.connections.latest.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSensorReadingsHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sensor']['readings']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sensor.readings.history.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSensorReadingsLatest(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sensor']['readings']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sensor.readings.latest.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSmAdminsRoles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['admins']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.admins.roles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdSmAdminsRoles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['admins']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.admins.roles.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdSmAdminsRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['admins']['roles'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.admins.roles[':roleId'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdSmAdminsRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['admins']['roles'][':roleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.admins.roles[':roleId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdSmAdminsRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['admins']['roles'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.admins.roles[':roleId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdSmApnsCert(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['apnsCert']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.apnsCert.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdSmSentryPoliciesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['sentry']['policies']['assignments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.sentry.policies.assignments.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdSmSentryPoliciesAssignmentsByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['sentry']['policies']['assignments']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.sentry.policies.assignments.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSmVppAccounts(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['vppAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.vppAccounts.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSmVppAccountsVppAccountId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sm']['vppAccounts'][':vppAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].sm.vppAccounts[':vppAccountId'].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSnmp(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].snmp.$get(args, options))
}

export async function putOrganizationsOrganizationIdSnmp(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['snmp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].snmp.$put(args, options))
}

export async function getOrganizationsOrganizationIdSpacesIntegrateStatus(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['spaces']['integrate']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].spaces.integrate.status.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdSpacesIntegrationRemove(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['spaces']['integration']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].spaces.integration.remove.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdSplashAssetsId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['splash']['assets'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].splash.assets[':id'].$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdSplashAssetsId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['splash']['assets'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].splash.assets[':id'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdSplashThemes(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['splash']['themes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].splash.themes.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdSplashThemes(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['splash']['themes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].splash.themes.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdSplashThemesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['splash']['themes'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].splash.themes[':id'].$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdSplashThemesThemeIdentifierAssets(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['splash']['themes'][':themeIdentifier']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].splash.themes[':themeIdentifier'].assets.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSummarySustainabilityDailyConsumerMetricsNetworks(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['sustainability']['dailyConsumerMetrics']['networks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].summary.sustainability.dailyConsumerMetrics.networks.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDeviceCategories(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['sustainability']['summaryConsumerMetrics']['deviceCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].summary.sustainability.summaryConsumerMetrics.deviceCategories.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDeviceCategoriesAggregated(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['sustainability']['summaryConsumerMetrics']['deviceCategories']['aggregated']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].summary.sustainability.summaryConsumerMetrics.deviceCategories.aggregated.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsDevices(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['sustainability']['summaryConsumerMetrics']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].summary.sustainability.summaryConsumerMetrics.devices.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsNetworks(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['sustainability']['summaryConsumerMetrics']['networks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].summary.sustainability.summaryConsumerMetrics.networks.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummarySustainabilitySummaryConsumerMetricsNetworksAggregated(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['sustainability']['summaryConsumerMetrics']['networks']['aggregated']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].summary.sustainability.summaryConsumerMetrics.networks.aggregated.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummarySwitchPowerHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['switch']['power']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.switch.power.history.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopAppliancesByUtilization(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['appliances']['byUtilization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.appliances.byUtilization.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopApplicationsByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['applications']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.applications.byUsage.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopApplicationsCategoriesByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['applications']['categories']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.applications.categories.byUsage.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopClientsByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['clients']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.clients.byUsage.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopClientsManufacturersByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['clients']['manufacturers']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.clients.manufacturers.byUsage.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopDevicesByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['devices']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.devices.byUsage.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopDevicesModelsByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['devices']['models']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.devices.models.byUsage.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopNetworksByStatus(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['networks']['byStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.networks.byStatus.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopSsidsByUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['ssids']['byUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.ssids.byUsage.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSummaryTopSwitchesByEnergyUsage(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['summary']['top']['switches']['byEnergyUsage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].summary.top.switches.byEnergyUsage.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdSwitchDevicesClone(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['devices']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.devices.clone.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdSwitchPortsBySwitch(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['ports']['bySwitch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.ports.bySwitch.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSwitchPortsClientsOverviewByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['ports']['clients']['overview']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.ports.clients.overview.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSwitchPortsOverview(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['ports']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.ports.overview.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSwitchPortsStatusesBySwitch(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['ports']['statuses']['bySwitch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.ports.statuses.bySwitch.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdSwitchPortsTopologyDiscoveryByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['ports']['topology']['discovery']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.ports.topology.discovery.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdSwitchPortsUsageHistoryByDeviceByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['switch']['ports']['usage']['history']['byDevice']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].switch.ports.usage.history.byDevice.byInterval.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdUplinksStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['uplinks']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].uplinks.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWebhooksAlertTypes(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['webhooks']['alertTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].webhooks.alertTypes.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWebhooksCallbacksStatusesCallbackId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['webhooks']['callbacks']['statuses'][':callbackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].webhooks.callbacks.statuses[':callbackId'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWebhooksLogs(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['webhooks']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].webhooks.logs.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessAirMarshalRules(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['airMarshal']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.airMarshal.rules.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessAirMarshalSettingsByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['airMarshal']['settings']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.airMarshal.settings.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessClientsConnectionsImpactedByNetworkBySsid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['clients']['connections']['impacted']['byNetwork']['bySsid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.clients.connections.impacted.byNetwork.bySsid.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessClientsOverviewByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['clients']['overview']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.clients.overview.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessClientsUsageByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['clients']['usage']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.clients.usage.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessClientsUsageByNetworkBySsid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['clients']['usage']['byNetwork']['bySsid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.clients.usage.byNetwork.bySsid.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessClientsUsageBySsid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['clients']['usage']['bySsid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.clients.usage.bySsid.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['channelUtilization']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.channelUtilization.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['channelUtilization']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.channelUtilization.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationHistoryByDeviceByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['channelUtilization']['history']['byDevice']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.devices.channelUtilization.history.byDevice.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationHistoryByNetworkByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['channelUtilization']['history']['byNetwork']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.devices.channelUtilization.history.byNetwork.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesEthernetStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['ethernet']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.ethernet.statuses.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesPacketLossByClient(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['packetLoss']['byClient']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.packetLoss.byClient.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesPacketLossByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['packetLoss']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.packetLoss.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesPacketLossByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['packetLoss']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.packetLoss.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesPowerModeHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['power']['mode']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.power.mode.history.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesProvisioningDeployments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['provisioning']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.provisioning.deployments.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdWirelessDevicesProvisioningDeployments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['provisioning']['deployments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.provisioning.deployments.$put(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdWirelessDevicesProvisioningDeployments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['provisioning']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.provisioning.deployments.$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['provisioning']['deployments'][':deploymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.provisioning.deployments[
      ':deploymentId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['radsec']['certificates']['authorities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.radsec.certificates.authorities.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['radsec']['certificates']['authorities']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.radsec.certificates.authorities.$put(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthorities(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['radsec']['certificates']['authorities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.radsec.certificates.authorities.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesCrls(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['radsec']['certificates']['authorities']['crls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.devices.radsec.certificates.authorities.crls.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesCrlsDeltas(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['radsec']['certificates']['authorities']['crls']['deltas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.devices.radsec.certificates.authorities.crls.deltas.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesSystemCpuLoadHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['system']['cpu']['load']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.system.cpu.load.history.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessDevicesWirelessControllersByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['devices']['wirelessControllers']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.devices.wirelessControllers.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessLocationScanningByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['location']['scanning']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.location.scanning.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessLocationScanningReceivers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['location']['scanning']['receivers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.location.scanning.receivers.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdWirelessLocationScanningReceivers(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['location']['scanning']['receivers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.location.scanning.receivers.$post(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdWirelessLocationScanningReceiversReceiverId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['location']['scanning']['receivers'][':receiverId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.location.scanning.receivers[
      ':receiverId'
    ].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdWirelessLocationScanningReceiversReceiverId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['location']['scanning']['receivers'][':receiverId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.location.scanning.receivers[
      ':receiverId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessMqttSettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['mqtt']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.mqtt.settings.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdWirelessMqttSettings(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['mqtt']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.mqtt.settings.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdWirelessRadioAutoRfChannelsRecalculate(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['radio']['autoRf']['channels']['recalculate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.radio.autoRf.channels.recalculate.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessRadioOverridesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['radio']['overrides']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.radio.overrides.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessRadioRrmByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['radio']['rrm']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.radio.rrm.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessRfProfilesAssignmentsByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['rfProfiles']['assignments']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.rfProfiles.assignments.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntries(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['firewall']['isolation']['allowlist']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.ssids.firewall.isolation.allowlist.entries.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntries(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['firewall']['isolation']['allowlist']['entries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wireless.ssids.firewall.isolation.allowlist.entries.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesEntryId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['firewall']['isolation']['allowlist']['entries'][':entryId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.firewall.isolation.allowlist.entries[
      ':entryId'
    ].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesEntryId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['firewall']['isolation']['allowlist']['entries'][':entryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.firewall.isolation.allowlist.entries[
      ':entryId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsOpenRoamingByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['openRoaming']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.openRoaming.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsOweByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['owe']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.owe.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdWirelessSsidsProfiles(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.assignments.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdWirelessSsidsProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.assignments.$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdWirelessSsidsProfilesAssignments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['assignments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.assignments.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['assignments']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.assignments.byNetwork.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsProfilesOverviews(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles']['overviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles.overviews.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdWirelessSsidsProfilesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles[':id'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdWirelessSsidsProfilesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['profiles'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.profiles[':id'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessSsidsStatusesByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['ssids']['statuses']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.ssids.statuses.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessZigbeeByNetwork(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['byNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.byNetwork.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessZigbeeDevices(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.devices.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdWirelessZigbeeDevicesId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['devices'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.devices[':id'].$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdWirelessZigbeeDisenrollments(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['disenrollments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.disenrollments.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessZigbeeDisenrollmentsDisenrollmentId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['disenrollments'][':disenrollmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.disenrollments[':disenrollmentId'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessZigbeeDoorLocks(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['doorLocks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.doorLocks.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdWirelessZigbeeDoorLocksDoorLockId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wireless']['zigbee']['doorLocks'][':doorLockId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wireless.zigbee.doorLocks[':doorLockId'].$put(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerAvailabilitiesChangeHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['availabilities']['changeHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wirelessController.availabilities.changeHistory.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerClientsOverviewHistoryByDeviceByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['clients']['overview']['history']['byDevice']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.clients.overview.history.byDevice.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerConnections(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wirelessController.connections.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2ByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['l2']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wirelessController.devices.interfaces.l2.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2StatusesChangeHistoryByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['l2']['statuses']['changeHistory']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.interfaces.l2.statuses.changeHistory.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2UsageHistoryByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['l2']['usage']['history']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.interfaces.l2.usage.history.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3ByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['l3']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wirelessController.devices.interfaces.l3.byDevice.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3StatusesChangeHistoryByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['l3']['statuses']['changeHistory']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.interfaces.l3.statuses.changeHistory.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3UsageHistoryByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['l3']['usage']['history']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.interfaces.l3.usage.history.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesPacketsOverviewByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['packets']['overview']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.interfaces.packets.overview.byDevice.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesUsageHistoryByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['interfaces']['usage']['history']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.interfaces.usage.history.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesRedundancyFailoverHistory(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['redundancy']['failover']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.redundancy.failover.history.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesRedundancyStatuses(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['redundancy']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wirelessController.devices.redundancy.statuses.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerDevicesSystemUtilizationHistoryByInterval(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['devices']['system']['utilization']['history']['byInterval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[
      ':organizationId'
    ].wirelessController.devices.system.utilization.history.byInterval.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdWirelessControllerOverviewByDevice(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['wirelessController']['overview']['byDevice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].wirelessController.overview.byDevice.$get(
      args,
      options,
    ),
  )
}
