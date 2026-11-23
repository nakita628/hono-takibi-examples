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

export function getDescriptionKey() {
  return ['description'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueryExtensionKey() {
  return ['query.{extension}'] as const
}

export function getDescriptionQueryKey() {
  return ['description', '/description'] as const
}

export function getDescriptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDescriptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.description.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>
          >,
          ReturnType<typeof getDescriptionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDescriptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.description.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.$get>>,
) {
  return ['query', '/query', toValue(args)] as const
}

export function getQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetQuery<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
          ReturnType<typeof getQueryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryExtensionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['query.{extension}']['$get']>>,
) {
  return ['query.{extension}', '/query.{extension}', toValue(args)] as const
}

export function getQueryExtensionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['query.{extension}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['query.{extension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['query.{extension}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['query.{extension}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['query.{extension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['query.{extension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueryExtensionQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['query.{extension}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['query.{extension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
