import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAuthenticationCheckIndex(
  args: InferRequestType<(typeof client.api)['authentication-check']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['authentication-check'].index.$get(args, options))
}

export async function getApiCircuitsCircuitGroupAssignmentsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'].index.$get(args, options),
  )
}

export async function putApiCircuitsCircuitGroupAssignmentsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'].index.$put(args, options),
  )
}

export async function postApiCircuitsCircuitGroupAssignmentsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'].index.$post(args, options),
  )
}

export async function deleteApiCircuitsCircuitGroupAssignmentsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsCircuitGroupAssignmentsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'].index.$patch(args, options),
  )
}

export async function getApiCircuitsCircuitGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsCircuitGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsCircuitGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsCircuitGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-group-assignments'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-group-assignments'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsCircuitGroupsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'].index.$get(args, options))
}

export async function putApiCircuitsCircuitGroupsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'].index.$put(args, options))
}

export async function postApiCircuitsCircuitGroupsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'].index.$post(args, options))
}

export async function deleteApiCircuitsCircuitGroupsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'].index.$delete(args, options))
}

export async function patchApiCircuitsCircuitGroupsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'].index.$patch(args, options))
}

export async function getApiCircuitsCircuitGroupsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'][':id'].index.$get(args, options))
}

export async function putApiCircuitsCircuitGroupsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-groups'][':id'].index.$put(args, options))
}

export async function deleteApiCircuitsCircuitGroupsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsCircuitGroupsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-groups'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-terminations'].index.$get(args, options))
}

export async function putApiCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-terminations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-terminations'].index.$put(args, options))
}

export async function postApiCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-terminations'].index.$post(args, options))
}

export async function deleteApiCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-terminations']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsCircuitTerminationsIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-terminations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'].index.$patch(args, options),
  )
}

export async function getApiCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-terminations'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-terminations'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-terminations'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-terminations'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsCircuitTerminationsIdPathsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['circuit-terminations'][':id']['paths']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-terminations'][':id'].paths.index.$get(args, options),
  )
}

export async function getApiCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'].index.$get(args, options))
}

export async function putApiCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'].index.$put(args, options))
}

export async function postApiCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'].index.$post(args, options))
}

export async function deleteApiCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'].index.$delete(args, options))
}

export async function patchApiCircuitsCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'].index.$patch(args, options))
}

export async function getApiCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'][':id'].index.$get(args, options))
}

export async function putApiCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['circuit-types'][':id'].index.$put(args, options))
}

export async function deleteApiCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-types'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsCircuitTypesIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['circuit-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['circuit-types'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.api.circuits.circuits.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits.index.$get(args, options))
}

export async function putApiCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.api.circuits.circuits.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits.index.$put(args, options))
}

export async function postApiCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.api.circuits.circuits.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits.index.$post(args, options))
}

export async function deleteApiCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.api.circuits.circuits.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits.index.$delete(args, options))
}

export async function patchApiCircuitsCircuitsIndex(
  args: InferRequestType<typeof client.api.circuits.circuits.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits.index.$patch(args, options))
}

export async function getApiCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.api.circuits.circuits)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits[':id'].index.$get(args, options))
}

export async function putApiCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.api.circuits.circuits)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits[':id'].index.$put(args, options))
}

export async function deleteApiCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.api.circuits.circuits)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits[':id'].index.$delete(args, options))
}

export async function patchApiCircuitsCircuitsIdIndex(
  args: InferRequestType<(typeof client.api.circuits.circuits)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.circuits[':id'].index.$patch(args, options))
}

export async function getApiCircuitsProviderAccountsIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-accounts'].index.$get(args, options))
}

export async function putApiCircuitsProviderAccountsIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-accounts'].index.$put(args, options))
}

export async function postApiCircuitsProviderAccountsIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-accounts'].index.$post(args, options))
}

export async function deleteApiCircuitsProviderAccountsIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-accounts'].index.$delete(args, options))
}

export async function patchApiCircuitsProviderAccountsIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-accounts'].index.$patch(args, options))
}

export async function getApiCircuitsProviderAccountsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-accounts'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsProviderAccountsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-accounts'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-accounts'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsProviderAccountsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['provider-accounts'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-accounts'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsProviderAccountsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['provider-accounts'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-accounts'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-networks'].index.$get(args, options))
}

export async function putApiCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-networks'].index.$put(args, options))
}

export async function postApiCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-networks'].index.$post(args, options))
}

export async function deleteApiCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-networks'].index.$delete(args, options))
}

export async function patchApiCircuitsProviderNetworksIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['provider-networks'].index.$patch(args, options))
}

export async function getApiCircuitsProviderNetworksIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-networks'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsProviderNetworksIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['provider-networks'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-networks'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsProviderNetworksIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['provider-networks'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-networks'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsProviderNetworksIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['provider-networks'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['provider-networks'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsProvidersIndex(
  args: InferRequestType<typeof client.api.circuits.providers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers.index.$get(args, options))
}

export async function putApiCircuitsProvidersIndex(
  args: InferRequestType<typeof client.api.circuits.providers.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers.index.$put(args, options))
}

export async function postApiCircuitsProvidersIndex(
  args: InferRequestType<typeof client.api.circuits.providers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers.index.$post(args, options))
}

export async function deleteApiCircuitsProvidersIndex(
  args: InferRequestType<typeof client.api.circuits.providers.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers.index.$delete(args, options))
}

export async function patchApiCircuitsProvidersIndex(
  args: InferRequestType<typeof client.api.circuits.providers.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers.index.$patch(args, options))
}

export async function getApiCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.api.circuits.providers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers[':id'].index.$get(args, options))
}

export async function putApiCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.api.circuits.providers)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers[':id'].index.$put(args, options))
}

export async function deleteApiCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.api.circuits.providers)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers[':id'].index.$delete(args, options))
}

export async function patchApiCircuitsProvidersIdIndex(
  args: InferRequestType<(typeof client.api.circuits.providers)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits.providers[':id'].index.$patch(args, options))
}

export async function getApiCircuitsVirtualCircuitTerminationsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'].index.$get(args, options),
  )
}

export async function putApiCircuitsVirtualCircuitTerminationsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'].index.$put(args, options),
  )
}

export async function postApiCircuitsVirtualCircuitTerminationsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'].index.$post(args, options),
  )
}

export async function deleteApiCircuitsVirtualCircuitTerminationsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsVirtualCircuitTerminationsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'].index.$patch(args, options),
  )
}

export async function getApiCircuitsVirtualCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsVirtualCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsVirtualCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsVirtualCircuitTerminationsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsVirtualCircuitTerminationsIdPathsIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-terminations'][':id']['paths']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-terminations'][':id'].paths.index.$get(args, options),
  )
}

export async function getApiCircuitsVirtualCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuit-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuit-types'].index.$get(args, options))
}

export async function putApiCircuitsVirtualCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuit-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuit-types'].index.$put(args, options))
}

export async function postApiCircuitsVirtualCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuit-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'].index.$post(args, options),
  )
}

export async function deleteApiCircuitsVirtualCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuit-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsVirtualCircuitTypesIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuit-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'].index.$patch(args, options),
  )
}

export async function getApiCircuitsVirtualCircuitTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-types'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsVirtualCircuitTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-types'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsVirtualCircuitTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-types'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsVirtualCircuitTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuit-types'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuit-types'][':id'].index.$patch(args, options),
  )
}

export async function getApiCircuitsVirtualCircuitsIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuits'].index.$get(args, options))
}

export async function putApiCircuitsVirtualCircuitsIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuits'].index.$put(args, options))
}

export async function postApiCircuitsVirtualCircuitsIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuits'].index.$post(args, options))
}

export async function deleteApiCircuitsVirtualCircuitsIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuits'].index.$delete(args, options))
}

export async function patchApiCircuitsVirtualCircuitsIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.circuits['virtual-circuits'].index.$patch(args, options))
}

export async function getApiCircuitsVirtualCircuitsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuits'][':id'].index.$get(args, options),
  )
}

export async function putApiCircuitsVirtualCircuitsIdIndex(
  args: InferRequestType<(typeof client.api.circuits)['virtual-circuits'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuits'][':id'].index.$put(args, options),
  )
}

export async function deleteApiCircuitsVirtualCircuitsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuits'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuits'][':id'].index.$delete(args, options),
  )
}

export async function patchApiCircuitsVirtualCircuitsIdIndex(
  args: InferRequestType<
    (typeof client.api.circuits)['virtual-circuits'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.circuits['virtual-circuits'][':id'].index.$patch(args, options),
  )
}

export async function getApiCoreBackgroundQueuesIndex(
  args: InferRequestType<(typeof client.api.core)['background-queues']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['background-queues'].index.$get(args, options))
}

export async function getApiCoreBackgroundQueuesNameIndex(
  args: InferRequestType<(typeof client.api.core)['background-queues'][':name']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.core['background-queues'][':name'].index.$get(args, options),
  )
}

export async function getApiCoreBackgroundTasksIndex(
  args: InferRequestType<(typeof client.api.core)['background-tasks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['background-tasks'].index.$get(args, options))
}

export async function getApiCoreBackgroundTasksIdIndex(
  args: InferRequestType<(typeof client.api.core)['background-tasks'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['background-tasks'][':id'].index.$get(args, options))
}

export async function postApiCoreBackgroundTasksIdDeleteIndex(
  args: InferRequestType<
    (typeof client.api.core)['background-tasks'][':id']['delete']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.core['background-tasks'][':id'].delete.index.$post(args, options),
  )
}

export async function postApiCoreBackgroundTasksIdEnqueueIndex(
  args: InferRequestType<
    (typeof client.api.core)['background-tasks'][':id']['enqueue']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.core['background-tasks'][':id'].enqueue.index.$post(args, options),
  )
}

export async function postApiCoreBackgroundTasksIdRequeueIndex(
  args: InferRequestType<
    (typeof client.api.core)['background-tasks'][':id']['requeue']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.core['background-tasks'][':id'].requeue.index.$post(args, options),
  )
}

export async function postApiCoreBackgroundTasksIdStopIndex(
  args: InferRequestType<
    (typeof client.api.core)['background-tasks'][':id']['stop']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.core['background-tasks'][':id'].stop.index.$post(args, options),
  )
}

export async function getApiCoreBackgroundWorkersIndex(
  args: InferRequestType<(typeof client.api.core)['background-workers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['background-workers'].index.$get(args, options))
}

export async function getApiCoreBackgroundWorkersNameIndex(
  args: InferRequestType<(typeof client.api.core)['background-workers'][':name']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.core['background-workers'][':name'].index.$get(args, options),
  )
}

export async function getApiCoreDataFilesIndex(
  args: InferRequestType<(typeof client.api.core)['data-files']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-files'].index.$get(args, options))
}

export async function getApiCoreDataFilesIdIndex(
  args: InferRequestType<(typeof client.api.core)['data-files'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-files'][':id'].index.$get(args, options))
}

export async function getApiCoreDataSourcesIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'].index.$get(args, options))
}

export async function putApiCoreDataSourcesIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'].index.$put(args, options))
}

export async function postApiCoreDataSourcesIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'].index.$post(args, options))
}

export async function deleteApiCoreDataSourcesIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'].index.$delete(args, options))
}

export async function patchApiCoreDataSourcesIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'].index.$patch(args, options))
}

export async function getApiCoreDataSourcesIdIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'][':id'].index.$get(args, options))
}

export async function putApiCoreDataSourcesIdIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'][':id'].index.$put(args, options))
}

export async function deleteApiCoreDataSourcesIdIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'][':id'].index.$delete(args, options))
}

export async function patchApiCoreDataSourcesIdIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'][':id'].index.$patch(args, options))
}

export async function postApiCoreDataSourcesIdSyncIndex(
  args: InferRequestType<(typeof client.api.core)['data-sources'][':id']['sync']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['data-sources'][':id'].sync.index.$post(args, options))
}

export async function getApiCoreJobsIndex(
  args: InferRequestType<typeof client.api.core.jobs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core.jobs.index.$get(args, options))
}

export async function getApiCoreJobsIdIndex(
  args: InferRequestType<(typeof client.api.core.jobs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core.jobs[':id'].index.$get(args, options))
}

export async function getApiCoreObjectChangesIndex(
  args: InferRequestType<(typeof client.api.core)['object-changes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['object-changes'].index.$get(args, options))
}

export async function getApiCoreObjectChangesIdIndex(
  args: InferRequestType<(typeof client.api.core)['object-changes'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['object-changes'][':id'].index.$get(args, options))
}

export async function getApiCoreObjectTypesIndex(
  args: InferRequestType<(typeof client.api.core)['object-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['object-types'].index.$get(args, options))
}

export async function getApiCoreObjectTypesIdIndex(
  args: InferRequestType<(typeof client.api.core)['object-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.core['object-types'][':id'].index.$get(args, options))
}

export async function getApiDcimCableBundlesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'].index.$get(args, options))
}

export async function putApiDcimCableBundlesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'].index.$put(args, options))
}

export async function postApiDcimCableBundlesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'].index.$post(args, options))
}

export async function deleteApiDcimCableBundlesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'].index.$delete(args, options))
}

export async function patchApiDcimCableBundlesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'].index.$patch(args, options))
}

export async function getApiDcimCableBundlesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'][':id'].index.$get(args, options))
}

export async function putApiDcimCableBundlesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'][':id'].index.$put(args, options))
}

export async function deleteApiDcimCableBundlesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'][':id'].index.$delete(args, options))
}

export async function patchApiDcimCableBundlesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-bundles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-bundles'][':id'].index.$patch(args, options))
}

export async function getApiDcimCableTerminationsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-terminations'].index.$get(args, options))
}

export async function getApiDcimCableTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cable-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cable-terminations'][':id'].index.$get(args, options))
}

export async function getApiDcimCablesIndex(
  args: InferRequestType<typeof client.api.dcim.cables.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables.index.$get(args, options))
}

export async function putApiDcimCablesIndex(
  args: InferRequestType<typeof client.api.dcim.cables.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables.index.$put(args, options))
}

export async function postApiDcimCablesIndex(
  args: InferRequestType<typeof client.api.dcim.cables.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables.index.$post(args, options))
}

export async function deleteApiDcimCablesIndex(
  args: InferRequestType<typeof client.api.dcim.cables.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables.index.$delete(args, options))
}

export async function patchApiDcimCablesIndex(
  args: InferRequestType<typeof client.api.dcim.cables.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables.index.$patch(args, options))
}

export async function getApiDcimCablesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.cables)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables[':id'].index.$get(args, options))
}

export async function putApiDcimCablesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.cables)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables[':id'].index.$put(args, options))
}

export async function deleteApiDcimCablesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.cables)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables[':id'].index.$delete(args, options))
}

export async function patchApiDcimCablesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.cables)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.cables[':id'].index.$patch(args, options))
}

export async function getApiDcimConnectedDeviceIndex(
  args: InferRequestType<(typeof client.api.dcim)['connected-device']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['connected-device'].index.$get(args, options))
}

export async function getApiDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-port-templates'].index.$get(args, options))
}

export async function putApiDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-port-templates'].index.$put(args, options))
}

export async function postApiDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-port-templates'].index.$post(args, options))
}

export async function deleteApiDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-port-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-port-templates'].index.$delete(args, options))
}

export async function patchApiDcimConsolePortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-port-templates'].index.$patch(args, options))
}

export async function getApiDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-port-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-port-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-port-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-port-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-port-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimConsolePortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-port-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'].index.$get(args, options))
}

export async function putApiDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'].index.$put(args, options))
}

export async function postApiDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'].index.$post(args, options))
}

export async function deleteApiDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'].index.$delete(args, options))
}

export async function patchApiDcimConsolePortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'].index.$patch(args, options))
}

export async function getApiDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'][':id'].index.$get(args, options))
}

export async function putApiDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'][':id'].index.$put(args, options))
}

export async function deleteApiDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'][':id'].index.$delete(args, options))
}

export async function patchApiDcimConsolePortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-ports'][':id'].index.$patch(args, options))
}

export async function getApiDcimConsolePortsIdTraceIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-ports'][':id']['trace']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-ports'][':id'].trace.index.$get(args, options),
  )
}

export async function getApiDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'].index.$get(args, options),
  )
}

export async function putApiDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'].index.$put(args, options),
  )
}

export async function postApiDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'].index.$post(args, options),
  )
}

export async function deleteApiDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'].index.$delete(args, options),
  )
}

export async function patchApiDcimConsoleServerPortTemplatesIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'].index.$patch(args, options),
  )
}

export async function getApiDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimConsoleServerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-port-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-server-ports'].index.$get(args, options))
}

export async function putApiDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-server-ports'].index.$put(args, options))
}

export async function postApiDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-server-ports'].index.$post(args, options))
}

export async function deleteApiDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-server-ports'].index.$delete(args, options))
}

export async function patchApiDcimConsoleServerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['console-server-ports'].index.$patch(args, options))
}

export async function getApiDcimConsoleServerPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-ports'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimConsoleServerPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['console-server-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-ports'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimConsoleServerPortsIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-ports'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-ports'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimConsoleServerPortsIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-ports'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-ports'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimConsoleServerPortsIdTraceIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['console-server-ports'][':id'].trace.index.$get(args, options),
  )
}

export async function getApiDcimCoolingFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'].index.$get(args, options))
}

export async function putApiDcimCoolingFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'].index.$put(args, options))
}

export async function postApiDcimCoolingFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'].index.$post(args, options))
}

export async function deleteApiDcimCoolingFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'].index.$delete(args, options))
}

export async function patchApiDcimCoolingFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'].index.$patch(args, options))
}

export async function getApiDcimCoolingFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'][':id'].index.$get(args, options))
}

export async function putApiDcimCoolingFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'][':id'].index.$put(args, options))
}

export async function deleteApiDcimCoolingFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'][':id'].index.$delete(args, options))
}

export async function patchApiDcimCoolingFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-feeds'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-feeds'][':id'].index.$patch(args, options))
}

export async function getApiDcimCoolingIntakeTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intake-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intake-templates'].index.$get(args, options))
}

export async function putApiDcimCoolingIntakeTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intake-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intake-templates'].index.$put(args, options))
}

export async function postApiDcimCoolingIntakeTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intake-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intake-templates'].index.$post(args, options))
}

export async function deleteApiDcimCoolingIntakeTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intake-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-intake-templates'].index.$delete(args, options),
  )
}

export async function patchApiDcimCoolingIntakeTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intake-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-intake-templates'].index.$patch(args, options),
  )
}

export async function getApiDcimCoolingIntakeTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-intake-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-intake-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimCoolingIntakeTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-intake-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-intake-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimCoolingIntakeTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-intake-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-intake-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimCoolingIntakeTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-intake-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-intake-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimCoolingIntakesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'].index.$get(args, options))
}

export async function putApiDcimCoolingIntakesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'].index.$put(args, options))
}

export async function postApiDcimCoolingIntakesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'].index.$post(args, options))
}

export async function deleteApiDcimCoolingIntakesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'].index.$delete(args, options))
}

export async function patchApiDcimCoolingIntakesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'].index.$patch(args, options))
}

export async function getApiDcimCoolingIntakesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'][':id'].index.$get(args, options))
}

export async function putApiDcimCoolingIntakesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'][':id'].index.$put(args, options))
}

export async function deleteApiDcimCoolingIntakesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'][':id'].index.$delete(args, options))
}

export async function patchApiDcimCoolingIntakesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-intakes'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-intakes'][':id'].index.$patch(args, options))
}

export async function getApiDcimCoolingOutflowTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflow-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflow-templates'].index.$get(args, options))
}

export async function putApiDcimCoolingOutflowTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflow-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflow-templates'].index.$put(args, options))
}

export async function postApiDcimCoolingOutflowTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflow-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'].index.$post(args, options),
  )
}

export async function deleteApiDcimCoolingOutflowTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflow-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'].index.$delete(args, options),
  )
}

export async function patchApiDcimCoolingOutflowTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflow-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'].index.$patch(args, options),
  )
}

export async function getApiDcimCoolingOutflowTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-outflow-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimCoolingOutflowTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-outflow-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimCoolingOutflowTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-outflow-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimCoolingOutflowTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['cooling-outflow-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflow-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimCoolingOutflowsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'].index.$get(args, options))
}

export async function putApiDcimCoolingOutflowsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'].index.$put(args, options))
}

export async function postApiDcimCoolingOutflowsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'].index.$post(args, options))
}

export async function deleteApiDcimCoolingOutflowsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'].index.$delete(args, options))
}

export async function patchApiDcimCoolingOutflowsIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'].index.$patch(args, options))
}

export async function getApiDcimCoolingOutflowsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'][':id'].index.$get(args, options))
}

export async function putApiDcimCoolingOutflowsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'][':id'].index.$put(args, options))
}

export async function deleteApiDcimCoolingOutflowsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['cooling-outflows'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimCoolingOutflowsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-outflows'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-outflows'][':id'].index.$patch(args, options))
}

export async function getApiDcimCoolingSourcesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'].index.$get(args, options))
}

export async function putApiDcimCoolingSourcesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'].index.$put(args, options))
}

export async function postApiDcimCoolingSourcesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'].index.$post(args, options))
}

export async function deleteApiDcimCoolingSourcesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'].index.$delete(args, options))
}

export async function patchApiDcimCoolingSourcesIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'].index.$patch(args, options))
}

export async function getApiDcimCoolingSourcesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'][':id'].index.$get(args, options))
}

export async function putApiDcimCoolingSourcesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'][':id'].index.$put(args, options))
}

export async function deleteApiDcimCoolingSourcesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'][':id'].index.$delete(args, options))
}

export async function patchApiDcimCoolingSourcesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['cooling-sources'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['cooling-sources'][':id'].index.$patch(args, options))
}

export async function getApiDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bay-templates'].index.$get(args, options))
}

export async function putApiDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bay-templates'].index.$put(args, options))
}

export async function postApiDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bay-templates'].index.$post(args, options))
}

export async function deleteApiDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bay-templates'].index.$delete(args, options))
}

export async function patchApiDcimDeviceBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bay-templates'].index.$patch(args, options))
}

export async function getApiDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['device-bay-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bay-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['device-bay-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['device-bay-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['device-bay-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimDeviceBayTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['device-bay-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['device-bay-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'].index.$get(args, options))
}

export async function putApiDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'].index.$put(args, options))
}

export async function postApiDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'].index.$post(args, options))
}

export async function deleteApiDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'].index.$delete(args, options))
}

export async function patchApiDcimDeviceBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'].index.$patch(args, options))
}

export async function getApiDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'][':id'].index.$get(args, options))
}

export async function putApiDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'][':id'].index.$put(args, options))
}

export async function deleteApiDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'][':id'].index.$delete(args, options))
}

export async function patchApiDcimDeviceBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-bays'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-bays'][':id'].index.$patch(args, options))
}

export async function getApiDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'].index.$get(args, options))
}

export async function putApiDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'].index.$put(args, options))
}

export async function postApiDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'].index.$post(args, options))
}

export async function deleteApiDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'].index.$delete(args, options))
}

export async function patchApiDcimDeviceRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'].index.$patch(args, options))
}

export async function getApiDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'][':id'].index.$get(args, options))
}

export async function putApiDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'][':id'].index.$put(args, options))
}

export async function deleteApiDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'][':id'].index.$delete(args, options))
}

export async function patchApiDcimDeviceRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-roles'][':id'].index.$patch(args, options))
}

export async function getApiDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'].index.$get(args, options))
}

export async function putApiDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'].index.$put(args, options))
}

export async function postApiDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'].index.$post(args, options))
}

export async function deleteApiDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'].index.$delete(args, options))
}

export async function patchApiDcimDeviceTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'].index.$patch(args, options))
}

export async function getApiDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'][':id'].index.$get(args, options))
}

export async function putApiDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'][':id'].index.$put(args, options))
}

export async function deleteApiDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'][':id'].index.$delete(args, options))
}

export async function patchApiDcimDeviceTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['device-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['device-types'][':id'].index.$patch(args, options))
}

export async function getApiDcimDevicesIndex(
  args: InferRequestType<typeof client.api.dcim.devices.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices.index.$get(args, options))
}

export async function putApiDcimDevicesIndex(
  args: InferRequestType<typeof client.api.dcim.devices.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices.index.$put(args, options))
}

export async function postApiDcimDevicesIndex(
  args: InferRequestType<typeof client.api.dcim.devices.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices.index.$post(args, options))
}

export async function deleteApiDcimDevicesIndex(
  args: InferRequestType<typeof client.api.dcim.devices.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices.index.$delete(args, options))
}

export async function patchApiDcimDevicesIndex(
  args: InferRequestType<typeof client.api.dcim.devices.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices.index.$patch(args, options))
}

export async function getApiDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.devices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices[':id'].index.$get(args, options))
}

export async function putApiDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.devices)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices[':id'].index.$put(args, options))
}

export async function deleteApiDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.devices)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices[':id'].index.$delete(args, options))
}

export async function patchApiDcimDevicesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.devices)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.devices[':id'].index.$patch(args, options))
}

export async function postApiDcimDevicesIdRenderConfigIndex(
  args: InferRequestType<
    (typeof client.api.dcim.devices)[':id']['render-config']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim.devices[':id']['render-config'].index.$post(args, options),
  )
}

export async function getApiDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-port-templates'].index.$get(args, options))
}

export async function putApiDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-port-templates'].index.$put(args, options))
}

export async function postApiDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-port-templates'].index.$post(args, options))
}

export async function deleteApiDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-port-templates'].index.$delete(args, options))
}

export async function patchApiDcimFrontPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-port-templates'].index.$patch(args, options))
}

export async function getApiDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['front-port-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['front-port-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['front-port-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['front-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimFrontPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['front-port-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['front-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'].index.$get(args, options))
}

export async function putApiDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'].index.$put(args, options))
}

export async function postApiDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'].index.$post(args, options))
}

export async function deleteApiDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'].index.$delete(args, options))
}

export async function patchApiDcimFrontPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'].index.$patch(args, options))
}

export async function getApiDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'][':id'].index.$get(args, options))
}

export async function putApiDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'][':id'].index.$put(args, options))
}

export async function deleteApiDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'][':id'].index.$delete(args, options))
}

export async function patchApiDcimFrontPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'][':id'].index.$patch(args, options))
}

export async function getApiDcimFrontPortsIdPathsIndex(
  args: InferRequestType<(typeof client.api.dcim)['front-ports'][':id']['paths']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['front-ports'][':id'].paths.index.$get(args, options))
}

export async function getApiDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['interface-templates'].index.$get(args, options))
}

export async function putApiDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['interface-templates'].index.$put(args, options))
}

export async function postApiDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['interface-templates'].index.$post(args, options))
}

export async function deleteApiDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['interface-templates'].index.$delete(args, options))
}

export async function patchApiDcimInterfaceTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['interface-templates'].index.$patch(args, options))
}

export async function getApiDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['interface-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['interface-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['interface-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['interface-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimInterfaceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['interface-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['interface-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimInterfacesIndex(
  args: InferRequestType<typeof client.api.dcim.interfaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces.index.$get(args, options))
}

export async function putApiDcimInterfacesIndex(
  args: InferRequestType<typeof client.api.dcim.interfaces.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces.index.$put(args, options))
}

export async function postApiDcimInterfacesIndex(
  args: InferRequestType<typeof client.api.dcim.interfaces.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces.index.$post(args, options))
}

export async function deleteApiDcimInterfacesIndex(
  args: InferRequestType<typeof client.api.dcim.interfaces.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces.index.$delete(args, options))
}

export async function patchApiDcimInterfacesIndex(
  args: InferRequestType<typeof client.api.dcim.interfaces.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces.index.$patch(args, options))
}

export async function getApiDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.interfaces)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces[':id'].index.$get(args, options))
}

export async function putApiDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.interfaces)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces[':id'].index.$put(args, options))
}

export async function deleteApiDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.interfaces)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces[':id'].index.$delete(args, options))
}

export async function patchApiDcimInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.interfaces)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces[':id'].index.$patch(args, options))
}

export async function getApiDcimInterfacesIdTraceIndex(
  args: InferRequestType<(typeof client.api.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.interfaces[':id'].trace.index.$get(args, options))
}

export async function getApiDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-roles'].index.$get(args, options))
}

export async function putApiDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-roles'].index.$put(args, options))
}

export async function postApiDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-roles'].index.$post(args, options))
}

export async function deleteApiDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-roles'].index.$delete(args, options))
}

export async function patchApiDcimInventoryItemRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-roles'].index.$patch(args, options))
}

export async function getApiDcimInventoryItemRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-roles'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimInventoryItemRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-roles'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimInventoryItemRolesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['inventory-item-roles'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-roles'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimInventoryItemRolesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['inventory-item-roles'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-roles'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-templates'].index.$get(args, options))
}

export async function putApiDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-templates'].index.$put(args, options))
}

export async function postApiDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-item-templates'].index.$post(args, options))
}

export async function deleteApiDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-templates'].index.$delete(args, options),
  )
}

export async function patchApiDcimInventoryItemTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-item-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-templates'].index.$patch(args, options),
  )
}

export async function getApiDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['inventory-item-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['inventory-item-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['inventory-item-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimInventoryItemTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['inventory-item-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['inventory-item-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'].index.$get(args, options))
}

export async function putApiDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'].index.$put(args, options))
}

export async function postApiDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'].index.$post(args, options))
}

export async function deleteApiDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'].index.$delete(args, options))
}

export async function patchApiDcimInventoryItemsIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'].index.$patch(args, options))
}

export async function getApiDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'][':id'].index.$get(args, options))
}

export async function putApiDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'][':id'].index.$put(args, options))
}

export async function deleteApiDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'][':id'].index.$delete(args, options))
}

export async function patchApiDcimInventoryItemsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['inventory-items'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['inventory-items'][':id'].index.$patch(args, options))
}

export async function getApiDcimLocationsIndex(
  args: InferRequestType<typeof client.api.dcim.locations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations.index.$get(args, options))
}

export async function putApiDcimLocationsIndex(
  args: InferRequestType<typeof client.api.dcim.locations.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations.index.$put(args, options))
}

export async function postApiDcimLocationsIndex(
  args: InferRequestType<typeof client.api.dcim.locations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations.index.$post(args, options))
}

export async function deleteApiDcimLocationsIndex(
  args: InferRequestType<typeof client.api.dcim.locations.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations.index.$delete(args, options))
}

export async function patchApiDcimLocationsIndex(
  args: InferRequestType<typeof client.api.dcim.locations.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations.index.$patch(args, options))
}

export async function getApiDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.locations)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations[':id'].index.$get(args, options))
}

export async function putApiDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.locations)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations[':id'].index.$put(args, options))
}

export async function deleteApiDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.locations)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations[':id'].index.$delete(args, options))
}

export async function patchApiDcimLocationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.locations)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.locations[':id'].index.$patch(args, options))
}

export async function getApiDcimMacAddressesIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'].index.$get(args, options))
}

export async function putApiDcimMacAddressesIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'].index.$put(args, options))
}

export async function postApiDcimMacAddressesIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'].index.$post(args, options))
}

export async function deleteApiDcimMacAddressesIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'].index.$delete(args, options))
}

export async function patchApiDcimMacAddressesIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'].index.$patch(args, options))
}

export async function getApiDcimMacAddressesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'][':id'].index.$get(args, options))
}

export async function putApiDcimMacAddressesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'][':id'].index.$put(args, options))
}

export async function deleteApiDcimMacAddressesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'][':id'].index.$delete(args, options))
}

export async function patchApiDcimMacAddressesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['mac-addresses'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['mac-addresses'][':id'].index.$patch(args, options))
}

export async function getApiDcimManufacturersIndex(
  args: InferRequestType<typeof client.api.dcim.manufacturers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers.index.$get(args, options))
}

export async function putApiDcimManufacturersIndex(
  args: InferRequestType<typeof client.api.dcim.manufacturers.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers.index.$put(args, options))
}

export async function postApiDcimManufacturersIndex(
  args: InferRequestType<typeof client.api.dcim.manufacturers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers.index.$post(args, options))
}

export async function deleteApiDcimManufacturersIndex(
  args: InferRequestType<typeof client.api.dcim.manufacturers.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers.index.$delete(args, options))
}

export async function patchApiDcimManufacturersIndex(
  args: InferRequestType<typeof client.api.dcim.manufacturers.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers.index.$patch(args, options))
}

export async function getApiDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.api.dcim.manufacturers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers[':id'].index.$get(args, options))
}

export async function putApiDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.api.dcim.manufacturers)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers[':id'].index.$put(args, options))
}

export async function deleteApiDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.api.dcim.manufacturers)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers[':id'].index.$delete(args, options))
}

export async function patchApiDcimManufacturersIdIndex(
  args: InferRequestType<(typeof client.api.dcim.manufacturers)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.manufacturers[':id'].index.$patch(args, options))
}

export async function getApiDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-templates'].index.$get(args, options))
}

export async function putApiDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-templates'].index.$put(args, options))
}

export async function postApiDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-templates'].index.$post(args, options))
}

export async function deleteApiDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-templates'].index.$delete(args, options))
}

export async function patchApiDcimModuleBayTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-templates'].index.$patch(args, options))
}

export async function getApiDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-bay-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-bay-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['module-bay-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-bay-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimModuleBayTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['module-bay-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-bay-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimModuleBayTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'].index.$get(args, options))
}

export async function putApiDcimModuleBayTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'].index.$put(args, options))
}

export async function postApiDcimModuleBayTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'].index.$post(args, options))
}

export async function deleteApiDcimModuleBayTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'].index.$delete(args, options))
}

export async function patchApiDcimModuleBayTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'].index.$patch(args, options))
}

export async function getApiDcimModuleBayTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'][':id'].index.$get(args, options))
}

export async function putApiDcimModuleBayTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'][':id'].index.$put(args, options))
}

export async function deleteApiDcimModuleBayTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-bay-types'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimModuleBayTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bay-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bay-types'][':id'].index.$patch(args, options))
}

export async function getApiDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'].index.$get(args, options))
}

export async function putApiDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'].index.$put(args, options))
}

export async function postApiDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'].index.$post(args, options))
}

export async function deleteApiDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'].index.$delete(args, options))
}

export async function patchApiDcimModuleBaysIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'].index.$patch(args, options))
}

export async function getApiDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'][':id'].index.$get(args, options))
}

export async function putApiDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'][':id'].index.$put(args, options))
}

export async function deleteApiDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'][':id'].index.$delete(args, options))
}

export async function patchApiDcimModuleBaysIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-bays'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-bays'][':id'].index.$patch(args, options))
}

export async function getApiDcimModuleTypeProfilesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-type-profiles'].index.$get(args, options))
}

export async function putApiDcimModuleTypeProfilesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-type-profiles'].index.$put(args, options))
}

export async function postApiDcimModuleTypeProfilesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-type-profiles'].index.$post(args, options))
}

export async function deleteApiDcimModuleTypeProfilesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-type-profiles'].index.$delete(args, options))
}

export async function patchApiDcimModuleTypeProfilesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-type-profiles'].index.$patch(args, options))
}

export async function getApiDcimModuleTypeProfilesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-type-profiles'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimModuleTypeProfilesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-type-profiles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-type-profiles'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimModuleTypeProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['module-type-profiles'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-type-profiles'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimModuleTypeProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['module-type-profiles'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['module-type-profiles'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'].index.$get(args, options))
}

export async function putApiDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'].index.$put(args, options))
}

export async function postApiDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'].index.$post(args, options))
}

export async function deleteApiDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'].index.$delete(args, options))
}

export async function patchApiDcimModuleTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'].index.$patch(args, options))
}

export async function getApiDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'][':id'].index.$get(args, options))
}

export async function putApiDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'][':id'].index.$put(args, options))
}

export async function deleteApiDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'][':id'].index.$delete(args, options))
}

export async function patchApiDcimModuleTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['module-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['module-types'][':id'].index.$patch(args, options))
}

export async function getApiDcimModulesIndex(
  args: InferRequestType<typeof client.api.dcim.modules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules.index.$get(args, options))
}

export async function putApiDcimModulesIndex(
  args: InferRequestType<typeof client.api.dcim.modules.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules.index.$put(args, options))
}

export async function postApiDcimModulesIndex(
  args: InferRequestType<typeof client.api.dcim.modules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules.index.$post(args, options))
}

export async function deleteApiDcimModulesIndex(
  args: InferRequestType<typeof client.api.dcim.modules.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules.index.$delete(args, options))
}

export async function patchApiDcimModulesIndex(
  args: InferRequestType<typeof client.api.dcim.modules.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules.index.$patch(args, options))
}

export async function getApiDcimModulesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.modules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules[':id'].index.$get(args, options))
}

export async function putApiDcimModulesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.modules)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules[':id'].index.$put(args, options))
}

export async function deleteApiDcimModulesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.modules)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules[':id'].index.$delete(args, options))
}

export async function patchApiDcimModulesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.modules)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.modules[':id'].index.$patch(args, options))
}

export async function getApiDcimPlatformsIndex(
  args: InferRequestType<typeof client.api.dcim.platforms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms.index.$get(args, options))
}

export async function putApiDcimPlatformsIndex(
  args: InferRequestType<typeof client.api.dcim.platforms.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms.index.$put(args, options))
}

export async function postApiDcimPlatformsIndex(
  args: InferRequestType<typeof client.api.dcim.platforms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms.index.$post(args, options))
}

export async function deleteApiDcimPlatformsIndex(
  args: InferRequestType<typeof client.api.dcim.platforms.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms.index.$delete(args, options))
}

export async function patchApiDcimPlatformsIndex(
  args: InferRequestType<typeof client.api.dcim.platforms.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms.index.$patch(args, options))
}

export async function getApiDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.platforms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms[':id'].index.$get(args, options))
}

export async function putApiDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.platforms)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms[':id'].index.$put(args, options))
}

export async function deleteApiDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.platforms)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms[':id'].index.$delete(args, options))
}

export async function patchApiDcimPlatformsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.platforms)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.platforms[':id'].index.$patch(args, options))
}

export async function getApiDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'].index.$get(args, options))
}

export async function putApiDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'].index.$put(args, options))
}

export async function postApiDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'].index.$post(args, options))
}

export async function deleteApiDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'].index.$delete(args, options))
}

export async function patchApiDcimPowerFeedsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'].index.$patch(args, options))
}

export async function getApiDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'][':id'].index.$get(args, options))
}

export async function putApiDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'][':id'].index.$put(args, options))
}

export async function deleteApiDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'][':id'].index.$delete(args, options))
}

export async function patchApiDcimPowerFeedsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'][':id'].index.$patch(args, options))
}

export async function getApiDcimPowerFeedsIdTraceIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-feeds'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-feeds'][':id'].trace.index.$get(args, options))
}

export async function getApiDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlet-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlet-templates'].index.$get(args, options))
}

export async function putApiDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlet-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlet-templates'].index.$put(args, options))
}

export async function postApiDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlet-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlet-templates'].index.$post(args, options))
}

export async function deleteApiDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlet-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlet-templates'].index.$delete(args, options))
}

export async function patchApiDcimPowerOutletTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlet-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlet-templates'].index.$patch(args, options))
}

export async function getApiDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-outlet-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-outlet-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-outlet-templates'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-outlet-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-outlet-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-outlet-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimPowerOutletTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-outlet-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-outlet-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'].index.$get(args, options))
}

export async function putApiDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'].index.$put(args, options))
}

export async function postApiDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'].index.$post(args, options))
}

export async function deleteApiDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'].index.$delete(args, options))
}

export async function patchApiDcimPowerOutletsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'].index.$patch(args, options))
}

export async function getApiDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'][':id'].index.$get(args, options))
}

export async function putApiDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'][':id'].index.$put(args, options))
}

export async function deleteApiDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'][':id'].index.$delete(args, options))
}

export async function patchApiDcimPowerOutletsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-outlets'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-outlets'][':id'].index.$patch(args, options))
}

export async function getApiDcimPowerOutletsIdTraceIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-outlets'][':id']['trace']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-outlets'][':id'].trace.index.$get(args, options),
  )
}

export async function getApiDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'].index.$get(args, options))
}

export async function putApiDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'].index.$put(args, options))
}

export async function postApiDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'].index.$post(args, options))
}

export async function deleteApiDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'].index.$delete(args, options))
}

export async function patchApiDcimPowerPanelsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'].index.$patch(args, options))
}

export async function getApiDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'][':id'].index.$get(args, options))
}

export async function putApiDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'][':id'].index.$put(args, options))
}

export async function deleteApiDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'][':id'].index.$delete(args, options))
}

export async function patchApiDcimPowerPanelsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-panels'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-panels'][':id'].index.$patch(args, options))
}

export async function getApiDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-port-templates'].index.$get(args, options))
}

export async function putApiDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-port-templates'].index.$put(args, options))
}

export async function postApiDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-port-templates'].index.$post(args, options))
}

export async function deleteApiDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-port-templates'].index.$delete(args, options))
}

export async function patchApiDcimPowerPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-port-templates'].index.$patch(args, options))
}

export async function getApiDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-port-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-port-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-port-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimPowerPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['power-port-templates'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['power-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'].index.$get(args, options))
}

export async function putApiDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'].index.$put(args, options))
}

export async function postApiDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'].index.$post(args, options))
}

export async function deleteApiDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'].index.$delete(args, options))
}

export async function patchApiDcimPowerPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'].index.$patch(args, options))
}

export async function getApiDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'][':id'].index.$get(args, options))
}

export async function putApiDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'][':id'].index.$put(args, options))
}

export async function deleteApiDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'][':id'].index.$delete(args, options))
}

export async function patchApiDcimPowerPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'][':id'].index.$patch(args, options))
}

export async function getApiDcimPowerPortsIdTraceIndex(
  args: InferRequestType<(typeof client.api.dcim)['power-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['power-ports'][':id'].trace.index.$get(args, options))
}

export async function getApiDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'].index.$get(args, options))
}

export async function putApiDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'].index.$put(args, options))
}

export async function postApiDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'].index.$post(args, options))
}

export async function deleteApiDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'].index.$delete(args, options))
}

export async function patchApiDcimRackGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'].index.$patch(args, options))
}

export async function getApiDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'][':id'].index.$get(args, options))
}

export async function putApiDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'][':id'].index.$put(args, options))
}

export async function deleteApiDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'][':id'].index.$delete(args, options))
}

export async function patchApiDcimRackGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-groups'][':id'].index.$patch(args, options))
}

export async function getApiDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'].index.$get(args, options))
}

export async function putApiDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'].index.$put(args, options))
}

export async function postApiDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'].index.$post(args, options))
}

export async function deleteApiDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'].index.$delete(args, options))
}

export async function patchApiDcimRackReservationsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'].index.$patch(args, options))
}

export async function getApiDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'][':id'].index.$get(args, options))
}

export async function putApiDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-reservations'][':id'].index.$put(args, options))
}

export async function deleteApiDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['rack-reservations'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimRackReservationsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-reservations'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['rack-reservations'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimRackRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'].index.$get(args, options))
}

export async function putApiDcimRackRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'].index.$put(args, options))
}

export async function postApiDcimRackRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'].index.$post(args, options))
}

export async function deleteApiDcimRackRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'].index.$delete(args, options))
}

export async function patchApiDcimRackRolesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'].index.$patch(args, options))
}

export async function getApiDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'][':id'].index.$get(args, options))
}

export async function putApiDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'][':id'].index.$put(args, options))
}

export async function deleteApiDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'][':id'].index.$delete(args, options))
}

export async function patchApiDcimRackRolesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-roles'][':id'].index.$patch(args, options))
}

export async function getApiDcimRackTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'].index.$get(args, options))
}

export async function putApiDcimRackTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'].index.$put(args, options))
}

export async function postApiDcimRackTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'].index.$post(args, options))
}

export async function deleteApiDcimRackTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'].index.$delete(args, options))
}

export async function patchApiDcimRackTypesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'].index.$patch(args, options))
}

export async function getApiDcimRackTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'][':id'].index.$get(args, options))
}

export async function putApiDcimRackTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'][':id'].index.$put(args, options))
}

export async function deleteApiDcimRackTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'][':id'].index.$delete(args, options))
}

export async function patchApiDcimRackTypesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rack-types'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rack-types'][':id'].index.$patch(args, options))
}

export async function getApiDcimRacksIndex(
  args: InferRequestType<typeof client.api.dcim.racks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks.index.$get(args, options))
}

export async function putApiDcimRacksIndex(
  args: InferRequestType<typeof client.api.dcim.racks.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks.index.$put(args, options))
}

export async function postApiDcimRacksIndex(
  args: InferRequestType<typeof client.api.dcim.racks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks.index.$post(args, options))
}

export async function deleteApiDcimRacksIndex(
  args: InferRequestType<typeof client.api.dcim.racks.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks.index.$delete(args, options))
}

export async function patchApiDcimRacksIndex(
  args: InferRequestType<typeof client.api.dcim.racks.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks.index.$patch(args, options))
}

export async function getApiDcimRacksIdIndex(
  args: InferRequestType<(typeof client.api.dcim.racks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks[':id'].index.$get(args, options))
}

export async function putApiDcimRacksIdIndex(
  args: InferRequestType<(typeof client.api.dcim.racks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks[':id'].index.$put(args, options))
}

export async function deleteApiDcimRacksIdIndex(
  args: InferRequestType<(typeof client.api.dcim.racks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks[':id'].index.$delete(args, options))
}

export async function patchApiDcimRacksIdIndex(
  args: InferRequestType<(typeof client.api.dcim.racks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks[':id'].index.$patch(args, options))
}

export async function getApiDcimRacksIdElevationIndex(
  args: InferRequestType<(typeof client.api.dcim.racks)[':id']['elevation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.racks[':id'].elevation.index.$get(args, options))
}

export async function getApiDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-port-templates'].index.$get(args, options))
}

export async function putApiDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-port-templates'].index.$put(args, options))
}

export async function postApiDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-port-templates'].index.$post(args, options))
}

export async function deleteApiDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-port-templates'].index.$delete(args, options))
}

export async function patchApiDcimRearPortTemplatesIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-port-templates'].index.$patch(args, options))
}

export async function getApiDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['rear-port-templates'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['rear-port-templates'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimRearPortTemplatesIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['rear-port-templates'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['rear-port-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimRearPortTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-port-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['rear-port-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiDcimRearPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'].index.$get(args, options))
}

export async function putApiDcimRearPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'].index.$put(args, options))
}

export async function postApiDcimRearPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'].index.$post(args, options))
}

export async function deleteApiDcimRearPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'].index.$delete(args, options))
}

export async function patchApiDcimRearPortsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'].index.$patch(args, options))
}

export async function getApiDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'][':id'].index.$get(args, options))
}

export async function putApiDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'][':id'].index.$put(args, options))
}

export async function deleteApiDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'][':id'].index.$delete(args, options))
}

export async function patchApiDcimRearPortsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'][':id'].index.$patch(args, options))
}

export async function getApiDcimRearPortsIdPathsIndex(
  args: InferRequestType<(typeof client.api.dcim)['rear-ports'][':id']['paths']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['rear-ports'][':id'].paths.index.$get(args, options))
}

export async function getApiDcimRegionsIndex(
  args: InferRequestType<typeof client.api.dcim.regions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions.index.$get(args, options))
}

export async function putApiDcimRegionsIndex(
  args: InferRequestType<typeof client.api.dcim.regions.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions.index.$put(args, options))
}

export async function postApiDcimRegionsIndex(
  args: InferRequestType<typeof client.api.dcim.regions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions.index.$post(args, options))
}

export async function deleteApiDcimRegionsIndex(
  args: InferRequestType<typeof client.api.dcim.regions.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions.index.$delete(args, options))
}

export async function patchApiDcimRegionsIndex(
  args: InferRequestType<typeof client.api.dcim.regions.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions.index.$patch(args, options))
}

export async function getApiDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.regions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions[':id'].index.$get(args, options))
}

export async function putApiDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.regions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions[':id'].index.$put(args, options))
}

export async function deleteApiDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.regions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions[':id'].index.$delete(args, options))
}

export async function patchApiDcimRegionsIdIndex(
  args: InferRequestType<(typeof client.api.dcim.regions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.regions[':id'].index.$patch(args, options))
}

export async function getApiDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'].index.$get(args, options))
}

export async function putApiDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'].index.$put(args, options))
}

export async function postApiDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'].index.$post(args, options))
}

export async function deleteApiDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'].index.$delete(args, options))
}

export async function patchApiDcimSiteGroupsIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'].index.$patch(args, options))
}

export async function getApiDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'][':id'].index.$get(args, options))
}

export async function putApiDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'][':id'].index.$put(args, options))
}

export async function deleteApiDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'][':id'].index.$delete(args, options))
}

export async function patchApiDcimSiteGroupsIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['site-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['site-groups'][':id'].index.$patch(args, options))
}

export async function getApiDcimSitesIndex(
  args: InferRequestType<typeof client.api.dcim.sites.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites.index.$get(args, options))
}

export async function putApiDcimSitesIndex(
  args: InferRequestType<typeof client.api.dcim.sites.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites.index.$put(args, options))
}

export async function postApiDcimSitesIndex(
  args: InferRequestType<typeof client.api.dcim.sites.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites.index.$post(args, options))
}

export async function deleteApiDcimSitesIndex(
  args: InferRequestType<typeof client.api.dcim.sites.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites.index.$delete(args, options))
}

export async function patchApiDcimSitesIndex(
  args: InferRequestType<typeof client.api.dcim.sites.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites.index.$patch(args, options))
}

export async function getApiDcimSitesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.sites)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites[':id'].index.$get(args, options))
}

export async function putApiDcimSitesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.sites)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites[':id'].index.$put(args, options))
}

export async function deleteApiDcimSitesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.sites)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites[':id'].index.$delete(args, options))
}

export async function patchApiDcimSitesIdIndex(
  args: InferRequestType<(typeof client.api.dcim.sites)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim.sites[':id'].index.$patch(args, options))
}

export async function getApiDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'].index.$get(args, options))
}

export async function putApiDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'].index.$put(args, options))
}

export async function postApiDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'].index.$post(args, options))
}

export async function deleteApiDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'].index.$delete(args, options))
}

export async function patchApiDcimVirtualChassisIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'].index.$patch(args, options))
}

export async function getApiDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'][':id'].index.$get(args, options))
}

export async function putApiDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'][':id'].index.$put(args, options))
}

export async function deleteApiDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'][':id'].index.$delete(args, options))
}

export async function patchApiDcimVirtualChassisIdIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-chassis'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-chassis'][':id'].index.$patch(args, options))
}

export async function getApiDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-device-contexts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-device-contexts'].index.$get(args, options))
}

export async function putApiDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-device-contexts']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-device-contexts'].index.$put(args, options))
}

export async function postApiDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-device-contexts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-device-contexts'].index.$post(args, options))
}

export async function deleteApiDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-device-contexts']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['virtual-device-contexts'].index.$delete(args, options),
  )
}

export async function patchApiDcimVirtualDeviceContextsIndex(
  args: InferRequestType<(typeof client.api.dcim)['virtual-device-contexts']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dcim['virtual-device-contexts'].index.$patch(args, options))
}

export async function getApiDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['virtual-device-contexts'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['virtual-device-contexts'][':id'].index.$get(args, options),
  )
}

export async function putApiDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['virtual-device-contexts'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['virtual-device-contexts'][':id'].index.$put(args, options),
  )
}

export async function deleteApiDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['virtual-device-contexts'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['virtual-device-contexts'][':id'].index.$delete(args, options),
  )
}

export async function patchApiDcimVirtualDeviceContextsIdIndex(
  args: InferRequestType<
    (typeof client.api.dcim)['virtual-device-contexts'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.dcim['virtual-device-contexts'][':id'].index.$patch(args, options),
  )
}

export async function getApiExtrasBookmarksIndex(
  args: InferRequestType<typeof client.api.extras.bookmarks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks.index.$get(args, options))
}

export async function putApiExtrasBookmarksIndex(
  args: InferRequestType<typeof client.api.extras.bookmarks.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks.index.$put(args, options))
}

export async function postApiExtrasBookmarksIndex(
  args: InferRequestType<typeof client.api.extras.bookmarks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks.index.$post(args, options))
}

export async function deleteApiExtrasBookmarksIndex(
  args: InferRequestType<typeof client.api.extras.bookmarks.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks.index.$delete(args, options))
}

export async function patchApiExtrasBookmarksIndex(
  args: InferRequestType<typeof client.api.extras.bookmarks.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks.index.$patch(args, options))
}

export async function getApiExtrasBookmarksIdIndex(
  args: InferRequestType<(typeof client.api.extras.bookmarks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks[':id'].index.$get(args, options))
}

export async function putApiExtrasBookmarksIdIndex(
  args: InferRequestType<(typeof client.api.extras.bookmarks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks[':id'].index.$put(args, options))
}

export async function deleteApiExtrasBookmarksIdIndex(
  args: InferRequestType<(typeof client.api.extras.bookmarks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks[':id'].index.$delete(args, options))
}

export async function patchApiExtrasBookmarksIdIndex(
  args: InferRequestType<(typeof client.api.extras.bookmarks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.bookmarks[':id'].index.$patch(args, options))
}

export async function getApiExtrasConfigContextProfilesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-context-profiles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-context-profiles'].index.$get(args, options))
}

export async function putApiExtrasConfigContextProfilesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-context-profiles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-context-profiles'].index.$put(args, options))
}

export async function postApiExtrasConfigContextProfilesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-context-profiles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'].index.$post(args, options),
  )
}

export async function deleteApiExtrasConfigContextProfilesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-context-profiles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'].index.$delete(args, options),
  )
}

export async function patchApiExtrasConfigContextProfilesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-context-profiles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'].index.$patch(args, options),
  )
}

export async function getApiExtrasConfigContextProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-context-profiles'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'][':id'].index.$get(args, options),
  )
}

export async function putApiExtrasConfigContextProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-context-profiles'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'][':id'].index.$put(args, options),
  )
}

export async function deleteApiExtrasConfigContextProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-context-profiles'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasConfigContextProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-context-profiles'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'][':id'].index.$patch(args, options),
  )
}

export async function postApiExtrasConfigContextProfilesIdSyncIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-context-profiles'][':id']['sync']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-context-profiles'][':id'].sync.index.$post(args, options),
  )
}

export async function getApiExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'].index.$get(args, options))
}

export async function putApiExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'].index.$put(args, options))
}

export async function postApiExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'].index.$post(args, options))
}

export async function deleteApiExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'].index.$delete(args, options))
}

export async function patchApiExtrasConfigContextsIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'].index.$patch(args, options))
}

export async function getApiExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'][':id'].index.$get(args, options))
}

export async function putApiExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-contexts'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-contexts'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasConfigContextsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-contexts'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-contexts'][':id'].index.$patch(args, options),
  )
}

export async function postApiExtrasConfigContextsIdSyncIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-contexts'][':id']['sync']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-contexts'][':id'].sync.index.$post(args, options),
  )
}

export async function getApiExtrasConfigTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'].index.$get(args, options))
}

export async function putApiExtrasConfigTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'].index.$put(args, options))
}

export async function postApiExtrasConfigTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'].index.$post(args, options))
}

export async function deleteApiExtrasConfigTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'].index.$delete(args, options))
}

export async function patchApiExtrasConfigTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'].index.$patch(args, options))
}

export async function getApiExtrasConfigTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'][':id'].index.$get(args, options))
}

export async function putApiExtrasConfigTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['config-templates'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasConfigTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasConfigTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['config-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-templates'][':id'].index.$patch(args, options),
  )
}

export async function postApiExtrasConfigTemplatesIdRenderIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-templates'][':id']['render']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-templates'][':id'].render.index.$post(args, options),
  )
}

export async function postApiExtrasConfigTemplatesIdSyncIndex(
  args: InferRequestType<
    (typeof client.api.extras)['config-templates'][':id']['sync']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['config-templates'][':id'].sync.index.$post(args, options),
  )
}

export async function getApiExtrasCustomFieldChoiceSetsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-field-choice-sets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'].index.$get(args, options),
  )
}

export async function putApiExtrasCustomFieldChoiceSetsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-field-choice-sets']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'].index.$put(args, options),
  )
}

export async function postApiExtrasCustomFieldChoiceSetsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-field-choice-sets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'].index.$post(args, options),
  )
}

export async function deleteApiExtrasCustomFieldChoiceSetsIndex(
  args: InferRequestType<
    (typeof client.api.extras)['custom-field-choice-sets']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'].index.$delete(args, options),
  )
}

export async function patchApiExtrasCustomFieldChoiceSetsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-field-choice-sets']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'].index.$patch(args, options),
  )
}

export async function getApiExtrasCustomFieldChoiceSetsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['custom-field-choice-sets'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'][':id'].index.$get(args, options),
  )
}

export async function putApiExtrasCustomFieldChoiceSetsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['custom-field-choice-sets'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'][':id'].index.$put(args, options),
  )
}

export async function deleteApiExtrasCustomFieldChoiceSetsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['custom-field-choice-sets'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasCustomFieldChoiceSetsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['custom-field-choice-sets'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'][':id'].index.$patch(args, options),
  )
}

export async function getApiExtrasCustomFieldChoiceSetsIdChoicesIndex(
  args: InferRequestType<
    (typeof client.api.extras)['custom-field-choice-sets'][':id']['choices']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['custom-field-choice-sets'][':id'].choices.index.$get(args, options),
  )
}

export async function getApiExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'].index.$get(args, options))
}

export async function putApiExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'].index.$put(args, options))
}

export async function postApiExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'].index.$post(args, options))
}

export async function deleteApiExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'].index.$delete(args, options))
}

export async function patchApiExtrasCustomFieldsIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'].index.$patch(args, options))
}

export async function getApiExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'][':id'].index.$get(args, options))
}

export async function putApiExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'][':id'].index.$delete(args, options))
}

export async function patchApiExtrasCustomFieldsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-fields'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-fields'][':id'].index.$patch(args, options))
}

export async function getApiExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'].index.$get(args, options))
}

export async function putApiExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'].index.$put(args, options))
}

export async function postApiExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'].index.$post(args, options))
}

export async function deleteApiExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'].index.$delete(args, options))
}

export async function patchApiExtrasCustomLinksIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'].index.$patch(args, options))
}

export async function getApiExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'][':id'].index.$get(args, options))
}

export async function putApiExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'][':id'].index.$delete(args, options))
}

export async function patchApiExtrasCustomLinksIdIndex(
  args: InferRequestType<(typeof client.api.extras)['custom-links'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['custom-links'][':id'].index.$patch(args, options))
}

export async function getApiExtrasDashboardIndex(
  args: InferRequestType<typeof client.api.extras.dashboard.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.dashboard.index.$get(args, options))
}

export async function putApiExtrasDashboardIndex(
  args: InferRequestType<typeof client.api.extras.dashboard.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.dashboard.index.$put(args, options))
}

export async function deleteApiExtrasDashboardIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.extras.dashboard.index.$delete(undefined, options))
}

export async function patchApiExtrasDashboardIndex(
  args: InferRequestType<typeof client.api.extras.dashboard.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.dashboard.index.$patch(args, options))
}

export async function getApiExtrasEventRulesIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'].index.$get(args, options))
}

export async function putApiExtrasEventRulesIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'].index.$put(args, options))
}

export async function postApiExtrasEventRulesIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'].index.$post(args, options))
}

export async function deleteApiExtrasEventRulesIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'].index.$delete(args, options))
}

export async function patchApiExtrasEventRulesIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'].index.$patch(args, options))
}

export async function getApiExtrasEventRulesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'][':id'].index.$get(args, options))
}

export async function putApiExtrasEventRulesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasEventRulesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'][':id'].index.$delete(args, options))
}

export async function patchApiExtrasEventRulesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['event-rules'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['event-rules'][':id'].index.$patch(args, options))
}

export async function getApiExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'].index.$get(args, options))
}

export async function putApiExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'].index.$put(args, options))
}

export async function postApiExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'].index.$post(args, options))
}

export async function deleteApiExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'].index.$delete(args, options))
}

export async function patchApiExtrasExportTemplatesIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'].index.$patch(args, options))
}

export async function getApiExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'][':id'].index.$get(args, options))
}

export async function putApiExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['export-templates'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['export-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasExportTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['export-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['export-templates'][':id'].index.$patch(args, options),
  )
}

export async function postApiExtrasExportTemplatesIdSyncIndex(
  args: InferRequestType<
    (typeof client.api.extras)['export-templates'][':id']['sync']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['export-templates'][':id'].sync.index.$post(args, options),
  )
}

export async function getApiExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['image-attachments'].index.$get(args, options))
}

export async function putApiExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['image-attachments'].index.$put(args, options))
}

export async function postApiExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['image-attachments'].index.$post(args, options))
}

export async function deleteApiExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['image-attachments'].index.$delete(args, options))
}

export async function patchApiExtrasImageAttachmentsIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['image-attachments'].index.$patch(args, options))
}

export async function getApiExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['image-attachments'][':id'].index.$get(args, options),
  )
}

export async function putApiExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['image-attachments'][':id'].index.$put(args, options),
  )
}

export async function deleteApiExtrasImageAttachmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['image-attachments'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['image-attachments'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasImageAttachmentsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['image-attachments'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['image-attachments'][':id'].index.$patch(args, options),
  )
}

export async function getApiExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'].index.$get(args, options))
}

export async function putApiExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'].index.$put(args, options))
}

export async function postApiExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'].index.$post(args, options))
}

export async function deleteApiExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'].index.$delete(args, options))
}

export async function patchApiExtrasJournalEntriesIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'].index.$patch(args, options))
}

export async function getApiExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'][':id'].index.$get(args, options))
}

export async function putApiExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['journal-entries'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['journal-entries'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasJournalEntriesIdIndex(
  args: InferRequestType<(typeof client.api.extras)['journal-entries'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['journal-entries'][':id'].index.$patch(args, options),
  )
}

export async function getApiExtrasNotificationGroupsIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['notification-groups'].index.$get(args, options))
}

export async function putApiExtrasNotificationGroupsIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['notification-groups'].index.$put(args, options))
}

export async function postApiExtrasNotificationGroupsIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['notification-groups'].index.$post(args, options))
}

export async function deleteApiExtrasNotificationGroupsIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['notification-groups'].index.$delete(args, options))
}

export async function patchApiExtrasNotificationGroupsIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['notification-groups'].index.$patch(args, options))
}

export async function getApiExtrasNotificationGroupsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['notification-groups'][':id'].index.$get(args, options),
  )
}

export async function putApiExtrasNotificationGroupsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['notification-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['notification-groups'][':id'].index.$put(args, options),
  )
}

export async function deleteApiExtrasNotificationGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['notification-groups'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['notification-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchApiExtrasNotificationGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.extras)['notification-groups'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.extras['notification-groups'][':id'].index.$patch(args, options),
  )
}

export async function getApiExtrasNotificationsIndex(
  args: InferRequestType<typeof client.api.extras.notifications.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications.index.$get(args, options))
}

export async function putApiExtrasNotificationsIndex(
  args: InferRequestType<typeof client.api.extras.notifications.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications.index.$put(args, options))
}

export async function postApiExtrasNotificationsIndex(
  args: InferRequestType<typeof client.api.extras.notifications.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications.index.$post(args, options))
}

export async function deleteApiExtrasNotificationsIndex(
  args: InferRequestType<typeof client.api.extras.notifications.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications.index.$delete(args, options))
}

export async function patchApiExtrasNotificationsIndex(
  args: InferRequestType<typeof client.api.extras.notifications.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications.index.$patch(args, options))
}

export async function getApiExtrasNotificationsIdIndex(
  args: InferRequestType<(typeof client.api.extras.notifications)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications[':id'].index.$get(args, options))
}

export async function putApiExtrasNotificationsIdIndex(
  args: InferRequestType<(typeof client.api.extras.notifications)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications[':id'].index.$put(args, options))
}

export async function deleteApiExtrasNotificationsIdIndex(
  args: InferRequestType<(typeof client.api.extras.notifications)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications[':id'].index.$delete(args, options))
}

export async function patchApiExtrasNotificationsIdIndex(
  args: InferRequestType<(typeof client.api.extras.notifications)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.notifications[':id'].index.$patch(args, options))
}

export async function getApiExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'].index.$get(args, options))
}

export async function putApiExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'].index.$put(args, options))
}

export async function postApiExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'].index.$post(args, options))
}

export async function deleteApiExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'].index.$delete(args, options))
}

export async function patchApiExtrasSavedFiltersIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'].index.$patch(args, options))
}

export async function getApiExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'][':id'].index.$get(args, options))
}

export async function putApiExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'][':id'].index.$delete(args, options))
}

export async function patchApiExtrasSavedFiltersIdIndex(
  args: InferRequestType<(typeof client.api.extras)['saved-filters'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['saved-filters'][':id'].index.$patch(args, options))
}

export async function getApiExtrasScriptsIndex(
  args: InferRequestType<typeof client.api.extras.scripts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.scripts.index.$get(args, options))
}

export async function getApiExtrasScriptsIdIndex(
  args: InferRequestType<(typeof client.api.extras.scripts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.scripts[':id'].index.$get(args, options))
}

export async function postApiExtrasScriptsIdIndex(
  args: InferRequestType<(typeof client.api.extras.scripts)[':id']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.scripts[':id'].index.$post(args, options))
}

export async function postApiExtrasScriptsUploadIndex(
  args: InferRequestType<typeof client.api.extras.scripts.upload.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.scripts.upload.index.$post(args, options))
}

export async function putApiExtrasScriptsUploadIdIndex(
  args: InferRequestType<(typeof client.api.extras.scripts.upload)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.scripts.upload[':id'].index.$put(args, options))
}

export async function patchApiExtrasScriptsUploadIdIndex(
  args: InferRequestType<(typeof client.api.extras.scripts.upload)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.scripts.upload[':id'].index.$patch(args, options))
}

export async function getApiExtrasSubscriptionsIndex(
  args: InferRequestType<typeof client.api.extras.subscriptions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions.index.$get(args, options))
}

export async function putApiExtrasSubscriptionsIndex(
  args: InferRequestType<typeof client.api.extras.subscriptions.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions.index.$put(args, options))
}

export async function postApiExtrasSubscriptionsIndex(
  args: InferRequestType<typeof client.api.extras.subscriptions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions.index.$post(args, options))
}

export async function deleteApiExtrasSubscriptionsIndex(
  args: InferRequestType<typeof client.api.extras.subscriptions.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions.index.$delete(args, options))
}

export async function patchApiExtrasSubscriptionsIndex(
  args: InferRequestType<typeof client.api.extras.subscriptions.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions.index.$patch(args, options))
}

export async function getApiExtrasSubscriptionsIdIndex(
  args: InferRequestType<(typeof client.api.extras.subscriptions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions[':id'].index.$get(args, options))
}

export async function putApiExtrasSubscriptionsIdIndex(
  args: InferRequestType<(typeof client.api.extras.subscriptions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions[':id'].index.$put(args, options))
}

export async function deleteApiExtrasSubscriptionsIdIndex(
  args: InferRequestType<(typeof client.api.extras.subscriptions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions[':id'].index.$delete(args, options))
}

export async function patchApiExtrasSubscriptionsIdIndex(
  args: InferRequestType<(typeof client.api.extras.subscriptions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.subscriptions[':id'].index.$patch(args, options))
}

export async function getApiExtrasTableConfigsIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'].index.$get(args, options))
}

export async function putApiExtrasTableConfigsIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'].index.$put(args, options))
}

export async function postApiExtrasTableConfigsIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'].index.$post(args, options))
}

export async function deleteApiExtrasTableConfigsIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'].index.$delete(args, options))
}

export async function patchApiExtrasTableConfigsIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'].index.$patch(args, options))
}

export async function getApiExtrasTableConfigsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'][':id'].index.$get(args, options))
}

export async function putApiExtrasTableConfigsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'][':id'].index.$put(args, options))
}

export async function deleteApiExtrasTableConfigsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'][':id'].index.$delete(args, options))
}

export async function patchApiExtrasTableConfigsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['table-configs'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['table-configs'][':id'].index.$patch(args, options))
}

export async function getApiExtrasTaggedObjectsIndex(
  args: InferRequestType<(typeof client.api.extras)['tagged-objects']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['tagged-objects'].index.$get(args, options))
}

export async function getApiExtrasTaggedObjectsIdIndex(
  args: InferRequestType<(typeof client.api.extras)['tagged-objects'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras['tagged-objects'][':id'].index.$get(args, options))
}

export async function getApiExtrasTagsIndex(
  args: InferRequestType<typeof client.api.extras.tags.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags.index.$get(args, options))
}

export async function putApiExtrasTagsIndex(
  args: InferRequestType<typeof client.api.extras.tags.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags.index.$put(args, options))
}

export async function postApiExtrasTagsIndex(
  args: InferRequestType<typeof client.api.extras.tags.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags.index.$post(args, options))
}

export async function deleteApiExtrasTagsIndex(
  args: InferRequestType<typeof client.api.extras.tags.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags.index.$delete(args, options))
}

export async function patchApiExtrasTagsIndex(
  args: InferRequestType<typeof client.api.extras.tags.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags.index.$patch(args, options))
}

export async function getApiExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.api.extras.tags)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags[':id'].index.$get(args, options))
}

export async function putApiExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.api.extras.tags)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags[':id'].index.$put(args, options))
}

export async function deleteApiExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.api.extras.tags)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags[':id'].index.$delete(args, options))
}

export async function patchApiExtrasTagsIdIndex(
  args: InferRequestType<(typeof client.api.extras.tags)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.tags[':id'].index.$patch(args, options))
}

export async function getApiExtrasWebhooksIndex(
  args: InferRequestType<typeof client.api.extras.webhooks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks.index.$get(args, options))
}

export async function putApiExtrasWebhooksIndex(
  args: InferRequestType<typeof client.api.extras.webhooks.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks.index.$put(args, options))
}

export async function postApiExtrasWebhooksIndex(
  args: InferRequestType<typeof client.api.extras.webhooks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks.index.$post(args, options))
}

export async function deleteApiExtrasWebhooksIndex(
  args: InferRequestType<typeof client.api.extras.webhooks.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks.index.$delete(args, options))
}

export async function patchApiExtrasWebhooksIndex(
  args: InferRequestType<typeof client.api.extras.webhooks.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks.index.$patch(args, options))
}

export async function getApiExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.api.extras.webhooks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks[':id'].index.$get(args, options))
}

export async function putApiExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.api.extras.webhooks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks[':id'].index.$put(args, options))
}

export async function deleteApiExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.api.extras.webhooks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks[':id'].index.$delete(args, options))
}

export async function patchApiExtrasWebhooksIdIndex(
  args: InferRequestType<(typeof client.api.extras.webhooks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.extras.webhooks[':id'].index.$patch(args, options))
}

export async function getApiIpamAggregatesIndex(
  args: InferRequestType<typeof client.api.ipam.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates.index.$get(args, options))
}

export async function putApiIpamAggregatesIndex(
  args: InferRequestType<typeof client.api.ipam.aggregates.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates.index.$put(args, options))
}

export async function postApiIpamAggregatesIndex(
  args: InferRequestType<typeof client.api.ipam.aggregates.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates.index.$post(args, options))
}

export async function deleteApiIpamAggregatesIndex(
  args: InferRequestType<typeof client.api.ipam.aggregates.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates.index.$delete(args, options))
}

export async function patchApiIpamAggregatesIndex(
  args: InferRequestType<typeof client.api.ipam.aggregates.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates.index.$patch(args, options))
}

export async function getApiIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.aggregates)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates[':id'].index.$get(args, options))
}

export async function putApiIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.aggregates)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates[':id'].index.$put(args, options))
}

export async function deleteApiIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.aggregates)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates[':id'].index.$delete(args, options))
}

export async function patchApiIpamAggregatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.aggregates)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.aggregates[':id'].index.$patch(args, options))
}

export async function getApiIpamAsnRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'].index.$get(args, options))
}

export async function putApiIpamAsnRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'].index.$put(args, options))
}

export async function postApiIpamAsnRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'].index.$post(args, options))
}

export async function deleteApiIpamAsnRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'].index.$delete(args, options))
}

export async function patchApiIpamAsnRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'].index.$patch(args, options))
}

export async function getApiIpamAsnRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'][':id'].index.$get(args, options))
}

export async function putApiIpamAsnRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'][':id'].index.$put(args, options))
}

export async function deleteApiIpamAsnRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'][':id'].index.$delete(args, options))
}

export async function patchApiIpamAsnRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['asn-ranges'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['asn-ranges'][':id'].index.$patch(args, options))
}

export async function getApiIpamAsnRangesIdAvailableAsnsIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['asn-ranges'][':id']['available-asns']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['asn-ranges'][':id']['available-asns'].index.$get(args, options),
  )
}

export async function postApiIpamAsnRangesIdAvailableAsnsIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['asn-ranges'][':id']['available-asns']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['asn-ranges'][':id']['available-asns'].index.$post(args, options),
  )
}

export async function getApiIpamAsnsIndex(
  args: InferRequestType<typeof client.api.ipam.asns.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns.index.$get(args, options))
}

export async function putApiIpamAsnsIndex(
  args: InferRequestType<typeof client.api.ipam.asns.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns.index.$put(args, options))
}

export async function postApiIpamAsnsIndex(
  args: InferRequestType<typeof client.api.ipam.asns.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns.index.$post(args, options))
}

export async function deleteApiIpamAsnsIndex(
  args: InferRequestType<typeof client.api.ipam.asns.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns.index.$delete(args, options))
}

export async function patchApiIpamAsnsIndex(
  args: InferRequestType<typeof client.api.ipam.asns.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns.index.$patch(args, options))
}

export async function getApiIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.asns)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns[':id'].index.$get(args, options))
}

export async function putApiIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.asns)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns[':id'].index.$put(args, options))
}

export async function deleteApiIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.asns)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns[':id'].index.$delete(args, options))
}

export async function patchApiIpamAsnsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.asns)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.asns[':id'].index.$patch(args, options))
}

export async function getApiIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-group-assignments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-group-assignments'].index.$get(args, options))
}

export async function putApiIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-group-assignments']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-group-assignments'].index.$put(args, options))
}

export async function postApiIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-group-assignments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-group-assignments'].index.$post(args, options))
}

export async function deleteApiIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-group-assignments']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-group-assignments'].index.$delete(args, options))
}

export async function patchApiIpamFhrpGroupAssignmentsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-group-assignments']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-group-assignments'].index.$patch(args, options))
}

export async function getApiIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['fhrp-group-assignments'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['fhrp-group-assignments'][':id'].index.$get(args, options),
  )
}

export async function putApiIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['fhrp-group-assignments'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['fhrp-group-assignments'][':id'].index.$put(args, options),
  )
}

export async function deleteApiIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['fhrp-group-assignments'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['fhrp-group-assignments'][':id'].index.$delete(args, options),
  )
}

export async function patchApiIpamFhrpGroupAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['fhrp-group-assignments'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['fhrp-group-assignments'][':id'].index.$patch(args, options),
  )
}

export async function getApiIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'].index.$get(args, options))
}

export async function putApiIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'].index.$put(args, options))
}

export async function postApiIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'].index.$post(args, options))
}

export async function deleteApiIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'].index.$delete(args, options))
}

export async function patchApiIpamFhrpGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'].index.$patch(args, options))
}

export async function getApiIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'][':id'].index.$get(args, options))
}

export async function putApiIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'][':id'].index.$put(args, options))
}

export async function deleteApiIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'][':id'].index.$delete(args, options))
}

export async function patchApiIpamFhrpGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['fhrp-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['fhrp-groups'][':id'].index.$patch(args, options))
}

export async function getApiIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'].index.$get(args, options))
}

export async function putApiIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'].index.$put(args, options))
}

export async function postApiIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'].index.$post(args, options))
}

export async function deleteApiIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'].index.$delete(args, options))
}

export async function patchApiIpamIpAddressesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'].index.$patch(args, options))
}

export async function getApiIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'][':id'].index.$get(args, options))
}

export async function putApiIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'][':id'].index.$put(args, options))
}

export async function deleteApiIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'][':id'].index.$delete(args, options))
}

export async function patchApiIpamIpAddressesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-addresses'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-addresses'][':id'].index.$patch(args, options))
}

export async function getApiIpamIpRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'].index.$get(args, options))
}

export async function putApiIpamIpRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'].index.$put(args, options))
}

export async function postApiIpamIpRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'].index.$post(args, options))
}

export async function deleteApiIpamIpRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'].index.$delete(args, options))
}

export async function patchApiIpamIpRangesIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'].index.$patch(args, options))
}

export async function getApiIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'][':id'].index.$get(args, options))
}

export async function putApiIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'][':id'].index.$put(args, options))
}

export async function deleteApiIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'][':id'].index.$delete(args, options))
}

export async function patchApiIpamIpRangesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['ip-ranges'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['ip-ranges'][':id'].index.$patch(args, options))
}

export async function getApiIpamIpRangesIdAvailableIpsIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['ip-ranges'][':id']['available-ips']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['ip-ranges'][':id']['available-ips'].index.$get(args, options),
  )
}

export async function postApiIpamIpRangesIdAvailableIpsIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['ip-ranges'][':id']['available-ips']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['ip-ranges'][':id']['available-ips'].index.$post(args, options),
  )
}

export async function getApiIpamPrefixesIndex(
  args: InferRequestType<typeof client.api.ipam.prefixes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes.index.$get(args, options))
}

export async function putApiIpamPrefixesIndex(
  args: InferRequestType<typeof client.api.ipam.prefixes.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes.index.$put(args, options))
}

export async function postApiIpamPrefixesIndex(
  args: InferRequestType<typeof client.api.ipam.prefixes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes.index.$post(args, options))
}

export async function deleteApiIpamPrefixesIndex(
  args: InferRequestType<typeof client.api.ipam.prefixes.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes.index.$delete(args, options))
}

export async function patchApiIpamPrefixesIndex(
  args: InferRequestType<typeof client.api.ipam.prefixes.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes.index.$patch(args, options))
}

export async function getApiIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.prefixes)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes[':id'].index.$get(args, options))
}

export async function putApiIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.prefixes)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes[':id'].index.$put(args, options))
}

export async function deleteApiIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.prefixes)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes[':id'].index.$delete(args, options))
}

export async function patchApiIpamPrefixesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.prefixes)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.prefixes[':id'].index.$patch(args, options))
}

export async function getApiIpamPrefixesIdAvailableIpsIndex(
  args: InferRequestType<
    (typeof client.api.ipam.prefixes)[':id']['available-ips']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam.prefixes[':id']['available-ips'].index.$get(args, options),
  )
}

export async function postApiIpamPrefixesIdAvailableIpsIndex(
  args: InferRequestType<
    (typeof client.api.ipam.prefixes)[':id']['available-ips']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam.prefixes[':id']['available-ips'].index.$post(args, options),
  )
}

export async function getApiIpamPrefixesIdAvailablePrefixesIndex(
  args: InferRequestType<
    (typeof client.api.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam.prefixes[':id']['available-prefixes'].index.$get(args, options),
  )
}

export async function postApiIpamPrefixesIdAvailablePrefixesIndex(
  args: InferRequestType<
    (typeof client.api.ipam.prefixes)[':id']['available-prefixes']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam.prefixes[':id']['available-prefixes'].index.$post(args, options),
  )
}

export async function getApiIpamRirsIndex(
  args: InferRequestType<typeof client.api.ipam.rirs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs.index.$get(args, options))
}

export async function putApiIpamRirsIndex(
  args: InferRequestType<typeof client.api.ipam.rirs.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs.index.$put(args, options))
}

export async function postApiIpamRirsIndex(
  args: InferRequestType<typeof client.api.ipam.rirs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs.index.$post(args, options))
}

export async function deleteApiIpamRirsIndex(
  args: InferRequestType<typeof client.api.ipam.rirs.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs.index.$delete(args, options))
}

export async function patchApiIpamRirsIndex(
  args: InferRequestType<typeof client.api.ipam.rirs.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs.index.$patch(args, options))
}

export async function getApiIpamRirsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.rirs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs[':id'].index.$get(args, options))
}

export async function putApiIpamRirsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.rirs)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs[':id'].index.$put(args, options))
}

export async function deleteApiIpamRirsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.rirs)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs[':id'].index.$delete(args, options))
}

export async function patchApiIpamRirsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.rirs)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.rirs[':id'].index.$patch(args, options))
}

export async function getApiIpamRolesIndex(
  args: InferRequestType<typeof client.api.ipam.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles.index.$get(args, options))
}

export async function putApiIpamRolesIndex(
  args: InferRequestType<typeof client.api.ipam.roles.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles.index.$put(args, options))
}

export async function postApiIpamRolesIndex(
  args: InferRequestType<typeof client.api.ipam.roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles.index.$post(args, options))
}

export async function deleteApiIpamRolesIndex(
  args: InferRequestType<typeof client.api.ipam.roles.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles.index.$delete(args, options))
}

export async function patchApiIpamRolesIndex(
  args: InferRequestType<typeof client.api.ipam.roles.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles.index.$patch(args, options))
}

export async function getApiIpamRolesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles[':id'].index.$get(args, options))
}

export async function putApiIpamRolesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.roles)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles[':id'].index.$put(args, options))
}

export async function deleteApiIpamRolesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.roles)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles[':id'].index.$delete(args, options))
}

export async function patchApiIpamRolesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.roles)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.roles[':id'].index.$patch(args, options))
}

export async function getApiIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'].index.$get(args, options))
}

export async function putApiIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'].index.$put(args, options))
}

export async function postApiIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'].index.$post(args, options))
}

export async function deleteApiIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'].index.$delete(args, options))
}

export async function patchApiIpamRouteTargetsIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'].index.$patch(args, options))
}

export async function getApiIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'][':id'].index.$get(args, options))
}

export async function putApiIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'][':id'].index.$put(args, options))
}

export async function deleteApiIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'][':id'].index.$delete(args, options))
}

export async function patchApiIpamRouteTargetsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['route-targets'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['route-targets'][':id'].index.$patch(args, options))
}

export async function getApiIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'].index.$get(args, options))
}

export async function putApiIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'].index.$put(args, options))
}

export async function postApiIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'].index.$post(args, options))
}

export async function deleteApiIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'].index.$delete(args, options))
}

export async function patchApiIpamServiceTemplatesIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'].index.$patch(args, options))
}

export async function getApiIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'][':id'].index.$get(args, options))
}

export async function putApiIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['service-templates'][':id'].index.$put(args, options))
}

export async function deleteApiIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['service-templates'][':id'].index.$delete(args, options),
  )
}

export async function patchApiIpamServiceTemplatesIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['service-templates'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['service-templates'][':id'].index.$patch(args, options),
  )
}

export async function getApiIpamServicesIndex(
  args: InferRequestType<typeof client.api.ipam.services.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services.index.$get(args, options))
}

export async function putApiIpamServicesIndex(
  args: InferRequestType<typeof client.api.ipam.services.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services.index.$put(args, options))
}

export async function postApiIpamServicesIndex(
  args: InferRequestType<typeof client.api.ipam.services.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services.index.$post(args, options))
}

export async function deleteApiIpamServicesIndex(
  args: InferRequestType<typeof client.api.ipam.services.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services.index.$delete(args, options))
}

export async function patchApiIpamServicesIndex(
  args: InferRequestType<typeof client.api.ipam.services.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services.index.$patch(args, options))
}

export async function getApiIpamServicesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.services)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services[':id'].index.$get(args, options))
}

export async function putApiIpamServicesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.services)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services[':id'].index.$put(args, options))
}

export async function deleteApiIpamServicesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.services)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services[':id'].index.$delete(args, options))
}

export async function patchApiIpamServicesIdIndex(
  args: InferRequestType<(typeof client.api.ipam.services)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.services[':id'].index.$patch(args, options))
}

export async function getApiIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'].index.$get(args, options))
}

export async function putApiIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'].index.$put(args, options))
}

export async function postApiIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'].index.$post(args, options))
}

export async function deleteApiIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'].index.$delete(args, options))
}

export async function patchApiIpamVlanGroupsIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'].index.$patch(args, options))
}

export async function getApiIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'][':id'].index.$get(args, options))
}

export async function putApiIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'][':id'].index.$put(args, options))
}

export async function deleteApiIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'][':id'].index.$delete(args, options))
}

export async function patchApiIpamVlanGroupsIdIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-groups'][':id'].index.$patch(args, options))
}

export async function getApiIpamVlanGroupsIdAvailableVlansIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-groups'][':id']['available-vlans']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-groups'][':id']['available-vlans'].index.$get(args, options),
  )
}

export async function postApiIpamVlanGroupsIdAvailableVlansIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-groups'][':id']['available-vlans']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-groups'][':id']['available-vlans'].index.$post(args, options),
  )
}

export async function getApiIpamVlanTranslationPoliciesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-policies']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-policies'].index.$get(args, options))
}

export async function putApiIpamVlanTranslationPoliciesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-policies']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-policies'].index.$put(args, options))
}

export async function postApiIpamVlanTranslationPoliciesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-policies']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'].index.$post(args, options),
  )
}

export async function deleteApiIpamVlanTranslationPoliciesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-policies']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'].index.$delete(args, options),
  )
}

export async function patchApiIpamVlanTranslationPoliciesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-policies']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'].index.$patch(args, options),
  )
}

export async function getApiIpamVlanTranslationPoliciesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-policies'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'][':id'].index.$get(args, options),
  )
}

export async function putApiIpamVlanTranslationPoliciesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-policies'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'][':id'].index.$put(args, options),
  )
}

export async function deleteApiIpamVlanTranslationPoliciesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-policies'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'][':id'].index.$delete(args, options),
  )
}

export async function patchApiIpamVlanTranslationPoliciesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-policies'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-policies'][':id'].index.$patch(args, options),
  )
}

export async function getApiIpamVlanTranslationRulesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-rules']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-rules'].index.$get(args, options))
}

export async function putApiIpamVlanTranslationRulesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-rules']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-rules'].index.$put(args, options))
}

export async function postApiIpamVlanTranslationRulesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-rules']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-rules'].index.$post(args, options))
}

export async function deleteApiIpamVlanTranslationRulesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-rules']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-rules'].index.$delete(args, options))
}

export async function patchApiIpamVlanTranslationRulesIndex(
  args: InferRequestType<(typeof client.api.ipam)['vlan-translation-rules']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam['vlan-translation-rules'].index.$patch(args, options))
}

export async function getApiIpamVlanTranslationRulesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-rules'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-rules'][':id'].index.$get(args, options),
  )
}

export async function putApiIpamVlanTranslationRulesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-rules'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-rules'][':id'].index.$put(args, options),
  )
}

export async function deleteApiIpamVlanTranslationRulesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-rules'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-rules'][':id'].index.$delete(args, options),
  )
}

export async function patchApiIpamVlanTranslationRulesIdIndex(
  args: InferRequestType<
    (typeof client.api.ipam)['vlan-translation-rules'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ipam['vlan-translation-rules'][':id'].index.$patch(args, options),
  )
}

export async function getApiIpamVlansIndex(
  args: InferRequestType<typeof client.api.ipam.vlans.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans.index.$get(args, options))
}

export async function putApiIpamVlansIndex(
  args: InferRequestType<typeof client.api.ipam.vlans.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans.index.$put(args, options))
}

export async function postApiIpamVlansIndex(
  args: InferRequestType<typeof client.api.ipam.vlans.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans.index.$post(args, options))
}

export async function deleteApiIpamVlansIndex(
  args: InferRequestType<typeof client.api.ipam.vlans.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans.index.$delete(args, options))
}

export async function patchApiIpamVlansIndex(
  args: InferRequestType<typeof client.api.ipam.vlans.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans.index.$patch(args, options))
}

export async function getApiIpamVlansIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vlans)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans[':id'].index.$get(args, options))
}

export async function putApiIpamVlansIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vlans)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans[':id'].index.$put(args, options))
}

export async function deleteApiIpamVlansIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vlans)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans[':id'].index.$delete(args, options))
}

export async function patchApiIpamVlansIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vlans)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vlans[':id'].index.$patch(args, options))
}

export async function getApiIpamVrfsIndex(
  args: InferRequestType<typeof client.api.ipam.vrfs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs.index.$get(args, options))
}

export async function putApiIpamVrfsIndex(
  args: InferRequestType<typeof client.api.ipam.vrfs.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs.index.$put(args, options))
}

export async function postApiIpamVrfsIndex(
  args: InferRequestType<typeof client.api.ipam.vrfs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs.index.$post(args, options))
}

export async function deleteApiIpamVrfsIndex(
  args: InferRequestType<typeof client.api.ipam.vrfs.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs.index.$delete(args, options))
}

export async function patchApiIpamVrfsIndex(
  args: InferRequestType<typeof client.api.ipam.vrfs.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs.index.$patch(args, options))
}

export async function getApiIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vrfs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs[':id'].index.$get(args, options))
}

export async function putApiIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vrfs)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs[':id'].index.$put(args, options))
}

export async function deleteApiIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vrfs)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs[':id'].index.$delete(args, options))
}

export async function patchApiIpamVrfsIdIndex(
  args: InferRequestType<(typeof client.api.ipam.vrfs)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ipam.vrfs[':id'].index.$patch(args, options))
}

export async function getApiSchemaIndex(
  args: InferRequestType<typeof client.api.schema.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.schema.index.$get(args, options))
}

export async function getApiStatusIndex(
  args: InferRequestType<typeof client.api.status.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.status.index.$get(args, options))
}

export async function getApiTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-assignments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-assignments'].index.$get(args, options))
}

export async function putApiTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-assignments']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-assignments'].index.$put(args, options))
}

export async function postApiTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-assignments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-assignments'].index.$post(args, options))
}

export async function deleteApiTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-assignments']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-assignments'].index.$delete(args, options))
}

export async function patchApiTenancyContactAssignmentsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-assignments']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-assignments'].index.$patch(args, options))
}

export async function getApiTenancyContactAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.tenancy)['contact-assignments'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-assignments'][':id'].index.$get(args, options),
  )
}

export async function putApiTenancyContactAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.tenancy)['contact-assignments'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-assignments'][':id'].index.$put(args, options),
  )
}

export async function deleteApiTenancyContactAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.tenancy)['contact-assignments'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-assignments'][':id'].index.$delete(args, options),
  )
}

export async function patchApiTenancyContactAssignmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.tenancy)['contact-assignments'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-assignments'][':id'].index.$patch(args, options),
  )
}

export async function getApiTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'].index.$get(args, options))
}

export async function putApiTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'].index.$put(args, options))
}

export async function postApiTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'].index.$post(args, options))
}

export async function deleteApiTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'].index.$delete(args, options))
}

export async function patchApiTenancyContactGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'].index.$patch(args, options))
}

export async function getApiTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'][':id'].index.$get(args, options))
}

export async function putApiTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-groups'][':id'].index.$put(args, options))
}

export async function deleteApiTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchApiTenancyContactGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-groups'][':id'].index.$patch(args, options),
  )
}

export async function getApiTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'].index.$get(args, options))
}

export async function putApiTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'].index.$put(args, options))
}

export async function postApiTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'].index.$post(args, options))
}

export async function deleteApiTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'].index.$delete(args, options))
}

export async function patchApiTenancyContactRolesIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'].index.$patch(args, options))
}

export async function getApiTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'][':id'].index.$get(args, options))
}

export async function putApiTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'][':id'].index.$put(args, options))
}

export async function deleteApiTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['contact-roles'][':id'].index.$delete(args, options),
  )
}

export async function patchApiTenancyContactRolesIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['contact-roles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['contact-roles'][':id'].index.$patch(args, options))
}

export async function getApiTenancyContactsIndex(
  args: InferRequestType<typeof client.api.tenancy.contacts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts.index.$get(args, options))
}

export async function putApiTenancyContactsIndex(
  args: InferRequestType<typeof client.api.tenancy.contacts.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts.index.$put(args, options))
}

export async function postApiTenancyContactsIndex(
  args: InferRequestType<typeof client.api.tenancy.contacts.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts.index.$post(args, options))
}

export async function deleteApiTenancyContactsIndex(
  args: InferRequestType<typeof client.api.tenancy.contacts.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts.index.$delete(args, options))
}

export async function patchApiTenancyContactsIndex(
  args: InferRequestType<typeof client.api.tenancy.contacts.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts.index.$patch(args, options))
}

export async function getApiTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.contacts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts[':id'].index.$get(args, options))
}

export async function putApiTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.contacts)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts[':id'].index.$put(args, options))
}

export async function deleteApiTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.contacts)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts[':id'].index.$delete(args, options))
}

export async function patchApiTenancyContactsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.contacts)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.contacts[':id'].index.$patch(args, options))
}

export async function getApiTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'].index.$get(args, options))
}

export async function putApiTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'].index.$put(args, options))
}

export async function postApiTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'].index.$post(args, options))
}

export async function deleteApiTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'].index.$delete(args, options))
}

export async function patchApiTenancyTenantGroupsIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'].index.$patch(args, options))
}

export async function getApiTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'][':id'].index.$get(args, options))
}

export async function putApiTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'][':id'].index.$put(args, options))
}

export async function deleteApiTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenancy['tenant-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchApiTenancyTenantGroupsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy)['tenant-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy['tenant-groups'][':id'].index.$patch(args, options))
}

export async function getApiTenancyTenantsIndex(
  args: InferRequestType<typeof client.api.tenancy.tenants.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants.index.$get(args, options))
}

export async function putApiTenancyTenantsIndex(
  args: InferRequestType<typeof client.api.tenancy.tenants.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants.index.$put(args, options))
}

export async function postApiTenancyTenantsIndex(
  args: InferRequestType<typeof client.api.tenancy.tenants.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants.index.$post(args, options))
}

export async function deleteApiTenancyTenantsIndex(
  args: InferRequestType<typeof client.api.tenancy.tenants.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants.index.$delete(args, options))
}

export async function patchApiTenancyTenantsIndex(
  args: InferRequestType<typeof client.api.tenancy.tenants.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants.index.$patch(args, options))
}

export async function getApiTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.tenants)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants[':id'].index.$get(args, options))
}

export async function putApiTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.tenants)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants[':id'].index.$put(args, options))
}

export async function deleteApiTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.tenants)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants[':id'].index.$delete(args, options))
}

export async function patchApiTenancyTenantsIdIndex(
  args: InferRequestType<(typeof client.api.tenancy.tenants)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenancy.tenants[':id'].index.$patch(args, options))
}

export async function getApiUsersConfigIndex(
  args: InferRequestType<typeof client.api.users.config.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.config.index.$get(args, options))
}

export async function getApiUsersGroupsIndex(
  args: InferRequestType<typeof client.api.users.groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups.index.$get(args, options))
}

export async function putApiUsersGroupsIndex(
  args: InferRequestType<typeof client.api.users.groups.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups.index.$put(args, options))
}

export async function postApiUsersGroupsIndex(
  args: InferRequestType<typeof client.api.users.groups.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups.index.$post(args, options))
}

export async function deleteApiUsersGroupsIndex(
  args: InferRequestType<typeof client.api.users.groups.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups.index.$delete(args, options))
}

export async function patchApiUsersGroupsIndex(
  args: InferRequestType<typeof client.api.users.groups.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups.index.$patch(args, options))
}

export async function getApiUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users.groups)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups[':id'].index.$get(args, options))
}

export async function putApiUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users.groups)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups[':id'].index.$put(args, options))
}

export async function deleteApiUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users.groups)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups[':id'].index.$delete(args, options))
}

export async function patchApiUsersGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users.groups)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.groups[':id'].index.$patch(args, options))
}

export async function getApiUsersOwnerGroupsIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'].index.$get(args, options))
}

export async function putApiUsersOwnerGroupsIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'].index.$put(args, options))
}

export async function postApiUsersOwnerGroupsIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'].index.$post(args, options))
}

export async function deleteApiUsersOwnerGroupsIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'].index.$delete(args, options))
}

export async function patchApiUsersOwnerGroupsIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'].index.$patch(args, options))
}

export async function getApiUsersOwnerGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'][':id'].index.$get(args, options))
}

export async function putApiUsersOwnerGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'][':id'].index.$put(args, options))
}

export async function deleteApiUsersOwnerGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'][':id'].index.$delete(args, options))
}

export async function patchApiUsersOwnerGroupsIdIndex(
  args: InferRequestType<(typeof client.api.users)['owner-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users['owner-groups'][':id'].index.$patch(args, options))
}

export async function getApiUsersOwnersIndex(
  args: InferRequestType<typeof client.api.users.owners.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners.index.$get(args, options))
}

export async function putApiUsersOwnersIndex(
  args: InferRequestType<typeof client.api.users.owners.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners.index.$put(args, options))
}

export async function postApiUsersOwnersIndex(
  args: InferRequestType<typeof client.api.users.owners.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners.index.$post(args, options))
}

export async function deleteApiUsersOwnersIndex(
  args: InferRequestType<typeof client.api.users.owners.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners.index.$delete(args, options))
}

export async function patchApiUsersOwnersIndex(
  args: InferRequestType<typeof client.api.users.owners.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners.index.$patch(args, options))
}

export async function getApiUsersOwnersIdIndex(
  args: InferRequestType<(typeof client.api.users.owners)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners[':id'].index.$get(args, options))
}

export async function putApiUsersOwnersIdIndex(
  args: InferRequestType<(typeof client.api.users.owners)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners[':id'].index.$put(args, options))
}

export async function deleteApiUsersOwnersIdIndex(
  args: InferRequestType<(typeof client.api.users.owners)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners[':id'].index.$delete(args, options))
}

export async function patchApiUsersOwnersIdIndex(
  args: InferRequestType<(typeof client.api.users.owners)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.owners[':id'].index.$patch(args, options))
}

export async function getApiUsersPermissionsIndex(
  args: InferRequestType<typeof client.api.users.permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions.index.$get(args, options))
}

export async function putApiUsersPermissionsIndex(
  args: InferRequestType<typeof client.api.users.permissions.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions.index.$put(args, options))
}

export async function postApiUsersPermissionsIndex(
  args: InferRequestType<typeof client.api.users.permissions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions.index.$post(args, options))
}

export async function deleteApiUsersPermissionsIndex(
  args: InferRequestType<typeof client.api.users.permissions.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions.index.$delete(args, options))
}

export async function patchApiUsersPermissionsIndex(
  args: InferRequestType<typeof client.api.users.permissions.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions.index.$patch(args, options))
}

export async function getApiUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.api.users.permissions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions[':id'].index.$get(args, options))
}

export async function putApiUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.api.users.permissions)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions[':id'].index.$put(args, options))
}

export async function deleteApiUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.api.users.permissions)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions[':id'].index.$delete(args, options))
}

export async function patchApiUsersPermissionsIdIndex(
  args: InferRequestType<(typeof client.api.users.permissions)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.permissions[':id'].index.$patch(args, options))
}

export async function getApiUsersTokensIndex(
  args: InferRequestType<typeof client.api.users.tokens.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens.index.$get(args, options))
}

export async function putApiUsersTokensIndex(
  args: InferRequestType<typeof client.api.users.tokens.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens.index.$put(args, options))
}

export async function postApiUsersTokensIndex(
  args: InferRequestType<typeof client.api.users.tokens.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens.index.$post(args, options))
}

export async function deleteApiUsersTokensIndex(
  args: InferRequestType<typeof client.api.users.tokens.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens.index.$delete(args, options))
}

export async function patchApiUsersTokensIndex(
  args: InferRequestType<typeof client.api.users.tokens.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens.index.$patch(args, options))
}

export async function getApiUsersTokensIdIndex(
  args: InferRequestType<(typeof client.api.users.tokens)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens[':id'].index.$get(args, options))
}

export async function putApiUsersTokensIdIndex(
  args: InferRequestType<(typeof client.api.users.tokens)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens[':id'].index.$put(args, options))
}

export async function deleteApiUsersTokensIdIndex(
  args: InferRequestType<(typeof client.api.users.tokens)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens[':id'].index.$delete(args, options))
}

export async function patchApiUsersTokensIdIndex(
  args: InferRequestType<(typeof client.api.users.tokens)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens[':id'].index.$patch(args, options))
}

export async function postApiUsersTokensProvisionIndex(
  args: InferRequestType<typeof client.api.users.tokens.provision.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.tokens.provision.index.$post(args, options))
}

export async function getApiUsersUsersIndex(
  args: InferRequestType<typeof client.api.users.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users.index.$get(args, options))
}

export async function putApiUsersUsersIndex(
  args: InferRequestType<typeof client.api.users.users.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users.index.$put(args, options))
}

export async function postApiUsersUsersIndex(
  args: InferRequestType<typeof client.api.users.users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users.index.$post(args, options))
}

export async function deleteApiUsersUsersIndex(
  args: InferRequestType<typeof client.api.users.users.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users.index.$delete(args, options))
}

export async function patchApiUsersUsersIndex(
  args: InferRequestType<typeof client.api.users.users.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users.index.$patch(args, options))
}

export async function getApiUsersUsersIdIndex(
  args: InferRequestType<(typeof client.api.users.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users[':id'].index.$get(args, options))
}

export async function putApiUsersUsersIdIndex(
  args: InferRequestType<(typeof client.api.users.users)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users[':id'].index.$put(args, options))
}

export async function deleteApiUsersUsersIdIndex(
  args: InferRequestType<(typeof client.api.users.users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users[':id'].index.$delete(args, options))
}

export async function patchApiUsersUsersIdIndex(
  args: InferRequestType<(typeof client.api.users.users)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.users[':id'].index.$patch(args, options))
}

export async function getApiVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-groups'].index.$get(args, options))
}

export async function putApiVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-groups'].index.$put(args, options))
}

export async function postApiVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-groups'].index.$post(args, options))
}

export async function deleteApiVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-groups'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationClusterGroupsIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-groups'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-groups'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-groups'][':id'].index.$get(args, options),
  )
}

export async function putApiVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-groups'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-groups'][':id'].index.$put(args, options),
  )
}

export async function deleteApiVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-groups'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationClusterGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-groups'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-groups'][':id'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-types'].index.$get(args, options))
}

export async function putApiVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-types']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-types'].index.$put(args, options))
}

export async function postApiVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-types']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-types'].index.$post(args, options))
}

export async function deleteApiVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-types']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-types'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationClusterTypesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['cluster-types']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['cluster-types'].index.$patch(args, options))
}

export async function getApiVirtualizationClusterTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-types'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-types'][':id'].index.$get(args, options),
  )
}

export async function putApiVirtualizationClusterTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-types'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-types'][':id'].index.$put(args, options),
  )
}

export async function deleteApiVirtualizationClusterTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-types'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-types'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationClusterTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['cluster-types'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['cluster-types'][':id'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationClustersIndex(
  args: InferRequestType<typeof client.api.virtualization.clusters.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters.index.$get(args, options))
}

export async function putApiVirtualizationClustersIndex(
  args: InferRequestType<typeof client.api.virtualization.clusters.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters.index.$put(args, options))
}

export async function postApiVirtualizationClustersIndex(
  args: InferRequestType<typeof client.api.virtualization.clusters.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters.index.$post(args, options))
}

export async function deleteApiVirtualizationClustersIndex(
  args: InferRequestType<typeof client.api.virtualization.clusters.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters.index.$delete(args, options))
}

export async function patchApiVirtualizationClustersIndex(
  args: InferRequestType<typeof client.api.virtualization.clusters.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters.index.$patch(args, options))
}

export async function getApiVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.clusters)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters[':id'].index.$get(args, options))
}

export async function putApiVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.clusters)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters[':id'].index.$put(args, options))
}

export async function deleteApiVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.clusters)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters[':id'].index.$delete(args, options))
}

export async function patchApiVirtualizationClustersIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.clusters)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.clusters[':id'].index.$patch(args, options))
}

export async function getApiVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.api.virtualization.interfaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces.index.$get(args, options))
}

export async function putApiVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.api.virtualization.interfaces.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces.index.$put(args, options))
}

export async function postApiVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.api.virtualization.interfaces.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces.index.$post(args, options))
}

export async function deleteApiVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.api.virtualization.interfaces.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces.index.$delete(args, options))
}

export async function patchApiVirtualizationInterfacesIndex(
  args: InferRequestType<typeof client.api.virtualization.interfaces.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces.index.$patch(args, options))
}

export async function getApiVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.interfaces)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces[':id'].index.$get(args, options))
}

export async function putApiVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.interfaces)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization.interfaces[':id'].index.$put(args, options))
}

export async function deleteApiVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.interfaces)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization.interfaces[':id'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationInterfacesIdIndex(
  args: InferRequestType<(typeof client.api.virtualization.interfaces)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization.interfaces[':id'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationVirtualDisksIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-disks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['virtual-disks'].index.$get(args, options))
}

export async function putApiVirtualizationVirtualDisksIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-disks']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['virtual-disks'].index.$put(args, options))
}

export async function postApiVirtualizationVirtualDisksIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-disks']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['virtual-disks'].index.$post(args, options))
}

export async function deleteApiVirtualizationVirtualDisksIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-disks']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-disks'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationVirtualDisksIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-disks']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtualization['virtual-disks'].index.$patch(args, options))
}

export async function getApiVirtualizationVirtualDisksIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-disks'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-disks'][':id'].index.$get(args, options),
  )
}

export async function putApiVirtualizationVirtualDisksIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-disks'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-disks'][':id'].index.$put(args, options),
  )
}

export async function deleteApiVirtualizationVirtualDisksIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-disks'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-disks'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationVirtualDisksIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-disks'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-disks'][':id'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationVirtualMachineTypesIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'].index.$get(args, options),
  )
}

export async function putApiVirtualizationVirtualMachineTypesIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'].index.$put(args, options),
  )
}

export async function postApiVirtualizationVirtualMachineTypesIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'].index.$post(args, options),
  )
}

export async function deleteApiVirtualizationVirtualMachineTypesIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationVirtualMachineTypesIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationVirtualMachineTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'][':id'].index.$get(args, options),
  )
}

export async function putApiVirtualizationVirtualMachineTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'][':id'].index.$put(args, options),
  )
}

export async function deleteApiVirtualizationVirtualMachineTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationVirtualMachineTypesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machine-types'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machine-types'][':id'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-machines']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'].index.$get(args, options),
  )
}

export async function putApiVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-machines']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'].index.$put(args, options),
  )
}

export async function postApiVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-machines']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'].index.$post(args, options),
  )
}

export async function deleteApiVirtualizationVirtualMachinesIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machines']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationVirtualMachinesIndex(
  args: InferRequestType<(typeof client.api.virtualization)['virtual-machines']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'].index.$patch(args, options),
  )
}

export async function getApiVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'][':id'].index.$get(args, options),
  )
}

export async function putApiVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machines'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'][':id'].index.$put(args, options),
  )
}

export async function deleteApiVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machines'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVirtualizationVirtualMachinesIdIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machines'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'][':id'].index.$patch(args, options),
  )
}

export async function postApiVirtualizationVirtualMachinesIdRenderConfigIndex(
  args: InferRequestType<
    (typeof client.api.virtualization)['virtual-machines'][':id']['render-config']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.virtualization['virtual-machines'][':id']['render-config'].index.$post(
      args,
      options,
    ),
  )
}

export async function getApiVpnIkePoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'].index.$get(args, options))
}

export async function putApiVpnIkePoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'].index.$put(args, options))
}

export async function postApiVpnIkePoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'].index.$post(args, options))
}

export async function deleteApiVpnIkePoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'].index.$delete(args, options))
}

export async function patchApiVpnIkePoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'].index.$patch(args, options))
}

export async function getApiVpnIkePoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'][':id'].index.$get(args, options))
}

export async function putApiVpnIkePoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'][':id'].index.$put(args, options))
}

export async function deleteApiVpnIkePoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'][':id'].index.$delete(args, options))
}

export async function patchApiVpnIkePoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-policies'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-policies'][':id'].index.$patch(args, options))
}

export async function getApiVpnIkeProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'].index.$get(args, options))
}

export async function putApiVpnIkeProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'].index.$put(args, options))
}

export async function postApiVpnIkeProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'].index.$post(args, options))
}

export async function deleteApiVpnIkeProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'].index.$delete(args, options))
}

export async function patchApiVpnIkeProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'].index.$patch(args, options))
}

export async function getApiVpnIkeProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'][':id'].index.$get(args, options))
}

export async function putApiVpnIkeProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'][':id'].index.$put(args, options))
}

export async function deleteApiVpnIkeProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'][':id'].index.$delete(args, options))
}

export async function patchApiVpnIkeProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ike-proposals'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ike-proposals'][':id'].index.$patch(args, options))
}

export async function getApiVpnIpsecPoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'].index.$get(args, options))
}

export async function putApiVpnIpsecPoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'].index.$put(args, options))
}

export async function postApiVpnIpsecPoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'].index.$post(args, options))
}

export async function deleteApiVpnIpsecPoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'].index.$delete(args, options))
}

export async function patchApiVpnIpsecPoliciesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'].index.$patch(args, options))
}

export async function getApiVpnIpsecPoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'][':id'].index.$get(args, options))
}

export async function putApiVpnIpsecPoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'][':id'].index.$put(args, options))
}

export async function deleteApiVpnIpsecPoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'][':id'].index.$delete(args, options))
}

export async function patchApiVpnIpsecPoliciesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-policies'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-policies'][':id'].index.$patch(args, options))
}

export async function getApiVpnIpsecProfilesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'].index.$get(args, options))
}

export async function putApiVpnIpsecProfilesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'].index.$put(args, options))
}

export async function postApiVpnIpsecProfilesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'].index.$post(args, options))
}

export async function deleteApiVpnIpsecProfilesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'].index.$delete(args, options))
}

export async function patchApiVpnIpsecProfilesIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'].index.$patch(args, options))
}

export async function getApiVpnIpsecProfilesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'][':id'].index.$get(args, options))
}

export async function putApiVpnIpsecProfilesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'][':id'].index.$put(args, options))
}

export async function deleteApiVpnIpsecProfilesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'][':id'].index.$delete(args, options))
}

export async function patchApiVpnIpsecProfilesIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-profiles'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-profiles'][':id'].index.$patch(args, options))
}

export async function getApiVpnIpsecProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'].index.$get(args, options))
}

export async function putApiVpnIpsecProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'].index.$put(args, options))
}

export async function postApiVpnIpsecProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'].index.$post(args, options))
}

export async function deleteApiVpnIpsecProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'].index.$delete(args, options))
}

export async function patchApiVpnIpsecProposalsIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'].index.$patch(args, options))
}

export async function getApiVpnIpsecProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'][':id'].index.$get(args, options))
}

export async function putApiVpnIpsecProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'][':id'].index.$put(args, options))
}

export async function deleteApiVpnIpsecProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'][':id'].index.$delete(args, options))
}

export async function patchApiVpnIpsecProposalsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['ipsec-proposals'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['ipsec-proposals'][':id'].index.$patch(args, options))
}

export async function getApiVpnL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'].index.$get(args, options))
}

export async function putApiVpnL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'].index.$put(args, options))
}

export async function postApiVpnL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'].index.$post(args, options))
}

export async function deleteApiVpnL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'].index.$delete(args, options))
}

export async function patchApiVpnL2vpnTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'].index.$patch(args, options))
}

export async function getApiVpnL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'][':id'].index.$get(args, options))
}

export async function putApiVpnL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['l2vpn-terminations'][':id'].index.$put(args, options))
}

export async function deleteApiVpnL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.vpn['l2vpn-terminations'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVpnL2vpnTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['l2vpn-terminations'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.vpn['l2vpn-terminations'][':id'].index.$patch(args, options),
  )
}

export async function getApiVpnL2vpnsIndex(
  args: InferRequestType<typeof client.api.vpn.l2vpns.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns.index.$get(args, options))
}

export async function putApiVpnL2vpnsIndex(
  args: InferRequestType<typeof client.api.vpn.l2vpns.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns.index.$put(args, options))
}

export async function postApiVpnL2vpnsIndex(
  args: InferRequestType<typeof client.api.vpn.l2vpns.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns.index.$post(args, options))
}

export async function deleteApiVpnL2vpnsIndex(
  args: InferRequestType<typeof client.api.vpn.l2vpns.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns.index.$delete(args, options))
}

export async function patchApiVpnL2vpnsIndex(
  args: InferRequestType<typeof client.api.vpn.l2vpns.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns.index.$patch(args, options))
}

export async function getApiVpnL2vpnsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.l2vpns)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns[':id'].index.$get(args, options))
}

export async function putApiVpnL2vpnsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.l2vpns)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns[':id'].index.$put(args, options))
}

export async function deleteApiVpnL2vpnsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.l2vpns)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns[':id'].index.$delete(args, options))
}

export async function patchApiVpnL2vpnsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.l2vpns)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.l2vpns[':id'].index.$patch(args, options))
}

export async function getApiVpnTunnelGroupsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'].index.$get(args, options))
}

export async function putApiVpnTunnelGroupsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'].index.$put(args, options))
}

export async function postApiVpnTunnelGroupsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'].index.$post(args, options))
}

export async function deleteApiVpnTunnelGroupsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'].index.$delete(args, options))
}

export async function patchApiVpnTunnelGroupsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'].index.$patch(args, options))
}

export async function getApiVpnTunnelGroupsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'][':id'].index.$get(args, options))
}

export async function putApiVpnTunnelGroupsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'][':id'].index.$put(args, options))
}

export async function deleteApiVpnTunnelGroupsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'][':id'].index.$delete(args, options))
}

export async function patchApiVpnTunnelGroupsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-groups'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-groups'][':id'].index.$patch(args, options))
}

export async function getApiVpnTunnelTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'].index.$get(args, options))
}

export async function putApiVpnTunnelTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'].index.$put(args, options))
}

export async function postApiVpnTunnelTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'].index.$post(args, options))
}

export async function deleteApiVpnTunnelTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'].index.$delete(args, options))
}

export async function patchApiVpnTunnelTerminationsIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'].index.$patch(args, options))
}

export async function getApiVpnTunnelTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'][':id'].index.$get(args, options))
}

export async function putApiVpnTunnelTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn['tunnel-terminations'][':id'].index.$put(args, options))
}

export async function deleteApiVpnTunnelTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.vpn['tunnel-terminations'][':id'].index.$delete(args, options),
  )
}

export async function patchApiVpnTunnelTerminationsIdIndex(
  args: InferRequestType<(typeof client.api.vpn)['tunnel-terminations'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.vpn['tunnel-terminations'][':id'].index.$patch(args, options),
  )
}

export async function getApiVpnTunnelsIndex(
  args: InferRequestType<typeof client.api.vpn.tunnels.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels.index.$get(args, options))
}

export async function putApiVpnTunnelsIndex(
  args: InferRequestType<typeof client.api.vpn.tunnels.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels.index.$put(args, options))
}

export async function postApiVpnTunnelsIndex(
  args: InferRequestType<typeof client.api.vpn.tunnels.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels.index.$post(args, options))
}

export async function deleteApiVpnTunnelsIndex(
  args: InferRequestType<typeof client.api.vpn.tunnels.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels.index.$delete(args, options))
}

export async function patchApiVpnTunnelsIndex(
  args: InferRequestType<typeof client.api.vpn.tunnels.index.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels.index.$patch(args, options))
}

export async function getApiVpnTunnelsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.tunnels)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels[':id'].index.$get(args, options))
}

export async function putApiVpnTunnelsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.tunnels)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels[':id'].index.$put(args, options))
}

export async function deleteApiVpnTunnelsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.tunnels)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels[':id'].index.$delete(args, options))
}

export async function patchApiVpnTunnelsIdIndex(
  args: InferRequestType<(typeof client.api.vpn.tunnels)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vpn.tunnels[':id'].index.$patch(args, options))
}

export async function getApiWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lan-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lan-groups'].index.$get(args, options))
}

export async function putApiWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lan-groups']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lan-groups'].index.$put(args, options))
}

export async function postApiWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lan-groups']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lan-groups'].index.$post(args, options))
}

export async function deleteApiWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lan-groups']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lan-groups'].index.$delete(args, options),
  )
}

export async function patchApiWirelessWirelessLanGroupsIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lan-groups']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lan-groups'].index.$patch(args, options))
}

export async function getApiWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.wireless)['wireless-lan-groups'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lan-groups'][':id'].index.$get(args, options),
  )
}

export async function putApiWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.wireless)['wireless-lan-groups'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lan-groups'][':id'].index.$put(args, options),
  )
}

export async function deleteApiWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.wireless)['wireless-lan-groups'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lan-groups'][':id'].index.$delete(args, options),
  )
}

export async function patchApiWirelessWirelessLanGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.wireless)['wireless-lan-groups'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lan-groups'][':id'].index.$patch(args, options),
  )
}

export async function getApiWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'].index.$get(args, options))
}

export async function putApiWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'].index.$put(args, options))
}

export async function postApiWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'].index.$post(args, options))
}

export async function deleteApiWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'].index.$delete(args, options))
}

export async function patchApiWirelessWirelessLansIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'].index.$patch(args, options))
}

export async function getApiWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'][':id'].index.$get(args, options))
}

export async function putApiWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-lans'][':id'].index.$put(args, options))
}

export async function deleteApiWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lans'][':id'].index.$delete(args, options),
  )
}

export async function patchApiWirelessWirelessLansIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-lans'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-lans'][':id'].index.$patch(args, options),
  )
}

export async function getApiWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'].index.$get(args, options))
}

export async function putApiWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'].index.$put(args, options))
}

export async function postApiWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'].index.$post(args, options))
}

export async function deleteApiWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'].index.$delete(args, options))
}

export async function patchApiWirelessWirelessLinksIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'].index.$patch(args, options))
}

export async function getApiWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'][':id'].index.$get(args, options))
}

export async function putApiWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links'][':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.wireless['wireless-links'][':id'].index.$put(args, options))
}

export async function deleteApiWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links'][':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-links'][':id'].index.$delete(args, options),
  )
}

export async function patchApiWirelessWirelessLinksIdIndex(
  args: InferRequestType<(typeof client.api.wireless)['wireless-links'][':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.wireless['wireless-links'][':id'].index.$patch(args, options),
  )
}
