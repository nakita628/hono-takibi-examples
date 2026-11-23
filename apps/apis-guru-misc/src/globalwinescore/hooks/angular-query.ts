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

export function getGlobalwinescoresKey() {
  return ['globalwinescores'] as const
}

export function getGlobalwinescoresIndexQueryKey(
  args: InferRequestType<typeof client.globalwinescores.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['globalwinescores', '/globalwinescores/', keyArgs] as const
}

export function getGlobalwinescoresIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.globalwinescores.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalwinescoresIndexQueryKey>
  >({
    queryKey: getGlobalwinescoresIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.globalwinescores.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalwinescoresIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.globalwinescores.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalwinescoresIndexQueryKey>
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
      ...getGlobalwinescoresIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGlobalwinescoresLatestIndexQueryKey(
  args: InferRequestType<typeof client.globalwinescores.latest.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['globalwinescores', '/globalwinescores/latest/', keyArgs] as const
}

export function getGlobalwinescoresLatestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.globalwinescores.latest.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalwinescoresLatestIndexQueryKey>
  >({
    queryKey: getGlobalwinescoresLatestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.globalwinescores.latest.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlobalwinescoresLatestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.globalwinescores.latest.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalwinescoresLatestIndexQueryKey>
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
      ...getGlobalwinescoresLatestIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
