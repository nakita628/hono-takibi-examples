import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createPostEventNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
