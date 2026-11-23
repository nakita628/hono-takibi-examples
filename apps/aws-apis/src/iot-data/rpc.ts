import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getThingsThingNameShadow(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].shadow.$get(args, options))
}

export async function postThingsThingNameShadow(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].shadow.$post(args, options))
}

export async function deleteThingsThingNameShadow(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].shadow.$delete(args, options))
}

export async function getRetainedMessageTopic(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retainedMessage[':topic'].$get(args, options))
}

export async function getApiThingsShadowListNamedShadowsForThingThingName(
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.things.shadow.ListNamedShadowsForThing[':thingName'].$get(args, options),
  )
}

export async function getRetainedMessage(
  args: InferRequestType<typeof client.retainedMessage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retainedMessage.$get(args, options))
}

export async function postTopicsTopic(
  args: InferRequestType<(typeof client.topics)[':topic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':topic'].$post(args, options))
}
