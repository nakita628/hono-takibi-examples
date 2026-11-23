import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
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
