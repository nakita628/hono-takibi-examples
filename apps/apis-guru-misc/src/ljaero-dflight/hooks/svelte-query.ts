import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUsKey() {
  return ['us'] as const
}

export function getPostUsV1AerodromesDistanceQueryMutationKey() {
  return ['us', '/us/v1/aerodromes/distance-query', 'POST'] as const
}

export function getPostUsV1AerodromesDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1AerodromesDistanceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.aerodromes['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1AerodromesDistanceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1AerodromesDistanceQueryMutationOptions<
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

export function getPostUsV1AerodromesPolygonQueryMutationKey() {
  return ['us', '/us/v1/aerodromes/polygon-query', 'POST'] as const
}

export function getPostUsV1AerodromesPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1AerodromesPolygonQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.aerodromes['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1AerodromesPolygonQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1AerodromesPolygonQueryMutationOptions<
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

export function getPostUsV1AerodromesRouteQueryMutationKey() {
  return ['us', '/us/v1/aerodromes/route-query', 'POST'] as const
}

export function getPostUsV1AerodromesRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.aerodromes)['route-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.aerodromes)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1AerodromesRouteQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.aerodromes)['route-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.aerodromes['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1AerodromesRouteQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.aerodromes)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.aerodromes)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1AerodromesRouteQueryMutationOptions<
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

export function getPostUsV1AirspaceDistanceQueryMutationKey() {
  return ['us', '/us/v1/airspace/distance-query', 'POST'] as const
}

export function getPostUsV1AirspaceDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.airspace)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.airspace)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1AirspaceDistanceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.airspace)['distance-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.airspace['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1AirspaceDistanceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.airspace)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.airspace)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1AirspaceDistanceQueryMutationOptions<
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

export function getPostUsV1AirspacePolygonQueryMutationKey() {
  return ['us', '/us/v1/airspace/polygon-query', 'POST'] as const
}

export function getPostUsV1AirspacePolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.airspace)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.airspace)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1AirspacePolygonQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.airspace)['polygon-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.airspace['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1AirspacePolygonQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.airspace)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.airspace)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1AirspacePolygonQueryMutationOptions<
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

export function getPostUsV1AirspaceRouteQueryMutationKey() {
  return ['us', '/us/v1/airspace/route-query', 'POST'] as const
}

export function getPostUsV1AirspaceRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.airspace)['route-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.airspace)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1AirspaceRouteQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.airspace)['route-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.airspace['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1AirspaceRouteQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.airspace)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.airspace)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1AirspaceRouteQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1ObstaclesDistanceQueryMutationKey() {
  return ['us', '/us/v1/obstacles/distance-query', 'POST'] as const
}

export function getPostUsV1ObstaclesDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.obstacles)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.obstacles)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1ObstaclesDistanceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.obstacles)['distance-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.obstacles['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1ObstaclesDistanceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.obstacles)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.obstacles)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1ObstaclesDistanceQueryMutationOptions<
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

export function getPostUsV1ObstaclesPolygonQueryMutationKey() {
  return ['us', '/us/v1/obstacles/polygon-query', 'POST'] as const
}

export function getPostUsV1ObstaclesPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1ObstaclesPolygonQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.obstacles['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1ObstaclesPolygonQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1ObstaclesPolygonQueryMutationOptions<
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

export function getPostUsV1ObstaclesRouteQueryMutationKey() {
  return ['us', '/us/v1/obstacles/route-query', 'POST'] as const
}

export function getPostUsV1ObstaclesRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.obstacles)['route-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.obstacles)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1ObstaclesRouteQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.obstacles)['route-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.obstacles['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1ObstaclesRouteQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.obstacles)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.obstacles)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1ObstaclesRouteQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1RestrictionsDistanceQueryMutationKey() {
  return ['us', '/us/v1/restrictions/distance-query', 'POST'] as const
}

export function getPostUsV1RestrictionsDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.restrictions)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.restrictions)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1RestrictionsDistanceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.restrictions)['distance-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.restrictions['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1RestrictionsDistanceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.restrictions)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.restrictions)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1RestrictionsDistanceQueryMutationOptions<
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

export function getPostUsV1RestrictionsPolygonQueryMutationKey() {
  return ['us', '/us/v1/restrictions/polygon-query', 'POST'] as const
}

export function getPostUsV1RestrictionsPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1RestrictionsPolygonQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.restrictions['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1RestrictionsPolygonQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1RestrictionsPolygonQueryMutationOptions<
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

export function getPostUsV1RestrictionsRouteQueryMutationKey() {
  return ['us', '/us/v1/restrictions/route-query', 'POST'] as const
}

export function getPostUsV1RestrictionsRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.restrictions)['route-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.restrictions)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1RestrictionsRouteQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.restrictions)['route-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.restrictions['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1RestrictionsRouteQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.restrictions)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.restrictions)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1RestrictionsRouteQueryMutationOptions<
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

export function getPostUsV1SsaDistanceQueryMutationKey() {
  return ['us', '/us/v1/ssa/distance-query', 'POST'] as const
}

export function getPostUsV1SsaDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.ssa)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.ssa)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1SsaDistanceQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.ssa)['distance-query']['$post']>) {
      return parseResponse(client.us.v1.ssa['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1SsaDistanceQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.ssa)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.ssa)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1SsaDistanceQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1SsaPolygonQueryMutationKey() {
  return ['us', '/us/v1/ssa/polygon-query', 'POST'] as const
}

export function getPostUsV1SsaPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.ssa)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.ssa)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1SsaPolygonQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.ssa)['polygon-query']['$post']>) {
      return parseResponse(client.us.v1.ssa['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1SsaPolygonQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.ssa)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.ssa)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1SsaPolygonQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1SsaRouteQueryMutationKey() {
  return ['us', '/us/v1/ssa/route-query', 'POST'] as const
}

export function getPostUsV1SsaRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.us.v1.ssa)['route-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.ssa)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1SsaRouteQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.ssa)['route-query']['$post']>) {
      return parseResponse(client.us.v1.ssa['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1SsaRouteQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.ssa)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.ssa)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1SsaRouteQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1UoaDistanceQueryMutationKey() {
  return ['us', '/us/v1/uoa/distance-query', 'POST'] as const
}

export function getPostUsV1UoaDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.uoa)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.uoa)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1UoaDistanceQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.uoa)['distance-query']['$post']>) {
      return parseResponse(client.us.v1.uoa['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1UoaDistanceQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.uoa)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.uoa)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1UoaDistanceQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1UoaPolygonQueryMutationKey() {
  return ['us', '/us/v1/uoa/polygon-query', 'POST'] as const
}

export function getPostUsV1UoaPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.uoa)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.uoa)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1UoaPolygonQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.uoa)['polygon-query']['$post']>) {
      return parseResponse(client.us.v1.uoa['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1UoaPolygonQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.uoa)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.uoa)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1UoaPolygonQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1UoaRouteQueryMutationKey() {
  return ['us', '/us/v1/uoa/route-query', 'POST'] as const
}

export function getPostUsV1UoaRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.us.v1.uoa)['route-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.uoa)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1UoaRouteQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.uoa)['route-query']['$post']>) {
      return parseResponse(client.us.v1.uoa['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1UoaRouteQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.uoa)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.uoa)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1UoaRouteQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1VenuesDistanceQueryMutationKey() {
  return ['us', '/us/v1/venues/distance-query', 'POST'] as const
}

export function getPostUsV1VenuesDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.venues)['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.venues)['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1VenuesDistanceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.venues)['distance-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.venues['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1VenuesDistanceQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.venues)['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.venues)['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1VenuesDistanceQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1VenuesPolygonQueryMutationKey() {
  return ['us', '/us/v1/venues/polygon-query', 'POST'] as const
}

export function getPostUsV1VenuesPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.venues)['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.venues)['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1VenuesPolygonQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1.venues)['polygon-query']['$post']>,
    ) {
      return parseResponse(client.us.v1.venues['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1VenuesPolygonQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.venues)['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.venues)['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1VenuesPolygonQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1VenuesRouteQueryMutationKey() {
  return ['us', '/us/v1/venues/route-query', 'POST'] as const
}

export function getPostUsV1VenuesRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1.venues)['route-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1.venues)['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1VenuesRouteQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.us.v1.venues)['route-query']['$post']>) {
      return parseResponse(client.us.v1.venues['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1VenuesRouteQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1.venues)['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1.venues)['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1VenuesRouteQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsV1WxForecastDistanceQueryMutationKey() {
  return ['us', '/us/v1/wx-forecast/distance-query', 'POST'] as const
}

export function getPostUsV1WxForecastDistanceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1WxForecastDistanceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>,
    ) {
      return parseResponse(client.us.v1['wx-forecast']['distance-query'].$post(args, options))
    },
  })
}

export function createPostUsV1WxForecastDistanceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1WxForecastDistanceQueryMutationOptions<
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

export function getPostUsV1WxForecastPolygonQueryMutationKey() {
  return ['us', '/us/v1/wx-forecast/polygon-query', 'POST'] as const
}

export function getPostUsV1WxForecastPolygonQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1WxForecastPolygonQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>,
    ) {
      return parseResponse(client.us.v1['wx-forecast']['polygon-query'].$post(args, options))
    },
  })
}

export function createPostUsV1WxForecastPolygonQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1WxForecastPolygonQueryMutationOptions<
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

export function getPostUsV1WxForecastRouteQueryMutationKey() {
  return ['us', '/us/v1/wx-forecast/route-query', 'POST'] as const
}

export function getPostUsV1WxForecastRouteQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsV1WxForecastRouteQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>,
    ) {
      return parseResponse(client.us.v1['wx-forecast']['route-query'].$post(args, options))
    },
  })
}

export function createPostUsV1WxForecastRouteQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsV1WxForecastRouteQueryMutationOptions<
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
