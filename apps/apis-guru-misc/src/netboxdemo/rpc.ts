import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-terminations'].index.$get(args, options))
}

export async function postCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-terminations'].index.$post(args, options))
}

export async function getCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['circuit-terminations'][':id'].index.$get(args, options),
  )
}

export async function putCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['circuit-terminations'][':id'].index.$put(args, options),
  )
}

export async function deleteCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['circuit-terminations'][':id'].index.$delete(args, options),
  )
}

export async function patchCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['circuit-terminations'][':id'].index.$patch(args, options),
  )
}

export async function getCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'].index.$get(args, options))
}

export async function postCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'].index.$post(args, options))
}

export async function getCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'][':id'].index.$get(args, options))
}

export async function putCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'][':id'].index.$put(args, options))
}

export async function deleteCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'][':id'].index.$delete(args, options))
}

export async function patchCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'][':id'].index.$patch(args, options))
}

export async function getCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.circuits.circuits.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits.index.$get(args, options))
}

export async function postCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.circuits.circuits.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits.index.$post(args, options))
}

export async function getCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits[':id'].index.$get(args, options))
}

export async function putCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits[':id'].index.$put(args, options))
}

export async function deleteCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits[':id'].index.$delete(args, options))
}

export async function patchCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits[':id'].index.$patch(args, options))
}

export async function getCircuitsProvidersIndex(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers.index.$get(args, options))
}

export async function postCircuitsProvidersIndex(
  args: InferRequestType<typeof client.circuits.providers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers.index.$post(args, options))
}

export async function getCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers[':id'].index.$get(args, options))
}

export async function putCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers[':id'].index.$put(args, options))
}

export async function deleteCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers[':id'].index.$delete(args, options))
}

export async function patchCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers[':id'].index.$patch(args, options))
}

export async function getCircuitsProvidersIdGraphsIndex(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers[':id'].graphs.index.$get(args, options))
}

export async function getDcimCablesIndex(
  args: InferRequestType<typeof client.dcim.cables.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables.index.$get(args, options))
}

export async function postDcimCablesIndex(
  args: InferRequestType<typeof client.dcim.cables.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables.index.$post(args, options))
}

export async function getDcimCablesIdIndex(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables[':id'].index.$get(args, options))
}

export async function putDcimCablesIdIndex(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables[':id'].index.$put(args, options))
}

export async function deleteDcimCablesIdIndex(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables[':id'].index.$delete(args, options))
}

export async function patchDcimCablesIdIndex(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables[':id'].index.$patch(args, options))
}

export async function getDcimConnectedDeviceIndex(
  args: InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['connected-device'].index.$get(args, options))
}

export async function getDcimConsoleConnectionsIndex(
  args: InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-connections'].index.$get(args, options))
}

export async function getDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'].index.$get(args, options))
}

export async function postDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'].index.$post(args, options))
}

export async function getDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'][':id'].index.$get(args, options))
}

export async function putDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'].index.$get(args, options))
}

export async function postDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'].index.$post(args, options))
}

export async function getDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'][':id'].index.$get(args, options))
}

export async function putDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'][':id'].index.$put(args, options))
}

export async function deleteDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'][':id'].index.$delete(args, options))
}

export async function patchDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'][':id'].index.$patch(args, options))
}

export async function getDcimConsolePortsIdTraceIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'][':id'].trace.index.$get(args, options))
}

export async function getDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-port-templates'].index.$get(args, options))
}

export async function postDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'].index.$post(args, options),
  )
}

export async function getDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'][':id'].index.$get(args, options),
  )
}

export async function putDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'].index.$get(args, options))
}

export async function postDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'].index.$post(args, options))
}

export async function getDcimConsoleServerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'][':id'].index.$get(args, options))
}

export async function putDcimConsoleServerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'][':id'].index.$put(args, options))
}

export async function deleteDcimConsoleServerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-ports'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimConsoleServerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'][':id'].index.$patch(args, options))
}

export async function getDcimConsoleServerPortsIdTraceIndex(
  args: InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-ports'][':id'].trace.index.$get(args, options),
  )
}

export async function getDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'].index.$get(args, options))
}

export async function postDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'].index.$post(args, options))
}

export async function getDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'][':id'].index.$get(args, options))
}

export async function putDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['device-bay-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'][':id'].index.$patch(args, options))
}

export async function getDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'].index.$get(args, options))
}

export async function postDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'].index.$post(args, options))
}

export async function getDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'][':id'].index.$get(args, options))
}

export async function putDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'][':id'].index.$put(args, options))
}

export async function deleteDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'][':id'].index.$delete(args, options))
}

export async function patchDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'][':id'].index.$patch(args, options))
}

export async function getDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'].index.$get(args, options))
}

export async function postDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'].index.$post(args, options))
}

export async function getDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'][':id'].index.$get(args, options))
}

export async function putDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'][':id'].index.$put(args, options))
}

export async function deleteDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'][':id'].index.$delete(args, options))
}

export async function patchDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'][':id'].index.$patch(args, options))
}

export async function getDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'].index.$get(args, options))
}

export async function postDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'].index.$post(args, options))
}

export async function getDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'][':id'].index.$get(args, options))
}

export async function putDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'][':id'].index.$put(args, options))
}

export async function deleteDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'][':id'].index.$delete(args, options))
}

export async function patchDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'][':id'].index.$patch(args, options))
}

export async function getDcimDevicesIndex(
  args: InferRequestType<typeof client.dcim.devices.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices.index.$get(args, options))
}

export async function postDcimDevicesIndex(
  args: InferRequestType<typeof client.dcim.devices.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices.index.$post(args, options))
}

export async function getDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices[':id'].index.$get(args, options))
}

export async function putDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices[':id'].index.$put(args, options))
}

export async function deleteDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices[':id'].index.$delete(args, options))
}

export async function patchDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices[':id'].index.$patch(args, options))
}

export async function getDcimDevicesIdGraphsIndex(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices[':id'].graphs.index.$get(args, options))
}

export async function getDcimDevicesIdNapalmIndex(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices[':id'].napalm.index.$get(args, options))
}

export async function getDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'].index.$get(args, options))
}

export async function postDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'].index.$post(args, options))
}

export async function getDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'][':id'].index.$get(args, options))
}

export async function putDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['front-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'][':id'].index.$patch(args, options))
}

export async function getDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'].index.$get(args, options))
}

export async function postDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'].index.$post(args, options))
}

export async function getDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'][':id'].index.$get(args, options))
}

export async function putDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'][':id'].index.$put(args, options))
}

export async function deleteDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'][':id'].index.$delete(args, options))
}

export async function patchDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'][':id'].index.$patch(args, options))
}

export async function getDcimFrontPortsIdTraceIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'][':id'].trace.index.$get(args, options))
}

export async function getDcimInterfaceConnectionsIndex(
  args: InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-connections'].index.$get(args, options))
}

export async function getDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'].index.$get(args, options))
}

export async function postDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'].index.$post(args, options))
}

export async function getDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'][':id'].index.$get(args, options))
}

export async function putDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'][':id'].index.$delete(args, options))
}

export async function patchDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'][':id'].index.$patch(args, options))
}

export async function getDcimInterfacesIndex(
  args: InferRequestType<typeof client.dcim.interfaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces.index.$get(args, options))
}

export async function postDcimInterfacesIndex(
  args: InferRequestType<typeof client.dcim.interfaces.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces.index.$post(args, options))
}

export async function getDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].index.$get(args, options))
}

export async function putDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].index.$put(args, options))
}

export async function deleteDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].index.$delete(args, options))
}

export async function patchDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].index.$patch(args, options))
}

export async function getDcimInterfacesIdGraphsIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].graphs.index.$get(args, options))
}

export async function getDcimInterfacesIdTraceIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].trace.index.$get(args, options))
}

export async function getDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'].index.$get(args, options))
}

export async function postDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'].index.$post(args, options))
}

export async function getDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'][':id'].index.$get(args, options))
}

export async function putDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'][':id'].index.$put(args, options))
}

export async function deleteDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'][':id'].index.$delete(args, options))
}

export async function patchDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'][':id'].index.$patch(args, options))
}

export async function getDcimManufacturersIndex(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers.index.$get(args, options))
}

export async function postDcimManufacturersIndex(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers.index.$post(args, options))
}

export async function getDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers[':id'].index.$get(args, options))
}

export async function putDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers[':id'].index.$put(args, options))
}

export async function deleteDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers[':id'].index.$delete(args, options))
}

export async function patchDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers[':id'].index.$patch(args, options))
}

export async function getDcimPlatformsIndex(
  args: InferRequestType<typeof client.dcim.platforms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms.index.$get(args, options))
}

export async function postDcimPlatformsIndex(
  args: InferRequestType<typeof client.dcim.platforms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms.index.$post(args, options))
}

export async function getDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms[':id'].index.$get(args, options))
}

export async function putDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms[':id'].index.$put(args, options))
}

export async function deleteDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms[':id'].index.$delete(args, options))
}

export async function patchDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms[':id'].index.$patch(args, options))
}

export async function getDcimPowerConnectionsIndex(
  args: InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-connections'].index.$get(args, options))
}

export async function getDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'].index.$get(args, options))
}

export async function postDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'].index.$post(args, options))
}

export async function getDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'][':id'].index.$get(args, options))
}

export async function putDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'][':id'].index.$put(args, options))
}

export async function deleteDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'][':id'].index.$delete(args, options))
}

export async function patchDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'][':id'].index.$patch(args, options))
}

export async function getDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'].index.$get(args, options))
}

export async function postDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'].index.$post(args, options))
}

export async function getDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'][':id'].index.$get(args, options))
}

export async function putDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['power-outlet-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['power-outlet-templates'][':id'].index.$patch(args, options),
  )
}

export async function getDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'].index.$get(args, options))
}

export async function postDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'].index.$post(args, options))
}

export async function getDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'][':id'].index.$get(args, options))
}

export async function putDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'][':id'].index.$put(args, options))
}

export async function deleteDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'][':id'].index.$delete(args, options))
}

export async function patchDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'][':id'].index.$patch(args, options))
}

export async function getDcimPowerOutletsIdTraceIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'][':id'].trace.index.$get(args, options))
}

export async function getDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'].index.$get(args, options))
}

export async function postDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'].index.$post(args, options))
}

export async function getDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'][':id'].index.$get(args, options))
}

export async function putDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'][':id'].index.$put(args, options))
}

export async function deleteDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'][':id'].index.$delete(args, options))
}

export async function patchDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'][':id'].index.$patch(args, options))
}

export async function getDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'].index.$get(args, options))
}

export async function postDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'].index.$post(args, options))
}

export async function getDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'][':id'].index.$get(args, options))
}

export async function putDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['power-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'][':id'].index.$patch(args, options))
}

export async function getDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'].index.$get(args, options))
}

export async function postDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'].index.$post(args, options))
}

export async function getDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'][':id'].index.$get(args, options))
}

export async function putDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'][':id'].index.$put(args, options))
}

export async function deleteDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'][':id'].index.$delete(args, options))
}

export async function patchDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'][':id'].index.$patch(args, options))
}

export async function getDcimPowerPortsIdTraceIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'][':id'].trace.index.$get(args, options))
}

export async function getDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-groups'].index.$get(args, options))
}

export async function postDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-groups'].index.$post(args, options))
}

export async function getDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-groups'][':id'].index.$get(args, options))
}

export async function putDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-groups'][':id'].index.$put(args, options))
}

export async function deleteDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-groups'][':id'].index.$delete(args, options))
}

export async function patchDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-groups'][':id'].index.$patch(args, options))
}

export async function getDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'].index.$get(args, options))
}

export async function postDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'].index.$post(args, options))
}

export async function getDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'][':id'].index.$get(args, options))
}

export async function putDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'][':id'].index.$put(args, options))
}

export async function deleteDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'][':id'].index.$delete(args, options))
}

export async function patchDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'][':id'].index.$patch(args, options))
}

export async function getDcimRackRolesIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'].index.$get(args, options))
}

export async function postDcimRackRolesIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'].index.$post(args, options))
}

export async function getDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'][':id'].index.$get(args, options))
}

export async function putDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'][':id'].index.$put(args, options))
}

export async function deleteDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'][':id'].index.$delete(args, options))
}

export async function patchDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'][':id'].index.$patch(args, options))
}

export async function getDcimRacksIndex(
  args: InferRequestType<typeof client.dcim.racks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks.index.$get(args, options))
}

export async function postDcimRacksIndex(
  args: InferRequestType<typeof client.dcim.racks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks.index.$post(args, options))
}

export async function getDcimRacksIdIndex(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks[':id'].index.$get(args, options))
}

export async function putDcimRacksIdIndex(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks[':id'].index.$put(args, options))
}

export async function deleteDcimRacksIdIndex(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks[':id'].index.$delete(args, options))
}

export async function patchDcimRacksIdIndex(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks[':id'].index.$patch(args, options))
}

export async function getDcimRacksIdElevationIndex(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks[':id'].elevation.index.$get(args, options))
}

export async function getDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'].index.$get(args, options))
}

export async function postDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'].index.$post(args, options))
}

export async function getDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'][':id'].index.$get(args, options))
}

export async function putDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'][':id'].index.$delete(args, options))
}

export async function patchDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'][':id'].index.$patch(args, options))
}

export async function getDcimRearPortsIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'].index.$get(args, options))
}

export async function postDcimRearPortsIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'].index.$post(args, options))
}

export async function getDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'][':id'].index.$get(args, options))
}

export async function putDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'][':id'].index.$put(args, options))
}

export async function deleteDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'][':id'].index.$delete(args, options))
}

export async function patchDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'][':id'].index.$patch(args, options))
}

export async function getDcimRearPortsIdTraceIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'][':id'].trace.index.$get(args, options))
}

export async function getDcimRegionsIndex(
  args: InferRequestType<typeof client.dcim.regions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions.index.$get(args, options))
}

export async function postDcimRegionsIndex(
  args: InferRequestType<typeof client.dcim.regions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions.index.$post(args, options))
}

export async function getDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions[':id'].index.$get(args, options))
}

export async function putDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions[':id'].index.$put(args, options))
}

export async function deleteDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions[':id'].index.$delete(args, options))
}

export async function patchDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions[':id'].index.$patch(args, options))
}

export async function getDcimSitesIndex(
  args: InferRequestType<typeof client.dcim.sites.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites.index.$get(args, options))
}

export async function postDcimSitesIndex(
  args: InferRequestType<typeof client.dcim.sites.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites.index.$post(args, options))
}

export async function getDcimSitesIdIndex(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites[':id'].index.$get(args, options))
}

export async function putDcimSitesIdIndex(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites[':id'].index.$put(args, options))
}

export async function deleteDcimSitesIdIndex(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites[':id'].index.$delete(args, options))
}

export async function patchDcimSitesIdIndex(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites[':id'].index.$patch(args, options))
}

export async function getDcimSitesIdGraphsIndex(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites[':id'].graphs.index.$get(args, options))
}

export async function getDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$get(args, options))
}

export async function postDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$post(args, options))
}

export async function getDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'][':id'].index.$get(args, options))
}

export async function putDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'][':id'].index.$put(args, options))
}

export async function deleteDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'][':id'].index.$delete(args, options))
}

export async function patchDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'][':id'].index.$patch(args, options))
}

export async function getExtrasCustomFieldChoicesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras._custom_field_choices.index.$get(undefined, options))
}

export async function getExtrasCustomFieldChoicesIdIndex(
  args: InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras._custom_field_choices[':id'].index.$get(args, options))
}

export async function getExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'].index.$get(args, options))
}

export async function postExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'].index.$post(args, options))
}

export async function getExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'][':id'].index.$get(args, options))
}

export async function putExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'][':id'].index.$put(args, options))
}

export async function deleteExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'][':id'].index.$delete(args, options))
}

export async function patchExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'][':id'].index.$patch(args, options))
}

export async function getExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'].index.$get(args, options))
}

export async function postExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'].index.$post(args, options))
}

export async function getExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'][':id'].index.$get(args, options))
}

export async function putExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'][':id'].index.$put(args, options))
}

export async function deleteExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'][':id'].index.$delete(args, options))
}

export async function patchExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'][':id'].index.$patch(args, options))
}

export async function getExtrasGraphsIndex(
  args: InferRequestType<typeof client.extras.graphs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.graphs.index.$get(args, options))
}

export async function postExtrasGraphsIndex(
  args: InferRequestType<typeof client.extras.graphs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.graphs.index.$post(args, options))
}

export async function getExtrasGraphsIdIndex(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.graphs[':id'].index.$get(args, options))
}

export async function putExtrasGraphsIdIndex(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.graphs[':id'].index.$put(args, options))
}

export async function deleteExtrasGraphsIdIndex(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.graphs[':id'].index.$delete(args, options))
}

export async function patchExtrasGraphsIdIndex(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.graphs[':id'].index.$patch(args, options))
}

export async function getExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'].index.$get(args, options))
}

export async function postExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'].index.$post(args, options))
}

export async function getExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'][':id'].index.$get(args, options))
}

export async function putExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'][':id'].index.$put(args, options))
}

export async function deleteExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'][':id'].index.$delete(args, options))
}

export async function patchExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'][':id'].index.$patch(args, options))
}

export async function getExtrasObjectChangesIndex(
  args: InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['object-changes'].index.$get(args, options))
}

export async function getExtrasObjectChangesIdIndex(
  args: InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['object-changes'][':id'].index.$get(args, options))
}

export async function getExtrasReportsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras.reports.index.$get(undefined, options))
}

export async function getExtrasReportsIdIndex(
  args: InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.reports[':id'].index.$get(args, options))
}

export async function postExtrasReportsIdRunIndex(
  args: InferRequestType<(typeof client.extras.reports)[':id']['run']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.reports[':id'].run.index.$post(args, options))
}

export async function getExtrasScriptsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras.scripts.index.$get(undefined, options))
}

export async function getExtrasScriptsIdIndex(
  args: InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.scripts[':id'].index.$get(args, options))
}

export async function getExtrasTagsIndex(
  args: InferRequestType<typeof client.extras.tags.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags.index.$get(args, options))
}

export async function postExtrasTagsIndex(
  args: InferRequestType<typeof client.extras.tags.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags.index.$post(args, options))
}

export async function getExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags[':id'].index.$get(args, options))
}

export async function putExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags[':id'].index.$put(args, options))
}

export async function deleteExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags[':id'].index.$delete(args, options))
}

export async function patchExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags[':id'].index.$patch(args, options))
}

export async function getIpamAggregatesIndex(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates.index.$get(args, options))
}

export async function postIpamAggregatesIndex(
  args: InferRequestType<typeof client.ipam.aggregates.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates.index.$post(args, options))
}

export async function getIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates[':id'].index.$get(args, options))
}

export async function putIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates[':id'].index.$put(args, options))
}

export async function deleteIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates[':id'].index.$delete(args, options))
}

export async function patchIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates[':id'].index.$patch(args, options))
}

export async function getIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'].index.$get(args, options))
}

export async function postIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'].index.$post(args, options))
}

export async function getIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'][':id'].index.$get(args, options))
}

export async function putIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'][':id'].index.$put(args, options))
}

export async function deleteIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'][':id'].index.$delete(args, options))
}

export async function patchIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'][':id'].index.$patch(args, options))
}

export async function getIpamPrefixesIndex(
  args: InferRequestType<typeof client.ipam.prefixes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes.index.$get(args, options))
}

export async function postIpamPrefixesIndex(
  args: InferRequestType<typeof client.ipam.prefixes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes.index.$post(args, options))
}

export async function getIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes[':id'].index.$get(args, options))
}

export async function putIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes[':id'].index.$put(args, options))
}

export async function deleteIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes[':id'].index.$delete(args, options))
}

export async function patchIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes[':id'].index.$patch(args, options))
}

export async function getIpamPrefixesIdAvailableIpsIndex(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes[':id']['available-ips'].index.$get(args, options))
}

export async function postIpamPrefixesIdAvailableIpsIndex(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam.prefixes[':id']['available-ips'].index.$post(args, options),
  )
}

export async function getIpamPrefixesIdAvailablePrefixesIndex(
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam.prefixes[':id']['available-prefixes'].index.$get(args, options),
  )
}

export async function postIpamPrefixesIdAvailablePrefixesIndex(
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam.prefixes[':id']['available-prefixes'].index.$post(args, options),
  )
}

export async function getIpamRirsIndex(
  args: InferRequestType<typeof client.ipam.rirs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs.index.$get(args, options))
}

export async function postIpamRirsIndex(
  args: InferRequestType<typeof client.ipam.rirs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs.index.$post(args, options))
}

export async function getIpamRirsIdIndex(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs[':id'].index.$get(args, options))
}

export async function putIpamRirsIdIndex(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs[':id'].index.$put(args, options))
}

export async function deleteIpamRirsIdIndex(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs[':id'].index.$delete(args, options))
}

export async function patchIpamRirsIdIndex(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs[':id'].index.$patch(args, options))
}

export async function getIpamRolesIndex(
  args: InferRequestType<typeof client.ipam.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles.index.$get(args, options))
}

export async function postIpamRolesIndex(
  args: InferRequestType<typeof client.ipam.roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles.index.$post(args, options))
}

export async function getIpamRolesIdIndex(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles[':id'].index.$get(args, options))
}

export async function putIpamRolesIdIndex(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles[':id'].index.$put(args, options))
}

export async function deleteIpamRolesIdIndex(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles[':id'].index.$delete(args, options))
}

export async function patchIpamRolesIdIndex(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles[':id'].index.$patch(args, options))
}

export async function getIpamServicesIndex(
  args: InferRequestType<typeof client.ipam.services.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services.index.$get(args, options))
}

export async function postIpamServicesIndex(
  args: InferRequestType<typeof client.ipam.services.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services.index.$post(args, options))
}

export async function getIpamServicesIdIndex(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services[':id'].index.$get(args, options))
}

export async function putIpamServicesIdIndex(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services[':id'].index.$put(args, options))
}

export async function deleteIpamServicesIdIndex(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services[':id'].index.$delete(args, options))
}

export async function patchIpamServicesIdIndex(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services[':id'].index.$patch(args, options))
}

export async function getIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'].index.$get(args, options))
}

export async function postIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'].index.$post(args, options))
}

export async function getIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'][':id'].index.$get(args, options))
}

export async function putIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'][':id'].index.$put(args, options))
}

export async function deleteIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'][':id'].index.$delete(args, options))
}

export async function patchIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'][':id'].index.$patch(args, options))
}

export async function getIpamVlansIndex(
  args: InferRequestType<typeof client.ipam.vlans.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans.index.$get(args, options))
}

export async function postIpamVlansIndex(
  args: InferRequestType<typeof client.ipam.vlans.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans.index.$post(args, options))
}

export async function getIpamVlansIdIndex(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans[':id'].index.$get(args, options))
}

export async function putIpamVlansIdIndex(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans[':id'].index.$put(args, options))
}

export async function deleteIpamVlansIdIndex(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans[':id'].index.$delete(args, options))
}

export async function patchIpamVlansIdIndex(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans[':id'].index.$patch(args, options))
}

export async function getIpamVrfsIndex(
  args: InferRequestType<typeof client.ipam.vrfs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs.index.$get(args, options))
}

export async function postIpamVrfsIndex(
  args: InferRequestType<typeof client.ipam.vrfs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs.index.$post(args, options))
}

export async function getIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs[':id'].index.$get(args, options))
}

export async function putIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs[':id'].index.$put(args, options))
}

export async function deleteIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs[':id'].index.$delete(args, options))
}

export async function patchIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs[':id'].index.$patch(args, options))
}

export async function getSecretsGenerateRsaKeyPairIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.secrets['generate-rsa-key-pair'].index.$get(undefined, options))
}

export async function postSecretsGetSessionKeyIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.secrets['get-session-key'].index.$post(undefined, options))
}

export async function getSecretsSecretRolesIndex(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets['secret-roles'].index.$get(args, options))
}

export async function postSecretsSecretRolesIndex(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets['secret-roles'].index.$post(args, options))
}

export async function getSecretsSecretRolesIdIndex(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets['secret-roles'][':id'].index.$get(args, options))
}

export async function putSecretsSecretRolesIdIndex(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets['secret-roles'][':id'].index.$put(args, options))
}

export async function deleteSecretsSecretRolesIdIndex(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets['secret-roles'][':id'].index.$delete(args, options))
}

export async function patchSecretsSecretRolesIdIndex(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets['secret-roles'][':id'].index.$patch(args, options))
}

export async function getSecretsSecretsIndex(
  args: InferRequestType<typeof client.secrets.secrets.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.secrets.index.$get(args, options))
}

export async function postSecretsSecretsIndex(
  args: InferRequestType<typeof client.secrets.secrets.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.secrets.index.$post(args, options))
}

export async function getSecretsSecretsIdIndex(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.secrets[':id'].index.$get(args, options))
}

export async function putSecretsSecretsIdIndex(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.secrets[':id'].index.$put(args, options))
}

export async function deleteSecretsSecretsIdIndex(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.secrets[':id'].index.$delete(args, options))
}

export async function patchSecretsSecretsIdIndex(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.secrets[':id'].index.$patch(args, options))
}

export async function getTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$get(args, options))
}

export async function postTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$post(args, options))
}

export async function getTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'][':id'].index.$get(args, options))
}

export async function putTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'][':id'].index.$put(args, options))
}

export async function deleteTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'][':id'].index.$delete(args, options))
}

export async function patchTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'][':id'].index.$patch(args, options))
}

export async function getTenancyTenantsIndex(
  args: InferRequestType<typeof client.tenancy.tenants.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants.index.$get(args, options))
}

export async function postTenancyTenantsIndex(
  args: InferRequestType<typeof client.tenancy.tenants.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants.index.$post(args, options))
}

export async function getTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants[':id'].index.$get(args, options))
}

export async function putTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants[':id'].index.$put(args, options))
}

export async function deleteTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants[':id'].index.$delete(args, options))
}

export async function patchTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants[':id'].index.$patch(args, options))
}

export async function getVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-groups'].index.$get(args, options))
}

export async function postVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-groups'].index.$post(args, options))
}

export async function getVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-groups'][':id'].index.$get(args, options),
  )
}

export async function putVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-groups'][':id'].index.$put(args, options),
  )
}

export async function deleteVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-groups'][':id'].index.$patch(args, options),
  )
}

export async function getVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-types'].index.$get(args, options))
}

export async function postVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-types'].index.$post(args, options))
}

export async function getVirtualizationClusterTypesIdIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-types'][':id'].index.$get(args, options),
  )
}

export async function putVirtualizationClusterTypesIdIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-types'][':id'].index.$put(args, options),
  )
}

export async function deleteVirtualizationClusterTypesIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['cluster-types'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-types'][':id'].index.$delete(args, options),
  )
}

export async function patchVirtualizationClusterTypesIdIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['cluster-types'][':id'].index.$patch(args, options),
  )
}

export async function getVirtualizationClustersIndex(
  args: InferRequestType<typeof client.virtualization.clusters.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters.index.$get(args, options))
}

export async function postVirtualizationClustersIndex(
  args: InferRequestType<typeof client.virtualization.clusters.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters.index.$post(args, options))
}

export async function getVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters[':id'].index.$get(args, options))
}

export async function putVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters[':id'].index.$put(args, options))
}

export async function deleteVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters[':id'].index.$delete(args, options))
}

export async function patchVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters[':id'].index.$patch(args, options))
}

export async function getVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces.index.$get(args, options))
}

export async function postVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces.index.$post(args, options))
}

export async function getVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces[':id'].index.$get(args, options))
}

export async function putVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces[':id'].index.$put(args, options))
}

export async function deleteVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces[':id'].index.$delete(args, options))
}

export async function patchVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces[':id'].index.$patch(args, options))
}

export async function getVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['virtual-machines'].index.$get(args, options))
}

export async function postVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['virtual-machines'].index.$post(args, options))
}

export async function getVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['virtual-machines'][':id'].index.$get(args, options),
  )
}

export async function putVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['virtual-machines'][':id'].index.$put(args, options),
  )
}

export async function deleteVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['virtual-machines'][':id'].index.$delete(args, options),
  )
}

export async function patchVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualization['virtual-machines'][':id'].index.$patch(args, options),
  )
}
