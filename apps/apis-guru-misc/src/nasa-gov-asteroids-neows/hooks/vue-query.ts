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

export function getApiKey() {
  return ['api'] as const
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          ReturnType<typeof getApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProjectsIdFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id:.format']['$get']>>,
) {
  return ['api', '/api/projects/:id:.format', toValue(args)] as const
}

export function getApiProjectsIdFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id:.format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProjectsIdFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.projects[':id:.format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProjectsIdFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.projects)[':id:.format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.projects)[':id:.format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.projects)[':id:.format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.projects)[':id:.format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProjectsIdFormatQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.projects)[':id:.format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProjectsIdFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProjectsIdFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.projects[':id:.format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProjectsFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['projects:.format']['$get']>>,
) {
  return ['api', '/api/projects:.format', toValue(args)] as const
}

export function getApiProjectsFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['projects:.format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProjectsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['projects:.format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProjectsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['projects:.format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['projects:.format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['projects:.format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['projects:.format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProjectsFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['projects:.format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProjectsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProjectsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['projects:.format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
