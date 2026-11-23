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

export function getUserContentKey() {
  return ['user-content'] as const
}

export function getUserContentByDateJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>>,
) {
  return ['user-content', '/user-content/by-date.json', toValue(args)] as const
}

export function getUserContentByDateJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserContentByDateJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-content']['by-date.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserContentByDateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['by-date.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['by-date.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['by-date.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserContentByDateJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['user-content']['by-date.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserContentByDateJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserContentByDateJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user-content']['by-date.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserContentRecentJsonQueryKey() {
  return ['user-content', '/user-content/recent.json'] as const
}

export function getUserContentRecentJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserContentRecentJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-content']['recent.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserContentRecentJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['recent.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['recent.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['recent.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserContentRecentJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['user-content']['recent.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserContentRecentJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserContentRecentJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['user-content']['recent.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserContentUrlJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['url.json']['$get']>>,
) {
  return ['user-content', '/user-content/url.json', toValue(args)] as const
}

export function getUserContentUrlJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['url.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserContentUrlJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-content']['url.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserContentUrlJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user-content']['url.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['url.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['url.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['url.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserContentUrlJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['user-content']['url.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserContentUrlJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserContentUrlJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user-content']['url.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserContentUserJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['user.json']['$get']>>,
) {
  return ['user-content', '/user-content/user.json', toValue(args)] as const
}

export function getUserContentUserJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['user.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserContentUserJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-content']['user.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserContentUserJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['user.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user-content']['user.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['user.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-content']['user.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserContentUserJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['user-content']['user.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserContentUserJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserContentUserJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user-content']['user.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
