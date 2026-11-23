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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AutnumAutnumIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>>,
) {
  return ['v1', '/v1/autnum/:autnumId', toValue(args)] as const
}

export function getV1AutnumAutnumIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AutnumAutnumIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.autnum[':autnumId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AutnumAutnumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AutnumAutnumIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.autnum)[':autnumId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AutnumAutnumIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AutnumAutnumIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.autnum[':autnumId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DomainDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>>,
) {
  return ['v1', '/v1/domain/:domainName', toValue(args)] as const
}

export function getV1DomainDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domain[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DomainDomainNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domain)[':domainName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domain[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.$get>>,
) {
  return ['v1', '/v1/domains', toValue(args)] as const
}

export function getV1DomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
          >,
          ReturnType<typeof getV1DomainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.entities.$get>>,
) {
  return ['v1', '/v1/entities', toValue(args)] as const
}

export function getV1EntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.entities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Entities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>
          >,
          ReturnType<typeof getV1EntitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EntityEntityIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>>,
) {
  return ['v1', '/v1/entity/:entityId', toValue(args)] as const
}

export function getV1EntityEntityIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EntityEntityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.entity[':entityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EntityEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EntityEntityIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.entity)[':entityId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntityEntityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EntityEntityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.entity[':entityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1HelpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.help.$get>>,
) {
  return ['v1', '/v1/help', toValue(args)] as const
}

export function getV1HelpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.help.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HelpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.help.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Help<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.help.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>
          >,
          ReturnType<typeof getV1HelpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.help.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HelpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HelpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.help.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ip.$get>>,
) {
  return ['v1', '/v1/ip', toValue(args)] as const
}

export function getV1IpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ip.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ip.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Ip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ip.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
          ReturnType<typeof getV1IpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IpIpIdIpId1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>,
) {
  return ['v1', '/v1/ip/:ipId/:ipId1', toValue(args)] as const
}

export function getV1IpIpIdIpId1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IpIpIdIpId1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ip[':ipId'][':ipId1'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IpIpIdIpId1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IpIpIdIpId1QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IpIpIdIpId1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IpIpIdIpId1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ip[':ipId'][':ipId1'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NameserverNameserverIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>,
) {
  return ['v1', '/v1/nameserver/:nameserverId', toValue(args)] as const
}

export function getV1NameserverNameserverIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameserverNameserverIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.nameserver[':nameserverId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameserverNameserverIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.nameserver)[':nameserverId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameserverNameserverIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameserverNameserverIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.nameserver[':nameserverId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NameserversQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.nameservers.$get>>,
) {
  return ['v1', '/v1/nameservers', toValue(args)] as const
}

export function getV1NameserversQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.nameservers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameserversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.nameservers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Nameservers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.nameservers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
          >,
          ReturnType<typeof getV1NameserversQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nameservers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameserversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameserversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.nameservers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
