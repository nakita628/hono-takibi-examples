import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthToken(
  args: InferRequestType<typeof client.auth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.$post(args, options))
}

export async function deleteAuthToken(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.$delete(undefined, options))
}

export async function getDataSourcesAristaSwitches(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['arista-switches'].$get(undefined, options))
}

export async function postDataSourcesAristaSwitches(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['arista-switches'].$post(args, options))
}

export async function getDataSourcesAristaSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['arista-switches'][':id'].$get(args, options))
}

export async function putDataSourcesAristaSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['arista-switches'][':id'].$put(args, options))
}

export async function deleteDataSourcesAristaSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['arista-switches'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['arista-switches'][':id'].$delete(args, options),
  )
}

export async function postDataSourcesAristaSwitchesIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['arista-switches'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesAristaSwitchesIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['arista-switches'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesAristaSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['arista-switches'][':id']['snmp-config'].$get(args, options),
  )
}

export async function putDataSourcesAristaSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['arista-switches'][':id']['snmp-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['arista-switches'][':id']['snmp-config'].$put(args, options),
  )
}

export async function getDataSourcesBrocadeSwitches(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['brocade-switches'].$get(undefined, options))
}

export async function postDataSourcesBrocadeSwitches(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['brocade-switches'].$post(args, options))
}

export async function getDataSourcesBrocadeSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['brocade-switches'][':id'].$get(args, options))
}

export async function putDataSourcesBrocadeSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['brocade-switches'][':id'].$put(args, options))
}

export async function deleteDataSourcesBrocadeSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['brocade-switches'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['brocade-switches'][':id'].$delete(args, options),
  )
}

export async function postDataSourcesBrocadeSwitchesIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['brocade-switches'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesBrocadeSwitchesIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['brocade-switches'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesBrocadeSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['brocade-switches'][':id']['snmp-config'].$get(args, options),
  )
}

export async function putDataSourcesBrocadeSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['brocade-switches'][':id']['snmp-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['brocade-switches'][':id']['snmp-config'].$put(args, options),
  )
}

export async function getDataSourcesCheckpointFirewalls(options?: ClientRequestOptions) {
  return await parseResponse(
    client['data-sources']['checkpoint-firewalls'].$get(undefined, options),
  )
}

export async function postDataSourcesCheckpointFirewalls(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['checkpoint-firewalls'].$post(args, options))
}

export async function getDataSourcesCheckpointFirewallsId(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['checkpoint-firewalls'][':id'].$get(args, options),
  )
}

export async function putDataSourcesCheckpointFirewallsId(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['checkpoint-firewalls'][':id'].$put(args, options),
  )
}

export async function deleteDataSourcesCheckpointFirewallsId(
  args: InferRequestType<(typeof client)['data-sources']['checkpoint-firewalls'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['checkpoint-firewalls'][':id'].$delete(args, options),
  )
}

export async function postDataSourcesCheckpointFirewallsIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['checkpoint-firewalls'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['checkpoint-firewalls'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesCheckpointFirewallsIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['checkpoint-firewalls'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['checkpoint-firewalls'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesCiscoSwitches(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['cisco-switches'].$get(undefined, options))
}

export async function postDataSourcesCiscoSwitches(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['cisco-switches'].$post(args, options))
}

export async function getDataSourcesCiscoSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['cisco-switches'][':id'].$get(args, options))
}

export async function putDataSourcesCiscoSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['cisco-switches'][':id'].$put(args, options))
}

export async function deleteDataSourcesCiscoSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['cisco-switches'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['cisco-switches'][':id'].$delete(args, options))
}

export async function postDataSourcesCiscoSwitchesIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['cisco-switches'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesCiscoSwitchesIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['cisco-switches'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesCiscoSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['cisco-switches'][':id']['snmp-config'].$get(args, options),
  )
}

export async function putDataSourcesCiscoSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['cisco-switches'][':id']['snmp-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['cisco-switches'][':id']['snmp-config'].$put(args, options),
  )
}

export async function getDataSourcesDellSwitches(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['dell-switches'].$get(undefined, options))
}

export async function postDataSourcesDellSwitches(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['dell-switches'].$post(args, options))
}

export async function getDataSourcesDellSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['dell-switches'][':id'].$get(args, options))
}

export async function putDataSourcesDellSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['dell-switches'][':id'].$put(args, options))
}

export async function deleteDataSourcesDellSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['dell-switches'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['dell-switches'][':id'].$delete(args, options))
}

export async function postDataSourcesDellSwitchesIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['dell-switches'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesDellSwitchesIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['dell-switches'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesDellSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['dell-switches'][':id']['snmp-config'].$get(args, options),
  )
}

export async function putDataSourcesDellSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['dell-switches'][':id']['snmp-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['dell-switches'][':id']['snmp-config'].$put(args, options),
  )
}

export async function getDataSourcesHpovManagers(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['hpov-managers'].$get(undefined, options))
}

export async function postDataSourcesHpovManagers(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpov-managers'].$post(args, options))
}

export async function getDataSourcesHpovManagersId(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpov-managers'][':id'].$get(args, options))
}

export async function putDataSourcesHpovManagersId(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpov-managers'][':id'].$put(args, options))
}

export async function deleteDataSourcesHpovManagersId(
  args: InferRequestType<(typeof client)['data-sources']['hpov-managers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpov-managers'][':id'].$delete(args, options))
}

export async function postDataSourcesHpovManagersIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['hpov-managers'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['hpov-managers'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesHpovManagersIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['hpov-managers'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['hpov-managers'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesHpvcManagers(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['hpvc-managers'].$get(undefined, options))
}

export async function postDataSourcesHpvcManagers(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpvc-managers'].$post(args, options))
}

export async function getDataSourcesHpvcManagersId(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpvc-managers'][':id'].$get(args, options))
}

export async function putDataSourcesHpvcManagersId(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpvc-managers'][':id'].$put(args, options))
}

export async function deleteDataSourcesHpvcManagersId(
  args: InferRequestType<(typeof client)['data-sources']['hpvc-managers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['hpvc-managers'][':id'].$delete(args, options))
}

export async function postDataSourcesHpvcManagersIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['hpvc-managers'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['hpvc-managers'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesHpvcManagersIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['hpvc-managers'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['hpvc-managers'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesJuniperSwitches(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['juniper-switches'].$get(undefined, options))
}

export async function postDataSourcesJuniperSwitches(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['juniper-switches'].$post(args, options))
}

export async function getDataSourcesJuniperSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['juniper-switches'][':id'].$get(args, options))
}

export async function putDataSourcesJuniperSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['juniper-switches'][':id'].$put(args, options))
}

export async function deleteDataSourcesJuniperSwitchesId(
  args: InferRequestType<(typeof client)['data-sources']['juniper-switches'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['juniper-switches'][':id'].$delete(args, options),
  )
}

export async function postDataSourcesJuniperSwitchesIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['juniper-switches'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesJuniperSwitchesIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['juniper-switches'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesJuniperSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['juniper-switches'][':id']['snmp-config'].$get(args, options),
  )
}

export async function putDataSourcesJuniperSwitchesIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['juniper-switches'][':id']['snmp-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['juniper-switches'][':id']['snmp-config'].$put(args, options),
  )
}

export async function getDataSourcesNsxvManagers(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['nsxv-managers'].$get(undefined, options))
}

export async function postDataSourcesNsxvManagers(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['nsxv-managers'].$post(args, options))
}

export async function getDataSourcesNsxvManagersId(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['nsxv-managers'][':id'].$get(args, options))
}

export async function putDataSourcesNsxvManagersId(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['nsxv-managers'][':id'].$put(args, options))
}

export async function deleteDataSourcesNsxvManagersId(
  args: InferRequestType<(typeof client)['data-sources']['nsxv-managers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['nsxv-managers'][':id'].$delete(args, options))
}

export async function getDataSourcesNsxvManagersIdControllerCluster(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$get(args, options),
  )
}

export async function putDataSourcesNsxvManagersIdControllerCluster(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['controller-cluster']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['nsxv-managers'][':id']['controller-cluster'].$put(args, options),
  )
}

export async function postDataSourcesNsxvManagersIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['nsxv-managers'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesNsxvManagersIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['nsxv-managers'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['nsxv-managers'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesPanoramaFirewalls(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['panorama-firewalls'].$get(undefined, options))
}

export async function postDataSourcesPanoramaFirewalls(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['panorama-firewalls'].$post(args, options))
}

export async function getDataSourcesPanoramaFirewallsId(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['panorama-firewalls'][':id'].$get(args, options),
  )
}

export async function putDataSourcesPanoramaFirewallsId(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['panorama-firewalls'][':id'].$put(args, options),
  )
}

export async function deleteDataSourcesPanoramaFirewallsId(
  args: InferRequestType<(typeof client)['data-sources']['panorama-firewalls'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['panorama-firewalls'][':id'].$delete(args, options),
  )
}

export async function postDataSourcesPanoramaFirewallsIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['panorama-firewalls'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['panorama-firewalls'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesPanoramaFirewallsIdEnable(
  args: InferRequestType<
    (typeof client)['data-sources']['panorama-firewalls'][':id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['panorama-firewalls'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesUcsManagers(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources']['ucs-managers'].$get(undefined, options))
}

export async function postDataSourcesUcsManagers(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['ucs-managers'].$post(args, options))
}

export async function getDataSourcesUcsManagersId(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['ucs-managers'][':id'].$get(args, options))
}

export async function putDataSourcesUcsManagersId(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['ucs-managers'][':id'].$put(args, options))
}

export async function deleteDataSourcesUcsManagersId(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources']['ucs-managers'][':id'].$delete(args, options))
}

export async function postDataSourcesUcsManagersIdDisable(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['ucs-managers'][':id'].disable.$post(args, options),
  )
}

export async function postDataSourcesUcsManagersIdEnable(
  args: InferRequestType<(typeof client)['data-sources']['ucs-managers'][':id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['ucs-managers'][':id'].enable.$post(args, options),
  )
}

export async function getDataSourcesUcsManagersIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['ucs-managers'][':id']['snmp-config'].$get(args, options),
  )
}

export async function putDataSourcesUcsManagersIdSnmpConfig(
  args: InferRequestType<
    (typeof client)['data-sources']['ucs-managers'][':id']['snmp-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-sources']['ucs-managers'][':id']['snmp-config'].$put(args, options),
  )
}

export async function getDataSourcesVcenters(options?: ClientRequestOptions) {
  return await parseResponse(client['data-sources'].vcenters.$get(undefined, options))
}

export async function postDataSourcesVcenters(
  args: InferRequestType<(typeof client)['data-sources']['vcenters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources'].vcenters.$post(args, options))
}

export async function getDataSourcesVcentersId(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources'].vcenters[':id'].$get(args, options))
}

export async function putDataSourcesVcentersId(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources'].vcenters[':id'].$put(args, options))
}

export async function deleteDataSourcesVcentersId(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources'].vcenters[':id'].$delete(args, options))
}

export async function postDataSourcesVcentersIdDisable(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources'].vcenters[':id'].disable.$post(args, options))
}

export async function postDataSourcesVcentersIdEnable(
  args: InferRequestType<(typeof client)['data-sources']['vcenters'][':id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-sources'].vcenters[':id'].enable.$post(args, options))
}

export async function getEntitiesClusters(
  args: InferRequestType<typeof client.entities.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.clusters.$get(args, options))
}

export async function getEntitiesClustersId(
  args: InferRequestType<(typeof client.entities.clusters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.clusters[':id'].$get(args, options))
}

export async function getEntitiesDatastores(
  args: InferRequestType<typeof client.entities.datastores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.datastores.$get(args, options))
}

export async function getEntitiesDatastoresId(
  args: InferRequestType<(typeof client.entities.datastores)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.datastores[':id'].$get(args, options))
}

export async function getEntitiesDistributedVirtualPortgroups(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['distributed-virtual-portgroups'].$get(args, options))
}

export async function getEntitiesDistributedVirtualPortgroupsId(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-portgroups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entities['distributed-virtual-portgroups'][':id'].$get(args, options),
  )
}

export async function getEntitiesDistributedVirtualSwitches(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['distributed-virtual-switches'].$get(args, options))
}

export async function getEntitiesDistributedVirtualSwitchesId(
  args: InferRequestType<(typeof client.entities)['distributed-virtual-switches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.entities['distributed-virtual-switches'][':id'].$get(args, options),
  )
}

export async function getEntitiesFirewallRules(
  args: InferRequestType<(typeof client.entities)['firewall-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['firewall-rules'].$get(args, options))
}

export async function getEntitiesFirewallRulesId(
  args: InferRequestType<(typeof client.entities)['firewall-rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['firewall-rules'][':id'].$get(args, options))
}

export async function getEntitiesFirewalls(
  args: InferRequestType<typeof client.entities.firewalls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.firewalls.$get(args, options))
}

export async function getEntitiesFirewallsId(
  args: InferRequestType<(typeof client.entities.firewalls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.firewalls[':id'].$get(args, options))
}

export async function getEntitiesFlows(
  args: InferRequestType<typeof client.entities.flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.flows.$get(args, options))
}

export async function getEntitiesFlowsId(
  args: InferRequestType<(typeof client.entities.flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.flows[':id'].$get(args, options))
}

export async function getEntitiesFolders(
  args: InferRequestType<typeof client.entities.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.folders.$get(args, options))
}

export async function getEntitiesFoldersId(
  args: InferRequestType<(typeof client.entities.folders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.folders[':id'].$get(args, options))
}

export async function getEntitiesHosts(
  args: InferRequestType<typeof client.entities.hosts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.hosts.$get(args, options))
}

export async function getEntitiesHostsId(
  args: InferRequestType<(typeof client.entities.hosts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.hosts[':id'].$get(args, options))
}

export async function getEntitiesIpSets(
  args: InferRequestType<(typeof client.entities)['ip-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['ip-sets'].$get(args, options))
}

export async function getEntitiesIpSetsId(
  args: InferRequestType<(typeof client.entities)['ip-sets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['ip-sets'][':id'].$get(args, options))
}

export async function getEntitiesLayer2Networks(
  args: InferRequestType<(typeof client.entities)['layer2-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['layer2-networks'].$get(args, options))
}

export async function getEntitiesLayer2NetworksId(
  args: InferRequestType<(typeof client.entities)['layer2-networks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['layer2-networks'][':id'].$get(args, options))
}

export async function postEntitiesNames(
  args: InferRequestType<typeof client.entities.names.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.names.$post(args, options))
}

export async function getEntitiesNamesId(
  args: InferRequestType<(typeof client.entities.names)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.names[':id'].$get(args, options))
}

export async function getEntitiesNsxManagers(
  args: InferRequestType<(typeof client.entities)['nsx-managers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['nsx-managers'].$get(args, options))
}

export async function getEntitiesNsxManagersId(
  args: InferRequestType<(typeof client.entities)['nsx-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['nsx-managers'][':id'].$get(args, options))
}

export async function getEntitiesProblems(
  args: InferRequestType<typeof client.entities.problems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.problems.$get(args, options))
}

export async function getEntitiesProblemsId(
  args: InferRequestType<(typeof client.entities.problems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.problems[':id'].$get(args, options))
}

export async function getEntitiesSecurityGroups(
  args: InferRequestType<(typeof client.entities)['security-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['security-groups'].$get(args, options))
}

export async function getEntitiesSecurityGroupsId(
  args: InferRequestType<(typeof client.entities)['security-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['security-groups'][':id'].$get(args, options))
}

export async function getEntitiesSecurityTags(
  args: InferRequestType<(typeof client.entities)['security-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['security-tags'].$get(args, options))
}

export async function getEntitiesSecurityTagsId(
  args: InferRequestType<(typeof client.entities)['security-tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['security-tags'][':id'].$get(args, options))
}

export async function getEntitiesServiceGroups(
  args: InferRequestType<(typeof client.entities)['service-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['service-groups'].$get(args, options))
}

export async function getEntitiesServiceGroupsId(
  args: InferRequestType<(typeof client.entities)['service-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['service-groups'][':id'].$get(args, options))
}

export async function getEntitiesServices(
  args: InferRequestType<typeof client.entities.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.services.$get(args, options))
}

export async function getEntitiesServicesId(
  args: InferRequestType<(typeof client.entities.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.services[':id'].$get(args, options))
}

export async function getEntitiesVcDatacenters(
  args: InferRequestType<(typeof client.entities)['vc-datacenters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['vc-datacenters'].$get(args, options))
}

export async function getEntitiesVcDatacentersId(
  args: InferRequestType<(typeof client.entities)['vc-datacenters'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['vc-datacenters'][':id'].$get(args, options))
}

export async function getEntitiesVcenterManagers(
  args: InferRequestType<(typeof client.entities)['vcenter-managers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['vcenter-managers'].$get(args, options))
}

export async function getEntitiesVcenterManagersId(
  args: InferRequestType<(typeof client.entities)['vcenter-managers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities['vcenter-managers'][':id'].$get(args, options))
}

export async function getEntitiesVmknics(
  args: InferRequestType<typeof client.entities.vmknics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.vmknics.$get(args, options))
}

export async function getEntitiesVmknicsId(
  args: InferRequestType<(typeof client.entities.vmknics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.vmknics[':id'].$get(args, options))
}

export async function getEntitiesVms(
  args: InferRequestType<typeof client.entities.vms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.vms.$get(args, options))
}

export async function getEntitiesVmsId(
  args: InferRequestType<(typeof client.entities.vms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.vms[':id'].$get(args, options))
}

export async function getEntitiesVnics(
  args: InferRequestType<typeof client.entities.vnics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.vnics.$get(args, options))
}

export async function getEntitiesVnicsId(
  args: InferRequestType<(typeof client.entities.vnics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entities.vnics[':id'].$get(args, options))
}

export async function getGroupsApplications(
  args: InferRequestType<typeof client.groups.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.applications.$get(args, options))
}

export async function postGroupsApplications(
  args: InferRequestType<typeof client.groups.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.applications.$post(args, options))
}

export async function getGroupsApplicationsId(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.applications[':id'].$get(args, options))
}

export async function deleteGroupsApplicationsId(
  args: InferRequestType<(typeof client.groups.applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.applications[':id'].$delete(args, options))
}

export async function getGroupsApplicationsIdTiers(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.applications[':id'].tiers.$get(args, options))
}

export async function postGroupsApplicationsIdTiers(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.applications[':id'].tiers.$post(args, options))
}

export async function getGroupsApplicationsIdTiersTierId(
  args: InferRequestType<(typeof client.groups.applications)[':id']['tiers'][':tier-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups.applications[':id'].tiers[':tier-id'].$get(args, options),
  )
}

export async function deleteGroupsApplicationsIdTiersTierId(
  args: InferRequestType<
    (typeof client.groups.applications)[':id']['tiers'][':tier-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups.applications[':id'].tiers[':tier-id'].$delete(args, options),
  )
}

export async function getGroupsTiersTierId(
  args: InferRequestType<(typeof client.groups.tiers)[':tier-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.tiers[':tier-id'].$get(args, options))
}

export async function getInfoVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.info.version.$get(undefined, options))
}

export async function getInfraNodes(options?: ClientRequestOptions) {
  return await parseResponse(client.infra.nodes.$get(undefined, options))
}

export async function getInfraNodesId(
  args: InferRequestType<(typeof client.infra.nodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.infra.nodes[':id'].$get(args, options))
}

export async function postMicroSegRecommendedRules(
  args: InferRequestType<(typeof client)['micro-seg']['recommended-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['micro-seg']['recommended-rules'].$post(args, options))
}

export async function postMicroSegRecommendedRulesNsx(
  args: InferRequestType<(typeof client)['micro-seg']['recommended-rules']['nsx']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['micro-seg']['recommended-rules'].nsx.$post(args, options))
}

export async function postSearch(
  args: InferRequestType<typeof client.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$post(args, options))
}
