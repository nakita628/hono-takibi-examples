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

export function getRoutingKey() {
  return ['routing'] as const
}

export function getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
    >
  >,
) {
  return [
    'routing',
    '/routing/:versionNumber/calculateReachableRange/:origin/:contentType',
    toValue(args),
  ] as const
}

export function getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRoutingVersionNumberCalculateReachableRangeOriginContentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
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
                    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
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
                    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey>
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
              (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeMutationKey() {
  return [
    'routing',
    '/routing/:versionNumber/calculateReachableRange/:origin/:contentType',
    'POST',
  ] as const
}

export function getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
      >,
    ) {
      return parseResponse(
        client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRoutingVersionNumberCalculateReachableRangeOriginContentType<
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
                  ReturnType<
                    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
          >,
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
  const mutationDefaults =
    getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeMutationOptions<
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

export function getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
    >
  >,
) {
  return [
    'routing',
    '/routing/:versionNumber/calculateRoute/:locations/:contentType',
    toValue(args),
  ] as const
}

export function getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRoutingVersionNumberCalculateRouteLocationsContentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
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
                    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
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
                    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey>
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
              (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoutingVersionNumberCalculateRouteLocationsContentTypeMutationKey() {
  return [
    'routing',
    '/routing/:versionNumber/calculateRoute/:locations/:contentType',
    'POST',
  ] as const
}

export function getPostRoutingVersionNumberCalculateRouteLocationsContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingVersionNumberCalculateRouteLocationsContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
      >,
    ) {
      return parseResponse(
        client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRoutingVersionNumberCalculateRouteLocationsContentType<
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
                  ReturnType<
                    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
          >,
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
  const mutationDefaults =
    getPostRoutingVersionNumberCalculateRouteLocationsContentTypeMutationOptions<
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
