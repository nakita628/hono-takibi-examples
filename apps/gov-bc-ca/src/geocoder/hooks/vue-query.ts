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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>>,
) {
  return ['addresses.:outputFormat', '/addresses.:outputFormat', toValue(args)] as const
}

export function getAddressesOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['addresses.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client)['addresses.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['addresses.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntersectionsNearOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>
  >,
) {
  return ['intersections', '/intersections/near.:outputFormat', toValue(args)] as const
}

export function getIntersectionsNearOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntersectionsNearOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intersections['near.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntersectionsNearOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.intersections)['near.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsNearOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntersectionsNearOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intersections['near.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntersectionsNearestOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>
  >,
) {
  return ['intersections', '/intersections/nearest.:outputFormat', toValue(args)] as const
}

export function getIntersectionsNearestOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntersectionsNearestOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intersections['nearest.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntersectionsNearestOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.intersections)['nearest.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsNearestOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntersectionsNearestOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intersections['nearest.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntersectionsWithinOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>
  >,
) {
  return ['intersections', '/intersections/within.:outputFormat', toValue(args)] as const
}

export function getIntersectionsWithinOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntersectionsWithinOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intersections['within.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntersectionsWithinOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.intersections)['within.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsWithinOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntersectionsWithinOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intersections['within.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntersectionsIntersectionIDOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
  >,
) {
  return ['intersections', '/intersections/:intersectionID.:outputFormat', toValue(args)] as const
}

export function getIntersectionsIntersectionIDOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntersectionsIntersectionIDOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intersections[':intersectionID.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIntersectionsIntersectionIDOutputFormatQueryKey>
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
            ReturnType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntersectionsIntersectionIDOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntersectionsIntersectionIDOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intersections[':intersectionID.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupantsAddressesOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>
  >,
) {
  return ['occupants', '/occupants/addresses.:outputFormat', toValue(args)] as const
}

export function getOccupantsAddressesOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupantsAddressesOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupants['addresses.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupantsAddressesOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.occupants)['addresses.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsAddressesOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupantsAddressesOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupants['addresses.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupantsNearOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>>,
) {
  return ['occupants', '/occupants/near.:outputFormat', toValue(args)] as const
}

export function getOccupantsNearOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupantsNearOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupants['near.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupantsNearOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.occupants)['near.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsNearOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupantsNearOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupants['near.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupantsNearestOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>
  >,
) {
  return ['occupants', '/occupants/nearest.:outputFormat', toValue(args)] as const
}

export function getOccupantsNearestOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupantsNearestOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupants['nearest.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupantsNearestOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.occupants)['nearest.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsNearestOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupantsNearestOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupants['nearest.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupantsWithinOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>
  >,
) {
  return ['occupants', '/occupants/within.:outputFormat', toValue(args)] as const
}

export function getOccupantsWithinOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupantsWithinOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupants['within.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupantsWithinOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.occupants)['within.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsWithinOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupantsWithinOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupants['within.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupantsOccupantIDOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>
  >,
) {
  return ['occupants', '/occupants/:occupantID.:outputFormat', toValue(args)] as const
}

export function getOccupantsOccupantIDOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupantsOccupantIDOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupants[':occupantID.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupantsOccupantIDOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupantsOccupantIDOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupantsOccupantIDOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupants[':occupantID.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParcelsPidsSiteIDOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>
  >,
) {
  return ['parcels', '/parcels/pids/:siteID.:outputFormat', toValue(args)] as const
}

export function getParcelsPidsSiteIDOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParcelsPidsSiteIDOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parcels.pids[':siteID.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getParcelsPidsSiteIDOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParcelsPidsSiteIDOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParcelsPidsSiteIDOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parcels.pids[':siteID.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesNearOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>>,
) {
  return ['sites', '/sites/near.:outputFormat', toValue(args)] as const
}

export function getSitesNearOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesNearOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites['near.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesNearOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesNearOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)['near.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesNearOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesNearOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites['near.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesNearestOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>>,
) {
  return ['sites', '/sites/nearest.:outputFormat', toValue(args)] as const
}

export function getSitesNearestOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesNearestOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites['nearest.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesNearestOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)['nearest.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesNearestOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesNearestOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites['nearest.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesWithinOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>>,
) {
  return ['sites', '/sites/within.:outputFormat', toValue(args)] as const
}

export function getSitesWithinOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesWithinOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites['within.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesWithinOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)['within.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesWithinOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesWithinOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites['within.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIDOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>,
) {
  return ['sites', '/sites/:siteID.:outputFormat', toValue(args)] as const
}

export function getSitesSiteIDOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIDOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteID.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIDOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteID.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIDOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIDOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteID.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIDSubsitesOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>
  >,
) {
  return ['sites', '/sites/:siteID/subsites.:outputFormat', toValue(args)] as const
}

export function getSitesSiteIDSubsitesOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIDSubsitesOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteID']['subsites.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIDSubsitesOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIDSubsitesOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIDSubsitesOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteID']['subsites.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
