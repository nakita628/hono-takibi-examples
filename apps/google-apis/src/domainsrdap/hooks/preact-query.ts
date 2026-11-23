import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AutnumAutnumIdQueryKey(
  args: InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>,
) {
  return ['v1', '/v1/autnum/:autnumId', args] as const
}

export function getV1AutnumAutnumIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AutnumAutnumIdQueryKey>
  >({
    queryKey: getV1AutnumAutnumIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.autnum[':autnumId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AutnumAutnumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AutnumAutnumIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AutnumAutnumIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AutnumAutnumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AutnumAutnumIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AutnumAutnumIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1DomainDomainNameQueryKey(
  args: InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>,
) {
  return ['v1', '/v1/domain/:domainName', args] as const
}

export function getV1DomainDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainDomainNameQueryKey>
  >({
    queryKey: getV1DomainDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domain[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DomainDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DomainDomainNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1DomainDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DomainDomainNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1DomainsQueryKey(args: InferRequestType<typeof client.v1.domains.$get>) {
  return ['v1', '/v1/domains', args] as const
}

export function getV1DomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DomainsQueryKey>
  >({
    queryKey: getV1DomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EntitiesQueryKey(args: InferRequestType<typeof client.v1.entities.$get>) {
  return ['v1', '/v1/entities', args] as const
}

export function getV1EntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.entities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesQueryKey>
  >({
    queryKey: getV1EntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.entities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Entities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.entities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EntitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Entities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.entities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EntitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EntityEntityIdQueryKey(
  args: InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>,
) {
  return ['v1', '/v1/entity/:entityId', args] as const
}

export function getV1EntityEntityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntityEntityIdQueryKey>
  >({
    queryKey: getV1EntityEntityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.entity[':entityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EntityEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntityEntityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EntityEntityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EntityEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntityEntityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EntityEntityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1HelpQueryKey(args: InferRequestType<typeof client.v1.help.$get>) {
  return ['v1', '/v1/help', args] as const
}

export function getV1HelpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.help.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HelpQueryKey>
  >({
    queryKey: getV1HelpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.help.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Help<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.help.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1HelpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1HelpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Help<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.help.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1HelpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1HelpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1IpQueryKey(args: InferRequestType<typeof client.v1.ip.$get>) {
  return ['v1', '/v1/ip', args] as const
}

export function getV1IpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.ip.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IpQueryKey>
  >({
    queryKey: getV1IpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ip.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Ip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.ip.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1IpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Ip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.ip.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1IpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1IpIpIdIpId1QueryKey(
  args: InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>,
) {
  return ['v1', '/v1/ip/:ipId/:ipId1', args] as const
}

export function getV1IpIpIdIpId1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IpIpIdIpId1QueryKey>
  >({
    queryKey: getV1IpIpIdIpId1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ip[':ipId'][':ipId1'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IpIpIdIpId1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IpIpIdIpId1QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IpIpIdIpId1QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1IpIpIdIpId1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IpIpIdIpId1QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IpIpIdIpId1QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1NameserverNameserverIdQueryKey(
  args: InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>,
) {
  return ['v1', '/v1/nameserver/:nameserverId', args] as const
}

export function getV1NameserverNameserverIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameserverNameserverIdQueryKey>
  >({
    queryKey: getV1NameserverNameserverIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.nameserver[':nameserverId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1NameserverNameserverId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameserverNameserverIdQueryKey>
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
      ...getV1NameserverNameserverIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1NameserverNameserverId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameserverNameserverIdQueryKey>
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
      ...getV1NameserverNameserverIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1NameserversQueryKey(
  args: InferRequestType<typeof client.v1.nameservers.$get>,
) {
  return ['v1', '/v1/nameservers', args] as const
}

export function getV1NameserversQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.nameservers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameserversQueryKey>
  >({
    queryKey: getV1NameserversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.nameservers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Nameservers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.nameservers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameserversQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameserversQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Nameservers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.nameservers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameserversQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameserversQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
