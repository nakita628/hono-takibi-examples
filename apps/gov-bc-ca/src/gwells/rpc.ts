import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAquiferCodesDemandIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['demand']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes'].demand.index.$get(args, options))
}

export async function getAquiferCodesMaterialsIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['materials']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes'].materials.index.$get(args, options))
}

export async function getAquiferCodesProductivityIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['productivity']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes'].productivity.index.$get(args, options))
}

export async function getAquiferCodesQualityConcernsIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['quality-concerns']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes']['quality-concerns'].index.$get(args, options))
}

export async function getAquiferCodesSubtypesIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['subtypes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes'].subtypes.index.$get(args, options))
}

export async function getAquiferCodesVulnerabilityIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['vulnerability']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes'].vulnerability.index.$get(args, options))
}

export async function getAquiferCodesWaterUseIndex(
  args: InferRequestType<(typeof client)['aquifer-codes']['water-use']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['aquifer-codes']['water-use'].index.$get(args, options))
}

export async function getAquifersIndex(
  args: InferRequestType<typeof client.aquifers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aquifers.index.$get(args, options))
}

export async function getAquifersNamesIndex(
  args: InferRequestType<typeof client.aquifers.names.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aquifers.names.index.$get(args, options))
}

export async function getAquifersAquiferIdIndex(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aquifers[':aquifer_id'].index.$get(args, options))
}

export async function getAquifersAquiferIdFiles(
  args: InferRequestType<(typeof client.aquifers)[':aquifer_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aquifers[':aquifer_id'].files.$get(args, options))
}

export async function getCitiesDrillersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.cities.drillers.index.$get(undefined, options))
}

export async function getCitiesInstallersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.cities.installers.index.$get(undefined, options))
}

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getDrillersIndex(
  args: InferRequestType<typeof client.drillers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drillers.index.$get(args, options))
}

export async function getDrillersNamesIndex(
  args: InferRequestType<typeof client.drillers.names.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drillers.names.index.$get(args, options))
}

export async function getDrillersPersonGuidFilesIndex(
  args: InferRequestType<(typeof client.drillers)[':person_guid']['files']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drillers[':person_guid'].files.index.$get(args, options))
}

export async function getKeycloak(options?: ClientRequestOptions) {
  return await parseResponse(client.keycloak.$get(undefined, options))
}

export async function getSubmissionsOptionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.submissions.options.index.$get(undefined, options))
}

export async function getSurveysIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.surveys.index.$get(undefined, options))
}

export async function getWellsIndex(
  args: InferRequestType<typeof client.wells.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wells.index.$get(args, options))
}

export async function getWellsTagsIndex(
  args: InferRequestType<typeof client.wells.tags.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wells.tags.index.$get(args, options))
}

export async function getWellsTagFiles(
  args: InferRequestType<(typeof client.wells)[':tag']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wells[':tag'].files.$get(args, options))
}

export async function getWellsWellTagNumber(
  args: InferRequestType<(typeof client.wells)[':well_tag_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wells[':well_tag_number'].$get(args, options))
}
