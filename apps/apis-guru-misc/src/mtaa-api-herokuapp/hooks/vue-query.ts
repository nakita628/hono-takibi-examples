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

export function getCountryKey() {
  return ['{country}'] as const
}

export function getCountryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':country']['$get']>>,
) {
  return [':country', '/:country', toValue(args)] as const
}

export function getCountryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':country']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':country'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':country']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>
            >
          >,
          ReturnType<typeof getCountryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':country'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryRegionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':country'][':region']['$get']>>,
) {
  return [':country', '/:country/:region', toValue(args)] as const
}

export function getCountryRegionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':country'][':region']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':country'][':region'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCountryRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':country'][':region']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCountryRegionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountryRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':country'][':region'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryRegionDistrictQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>
  >,
) {
  return [':country', '/:country/:region/:district', toValue(args)] as const
}

export function getCountryRegionDistrictQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryRegionDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':country'][':region'][':district'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCountryRegionDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCountryRegionDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountryRegionDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryRegionDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':country'][':region'][':district'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryRegionDistrictWardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
  >,
) {
  return [':country', '/:country/:region/:district/:ward', toValue(args)] as const
}

export function getCountryRegionDistrictWardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryRegionDistrictWardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':country'][':region'][':district'][':ward'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCountryRegionDistrictWard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
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
                  ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCountryRegionDistrictWardQueryKey>
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
          Awaited<ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountryRegionDistrictWardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryRegionDistrictWardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':country'][':region'][':district'][':ward'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryRegionDistrictWardStreetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
    >
  >,
) {
  return [':country', '/:country/:region/:district/:ward/:street', toValue(args)] as const
}

export function getCountryRegionDistrictWardStreetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryRegionDistrictWardStreetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':country'][':region'][':district'][':ward'][':street'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCountryRegionDistrictWardStreet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
    >
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
                    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
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
                    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCountryRegionDistrictWardStreetQueryKey>
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
            ReturnType<
              (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountryRegionDistrictWardStreetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryRegionDistrictWardStreetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':country'][':region'][':district'][':ward'][':street'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
