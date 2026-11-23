import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV4Boundaries(
  args: InferRequestType<typeof client.v4.boundaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.boundaries.$post(args, options))
}

export async function postV4BoundariesQuery(
  args: InferRequestType<typeof client.v4.boundaries.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.boundaries.query.$post(args, options))
}

export async function getV4BoundariesBoundaryId(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.boundaries[':boundaryId'].$get(args, options))
}

export async function postV4Exports(
  args: InferRequestType<typeof client.v4.exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.exports.$post(args, options))
}

export async function getV4ExportsExportIdContents(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.exports[':exportId'].contents.$get(args, options))
}

export async function getV4ExportsExportIdStatus(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.exports[':exportId'].status.$get(args, options))
}

export async function getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationId(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.farmOrganizations[':farmOrganizationType'][':farmOrganizationId'].$get(args, options),
  )
}

export async function getV4Fields(
  args: InferRequestType<typeof client.v4.fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.fields.$get(args, options))
}

export async function getV4FieldsAll(
  args: InferRequestType<typeof client.v4.fields.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.fields.all.$get(args, options))
}

export async function getV4FieldsFieldId(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.fields[':fieldId'].$get(args, options))
}

export async function getV4LayersAsApplied(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.layers.asApplied.$get(args, options))
}

export async function getV4LayersAsAppliedActivityIdContents(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.layers.asApplied[':activityId'].contents.$get(args, options))
}

export async function getV4LayersAsHarvested(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.layers.asHarvested.$get(args, options))
}

export async function getV4LayersAsHarvestedActivityIdContents(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.layers.asHarvested[':activityId'].contents.$get(args, options),
  )
}

export async function getV4LayersAsPlanted(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.layers.asPlanted.$get(args, options))
}

export async function getV4LayersAsPlantedActivityIdContents(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.layers.asPlanted[':activityId'].contents.$get(args, options))
}

export async function getV4LayersScoutingObservations(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.layers.scoutingObservations.$get(args, options))
}

export async function getV4LayersScoutingObservationsScoutingObservationId(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.layers.scoutingObservations[':scoutingObservationId'].$get(args, options),
  )
}

export async function getV4LayersScoutingObservationsScoutingObservationIdAttachments(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments.$get(args, options),
  )
}

export async function getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments[
      ':attachmentId'
    ].contents.$get(args, options),
  )
}

export async function getV4OperationsAll(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.operations.all.$get(args, options))
}

export async function getV4ResourceOwnersResourceOwnerId(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.resourceOwners[':resourceOwnerId'].$get(args, options))
}

export async function postV4Uploads(
  args: InferRequestType<typeof client.v4.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads.$post(args, options))
}

export async function postV4UploadsStatusQuery(
  args: InferRequestType<typeof client.v4.uploads.status.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads.status.query.$post(args, options))
}

export async function putV4UploadsUploadId(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads[':uploadId'].$put(args, options))
}

export async function getV4UploadsUploadIdStatus(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads[':uploadId'].status.$get(args, options))
}
