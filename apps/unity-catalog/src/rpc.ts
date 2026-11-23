import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCatalogs(
  args: InferRequestType<typeof client.catalogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.$get(args, options))
}

export async function postCatalogs(
  args: InferRequestType<typeof client.catalogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.$post(args, options))
}

export async function getCatalogsName(
  args: InferRequestType<(typeof client.catalogs)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':name'].$get(args, options))
}

export async function deleteCatalogsName(
  args: InferRequestType<(typeof client.catalogs)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':name'].$delete(args, options))
}

export async function patchCatalogsName(
  args: InferRequestType<(typeof client.catalogs)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':name'].$patch(args, options))
}

export async function getSchemas(
  args: InferRequestType<typeof client.schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.$get(args, options))
}

export async function postSchemas(
  args: InferRequestType<typeof client.schemas.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.$post(args, options))
}

export async function getSchemasFullName(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas[':full_name'].$get(args, options))
}

export async function deleteSchemasFullName(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas[':full_name'].$delete(args, options))
}

export async function patchSchemasFullName(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas[':full_name'].$patch(args, options))
}

export async function postStagingTables(
  args: InferRequestType<(typeof client)['staging-tables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['staging-tables'].$post(args, options))
}

export async function getTables(
  args: InferRequestType<typeof client.tables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables.$get(args, options))
}

export async function postTables(
  args: InferRequestType<typeof client.tables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables.$post(args, options))
}

export async function getTablesFullName(
  args: InferRequestType<(typeof client.tables)[':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':full_name'].$get(args, options))
}

export async function deleteTablesFullName(
  args: InferRequestType<(typeof client.tables)[':full_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':full_name'].$delete(args, options))
}

export async function patchTablesFullName(
  args: InferRequestType<(typeof client.tables)[':full_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':full_name'].$patch(args, options))
}

export async function getVolumes(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$get(args, options))
}

export async function postVolumes(
  args: InferRequestType<typeof client.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$post(args, options))
}

export async function getVolumesName(
  args: InferRequestType<(typeof client.volumes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':name'].$get(args, options))
}

export async function deleteVolumesName(
  args: InferRequestType<(typeof client.volumes)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':name'].$delete(args, options))
}

export async function patchVolumesName(
  args: InferRequestType<(typeof client.volumes)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':name'].$patch(args, options))
}

export async function postTemporaryModelVersionCredentials(
  args: InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['temporary-model-version-credentials'].$post(args, options))
}

export async function postTemporaryTableCredentials(
  args: InferRequestType<(typeof client)['temporary-table-credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['temporary-table-credentials'].$post(args, options))
}

export async function postTemporaryVolumeCredentials(
  args: InferRequestType<(typeof client)['temporary-volume-credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['temporary-volume-credentials'].$post(args, options))
}

export async function getFunctions(
  args: InferRequestType<typeof client.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.$get(args, options))
}

export async function postFunctions(
  args: InferRequestType<typeof client.functions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.$post(args, options))
}

export async function getFunctionsName(
  args: InferRequestType<(typeof client.functions)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':name'].$get(args, options))
}

export async function deleteFunctionsName(
  args: InferRequestType<(typeof client.functions)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':name'].$delete(args, options))
}

export async function patchFunctionsName(
  args: InferRequestType<(typeof client.functions)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':name'].$patch(args, options))
}

export async function getModels(
  args: InferRequestType<typeof client.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.$get(args, options))
}

export async function postModels(
  args: InferRequestType<typeof client.models.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.$post(args, options))
}

export async function getModelsFullName(
  args: InferRequestType<(typeof client.models)[':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':full_name'].$get(args, options))
}

export async function deleteModelsFullName(
  args: InferRequestType<(typeof client.models)[':full_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':full_name'].$delete(args, options))
}

export async function patchModelsFullName(
  args: InferRequestType<(typeof client.models)[':full_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':full_name'].$patch(args, options))
}

export async function postModelsVersions(
  args: InferRequestType<typeof client.models.versions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.versions.$post(args, options))
}

export async function getModelsFullNameVersions(
  args: InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':full_name'].versions.$get(args, options))
}

export async function getModelsFullNameVersionsVersion(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':full_name'].versions[':version'].$get(args, options))
}

export async function deleteModelsFullNameVersionsVersion(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':full_name'].versions[':version'].$delete(args, options),
  )
}

export async function patchModelsFullNameVersionsVersion(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':full_name'].versions[':version'].$patch(args, options))
}

export async function patchModelsFullNameVersionsVersionFinalize(
  args: InferRequestType<
    (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':full_name'].versions[':version'].finalize.$patch(args, options),
  )
}

export async function postTemporaryPathCredentials(
  args: InferRequestType<(typeof client)['temporary-path-credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['temporary-path-credentials'].$post(args, options))
}

export async function getPermissionsSecurableTypeFullName(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.permissions[':securable_type'][':full_name'].$get(args, options),
  )
}

export async function patchPermissionsSecurableTypeFullName(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.permissions[':securable_type'][':full_name'].$patch(args, options),
  )
}

export async function getMetastoreSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.metastore_summary.$get(undefined, options))
}

export async function getCredentials(
  args: InferRequestType<typeof client.credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials.$get(args, options))
}

export async function postCredentials(
  args: InferRequestType<typeof client.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials.$post(args, options))
}

export async function getCredentialsName(
  args: InferRequestType<(typeof client.credentials)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials[':name'].$get(args, options))
}

export async function deleteCredentialsName(
  args: InferRequestType<(typeof client.credentials)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials[':name'].$delete(args, options))
}

export async function patchCredentialsName(
  args: InferRequestType<(typeof client.credentials)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials[':name'].$patch(args, options))
}

export async function getExternalLocations(
  args: InferRequestType<(typeof client)['external-locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['external-locations'].$get(args, options))
}

export async function postExternalLocations(
  args: InferRequestType<(typeof client)['external-locations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['external-locations'].$post(args, options))
}

export async function getExternalLocationsName(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['external-locations'][':name'].$get(args, options))
}

export async function deleteExternalLocationsName(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['external-locations'][':name'].$delete(args, options))
}

export async function patchExternalLocationsName(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['external-locations'][':name'].$patch(args, options))
}

export async function getDeltaPreviewCommits(
  args: InferRequestType<typeof client.delta.preview.commits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delta.preview.commits.$get(args, options))
}

export async function postDeltaPreviewCommits(
  args: InferRequestType<typeof client.delta.preview.commits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delta.preview.commits.$post(args, options))
}
