import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRoutingKey() {
  return ['routing'] as const
}

export function getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
) {
  return [
    'routing',
    '/routing/:versionNumber/calculateReachableRange/:origin/:contentType',
    args,
  ] as const
}

export function getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey>
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
      ...getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoutingVersionNumberCalculateReachableRangeOriginContentType<
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
) {
  return [
    'routing',
    '/routing/:versionNumber/calculateRoute/:locations/:contentType',
    args,
  ] as const
}

export function getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey>
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
      ...getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoutingVersionNumberCalculateRouteLocationsContentType<
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
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
