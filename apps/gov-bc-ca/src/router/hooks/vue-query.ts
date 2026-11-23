import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>>,
) {
  return ['directions.{outputFormat}', '/directions.{outputFormat}', toValue(args)] as const
}

export function getDirectionsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectionsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['directions.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectionsOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectionsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectionsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['directions.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDirectionsOutputFormatMutationKey() {
  return ['directions.{outputFormat}', '/directions.{outputFormat}', 'POST'] as const
}

export function getPostDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['directions.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['directions.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client['directions.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostDirectionsOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['directions.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>>,
) {
  return ['distance.{outputFormat}', '/distance.{outputFormat}', toValue(args)] as const
}

export function getDistanceOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistanceOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['distance.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistanceOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistanceOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistanceOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistanceOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['distance.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDistanceOutputFormatMutationKey() {
  return ['distance.{outputFormat}', '/distance.{outputFormat}', 'POST'] as const
}

export function getPostDistanceOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['distance.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDistanceOutputFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['distance.{outputFormat}']['$post']>) {
      return parseResponse(client['distance.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostDistanceOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['distance.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>
  >,
) {
  return ['distance', '/distance/betweenPairs.{outputFormat}', toValue(args)] as const
}

export function getDistanceBetweenPairsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistanceBetweenPairsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distance['betweenPairs.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistanceBetweenPairsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistanceBetweenPairsOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistanceBetweenPairsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistanceBetweenPairsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.distance['betweenPairs.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDistanceBetweenPairsOutputFormatMutationKey() {
  return ['distance', '/distance/betweenPairs.{outputFormat}', 'POST'] as const
}

export function getPostDistanceBetweenPairsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDistanceBetweenPairsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client.distance['betweenPairs.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostDistanceBetweenPairsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>
  >,
) {
  return [
    'optimalDirections.{outputFormat}',
    '/optimalDirections.{outputFormat}',
    toValue(args),
  ] as const
}

export function getOptimalDirectionsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptimalDirectionsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['optimalDirections.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptimalDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptimalDirectionsOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptimalDirectionsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptimalDirectionsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['optimalDirections.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOptimalDirectionsOutputFormatMutationKey() {
  return ['optimalDirections.{outputFormat}', '/optimalDirections.{outputFormat}', 'POST'] as const
}

export function getPostOptimalDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOptimalDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client['optimalDirections.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostOptimalDirectionsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>,
) {
  return ['optimalRoute.{outputFormat}', '/optimalRoute.{outputFormat}', toValue(args)] as const
}

export function getOptimalRouteOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptimalRouteOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['optimalRoute.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptimalRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptimalRouteOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptimalRouteOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptimalRouteOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['optimalRoute.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOptimalRouteOutputFormatMutationKey() {
  return ['optimalRoute.{outputFormat}', '/optimalRoute.{outputFormat}', 'POST'] as const
}

export function getPostOptimalRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOptimalRouteOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client['optimalRoute.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostOptimalRouteOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['route.{outputFormat}']['$get']>>,
) {
  return ['route.{outputFormat}', '/route.{outputFormat}', toValue(args)] as const
}

export function getRouteOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['route.{outputFormat}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['route.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['route.{outputFormat}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRouteOutputFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRouteOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['route.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRouteOutputFormatMutationKey() {
  return ['route.{outputFormat}', '/route.{outputFormat}', 'POST'] as const
}

export function getPostRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['route.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteOutputFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['route.{outputFormat}']['$post']>) {
      return parseResponse(client['route.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostRouteOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['route.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>
  >,
) {
  return ['truck', '/truck/directions.{outputFormat}', toValue(args)] as const
}

export function getTruckDirectionsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTruckDirectionsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.truck['directions.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTruckDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTruckDirectionsOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckDirectionsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTruckDirectionsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.truck['directions.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTruckDirectionsOutputFormatMutationKey() {
  return ['truck', '/truck/directions.{outputFormat}', 'POST'] as const
}

export function getPostTruckDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client.truck['directions.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostTruckDirectionsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>
  >,
) {
  return ['truck', '/truck/distance.{outputFormat}', toValue(args)] as const
}

export function getTruckDistanceOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTruckDistanceOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.truck['distance.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTruckDistanceOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTruckDistanceOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckDistanceOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTruckDistanceOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.truck['distance.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTruckDistanceOutputFormatMutationKey() {
  return ['truck', '/truck/distance.{outputFormat}', 'POST'] as const
}

export function getPostTruckDistanceOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckDistanceOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client.truck['distance.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostTruckDistanceOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
  >,
) {
  return ['truck', '/truck/distance/betweenPairs.{outputFormat}', toValue(args)] as const
}

export function getTruckDistanceBetweenPairsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTruckDistanceBetweenPairsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.truck.distance['betweenPairs.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTruckDistanceBetweenPairsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
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
                  ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTruckDistanceBetweenPairsOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckDistanceBetweenPairsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTruckDistanceBetweenPairsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.truck.distance['betweenPairs.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTruckDistanceBetweenPairsOutputFormatMutationKey() {
  return ['truck', '/truck/distance/betweenPairs.{outputFormat}', 'POST'] as const
}

export function getPostTruckDistanceBetweenPairsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckDistanceBetweenPairsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']
      >,
    ) {
      return parseResponse(
        client.truck.distance['betweenPairs.{outputFormat}'].$post(args, options),
      )
    },
  })
}

export function usePostTruckDistanceBetweenPairsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>
  >,
) {
  return ['truck', '/truck/optimalDirections.{outputFormat}', toValue(args)] as const
}

export function getTruckOptimalDirectionsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTruckOptimalDirectionsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.truck['optimalDirections.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTruckOptimalDirectionsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>
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
                  ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTruckOptimalDirectionsOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckOptimalDirectionsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTruckOptimalDirectionsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.truck['optimalDirections.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTruckOptimalDirectionsOutputFormatMutationKey() {
  return ['truck', '/truck/optimalDirections.{outputFormat}', 'POST'] as const
}

export function getPostTruckOptimalDirectionsOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckOptimalDirectionsOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client.truck['optimalDirections.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostTruckOptimalDirectionsOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>
  >,
) {
  return ['truck', '/truck/optimalRoute.{outputFormat}', toValue(args)] as const
}

export function getTruckOptimalRouteOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTruckOptimalRouteOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.truck['optimalRoute.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTruckOptimalRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTruckOptimalRouteOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckOptimalRouteOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTruckOptimalRouteOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.truck['optimalRoute.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTruckOptimalRouteOutputFormatMutationKey() {
  return ['truck', '/truck/optimalRoute.{outputFormat}', 'POST'] as const
}

export function getPostTruckOptimalRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckOptimalRouteOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client.truck['optimalRoute.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostTruckOptimalRouteOutputFormat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>>,
) {
  return ['truck', '/truck/route.{outputFormat}', toValue(args)] as const
}

export function getTruckRouteOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTruckRouteOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.truck['route.{outputFormat}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTruckRouteOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTruckRouteOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTruckRouteOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTruckRouteOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.truck['route.{outputFormat}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTruckRouteOutputFormatMutationKey() {
  return ['truck', '/truck/route.{outputFormat}', 'POST'] as const
}

export function getPostTruckRouteOutputFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.truck)['route.{outputFormat}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTruckRouteOutputFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$post']>,
    ) {
      return parseResponse(client.truck['route.{outputFormat}'].$post(args, options))
    },
  })
}

export function usePostTruckRouteOutputFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.truck)['route.{outputFormat}']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
