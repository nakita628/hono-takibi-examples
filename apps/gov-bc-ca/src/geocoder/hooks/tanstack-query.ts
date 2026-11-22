import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddressesOutputFormatKey() {
  return ['addresses.{outputFormat}'] as const
}

export function getIntersectionsKey() {
  return ['intersections'] as const
}

export function getOccupantsKey() {
  return ['occupants'] as const
}

export function getParcelsKey() {
  return ['parcels'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getAddressesOutputFormatQueryKey(
  args: InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>,
) {
  return ['addresses.:outputFormat', '/addresses.:outputFormat', args] as const
}

export function getAddressesOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesOutputFormatQueryKey>
  >({
    queryKey: getAddressesOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['addresses.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAddressesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesOutputFormatQueryKey>
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
      ...getAddressesOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAddressesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesOutputFormatQueryKey>
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
      ...getAddressesOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntersectionsNearOutputFormatQueryKey(
  args: InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>,
) {
  return ['intersections', '/intersections/near.:outputFormat', args] as const
}

export function getIntersectionsNearOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsNearOutputFormatQueryKey>
  >({
    queryKey: getIntersectionsNearOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intersections['near.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntersectionsNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsNearOutputFormatQueryKey>
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
      ...getIntersectionsNearOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntersectionsNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsNearOutputFormatQueryKey>
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
      ...getIntersectionsNearOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntersectionsNearestOutputFormatQueryKey(
  args: InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>,
) {
  return ['intersections', '/intersections/nearest.:outputFormat', args] as const
}

export function getIntersectionsNearestOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsNearestOutputFormatQueryKey>
  >({
    queryKey: getIntersectionsNearestOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intersections['nearest.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntersectionsNearestOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsNearestOutputFormatQueryKey>
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
      ...getIntersectionsNearestOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntersectionsNearestOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsNearestOutputFormatQueryKey>
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
      ...getIntersectionsNearestOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntersectionsWithinOutputFormatQueryKey(
  args: InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>,
) {
  return ['intersections', '/intersections/within.:outputFormat', args] as const
}

export function getIntersectionsWithinOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsWithinOutputFormatQueryKey>
  >({
    queryKey: getIntersectionsWithinOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intersections['within.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntersectionsWithinOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsWithinOutputFormatQueryKey>
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
      ...getIntersectionsWithinOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntersectionsWithinOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsWithinOutputFormatQueryKey>
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
      ...getIntersectionsWithinOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntersectionsIntersectionIDOutputFormatQueryKey(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>,
) {
  return ['intersections', '/intersections/:intersectionID.:outputFormat', args] as const
}

export function getIntersectionsIntersectionIDOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsIntersectionIDOutputFormatQueryKey>
  >({
    queryKey: getIntersectionsIntersectionIDOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intersections[':intersectionID.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntersectionsIntersectionIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsIntersectionIDOutputFormatQueryKey>
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
      ...getIntersectionsIntersectionIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntersectionsIntersectionIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntersectionsIntersectionIDOutputFormatQueryKey>
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
      ...getIntersectionsIntersectionIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOccupantsAddressesOutputFormatQueryKey(
  args: InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>,
) {
  return ['occupants', '/occupants/addresses.:outputFormat', args] as const
}

export function getOccupantsAddressesOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsAddressesOutputFormatQueryKey>
  >({
    queryKey: getOccupantsAddressesOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupants['addresses.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOccupantsAddressesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsAddressesOutputFormatQueryKey>
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
      ...getOccupantsAddressesOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOccupantsAddressesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsAddressesOutputFormatQueryKey>
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
      ...getOccupantsAddressesOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOccupantsNearOutputFormatQueryKey(
  args: InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>,
) {
  return ['occupants', '/occupants/near.:outputFormat', args] as const
}

export function getOccupantsNearOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsNearOutputFormatQueryKey>
  >({
    queryKey: getOccupantsNearOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupants['near.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOccupantsNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsNearOutputFormatQueryKey>
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
      ...getOccupantsNearOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOccupantsNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsNearOutputFormatQueryKey>
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
      ...getOccupantsNearOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOccupantsNearestOutputFormatQueryKey(
  args: InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>,
) {
  return ['occupants', '/occupants/nearest.:outputFormat', args] as const
}

export function getOccupantsNearestOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsNearestOutputFormatQueryKey>
  >({
    queryKey: getOccupantsNearestOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupants['nearest.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOccupantsNearestOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsNearestOutputFormatQueryKey>
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
      ...getOccupantsNearestOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOccupantsNearestOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsNearestOutputFormatQueryKey>
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
      ...getOccupantsNearestOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOccupantsWithinOutputFormatQueryKey(
  args: InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>,
) {
  return ['occupants', '/occupants/within.:outputFormat', args] as const
}

export function getOccupantsWithinOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsWithinOutputFormatQueryKey>
  >({
    queryKey: getOccupantsWithinOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupants['within.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOccupantsWithinOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsWithinOutputFormatQueryKey>
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
      ...getOccupantsWithinOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOccupantsWithinOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsWithinOutputFormatQueryKey>
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
      ...getOccupantsWithinOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOccupantsOccupantIDOutputFormatQueryKey(
  args: InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>,
) {
  return ['occupants', '/occupants/:occupantID.:outputFormat', args] as const
}

export function getOccupantsOccupantIDOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsOccupantIDOutputFormatQueryKey>
  >({
    queryKey: getOccupantsOccupantIDOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupants[':occupantID.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOccupantsOccupantIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsOccupantIDOutputFormatQueryKey>
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
      ...getOccupantsOccupantIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOccupantsOccupantIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupantsOccupantIDOutputFormatQueryKey>
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
      ...getOccupantsOccupantIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getParcelsPidsSiteIDOutputFormatQueryKey(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>,
) {
  return ['parcels', '/parcels/pids/:siteID.:outputFormat', args] as const
}

export function getParcelsPidsSiteIDOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParcelsPidsSiteIDOutputFormatQueryKey>
  >({
    queryKey: getParcelsPidsSiteIDOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parcels.pids[':siteID.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useParcelsPidsSiteIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParcelsPidsSiteIDOutputFormatQueryKey>
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
      ...getParcelsPidsSiteIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseParcelsPidsSiteIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParcelsPidsSiteIDOutputFormatQueryKey>
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
      ...getParcelsPidsSiteIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesNearOutputFormatQueryKey(
  args: InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>,
) {
  return ['sites', '/sites/near.:outputFormat', args] as const
}

export function getSitesNearOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesNearOutputFormatQueryKey>
  >({
    queryKey: getSitesNearOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites['near.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesNearOutputFormatQueryKey>
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
      ...getSitesNearOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesNearOutputFormatQueryKey>
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
      ...getSitesNearOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesNearestOutputFormatQueryKey(
  args: InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>,
) {
  return ['sites', '/sites/nearest.:outputFormat', args] as const
}

export function getSitesNearestOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesNearestOutputFormatQueryKey>
  >({
    queryKey: getSitesNearestOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites['nearest.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesNearestOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesNearestOutputFormatQueryKey>
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
      ...getSitesNearestOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesNearestOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesNearestOutputFormatQueryKey>
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
      ...getSitesNearestOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesWithinOutputFormatQueryKey(
  args: InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>,
) {
  return ['sites', '/sites/within.:outputFormat', args] as const
}

export function getSitesWithinOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesWithinOutputFormatQueryKey>
  >({
    queryKey: getSitesWithinOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites['within.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesWithinOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesWithinOutputFormatQueryKey>
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
      ...getSitesWithinOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesWithinOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesWithinOutputFormatQueryKey>
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
      ...getSitesWithinOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIDOutputFormatQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>,
) {
  return ['sites', '/sites/:siteID.:outputFormat', args] as const
}

export function getSitesSiteIDOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIDOutputFormatQueryKey>
  >({
    queryKey: getSitesSiteIDOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteID.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIDOutputFormatQueryKey>
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
      ...getSitesSiteIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIDOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIDOutputFormatQueryKey>
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
      ...getSitesSiteIDOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIDSubsitesOutputFormatQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>,
) {
  return ['sites', '/sites/:siteID/subsites.:outputFormat', args] as const
}

export function getSitesSiteIDSubsitesOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIDSubsitesOutputFormatQueryKey>
  >({
    queryKey: getSitesSiteIDSubsitesOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteID']['subsites.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIDSubsitesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIDSubsitesOutputFormatQueryKey>
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
      ...getSitesSiteIDSubsitesOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIDSubsitesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIDSubsitesOutputFormatQueryKey>
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
      ...getSitesSiteIDSubsitesOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
