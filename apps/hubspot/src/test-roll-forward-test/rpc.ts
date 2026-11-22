import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPublicApiVersioningTest202609Widgets(options?: ClientRequestOptions) {
  return await parseResponse(
    client.public.api.versioning.test['2026-09'].widgets.$get(undefined, options),
  )
}

export async function postPublicApiVersioningTest202609Widgets(
  args: InferRequestType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.versioning.test['2026-09'].widgets.$post(args, options),
  )
}

export async function getPublicApiVersioningTest202609WidgetsWidgetId(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$get(args, options),
  )
}

export async function putPublicApiVersioningTest202609WidgetsWidgetId(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$put(args, options),
  )
}

export async function deletePublicApiVersioningTest202609WidgetsWidgetId(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$delete(args, options),
  )
}
