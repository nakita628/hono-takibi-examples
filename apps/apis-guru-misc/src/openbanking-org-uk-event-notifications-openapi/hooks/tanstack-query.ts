import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEventNotificationsKey() {
  return ['event-notifications'] as const
}

export function getPostEventNotificationsMutationKey() {
  return ['event-notifications', '/event-notifications', 'POST'] as const
}

export function getPostEventNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-notifications']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['event-notifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['event-notifications']['$post']>) {
      return parseResponse(client['event-notifications'].$post(args, options))
    },
  })
}

export function usePostEventNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['event-notifications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['event-notifications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventNotificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
