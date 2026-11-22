import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEvents202609EventDefinitions(
  args: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['2026-09']['event-definitions'].$get(args, options))
}

export async function postEvents202609EventDefinitions(
  args: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['2026-09']['event-definitions'].$post(args, options))
}

export async function getEvents202609EventDefinitionsEventName(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events['2026-09']['event-definitions'][':eventName'].$get(args, options),
  )
}

export async function deleteEvents202609EventDefinitionsEventName(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events['2026-09']['event-definitions'][':eventName'].$delete(args, options),
  )
}

export async function patchEvents202609EventDefinitionsEventName(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events['2026-09']['event-definitions'][':eventName'].$patch(args, options),
  )
}

export async function postEvents202609EventDefinitionsEventNameProperty(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events['2026-09']['event-definitions'][':eventName'].property.$post(args, options),
  )
}

export async function deleteEvents202609EventDefinitionsEventNamePropertyPropertyName(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events['2026-09']['event-definitions'][':eventName'].property[':propertyName'].$delete(
      args,
      options,
    ),
  )
}

export async function patchEvents202609EventDefinitionsEventNamePropertyPropertyName(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events['2026-09']['event-definitions'][':eventName'].property[':propertyName'].$patch(
      args,
      options,
    ),
  )
}

export async function postEvents202609SendBatch(
  args: InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['2026-09'].send.batch.$post(args, options))
}
