import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiPatchV1Advisories(
  args: InferRequestType<typeof client.api.patch.v1.advisories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.advisories.$get(args, options))
}

export async function getApiPatchV1AdvisoriesAdvisoryId(
  args: InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.advisories[':advisory_id'].$get(args, options))
}

export async function getApiPatchV1AdvisoriesAdvisoryIdSystems(
  args: InferRequestType<
    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.advisories[':advisory_id'].systems.$get(args, options),
  )
}

export async function getApiPatchV1ExportAdvisories(
  args: InferRequestType<typeof client.api.patch.v1.export.advisories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.export.advisories.$get(args, options))
}

export async function getApiPatchV1ExportAdvisoriesAdvisoryIdSystems(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.export.advisories[':advisory_id'].systems.$get(args, options),
  )
}

export async function getApiPatchV1ExportPackages(
  args: InferRequestType<typeof client.api.patch.v1.export.packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.export.packages.$get(args, options))
}

export async function getApiPatchV1ExportPackagesPackageNameSystems(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.export.packages[':package_name'].systems.$get(args, options),
  )
}

export async function getApiPatchV1ExportSystems(
  args: InferRequestType<typeof client.api.patch.v1.export.systems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.export.systems.$get(args, options))
}

export async function getApiPatchV1ExportSystemsInventoryIdAdvisories(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.export.systems[':inventory_id'].advisories.$get(args, options),
  )
}

export async function getApiPatchV1ExportSystemsInventoryIdPackages(
  args: InferRequestType<
    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.export.systems[':inventory_id'].packages.$get(args, options),
  )
}

export async function getApiPatchV1PackagesIndex(
  args: InferRequestType<typeof client.api.patch.v1.packages.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.packages.index.$get(args, options))
}

export async function getApiPatchV1PackagesPackageName(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.packages[':package_name'].$get(args, options))
}

export async function getApiPatchV1PackagesPackageNameSystems(
  args: InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.packages[':package_name'].systems.$get(args, options),
  )
}

export async function getApiPatchV1PackagesPackageNameVersions(
  args: InferRequestType<
    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.packages[':package_name'].versions.$get(args, options),
  )
}

export async function getApiPatchV1Systems(
  args: InferRequestType<typeof client.api.patch.v1.systems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.systems.$get(args, options))
}

export async function getApiPatchV1SystemsInventoryId(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.systems[':inventory_id'].$get(args, options))
}

export async function deleteApiPatchV1SystemsInventoryId(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.systems[':inventory_id'].$delete(args, options))
}

export async function getApiPatchV1SystemsInventoryIdAdvisories(
  args: InferRequestType<
    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.systems[':inventory_id'].advisories.$get(args, options),
  )
}

export async function getApiPatchV1SystemsInventoryIdPackages(
  args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.patch.v1.systems[':inventory_id'].packages.$get(args, options),
  )
}

export async function postApiPatchV1ViewsAdvisoriesSystems(
  args: InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.views.advisories.systems.$post(args, options))
}

export async function postApiPatchV1ViewsSystemsAdvisories(
  args: InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patch.v1.views.systems.advisories.$post(args, options))
}
