import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDirectionsOutputFormatKey() {
  return ['directions.{outputFormat}'] as const
}

export function getDistanceKey() {
  return ['distance'] as const
}

export function getDistanceOutputFormatKey() {
  return ['distance.{outputFormat}'] as const
}

export function getOptimalDirectionsOutputFormatKey() {
  return ['optimalDirections.{outputFormat}'] as const
}

export function getOptimalRouteOutputFormatKey() {
  return ['optimalRoute.{outputFormat}'] as const
}

export function getRouteOutputFormatKey() {
  return ['route.{outputFormat}'] as const
}

export function getTruckKey() {
  return ['truck'] as const
}

export function getDirectionsOutputFormatQueryKey(
  args: InferRequestType<(typeof client)['directions.:outputFormat']['$get']>,
) {
  return ['directions.:outputFormat', '/directions.:outputFormat', args] as const
}

export function getDirectionsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['directions.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectionsOutputFormatQueryKey>
  >({
    queryKey: getDirectionsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['directions.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['directions.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectionsOutputFormatQueryKey>
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
      ...getDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['directions.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectionsOutputFormatQueryKey>
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
      ...getDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDirectionsOutputFormatMutationKey() {
  return ['directions.:outputFormat', '/directions.:outputFormat', 'POST'] as const
}

export function getPostDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['directions.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDirectionsOutputFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['directions.:outputFormat']['$post']>) {
      return parseResponse(client['directions.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostDirectionsOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['directions.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['directions.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDirectionsOutputFormatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDistanceOutputFormatQueryKey(
  args: InferRequestType<(typeof client)['distance.:outputFormat']['$get']>,
) {
  return ['distance.:outputFormat', '/distance.:outputFormat', args] as const
}

export function getDistanceOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['distance.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistanceOutputFormatQueryKey>
  >({
    queryKey: getDistanceOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['distance.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistanceOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['distance.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistanceOutputFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistanceOutputFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistanceOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['distance.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistanceOutputFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistanceOutputFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDistanceOutputFormatMutationKey() {
  return ['distance.:outputFormat', '/distance.:outputFormat', 'POST'] as const
}

export function getPostDistanceOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['distance.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDistanceOutputFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['distance.:outputFormat']['$post']>) {
      return parseResponse(client['distance.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostDistanceOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['distance.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['distance.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDistanceOutputFormatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDistanceBetweenPairsOutputFormatQueryKey(
  args: InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>,
) {
  return ['distance', '/distance/betweenPairs.:outputFormat', args] as const
}

export function getDistanceBetweenPairsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistanceBetweenPairsOutputFormatQueryKey>
  >({
    queryKey: getDistanceBetweenPairsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.distance['betweenPairs.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistanceBetweenPairsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistanceBetweenPairsOutputFormatQueryKey>
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
      ...getDistanceBetweenPairsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistanceBetweenPairsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistanceBetweenPairsOutputFormatQueryKey>
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
      ...getDistanceBetweenPairsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDistanceBetweenPairsOutputFormatMutationKey() {
  return ['distance', '/distance/betweenPairs.:outputFormat', 'POST'] as const
}

export function getPostDistanceBetweenPairsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDistanceBetweenPairsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.distance['betweenPairs.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostDistanceBetweenPairsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distance)['betweenPairs.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.distance)['betweenPairs.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDistanceBetweenPairsOutputFormatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptimalDirectionsOutputFormatQueryKey(
  args: InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$get']>,
) {
  return ['optimalDirections.:outputFormat', '/optimalDirections.:outputFormat', args] as const
}

export function getOptimalDirectionsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptimalDirectionsOutputFormatQueryKey>
  >({
    queryKey: getOptimalDirectionsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['optimalDirections.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOptimalDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOptimalDirectionsOutputFormatQueryKey>
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
      ...getOptimalDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOptimalDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOptimalDirectionsOutputFormatQueryKey>
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
      ...getOptimalDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOptimalDirectionsOutputFormatMutationKey() {
  return ['optimalDirections.:outputFormat', '/optimalDirections.:outputFormat', 'POST'] as const
}

export function getPostOptimalDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOptimalDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$post']>,
    ) {
      return parseResponse(client['optimalDirections.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostOptimalDirectionsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['optimalDirections.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['optimalDirections.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOptimalDirectionsOutputFormatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptimalRouteOutputFormatQueryKey(
  args: InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$get']>,
) {
  return ['optimalRoute.:outputFormat', '/optimalRoute.:outputFormat', args] as const
}

export function getOptimalRouteOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptimalRouteOutputFormatQueryKey>
  >({
    queryKey: getOptimalRouteOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['optimalRoute.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOptimalRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOptimalRouteOutputFormatQueryKey>
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
      ...getOptimalRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOptimalRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOptimalRouteOutputFormatQueryKey>
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
      ...getOptimalRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOptimalRouteOutputFormatMutationKey() {
  return ['optimalRoute.:outputFormat', '/optimalRoute.:outputFormat', 'POST'] as const
}

export function getPostOptimalRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOptimalRouteOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$post']>,
    ) {
      return parseResponse(client['optimalRoute.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostOptimalRouteOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['optimalRoute.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['optimalRoute.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOptimalRouteOutputFormatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRouteOutputFormatQueryKey(
  args: InferRequestType<(typeof client)['route.:outputFormat']['$get']>,
) {
  return ['route.:outputFormat', '/route.:outputFormat', args] as const
}

export function getRouteOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['route.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['route.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['route.:outputFormat']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOutputFormatQueryKey>
  >({
    queryKey: getRouteOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['route.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['route.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['route.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['route.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOutputFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['route.:outputFormat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['route.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['route.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteOutputFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRouteOutputFormatMutationKey() {
  return ['route.:outputFormat', '/route.:outputFormat', 'POST'] as const
}

export function getPostRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['route.:outputFormat']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['route.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteOutputFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['route.:outputFormat']['$post']>) {
      return parseResponse(client['route.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostRouteOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['route.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['route.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteOutputFormatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTruckDirectionsOutputFormatQueryKey(
  args: InferRequestType<(typeof client.truck)['directions.:outputFormat']['$get']>,
) {
  return ['truck', '/truck/directions.:outputFormat', args] as const
}

export function getTruckDirectionsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['directions.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckDirectionsOutputFormatQueryKey>
  >({
    queryKey: getTruckDirectionsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.truck['directions.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTruckDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['directions.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckDirectionsOutputFormatQueryKey>
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
      ...getTruckDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTruckDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['directions.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckDirectionsOutputFormatQueryKey>
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
      ...getTruckDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTruckDirectionsOutputFormatMutationKey() {
  return ['truck', '/truck/directions.:outputFormat', 'POST'] as const
}

export function getPostTruckDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['directions.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['directions.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.truck['directions.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostTruckDirectionsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['directions.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.truck)['directions.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTruckDirectionsOutputFormatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTruckDistanceOutputFormatQueryKey(
  args: InferRequestType<(typeof client.truck)['distance.:outputFormat']['$get']>,
) {
  return ['truck', '/truck/distance.:outputFormat', args] as const
}

export function getTruckDistanceOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['distance.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckDistanceOutputFormatQueryKey>
  >({
    queryKey: getTruckDistanceOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.truck['distance.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTruckDistanceOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['distance.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckDistanceOutputFormatQueryKey>
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
      ...getTruckDistanceOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTruckDistanceOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['distance.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckDistanceOutputFormatQueryKey>
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
      ...getTruckDistanceOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTruckDistanceOutputFormatMutationKey() {
  return ['truck', '/truck/distance.:outputFormat', 'POST'] as const
}

export function getPostTruckDistanceOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['distance.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckDistanceOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['distance.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.truck['distance.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostTruckDistanceOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['distance.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.truck)['distance.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTruckDistanceOutputFormatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTruckDistanceBetweenPairsOutputFormatQueryKey(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>,
) {
  return ['truck', '/truck/distance/betweenPairs.:outputFormat', args] as const
}

export function getTruckDistanceBetweenPairsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckDistanceBetweenPairsOutputFormatQueryKey>
  >({
    queryKey: getTruckDistanceBetweenPairsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.truck.distance['betweenPairs.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTruckDistanceBetweenPairsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckDistanceBetweenPairsOutputFormatQueryKey>
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
      ...getTruckDistanceBetweenPairsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTruckDistanceBetweenPairsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckDistanceBetweenPairsOutputFormatQueryKey>
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
      ...getTruckDistanceBetweenPairsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTruckDistanceBetweenPairsOutputFormatMutationKey() {
  return ['truck', '/truck/distance/betweenPairs.:outputFormat', 'POST'] as const
}

export function getPostTruckDistanceBetweenPairsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckDistanceBetweenPairsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.truck.distance['betweenPairs.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostTruckDistanceBetweenPairsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.truck.distance)['betweenPairs.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTruckDistanceBetweenPairsOutputFormatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTruckOptimalDirectionsOutputFormatQueryKey(
  args: InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>,
) {
  return ['truck', '/truck/optimalDirections.:outputFormat', args] as const
}

export function getTruckOptimalDirectionsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckOptimalDirectionsOutputFormatQueryKey>
  >({
    queryKey: getTruckOptimalDirectionsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.truck['optimalDirections.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTruckOptimalDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckOptimalDirectionsOutputFormatQueryKey>
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
      ...getTruckOptimalDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTruckOptimalDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckOptimalDirectionsOutputFormatQueryKey>
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
      ...getTruckOptimalDirectionsOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTruckOptimalDirectionsOutputFormatMutationKey() {
  return ['truck', '/truck/optimalDirections.:outputFormat', 'POST'] as const
}

export function getPostTruckOptimalDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckOptimalDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.truck['optimalDirections.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostTruckOptimalDirectionsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['optimalDirections.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.truck)['optimalDirections.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTruckOptimalDirectionsOutputFormatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTruckOptimalRouteOutputFormatQueryKey(
  args: InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>,
) {
  return ['truck', '/truck/optimalRoute.:outputFormat', args] as const
}

export function getTruckOptimalRouteOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckOptimalRouteOutputFormatQueryKey>
  >({
    queryKey: getTruckOptimalRouteOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.truck['optimalRoute.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTruckOptimalRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckOptimalRouteOutputFormatQueryKey>
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
      ...getTruckOptimalRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTruckOptimalRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckOptimalRouteOutputFormatQueryKey>
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
      ...getTruckOptimalRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTruckOptimalRouteOutputFormatMutationKey() {
  return ['truck', '/truck/optimalRoute.:outputFormat', 'POST'] as const
}

export function getPostTruckOptimalRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckOptimalRouteOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.truck['optimalRoute.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostTruckOptimalRouteOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['optimalRoute.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.truck)['optimalRoute.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTruckOptimalRouteOutputFormatMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTruckRouteOutputFormatQueryKey(
  args: InferRequestType<(typeof client.truck)['route.:outputFormat']['$get']>,
) {
  return ['truck', '/truck/route.:outputFormat', args] as const
}

export function getTruckRouteOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['route.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckRouteOutputFormatQueryKey>
  >({
    queryKey: getTruckRouteOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.truck['route.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTruckRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['route.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckRouteOutputFormatQueryKey>
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
      ...getTruckRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTruckRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.truck)['route.:outputFormat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTruckRouteOutputFormatQueryKey>
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
      ...getTruckRouteOutputFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTruckRouteOutputFormatMutationKey() {
  return ['truck', '/truck/route.:outputFormat', 'POST'] as const
}

export function getPostTruckRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['route.:outputFormat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckRouteOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['route.:outputFormat']['$post']>,
    ) {
      return parseResponse(client.truck['route.:outputFormat'].$post(args, options))
    },
  })
}

export function usePostTruckRouteOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.truck)['route.:outputFormat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.truck)['route.:outputFormat']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTruckRouteOutputFormatMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
