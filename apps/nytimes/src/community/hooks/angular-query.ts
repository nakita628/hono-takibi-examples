import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUserContentKey() {
  return ['user-content'] as const
}

export function getUserContentByDateJsonQueryKey(
  args: InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>,
) {
  return ['user-content', '/user-content/by-date.json', args] as const
}

export function getUserContentByDateJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['by-date.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserContentByDateJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-content']['by-date.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserContentByDateJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['by-date.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['user-content']['by-date.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserContentByDateJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserContentRecentJsonQueryKey() {
  return ['user-content', '/user-content/recent.json'] as const
}

export function getUserContentRecentJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['recent.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getUserContentRecentJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['user-content']['recent.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserContentRecentJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['recent.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserContentRecentJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUserContentUrlJsonQueryKey(
  args: InferRequestType<(typeof client)['user-content']['url.json']['$get']>,
) {
  return ['user-content', '/user-content/url.json', args] as const
}

export function getUserContentUrlJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user-content']['url.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-content']['url.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserContentUrlJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-content']['url.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserContentUrlJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user-content']['url.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['user-content']['url.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserContentUrlJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserContentUserJsonQueryKey(
  args: InferRequestType<(typeof client)['user-content']['user.json']['$get']>,
) {
  return ['user-content', '/user-content/user.json', args] as const
}

export function getUserContentUserJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['user.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-content']['user.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserContentUserJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-content']['user.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserContentUserJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-content']['user.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['user-content']['user.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserContentUserJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
