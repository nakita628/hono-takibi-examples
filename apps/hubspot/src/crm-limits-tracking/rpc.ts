import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmLimits202609AssociationsLabels(
  args: InferRequestType<(typeof client.crm.limits)['2026-09']['associations']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.limits['2026-09'].associations.labels.$get(args, options))
}

export async function getCrmLimits202609AssociationsRecordsFrom(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crm.limits['2026-09'].associations.records.from.$get(undefined, options),
  )
}

export async function getCrmLimits202609AssociationsRecordsFromObjectTypeIdTo(
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId']['to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'].to.$get(args, options),
  )
}

export async function getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeId(
  args: InferRequestType<
    (typeof client.crm.limits)['2026-09']['associations']['records'][':fromObjectTypeId'][':toObjectTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.limits['2026-09'].associations.records[':fromObjectTypeId'][':toObjectTypeId'].$get(
      args,
      options,
    ),
  )
}

export async function getCrmLimits202609CalculatedProperties(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crm.limits['2026-09']['calculated-properties'].$get(undefined, options),
  )
}

export async function getCrmLimits202609CustomObjectTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crm.limits['2026-09']['custom-object-types'].$get(undefined, options),
  )
}

export async function getCrmLimits202609CustomProperties(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crm.limits['2026-09']['custom-properties'].$get(undefined, options),
  )
}

export async function getCrmLimits202609Pipelines(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.limits['2026-09'].pipelines.$get(undefined, options))
}

export async function getCrmLimits202609Records(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.limits['2026-09'].records.$get(undefined, options))
}
