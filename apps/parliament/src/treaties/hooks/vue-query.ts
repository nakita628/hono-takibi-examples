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

export function getApiBusinessItemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>>,
) {
  return ['api', '/api/BusinessItem/:id', toValue(args)] as const
}

export function getApiBusinessItemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBusinessItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.BusinessItem[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBusinessItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBusinessItemIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBusinessItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBusinessItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.BusinessItem[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGovernmentOrganisationQueryKey() {
  return ['api', '/api/GovernmentOrganisation'] as const
}

export function getApiGovernmentOrganisationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiGovernmentOrganisationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.GovernmentOrganisation.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGovernmentOrganisation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>>
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
                Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>
              >
            >
          >,
          ReturnType<typeof getApiGovernmentOrganisationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGovernmentOrganisationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiGovernmentOrganisationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.GovernmentOrganisation.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSeriesMembershipQueryKey() {
  return ['api', '/api/SeriesMembership'] as const
}

export function getApiSeriesMembershipQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSeriesMembershipQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.SeriesMembership.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSeriesMembership<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>
            >
          >,
          ReturnType<typeof getApiSeriesMembershipQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSeriesMembershipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSeriesMembershipQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.SeriesMembership.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTreatyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Treaty.$get>>,
) {
  return ['api', '/api/Treaty', toValue(args)] as const
}

export function getApiTreatyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Treaty.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTreatyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Treaty.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTreaty<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Treaty.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>
          >,
          ReturnType<typeof getApiTreatyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTreatyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTreatyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Treaty.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTreatyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Treaty)[':id']['$get']>>,
) {
  return ['api', '/api/Treaty/:id', toValue(args)] as const
}

export function getApiTreatyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Treaty)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTreatyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Treaty[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTreatyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Treaty)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTreatyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTreatyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTreatyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Treaty[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTreatyIdBusinessItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>
  >,
) {
  return ['api', '/api/Treaty/:id/BusinessItems', toValue(args)] as const
}

export function getApiTreatyIdBusinessItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTreatyIdBusinessItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Treaty[':id'].BusinessItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTreatyIdBusinessItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTreatyIdBusinessItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTreatyIdBusinessItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTreatyIdBusinessItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Treaty[':id'].BusinessItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
