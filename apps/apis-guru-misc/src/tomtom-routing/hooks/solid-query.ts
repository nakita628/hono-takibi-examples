import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createRoutingVersionNumberCalculateReachableRangeOriginContentType<
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
  args: () => InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
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
                    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryKey>
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
      ...getRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRoutingVersionNumberCalculateReachableRangeOriginContentType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createRoutingVersionNumberCalculateRouteLocationsContentType<
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
  args: () => InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
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
                    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryKey>
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
      ...getRoutingVersionNumberCalculateRouteLocationsContentTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRoutingVersionNumberCalculateRouteLocationsContentType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostRoutingVersionNumberCalculateRouteLocationsContentTypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
