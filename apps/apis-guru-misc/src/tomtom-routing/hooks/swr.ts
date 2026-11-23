import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRoutingKey() {
  return ['routing'] as const
}

export function getGetRoutingVersionNumberCalculateReachableRangeOriginContentTypeKey(
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

export function useGetRoutingVersionNumberCalculateReachableRangeOriginContentType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoutingVersionNumberCalculateReachableRangeOriginContentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingVersionNumberCalculateReachableRangeOriginContentType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoutingVersionNumberCalculateReachableRangeOriginContentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeKey() {
  return [
    'routing',
    '/routing/:versionNumber/calculateReachableRange/:origin/:contentType',
    'POST',
  ] as const
}

export function usePostRoutingVersionNumberCalculateReachableRangeOriginContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRoutingVersionNumberCalculateReachableRangeOriginContentTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRoutingVersionNumberCalculateRouteLocationsContentTypeKey(
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

export function useGetRoutingVersionNumberCalculateRouteLocationsContentType<TError = unknown>(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoutingVersionNumberCalculateRouteLocationsContentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingVersionNumberCalculateRouteLocationsContentType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoutingVersionNumberCalculateRouteLocationsContentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRoutingVersionNumberCalculateRouteLocationsContentTypeKey() {
  return [
    'routing',
    '/routing/:versionNumber/calculateRoute/:locations/:contentType',
    'POST',
  ] as const
}

export function usePostRoutingVersionNumberCalculateRouteLocationsContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingVersionNumberCalculateRouteLocationsContentTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
