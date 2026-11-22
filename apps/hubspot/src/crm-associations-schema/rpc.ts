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
