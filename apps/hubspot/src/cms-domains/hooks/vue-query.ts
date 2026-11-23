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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsDomains202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>>,
) {
  return ['cms', '/cms/domains/2026-09', toValue(args)] as const
}

export function getCmsDomains202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsDomains202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.domains['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsDomains202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsDomains202609QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsDomains202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsDomains202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.domains['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsDomains202609DomainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>
  >,
) {
  return ['cms', '/cms/domains/2026-09/:domainId', toValue(args)] as const
}

export function getCmsDomains202609DomainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsDomains202609DomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.domains['2026-09'][':domainId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsDomains202609DomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsDomains202609DomainIdQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsDomains202609DomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsDomains202609DomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.domains['2026-09'][':domainId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
