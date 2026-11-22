import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-terminations'].index.$get(args, options))
}

export async function putCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-terminations'].index.$put(args, options))
}

export async function postCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-terminations'].index.$post(args, options))
}

export async function deleteCircuitsCircuitTerminationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.circuits['circuit-terminations'].index.$delete(undefined, options),
  )
}

export async function patchCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-terminations'].index.$patch(args, options))
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

export async function getCircuitsCircuitTerminationsIdPathsIndex(
  args: InferRequestType<
    (typeof client.circuits)['circuit-terminations'][':id']['paths']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['circuit-terminations'][':id'].paths.index.$get(args, options),
  )
}

export async function getCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'].index.$get(args, options))
}

export async function putCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'].index.$put(args, options))
}

export async function postCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'].index.$post(args, options))
}

export async function deleteCircuitsCircuitTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.circuits['circuit-types'].index.$delete(undefined, options))
}

export async function patchCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['circuit-types'].index.$patch(args, options))
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

export async function putCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.circuits.circuits.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits.index.$put(args, options))
}

export async function postCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.circuits.circuits.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits.index.$post(args, options))
}

export async function deleteCircuitsCircuitsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.circuits.circuits.index.$delete(undefined, options))
}

export async function patchCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.circuits.circuits.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.circuits.index.$patch(args, options))
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

export async function getCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['provider-networks'].index.$get(args, options))
}

export async function putCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['provider-networks'].index.$put(args, options))
}

export async function postCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['provider-networks'].index.$post(args, options))
}

export async function deleteCircuitsProviderNetworksIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.circuits['provider-networks'].index.$delete(undefined, options))
}

export async function patchCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['provider-networks'].index.$patch(args, options))
}

export async function getCircuitsProviderNetworksIdIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['provider-networks'][':id'].index.$get(args, options))
}

export async function putCircuitsProviderNetworksIdIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits['provider-networks'][':id'].index.$put(args, options))
}

export async function deleteCircuitsProviderNetworksIdIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['provider-networks'][':id'].index.$delete(args, options),
  )
}

export async function patchCircuitsProviderNetworksIdIndex(
  args: InferRequestType<(typeof client.circuits)['provider-networks'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.circuits['provider-networks'][':id'].index.$patch(args, options),
  )
}

export async function getCircuitsProvidersIndex(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers.index.$get(args, options))
}

export async function putCircuitsProvidersIndex(
  args: InferRequestType<typeof client.circuits.providers.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers.index.$put(args, options))
}

export async function postCircuitsProvidersIndex(
  args: InferRequestType<typeof client.circuits.providers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers.index.$post(args, options))
}

export async function deleteCircuitsProvidersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.circuits.providers.index.$delete(undefined, options))
}

export async function patchCircuitsProvidersIndex(
  args: InferRequestType<typeof client.circuits.providers.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circuits.providers.index.$patch(args, options))
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

export async function getDcimCableTerminationsIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'].index.$get(args, options))
}

export async function putDcimCableTerminationsIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'].index.$put(args, options))
}

export async function postDcimCableTerminationsIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'].index.$post(args, options))
}

export async function deleteDcimCableTerminationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['cable-terminations'].index.$delete(undefined, options))
}

export async function patchDcimCableTerminationsIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'].index.$patch(args, options))
}

export async function getDcimCableTerminationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'][':id'].index.$get(args, options))
}

export async function putDcimCableTerminationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'][':id'].index.$put(args, options))
}

export async function deleteDcimCableTerminationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'][':id'].index.$delete(args, options))
}

export async function patchDcimCableTerminationsIdIndex(
  args: InferRequestType<(typeof client.dcim)['cable-terminations'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['cable-terminations'][':id'].index.$patch(args, options))
}

export async function getDcimCablesIndex(
  args: InferRequestType<typeof client.dcim.cables.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables.index.$get(args, options))
}

export async function putDcimCablesIndex(
  args: InferRequestType<typeof client.dcim.cables.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables.index.$put(args, options))
}

export async function postDcimCablesIndex(
  args: InferRequestType<typeof client.dcim.cables.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables.index.$post(args, options))
}

export async function deleteDcimCablesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.cables.index.$delete(undefined, options))
}

export async function patchDcimCablesIndex(
  args: InferRequestType<typeof client.dcim.cables.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.cables.index.$patch(args, options))
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

export async function getDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'].index.$get(args, options))
}

export async function putDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'].index.$put(args, options))
}

export async function postDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'].index.$post(args, options))
}

export async function deleteDcimConsolePortTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dcim['console-port-templates'].index.$delete(undefined, options),
  )
}

export async function patchDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-port-templates'].index.$patch(args, options))
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

export async function putDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'].index.$put(args, options))
}

export async function postDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'].index.$post(args, options))
}

export async function deleteDcimConsolePortsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['console-ports'].index.$delete(undefined, options))
}

export async function patchDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-ports'].index.$patch(args, options))
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

export async function putDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-port-templates'].index.$put(args, options))
}

export async function postDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'].index.$post(args, options),
  )
}

export async function deleteDcimConsoleServerPortTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dcim['console-server-port-templates'].index.$delete(undefined, options),
  )
}

export async function patchDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['console-server-port-templates'].index.$patch(args, options),
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

export async function putDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'].index.$put(args, options))
}

export async function postDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'].index.$post(args, options))
}

export async function deleteDcimConsoleServerPortsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['console-server-ports'].index.$delete(undefined, options))
}

export async function patchDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['console-server-ports'].index.$patch(args, options))
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

export async function putDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'].index.$put(args, options))
}

export async function postDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'].index.$post(args, options))
}

export async function deleteDcimDeviceBayTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['device-bay-templates'].index.$delete(undefined, options))
}

export async function patchDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bay-templates'].index.$patch(args, options))
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

export async function putDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'].index.$put(args, options))
}

export async function postDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'].index.$post(args, options))
}

export async function deleteDcimDeviceBaysIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['device-bays'].index.$delete(undefined, options))
}

export async function patchDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-bays'].index.$patch(args, options))
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

export async function putDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'].index.$put(args, options))
}

export async function postDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'].index.$post(args, options))
}

export async function deleteDcimDeviceRolesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['device-roles'].index.$delete(undefined, options))
}

export async function patchDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-roles'].index.$patch(args, options))
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

export async function putDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'].index.$put(args, options))
}

export async function postDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'].index.$post(args, options))
}

export async function deleteDcimDeviceTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['device-types'].index.$delete(undefined, options))
}

export async function patchDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['device-types'].index.$patch(args, options))
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

export async function putDcimDevicesIndex(
  args: InferRequestType<typeof client.dcim.devices.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices.index.$put(args, options))
}

export async function postDcimDevicesIndex(
  args: InferRequestType<typeof client.dcim.devices.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices.index.$post(args, options))
}

export async function deleteDcimDevicesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.devices.index.$delete(undefined, options))
}

export async function patchDcimDevicesIndex(
  args: InferRequestType<typeof client.dcim.devices.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.devices.index.$patch(args, options))
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

export async function putDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'].index.$put(args, options))
}

export async function postDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'].index.$post(args, options))
}

export async function deleteDcimFrontPortTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['front-port-templates'].index.$delete(undefined, options))
}

export async function patchDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-port-templates'].index.$patch(args, options))
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

export async function putDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'].index.$put(args, options))
}

export async function postDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'].index.$post(args, options))
}

export async function deleteDcimFrontPortsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['front-ports'].index.$delete(undefined, options))
}

export async function patchDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'].index.$patch(args, options))
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

export async function getDcimFrontPortsIdPathsIndex(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['paths']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['front-ports'][':id'].paths.index.$get(args, options))
}

export async function getDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'].index.$get(args, options))
}

export async function putDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'].index.$put(args, options))
}

export async function postDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'].index.$post(args, options))
}

export async function deleteDcimInterfaceTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['interface-templates'].index.$delete(undefined, options))
}

export async function patchDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['interface-templates'].index.$patch(args, options))
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

export async function putDcimInterfacesIndex(
  args: InferRequestType<typeof client.dcim.interfaces.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces.index.$put(args, options))
}

export async function postDcimInterfacesIndex(
  args: InferRequestType<typeof client.dcim.interfaces.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces.index.$post(args, options))
}

export async function deleteDcimInterfacesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.interfaces.index.$delete(undefined, options))
}

export async function patchDcimInterfacesIndex(
  args: InferRequestType<typeof client.dcim.interfaces.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces.index.$patch(args, options))
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

export async function getDcimInterfacesIdTraceIndex(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.interfaces[':id'].trace.index.$get(args, options))
}

export async function getDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'].index.$get(args, options))
}

export async function putDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'].index.$put(args, options))
}

export async function postDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'].index.$post(args, options))
}

export async function deleteDcimInventoryItemRolesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['inventory-item-roles'].index.$delete(undefined, options))
}

export async function patchDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'].index.$patch(args, options))
}

export async function getDcimInventoryItemRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'][':id'].index.$get(args, options))
}

export async function putDcimInventoryItemRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'][':id'].index.$put(args, options))
}

export async function deleteDcimInventoryItemRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['inventory-item-roles'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimInventoryItemRolesIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-roles'][':id'].index.$patch(args, options))
}

export async function getDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-templates'].index.$get(args, options))
}

export async function putDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-templates'].index.$put(args, options))
}

export async function postDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-templates'].index.$post(args, options))
}

export async function deleteDcimInventoryItemTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dcim['inventory-item-templates'].index.$delete(undefined, options),
  )
}

export async function patchDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-item-templates'].index.$patch(args, options))
}

export async function getDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['inventory-item-templates'][':id'].index.$get(args, options),
  )
}

export async function putDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-item-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['inventory-item-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['inventory-item-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['inventory-item-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['inventory-item-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['inventory-item-templates'][':id'].index.$patch(args, options),
  )
}

export async function getDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'].index.$get(args, options))
}

export async function putDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'].index.$put(args, options))
}

export async function postDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'].index.$post(args, options))
}

export async function deleteDcimInventoryItemsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['inventory-items'].index.$delete(undefined, options))
}

export async function patchDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['inventory-items'].index.$patch(args, options))
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

export async function getDcimLocationsIndex(
  args: InferRequestType<typeof client.dcim.locations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations.index.$get(args, options))
}

export async function putDcimLocationsIndex(
  args: InferRequestType<typeof client.dcim.locations.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations.index.$put(args, options))
}

export async function postDcimLocationsIndex(
  args: InferRequestType<typeof client.dcim.locations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations.index.$post(args, options))
}

export async function deleteDcimLocationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.locations.index.$delete(undefined, options))
}

export async function patchDcimLocationsIndex(
  args: InferRequestType<typeof client.dcim.locations.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations.index.$patch(args, options))
}

export async function getDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.dcim.locations)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations[':id'].index.$get(args, options))
}

export async function putDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.dcim.locations)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations[':id'].index.$put(args, options))
}

export async function deleteDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.dcim.locations)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations[':id'].index.$delete(args, options))
}

export async function patchDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.dcim.locations)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.locations[':id'].index.$patch(args, options))
}

export async function getDcimManufacturersIndex(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers.index.$get(args, options))
}

export async function putDcimManufacturersIndex(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers.index.$put(args, options))
}

export async function postDcimManufacturersIndex(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers.index.$post(args, options))
}

export async function deleteDcimManufacturersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.manufacturers.index.$delete(undefined, options))
}

export async function patchDcimManufacturersIndex(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.manufacturers.index.$patch(args, options))
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

export async function getDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'].index.$get(args, options))
}

export async function putDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'].index.$put(args, options))
}

export async function postDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'].index.$post(args, options))
}

export async function deleteDcimModuleBayTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['module-bay-templates'].index.$delete(undefined, options))
}

export async function patchDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'].index.$patch(args, options))
}

export async function getDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'][':id'].index.$get(args, options))
}

export async function putDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'][':id'].index.$put(args, options))
}

export async function deleteDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['module-bay-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bay-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bay-templates'][':id'].index.$patch(args, options))
}

export async function getDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'].index.$get(args, options))
}

export async function putDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'].index.$put(args, options))
}

export async function postDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'].index.$post(args, options))
}

export async function deleteDcimModuleBaysIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['module-bays'].index.$delete(undefined, options))
}

export async function patchDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'].index.$patch(args, options))
}

export async function getDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'][':id'].index.$get(args, options))
}

export async function putDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'][':id'].index.$put(args, options))
}

export async function deleteDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'][':id'].index.$delete(args, options))
}

export async function patchDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-bays'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-bays'][':id'].index.$patch(args, options))
}

export async function getDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.dcim)['module-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'].index.$get(args, options))
}

export async function putDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.dcim)['module-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'].index.$put(args, options))
}

export async function postDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.dcim)['module-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'].index.$post(args, options))
}

export async function deleteDcimModuleTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['module-types'].index.$delete(undefined, options))
}

export async function patchDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.dcim)['module-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'].index.$patch(args, options))
}

export async function getDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'][':id'].index.$get(args, options))
}

export async function putDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'][':id'].index.$put(args, options))
}

export async function deleteDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'][':id'].index.$delete(args, options))
}

export async function patchDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.dcim)['module-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['module-types'][':id'].index.$patch(args, options))
}

export async function getDcimModulesIndex(
  args: InferRequestType<typeof client.dcim.modules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules.index.$get(args, options))
}

export async function putDcimModulesIndex(
  args: InferRequestType<typeof client.dcim.modules.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules.index.$put(args, options))
}

export async function postDcimModulesIndex(
  args: InferRequestType<typeof client.dcim.modules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules.index.$post(args, options))
}

export async function deleteDcimModulesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.modules.index.$delete(undefined, options))
}

export async function patchDcimModulesIndex(
  args: InferRequestType<typeof client.dcim.modules.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules.index.$patch(args, options))
}

export async function getDcimModulesIdIndex(
  args: InferRequestType<(typeof client.dcim.modules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules[':id'].index.$get(args, options))
}

export async function putDcimModulesIdIndex(
  args: InferRequestType<(typeof client.dcim.modules)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules[':id'].index.$put(args, options))
}

export async function deleteDcimModulesIdIndex(
  args: InferRequestType<(typeof client.dcim.modules)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules[':id'].index.$delete(args, options))
}

export async function patchDcimModulesIdIndex(
  args: InferRequestType<(typeof client.dcim.modules)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.modules[':id'].index.$patch(args, options))
}

export async function getDcimPlatformsIndex(
  args: InferRequestType<typeof client.dcim.platforms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms.index.$get(args, options))
}

export async function putDcimPlatformsIndex(
  args: InferRequestType<typeof client.dcim.platforms.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms.index.$put(args, options))
}

export async function postDcimPlatformsIndex(
  args: InferRequestType<typeof client.dcim.platforms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms.index.$post(args, options))
}

export async function deleteDcimPlatformsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.platforms.index.$delete(undefined, options))
}

export async function patchDcimPlatformsIndex(
  args: InferRequestType<typeof client.dcim.platforms.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.platforms.index.$patch(args, options))
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

export async function getDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'].index.$get(args, options))
}

export async function putDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'].index.$put(args, options))
}

export async function postDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'].index.$post(args, options))
}

export async function deleteDcimPowerFeedsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['power-feeds'].index.$delete(undefined, options))
}

export async function patchDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'].index.$patch(args, options))
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

export async function getDcimPowerFeedsIdTraceIndex(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-feeds'][':id'].trace.index.$get(args, options))
}

export async function getDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'].index.$get(args, options))
}

export async function putDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'].index.$put(args, options))
}

export async function postDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'].index.$post(args, options))
}

export async function deleteDcimPowerOutletTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dcim['power-outlet-templates'].index.$delete(undefined, options),
  )
}

export async function patchDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlet-templates'].index.$patch(args, options))
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

export async function putDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'].index.$put(args, options))
}

export async function postDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'].index.$post(args, options))
}

export async function deleteDcimPowerOutletsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['power-outlets'].index.$delete(undefined, options))
}

export async function patchDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-outlets'].index.$patch(args, options))
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

export async function putDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'].index.$put(args, options))
}

export async function postDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'].index.$post(args, options))
}

export async function deleteDcimPowerPanelsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['power-panels'].index.$delete(undefined, options))
}

export async function patchDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-panels'].index.$patch(args, options))
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

export async function putDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'].index.$put(args, options))
}

export async function postDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'].index.$post(args, options))
}

export async function deleteDcimPowerPortTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['power-port-templates'].index.$delete(undefined, options))
}

export async function patchDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-port-templates'].index.$patch(args, options))
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

export async function putDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'].index.$put(args, options))
}

export async function postDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'].index.$post(args, options))
}

export async function deleteDcimPowerPortsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['power-ports'].index.$delete(undefined, options))
}

export async function patchDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['power-ports'].index.$patch(args, options))
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

export async function getDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'].index.$get(args, options))
}

export async function putDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'].index.$put(args, options))
}

export async function postDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'].index.$post(args, options))
}

export async function deleteDcimRackReservationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['rack-reservations'].index.$delete(undefined, options))
}

export async function patchDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-reservations'].index.$patch(args, options))
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

export async function putDcimRackRolesIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'].index.$put(args, options))
}

export async function postDcimRackRolesIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'].index.$post(args, options))
}

export async function deleteDcimRackRolesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['rack-roles'].index.$delete(undefined, options))
}

export async function patchDcimRackRolesIndex(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rack-roles'].index.$patch(args, options))
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

export async function putDcimRacksIndex(
  args: InferRequestType<typeof client.dcim.racks.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks.index.$put(args, options))
}

export async function postDcimRacksIndex(
  args: InferRequestType<typeof client.dcim.racks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks.index.$post(args, options))
}

export async function deleteDcimRacksIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.racks.index.$delete(undefined, options))
}

export async function patchDcimRacksIndex(
  args: InferRequestType<typeof client.dcim.racks.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.racks.index.$patch(args, options))
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

export async function putDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'].index.$put(args, options))
}

export async function postDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'].index.$post(args, options))
}

export async function deleteDcimRearPortTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['rear-port-templates'].index.$delete(undefined, options))
}

export async function patchDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-port-templates'].index.$patch(args, options))
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

export async function putDcimRearPortsIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'].index.$put(args, options))
}

export async function postDcimRearPortsIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'].index.$post(args, options))
}

export async function deleteDcimRearPortsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['rear-ports'].index.$delete(undefined, options))
}

export async function patchDcimRearPortsIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'].index.$patch(args, options))
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

export async function getDcimRearPortsIdPathsIndex(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['paths']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['rear-ports'][':id'].paths.index.$get(args, options))
}

export async function getDcimRegionsIndex(
  args: InferRequestType<typeof client.dcim.regions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions.index.$get(args, options))
}

export async function putDcimRegionsIndex(
  args: InferRequestType<typeof client.dcim.regions.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions.index.$put(args, options))
}

export async function postDcimRegionsIndex(
  args: InferRequestType<typeof client.dcim.regions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions.index.$post(args, options))
}

export async function deleteDcimRegionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.regions.index.$delete(undefined, options))
}

export async function patchDcimRegionsIndex(
  args: InferRequestType<typeof client.dcim.regions.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.regions.index.$patch(args, options))
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

export async function getDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'].index.$get(args, options))
}

export async function putDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'].index.$put(args, options))
}

export async function postDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'].index.$post(args, options))
}

export async function deleteDcimSiteGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['site-groups'].index.$delete(undefined, options))
}

export async function patchDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'].index.$patch(args, options))
}

export async function getDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'][':id'].index.$get(args, options))
}

export async function putDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'][':id'].index.$put(args, options))
}

export async function deleteDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'][':id'].index.$delete(args, options))
}

export async function patchDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.dcim)['site-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['site-groups'][':id'].index.$patch(args, options))
}

export async function getDcimSitesIndex(
  args: InferRequestType<typeof client.dcim.sites.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites.index.$get(args, options))
}

export async function putDcimSitesIndex(
  args: InferRequestType<typeof client.dcim.sites.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites.index.$put(args, options))
}

export async function postDcimSitesIndex(
  args: InferRequestType<typeof client.dcim.sites.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites.index.$post(args, options))
}

export async function deleteDcimSitesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim.sites.index.$delete(undefined, options))
}

export async function patchDcimSitesIndex(
  args: InferRequestType<typeof client.dcim.sites.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim.sites.index.$patch(args, options))
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

export async function getDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$get(args, options))
}

export async function putDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$put(args, options))
}

export async function postDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$post(args, options))
}

export async function deleteDcimVirtualChassisIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$delete(undefined, options))
}

export async function patchDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-chassis'].index.$patch(args, options))
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

export async function getDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-device-contexts'].index.$get(args, options))
}

export async function putDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-device-contexts'].index.$put(args, options))
}

export async function postDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-device-contexts'].index.$post(args, options))
}

export async function deleteDcimVirtualDeviceContextsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.dcim['virtual-device-contexts'].index.$delete(undefined, options),
  )
}

export async function patchDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dcim['virtual-device-contexts'].index.$patch(args, options))
}

export async function getDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['virtual-device-contexts'][':id'].index.$get(args, options),
  )
}

export async function putDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['virtual-device-contexts'][':id'].index.$put(args, options),
  )
}

export async function deleteDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<
    (typeof client.dcim)['virtual-device-contexts'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['virtual-device-contexts'][':id'].index.$delete(args, options),
  )
}

export async function patchDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<(typeof client.dcim)['virtual-device-contexts'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dcim['virtual-device-contexts'][':id'].index.$patch(args, options),
  )
}

export async function getExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'].index.$get(args, options))
}

export async function putExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'].index.$put(args, options))
}

export async function postExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'].index.$post(args, options))
}

export async function deleteExtrasConfigContextsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['config-contexts'].index.$delete(undefined, options))
}

export async function patchExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['config-contexts'].index.$patch(args, options))
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

export async function getExtrasContentTypesIndex(
  args: InferRequestType<(typeof client.extras)['content-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['content-types'].index.$get(args, options))
}

export async function getExtrasContentTypesIdIndex(
  args: InferRequestType<(typeof client.extras)['content-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['content-types'][':id'].index.$get(args, options))
}

export async function getExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'].index.$get(args, options))
}

export async function putExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'].index.$put(args, options))
}

export async function postExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'].index.$post(args, options))
}

export async function deleteExtrasCustomFieldsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['custom-fields'].index.$delete(undefined, options))
}

export async function patchExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'].index.$patch(args, options))
}

export async function getExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'][':id'].index.$get(args, options))
}

export async function putExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'][':id'].index.$put(args, options))
}

export async function deleteExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'][':id'].index.$delete(args, options))
}

export async function patchExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-fields'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-fields'][':id'].index.$patch(args, options))
}

export async function getExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.extras)['custom-links']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'].index.$get(args, options))
}

export async function putExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.extras)['custom-links']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'].index.$put(args, options))
}

export async function postExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.extras)['custom-links']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'].index.$post(args, options))
}

export async function deleteExtrasCustomLinksIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['custom-links'].index.$delete(undefined, options))
}

export async function patchExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.extras)['custom-links']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'].index.$patch(args, options))
}

export async function getExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-links'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'][':id'].index.$get(args, options))
}

export async function putExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-links'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'][':id'].index.$put(args, options))
}

export async function deleteExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-links'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'][':id'].index.$delete(args, options))
}

export async function patchExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.extras)['custom-links'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['custom-links'][':id'].index.$patch(args, options))
}

export async function getExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'].index.$get(args, options))
}

export async function putExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'].index.$put(args, options))
}

export async function postExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'].index.$post(args, options))
}

export async function deleteExtrasExportTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['export-templates'].index.$delete(undefined, options))
}

export async function patchExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['export-templates'].index.$patch(args, options))
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

export async function getExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'].index.$get(args, options))
}

export async function putExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'].index.$put(args, options))
}

export async function postExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'].index.$post(args, options))
}

export async function deleteExtrasImageAttachmentsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['image-attachments'].index.$delete(undefined, options))
}

export async function patchExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['image-attachments'].index.$patch(args, options))
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

export async function getExtrasJobResultsIndex(
  args: InferRequestType<(typeof client.extras)['job-results']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['job-results'].index.$get(args, options))
}

export async function getExtrasJobResultsIdIndex(
  args: InferRequestType<(typeof client.extras)['job-results'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['job-results'][':id'].index.$get(args, options))
}

export async function getExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'].index.$get(args, options))
}

export async function putExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'].index.$put(args, options))
}

export async function postExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'].index.$post(args, options))
}

export async function deleteExtrasJournalEntriesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['journal-entries'].index.$delete(undefined, options))
}

export async function patchExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'].index.$patch(args, options))
}

export async function getExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'][':id'].index.$get(args, options))
}

export async function putExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'][':id'].index.$put(args, options))
}

export async function deleteExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'][':id'].index.$delete(args, options))
}

export async function patchExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.extras)['journal-entries'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['journal-entries'][':id'].index.$patch(args, options))
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

export async function getExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'].index.$get(args, options))
}

export async function putExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'].index.$put(args, options))
}

export async function postExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'].index.$post(args, options))
}

export async function deleteExtrasSavedFiltersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras['saved-filters'].index.$delete(undefined, options))
}

export async function patchExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'].index.$patch(args, options))
}

export async function getExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'][':id'].index.$get(args, options))
}

export async function putExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'][':id'].index.$put(args, options))
}

export async function deleteExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'][':id'].index.$delete(args, options))
}

export async function patchExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.extras)['saved-filters'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras['saved-filters'][':id'].index.$patch(args, options))
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

export async function putExtrasTagsIndex(
  args: InferRequestType<typeof client.extras.tags.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags.index.$put(args, options))
}

export async function postExtrasTagsIndex(
  args: InferRequestType<typeof client.extras.tags.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags.index.$post(args, options))
}

export async function deleteExtrasTagsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras.tags.index.$delete(undefined, options))
}

export async function patchExtrasTagsIndex(
  args: InferRequestType<typeof client.extras.tags.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.tags.index.$patch(args, options))
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

export async function getExtrasWebhooksIndex(
  args: InferRequestType<typeof client.extras.webhooks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks.index.$get(args, options))
}

export async function putExtrasWebhooksIndex(
  args: InferRequestType<typeof client.extras.webhooks.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks.index.$put(args, options))
}

export async function postExtrasWebhooksIndex(
  args: InferRequestType<typeof client.extras.webhooks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks.index.$post(args, options))
}

export async function deleteExtrasWebhooksIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.extras.webhooks.index.$delete(undefined, options))
}

export async function patchExtrasWebhooksIndex(
  args: InferRequestType<typeof client.extras.webhooks.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks.index.$patch(args, options))
}

export async function getExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.extras.webhooks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks[':id'].index.$get(args, options))
}

export async function putExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.extras.webhooks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks[':id'].index.$put(args, options))
}

export async function deleteExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.extras.webhooks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks[':id'].index.$delete(args, options))
}

export async function patchExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.extras.webhooks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extras.webhooks[':id'].index.$patch(args, options))
}

export async function getIpamAggregatesIndex(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates.index.$get(args, options))
}

export async function putIpamAggregatesIndex(
  args: InferRequestType<typeof client.ipam.aggregates.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates.index.$put(args, options))
}

export async function postIpamAggregatesIndex(
  args: InferRequestType<typeof client.ipam.aggregates.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates.index.$post(args, options))
}

export async function deleteIpamAggregatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.aggregates.index.$delete(undefined, options))
}

export async function patchIpamAggregatesIndex(
  args: InferRequestType<typeof client.ipam.aggregates.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.aggregates.index.$patch(args, options))
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

export async function getIpamAsnsIndex(
  args: InferRequestType<typeof client.ipam.asns.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns.index.$get(args, options))
}

export async function putIpamAsnsIndex(
  args: InferRequestType<typeof client.ipam.asns.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns.index.$put(args, options))
}

export async function postIpamAsnsIndex(
  args: InferRequestType<typeof client.ipam.asns.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns.index.$post(args, options))
}

export async function deleteIpamAsnsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.asns.index.$delete(undefined, options))
}

export async function patchIpamAsnsIndex(
  args: InferRequestType<typeof client.ipam.asns.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns.index.$patch(args, options))
}

export async function getIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.ipam.asns)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns[':id'].index.$get(args, options))
}

export async function putIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.ipam.asns)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns[':id'].index.$put(args, options))
}

export async function deleteIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.ipam.asns)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns[':id'].index.$delete(args, options))
}

export async function patchIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.ipam.asns)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.asns[':id'].index.$patch(args, options))
}

export async function getIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-group-assignments'].index.$get(args, options))
}

export async function putIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-group-assignments'].index.$put(args, options))
}

export async function postIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-group-assignments'].index.$post(args, options))
}

export async function deleteIpamFhrpGroupAssignmentsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.ipam['fhrp-group-assignments'].index.$delete(undefined, options),
  )
}

export async function patchIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-group-assignments'].index.$patch(args, options))
}

export async function getIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-group-assignments'][':id'].index.$get(args, options))
}

export async function putIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-group-assignments'][':id'].index.$put(args, options))
}

export async function deleteIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam['fhrp-group-assignments'][':id'].index.$delete(args, options),
  )
}

export async function patchIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-group-assignments'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam['fhrp-group-assignments'][':id'].index.$patch(args, options),
  )
}

export async function getIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'].index.$get(args, options))
}

export async function putIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'].index.$put(args, options))
}

export async function postIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'].index.$post(args, options))
}

export async function deleteIpamFhrpGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['fhrp-groups'].index.$delete(undefined, options))
}

export async function patchIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'].index.$patch(args, options))
}

export async function getIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'][':id'].index.$get(args, options))
}

export async function putIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'][':id'].index.$put(args, options))
}

export async function deleteIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'][':id'].index.$delete(args, options))
}

export async function patchIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.ipam)['fhrp-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['fhrp-groups'][':id'].index.$patch(args, options))
}

export async function getIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'].index.$get(args, options))
}

export async function putIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'].index.$put(args, options))
}

export async function postIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'].index.$post(args, options))
}

export async function deleteIpamIpAddressesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['ip-addresses'].index.$delete(undefined, options))
}

export async function patchIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-addresses'].index.$patch(args, options))
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

export async function getIpamIpRangesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'].index.$get(args, options))
}

export async function putIpamIpRangesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'].index.$put(args, options))
}

export async function postIpamIpRangesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'].index.$post(args, options))
}

export async function deleteIpamIpRangesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['ip-ranges'].index.$delete(undefined, options))
}

export async function patchIpamIpRangesIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'].index.$patch(args, options))
}

export async function getIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'][':id'].index.$get(args, options))
}

export async function putIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'][':id'].index.$put(args, options))
}

export async function deleteIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'][':id'].index.$delete(args, options))
}

export async function patchIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.ipam)['ip-ranges'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['ip-ranges'][':id'].index.$patch(args, options))
}

export async function getIpamIpRangesIdAvailableIpsIndex(
  args: InferRequestType<
    (typeof client.ipam)['ip-ranges'][':id']['available-ips']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam['ip-ranges'][':id']['available-ips'].index.$get(args, options),
  )
}

export async function postIpamIpRangesIdAvailableIpsIndex(
  args: InferRequestType<
    (typeof client.ipam)['ip-ranges'][':id']['available-ips']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam['ip-ranges'][':id']['available-ips'].index.$post(args, options),
  )
}

export async function getIpamL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'].index.$get(args, options))
}

export async function putIpamL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'].index.$put(args, options))
}

export async function postIpamL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'].index.$post(args, options))
}

export async function deleteIpamL2vpnTerminationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['l2vpn-terminations'].index.$delete(undefined, options))
}

export async function patchIpamL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'].index.$patch(args, options))
}

export async function getIpamL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'][':id'].index.$get(args, options))
}

export async function putIpamL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'][':id'].index.$put(args, options))
}

export async function deleteIpamL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'][':id'].index.$delete(args, options))
}

export async function patchIpamL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.ipam)['l2vpn-terminations'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['l2vpn-terminations'][':id'].index.$patch(args, options))
}

export async function getIpamL2vpnsIndex(
  args: InferRequestType<typeof client.ipam.l2vpns.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns.index.$get(args, options))
}

export async function putIpamL2vpnsIndex(
  args: InferRequestType<typeof client.ipam.l2vpns.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns.index.$put(args, options))
}

export async function postIpamL2vpnsIndex(
  args: InferRequestType<typeof client.ipam.l2vpns.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns.index.$post(args, options))
}

export async function deleteIpamL2vpnsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.l2vpns.index.$delete(undefined, options))
}

export async function patchIpamL2vpnsIndex(
  args: InferRequestType<typeof client.ipam.l2vpns.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns.index.$patch(args, options))
}

export async function getIpamL2vpnsIdIndex(
  args: InferRequestType<(typeof client.ipam.l2vpns)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns[':id'].index.$get(args, options))
}

export async function putIpamL2vpnsIdIndex(
  args: InferRequestType<(typeof client.ipam.l2vpns)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns[':id'].index.$put(args, options))
}

export async function deleteIpamL2vpnsIdIndex(
  args: InferRequestType<(typeof client.ipam.l2vpns)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns[':id'].index.$delete(args, options))
}

export async function patchIpamL2vpnsIdIndex(
  args: InferRequestType<(typeof client.ipam.l2vpns)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.l2vpns[':id'].index.$patch(args, options))
}

export async function getIpamPrefixesIndex(
  args: InferRequestType<typeof client.ipam.prefixes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes.index.$get(args, options))
}

export async function putIpamPrefixesIndex(
  args: InferRequestType<typeof client.ipam.prefixes.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes.index.$put(args, options))
}

export async function postIpamPrefixesIndex(
  args: InferRequestType<typeof client.ipam.prefixes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes.index.$post(args, options))
}

export async function deleteIpamPrefixesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.prefixes.index.$delete(undefined, options))
}

export async function patchIpamPrefixesIndex(
  args: InferRequestType<typeof client.ipam.prefixes.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.prefixes.index.$patch(args, options))
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

export async function putIpamRirsIndex(
  args: InferRequestType<typeof client.ipam.rirs.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs.index.$put(args, options))
}

export async function postIpamRirsIndex(
  args: InferRequestType<typeof client.ipam.rirs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs.index.$post(args, options))
}

export async function deleteIpamRirsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.rirs.index.$delete(undefined, options))
}

export async function patchIpamRirsIndex(
  args: InferRequestType<typeof client.ipam.rirs.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.rirs.index.$patch(args, options))
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

export async function putIpamRolesIndex(
  args: InferRequestType<typeof client.ipam.roles.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles.index.$put(args, options))
}

export async function postIpamRolesIndex(
  args: InferRequestType<typeof client.ipam.roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles.index.$post(args, options))
}

export async function deleteIpamRolesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.roles.index.$delete(undefined, options))
}

export async function patchIpamRolesIndex(
  args: InferRequestType<typeof client.ipam.roles.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.roles.index.$patch(args, options))
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

export async function getIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'].index.$get(args, options))
}

export async function putIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'].index.$put(args, options))
}

export async function postIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'].index.$post(args, options))
}

export async function deleteIpamRouteTargetsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['route-targets'].index.$delete(undefined, options))
}

export async function patchIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'].index.$patch(args, options))
}

export async function getIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'][':id'].index.$get(args, options))
}

export async function putIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'][':id'].index.$put(args, options))
}

export async function deleteIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'][':id'].index.$delete(args, options))
}

export async function patchIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.ipam)['route-targets'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['route-targets'][':id'].index.$patch(args, options))
}

export async function getIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'].index.$get(args, options))
}

export async function putIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'].index.$put(args, options))
}

export async function postIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'].index.$post(args, options))
}

export async function deleteIpamServiceTemplatesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['service-templates'].index.$delete(undefined, options))
}

export async function patchIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'].index.$patch(args, options))
}

export async function getIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'][':id'].index.$get(args, options))
}

export async function putIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'][':id'].index.$put(args, options))
}

export async function deleteIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'][':id'].index.$delete(args, options))
}

export async function patchIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.ipam)['service-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['service-templates'][':id'].index.$patch(args, options))
}

export async function getIpamServicesIndex(
  args: InferRequestType<typeof client.ipam.services.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services.index.$get(args, options))
}

export async function putIpamServicesIndex(
  args: InferRequestType<typeof client.ipam.services.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services.index.$put(args, options))
}

export async function postIpamServicesIndex(
  args: InferRequestType<typeof client.ipam.services.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services.index.$post(args, options))
}

export async function deleteIpamServicesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.services.index.$delete(undefined, options))
}

export async function patchIpamServicesIndex(
  args: InferRequestType<typeof client.ipam.services.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.services.index.$patch(args, options))
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

export async function putIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'].index.$put(args, options))
}

export async function postIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'].index.$post(args, options))
}

export async function deleteIpamVlanGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam['vlan-groups'].index.$delete(undefined, options))
}

export async function patchIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam['vlan-groups'].index.$patch(args, options))
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

export async function getIpamVlanGroupsIdAvailableVlansIndex(
  args: InferRequestType<
    (typeof client.ipam)['vlan-groups'][':id']['available-vlans']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam['vlan-groups'][':id']['available-vlans'].index.$get(args, options),
  )
}

export async function postIpamVlanGroupsIdAvailableVlansIndex(
  args: InferRequestType<
    (typeof client.ipam)['vlan-groups'][':id']['available-vlans']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ipam['vlan-groups'][':id']['available-vlans'].index.$post(args, options),
  )
}

export async function getIpamVlansIndex(
  args: InferRequestType<typeof client.ipam.vlans.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans.index.$get(args, options))
}

export async function putIpamVlansIndex(
  args: InferRequestType<typeof client.ipam.vlans.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans.index.$put(args, options))
}

export async function postIpamVlansIndex(
  args: InferRequestType<typeof client.ipam.vlans.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans.index.$post(args, options))
}

export async function deleteIpamVlansIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.vlans.index.$delete(undefined, options))
}

export async function patchIpamVlansIndex(
  args: InferRequestType<typeof client.ipam.vlans.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vlans.index.$patch(args, options))
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

export async function putIpamVrfsIndex(
  args: InferRequestType<typeof client.ipam.vrfs.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs.index.$put(args, options))
}

export async function postIpamVrfsIndex(
  args: InferRequestType<typeof client.ipam.vrfs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs.index.$post(args, options))
}

export async function deleteIpamVrfsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.ipam.vrfs.index.$delete(undefined, options))
}

export async function patchIpamVrfsIndex(
  args: InferRequestType<typeof client.ipam.vrfs.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipam.vrfs.index.$patch(args, options))
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

export async function getStatusIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.status.index.$get(undefined, options))
}

export async function getTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-assignments'].index.$get(args, options))
}

export async function putTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-assignments'].index.$put(args, options))
}

export async function postTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-assignments'].index.$post(args, options))
}

export async function deleteTenancyContactAssignmentsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.tenancy['contact-assignments'].index.$delete(undefined, options),
  )
}

export async function patchTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-assignments'].index.$patch(args, options))
}

export async function getTenancyContactAssignmentsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-assignments'][':id'].index.$get(args, options))
}

export async function putTenancyContactAssignmentsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-assignments'][':id'].index.$put(args, options))
}

export async function deleteTenancyContactAssignmentsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tenancy['contact-assignments'][':id'].index.$delete(args, options),
  )
}

export async function patchTenancyContactAssignmentsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-assignments'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tenancy['contact-assignments'][':id'].index.$patch(args, options),
  )
}

export async function getTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'].index.$get(args, options))
}

export async function putTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'].index.$put(args, options))
}

export async function postTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'].index.$post(args, options))
}

export async function deleteTenancyContactGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tenancy['contact-groups'].index.$delete(undefined, options))
}

export async function patchTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'].index.$patch(args, options))
}

export async function getTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'][':id'].index.$get(args, options))
}

export async function putTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'][':id'].index.$put(args, options))
}

export async function deleteTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'][':id'].index.$delete(args, options))
}

export async function patchTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-groups'][':id'].index.$patch(args, options))
}

export async function getTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'].index.$get(args, options))
}

export async function putTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'].index.$put(args, options))
}

export async function postTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'].index.$post(args, options))
}

export async function deleteTenancyContactRolesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tenancy['contact-roles'].index.$delete(undefined, options))
}

export async function patchTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'].index.$patch(args, options))
}

export async function getTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'][':id'].index.$get(args, options))
}

export async function putTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'][':id'].index.$put(args, options))
}

export async function deleteTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'][':id'].index.$delete(args, options))
}

export async function patchTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.tenancy)['contact-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['contact-roles'][':id'].index.$patch(args, options))
}

export async function getTenancyContactsIndex(
  args: InferRequestType<typeof client.tenancy.contacts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts.index.$get(args, options))
}

export async function putTenancyContactsIndex(
  args: InferRequestType<typeof client.tenancy.contacts.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts.index.$put(args, options))
}

export async function postTenancyContactsIndex(
  args: InferRequestType<typeof client.tenancy.contacts.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts.index.$post(args, options))
}

export async function deleteTenancyContactsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tenancy.contacts.index.$delete(undefined, options))
}

export async function patchTenancyContactsIndex(
  args: InferRequestType<typeof client.tenancy.contacts.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts.index.$patch(args, options))
}

export async function getTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.tenancy.contacts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts[':id'].index.$get(args, options))
}

export async function putTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.tenancy.contacts)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts[':id'].index.$put(args, options))
}

export async function deleteTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.tenancy.contacts)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts[':id'].index.$delete(args, options))
}

export async function patchTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.tenancy.contacts)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.contacts[':id'].index.$patch(args, options))
}

export async function getTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$get(args, options))
}

export async function putTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$put(args, options))
}

export async function postTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$post(args, options))
}

export async function deleteTenancyTenantGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$delete(undefined, options))
}

export async function patchTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy['tenant-groups'].index.$patch(args, options))
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

export async function putTenancyTenantsIndex(
  args: InferRequestType<typeof client.tenancy.tenants.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants.index.$put(args, options))
}

export async function postTenancyTenantsIndex(
  args: InferRequestType<typeof client.tenancy.tenants.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants.index.$post(args, options))
}

export async function deleteTenancyTenantsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.tenancy.tenants.index.$delete(undefined, options))
}

export async function patchTenancyTenantsIndex(
  args: InferRequestType<typeof client.tenancy.tenants.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenancy.tenants.index.$patch(args, options))
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

export async function getUsersConfigIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.config.index.$get(undefined, options))
}

export async function getUsersGroupsIndex(
  args: InferRequestType<typeof client.users.groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups.index.$get(args, options))
}

export async function putUsersGroupsIndex(
  args: InferRequestType<typeof client.users.groups.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups.index.$put(args, options))
}

export async function postUsersGroupsIndex(
  args: InferRequestType<typeof client.users.groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups.index.$post(args, options))
}

export async function deleteUsersGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.groups.index.$delete(undefined, options))
}

export async function patchUsersGroupsIndex(
  args: InferRequestType<typeof client.users.groups.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups.index.$patch(args, options))
}

export async function getUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.users.groups)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups[':id'].index.$get(args, options))
}

export async function putUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.users.groups)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups[':id'].index.$put(args, options))
}

export async function deleteUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.users.groups)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups[':id'].index.$delete(args, options))
}

export async function patchUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.users.groups)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.groups[':id'].index.$patch(args, options))
}

export async function getUsersPermissionsIndex(
  args: InferRequestType<typeof client.users.permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions.index.$get(args, options))
}

export async function putUsersPermissionsIndex(
  args: InferRequestType<typeof client.users.permissions.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions.index.$put(args, options))
}

export async function postUsersPermissionsIndex(
  args: InferRequestType<typeof client.users.permissions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions.index.$post(args, options))
}

export async function deleteUsersPermissionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.permissions.index.$delete(undefined, options))
}

export async function patchUsersPermissionsIndex(
  args: InferRequestType<typeof client.users.permissions.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions.index.$patch(args, options))
}

export async function getUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.users.permissions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions[':id'].index.$get(args, options))
}

export async function putUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.users.permissions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions[':id'].index.$put(args, options))
}

export async function deleteUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.users.permissions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions[':id'].index.$delete(args, options))
}

export async function patchUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.users.permissions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.permissions[':id'].index.$patch(args, options))
}

export async function getUsersTokensIndex(
  args: InferRequestType<typeof client.users.tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.index.$get(args, options))
}

export async function putUsersTokensIndex(
  args: InferRequestType<typeof client.users.tokens.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.index.$put(args, options))
}

export async function postUsersTokensIndex(
  args: InferRequestType<typeof client.users.tokens.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.index.$post(args, options))
}

export async function deleteUsersTokensIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.tokens.index.$delete(undefined, options))
}

export async function patchUsersTokensIndex(
  args: InferRequestType<typeof client.users.tokens.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.index.$patch(args, options))
}

export async function postUsersTokensProvisionIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.tokens.provision.index.$post(undefined, options))
}

export async function getUsersTokensIdIndex(
  args: InferRequestType<(typeof client.users.tokens)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens[':id'].index.$get(args, options))
}

export async function putUsersTokensIdIndex(
  args: InferRequestType<(typeof client.users.tokens)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens[':id'].index.$put(args, options))
}

export async function deleteUsersTokensIdIndex(
  args: InferRequestType<(typeof client.users.tokens)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens[':id'].index.$delete(args, options))
}

export async function patchUsersTokensIdIndex(
  args: InferRequestType<(typeof client.users.tokens)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens[':id'].index.$patch(args, options))
}

export async function getUsersUsersIndex(
  args: InferRequestType<typeof client.users.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users.index.$get(args, options))
}

export async function putUsersUsersIndex(
  args: InferRequestType<typeof client.users.users.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users.index.$put(args, options))
}

export async function postUsersUsersIndex(
  args: InferRequestType<typeof client.users.users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users.index.$post(args, options))
}

export async function deleteUsersUsersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.users.index.$delete(undefined, options))
}

export async function patchUsersUsersIndex(
  args: InferRequestType<typeof client.users.users.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users.index.$patch(args, options))
}

export async function getUsersUsersIdIndex(
  args: InferRequestType<(typeof client.users.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users[':id'].index.$get(args, options))
}

export async function putUsersUsersIdIndex(
  args: InferRequestType<(typeof client.users.users)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users[':id'].index.$put(args, options))
}

export async function deleteUsersUsersIdIndex(
  args: InferRequestType<(typeof client.users.users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users[':id'].index.$delete(args, options))
}

export async function patchUsersUsersIdIndex(
  args: InferRequestType<(typeof client.users.users)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.users[':id'].index.$patch(args, options))
}

export async function getVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-groups'].index.$get(args, options))
}

export async function putVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-groups'].index.$put(args, options))
}

export async function postVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-groups'].index.$post(args, options))
}

export async function deleteVirtualizationClusterGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.virtualization['cluster-groups'].index.$delete(undefined, options),
  )
}

export async function patchVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-groups'].index.$patch(args, options))
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

export async function putVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-types'].index.$put(args, options))
}

export async function postVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-types'].index.$post(args, options))
}

export async function deleteVirtualizationClusterTypesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.virtualization['cluster-types'].index.$delete(undefined, options),
  )
}

export async function patchVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['cluster-types'].index.$patch(args, options))
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

export async function putVirtualizationClustersIndex(
  args: InferRequestType<typeof client.virtualization.clusters.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters.index.$put(args, options))
}

export async function postVirtualizationClustersIndex(
  args: InferRequestType<typeof client.virtualization.clusters.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters.index.$post(args, options))
}

export async function deleteVirtualizationClustersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.virtualization.clusters.index.$delete(undefined, options))
}

export async function patchVirtualizationClustersIndex(
  args: InferRequestType<typeof client.virtualization.clusters.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.clusters.index.$patch(args, options))
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

export async function putVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces.index.$put(args, options))
}

export async function postVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces.index.$post(args, options))
}

export async function deleteVirtualizationInterfacesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.virtualization.interfaces.index.$delete(undefined, options))
}

export async function patchVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization.interfaces.index.$patch(args, options))
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

export async function putVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['virtual-machines'].index.$put(args, options))
}

export async function postVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['virtual-machines'].index.$post(args, options))
}

export async function deleteVirtualizationVirtualMachinesIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.virtualization['virtual-machines'].index.$delete(undefined, options),
  )
}

export async function patchVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualization['virtual-machines'].index.$patch(args, options))
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

export async function getWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lan-groups'].index.$get(args, options))
}

export async function putWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lan-groups'].index.$put(args, options))
}

export async function postWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lan-groups'].index.$post(args, options))
}

export async function deleteWirelessWirelessLanGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.wireless['wireless-lan-groups'].index.$delete(undefined, options),
  )
}

export async function patchWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lan-groups'].index.$patch(args, options))
}

export async function getWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wireless['wireless-lan-groups'][':id'].index.$get(args, options),
  )
}

export async function putWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wireless['wireless-lan-groups'][':id'].index.$put(args, options),
  )
}

export async function deleteWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<
    (typeof client.wireless)['wireless-lan-groups'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wireless['wireless-lan-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lan-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wireless['wireless-lan-groups'][':id'].index.$patch(args, options),
  )
}

export async function getWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'].index.$get(args, options))
}

export async function putWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'].index.$put(args, options))
}

export async function postWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'].index.$post(args, options))
}

export async function deleteWirelessWirelessLansIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.wireless['wireless-lans'].index.$delete(undefined, options))
}

export async function patchWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'].index.$patch(args, options))
}

export async function getWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'][':id'].index.$get(args, options))
}

export async function putWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'][':id'].index.$put(args, options))
}

export async function deleteWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'][':id'].index.$delete(args, options))
}

export async function patchWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-lans'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-lans'][':id'].index.$patch(args, options))
}

export async function getWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'].index.$get(args, options))
}

export async function putWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'].index.$put(args, options))
}

export async function postWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'].index.$post(args, options))
}

export async function deleteWirelessWirelessLinksIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.wireless['wireless-links'].index.$delete(undefined, options))
}

export async function patchWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'].index.$patch(args, options))
}

export async function getWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'][':id'].index.$get(args, options))
}

export async function putWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'][':id'].index.$put(args, options))
}

export async function deleteWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'][':id'].index.$delete(args, options))
}

export async function patchWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.wireless)['wireless-links'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless['wireless-links'][':id'].index.$patch(args, options))
}
