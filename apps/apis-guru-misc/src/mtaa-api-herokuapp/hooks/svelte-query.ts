import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCountryKey() {
  return ['{country}'] as const
}

export function getCountryQueryKey(args: InferRequestType<(typeof client)[':country']['$get']>) {
  return [':country', '/:country', args] as const
}

export function getCountryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':country']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCountryQueryKey>
  >({
    queryKey: getCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':country'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':country']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCountryRegionQueryKey(
  args: InferRequestType<(typeof client)[':country'][':region']['$get']>,
) {
  return [':country', '/:country/:region', args] as const
}

export function getCountryRegionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':country'][':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountryRegionQueryKey>
  >({
    queryKey: getCountryRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':country'][':region'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCountryRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':country'][':region']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCountryRegionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountryRegionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCountryRegionDistrictQueryKey(
  args: InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
) {
  return [':country', '/:country/:region/:district', args] as const
}

export function getCountryRegionDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCountryRegionDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':country'][':region'][':district'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCountryRegionDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCountryRegionDistrictQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCountryRegionDistrictWardQueryKey(
  args: InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>,
) {
  return [':country', '/:country/:region/:district/:ward', args] as const
}

export function getCountryRegionDistrictWardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCountryRegionDistrictWardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':country'][':region'][':district'][':ward'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCountryRegionDistrictWard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCountryRegionDistrictWardQueryKey>
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
      ...getCountryRegionDistrictWardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCountryRegionDistrictWardStreetQueryKey(
  args: InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
) {
  return [':country', '/:country/:region/:district/:ward/:street', args] as const
}

export function getCountryRegionDistrictWardStreetQueryOptions<
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
  args: InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCountryRegionDistrictWardStreetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':country'][':region'][':district'][':ward'][':street'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCountryRegionDistrictWardStreet<
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
  args: () => InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCountryRegionDistrictWardStreetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
