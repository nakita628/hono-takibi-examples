import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmObjectSchemas202609Schemas(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['crm-object-schemas']['2026-09'].schemas.$get(args, options))
}

export async function postCrmObjectSchemas202609Schemas(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['crm-object-schemas']['2026-09'].schemas.$post(args, options))
}

export async function postCrmObjectSchemas202609SchemasBatchRead(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['crm-object-schemas']['2026-09'].schemas.batch.read.$post(args, options),
  )
}

export async function getCrmObjectSchemas202609SchemasObjectType(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['crm-object-schemas']['2026-09'].schemas[':objectType'].$get(args, options),
  )
}

export async function deleteCrmObjectSchemas202609SchemasObjectType(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['crm-object-schemas']['2026-09'].schemas[':objectType'].$delete(args, options),
  )
}

export async function patchCrmObjectSchemas202609SchemasObjectType(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['crm-object-schemas']['2026-09'].schemas[':objectType'].$patch(args, options),
  )
}

export async function postCrmObjectSchemas202609SchemasObjectTypeAssociations(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['crm-object-schemas']['2026-09'].schemas[':objectType'].associations.$post(
      args,
      options,
    ),
  )
}

export async function deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifier(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['crm-object-schemas']['2026-09'].schemas[':objectType'].associations[
      ':associationIdentifier'
    ].$delete(args, options),
  )
}
