import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createCharityOrg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.charity_org.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharityOrgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createCharityOrgCharityOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCharityOrgCharityOrgIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
