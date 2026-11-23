import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2MetaIndexQueryKey() {
  return ['api', '/api/v2/meta/'] as const
}

export function getApiV2MetaIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MetaIndexQueryKey>
  >({
    queryKey: getApiV2MetaIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.meta.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MetaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MetaIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2MetaIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV2AbilityIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.ability.index.$get>,
) {
  return ['api', '/api/v2/ability/', args] as const
}

export function getApiV2AbilityIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.ability.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AbilityIndexQueryKey>
  >({
    queryKey: getApiV2AbilityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ability.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2AbilityIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.ability.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AbilityIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AbilityIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2AbilityIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/ability/:id/', args] as const
}

export function getApiV2AbilityIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AbilityIdIndexQueryKey>
  >({
    queryKey: getApiV2AbilityIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.ability[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AbilityIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2AbilityIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AbilityIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BerryIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.berry.index.$get>,
) {
  return ['api', '/api/v2/berry/', args] as const
}

export function getApiV2BerryIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.berry.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryIndexQueryKey>
  >({
    queryKey: getApiV2BerryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.berry.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2BerryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.berry.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BerryIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BerryIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BerryIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/berry/:id/', args] as const
}

export function getApiV2BerryIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryIdIndexQueryKey>
  >({
    queryKey: getApiV2BerryIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.berry[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BerryIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BerryIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BerryIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BerryFirmnessIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>,
) {
  return ['api', '/api/v2/berry-firmness/', args] as const
}

export function getApiV2BerryFirmnessIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFirmnessIndexQueryKey>
  >({
    queryKey: getApiV2BerryFirmnessIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['berry-firmness'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BerryFirmnessIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BerryFirmnessIndexQueryKey>
        >
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
      ...getApiV2BerryFirmnessIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2BerryFirmnessIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/berry-firmness/:id/', args] as const
}

export function getApiV2BerryFirmnessIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFirmnessIdIndexQueryKey>
  >({
    queryKey: getApiV2BerryFirmnessIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['berry-firmness'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BerryFirmnessIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BerryFirmnessIdIndexQueryKey>
        >
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
      ...getApiV2BerryFirmnessIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2BerryFlavorIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>,
) {
  return ['api', '/api/v2/berry-flavor/', args] as const
}

export function getApiV2BerryFlavorIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFlavorIndexQueryKey>
  >({
    queryKey: getApiV2BerryFlavorIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['berry-flavor'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BerryFlavorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BerryFlavorIndexQueryKey>
        >
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
      ...getApiV2BerryFlavorIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2BerryFlavorIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/berry-flavor/:id/', args] as const
}

export function getApiV2BerryFlavorIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFlavorIdIndexQueryKey>
  >({
    queryKey: getApiV2BerryFlavorIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['berry-flavor'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BerryFlavorIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2BerryFlavorIdIndexQueryKey>
        >
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
      ...getApiV2BerryFlavorIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2CharacteristicIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.characteristic.index.$get>,
) {
  return ['api', '/api/v2/characteristic/', args] as const
}

export function getApiV2CharacteristicIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.characteristic.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CharacteristicIndexQueryKey>
  >({
    queryKey: getApiV2CharacteristicIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.characteristic.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2CharacteristicIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.characteristic.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2CharacteristicIndexQueryKey>
        >
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
      ...getApiV2CharacteristicIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2CharacteristicIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/characteristic/:id/', args] as const
}

export function getApiV2CharacteristicIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CharacteristicIdIndexQueryKey>
  >({
    queryKey: getApiV2CharacteristicIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.characteristic[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2CharacteristicIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2CharacteristicIdIndexQueryKey>
        >
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
      ...getApiV2CharacteristicIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ContestTypeIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>,
) {
  return ['api', '/api/v2/contest-type/', args] as const
}

export function getApiV2ContestTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestTypeIndexQueryKey>
  >({
    queryKey: getApiV2ContestTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['contest-type'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContestTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContestTypeIndexQueryKey>
        >
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
      ...getApiV2ContestTypeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ContestTypeIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/contest-type/:id/', args] as const
}

export function getApiV2ContestTypeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestTypeIdIndexQueryKey>
  >({
    queryKey: getApiV2ContestTypeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['contest-type'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContestTypeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContestTypeIdIndexQueryKey>
        >
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
      ...getApiV2ContestTypeIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ContestEffectIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>,
) {
  return ['api', '/api/v2/contest-effect/', args] as const
}

export function getApiV2ContestEffectIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestEffectIndexQueryKey>
  >({
    queryKey: getApiV2ContestEffectIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['contest-effect'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContestEffectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContestEffectIndexQueryKey>
        >
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
      ...getApiV2ContestEffectIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ContestEffectIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/contest-effect/:id/', args] as const
}

export function getApiV2ContestEffectIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestEffectIdIndexQueryKey>
  >({
    queryKey: getApiV2ContestEffectIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['contest-effect'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContestEffectIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ContestEffectIdIndexQueryKey>
        >
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
      ...getApiV2ContestEffectIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EggGroupIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>,
) {
  return ['api', '/api/v2/egg-group/', args] as const
}

export function getApiV2EggGroupIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EggGroupIndexQueryKey>
  >({
    queryKey: getApiV2EggGroupIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['egg-group'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EggGroupIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EggGroupIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2EggGroupIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2EggGroupIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/egg-group/:id/', args] as const
}

export function getApiV2EggGroupIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EggGroupIdIndexQueryKey>
  >({
    queryKey: getApiV2EggGroupIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['egg-group'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EggGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EggGroupIdIndexQueryKey>
        >
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
      ...getApiV2EggGroupIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EncounterMethodIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>,
) {
  return ['api', '/api/v2/encounter-method/', args] as const
}

export function getApiV2EncounterMethodIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterMethodIndexQueryKey>
  >({
    queryKey: getApiV2EncounterMethodIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['encounter-method'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EncounterMethodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EncounterMethodIndexQueryKey>
        >
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
      ...getApiV2EncounterMethodIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EncounterMethodIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/encounter-method/:id/', args] as const
}

export function getApiV2EncounterMethodIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterMethodIdIndexQueryKey>
  >({
    queryKey: getApiV2EncounterMethodIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['encounter-method'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EncounterMethodIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EncounterMethodIdIndexQueryKey>
        >
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
      ...getApiV2EncounterMethodIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EncounterConditionIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>,
) {
  return ['api', '/api/v2/encounter-condition/', args] as const
}

export function getApiV2EncounterConditionIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionIndexQueryKey>
  >({
    queryKey: getApiV2EncounterConditionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['encounter-condition'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EncounterConditionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EncounterConditionIndexQueryKey>
        >
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
      ...getApiV2EncounterConditionIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EncounterConditionIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/encounter-condition/:id/', args] as const
}

export function getApiV2EncounterConditionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionIdIndexQueryKey>
  >({
    queryKey: getApiV2EncounterConditionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['encounter-condition'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EncounterConditionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2)['encounter-condition'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EncounterConditionIdIndexQueryKey>
        >
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
      ...getApiV2EncounterConditionIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EncounterConditionValueIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>,
) {
  return ['api', '/api/v2/encounter-condition-value/', args] as const
}

export function getApiV2EncounterConditionValueIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionValueIndexQueryKey>
  >({
    queryKey: getApiV2EncounterConditionValueIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['encounter-condition-value'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EncounterConditionValueIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2)['encounter-condition-value']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EncounterConditionValueIndexQueryKey>
        >
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
      ...getApiV2EncounterConditionValueIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EncounterConditionValueIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v2/encounter-condition-value/:id/', args] as const
}

export function getApiV2EncounterConditionValueIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionValueIdIndexQueryKey>
  >({
    queryKey: getApiV2EncounterConditionValueIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['encounter-condition-value'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EncounterConditionValueIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EncounterConditionValueIdIndexQueryKey>
        >
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
      ...getApiV2EncounterConditionValueIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EvolutionChainIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>,
) {
  return ['api', '/api/v2/evolution-chain/', args] as const
}

export function getApiV2EvolutionChainIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionChainIndexQueryKey>
  >({
    queryKey: getApiV2EvolutionChainIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['evolution-chain'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EvolutionChainIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EvolutionChainIndexQueryKey>
        >
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
      ...getApiV2EvolutionChainIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EvolutionChainIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/evolution-chain/:id/', args] as const
}

export function getApiV2EvolutionChainIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionChainIdIndexQueryKey>
  >({
    queryKey: getApiV2EvolutionChainIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['evolution-chain'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EvolutionChainIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EvolutionChainIdIndexQueryKey>
        >
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
      ...getApiV2EvolutionChainIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EvolutionTriggerIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>,
) {
  return ['api', '/api/v2/evolution-trigger/', args] as const
}

export function getApiV2EvolutionTriggerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionTriggerIndexQueryKey>
  >({
    queryKey: getApiV2EvolutionTriggerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['evolution-trigger'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EvolutionTriggerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EvolutionTriggerIndexQueryKey>
        >
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
      ...getApiV2EvolutionTriggerIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EvolutionTriggerIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/evolution-trigger/:id/', args] as const
}

export function getApiV2EvolutionTriggerIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionTriggerIdIndexQueryKey>
  >({
    queryKey: getApiV2EvolutionTriggerIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['evolution-trigger'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EvolutionTriggerIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EvolutionTriggerIdIndexQueryKey>
        >
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
      ...getApiV2EvolutionTriggerIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EvolutionVariableIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>,
) {
  return ['api', '/api/v2/evolution-variable/', args] as const
}

export function getApiV2EvolutionVariableIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionVariableIndexQueryKey>
  >({
    queryKey: getApiV2EvolutionVariableIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['evolution-variable'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EvolutionVariableIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EvolutionVariableIndexQueryKey>
        >
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
      ...getApiV2EvolutionVariableIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EvolutionVariableIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/evolution-variable/:id/', args] as const
}

export function getApiV2EvolutionVariableIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionVariableIdIndexQueryKey>
  >({
    queryKey: getApiV2EvolutionVariableIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['evolution-variable'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EvolutionVariableIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2)['evolution-variable'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EvolutionVariableIdIndexQueryKey>
        >
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
      ...getApiV2EvolutionVariableIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2GenerationIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.generation.index.$get>,
) {
  return ['api', '/api/v2/generation/', args] as const
}

export function getApiV2GenerationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.generation.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenerationIndexQueryKey>
  >({
    queryKey: getApiV2GenerationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.generation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GenerationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.generation.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GenerationIndexQueryKey>
        >
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
      ...getApiV2GenerationIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2GenerationIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/generation/:id/', args] as const
}

export function getApiV2GenerationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenerationIdIndexQueryKey>
  >({
    queryKey: getApiV2GenerationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.generation[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GenerationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GenerationIdIndexQueryKey>
        >
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
      ...getApiV2GenerationIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2GenderIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.gender.index.$get>,
) {
  return ['api', '/api/v2/gender/', args] as const
}

export function getApiV2GenderIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.gender.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenderIndexQueryKey>
  >({
    queryKey: getApiV2GenderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.gender.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2GenderIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.gender.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GenderIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2GenderIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2GenderIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/gender/:id/', args] as const
}

export function getApiV2GenderIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenderIdIndexQueryKey>
  >({
    queryKey: getApiV2GenderIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.gender[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GenderIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GenderIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2GenderIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2GrowthRateIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>,
) {
  return ['api', '/api/v2/growth-rate/', args] as const
}

export function getApiV2GrowthRateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GrowthRateIndexQueryKey>
  >({
    queryKey: getApiV2GrowthRateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['growth-rate'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GrowthRateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GrowthRateIndexQueryKey>
        >
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
      ...getApiV2GrowthRateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2GrowthRateIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/growth-rate/:id/', args] as const
}

export function getApiV2GrowthRateIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GrowthRateIdIndexQueryKey>
  >({
    queryKey: getApiV2GrowthRateIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['growth-rate'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2GrowthRateIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GrowthRateIdIndexQueryKey>
        >
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
      ...getApiV2GrowthRateIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.item.index.$get>,
) {
  return ['api', '/api/v2/item/', args] as const
}

export function getApiV2ItemIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.item.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemIndexQueryKey>
  >({
    queryKey: getApiV2ItemIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.item.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2ItemIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.item.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ItemIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2ItemIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/item/:id/', args] as const
}

export function getApiV2ItemIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemIdIndexQueryKey>
  >({
    queryKey: getApiV2ItemIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.item[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ItemIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2ItemCategoryIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>,
) {
  return ['api', '/api/v2/item-category/', args] as const
}

export function getApiV2ItemCategoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemCategoryIndexQueryKey>
  >({
    queryKey: getApiV2ItemCategoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-category'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemCategoryIndexQueryKey>
        >
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
      ...getApiV2ItemCategoryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemCategoryIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/item-category/:id/', args] as const
}

export function getApiV2ItemCategoryIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemCategoryIdIndexQueryKey>
  >({
    queryKey: getApiV2ItemCategoryIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-category'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemCategoryIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemCategoryIdIndexQueryKey>
        >
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
      ...getApiV2ItemCategoryIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemAttributeIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>,
) {
  return ['api', '/api/v2/item-attribute/', args] as const
}

export function getApiV2ItemAttributeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemAttributeIndexQueryKey>
  >({
    queryKey: getApiV2ItemAttributeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-attribute'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemAttributeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemAttributeIndexQueryKey>
        >
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
      ...getApiV2ItemAttributeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemAttributeIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/item-attribute/:id/', args] as const
}

export function getApiV2ItemAttributeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemAttributeIdIndexQueryKey>
  >({
    queryKey: getApiV2ItemAttributeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-attribute'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemAttributeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemAttributeIdIndexQueryKey>
        >
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
      ...getApiV2ItemAttributeIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemFlingEffectIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>,
) {
  return ['api', '/api/v2/item-fling-effect/', args] as const
}

export function getApiV2ItemFlingEffectIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemFlingEffectIndexQueryKey>
  >({
    queryKey: getApiV2ItemFlingEffectIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-fling-effect'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemFlingEffectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemFlingEffectIndexQueryKey>
        >
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
      ...getApiV2ItemFlingEffectIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemFlingEffectIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/item-fling-effect/:id/', args] as const
}

export function getApiV2ItemFlingEffectIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemFlingEffectIdIndexQueryKey>
  >({
    queryKey: getApiV2ItemFlingEffectIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-fling-effect'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemFlingEffectIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemFlingEffectIdIndexQueryKey>
        >
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
      ...getApiV2ItemFlingEffectIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemPocketIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>,
) {
  return ['api', '/api/v2/item-pocket/', args] as const
}

export function getApiV2ItemPocketIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemPocketIndexQueryKey>
  >({
    queryKey: getApiV2ItemPocketIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-pocket'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemPocketIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemPocketIndexQueryKey>
        >
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
      ...getApiV2ItemPocketIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ItemPocketIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/item-pocket/:id/', args] as const
}

export function getApiV2ItemPocketIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemPocketIdIndexQueryKey>
  >({
    queryKey: getApiV2ItemPocketIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['item-pocket'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ItemPocketIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2ItemPocketIdIndexQueryKey>
        >
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
      ...getApiV2ItemPocketIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2CurrencyIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.currency.index.$get>,
) {
  return ['api', '/api/v2/currency/', args] as const
}

export function getApiV2CurrencyIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.currency.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CurrencyIndexQueryKey>
  >({
    queryKey: getApiV2CurrencyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.currency.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2CurrencyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.currency.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2CurrencyIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2CurrencyIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2CurrencyIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/currency/:id/', args] as const
}

export function getApiV2CurrencyIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CurrencyIdIndexQueryKey>
  >({
    queryKey: getApiV2CurrencyIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.currency[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2CurrencyIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2CurrencyIdIndexQueryKey>
        >
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
      ...getApiV2CurrencyIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2LanguageIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.language.index.$get>,
) {
  return ['api', '/api/v2/language/', args] as const
}

export function getApiV2LanguageIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.language.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguageIndexQueryKey>
  >({
    queryKey: getApiV2LanguageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.language.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2LanguageIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.language.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LanguageIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LanguageIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2LanguageIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/language/:id/', args] as const
}

export function getApiV2LanguageIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguageIdIndexQueryKey>
  >({
    queryKey: getApiV2LanguageIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.language[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2LanguageIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LanguageIdIndexQueryKey>
        >
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
      ...getApiV2LanguageIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2LocationIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.location.index.$get>,
) {
  return ['api', '/api/v2/location/', args] as const
}

export function getApiV2LocationIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.location.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationIndexQueryKey>
  >({
    queryKey: getApiV2LocationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.location.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2LocationIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.location.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LocationIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LocationIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2LocationIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/location/:id/', args] as const
}

export function getApiV2LocationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationIdIndexQueryKey>
  >({
    queryKey: getApiV2LocationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.location[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2LocationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LocationIdIndexQueryKey>
        >
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
      ...getApiV2LocationIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2LocationAreaIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>,
) {
  return ['api', '/api/v2/location-area/', args] as const
}

export function getApiV2LocationAreaIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationAreaIndexQueryKey>
  >({
    queryKey: getApiV2LocationAreaIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['location-area'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2LocationAreaIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LocationAreaIndexQueryKey>
        >
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
      ...getApiV2LocationAreaIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2LocationAreaIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/location-area/:id/', args] as const
}

export function getApiV2LocationAreaIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationAreaIdIndexQueryKey>
  >({
    queryKey: getApiV2LocationAreaIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['location-area'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2LocationAreaIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2LocationAreaIdIndexQueryKey>
        >
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
      ...getApiV2LocationAreaIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MachineIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.machine.index.$get>,
) {
  return ['api', '/api/v2/machine/', args] as const
}

export function getApiV2MachineIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.machine.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MachineIndexQueryKey>
  >({
    queryKey: getApiV2MachineIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.machine.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2MachineIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.machine.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MachineIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2MachineIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2MachineIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/machine/:id/', args] as const
}

export function getApiV2MachineIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MachineIdIndexQueryKey>
  >({
    queryKey: getApiV2MachineIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.machine[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MachineIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MachineIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2MachineIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2MoveIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.move.index.$get>,
) {
  return ['api', '/api/v2/move/', args] as const
}

export function getApiV2MoveIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.move.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveIndexQueryKey>
  >({
    queryKey: getApiV2MoveIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.move.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2MoveIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.move.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2MoveIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2MoveIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move/:id/', args] as const
}

export function getApiV2MoveIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.move[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2MoveIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2MoveAilmentIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>,
) {
  return ['api', '/api/v2/move-ailment/', args] as const
}

export function getApiV2MoveAilmentIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveAilmentIndexQueryKey>
  >({
    queryKey: getApiV2MoveAilmentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-ailment'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveAilmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveAilmentIndexQueryKey>
        >
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
      ...getApiV2MoveAilmentIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveAilmentIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move-ailment/:id/', args] as const
}

export function getApiV2MoveAilmentIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveAilmentIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveAilmentIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-ailment'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveAilmentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveAilmentIdIndexQueryKey>
        >
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
      ...getApiV2MoveAilmentIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveBattleStyleIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>,
) {
  return ['api', '/api/v2/move-battle-style/', args] as const
}

export function getApiV2MoveBattleStyleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveBattleStyleIndexQueryKey>
  >({
    queryKey: getApiV2MoveBattleStyleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-battle-style'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveBattleStyleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveBattleStyleIndexQueryKey>
        >
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
      ...getApiV2MoveBattleStyleIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveBattleStyleIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move-battle-style/:id/', args] as const
}

export function getApiV2MoveBattleStyleIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveBattleStyleIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveBattleStyleIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-battle-style'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveBattleStyleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveBattleStyleIdIndexQueryKey>
        >
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
      ...getApiV2MoveBattleStyleIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveCategoryIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>,
) {
  return ['api', '/api/v2/move-category/', args] as const
}

export function getApiV2MoveCategoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveCategoryIndexQueryKey>
  >({
    queryKey: getApiV2MoveCategoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-category'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveCategoryIndexQueryKey>
        >
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
      ...getApiV2MoveCategoryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveCategoryIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move-category/:id/', args] as const
}

export function getApiV2MoveCategoryIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveCategoryIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveCategoryIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-category'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveCategoryIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveCategoryIdIndexQueryKey>
        >
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
      ...getApiV2MoveCategoryIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveDamageClassIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>,
) {
  return ['api', '/api/v2/move-damage-class/', args] as const
}

export function getApiV2MoveDamageClassIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveDamageClassIndexQueryKey>
  >({
    queryKey: getApiV2MoveDamageClassIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-damage-class'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveDamageClassIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveDamageClassIndexQueryKey>
        >
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
      ...getApiV2MoveDamageClassIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveDamageClassIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move-damage-class/:id/', args] as const
}

export function getApiV2MoveDamageClassIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveDamageClassIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveDamageClassIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-damage-class'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveDamageClassIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveDamageClassIdIndexQueryKey>
        >
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
      ...getApiV2MoveDamageClassIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveLearnMethodIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>,
) {
  return ['api', '/api/v2/move-learn-method/', args] as const
}

export function getApiV2MoveLearnMethodIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveLearnMethodIndexQueryKey>
  >({
    queryKey: getApiV2MoveLearnMethodIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-learn-method'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveLearnMethodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveLearnMethodIndexQueryKey>
        >
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
      ...getApiV2MoveLearnMethodIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveLearnMethodIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move-learn-method/:id/', args] as const
}

export function getApiV2MoveLearnMethodIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveLearnMethodIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveLearnMethodIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-learn-method'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveLearnMethodIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveLearnMethodIdIndexQueryKey>
        >
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
      ...getApiV2MoveLearnMethodIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveTargetIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>,
) {
  return ['api', '/api/v2/move-target/', args] as const
}

export function getApiV2MoveTargetIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveTargetIndexQueryKey>
  >({
    queryKey: getApiV2MoveTargetIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-target'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveTargetIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveTargetIndexQueryKey>
        >
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
      ...getApiV2MoveTargetIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2MoveTargetIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/move-target/:id/', args] as const
}

export function getApiV2MoveTargetIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveTargetIdIndexQueryKey>
  >({
    queryKey: getApiV2MoveTargetIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['move-target'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MoveTargetIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2MoveTargetIdIndexQueryKey>
        >
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
      ...getApiV2MoveTargetIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2NatureIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.nature.index.$get>,
) {
  return ['api', '/api/v2/nature/', args] as const
}

export function getApiV2NatureIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.nature.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NatureIndexQueryKey>
  >({
    queryKey: getApiV2NatureIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.nature.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2NatureIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.nature.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2NatureIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2NatureIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2NatureIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/nature/:id/', args] as const
}

export function getApiV2NatureIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NatureIdIndexQueryKey>
  >({
    queryKey: getApiV2NatureIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.nature[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2NatureIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2NatureIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2NatureIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PalParkAreaIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>,
) {
  return ['api', '/api/v2/pal-park-area/', args] as const
}

export function getApiV2PalParkAreaIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PalParkAreaIndexQueryKey>
  >({
    queryKey: getApiV2PalParkAreaIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pal-park-area'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PalParkAreaIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PalParkAreaIndexQueryKey>
        >
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
      ...getApiV2PalParkAreaIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PalParkAreaIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pal-park-area/:id/', args] as const
}

export function getApiV2PalParkAreaIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PalParkAreaIdIndexQueryKey>
  >({
    queryKey: getApiV2PalParkAreaIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pal-park-area'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PalParkAreaIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PalParkAreaIdIndexQueryKey>
        >
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
      ...getApiV2PalParkAreaIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokedexIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.pokedex.index.$get>,
) {
  return ['api', '/api/v2/pokedex/', args] as const
}

export function getApiV2PokedexIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.pokedex.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokedexIndexQueryKey>
  >({
    queryKey: getApiV2PokedexIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pokedex.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2PokedexIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.pokedex.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokedexIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PokedexIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PokedexIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokedex/:id/', args] as const
}

export function getApiV2PokedexIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokedexIdIndexQueryKey>
  >({
    queryKey: getApiV2PokedexIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pokedex[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokedexIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokedexIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PokedexIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PokemonIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.pokemon.index.$get>,
) {
  return ['api', '/api/v2/pokemon/', args] as const
}

export function getApiV2PokemonIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.pokemon.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonIndexQueryKey>
  >({
    queryKey: getApiV2PokemonIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pokemon.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2PokemonIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.pokemon.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PokemonIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PokemonIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon/:id/', args] as const
}

export function getApiV2PokemonIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonIdIndexQueryKey>
  >({
    queryKey: getApiV2PokemonIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pokemon[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PokemonIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PokemonColorIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-color/', args] as const
}

export function getApiV2PokemonColorIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonColorIndexQueryKey>
  >({
    queryKey: getApiV2PokemonColorIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-color'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonColorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonColorIndexQueryKey>
        >
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
      ...getApiV2PokemonColorIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonColorIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-color/:id/', args] as const
}

export function getApiV2PokemonColorIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonColorIdIndexQueryKey>
  >({
    queryKey: getApiV2PokemonColorIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-color'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonColorIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonColorIdIndexQueryKey>
        >
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
      ...getApiV2PokemonColorIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonFormIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-form/', args] as const
}

export function getApiV2PokemonFormIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonFormIndexQueryKey>
  >({
    queryKey: getApiV2PokemonFormIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-form'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonFormIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonFormIndexQueryKey>
        >
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
      ...getApiV2PokemonFormIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonFormIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-form/:id/', args] as const
}

export function getApiV2PokemonFormIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonFormIdIndexQueryKey>
  >({
    queryKey: getApiV2PokemonFormIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-form'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonFormIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonFormIdIndexQueryKey>
        >
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
      ...getApiV2PokemonFormIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonHabitatIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-habitat/', args] as const
}

export function getApiV2PokemonHabitatIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonHabitatIndexQueryKey>
  >({
    queryKey: getApiV2PokemonHabitatIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-habitat'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonHabitatIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonHabitatIndexQueryKey>
        >
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
      ...getApiV2PokemonHabitatIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonHabitatIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-habitat/:id/', args] as const
}

export function getApiV2PokemonHabitatIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonHabitatIdIndexQueryKey>
  >({
    queryKey: getApiV2PokemonHabitatIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-habitat'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonHabitatIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonHabitatIdIndexQueryKey>
        >
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
      ...getApiV2PokemonHabitatIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonShapeIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-shape/', args] as const
}

export function getApiV2PokemonShapeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonShapeIndexQueryKey>
  >({
    queryKey: getApiV2PokemonShapeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-shape'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonShapeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonShapeIndexQueryKey>
        >
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
      ...getApiV2PokemonShapeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonShapeIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-shape/:id/', args] as const
}

export function getApiV2PokemonShapeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonShapeIdIndexQueryKey>
  >({
    queryKey: getApiV2PokemonShapeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-shape'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonShapeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonShapeIdIndexQueryKey>
        >
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
      ...getApiV2PokemonShapeIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonSpeciesIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-species/', args] as const
}

export function getApiV2PokemonSpeciesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonSpeciesIndexQueryKey>
  >({
    queryKey: getApiV2PokemonSpeciesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-species'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonSpeciesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonSpeciesIndexQueryKey>
        >
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
      ...getApiV2PokemonSpeciesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonSpeciesIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokemon-species/:id/', args] as const
}

export function getApiV2PokemonSpeciesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonSpeciesIdIndexQueryKey>
  >({
    queryKey: getApiV2PokemonSpeciesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokemon-species'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonSpeciesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonSpeciesIdIndexQueryKey>
        >
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
      ...getApiV2PokemonSpeciesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokeathlonStatIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>,
) {
  return ['api', '/api/v2/pokeathlon-stat/', args] as const
}

export function getApiV2PokeathlonStatIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokeathlonStatIndexQueryKey>
  >({
    queryKey: getApiV2PokeathlonStatIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokeathlon-stat'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokeathlonStatIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokeathlonStatIndexQueryKey>
        >
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
      ...getApiV2PokeathlonStatIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokeathlonStatIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/pokeathlon-stat/:id/', args] as const
}

export function getApiV2PokeathlonStatIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokeathlonStatIdIndexQueryKey>
  >({
    queryKey: getApiV2PokeathlonStatIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['pokeathlon-stat'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokeathlonStatIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokeathlonStatIdIndexQueryKey>
        >
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
      ...getApiV2PokeathlonStatIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2RegionIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.region.index.$get>,
) {
  return ['api', '/api/v2/region/', args] as const
}

export function getApiV2RegionIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.region.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RegionIndexQueryKey>
  >({
    queryKey: getApiV2RegionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.region.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2RegionIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.region.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2RegionIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2RegionIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2RegionIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/region/:id/', args] as const
}

export function getApiV2RegionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RegionIdIndexQueryKey>
  >({
    queryKey: getApiV2RegionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.region[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2RegionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2RegionIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2RegionIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2StatIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.stat.index.$get>,
) {
  return ['api', '/api/v2/stat/', args] as const
}

export function getApiV2StatIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.stat.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StatIndexQueryKey>
  >({
    queryKey: getApiV2StatIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.stat.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2StatIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.stat.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StatIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2StatIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2StatIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/stat/:id/', args] as const
}

export function getApiV2StatIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StatIdIndexQueryKey>
  >({
    queryKey: getApiV2StatIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.stat[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2StatIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2StatIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2StatIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2SuperContestEffectIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>,
) {
  return ['api', '/api/v2/super-contest-effect/', args] as const
}

export function getApiV2SuperContestEffectIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SuperContestEffectIndexQueryKey>
  >({
    queryKey: getApiV2SuperContestEffectIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['super-contest-effect'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2SuperContestEffectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2SuperContestEffectIndexQueryKey>
        >
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
      ...getApiV2SuperContestEffectIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2SuperContestEffectIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/super-contest-effect/:id/', args] as const
}

export function getApiV2SuperContestEffectIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SuperContestEffectIdIndexQueryKey>
  >({
    queryKey: getApiV2SuperContestEffectIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['super-contest-effect'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2SuperContestEffectIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2SuperContestEffectIdIndexQueryKey>
        >
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
      ...getApiV2SuperContestEffectIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TypeIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.type.index.$get>,
) {
  return ['api', '/api/v2/type/', args] as const
}

export function getApiV2TypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.type.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TypeIndexQueryKey>
  >({
    queryKey: getApiV2TypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.type.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2TypeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.type.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TypeIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2TypeIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2TypeIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/type/:id/', args] as const
}

export function getApiV2TypeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TypeIdIndexQueryKey>
  >({
    queryKey: getApiV2TypeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.type[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TypeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2TypeIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2TypeIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2VersionIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.version.index.$get>,
) {
  return ['api', '/api/v2/version/', args] as const
}

export function getApiV2VersionIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.version.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionIndexQueryKey>
  >({
    queryKey: getApiV2VersionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.version.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2VersionIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.version.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VersionIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2VersionIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2VersionIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>,
) {
  return ['api', '/api/v2/version/:id/', args] as const
}

export function getApiV2VersionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionIdIndexQueryKey>
  >({
    queryKey: getApiV2VersionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.version[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2VersionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VersionIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2VersionIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2VersionGroupIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>,
) {
  return ['api', '/api/v2/version-group/', args] as const
}

export function getApiV2VersionGroupIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionGroupIndexQueryKey>
  >({
    queryKey: getApiV2VersionGroupIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['version-group'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2VersionGroupIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VersionGroupIndexQueryKey>
        >
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
      ...getApiV2VersionGroupIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2VersionGroupIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>,
) {
  return ['api', '/api/v2/version-group/:id/', args] as const
}

export function getApiV2VersionGroupIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionGroupIdIndexQueryKey>
  >({
    queryKey: getApiV2VersionGroupIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['version-group'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2VersionGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2VersionGroupIdIndexQueryKey>
        >
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
      ...getApiV2VersionGroupIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PokemonPokemonIdEncountersQueryKey(
  args: InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>,
) {
  return ['api', '/api/v2/pokemon/:pokemon_id/encounters', args] as const
}

export function getApiV2PokemonPokemonIdEncountersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonPokemonIdEncountersQueryKey>
  >({
    queryKey: getApiV2PokemonPokemonIdEncountersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.pokemon[':pokemon_id'].encounters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PokemonPokemonIdEncounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2PokemonPokemonIdEncountersQueryKey>
        >
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
      ...getApiV2PokemonPokemonIdEncountersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
