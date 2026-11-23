import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMessagesMessageIdQueryKey(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/:messageId', keyArgs] as const
}

export function getMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdQueryKey>
  >({
    queryKey: getMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostMessagesMessageIdMutationKey() {
  return ['messages', '/messages/:messageId', 'POST'] as const
}

export function getPostMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':messageId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMessageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':messageId']['$post']>) {
      return parseResponse(client.messages[':messageId'].$post(args, options))
    },
  })
}

export function createPostMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)[':messageId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)[':messageId']['$post']>,
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
    const mutationDefaults = getPostMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
