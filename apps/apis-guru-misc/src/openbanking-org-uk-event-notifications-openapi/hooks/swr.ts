import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEventNotificationsKey() {
  return ['event-notifications'] as const
}

export function getPostEventNotificationsKey() {
  return ['event-notifications', '/event-notifications', 'POST'] as const
}

export function usePostEventNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-notifications']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['event-notifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['event-notifications']['$post']> },
      ) => parseResponse(client['event-notifications'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
