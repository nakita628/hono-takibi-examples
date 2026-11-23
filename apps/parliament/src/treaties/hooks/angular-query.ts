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

export function getApiKey() {
  return ['api'] as const
}

export function getApiBusinessItemIdQueryKey(
  args: InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>,
) {
  return ['api', '/api/BusinessItem/:id', args] as const
}

export function getApiBusinessItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBusinessItemIdQueryKey>
  >({
    queryKey: getApiBusinessItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.BusinessItem[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBusinessItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.BusinessItem)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBusinessItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBusinessItemIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiGovernmentOrganisationQueryKey() {
  return ['api', '/api/GovernmentOrganisation'] as const
}

export function getApiGovernmentOrganisationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGovernmentOrganisationQueryKey>
  >({
    queryKey: getApiGovernmentOrganisationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.GovernmentOrganisation.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiGovernmentOrganisation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.GovernmentOrganisation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGovernmentOrganisationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGovernmentOrganisationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiSeriesMembershipQueryKey() {
  return ['api', '/api/SeriesMembership'] as const
}

export function getApiSeriesMembershipQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSeriesMembershipQueryKey>
  >({
    queryKey: getApiSeriesMembershipQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.SeriesMembership.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSeriesMembership<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.SeriesMembership.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSeriesMembershipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSeriesMembershipQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiTreatyQueryKey(args: InferRequestType<typeof client.api.Treaty.$get>) {
  return ['api', '/api/Treaty', args] as const
}

export function getApiTreatyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Treaty.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTreatyQueryKey>
  >({
    queryKey: getApiTreatyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Treaty.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiTreaty<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Treaty.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Treaty.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTreatyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTreatyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiTreatyIdQueryKey(
  args: InferRequestType<(typeof client.api.Treaty)[':id']['$get']>,
) {
  return ['api', '/api/Treaty/:id', args] as const
}

export function getApiTreatyIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Treaty)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTreatyIdQueryKey>
  >({
    queryKey: getApiTreatyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Treaty[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiTreatyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Treaty)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Treaty)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTreatyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTreatyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiTreatyIdBusinessItemsQueryKey(
  args: InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>,
) {
  return ['api', '/api/Treaty/:id/BusinessItems', args] as const
}

export function getApiTreatyIdBusinessItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTreatyIdBusinessItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Treaty[':id'].BusinessItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTreatyIdBusinessItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiTreatyIdBusinessItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
