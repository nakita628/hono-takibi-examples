import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNotetaker202609ConversationRecapObjectTypeIdObjectId(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notetaker['2026-09'].conversation.recap[':objectTypeId'][':objectId'].$get(
      args,
      options,
    ),
  )
}
