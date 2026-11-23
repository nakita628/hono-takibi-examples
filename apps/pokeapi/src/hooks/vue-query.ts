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

export function getApiV2MetaIndexQueryKey() {
  return ['api', '/api/v2/meta/'] as const
}

export function getApiV2MetaIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2MetaIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.meta.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MetaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2MetaIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.meta.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MetaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2MetaIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.meta.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AbilityIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ability.index.$get>>,
) {
  return ['api', '/api/v2/ability/', toValue(args)] as const
}

export function getApiV2AbilityIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ability.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AbilityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ability.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AbilityIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.ability.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AbilityIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.ability.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AbilityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AbilityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ability.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AbilityIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/ability/:id/', toValue(args)] as const
}

export function getApiV2AbilityIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AbilityIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.ability[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AbilityIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AbilityIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.ability)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AbilityIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AbilityIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.ability[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BerryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.berry.index.$get>>,
) {
  return ['api', '/api/v2/berry/', toValue(args)] as const
}

export function getApiV2BerryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.berry.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BerryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.berry.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BerryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.berry.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2BerryIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.berry.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BerryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.berry.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BerryIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/berry/:id/', toValue(args)] as const
}

export function getApiV2BerryIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BerryIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.berry[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BerryIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BerryIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.berry)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BerryIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.berry[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BerryFirmnessIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/berry-firmness/', toValue(args)] as const
}

export function getApiV2BerryFirmnessIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BerryFirmnessIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['berry-firmness'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BerryFirmnessIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BerryFirmnessIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['berry-firmness']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFirmnessIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BerryFirmnessIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['berry-firmness'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BerryFirmnessIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/berry-firmness/:id/', toValue(args)] as const
}

export function getApiV2BerryFirmnessIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BerryFirmnessIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['berry-firmness'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BerryFirmnessIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2BerryFirmnessIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFirmnessIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BerryFirmnessIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['berry-firmness'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BerryFlavorIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>,
) {
  return ['api', '/api/v2/berry-flavor/', toValue(args)] as const
}

export function getApiV2BerryFlavorIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BerryFlavorIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['berry-flavor'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BerryFlavorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BerryFlavorIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['berry-flavor']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFlavorIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BerryFlavorIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['berry-flavor'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BerryFlavorIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/berry-flavor/:id/', toValue(args)] as const
}

export function getApiV2BerryFlavorIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BerryFlavorIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['berry-flavor'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BerryFlavorIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BerryFlavorIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BerryFlavorIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BerryFlavorIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['berry-flavor'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2CharacteristicIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.characteristic.index.$get>>,
) {
  return ['api', '/api/v2/characteristic/', toValue(args)] as const
}

export function getApiV2CharacteristicIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.characteristic.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2CharacteristicIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.characteristic.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2CharacteristicIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.characteristic.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2CharacteristicIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.characteristic.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CharacteristicIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2CharacteristicIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.characteristic.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2CharacteristicIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/characteristic/:id/', toValue(args)] as const
}

export function getApiV2CharacteristicIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2CharacteristicIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.characteristic[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2CharacteristicIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2CharacteristicIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CharacteristicIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2CharacteristicIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.characteristic[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ContestTypeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>>,
) {
  return ['api', '/api/v2/contest-type/', toValue(args)] as const
}

export function getApiV2ContestTypeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContestTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['contest-type'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContestTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContestTypeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['contest-type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContestTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['contest-type'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ContestTypeIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/contest-type/:id/', toValue(args)] as const
}

export function getApiV2ContestTypeIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContestTypeIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['contest-type'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContestTypeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContestTypeIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestTypeIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContestTypeIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['contest-type'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ContestEffectIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/contest-effect/', toValue(args)] as const
}

export function getApiV2ContestEffectIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContestEffectIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['contest-effect'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContestEffectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContestEffectIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['contest-effect']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestEffectIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContestEffectIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['contest-effect'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ContestEffectIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/contest-effect/:id/', toValue(args)] as const
}

export function getApiV2ContestEffectIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContestEffectIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['contest-effect'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContestEffectIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ContestEffectIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContestEffectIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContestEffectIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['contest-effect'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EggGroupIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>>,
) {
  return ['api', '/api/v2/egg-group/', toValue(args)] as const
}

export function getApiV2EggGroupIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EggGroupIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['egg-group'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EggGroupIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EggGroupIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['egg-group']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EggGroupIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EggGroupIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['egg-group'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EggGroupIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/egg-group/:id/', toValue(args)] as const
}

export function getApiV2EggGroupIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EggGroupIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['egg-group'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EggGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EggGroupIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EggGroupIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EggGroupIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['egg-group'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EncounterMethodIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/encounter-method/', toValue(args)] as const
}

export function getApiV2EncounterMethodIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EncounterMethodIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['encounter-method'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EncounterMethodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EncounterMethodIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['encounter-method']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterMethodIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EncounterMethodIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['encounter-method'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EncounterMethodIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/encounter-method/:id/', toValue(args)] as const
}

export function getApiV2EncounterMethodIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EncounterMethodIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['encounter-method'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EncounterMethodIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2EncounterMethodIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterMethodIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EncounterMethodIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['encounter-method'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EncounterConditionIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/encounter-condition/', toValue(args)] as const
}

export function getApiV2EncounterConditionIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EncounterConditionIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['encounter-condition'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EncounterConditionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EncounterConditionIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['encounter-condition']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EncounterConditionIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['encounter-condition'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EncounterConditionIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/encounter-condition/:id/', toValue(args)] as const
}

export function getApiV2EncounterConditionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EncounterConditionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['encounter-condition'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EncounterConditionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2EncounterConditionIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EncounterConditionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['encounter-condition'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EncounterConditionValueIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/encounter-condition-value/', toValue(args)] as const
}

export function getApiV2EncounterConditionValueIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EncounterConditionValueIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['encounter-condition-value'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EncounterConditionValueIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2EncounterConditionValueIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionValueIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EncounterConditionValueIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['encounter-condition-value'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EncounterConditionValueIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/encounter-condition-value/:id/', toValue(args)] as const
}

export function getApiV2EncounterConditionValueIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EncounterConditionValueIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['encounter-condition-value'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EncounterConditionValueIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV2EncounterConditionValueIdIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EncounterConditionValueIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EncounterConditionValueIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['encounter-condition-value'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EvolutionChainIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/evolution-chain/', toValue(args)] as const
}

export function getApiV2EvolutionChainIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EvolutionChainIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['evolution-chain'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EvolutionChainIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EvolutionChainIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['evolution-chain']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionChainIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EvolutionChainIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['evolution-chain'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EvolutionChainIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/evolution-chain/:id/', toValue(args)] as const
}

export function getApiV2EvolutionChainIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EvolutionChainIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['evolution-chain'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EvolutionChainIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2EvolutionChainIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionChainIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EvolutionChainIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['evolution-chain'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EvolutionTriggerIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/evolution-trigger/', toValue(args)] as const
}

export function getApiV2EvolutionTriggerIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EvolutionTriggerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['evolution-trigger'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EvolutionTriggerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EvolutionTriggerIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionTriggerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EvolutionTriggerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['evolution-trigger'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EvolutionTriggerIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/evolution-trigger/:id/', toValue(args)] as const
}

export function getApiV2EvolutionTriggerIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EvolutionTriggerIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['evolution-trigger'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EvolutionTriggerIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2EvolutionTriggerIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionTriggerIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EvolutionTriggerIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['evolution-trigger'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EvolutionVariableIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/evolution-variable/', toValue(args)] as const
}

export function getApiV2EvolutionVariableIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EvolutionVariableIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['evolution-variable'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EvolutionVariableIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EvolutionVariableIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['evolution-variable']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionVariableIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EvolutionVariableIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['evolution-variable'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EvolutionVariableIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/evolution-variable/:id/', toValue(args)] as const
}

export function getApiV2EvolutionVariableIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EvolutionVariableIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['evolution-variable'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EvolutionVariableIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2EvolutionVariableIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EvolutionVariableIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EvolutionVariableIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['evolution-variable'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GenerationIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.generation.index.$get>>,
) {
  return ['api', '/api/v2/generation/', toValue(args)] as const
}

export function getApiV2GenerationIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.generation.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GenerationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.generation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GenerationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.generation.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2GenerationIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.generation.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenerationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GenerationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.generation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GenerationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/generation/:id/', toValue(args)] as const
}

export function getApiV2GenerationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GenerationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.generation[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GenerationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2GenerationIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.generation)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenerationIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GenerationIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.generation[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GenderIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.gender.index.$get>>,
) {
  return ['api', '/api/v2/gender/', toValue(args)] as const
}

export function getApiV2GenderIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.gender.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GenderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.gender.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GenderIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.gender.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2GenderIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.gender.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenderIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GenderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.gender.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GenderIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/gender/:id/', toValue(args)] as const
}

export function getApiV2GenderIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GenderIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.gender[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GenderIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2GenderIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.gender)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenderIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GenderIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.gender[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GrowthRateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>>,
) {
  return ['api', '/api/v2/growth-rate/', toValue(args)] as const
}

export function getApiV2GrowthRateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GrowthRateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['growth-rate'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GrowthRateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2GrowthRateIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['growth-rate']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GrowthRateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GrowthRateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['growth-rate'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GrowthRateIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/growth-rate/:id/', toValue(args)] as const
}

export function getApiV2GrowthRateIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GrowthRateIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['growth-rate'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2GrowthRateIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2GrowthRateIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GrowthRateIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GrowthRateIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['growth-rate'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.item.index.$get>>,
) {
  return ['api', '/api/v2/item/', toValue(args)] as const
}

export function getApiV2ItemIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.item.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.item.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.item.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ItemIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.item.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.item.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/item/:id/', toValue(args)] as const
}

export function getApiV2ItemIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.item[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.item)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.item[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemCategoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-category/', toValue(args)] as const
}

export function getApiV2ItemCategoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemCategoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-category'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemCategoryIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemCategoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemCategoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-category'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemCategoryIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-category/:id/', toValue(args)] as const
}

export function getApiV2ItemCategoryIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemCategoryIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-category'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemCategoryIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemCategoryIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemCategoryIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemCategoryIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-category'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemAttributeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-attribute/', toValue(args)] as const
}

export function getApiV2ItemAttributeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemAttributeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-attribute'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemAttributeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemAttributeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-attribute']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemAttributeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemAttributeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-attribute'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemAttributeIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-attribute/:id/', toValue(args)] as const
}

export function getApiV2ItemAttributeIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemAttributeIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-attribute'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemAttributeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ItemAttributeIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemAttributeIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemAttributeIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-attribute'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemFlingEffectIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-fling-effect/', toValue(args)] as const
}

export function getApiV2ItemFlingEffectIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemFlingEffectIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-fling-effect'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemFlingEffectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemFlingEffectIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemFlingEffectIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemFlingEffectIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-fling-effect'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemFlingEffectIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-fling-effect/:id/', toValue(args)] as const
}

export function getApiV2ItemFlingEffectIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemFlingEffectIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-fling-effect'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemFlingEffectIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ItemFlingEffectIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemFlingEffectIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemFlingEffectIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-fling-effect'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemPocketIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>>,
) {
  return ['api', '/api/v2/item-pocket/', toValue(args)] as const
}

export function getApiV2ItemPocketIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemPocketIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-pocket'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemPocketIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemPocketIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-pocket']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemPocketIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemPocketIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-pocket'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ItemPocketIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/item-pocket/:id/', toValue(args)] as const
}

export function getApiV2ItemPocketIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ItemPocketIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['item-pocket'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ItemPocketIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ItemPocketIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ItemPocketIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ItemPocketIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['item-pocket'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2CurrencyIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.currency.index.$get>>,
) {
  return ['api', '/api/v2/currency/', toValue(args)] as const
}

export function getApiV2CurrencyIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.currency.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2CurrencyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.currency.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2CurrencyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.currency.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2CurrencyIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.currency.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CurrencyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2CurrencyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.currency.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2CurrencyIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/currency/:id/', toValue(args)] as const
}

export function getApiV2CurrencyIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2CurrencyIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.currency[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2CurrencyIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2CurrencyIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.currency)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CurrencyIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2CurrencyIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.currency[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LanguageIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.language.index.$get>>,
) {
  return ['api', '/api/v2/language/', toValue(args)] as const
}

export function getApiV2LanguageIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.language.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LanguageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.language.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LanguageIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.language.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2LanguageIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.language.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LanguageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.language.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LanguageIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/language/:id/', toValue(args)] as const
}

export function getApiV2LanguageIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LanguageIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.language[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LanguageIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2LanguageIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.language)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguageIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LanguageIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.language[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LocationIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.location.index.$get>>,
) {
  return ['api', '/api/v2/location/', toValue(args)] as const
}

export function getApiV2LocationIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.location.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LocationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.location.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LocationIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.location.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2LocationIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.location.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LocationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.location.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LocationIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/location/:id/', toValue(args)] as const
}

export function getApiV2LocationIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LocationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.location[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LocationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2LocationIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.location)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LocationIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.location[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LocationAreaIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/location-area/', toValue(args)] as const
}

export function getApiV2LocationAreaIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LocationAreaIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['location-area'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LocationAreaIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2LocationAreaIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['location-area']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationAreaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LocationAreaIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['location-area'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LocationAreaIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/location-area/:id/', toValue(args)] as const
}

export function getApiV2LocationAreaIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LocationAreaIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['location-area'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2LocationAreaIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2LocationAreaIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LocationAreaIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LocationAreaIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['location-area'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MachineIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.machine.index.$get>>,
) {
  return ['api', '/api/v2/machine/', toValue(args)] as const
}

export function getApiV2MachineIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.machine.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MachineIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.machine.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MachineIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.machine.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2MachineIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.machine.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MachineIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MachineIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.machine.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MachineIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/machine/:id/', toValue(args)] as const
}

export function getApiV2MachineIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MachineIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.machine[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MachineIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MachineIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.machine)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MachineIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MachineIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.machine[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.move.index.$get>>,
) {
  return ['api', '/api/v2/move/', toValue(args)] as const
}

export function getApiV2MoveIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.move.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.move.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.move.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2MoveIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.move.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.move.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/move/:id/', toValue(args)] as const
}

export function getApiV2MoveIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.move[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.move)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.move[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveAilmentIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>>,
) {
  return ['api', '/api/v2/move-ailment/', toValue(args)] as const
}

export function getApiV2MoveAilmentIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveAilmentIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-ailment'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveAilmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveAilmentIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-ailment']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveAilmentIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveAilmentIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-ailment'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveAilmentIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-ailment/:id/', toValue(args)] as const
}

export function getApiV2MoveAilmentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveAilmentIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-ailment'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveAilmentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveAilmentIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveAilmentIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveAilmentIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-ailment'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveBattleStyleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-battle-style/', toValue(args)] as const
}

export function getApiV2MoveBattleStyleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveBattleStyleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-battle-style'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveBattleStyleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveBattleStyleIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-battle-style']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveBattleStyleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveBattleStyleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-battle-style'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveBattleStyleIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-battle-style/:id/', toValue(args)] as const
}

export function getApiV2MoveBattleStyleIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveBattleStyleIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-battle-style'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveBattleStyleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2MoveBattleStyleIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveBattleStyleIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveBattleStyleIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-battle-style'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveCategoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-category/', toValue(args)] as const
}

export function getApiV2MoveCategoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveCategoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-category'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveCategoryIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveCategoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveCategoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-category'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveCategoryIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-category/:id/', toValue(args)] as const
}

export function getApiV2MoveCategoryIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveCategoryIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-category'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveCategoryIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveCategoryIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveCategoryIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveCategoryIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-category'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveDamageClassIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-damage-class/', toValue(args)] as const
}

export function getApiV2MoveDamageClassIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveDamageClassIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-damage-class'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveDamageClassIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveDamageClassIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-damage-class']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveDamageClassIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveDamageClassIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-damage-class'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveDamageClassIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-damage-class/:id/', toValue(args)] as const
}

export function getApiV2MoveDamageClassIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveDamageClassIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-damage-class'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveDamageClassIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2MoveDamageClassIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveDamageClassIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveDamageClassIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-damage-class'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveLearnMethodIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-learn-method/', toValue(args)] as const
}

export function getApiV2MoveLearnMethodIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveLearnMethodIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-learn-method'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveLearnMethodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveLearnMethodIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-learn-method']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveLearnMethodIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveLearnMethodIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-learn-method'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveLearnMethodIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-learn-method/:id/', toValue(args)] as const
}

export function getApiV2MoveLearnMethodIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveLearnMethodIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-learn-method'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveLearnMethodIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2MoveLearnMethodIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveLearnMethodIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveLearnMethodIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-learn-method'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveTargetIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>>,
) {
  return ['api', '/api/v2/move-target/', toValue(args)] as const
}

export function getApiV2MoveTargetIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveTargetIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-target'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveTargetIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveTargetIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-target']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveTargetIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveTargetIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-target'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MoveTargetIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/move-target/:id/', toValue(args)] as const
}

export function getApiV2MoveTargetIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MoveTargetIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['move-target'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MoveTargetIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MoveTargetIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MoveTargetIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MoveTargetIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['move-target'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2NatureIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.nature.index.$get>>,
) {
  return ['api', '/api/v2/nature/', toValue(args)] as const
}

export function getApiV2NatureIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.nature.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2NatureIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.nature.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2NatureIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.nature.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2NatureIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nature.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NatureIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2NatureIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.nature.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2NatureIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/nature/:id/', toValue(args)] as const
}

export function getApiV2NatureIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2NatureIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.nature[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2NatureIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2NatureIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.nature)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NatureIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2NatureIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.nature[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PalParkAreaIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pal-park-area/', toValue(args)] as const
}

export function getApiV2PalParkAreaIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PalParkAreaIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pal-park-area'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PalParkAreaIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PalParkAreaIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pal-park-area']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PalParkAreaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PalParkAreaIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pal-park-area'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PalParkAreaIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pal-park-area/:id/', toValue(args)] as const
}

export function getApiV2PalParkAreaIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PalParkAreaIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pal-park-area'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PalParkAreaIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PalParkAreaIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PalParkAreaIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PalParkAreaIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pal-park-area'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokedexIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pokedex.index.$get>>,
) {
  return ['api', '/api/v2/pokedex/', toValue(args)] as const
}

export function getApiV2PokedexIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pokedex.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokedexIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pokedex.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokedexIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pokedex.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PokedexIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokedex.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokedexIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokedexIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pokedex.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokedexIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/pokedex/:id/', toValue(args)] as const
}

export function getApiV2PokedexIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokedexIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pokedex[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokedexIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokedexIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokedexIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokedexIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pokedex[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pokemon.index.$get>>,
) {
  return ['api', '/api/v2/pokemon/', toValue(args)] as const
}

export function getApiV2PokemonIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pokemon.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pokemon.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.pokemon.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PokemonIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.pokemon.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pokemon.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/pokemon/:id/', toValue(args)] as const
}

export function getApiV2PokemonIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pokemon[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pokemon[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonColorIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-color/', toValue(args)] as const
}

export function getApiV2PokemonColorIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonColorIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-color'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonColorIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonColorIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-color']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonColorIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonColorIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-color'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonColorIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-color/:id/', toValue(args)] as const
}

export function getApiV2PokemonColorIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonColorIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-color'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonColorIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonColorIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonColorIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonColorIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-color'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonFormIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>,
) {
  return ['api', '/api/v2/pokemon-form/', toValue(args)] as const
}

export function getApiV2PokemonFormIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonFormIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-form'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonFormIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonFormIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-form']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonFormIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonFormIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-form'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonFormIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-form/:id/', toValue(args)] as const
}

export function getApiV2PokemonFormIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonFormIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-form'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonFormIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonFormIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonFormIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonFormIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-form'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonHabitatIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-habitat/', toValue(args)] as const
}

export function getApiV2PokemonHabitatIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonHabitatIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-habitat'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonHabitatIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonHabitatIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonHabitatIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonHabitatIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-habitat'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonHabitatIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-habitat/:id/', toValue(args)] as const
}

export function getApiV2PokemonHabitatIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonHabitatIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-habitat'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonHabitatIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonHabitatIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonHabitatIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonHabitatIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-habitat'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonShapeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-shape/', toValue(args)] as const
}

export function getApiV2PokemonShapeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonShapeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-shape'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonShapeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonShapeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonShapeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonShapeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-shape'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonShapeIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-shape/:id/', toValue(args)] as const
}

export function getApiV2PokemonShapeIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonShapeIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-shape'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonShapeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonShapeIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonShapeIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonShapeIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-shape'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonSpeciesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-species/', toValue(args)] as const
}

export function getApiV2PokemonSpeciesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonSpeciesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-species'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonSpeciesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonSpeciesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-species']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonSpeciesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonSpeciesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-species'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonSpeciesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon-species/:id/', toValue(args)] as const
}

export function getApiV2PokemonSpeciesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonSpeciesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokemon-species'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonSpeciesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonSpeciesIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonSpeciesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonSpeciesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokemon-species'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokeathlonStatIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokeathlon-stat/', toValue(args)] as const
}

export function getApiV2PokeathlonStatIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokeathlonStatIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokeathlon-stat'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokeathlonStatIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PokeathlonStatIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokeathlonStatIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokeathlonStatIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokeathlon-stat'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokeathlonStatIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/pokeathlon-stat/:id/', toValue(args)] as const
}

export function getApiV2PokeathlonStatIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokeathlonStatIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['pokeathlon-stat'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokeathlonStatIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PokeathlonStatIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokeathlonStatIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokeathlonStatIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['pokeathlon-stat'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2RegionIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.region.index.$get>>,
) {
  return ['api', '/api/v2/region/', toValue(args)] as const
}

export function getApiV2RegionIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.region.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RegionIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.region.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RegionIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.region.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2RegionIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.region.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RegionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RegionIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.region.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2RegionIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/region/:id/', toValue(args)] as const
}

export function getApiV2RegionIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RegionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.region[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RegionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2RegionIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.region)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RegionIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RegionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.region[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2StatIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.stat.index.$get>>,
) {
  return ['api', '/api/v2/stat/', toValue(args)] as const
}

export function getApiV2StatIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.stat.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StatIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.stat.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StatIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.stat.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2StatIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.stat.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StatIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StatIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.stat.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2StatIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/stat/:id/', toValue(args)] as const
}

export function getApiV2StatIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2StatIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.stat[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2StatIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2StatIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.stat)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2StatIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2StatIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.stat[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2SuperContestEffectIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/super-contest-effect/', toValue(args)] as const
}

export function getApiV2SuperContestEffectIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SuperContestEffectIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['super-contest-effect'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2SuperContestEffectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2SuperContestEffectIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SuperContestEffectIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SuperContestEffectIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['super-contest-effect'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2SuperContestEffectIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/super-contest-effect/:id/', toValue(args)] as const
}

export function getApiV2SuperContestEffectIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SuperContestEffectIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['super-contest-effect'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2SuperContestEffectIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2SuperContestEffectIdIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SuperContestEffectIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SuperContestEffectIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['super-contest-effect'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TypeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.type.index.$get>>,
) {
  return ['api', '/api/v2/type/', toValue(args)] as const
}

export function getApiV2TypeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.type.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.type.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TypeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.type.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2TypeIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.type.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.type.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TypeIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/type/:id/', toValue(args)] as const
}

export function getApiV2TypeIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TypeIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.type[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TypeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TypeIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.type)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TypeIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TypeIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.type[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VersionIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.version.index.$get>>,
) {
  return ['api', '/api/v2/version/', toValue(args)] as const
}

export function getApiV2VersionIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.version.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VersionIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.version.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VersionIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.version.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2VersionIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.version.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VersionIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.version.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VersionIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/version/:id/', toValue(args)] as const
}

export function getApiV2VersionIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VersionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.version[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VersionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2VersionIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.version)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VersionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.version[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VersionGroupIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/version-group/', toValue(args)] as const
}

export function getApiV2VersionGroupIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VersionGroupIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['version-group'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VersionGroupIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2VersionGroupIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['version-group']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionGroupIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VersionGroupIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['version-group'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VersionGroupIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/version-group/:id/', toValue(args)] as const
}

export function getApiV2VersionGroupIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VersionGroupIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['version-group'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2VersionGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2VersionGroupIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionGroupIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VersionGroupIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['version-group'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PokemonPokemonIdEncountersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>
  >,
) {
  return ['api', '/api/v2/pokemon/:pokemon_id/encounters', toValue(args)] as const
}

export function getApiV2PokemonPokemonIdEncountersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PokemonPokemonIdEncountersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.pokemon[':pokemon_id'].encounters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PokemonPokemonIdEncounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PokemonPokemonIdEncountersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PokemonPokemonIdEncountersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PokemonPokemonIdEncountersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.pokemon[':pokemon_id'].encounters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
