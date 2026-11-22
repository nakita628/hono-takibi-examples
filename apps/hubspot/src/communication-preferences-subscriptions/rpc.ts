import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCommunicationPreferences202609Definitions(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].definitions.$get(args, options),
  )
}

export async function postCommunicationPreferences202609LinksGenerate(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].links.generate.$post(args, options),
  )
}

export async function postCommunicationPreferences202609StatusesBatchRead(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses.batch.read.$post(args, options),
  )
}

export async function postCommunicationPreferences202609StatusesBatchUnsubscribeAll(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses.batch['unsubscribe-all'].$post(
      args,
      options,
    ),
  )
}

export async function postCommunicationPreferences202609StatusesBatchUnsubscribeAllRead(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses.batch['unsubscribe-all'].read.$post(
      args,
      options,
    ),
  )
}

export async function postCommunicationPreferences202609StatusesBatchWrite(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses.batch.write.$post(args, options),
  )
}

export async function getCommunicationPreferences202609StatusesSubscriberIdString(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$get(
      args,
      options,
    ),
  )
}

export async function postCommunicationPreferences202609StatusesSubscriberIdString(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$post(
      args,
      options,
    ),
  )
}

export async function getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
      'unsubscribe-all'
    ].$get(args, options),
  )
}

export async function postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
      'unsubscribe-all'
    ].$post(args, options),
  )
}
