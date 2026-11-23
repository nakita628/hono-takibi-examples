import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUsKey() {
  return ['us'] as const
}

export function getPostUsV1AerodromesDistanceQueryKey() {
  return ['us', '/us/v1/aerodromes/distance-query', 'POST'] as const
}

export function usePostUsV1AerodromesDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1AerodromesDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.aerodromes)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.aerodromes['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1AerodromesPolygonQueryKey() {
  return ['us', '/us/v1/aerodromes/polygon-query', 'POST'] as const
}

export function usePostUsV1AerodromesPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1AerodromesPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.aerodromes['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1AerodromesRouteQueryKey() {
  return ['us', '/us/v1/aerodromes/route-query', 'POST'] as const
}

export function usePostUsV1AerodromesRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.aerodromes)['route-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.aerodromes)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1AerodromesRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.aerodromes)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.aerodromes['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1AirspaceDistanceQueryKey() {
  return ['us', '/us/v1/airspace/distance-query', 'POST'] as const
}

export function usePostUsV1AirspaceDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.airspace)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.airspace)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1AirspaceDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.airspace)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.airspace['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1AirspacePolygonQueryKey() {
  return ['us', '/us/v1/airspace/polygon-query', 'POST'] as const
}

export function usePostUsV1AirspacePolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.airspace)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.airspace)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1AirspacePolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.airspace)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.airspace['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1AirspaceRouteQueryKey() {
  return ['us', '/us/v1/airspace/route-query', 'POST'] as const
}

export function usePostUsV1AirspaceRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.airspace)['route-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.airspace)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1AirspaceRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.airspace)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.airspace['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1ObstaclesDistanceQueryKey() {
  return ['us', '/us/v1/obstacles/distance-query', 'POST'] as const
}

export function usePostUsV1ObstaclesDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.obstacles)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.obstacles)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1ObstaclesDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.obstacles)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.obstacles['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1ObstaclesPolygonQueryKey() {
  return ['us', '/us/v1/obstacles/polygon-query', 'POST'] as const
}

export function usePostUsV1ObstaclesPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1ObstaclesPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.obstacles)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.obstacles['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1ObstaclesRouteQueryKey() {
  return ['us', '/us/v1/obstacles/route-query', 'POST'] as const
}

export function usePostUsV1ObstaclesRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.obstacles)['route-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.obstacles)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1ObstaclesRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.obstacles)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.obstacles['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1RestrictionsDistanceQueryKey() {
  return ['us', '/us/v1/restrictions/distance-query', 'POST'] as const
}

export function usePostUsV1RestrictionsDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.restrictions)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.restrictions)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1RestrictionsDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.restrictions)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.restrictions['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1RestrictionsPolygonQueryKey() {
  return ['us', '/us/v1/restrictions/polygon-query', 'POST'] as const
}

export function usePostUsV1RestrictionsPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1RestrictionsPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.restrictions)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.restrictions['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1RestrictionsRouteQueryKey() {
  return ['us', '/us/v1/restrictions/route-query', 'POST'] as const
}

export function usePostUsV1RestrictionsRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.restrictions)['route-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.restrictions)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1RestrictionsRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1.restrictions)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.restrictions['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1SsaDistanceQueryKey() {
  return ['us', '/us/v1/ssa/distance-query', 'POST'] as const
}

export function usePostUsV1SsaDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.ssa)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.ssa)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1SsaDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.ssa)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.ssa['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1SsaPolygonQueryKey() {
  return ['us', '/us/v1/ssa/polygon-query', 'POST'] as const
}

export function usePostUsV1SsaPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.ssa)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.ssa)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1SsaPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.ssa)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.ssa['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1SsaRouteQueryKey() {
  return ['us', '/us/v1/ssa/route-query', 'POST'] as const
}

export function usePostUsV1SsaRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.us.v1.ssa)['route-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.ssa)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1SsaRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.ssa)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.ssa['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1UoaDistanceQueryKey() {
  return ['us', '/us/v1/uoa/distance-query', 'POST'] as const
}

export function usePostUsV1UoaDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.uoa)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.uoa)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1UoaDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.uoa)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.uoa['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1UoaPolygonQueryKey() {
  return ['us', '/us/v1/uoa/polygon-query', 'POST'] as const
}

export function usePostUsV1UoaPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.uoa)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.uoa)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1UoaPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.uoa)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.uoa['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1UoaRouteQueryKey() {
  return ['us', '/us/v1/uoa/route-query', 'POST'] as const
}

export function usePostUsV1UoaRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.us.v1.uoa)['route-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.uoa)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1UoaRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.uoa)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.uoa['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1VenuesDistanceQueryKey() {
  return ['us', '/us/v1/venues/distance-query', 'POST'] as const
}

export function usePostUsV1VenuesDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.venues)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.venues)['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1VenuesDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.venues)['distance-query']['$post']> },
      ) => parseResponse(client.us.v1.venues['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1VenuesPolygonQueryKey() {
  return ['us', '/us/v1/venues/polygon-query', 'POST'] as const
}

export function usePostUsV1VenuesPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.venues)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.venues)['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1VenuesPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.venues)['polygon-query']['$post']> },
      ) => parseResponse(client.us.v1.venues['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1VenuesRouteQueryKey() {
  return ['us', '/us/v1/venues/route-query', 'POST'] as const
}

export function usePostUsV1VenuesRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.venues)['route-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1.venues)['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1VenuesRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.us.v1.venues)['route-query']['$post']> },
      ) => parseResponse(client.us.v1.venues['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1WxForecastDistanceQueryKey() {
  return ['us', '/us/v1/wx-forecast/distance-query', 'POST'] as const
}

export function usePostUsV1WxForecastDistanceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1WxForecastDistanceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>
        },
      ) => parseResponse(client.us.v1['wx-forecast']['distance-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1WxForecastPolygonQueryKey() {
  return ['us', '/us/v1/wx-forecast/polygon-query', 'POST'] as const
}

export function usePostUsV1WxForecastPolygonQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1WxForecastPolygonQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>
        },
      ) => parseResponse(client.us.v1['wx-forecast']['polygon-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsV1WxForecastRouteQueryKey() {
  return ['us', '/us/v1/wx-forecast/route-query', 'POST'] as const
}

export function usePostUsV1WxForecastRouteQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsV1WxForecastRouteQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']> },
      ) => parseResponse(client.us.v1['wx-forecast']['route-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
