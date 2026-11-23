import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPartnerAccounts(
  args: InferRequestType<(typeof client)['partner-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['partner-accounts'].$get(args, options))
}

export async function postPartnerAccounts(
  args: InferRequestType<(typeof client)['partner-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['partner-accounts'].$post(args, options))
}

export async function putFuotaTasksIdMulticastGroup(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-group']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id']['multicast-group'].$put(args, options))
}

export async function putFuotaTasksIdWirelessDevice(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['wireless-device']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id']['wireless-device'].$put(args, options))
}

export async function putMulticastGroupsIdWirelessDevice(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['wireless-device']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['multicast-groups'][':Id']['wireless-device'].$put(args, options),
  )
}

export async function putWirelessDevicesIdThing(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].thing.$put(args, options))
}

export async function deleteWirelessDevicesIdThing(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['thing']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].thing.$delete(args, options))
}

export async function getWirelessGatewaysIdCertificate(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].certificate.$get(args, options))
}

export async function putWirelessGatewaysIdCertificate(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].certificate.$put(args, options))
}

export async function deleteWirelessGatewaysIdCertificate(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['certificate']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].certificate.$delete(args, options))
}

export async function putWirelessGatewaysIdThing(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].thing.$put(args, options))
}

export async function deleteWirelessGatewaysIdThing(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['thing']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].thing.$delete(args, options))
}

export async function getMulticastGroupsIdSession(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].session.$get(args, options))
}

export async function putMulticastGroupsIdSession(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].session.$put(args, options))
}

export async function deleteMulticastGroupsIdSession(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['session']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].session.$delete(args, options))
}

export async function getDestinations(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$get(args, options))
}

export async function postDestinations(
  args: InferRequestType<typeof client.destinations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$post(args, options))
}

export async function getDeviceProfiles(
  args: InferRequestType<(typeof client)['device-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-profiles'].$get(args, options))
}

export async function postDeviceProfiles(
  args: InferRequestType<(typeof client)['device-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-profiles'].$post(args, options))
}

export async function getFuotaTasks(
  args: InferRequestType<(typeof client)['fuota-tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'].$get(args, options))
}

export async function postFuotaTasks(
  args: InferRequestType<(typeof client)['fuota-tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'].$post(args, options))
}

export async function getMulticastGroups(
  args: InferRequestType<(typeof client)['multicast-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'].$get(args, options))
}

export async function postMulticastGroups(
  args: InferRequestType<(typeof client)['multicast-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'].$post(args, options))
}

export async function getNetworkAnalyzerConfigurations(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-analyzer-configurations'].$get(args, options))
}

export async function postNetworkAnalyzerConfigurations(
  args: InferRequestType<(typeof client)['network-analyzer-configurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-analyzer-configurations'].$post(args, options))
}

export async function getServiceProfiles(
  args: InferRequestType<(typeof client)['service-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-profiles'].$get(args, options))
}

export async function postServiceProfiles(
  args: InferRequestType<(typeof client)['service-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-profiles'].$post(args, options))
}

export async function getWirelessDevices(
  args: InferRequestType<(typeof client)['wireless-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'].$get(args, options))
}

export async function postWirelessDevices(
  args: InferRequestType<(typeof client)['wireless-devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'].$post(args, options))
}

export async function getWirelessGateways(
  args: InferRequestType<(typeof client)['wireless-gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'].$get(args, options))
}

export async function postWirelessGateways(
  args: InferRequestType<(typeof client)['wireless-gateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'].$post(args, options))
}

export async function getWirelessGatewaysIdTasks(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].tasks.$get(args, options))
}

export async function postWirelessGatewaysIdTasks(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].tasks.$post(args, options))
}

export async function deleteWirelessGatewaysIdTasks(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['tasks']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].tasks.$delete(args, options))
}

export async function getWirelessGatewayTaskDefinitions(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateway-task-definitions'].$get(args, options))
}

export async function postWirelessGatewayTaskDefinitions(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateway-task-definitions'].$post(args, options))
}

export async function getDestinationsName(
  args: InferRequestType<(typeof client.destinations)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':Name'].$get(args, options))
}

export async function deleteDestinationsName(
  args: InferRequestType<(typeof client.destinations)[':Name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':Name'].$delete(args, options))
}

export async function patchDestinationsName(
  args: InferRequestType<(typeof client.destinations)[':Name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':Name'].$patch(args, options))
}

export async function getDeviceProfilesId(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-profiles'][':Id'].$get(args, options))
}

export async function deleteDeviceProfilesId(
  args: InferRequestType<(typeof client)['device-profiles'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-profiles'][':Id'].$delete(args, options))
}

export async function getFuotaTasksId(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id'].$get(args, options))
}

export async function putFuotaTasksId(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id'].$put(args, options))
}

export async function deleteFuotaTasksId(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id'].$delete(args, options))
}

export async function patchFuotaTasksId(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id'].$patch(args, options))
}

export async function getMulticastGroupsId(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].$get(args, options))
}

export async function deleteMulticastGroupsId(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].$delete(args, options))
}

export async function patchMulticastGroupsId(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].$patch(args, options))
}

export async function getNetworkAnalyzerConfigurationsConfigurationName(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-analyzer-configurations'][':ConfigurationName'].$get(args, options),
  )
}

export async function deleteNetworkAnalyzerConfigurationsConfigurationName(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-analyzer-configurations'][':ConfigurationName'].$delete(args, options),
  )
}

export async function patchNetworkAnalyzerConfigurationsConfigurationName(
  args: InferRequestType<
    (typeof client)['network-analyzer-configurations'][':ConfigurationName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-analyzer-configurations'][':ConfigurationName'].$patch(args, options),
  )
}

export async function deleteWirelessDevicesIdDataMessageId(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data#messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['wireless-devices'][':Id']['data#messageId'].$delete(args, options),
  )
}

export async function getServiceProfilesId(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-profiles'][':Id'].$get(args, options))
}

export async function deleteServiceProfilesId(
  args: InferRequestType<(typeof client)['service-profiles'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-profiles'][':Id'].$delete(args, options))
}

export async function deleteWirelessDevicesId(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].$delete(args, options))
}

export async function patchWirelessDevicesId(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].$patch(args, options))
}

export async function getWirelessDeviceImportTaskId(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_device_import_task[':Id'].$get(args, options))
}

export async function deleteWirelessDeviceImportTaskId(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_device_import_task[':Id'].$delete(args, options))
}

export async function patchWirelessDeviceImportTaskId(
  args: InferRequestType<(typeof client.wireless_device_import_task)[':Id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_device_import_task[':Id'].$patch(args, options))
}

export async function deleteWirelessGatewaysId(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].$delete(args, options))
}

export async function patchWirelessGatewaysId(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].$patch(args, options))
}

export async function getWirelessGatewayTaskDefinitionsId(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateway-task-definitions'][':Id'].$get(args, options))
}

export async function deleteWirelessGatewayTaskDefinitionsId(
  args: InferRequestType<(typeof client)['wireless-gateway-task-definitions'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['wireless-gateway-task-definitions'][':Id'].$delete(args, options),
  )
}

export async function patchWirelessDevicesIdentifierDeregister(
  args: InferRequestType<
    (typeof client)['wireless-devices'][':Identifier']['deregister']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['wireless-devices'][':Identifier'].deregister.$patch(args, options),
  )
}

export async function getPartnerAccountsPartnerAccountIdPartnerType(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['partner-accounts'][':PartnerAccountId#partnerType'].$get(args, options),
  )
}

export async function deletePartnerAccountsPartnerAccountIdPartnerType(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['partner-accounts'][':PartnerAccountId#partnerType'].$delete(args, options),
  )
}

export async function patchPartnerAccountsPartnerAccountIdPartnerType(
  args: InferRequestType<
    (typeof client)['partner-accounts'][':PartnerAccountId#partnerType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['partner-accounts'][':PartnerAccountId#partnerType'].$patch(args, options),
  )
}

export async function deleteFuotaTasksIdMulticastGroupsMulticastGroupId(
  args: InferRequestType<
    (typeof client)['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['fuota-tasks'][':Id']['multicast-groups'][':MulticastGroupId'].$delete(args, options),
  )
}

export async function deleteFuotaTasksIdWirelessDevicesWirelessDeviceId(
  args: InferRequestType<
    (typeof client)['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['fuota-tasks'][':Id']['wireless-devices'][':WirelessDeviceId'].$delete(args, options),
  )
}

export async function deleteMulticastGroupsIdWirelessDevicesWirelessDeviceId(
  args: InferRequestType<
    (typeof client)['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['multicast-groups'][':Id']['wireless-devices'][':WirelessDeviceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getEventConfigurationsResourceTypes(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-configurations-resource-types'].$get(args, options))
}

export async function patchEventConfigurationsResourceTypes(
  args: InferRequestType<(typeof client)['event-configurations-resource-types']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-configurations-resource-types'].$patch(args, options))
}

export async function getLogLevels(
  args: InferRequestType<(typeof client)['log-levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['log-levels'].$get(args, options))
}

export async function postLogLevels(
  args: InferRequestType<(typeof client)['log-levels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['log-levels'].$post(args, options))
}

export async function deleteLogLevels(
  args: InferRequestType<(typeof client)['log-levels']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['log-levels'].$delete(args, options))
}

export async function getPositionsResourceIdentifierResourceType(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.positions[':ResourceIdentifier#resourceType'].$get(args, options),
  )
}

export async function patchPositionsResourceIdentifierResourceType(
  args: InferRequestType<(typeof client.positions)[':ResourceIdentifier#resourceType']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.positions[':ResourceIdentifier#resourceType'].$patch(args, options),
  )
}

export async function getPositionConfigurationsResourceIdentifierResourceType(
  args: InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['position-configurations'][':ResourceIdentifier#resourceType'].$get(args, options),
  )
}

export async function putPositionConfigurationsResourceIdentifierResourceType(
  args: InferRequestType<
    (typeof client)['position-configurations'][':ResourceIdentifier#resourceType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['position-configurations'][':ResourceIdentifier#resourceType'].$put(args, options),
  )
}

export async function postPositionEstimate(
  args: InferRequestType<(typeof client)['position-estimate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['position-estimate'].$post(args, options))
}

export async function getEventConfigurationsIdentifierIdentifierType(
  args: InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['event-configurations'][':Identifier#identifierType'].$get(args, options),
  )
}

export async function patchEventConfigurationsIdentifierIdentifierType(
  args: InferRequestType<
    (typeof client)['event-configurations'][':Identifier#identifierType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['event-configurations'][':Identifier#identifierType'].$patch(args, options),
  )
}

export async function getLogLevelsResourceIdentifierResourceType(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['log-levels'][':ResourceIdentifier#resourceType'].$get(args, options),
  )
}

export async function putLogLevelsResourceIdentifierResourceType(
  args: InferRequestType<(typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['log-levels'][':ResourceIdentifier#resourceType'].$put(args, options),
  )
}

export async function deleteLogLevelsResourceIdentifierResourceType(
  args: InferRequestType<
    (typeof client)['log-levels'][':ResourceIdentifier#resourceType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['log-levels'][':ResourceIdentifier#resourceType'].$delete(args, options),
  )
}

export async function getResourcePositionsResourceIdentifierResourceType(
  args: InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['resource-positions'][':ResourceIdentifier#resourceType'].$get(args, options),
  )
}

export async function patchResourcePositionsResourceIdentifierResourceType(
  args: InferRequestType<
    (typeof client)['resource-positions'][':ResourceIdentifier#resourceType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['resource-positions'][':ResourceIdentifier#resourceType'].$patch(args, options),
  )
}

export async function getServiceEndpoint(
  args: InferRequestType<(typeof client)['service-endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-endpoint'].$get(args, options))
}

export async function getWirelessDevicesIdentifierIdentifierType(
  args: InferRequestType<(typeof client)['wireless-devices'][':Identifier#identifierType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['wireless-devices'][':Identifier#identifierType'].$get(args, options),
  )
}

export async function getWirelessDevicesIdStatistics(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].statistics.$get(args, options))
}

export async function getWirelessGatewaysIdentifierIdentifierType(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Identifier#identifierType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['wireless-gateways'][':Identifier#identifierType'].$get(args, options),
  )
}

export async function getWirelessGatewaysIdFirmwareInformation(
  args: InferRequestType<
    (typeof client)['wireless-gateways'][':Id']['firmware-information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['wireless-gateways'][':Id']['firmware-information'].$get(args, options),
  )
}

export async function getWirelessGatewaysIdStatistics(
  args: InferRequestType<(typeof client)['wireless-gateways'][':Id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-gateways'][':Id'].statistics.$get(args, options))
}

export async function getWirelessDeviceImportTaskId2(
  args: InferRequestType<(typeof client)['wireless_device_import_task#id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless_device_import_task#id'].$get(args, options))
}

export async function getEventConfigurationsResourceType(
  args: InferRequestType<(typeof client)['event-configurations#resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-configurations#resourceType'].$get(args, options))
}

export async function getFuotaTasksIdMulticastGroups(
  args: InferRequestType<(typeof client)['fuota-tasks'][':Id']['multicast-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fuota-tasks'][':Id']['multicast-groups'].$get(args, options))
}

export async function getPositionConfigurations(
  args: InferRequestType<(typeof client)['position-configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['position-configurations'].$get(args, options))
}

export async function getWirelessDevicesIdData(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].data.$get(args, options))
}

export async function postWirelessDevicesIdData(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].data.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$post(args, options))
}

export async function getWirelessDeviceImportTasks(
  args: InferRequestType<typeof client.wireless_device_import_tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_device_import_tasks.$get(args, options))
}

export async function postMulticastGroupsIdData(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].data.$post(args, options))
}

export async function postMulticastGroupsIdBulk(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].bulk.$post(args, options))
}

export async function patchMulticastGroupsIdBulk(
  args: InferRequestType<(typeof client)['multicast-groups'][':Id']['bulk']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multicast-groups'][':Id'].bulk.$patch(args, options))
}

export async function postWirelessSingleDeviceImportTask(
  args: InferRequestType<typeof client.wireless_single_device_import_task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_single_device_import_task.$post(args, options))
}

export async function postWirelessDeviceImportTask(
  args: InferRequestType<typeof client.wireless_device_import_task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_device_import_task.$post(args, options))
}

export async function postWirelessDevicesIdTest(
  args: InferRequestType<(typeof client)['wireless-devices'][':Id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['wireless-devices'][':Id'].test.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
}
