import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOpenaiKey() {
  return ['openai'] as const
}

export function getOpenaiDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.openai.details.$get>>,
) {
  return ['openai', '/openai/details', toValue(args)] as const
}

export function getOpenaiDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.openai.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOpenaiDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openai.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOpenaiDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.openai.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
          >,
          ReturnType<typeof getOpenaiDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenaiDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOpenaiDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.openai.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenaiSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.openai.search.$get>>,
) {
  return ['openai', '/openai/search', toValue(args)] as const
}

export function getOpenaiSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.openai.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOpenaiSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openai.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOpenaiSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.openai.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
          >,
          ReturnType<typeof getOpenaiSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenaiSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOpenaiSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.openai.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
