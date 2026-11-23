import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmAssociations202609DefinitionsConfigurationsAll(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'].definitions.configurations.all.$get(undefined, options),
  )
}

export async function getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectType(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
      ':toObjectType'
    ].$get(args, options),
  )
}

export async function postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreate(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
      ':toObjectType'
    ].batch.create.$post(args, options),
  )
}

export async function postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurge(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
      ':toObjectType'
    ].batch.purge.$post(args, options),
  )
}

export async function postCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
      ':toObjectType'
    ].batch.update.$post(args, options),
  )
}

export async function postCrmAssociations202609UsageHighUsageReportUserId(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'].usage['high-usage-report'][':userId'].$post(args, options),
  )
}

export async function postCrmAssociations202609FromObjectTypeToObjectTypeBatchArchive(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.archive.$post(
      args,
      options,
    ),
  )
}

export async function postCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefault(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][
      ':toObjectType'
    ].batch.associate.default.$post(args, options),
  )
}

export async function postCrmAssociations202609FromObjectTypeToObjectTypeBatchCreate(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.create.$post(
      args,
      options,
    ),
  )
}

export async function postCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchive(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][
      ':toObjectType'
    ].batch.labels.archive.$post(args, options),
  )
}

export async function postCrmAssociations202609FromObjectTypeToObjectTypeBatchRead(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.read.$post(
      args,
      options,
    ),
  )
}

export async function getCrmAssociations202609FromObjectTypeToObjectTypeLabels(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$get(
      args,
      options,
    ),
  )
}

export async function putCrmAssociations202609FromObjectTypeToObjectTypeLabels(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$put(
      args,
      options,
    ),
  )
}

export async function postCrmAssociations202609FromObjectTypeToObjectTypeLabels(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$post(
      args,
      options,
    ),
  )
}

export async function deleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeId(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels[
      ':associationTypeId'
    ].$delete(args, options),
  )
}

export async function putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
      ':toObjectType'
    ][':toObjectId'].$put(args, options),
  )
}

export async function getCrmObjects202609ObjectType(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'][':objectType'].$get(args, options))
}

export async function postCrmObjects202609ObjectType(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.objects['2026-09'][':objectType'].$post(args, options))
}

export async function postCrmObjects202609ObjectTypeBatchArchive(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.archive.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchCreate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.create.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchRead(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.read.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchUpdate(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.update.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeBatchUpsert(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].batch.upsert.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeGdprDelete(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType']['gdpr-delete'].$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeMerge(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].merge.$post(args, options),
  )
}

export async function postCrmObjects202609ObjectTypeSearch(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'].search.$post(args, options),
  )
}

export async function getCrmObjects202609ObjectTypeObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, options),
  )
}

export async function deleteCrmObjects202609ObjectTypeObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].$delete(args, options),
  )
}

export async function patchCrmObjects202609ObjectTypeObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].$patch(args, options),
  )
}

export async function getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectType(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'].$get(
      args,
      options,
    ),
  )
}

export async function putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$put(args, options),
  )
}

export async function deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
      ':toObjectId'
    ].$delete(args, options),
  )
}
