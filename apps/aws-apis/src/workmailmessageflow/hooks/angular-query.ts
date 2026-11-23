import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectMessagesMessageId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
