import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisQueryKey(args: InferRequestType<typeof client.apis.$get>) {
  return ['apis', '/apis', args] as const
}

export function getApisQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApisQueryKey>
  >({
    queryKey: getApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApisApiVersionRestQueryKey(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
) {
  return ['apis', '/apis/:api/:version/rest', args] as const
}

export function getApisApiVersionRestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiVersionRestQueryKey>
  >({
    queryKey: getApisApiVersionRestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':api'][':version'].rest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiVersionRest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiVersionRestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisApiVersionRestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
