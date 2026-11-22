import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCharityOrgKey() {
  return ['charity_org'] as const
}

export function getCharityOrgQueryKey(args: InferRequestType<typeof client.charity_org.$get>) {
  const { header: _, ...keyArgs } = args
  return ['charity_org', '/charity_org', keyArgs] as const
}

export function getCharityOrgQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.charity_org.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCharityOrgQueryKey>
  >({
    queryKey: getCharityOrgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.charity_org.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCharityOrg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.charity_org.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCharityOrgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharityOrgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharityOrg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.charity_org.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCharityOrgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharityOrgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharityOrgCharityOrgIdQueryKey(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['charity_org', '/charity_org/:charity_org_id', keyArgs] as const
}

export function getCharityOrgCharityOrgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharityOrgCharityOrgIdQueryKey>
  >({
    queryKey: getCharityOrgCharityOrgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.charity_org[':charity_org_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCharityOrgCharityOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharityOrgCharityOrgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCharityOrgCharityOrgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCharityOrgCharityOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharityOrgCharityOrgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCharityOrgCharityOrgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
