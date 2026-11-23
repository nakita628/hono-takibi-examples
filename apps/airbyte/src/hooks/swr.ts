import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1SourcesSourceIdSearchKey() {
  return ['v1', '/v1/sources/:sourceId/search', 'POST'] as const
}

export function usePostV1SourcesSourceIdSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSourceIdSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.sources)[':sourceId']['search']['$post']> },
      ) => parseResponse(client.v1.sources[':sourceId'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsDestinationIdSearchKey() {
  return ['v1', '/v1/destinations/:destinationId/search', 'POST'] as const
}

export function usePostV1DestinationsDestinationIdSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsDestinationIdSearchKey()
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
            (typeof client.v1.destinations)[':destinationId']['search']['$post']
          >
        },
      ) => parseResponse(client.v1.destinations[':destinationId'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourcesSourceIdSearchStatusKey(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
) {
  return ['v1', '/v1/sources/:sourceId/search-status', args] as const
}

export function useGetV1SourcesSourceIdSearchStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
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
        ? getGetV1SourcesSourceIdSearchStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sources[':sourceId']['search-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesSourceIdSearchStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
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
        ? getGetV1SourcesSourceIdSearchStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sources[':sourceId']['search-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DestinationsDestinationIdSearchStatusKey(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
) {
  return ['v1', '/v1/destinations/:destinationId/search-status', args] as const
}

export function useGetV1DestinationsDestinationIdSearchStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
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
        ? getGetV1DestinationsDestinationIdSearchStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.destinations[':destinationId']['search-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DestinationsDestinationIdSearchStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
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
        ? getGetV1DestinationsDestinationIdSearchStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.destinations[':destinationId']['search-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourcesSourceIdEnablementKey(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
) {
  return ['v1', '/v1/sources/:sourceId/enablement', args] as const
}

export function useGetV1SourcesSourceIdEnablement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
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
        ? getGetV1SourcesSourceIdEnablementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sources[':sourceId'].enablement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesSourceIdEnablement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
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
        ? getGetV1SourcesSourceIdEnablementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sources[':sourceId'].enablement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SourcesSourceIdEnablementKey() {
  return ['v1', '/v1/sources/:sourceId/enablement', 'PUT'] as const
}

export function usePutV1SourcesSourceIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SourcesSourceIdEnablementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']> },
      ) => parseResponse(client.v1.sources[':sourceId'].enablement.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesSourceIdEnablementKey() {
  return ['v1', '/v1/sources/:sourceId/enablement', 'POST'] as const
}

export function usePostV1SourcesSourceIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSourceIdEnablementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>
        },
      ) => parseResponse(client.v1.sources[':sourceId'].enablement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SourcesSourceIdEnablementKey() {
  return ['v1', '/v1/sources/:sourceId/enablement', 'DELETE'] as const
}

export function useDeleteV1SourcesSourceIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SourcesSourceIdEnablementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>
        },
      ) => parseResponse(client.v1.sources[':sourceId'].enablement.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DestinationsDestinationIdEnablementKey(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>,
) {
  return ['v1', '/v1/destinations/:destinationId/enablement', args] as const
}

export function useGetV1DestinationsDestinationIdEnablement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>
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
        ? getGetV1DestinationsDestinationIdEnablementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.destinations[':destinationId'].enablement.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DestinationsDestinationIdEnablement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>
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
        ? getGetV1DestinationsDestinationIdEnablementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.destinations[':destinationId'].enablement.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1DestinationsDestinationIdEnablementKey() {
  return ['v1', '/v1/destinations/:destinationId/enablement', 'PUT'] as const
}

export function usePutV1DestinationsDestinationIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DestinationsDestinationIdEnablementKey()
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
            (typeof client.v1.destinations)[':destinationId']['enablement']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.destinations[':destinationId'].enablement.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsDestinationIdEnablementKey() {
  return ['v1', '/v1/destinations/:destinationId/enablement', 'POST'] as const
}

export function usePostV1DestinationsDestinationIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsDestinationIdEnablementKey()
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
            (typeof client.v1.destinations)[':destinationId']['enablement']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.destinations[':destinationId'].enablement.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DestinationsDestinationIdEnablementKey() {
  return ['v1', '/v1/destinations/:destinationId/enablement', 'DELETE'] as const
}

export function useDeleteV1DestinationsDestinationIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DestinationsDestinationIdEnablementKey()
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
            (typeof client.v1.destinations)[':destinationId']['enablement']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.destinations[':destinationId'].enablement.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectionsConnectionIdEnablementKey(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>,
) {
  return ['v1', '/v1/connections/:connectionId/enablement', args] as const
}

export function useGetV1ConnectionsConnectionIdEnablement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>
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
        ? getGetV1ConnectionsConnectionIdEnablementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.connections[':connectionId'].enablement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectionsConnectionIdEnablement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>
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
        ? getGetV1ConnectionsConnectionIdEnablementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.connections[':connectionId'].enablement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConnectionsConnectionIdEnablementKey() {
  return ['v1', '/v1/connections/:connectionId/enablement', 'PUT'] as const
}

export function usePutV1ConnectionsConnectionIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConnectionsConnectionIdEnablementKey()
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
            (typeof client.v1.connections)[':connectionId']['enablement']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.connections[':connectionId'].enablement.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsConnectionIdEnablementKey() {
  return ['v1', '/v1/connections/:connectionId/enablement', 'POST'] as const
}

export function usePostV1ConnectionsConnectionIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsConnectionIdEnablementKey()
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
            (typeof client.v1.connections)[':connectionId']['enablement']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.connections[':connectionId'].enablement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectionsConnectionIdEnablementKey() {
  return ['v1', '/v1/connections/:connectionId/enablement', 'DELETE'] as const
}

export function useDeleteV1ConnectionsConnectionIdEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectionsConnectionIdEnablementKey()
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
            (typeof client.v1.connections)[':connectionId']['enablement']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connections[':connectionId'].enablement.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsResolveEnablementForSyncKey() {
  return ['v1', '/v1/connections/resolve_enablement_for_sync', 'POST'] as const
}

export function usePostV1ConnectionsResolveEnablementForSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.resolve_enablement_for_sync.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.resolve_enablement_for_sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsResolveEnablementForSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connections.resolve_enablement_for_sync.$post>
        },
      ) =>
        parseResponse(client.v1.connections.resolve_enablement_for_sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsConnectionIdBackfillKey() {
  return ['v1', '/v1/connections/:connectionId/backfill', 'POST'] as const
}

export function usePostV1ConnectionsConnectionIdBackfill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsConnectionIdBackfillKey()
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
            (typeof client.v1.connections)[':connectionId']['backfill']['$post']
          >
        },
      ) => parseResponse(client.v1.connections[':connectionId'].backfill.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesCreateKey() {
  return ['v1', '/v1/workspaces/create', 'POST'] as const
}

export function usePostV1WorkspacesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.create.$post> },
      ) => parseResponse(client.v1.workspaces.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesCreateIfNotExistKey() {
  return ['v1', '/v1/workspaces/create_if_not_exist', 'POST'] as const
}

export function usePostV1WorkspacesCreateIfNotExist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.create_if_not_exist.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.create_if_not_exist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesCreateIfNotExistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.create_if_not_exist.$post> },
      ) => parseResponse(client.v1.workspaces.create_if_not_exist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesDeleteKey() {
  return ['v1', '/v1/workspaces/delete', 'POST'] as const
}

export function usePostV1WorkspacesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.delete.$post> },
      ) => parseResponse(client.v1.workspaces.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesListPaginatedKey() {
  return ['v1', '/v1/workspaces/list_paginated', 'POST'] as const
}

export function usePostV1WorkspacesListPaginated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list_paginated.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.list_paginated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesListPaginatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.list_paginated.$post> },
      ) => parseResponse(client.v1.workspaces.list_paginated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesListByOrganizationIdKey() {
  return ['v1', '/v1/workspaces/list_by_organization_id', 'POST'] as const
}

export function usePostV1WorkspacesListByOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.list_by_organization_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.list_by_organization_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesListByOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.workspaces.list_by_organization_id.$post> },
      ) => parseResponse(client.v1.workspaces.list_by_organization_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesListByUserIdKey() {
  return ['v1', '/v1/workspaces/list_by_user_id', 'POST'] as const
}

export function usePostV1WorkspacesListByUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list_by_user_id.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.list_by_user_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesListByUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.list_by_user_id.$post> },
      ) => parseResponse(client.v1.workspaces.list_by_user_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetAvailableDbtJobsKey() {
  return ['v1', '/v1/workspaces/get_available_dbt_jobs', 'POST'] as const
}

export function usePostV1WorkspacesGetAvailableDbtJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetAvailableDbtJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.workspaces.get_available_dbt_jobs.$post> },
      ) => parseResponse(client.v1.workspaces.get_available_dbt_jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetKey() {
  return ['v1', '/v1/workspaces/get', 'POST'] as const
}

export function usePostV1WorkspacesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get.$post> }) =>
        parseResponse(client.v1.workspaces.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetBySlugKey() {
  return ['v1', '/v1/workspaces/get_by_slug', 'POST'] as const
}

export function usePostV1WorkspacesGetBySlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_by_slug.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetBySlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get_by_slug.$post> },
      ) => parseResponse(client.v1.workspaces.get_by_slug.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetByConnectionIdKey() {
  return ['v1', '/v1/workspaces/get_by_connection_id', 'POST'] as const
}

export function usePostV1WorkspacesGetByConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetByConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post> },
      ) => parseResponse(client.v1.workspaces.get_by_connection_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetByConnectionIdWithTombstoneKey() {
  return ['v1', '/v1/workspaces/get_by_connection_id_with_tombstone', 'POST'] as const
}

export function usePostV1WorkspacesGetByConnectionIdWithTombstone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetByConnectionIdWithTombstoneKey()
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
            typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.workspaces.get_by_connection_id_with_tombstone.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetOrganizationInfoKey() {
  return ['v1', '/v1/workspaces/get_organization_info', 'POST'] as const
}

export function usePostV1WorkspacesGetOrganizationInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_organization_info.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_organization_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetOrganizationInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get_organization_info.$post> },
      ) => parseResponse(client.v1.workspaces.get_organization_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesUpdateKey() {
  return ['v1', '/v1/workspaces/update', 'POST'] as const
}

export function usePostV1WorkspacesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.update.$post> },
      ) => parseResponse(client.v1.workspaces.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesUpdateNameKey() {
  return ['v1', '/v1/workspaces/update_name', 'POST'] as const
}

export function usePostV1WorkspacesUpdateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update_name.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.update_name.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesUpdateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.update_name.$post> },
      ) => parseResponse(client.v1.workspaces.update_name.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesUpdateOrganizationKey() {
  return ['v1', '/v1/workspaces/update_organization', 'POST'] as const
}

export function usePostV1WorkspacesUpdateOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.update_organization.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.update_organization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesUpdateOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.update_organization.$post> },
      ) => parseResponse(client.v1.workspaces.update_organization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetUsageKey() {
  return ['v1', '/v1/workspaces/get_usage', 'POST'] as const
}

export function usePostV1WorkspacesGetUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_usage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_usage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workspaces.get_usage.$post> },
      ) => parseResponse(client.v1.workspaces.get_usage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesGetDataWorkerAvailabilityKey() {
  return ['v1', '/v1/workspaces/get_data_worker_availability', 'POST'] as const
}

export function usePostV1WorkspacesGetDataWorkerAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_data_worker_availability.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.get_data_worker_availability.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesGetDataWorkerAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.workspaces.get_data_worker_availability.$post>
        },
      ) =>
        parseResponse(client.v1.workspaces.get_data_worker_availability.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkspacesTagFeedbackStatusAsDoneKey() {
  return ['v1', '/v1/workspaces/tag_feedback_status_as_done', 'POST'] as const
}

export function usePostV1WorkspacesTagFeedbackStatusAsDone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkspacesTagFeedbackStatusAsDoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post> },
      ) =>
        parseResponse(client.v1.workspaces.tag_feedback_status_as_done.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NotificationsTryKey() {
  return ['v1', '/v1/notifications/try', 'POST'] as const
}

export function usePostV1NotificationsTry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.notifications.try.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NotificationsTryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.notifications.try.$post> },
      ) => parseResponse(client.v1.notifications.try.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NotificationsTryWebhookKey() {
  return ['v1', '/v1/notifications/try_webhook', 'POST'] as const
}

export function usePostV1NotificationsTryWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.notifications.try_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NotificationsTryWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.notifications.try_webhook.$post> },
      ) => parseResponse(client.v1.notifications.try_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsUpdateKey() {
  return ['v1', '/v1/source_definitions/update', 'POST'] as const
}

export function usePostV1SourceDefinitionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.update.$post> },
      ) => parseResponse(client.v1.source_definitions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListKey() {
  return ['v1', '/v1/source_definitions/list', 'POST'] as const
}

export function usePostV1SourceDefinitionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.list.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.source_definitions.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListLatestKey() {
  return ['v1', '/v1/source_definitions/list_latest', 'POST'] as const
}

export function usePostV1SourceDefinitionsListLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.source_definitions.list_latest.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGetKey() {
  return ['v1', '/v1/source_definitions/get', 'POST'] as const
}

export function usePostV1SourceDefinitionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.get.$post> },
      ) => parseResponse(client.v1.source_definitions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsDeleteKey() {
  return ['v1', '/v1/source_definitions/delete', 'POST'] as const
}

export function usePostV1SourceDefinitionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.delete.$post> },
      ) => parseResponse(client.v1.source_definitions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListPrivateKey() {
  return ['v1', '/v1/source_definitions/list_private', 'POST'] as const
}

export function usePostV1SourceDefinitionsListPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.list_private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.list_private.$post> },
      ) => parseResponse(client.v1.source_definitions.list_private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListForWorkspaceKey() {
  return ['v1', '/v1/source_definitions/list_for_workspace', 'POST'] as const
}

export function usePostV1SourceDefinitionsListForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post> },
      ) => parseResponse(client.v1.source_definitions.list_for_workspace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListEnterpriseSourceStubsKey() {
  return ['v1', '/v1/source_definitions/list_enterprise_source_stubs', 'POST'] as const
}

export function usePostV1SourceDefinitionsListEnterpriseSourceStubs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.source_definitions.list_enterprise_source_stubs.$post>
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListEnterpriseSourceStubsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.source_definitions.list_enterprise_source_stubs.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsListEnterpriseStubsForWorkspaceKey() {
  return ['v1', '/v1/source_definitions/list_enterprise_stubs_for_workspace', 'POST'] as const
}

export function usePostV1SourceDefinitionsListEnterpriseStubsForWorkspace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsListEnterpriseStubsForWorkspaceKey()
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
            typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsCreateCustomKey() {
  return ['v1', '/v1/source_definitions/create_custom', 'POST'] as const
}

export function usePostV1SourceDefinitionsCreateCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.create_custom.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsCreateCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.create_custom.$post> },
      ) => parseResponse(client.v1.source_definitions.create_custom.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGetForWorkspaceKey() {
  return ['v1', '/v1/source_definitions/get_for_workspace', 'POST'] as const
}

export function usePostV1SourceDefinitionsGetForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGetForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post> },
      ) => parseResponse(client.v1.source_definitions.get_for_workspace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGetForScopeKey() {
  return ['v1', '/v1/source_definitions/get_for_scope', 'POST'] as const
}

export function usePostV1SourceDefinitionsGetForScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.get_for_scope.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.get_for_scope.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGetForScopeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_definitions.get_for_scope.$post> },
      ) => parseResponse(client.v1.source_definitions.get_for_scope.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsGrantDefinitionKey() {
  return ['v1', '/v1/source_definitions/grant_definition', 'POST'] as const
}

export function usePostV1SourceDefinitionsGrantDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsGrantDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.grant_definition.$post> },
      ) => parseResponse(client.v1.source_definitions.grant_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionsRevokeDefinitionKey() {
  return ['v1', '/v1/source_definitions/revoke_definition', 'POST'] as const
}

export function usePostV1SourceDefinitionsRevokeDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionsRevokeDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post> },
      ) => parseResponse(client.v1.source_definitions.revoke_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionVersionsGetForSourceKey() {
  return ['v1', '/v1/actor_definition_versions/get_for_source', 'POST'] as const
}

export function usePostV1ActorDefinitionVersionsGetForSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_for_source.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definition_versions.get_for_source.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionVersionsGetForSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.actor_definition_versions.get_for_source.$post>
        },
      ) =>
        parseResponse(client.v1.actor_definition_versions.get_for_source.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionSpecificationsGetKey() {
  return ['v1', '/v1/source_definition_specifications/get', 'POST'] as const
}

export function usePostV1SourceDefinitionSpecificationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definition_specifications.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionSpecificationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_definition_specifications.get.$post> },
      ) => parseResponse(client.v1.source_definition_specifications.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceDefinitionSpecificationsGetForSourceKey() {
  return ['v1', '/v1/source_definition_specifications/get_for_source', 'POST'] as const
}

export function usePostV1SourceDefinitionSpecificationsGetForSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.source_definition_specifications.get_for_source.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_definition_specifications.get_for_source.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceDefinitionSpecificationsGetForSourceKey()
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
            typeof client.v1.source_definition_specifications.get_for_source.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.source_definition_specifications.get_for_source.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionVersionsResolveKey() {
  return ['v1', '/v1/actor_definition_versions/resolve', 'POST'] as const
}

export function usePostV1ActorDefinitionVersionsResolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.resolve.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definition_versions.resolve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionVersionsResolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.actor_definition_versions.resolve.$post> },
      ) => parseResponse(client.v1.actor_definition_versions.resolve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionVersionsGetDefaultKey() {
  return ['v1', '/v1/actor_definition_versions/get_default', 'POST'] as const
}

export function usePostV1ActorDefinitionVersionsGetDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_default.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definition_versions.get_default.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionVersionsGetDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.actor_definition_versions.get_default.$post> },
      ) => parseResponse(client.v1.actor_definition_versions.get_default.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionsCreateKey() {
  return ['v1', '/v1/actor_definitions/create', 'POST'] as const
}

export function usePostV1ActorDefinitionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definitions.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.actor_definitions.create.$post> },
      ) => parseResponse(client.v1.actor_definitions.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionsUpdateKey() {
  return ['v1', '/v1/actor_definitions/update', 'POST'] as const
}

export function usePostV1ActorDefinitionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definitions.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.actor_definitions.update.$post> },
      ) => parseResponse(client.v1.actor_definitions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionsFinishKey() {
  return ['v1', '/v1/actor_definitions/finish', 'POST'] as const
}

export function usePostV1ActorDefinitionsFinish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.finish.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definitions.finish.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionsFinishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.actor_definitions.finish.$post> },
      ) => parseResponse(client.v1.actor_definitions.finish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionsResultKey() {
  return ['v1', '/v1/actor_definitions/result', 'POST'] as const
}

export function usePostV1ActorDefinitionsResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.result.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definitions.result.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionsResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.actor_definitions.result.$post> },
      ) => parseResponse(client.v1.actor_definitions.result.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeclarativeSourceDefinitionsCreateManifestKey() {
  return ['v1', '/v1/declarative_source_definitions/create_manifest', 'POST'] as const
}

export function usePostV1DeclarativeSourceDefinitionsCreateManifest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.declarative_source_definitions.create_manifest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.declarative_source_definitions.create_manifest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeclarativeSourceDefinitionsCreateManifestKey()
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
            typeof client.v1.declarative_source_definitions.create_manifest.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.declarative_source_definitions.create_manifest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeclarativeSourceDefinitionsUpdateActiveManifestKey() {
  return ['v1', '/v1/declarative_source_definitions/update_active_manifest', 'POST'] as const
}

export function usePostV1DeclarativeSourceDefinitionsUpdateActiveManifest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.v1.declarative_source_definitions.update_active_manifest.$post
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.declarative_source_definitions.update_active_manifest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeclarativeSourceDefinitionsUpdateActiveManifestKey()
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
            typeof client.v1.declarative_source_definitions.update_active_manifest.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.declarative_source_definitions.update_active_manifest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeclarativeSourceDefinitionsListManifestsKey() {
  return ['v1', '/v1/declarative_source_definitions/list_manifests', 'POST'] as const
}

export function usePostV1DeclarativeSourceDefinitionsListManifests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.declarative_source_definitions.list_manifests.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.declarative_source_definitions.list_manifests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeclarativeSourceDefinitionsListManifestsKey()
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
            typeof client.v1.declarative_source_definitions.list_manifests.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.declarative_source_definitions.list_manifests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsCreateKey() {
  return ['v1', '/v1/connector_builder_projects/create', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.create.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsPublishKey() {
  return ['v1', '/v1/connector_builder_projects/publish', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.publish.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.publish.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.publish.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsGetBaseImageKey() {
  return ['v1', '/v1/connector_builder_projects/get_base_image', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsGetBaseImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.get_base_image.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.get_base_image.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsGetBaseImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connector_builder_projects.get_base_image.$post>
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.get_base_image.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsUpdateKey() {
  return ['v1', '/v1/connector_builder_projects/update', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.connector_builder_projects.update.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.update.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsDeleteKey() {
  return ['v1', '/v1/connector_builder_projects/delete', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.connector_builder_projects.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.delete.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsListKey() {
  return ['v1', '/v1/connector_builder_projects/list', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.list.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsGetWithManifestKey() {
  return ['v1', '/v1/connector_builder_projects/get_with_manifest', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsGetWithManifest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsGetWithManifestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.get_with_manifest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsGetForDefinitionIdKey() {
  return ['v1', '/v1/connector_builder_projects/get_for_definition_id', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsGetForDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.connector_builder_projects.get_for_definition_id.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.get_for_definition_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsGetForDefinitionIdKey()
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
            typeof client.v1.connector_builder_projects.get_for_definition_id.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.get_for_definition_id.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsUpdateTestingValuesKey() {
  return ['v1', '/v1/connector_builder_projects/update_testing_values', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsUpdateTestingValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.connector_builder_projects.update_testing_values.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.update_testing_values.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsUpdateTestingValuesKey()
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
            typeof client.v1.connector_builder_projects.update_testing_values.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.update_testing_values.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsReadStreamKey() {
  return ['v1', '/v1/connector_builder_projects/read_stream', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsReadStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.read_stream.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.read_stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsReadStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.read_stream.$post> },
      ) =>
        parseResponse(client.v1.connector_builder_projects.read_stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsFullResolveKey() {
  return ['v1', '/v1/connector_builder_projects/full_resolve', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsFullResolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.full_resolve.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.full_resolve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsFullResolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connector_builder_projects.full_resolve.$post>
        },
      ) =>
        parseResponse(client.v1.connector_builder_projects.full_resolve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsResolveKey() {
  return ['v1', '/v1/connector_builder_projects/resolve', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsResolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.resolve.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.resolve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsResolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.resolve.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.resolve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsCapabilitiesKey() {
  return ['v1', '/v1/connector_builder_projects/capabilities', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsCapabilities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.capabilities.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.capabilities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsCapabilitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connector_builder_projects.capabilities.$post>
        },
      ) =>
        parseResponse(client.v1.connector_builder_projects.capabilities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsForkKey() {
  return ['v1', '/v1/connector_builder_projects/fork', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.fork.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.fork.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_builder_projects.fork.$post> },
      ) => parseResponse(client.v1.connector_builder_projects.fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsContributeCheckKey() {
  return ['v1', '/v1/connector_builder_projects/contribute/check', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsContributeCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.contribute.check.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.contribute.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsContributeCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connector_builder_projects.contribute.check.$post>
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.contribute.check.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsContributeGenerateKey() {
  return ['v1', '/v1/connector_builder_projects/contribute/generate', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsContributeGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.contribute.generate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.contribute.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsContributeGenerateKey()
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
            typeof client.v1.connector_builder_projects.contribute.generate.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.contribute.generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderAssistProcessKey() {
  return ['v1', '/v1/connector_builder_assist/process', 'POST'] as const
}

export function usePostV1ConnectorBuilderAssistProcess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_assist.process.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_assist.process.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderAssistProcessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_builder_assist.process.$post> },
      ) => parseResponse(client.v1.connector_builder_assist.process.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderAssistWarmKey() {
  return ['v1', '/v1/connector_builder_assist/warm', 'POST'] as const
}

export function usePostV1ConnectorBuilderAssistWarm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_assist.warm.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_assist.warm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderAssistWarmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_builder_assist.warm.$post> },
      ) => parseResponse(client.v1.connector_builder_assist.warm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorDocumentationGetKey() {
  return ['v1', '/v1/connector_documentation/get', 'POST'] as const
}

export function usePostV1ConnectorDocumentationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_documentation.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_documentation.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorDocumentationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_documentation.get.$post> },
      ) => parseResponse(client.v1.connector_documentation.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCreateKey() {
  return ['v1', '/v1/sources/create', 'POST'] as const
}

export function usePostV1SourcesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.create.$post> }) =>
        parseResponse(client.v1.sources.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesUpdateKey() {
  return ['v1', '/v1/sources/update', 'POST'] as const
}

export function usePostV1SourcesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.update.$post> }) =>
        parseResponse(client.v1.sources.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesPartialUpdateKey() {
  return ['v1', '/v1/sources/partial_update', 'POST'] as const
}

export function usePostV1SourcesPartialUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.partial_update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.partial_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesPartialUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.partial_update.$post> },
      ) => parseResponse(client.v1.sources.partial_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesUpgradeVersionKey() {
  return ['v1', '/v1/sources/upgrade_version', 'POST'] as const
}

export function usePostV1SourcesUpgradeVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.upgrade_version.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.upgrade_version.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesUpgradeVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.upgrade_version.$post> },
      ) => parseResponse(client.v1.sources.upgrade_version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesListKey() {
  return ['v1', '/v1/sources/list', 'POST'] as const
}

export function usePostV1SourcesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.list.$post> }) =>
        parseResponse(client.v1.sources.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesListPaginatedKey() {
  return ['v1', '/v1/sources/list_paginated', 'POST'] as const
}

export function usePostV1SourcesListPaginated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list_paginated.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.list_paginated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesListPaginatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.list_paginated.$post> },
      ) => parseResponse(client.v1.sources.list_paginated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesGetKey() {
  return ['v1', '/v1/sources/get', 'POST'] as const
}

export function usePostV1SourcesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.get.$post> }) =>
        parseResponse(client.v1.sources.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesGetWithMetadataKey() {
  return ['v1', '/v1/sources/get_with_metadata', 'POST'] as const
}

export function usePostV1SourcesGetWithMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get_with_metadata.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.get_with_metadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesGetWithMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.get_with_metadata.$post> },
      ) => parseResponse(client.v1.sources.get_with_metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesMostRecentSourceActorCatalogKey() {
  return ['v1', '/v1/sources/most_recent_source_actor_catalog', 'POST'] as const
}

export function usePostV1SourcesMostRecentSourceActorCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesMostRecentSourceActorCatalogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>
        },
      ) =>
        parseResponse(client.v1.sources.most_recent_source_actor_catalog.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesSearchKey() {
  return ['v1', '/v1/sources/search', 'POST'] as const
}

export function usePostV1SourcesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.search.$post> }) =>
        parseResponse(client.v1.sources.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesDeleteKey() {
  return ['v1', '/v1/sources/delete', 'POST'] as const
}

export function usePostV1SourcesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.delete.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.delete.$post> }) =>
        parseResponse(client.v1.sources.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkspacesWorkspaceIdSkillsDocsKey(
  args: InferRequestType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>,
) {
  return ['v1', '/v1/workspaces/:workspaceId/skills/docs', args] as const
}

export function useGetV1WorkspacesWorkspaceIdSkillsDocs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>
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
        ? getGetV1WorkspacesWorkspaceIdSkillsDocsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workspaces[':workspaceId'].skills.docs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkspacesWorkspaceIdSkillsDocs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>
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
        ? getGetV1WorkspacesWorkspaceIdSkillsDocsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workspaces[':workspaceId'].skills.docs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DestinationsDestinationIdExecuteKey() {
  return ['v1', '/v1/destinations/:destinationId/execute', 'POST'] as const
}

export function usePostV1DestinationsDestinationIdExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsDestinationIdExecuteKey()
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
            (typeof client.v1.destinations)[':destinationId']['execute']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.destinations[':destinationId'].execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesSourceIdExecuteKey() {
  return ['v1', '/v1/sources/:sourceId/execute', 'POST'] as const
}

export function usePostV1SourcesSourceIdExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSourceIdExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.sources)[':sourceId']['execute']['$post']> },
      ) => parseResponse(client.v1.sources[':sourceId'].execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCheckConnectionKey() {
  return ['v1', '/v1/sources/check_connection', 'POST'] as const
}

export function usePostV1SourcesCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.check_connection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.check_connection.$post> },
      ) => parseResponse(client.v1.sources.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesCheckConnectionForUpdateKey() {
  return ['v1', '/v1/sources/check_connection_for_update', 'POST'] as const
}

export function usePostV1SourcesCheckConnectionForUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesCheckConnectionForUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.sources.check_connection_for_update.$post> },
      ) => parseResponse(client.v1.sources.check_connection_for_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesDiscoverSchemaKey() {
  return ['v1', '/v1/sources/discover_schema', 'POST'] as const
}

export function usePostV1SourcesDiscoverSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.discover_schema.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.discover_schema.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesDiscoverSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.discover_schema.$post> },
      ) => parseResponse(client.v1.sources.discover_schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesApplySchemaChangesKey() {
  return ['v1', '/v1/sources/apply_schema_changes', 'POST'] as const
}

export function usePostV1SourcesApplySchemaChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sources.apply_schema_changes.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.apply_schema_changes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesApplySchemaChangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sources.apply_schema_changes.$post> },
      ) => parseResponse(client.v1.sources.apply_schema_changes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesWriteDiscoverCatalogResultKey() {
  return ['v1', '/v1/sources/write_discover_catalog_result', 'POST'] as const
}

export function usePostV1SourcesWriteDiscoverCatalogResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.write_discover_catalog_result.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesWriteDiscoverCatalogResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post> },
      ) => parseResponse(client.v1.sources.write_discover_catalog_result.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsWriteDiscoverCatalogResultKey() {
  return ['v1', '/v1/destinations/write_discover_catalog_result', 'POST'] as const
}

export function usePostV1DestinationsWriteDiscoverCatalogResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.write_discover_catalog_result.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.write_discover_catalog_result.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsWriteDiscoverCatalogResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destinations.write_discover_catalog_result.$post>
        },
      ) =>
        parseResponse(
          client.v1.destinations.write_discover_catalog_result.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsUpdateKey() {
  return ['v1', '/v1/destination_definitions/update', 'POST'] as const
}

export function usePostV1DestinationDefinitionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destination_definitions.update.$post> },
      ) => parseResponse(client.v1.destination_definitions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListKey() {
  return ['v1', '/v1/destination_definitions/list', 'POST'] as const
}

export function usePostV1DestinationDefinitionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.destination_definitions.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListLatestKey() {
  return ['v1', '/v1/destination_definitions/list_latest', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.destination_definitions.list_latest.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGetKey() {
  return ['v1', '/v1/destination_definitions/get', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destination_definitions.get.$post> },
      ) => parseResponse(client.v1.destination_definitions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsDeleteKey() {
  return ['v1', '/v1/destination_definitions/delete', 'POST'] as const
}

export function usePostV1DestinationDefinitionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destination_definitions.delete.$post> },
      ) => parseResponse(client.v1.destination_definitions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListPrivateKey() {
  return ['v1', '/v1/destination_definitions/list_private', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.list_private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_definitions.list_private.$post> },
      ) => parseResponse(client.v1.destination_definitions.list_private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListForWorkspaceKey() {
  return ['v1', '/v1/destination_definitions/list_for_workspace', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.list_for_workspace.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsListEnterpriseStubsForWorkspaceKey() {
  return ['v1', '/v1/destination_definitions/list_enterprise_stubs_for_workspace', 'POST'] as const
}

export function usePostV1DestinationDefinitionsListEnterpriseStubsForWorkspace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsListEnterpriseStubsForWorkspaceKey()
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
            typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsCreateCustomKey() {
  return ['v1', '/v1/destination_definitions/create_custom', 'POST'] as const
}

export function usePostV1DestinationDefinitionsCreateCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsCreateCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_definitions.create_custom.$post> },
      ) => parseResponse(client.v1.destination_definitions.create_custom.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGetForWorkspaceKey() {
  return ['v1', '/v1/destination_definitions/get_for_workspace', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGetForWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGetForWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.get_for_workspace.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGetForScopeKey() {
  return ['v1', '/v1/destination_definitions/get_for_scope', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGetForScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_scope.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.get_for_scope.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGetForScopeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_definitions.get_for_scope.$post> },
      ) => parseResponse(client.v1.destination_definitions.get_for_scope.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsGrantDefinitionKey() {
  return ['v1', '/v1/destination_definitions/grant_definition', 'POST'] as const
}

export function usePostV1DestinationDefinitionsGrantDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsGrantDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>
        },
      ) =>
        parseResponse(client.v1.destination_definitions.grant_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionsRevokeDefinitionKey() {
  return ['v1', '/v1/destination_definitions/revoke_definition', 'POST'] as const
}

export function usePostV1DestinationDefinitionsRevokeDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionsRevokeDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definitions.revoke_definition.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ActorDefinitionVersionsGetForDestinationKey() {
  return ['v1', '/v1/actor_definition_versions/get_for_destination', 'POST'] as const
}

export function usePostV1ActorDefinitionVersionsGetForDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_for_destination.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.actor_definition_versions.get_for_destination.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ActorDefinitionVersionsGetForDestinationKey()
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
            typeof client.v1.actor_definition_versions.get_for_destination.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.actor_definition_versions.get_for_destination.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionSpecificationsGetKey() {
  return ['v1', '/v1/destination_definition_specifications/get', 'POST'] as const
}

export function usePostV1DestinationDefinitionSpecificationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionSpecificationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>
        },
      ) =>
        parseResponse(
          client.v1.destination_definition_specifications.get.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationDefinitionSpecificationsGetForDestinationKey() {
  return ['v1', '/v1/destination_definition_specifications/get_for_destination', 'POST'] as const
}

export function usePostV1DestinationDefinitionSpecificationsGetForDestination<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v1.destination_definition_specifications.get_for_destination.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      typeof client.v1.destination_definition_specifications.get_for_destination.$post
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationDefinitionSpecificationsGetForDestinationKey()
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
            typeof client.v1.destination_definition_specifications.get_for_destination.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.destination_definition_specifications.get_for_destination.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCreateKey() {
  return ['v1', '/v1/destinations/create', 'POST'] as const
}

export function usePostV1DestinationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.create.$post> },
      ) => parseResponse(client.v1.destinations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsUpdateKey() {
  return ['v1', '/v1/destinations/update', 'POST'] as const
}

export function usePostV1DestinationsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.update.$post> },
      ) => parseResponse(client.v1.destinations.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsPartialUpdateKey() {
  return ['v1', '/v1/destinations/partial_update', 'POST'] as const
}

export function usePostV1DestinationsPartialUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.partial_update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.partial_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsPartialUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.partial_update.$post> },
      ) => parseResponse(client.v1.destinations.partial_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsUpgradeVersionKey() {
  return ['v1', '/v1/destinations/upgrade_version', 'POST'] as const
}

export function usePostV1DestinationsUpgradeVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destinations.upgrade_version.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.upgrade_version.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsUpgradeVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.upgrade_version.$post> },
      ) => parseResponse(client.v1.destinations.upgrade_version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsListKey() {
  return ['v1', '/v1/destinations/list', 'POST'] as const
}

export function usePostV1DestinationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.list.$post> },
      ) => parseResponse(client.v1.destinations.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsListPaginatedKey() {
  return ['v1', '/v1/destinations/list_paginated', 'POST'] as const
}

export function usePostV1DestinationsListPaginated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.list_paginated.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.list_paginated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsListPaginatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.list_paginated.$post> },
      ) => parseResponse(client.v1.destinations.list_paginated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsGetKey() {
  return ['v1', '/v1/destinations/get', 'POST'] as const
}

export function usePostV1DestinationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.destinations.get.$post> }) =>
        parseResponse(client.v1.destinations.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsDiscoverSchemaKey() {
  return ['v1', '/v1/destinations/discover_schema', 'POST'] as const
}

export function usePostV1DestinationsDiscoverSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.discover_schema.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.discover_schema.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsDiscoverSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.discover_schema.$post> },
      ) => parseResponse(client.v1.destinations.discover_schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsGetCatalogForConnectionKey() {
  return ['v1', '/v1/destinations/get_catalog_for_connection', 'POST'] as const
}

export function usePostV1DestinationsGetCatalogForConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.get_catalog_for_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.get_catalog_for_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsGetCatalogForConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destinations.get_catalog_for_connection.$post>
        },
      ) =>
        parseResponse(client.v1.destinations.get_catalog_for_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsSearchKey() {
  return ['v1', '/v1/destinations/search', 'POST'] as const
}

export function usePostV1DestinationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.search.$post> },
      ) => parseResponse(client.v1.destinations.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCheckConnectionKey() {
  return ['v1', '/v1/destinations/check_connection', 'POST'] as const
}

export function usePostV1DestinationsCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.check_connection.$post> },
      ) => parseResponse(client.v1.destinations.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsCheckConnectionForUpdateKey() {
  return ['v1', '/v1/destinations/check_connection_for_update', 'POST'] as const
}

export function usePostV1DestinationsCheckConnectionForUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsCheckConnectionForUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>
        },
      ) =>
        parseResponse(client.v1.destinations.check_connection_for_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationsDeleteKey() {
  return ['v1', '/v1/destinations/delete', 'POST'] as const
}

export function usePostV1DestinationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.destinations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.destinations.delete.$post> },
      ) => parseResponse(client.v1.destinations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsCreateKey() {
  return ['v1', '/v1/connections/create', 'POST'] as const
}

export function usePostV1ConnectionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.create.$post> },
      ) => parseResponse(client.v1.connections.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsUpdateKey() {
  return ['v1', '/v1/connections/update', 'POST'] as const
}

export function usePostV1ConnectionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.update.$post> },
      ) => parseResponse(client.v1.connections.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsUpdateWithReasonKey() {
  return ['v1', '/v1/connections/update_with_reason', 'POST'] as const
}

export function usePostV1ConnectionsUpdateWithReason<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.update_with_reason.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.update_with_reason.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsUpdateWithReasonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.update_with_reason.$post> },
      ) => parseResponse(client.v1.connections.update_with_reason.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsListKey() {
  return ['v1', '/v1/connections/list', 'POST'] as const
}

export function usePostV1ConnectionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.list.$post> }) =>
        parseResponse(client.v1.connections.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsListPaginatedKey() {
  return ['v1', '/v1/connections/list_paginated', 'POST'] as const
}

export function usePostV1ConnectionsListPaginated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_paginated.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.list_paginated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsListPaginatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.list_paginated.$post> },
      ) => parseResponse(client.v1.connections.list_paginated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsListAllKey() {
  return ['v1', '/v1/connections/list_all', 'POST'] as const
}

export function usePostV1ConnectionsListAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.list_all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsListAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.list_all.$post> },
      ) => parseResponse(client.v1.connections.list_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsStatusKey() {
  return ['v1', '/v1/connections/status', 'POST'] as const
}

export function usePostV1ConnectionsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.status.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.status.$post> },
      ) => parseResponse(client.v1.connections.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsSyncProgressKey() {
  return ['v1', '/v1/connections/sync_progress', 'POST'] as const
}

export function usePostV1ConnectionsSyncProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync_progress.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.sync_progress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsSyncProgressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.sync_progress.$post> },
      ) => parseResponse(client.v1.connections.sync_progress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsHistoryUptimeKey() {
  return ['v1', '/v1/connections/history/uptime', 'POST'] as const
}

export function usePostV1ConnectionsHistoryUptime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.history.uptime.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.history.uptime.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsHistoryUptimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.history.uptime.$post> },
      ) => parseResponse(client.v1.connections.history.uptime.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsHistoryDataKey() {
  return ['v1', '/v1/connections/history/data', 'POST'] as const
}

export function usePostV1ConnectionsHistoryData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.history.data.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.history.data.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsHistoryDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.history.data.$post> },
      ) => parseResponse(client.v1.connections.history.data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsStreamHistoryKey() {
  return ['v1', '/v1/connections/stream_history', 'POST'] as const
}

export function usePostV1ConnectionsStreamHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.stream_history.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.stream_history.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsStreamHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.stream_history.$post> },
      ) => parseResponse(client.v1.connections.stream_history.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsEventsGetKey() {
  return ['v1', '/v1/connections/events/get', 'POST'] as const
}

export function usePostV1ConnectionsEventsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.events.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.events.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsEventsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.events.get.$post> },
      ) => parseResponse(client.v1.connections.events.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsEventsListKey() {
  return ['v1', '/v1/connections/events/list', 'POST'] as const
}

export function usePostV1ConnectionsEventsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.events.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.events.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsEventsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.events.list.$post> },
      ) => parseResponse(client.v1.connections.events.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsEventsListMinimalKey() {
  return ['v1', '/v1/connections/events/list_minimal', 'POST'] as const
}

export function usePostV1ConnectionsEventsListMinimal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.events.list_minimal.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.events.list_minimal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsEventsListMinimalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.events.list_minimal.$post> },
      ) => parseResponse(client.v1.connections.events.list_minimal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsEventsBackfillKey() {
  return ['v1', '/v1/connections/events/backfill', 'POST'] as const
}

export function usePostV1ConnectionsEventsBackfill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.events.backfill.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.events.backfill.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsEventsBackfillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.events.backfill.$post> },
      ) => parseResponse(client.v1.connections.events.backfill.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsEventsListForJobKey() {
  return ['v1', '/v1/connections/events/list_for_job', 'POST'] as const
}

export function usePostV1ConnectionsEventsListForJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.events.list_for_job.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.events.list_for_job.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsEventsListForJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.events.list_for_job.$post> },
      ) => parseResponse(client.v1.connections.events.list_for_job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsLastJobPerStreamKey() {
  return ['v1', '/v1/connections/last_job_per_stream', 'POST'] as const
}

export function usePostV1ConnectionsLastJobPerStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.last_job_per_stream.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.last_job_per_stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsLastJobPerStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.last_job_per_stream.$post> },
      ) => parseResponse(client.v1.connections.last_job_per_stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsGetKey() {
  return ['v1', '/v1/connections/get', 'POST'] as const
}

export function usePostV1ConnectionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.get.$post> }) =>
        parseResponse(client.v1.connections.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsGetForJobKey() {
  return ['v1', '/v1/connections/getForJob', 'POST'] as const
}

export function usePostV1ConnectionsGetForJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.getForJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.getForJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsGetForJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.getForJob.$post> },
      ) => parseResponse(client.v1.connections.getForJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsListByActorDefinitionKey() {
  return ['v1', '/v1/connections/list_by_actor_definition', 'POST'] as const
}

export function usePostV1ConnectionsListByActorDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.list_by_actor_definition.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.list_by_actor_definition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsListByActorDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connections.list_by_actor_definition.$post> },
      ) => parseResponse(client.v1.connections.list_by_actor_definition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsApplySchemaChangesKey() {
  return ['v1', '/v1/connections/apply_schema_changes', 'POST'] as const
}

export function usePostV1ConnectionsApplySchemaChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.connections.apply_schema_changes.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.apply_schema_changes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsApplySchemaChangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.apply_schema_changes.$post> },
      ) => parseResponse(client.v1.connections.apply_schema_changes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsPostprocessDiscoveredCatalogKey() {
  return ['v1', '/v1/connections/postprocess_discovered_catalog', 'POST'] as const
}

export function usePostV1ConnectionsPostprocessDiscoveredCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.postprocess_discovered_catalog.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.postprocess_discovered_catalog.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsPostprocessDiscoveredCatalogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connections.postprocess_discovered_catalog.$post>
        },
      ) =>
        parseResponse(
          client.v1.connections.postprocess_discovered_catalog.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsGetContextKey() {
  return ['v1', '/v1/connections/get_context', 'POST'] as const
}

export function usePostV1ConnectionsGetContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get_context.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.get_context.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsGetContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.get_context.$post> },
      ) => parseResponse(client.v1.connections.get_context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StateGetKey() {
  return ['v1', '/v1/state/get', 'POST'] as const
}

export function usePostV1StateGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.state.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StateGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.state.get.$post> }) =>
        parseResponse(client.v1.state.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StateCreateOrUpdateKey() {
  return ['v1', '/v1/state/create_or_update', 'POST'] as const
}

export function usePostV1StateCreateOrUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.create_or_update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.state.create_or_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StateCreateOrUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.state.create_or_update.$post> },
      ) => parseResponse(client.v1.state.create_or_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StateCreateOrUpdateSafeKey() {
  return ['v1', '/v1/state/create_or_update_safe', 'POST'] as const
}

export function usePostV1StateCreateOrUpdateSafe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.state.create_or_update_safe.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.state.create_or_update_safe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StateCreateOrUpdateSafeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.state.create_or_update_safe.$post> },
      ) => parseResponse(client.v1.state.create_or_update_safe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsSearchKey() {
  return ['v1', '/v1/connections/search', 'POST'] as const
}

export function usePostV1ConnectionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.search.$post> },
      ) => parseResponse(client.v1.connections.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsDeleteKey() {
  return ['v1', '/v1/connections/delete', 'POST'] as const
}

export function usePostV1ConnectionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.delete.$post> },
      ) => parseResponse(client.v1.connections.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsSyncKey() {
  return ['v1', '/v1/connections/sync', 'POST'] as const
}

export function usePostV1ConnectionsSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connections.sync.$post> }) =>
        parseResponse(client.v1.connections.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsResetKey() {
  return ['v1', '/v1/connections/reset', 'POST'] as const
}

export function usePostV1ConnectionsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.reset.$post> },
      ) => parseResponse(client.v1.connections.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsClearKey() {
  return ['v1', '/v1/connections/clear', 'POST'] as const
}

export function usePostV1ConnectionsClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.clear.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.clear.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.clear.$post> },
      ) => parseResponse(client.v1.connections.clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsAutoDisableKey() {
  return ['v1', '/v1/connections/auto_disable', 'POST'] as const
}

export function usePostV1ConnectionsAutoDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.auto_disable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.auto_disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsAutoDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.auto_disable.$post> },
      ) => parseResponse(client.v1.connections.auto_disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsClearStreamKey() {
  return ['v1', '/v1/connections/clear/stream', 'POST'] as const
}

export function usePostV1ConnectionsClearStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.clear.stream.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.clear.stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsClearStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.clear.stream.$post> },
      ) => parseResponse(client.v1.connections.clear.stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsResetStreamKey() {
  return ['v1', '/v1/connections/reset/stream', 'POST'] as const
}

export function usePostV1ConnectionsResetStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.stream.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.reset.stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsResetStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.reset.stream.$post> },
      ) => parseResponse(client.v1.connections.reset.stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsRefreshKey() {
  return ['v1', '/v1/connections/refresh', 'POST'] as const
}

export function usePostV1ConnectionsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connections.refresh.$post> },
      ) => parseResponse(client.v1.connections.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsCheckKey() {
  return ['v1', '/v1/operations/check', 'POST'] as const
}

export function usePostV1OperationsCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.check.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.operations.check.$post> }) =>
        parseResponse(client.v1.operations.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsCreateKey() {
  return ['v1', '/v1/operations/create', 'POST'] as const
}

export function usePostV1OperationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.operations.create.$post> },
      ) => parseResponse(client.v1.operations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsUpdateKey() {
  return ['v1', '/v1/operations/update', 'POST'] as const
}

export function usePostV1OperationsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.operations.update.$post> },
      ) => parseResponse(client.v1.operations.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsListKey() {
  return ['v1', '/v1/operations/list', 'POST'] as const
}

export function usePostV1OperationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.operations.list.$post> }) =>
        parseResponse(client.v1.operations.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsGetKey() {
  return ['v1', '/v1/operations/get', 'POST'] as const
}

export function usePostV1OperationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.operations.get.$post> }) =>
        parseResponse(client.v1.operations.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OperationsDeleteKey() {
  return ['v1', '/v1/operations/delete', 'POST'] as const
}

export function usePostV1OperationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.operations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OperationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.operations.delete.$post> },
      ) => parseResponse(client.v1.operations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulerSourcesCheckConnectionKey() {
  return ['v1', '/v1/scheduler/sources/check_connection', 'POST'] as const
}

export function usePostV1SchedulerSourcesCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.check_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulerSourcesCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post> },
      ) => parseResponse(client.v1.scheduler.sources.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulerSourcesDiscoverSchemaKey() {
  return ['v1', '/v1/scheduler/sources/discover_schema', 'POST'] as const
}

export function usePostV1SchedulerSourcesDiscoverSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.discover_schema.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulerSourcesDiscoverSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post> },
      ) => parseResponse(client.v1.scheduler.sources.discover_schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulerDestinationsCheckConnectionKey() {
  return ['v1', '/v1/scheduler/destinations/check_connection', 'POST'] as const
}

export function usePostV1SchedulerDestinationsCheckConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulerDestinationsCheckConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>
        },
      ) =>
        parseResponse(client.v1.scheduler.destinations.check_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsOauthParamsCreateKey() {
  return ['v1', '/v1/source_oauths/oauth_params/create', 'POST'] as const
}

export function usePostV1SourceOauthsOauthParamsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsOauthParamsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post> },
      ) => parseResponse(client.v1.source_oauths.oauth_params.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsGetConsentUrlKey() {
  return ['v1', '/v1/source_oauths/get_consent_url', 'POST'] as const
}

export function usePostV1SourceOauthsGetConsentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsGetConsentUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post> },
      ) => parseResponse(client.v1.source_oauths.get_consent_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsGetEmbeddedConsentUrlKey() {
  return ['v1', '/v1/source_oauths/get_embedded_consent_url', 'POST'] as const
}

export function usePostV1SourceOauthsGetEmbeddedConsentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsGetEmbeddedConsentUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.source_oauths.get_embedded_consent_url.$post> },
      ) =>
        parseResponse(client.v1.source_oauths.get_embedded_consent_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsGetOauthConsentUrlKey() {
  return ['v1', '/v1/connector_builder_projects/get_oauth_consent_url', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsGetOauthConsentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsGetOauthConsentUrlKey()
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
            typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.get_oauth_consent_url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsCompleteOauthKey() {
  return ['v1', '/v1/source_oauths/complete_oauth', 'POST'] as const
}

export function usePostV1SourceOauthsCompleteOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsCompleteOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post> },
      ) => parseResponse(client.v1.source_oauths.complete_oauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorBuilderProjectsCompleteOauthKey() {
  return ['v1', '/v1/connector_builder_projects/complete_oauth', 'POST'] as const
}

export function usePostV1ConnectorBuilderProjectsCompleteOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.complete_oauth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_builder_projects.complete_oauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorBuilderProjectsCompleteOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.connector_builder_projects.complete_oauth.$post>
        },
      ) =>
        parseResponse(
          client.v1.connector_builder_projects.complete_oauth.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsRevokeKey() {
  return ['v1', '/v1/source_oauths/revoke', 'POST'] as const
}

export function usePostV1SourceOauthsRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_oauths.revoke.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_oauths.revoke.$post> },
      ) => parseResponse(client.v1.source_oauths.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceOauthsGetScopesKey() {
  return ['v1', '/v1/source_oauths/get_scopes', 'POST'] as const
}

export function usePostV1SourceOauthsGetScopes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_oauths.get_scopes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.source_oauths.get_scopes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceOauthsGetScopesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.source_oauths.get_scopes.$post> },
      ) => parseResponse(client.v1.source_oauths.get_scopes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationOauthsGetConsentUrlKey() {
  return ['v1', '/v1/destination_oauths/get_consent_url', 'POST'] as const
}

export function usePostV1DestinationOauthsGetConsentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationOauthsGetConsentUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post> },
      ) => parseResponse(client.v1.destination_oauths.get_consent_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationOauthsCompleteOauthKey() {
  return ['v1', '/v1/destination_oauths/complete_oauth', 'POST'] as const
}

export function usePostV1DestinationOauthsCompleteOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationOauthsCompleteOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post> },
      ) => parseResponse(client.v1.destination_oauths.complete_oauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DestinationOauthsOauthParamsCreateKey() {
  return ['v1', '/v1/destination_oauths/oauth_params/create', 'POST'] as const
}

export function usePostV1DestinationOauthsOauthParamsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DestinationOauthsOauthParamsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post> },
      ) =>
        parseResponse(client.v1.destination_oauths.oauth_params.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendCheckUpdatesKey() {
  return ['v1', '/v1/web_backend/check_updates', 'POST'] as const
}

export function usePostV1WebBackendCheckUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.check_updates.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendCheckUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.web_backend.check_updates.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendMappersValidateKey() {
  return ['v1', '/v1/web_backend/mappers/validate', 'POST'] as const
}

export function usePostV1WebBackendMappersValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.mappers.validate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.mappers.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendMappersValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.mappers.validate.$post> },
      ) => parseResponse(client.v1.web_backend.mappers.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsListKey() {
  return ['v1', '/v1/web_backend/connections/list', 'POST'] as const
}

export function usePostV1WebBackendConnectionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.list.$post> },
      ) => parseResponse(client.v1.web_backend.connections.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsStatusCountsKey() {
  return ['v1', '/v1/web_backend/connections/status_counts', 'POST'] as const
}

export function usePostV1WebBackendConnectionsStatusCounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.status_counts.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.status_counts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsStatusCountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.web_backend.connections.status_counts.$post> },
      ) => parseResponse(client.v1.web_backend.connections.status_counts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsGetKey() {
  return ['v1', '/v1/web_backend/connections/get', 'POST'] as const
}

export function usePostV1WebBackendConnectionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.get.$post> },
      ) => parseResponse(client.v1.web_backend.connections.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsCreateKey() {
  return ['v1', '/v1/web_backend/connections/create', 'POST'] as const
}

export function usePostV1WebBackendConnectionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.create.$post> },
      ) => parseResponse(client.v1.web_backend.connections.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendConnectionsUpdateKey() {
  return ['v1', '/v1/web_backend/connections/update', 'POST'] as const
}

export function usePostV1WebBackendConnectionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.connections.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendConnectionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.connections.update.$post> },
      ) => parseResponse(client.v1.web_backend.connections.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendDescribeCronExpressionKey() {
  return ['v1', '/v1/web_backend/describe_cron_expression', 'POST'] as const
}

export function usePostV1WebBackendDescribeCronExpression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.describe_cron_expression.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.describe_cron_expression.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendDescribeCronExpressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.web_backend.describe_cron_expression.$post> },
      ) => parseResponse(client.v1.web_backend.describe_cron_expression.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendStateGetTypeKey() {
  return ['v1', '/v1/web_backend/state/get_type', 'POST'] as const
}

export function usePostV1WebBackendStateGetType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.state.get_type.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.state.get_type.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendStateGetTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.state.get_type.$post> },
      ) => parseResponse(client.v1.web_backend.state.get_type.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebBackendWorkspaceStateKey() {
  return ['v1', '/v1/web_backend/workspace/state', 'POST'] as const
}

export function usePostV1WebBackendWorkspaceState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.workspace.state.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.web_backend.workspace.state.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebBackendWorkspaceStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.web_backend.workspace.state.$post> },
      ) => parseResponse(client.v1.web_backend.workspace.state.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebBackendConfigKey() {
  return ['v1', '/v1/web_backend/config'] as const
}

export function useGetV1WebBackendConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebBackendConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.web_backend.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebBackendConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebBackendConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.web_backend.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1JobsCreateKey() {
  return ['v1', '/v1/jobs/create', 'POST'] as const
}

export function usePostV1JobsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.create.$post> }) =>
        parseResponse(client.v1.jobs.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsJobSuccessWithAttemptNumberKey() {
  return ['v1', '/v1/jobs/job_success_with_attempt_number', 'POST'] as const
}

export function usePostV1JobsJobSuccessWithAttemptNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.job_success_with_attempt_number.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.job_success_with_attempt_number.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsJobSuccessWithAttemptNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.jobs.job_success_with_attempt_number.$post> },
      ) => parseResponse(client.v1.jobs.job_success_with_attempt_number.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsListKey() {
  return ['v1', '/v1/jobs/list', 'POST'] as const
}

export function usePostV1JobsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.list.$post> }) =>
        parseResponse(client.v1.jobs.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsListForWorkspacesKey() {
  return ['v1', '/v1/jobs/list_for_workspaces', 'POST'] as const
}

export function usePostV1JobsListForWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list_for_workspaces.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.list_for_workspaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsListForWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.list_for_workspaces.$post> },
      ) => parseResponse(client.v1.jobs.list_for_workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetKey() {
  return ['v1', '/v1/jobs/get', 'POST'] as const
}

export function usePostV1JobsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.get.$post> }) =>
        parseResponse(client.v1.jobs.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetLastReplicationJobKey() {
  return ['v1', '/v1/jobs/get_last_replication_job', 'POST'] as const
}

export function usePostV1JobsGetLastReplicationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetLastReplicationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post> },
      ) => parseResponse(client.v1.jobs.get_last_replication_job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetLastReplicationJobWithCancelKey() {
  return ['v1', '/v1/jobs/get_last_replication_job_with_cancel', 'POST'] as const
}

export function usePostV1JobsGetLastReplicationJobWithCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetLastReplicationJobWithCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>
        },
      ) =>
        parseResponse(
          client.v1.jobs.get_last_replication_job_with_cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetWithoutLogsKey() {
  return ['v1', '/v1/jobs/get_without_logs', 'POST'] as const
}

export function usePostV1JobsGetWithoutLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_without_logs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_without_logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetWithoutLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_without_logs.$post> },
      ) => parseResponse(client.v1.jobs.get_without_logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetLightKey() {
  return ['v1', '/v1/jobs/get_light', 'POST'] as const
}

export function usePostV1JobsGetLight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_light.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_light.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetLightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_light.$post> }) =>
        parseResponse(client.v1.jobs.get_light.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsCancelKey() {
  return ['v1', '/v1/jobs/cancel', 'POST'] as const
}

export function usePostV1JobsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.cancel.$post> }) =>
        parseResponse(client.v1.jobs.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetDebugInfoKey() {
  return ['v1', '/v1/jobs/get_debug_info', 'POST'] as const
}

export function usePostV1JobsGetDebugInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_debug_info.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_debug_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetDebugInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_debug_info.$post> },
      ) => parseResponse(client.v1.jobs.get_debug_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetInputKey() {
  return ['v1', '/v1/jobs/get_input', 'POST'] as const
}

export function usePostV1JobsGetInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_input.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.get_input.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.get_input.$post> }) =>
        parseResponse(client.v1.jobs.get_input.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsFailNonTerminalKey() {
  return ['v1', '/v1/jobs/fail_non_terminal', 'POST'] as const
}

export function usePostV1JobsFailNonTerminal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.fail_non_terminal.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.fail_non_terminal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsFailNonTerminalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.fail_non_terminal.$post> },
      ) => parseResponse(client.v1.jobs.fail_non_terminal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsReportJobStartKey() {
  return ['v1', '/v1/jobs/reportJobStart', 'POST'] as const
}

export function usePostV1JobsReportJobStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.reportJobStart.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.reportJobStart.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsReportJobStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.reportJobStart.$post> },
      ) => parseResponse(client.v1.jobs.reportJobStart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsSetJobQueuedKey() {
  return ['v1', '/v1/jobs/setJobQueued', 'POST'] as const
}

export function usePostV1JobsSetJobQueued<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.setJobQueued.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.setJobQueued.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsSetJobQueuedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.setJobQueued.$post> },
      ) => parseResponse(client.v1.jobs.setJobQueued.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsCancelQueuedJobKey() {
  return ['v1', '/v1/jobs/cancelQueuedJob', 'POST'] as const
}

export function usePostV1JobsCancelQueuedJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancelQueuedJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.cancelQueuedJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsCancelQueuedJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.cancelQueuedJob.$post> },
      ) => parseResponse(client.v1.jobs.cancelQueuedJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsCheckDataWorkerCapacityKey() {
  return ['v1', '/v1/jobs/checkDataWorkerCapacity', 'POST'] as const
}

export function usePostV1JobsCheckDataWorkerCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsCheckDataWorkerCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.checkDataWorkerCapacity.$post> },
      ) => parseResponse(client.v1.jobs.checkDataWorkerCapacity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsGetWebhookConfigKey() {
  return ['v1', '/v1/jobs/getWebhookConfig', 'POST'] as const
}

export function usePostV1JobsGetWebhookConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.getWebhookConfig.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.getWebhookConfig.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsGetWebhookConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.getWebhookConfig.$post> },
      ) => parseResponse(client.v1.jobs.getWebhookConfig.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsJobFailureKey() {
  return ['v1', '/v1/jobs/job_failure', 'POST'] as const
}

export function usePostV1JobsJobFailure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.job_failure.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.job_failure.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsJobFailureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.job_failure.$post> }) =>
        parseResponse(client.v1.jobs.job_failure.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsDeleteStreamResetRecordsKey() {
  return ['v1', '/v1/jobs/delete_stream_reset_records', 'POST'] as const
}

export function usePostV1JobsDeleteStreamResetRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.jobs.delete_stream_reset_records.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.delete_stream_reset_records.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsDeleteStreamResetRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.delete_stream_reset_records.$post> },
      ) => parseResponse(client.v1.jobs.delete_stream_reset_records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsExplainKey() {
  return ['v1', '/v1/jobs/explain', 'POST'] as const
}

export function usePostV1JobsExplain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.explain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.explain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsExplainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.explain.$post> }) =>
        parseResponse(client.v1.jobs.explain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsEvaluateOutlierKey() {
  return ['v1', '/v1/jobs/evaluate_outlier', 'POST'] as const
}

export function usePostV1JobsEvaluateOutlier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.evaluate_outlier.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.evaluate_outlier.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsEvaluateOutlierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.evaluate_outlier.$post> },
      ) => parseResponse(client.v1.jobs.evaluate_outlier.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsFinalizeKey() {
  return ['v1', '/v1/jobs/finalize', 'POST'] as const
}

export function usePostV1JobsFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.finalize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.finalize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.finalize.$post> }) =>
        parseResponse(client.v1.jobs.finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersGetKey() {
  return ['v1', '/v1/users/get', 'POST'] as const
}

export function usePostV1UsersGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.users.get.$post> }) =>
        parseResponse(client.v1.users.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersGetByAuthIdKey() {
  return ['v1', '/v1/users/get_by_auth_id', 'POST'] as const
}

export function usePostV1UsersGetByAuthId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get_by_auth_id.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.get_by_auth_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersGetByAuthIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.get_by_auth_id.$post> },
      ) => parseResponse(client.v1.users.get_by_auth_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersGetByEmailKey() {
  return ['v1', '/v1/users/get_by_email', 'POST'] as const
}

export function usePostV1UsersGetByEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get_by_email.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.get_by_email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersGetByEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.get_by_email.$post> },
      ) => parseResponse(client.v1.users.get_by_email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersGetOrCreateByAuthIdKey() {
  return ['v1', '/v1/users/get_or_create_by_auth_id', 'POST'] as const
}

export function usePostV1UsersGetOrCreateByAuthId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.users.get_or_create_by_auth_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.get_or_create_by_auth_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersGetOrCreateByAuthIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.get_or_create_by_auth_id.$post> },
      ) => parseResponse(client.v1.users.get_or_create_by_auth_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersUpdateKey() {
  return ['v1', '/v1/users/update', 'POST'] as const
}

export function usePostV1UsersUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.users.update.$post> }) =>
        parseResponse(client.v1.users.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersDeleteKey() {
  return ['v1', '/v1/users/delete', 'POST'] as const
}

export function usePostV1UsersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.delete.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.users.delete.$post> }) =>
        parseResponse(client.v1.users.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersListAccessInfoByWorkspaceIdKey() {
  return ['v1', '/v1/users/list_access_info_by_workspace_id', 'POST'] as const
}

export function usePostV1UsersListAccessInfoByWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.users.list_access_info_by_workspace_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.list_access_info_by_workspace_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersListAccessInfoByWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.users.list_access_info_by_workspace_id.$post> },
      ) =>
        parseResponse(client.v1.users.list_access_info_by_workspace_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersListByOrganizationIdKey() {
  return ['v1', '/v1/users/list_by_organization_id', 'POST'] as const
}

export function usePostV1UsersListByOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.users.list_by_organization_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.list_by_organization_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersListByOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.list_by_organization_id.$post> },
      ) => parseResponse(client.v1.users.list_by_organization_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersListInstanceAdminKey() {
  return ['v1', '/v1/users/list_instance_admin', 'POST'] as const
}

export function usePostV1UsersListInstanceAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.list_instance_admin.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersListInstanceAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.users.list_instance_admin.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsCreateKey() {
  return ['v1', '/v1/permissions/create', 'POST'] as const
}

export function usePostV1PermissionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.permissions.create.$post> },
      ) => parseResponse(client.v1.permissions.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsGetKey() {
  return ['v1', '/v1/permissions/get', 'POST'] as const
}

export function usePostV1PermissionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.permissions.get.$post> }) =>
        parseResponse(client.v1.permissions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsCheckKey() {
  return ['v1', '/v1/permissions/check', 'POST'] as const
}

export function usePostV1PermissionsCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.check.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.permissions.check.$post> },
      ) => parseResponse(client.v1.permissions.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsCheckMultipleWorkspacesKey() {
  return ['v1', '/v1/permissions/check_multiple_workspaces', 'POST'] as const
}

export function usePostV1PermissionsCheckMultipleWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.permissions.check_multiple_workspaces.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.check_multiple_workspaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsCheckMultipleWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.permissions.check_multiple_workspaces.$post> },
      ) => parseResponse(client.v1.permissions.check_multiple_workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsUpdateKey() {
  return ['v1', '/v1/permissions/update', 'POST'] as const
}

export function usePostV1PermissionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.update.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.permissions.update.$post> },
      ) => parseResponse(client.v1.permissions.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretsPersistenceConfigGetKey() {
  return ['v1', '/v1/secrets_persistence_config/get', 'POST'] as const
}

export function usePostV1SecretsPersistenceConfigGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.secrets_persistence_config.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.secrets_persistence_config.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretsPersistenceConfigGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.secrets_persistence_config.get.$post> },
      ) => parseResponse(client.v1.secrets_persistence_config.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretsPersistenceConfigCreateOrUpdateKey() {
  return ['v1', '/v1/secrets_persistence_config/create_or_update', 'POST'] as const
}

export function usePostV1SecretsPersistenceConfigCreateOrUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.secrets_persistence_config.create_or_update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.secrets_persistence_config.create_or_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretsPersistenceConfigCreateOrUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.secrets_persistence_config.create_or_update.$post>
        },
      ) =>
        parseResponse(
          client.v1.secrets_persistence_config.create_or_update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretStorageCreateKey() {
  return ['v1', '/v1/secret_storage/create', 'POST'] as const
}

export function usePostV1SecretStorageCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.secret_storage.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretStorageCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.secret_storage.create.$post> },
      ) => parseResponse(client.v1.secret_storage.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretStorageListKey() {
  return ['v1', '/v1/secret_storage/list', 'POST'] as const
}

export function usePostV1SecretStorageList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.secret_storage.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretStorageListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.secret_storage.list.$post> },
      ) => parseResponse(client.v1.secret_storage.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretStorageDeleteKey() {
  return ['v1', '/v1/secret_storage/delete', 'POST'] as const
}

export function usePostV1SecretStorageDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.secret_storage.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretStorageDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.secret_storage.delete.$post> },
      ) => parseResponse(client.v1.secret_storage.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretStorageGetKey() {
  return ['v1', '/v1/secret_storage/get', 'POST'] as const
}

export function usePostV1SecretStorageGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.secret_storage.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretStorageGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.secret_storage.get.$post> },
      ) => parseResponse(client.v1.secret_storage.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecretStorageMigrateKey() {
  return ['v1', '/v1/secret_storage/migrate', 'POST'] as const
}

export function usePostV1SecretStorageMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.migrate.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.secret_storage.migrate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecretStorageMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.secret_storage.migrate.$post> },
      ) => parseResponse(client.v1.secret_storage.migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsDeleteKey() {
  return ['v1', '/v1/permissions/delete', 'POST'] as const
}

export function usePostV1PermissionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.permissions.delete.$post> },
      ) => parseResponse(client.v1.permissions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsDeleteUserFromWorkspaceKey() {
  return ['v1', '/v1/permissions/delete_user_from_workspace', 'POST'] as const
}

export function usePostV1PermissionsDeleteUserFromWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.permissions.delete_user_from_workspace.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.delete_user_from_workspace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsDeleteUserFromWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.permissions.delete_user_from_workspace.$post> },
      ) =>
        parseResponse(client.v1.permissions.delete_user_from_workspace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PermissionsListByUserKey() {
  return ['v1', '/v1/permissions/list_by_user', 'POST'] as const
}

export function usePostV1PermissionsListByUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.list_by_user.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.permissions.list_by_user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PermissionsListByUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.permissions.list_by_user.$post> },
      ) => parseResponse(client.v1.permissions.list_by_user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HealthKey() {
  return ['v1', '/v1/health'] as const
}

export function useGetV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OpenapiKey() {
  return ['v1', '/v1/openapi'] as const
}

export function useGetV1Openapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Openapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AttemptCreateNewAttemptNumberKey() {
  return ['v1', '/v1/attempt/create_new_attempt_number', 'POST'] as const
}

export function usePostV1AttemptCreateNewAttemptNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.attempt.create_new_attempt_number.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.create_new_attempt_number.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptCreateNewAttemptNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.attempt.create_new_attempt_number.$post> },
      ) => parseResponse(client.v1.attempt.create_new_attempt_number.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptSaveStreamMetadataKey() {
  return ['v1', '/v1/attempt/save_stream_metadata', 'POST'] as const
}

export function usePostV1AttemptSaveStreamMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.attempt.save_stream_metadata.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.save_stream_metadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptSaveStreamMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.save_stream_metadata.$post> },
      ) => parseResponse(client.v1.attempt.save_stream_metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptSaveStatsKey() {
  return ['v1', '/v1/attempt/save_stats', 'POST'] as const
}

export function usePostV1AttemptSaveStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_stats.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.save_stats.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptSaveStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.save_stats.$post> },
      ) => parseResponse(client.v1.attempt.save_stats.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptSaveSyncConfigKey() {
  return ['v1', '/v1/attempt/save_sync_config', 'POST'] as const
}

export function usePostV1AttemptSaveSyncConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_sync_config.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.save_sync_config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptSaveSyncConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.save_sync_config.$post> },
      ) => parseResponse(client.v1.attempt.save_sync_config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptFailKey() {
  return ['v1', '/v1/attempt/fail', 'POST'] as const
}

export function usePostV1AttemptFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.fail.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.fail.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.attempt.fail.$post> }) =>
        parseResponse(client.v1.attempt.fail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptGetCombinedStatsKey() {
  return ['v1', '/v1/attempt/get_combined_stats', 'POST'] as const
}

export function usePostV1AttemptGetCombinedStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.get_combined_stats.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.get_combined_stats.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptGetCombinedStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.get_combined_stats.$post> },
      ) => parseResponse(client.v1.attempt.get_combined_stats.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AttemptGetForJobKey() {
  return ['v1', '/v1/attempt/get_for_job', 'POST'] as const
}

export function usePostV1AttemptGetForJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.get_for_job.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attempt.get_for_job.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttemptGetForJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.attempt.get_for_job.$post> },
      ) => parseResponse(client.v1.attempt.get_for_job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StreamStatusesListKey() {
  return ['v1', '/v1/stream_statuses/list', 'POST'] as const
}

export function usePostV1StreamStatusesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.stream_statuses.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StreamStatusesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.stream_statuses.list.$post> },
      ) => parseResponse(client.v1.stream_statuses.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StreamStatusesLatestPerRunStateKey() {
  return ['v1', '/v1/stream_statuses/latest_per_run_state', 'POST'] as const
}

export function usePostV1StreamStatusesLatestPerRunState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.stream_statuses.latest_per_run_state.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.stream_statuses.latest_per_run_state.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StreamStatusesLatestPerRunStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.stream_statuses.latest_per_run_state.$post> },
      ) => parseResponse(client.v1.stream_statuses.latest_per_run_state.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StreamStatusesCreateKey() {
  return ['v1', '/v1/stream_statuses/create', 'POST'] as const
}

export function usePostV1StreamStatusesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.stream_statuses.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StreamStatusesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.stream_statuses.create.$post> },
      ) => parseResponse(client.v1.stream_statuses.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StreamStatusesUpdateKey() {
  return ['v1', '/v1/stream_statuses/update', 'POST'] as const
}

export function usePostV1StreamStatusesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.stream_statuses.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StreamStatusesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.stream_statuses.update.$post> },
      ) => parseResponse(client.v1.stream_statuses.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstanceConfigurationKey() {
  return ['v1', '/v1/instance_configuration'] as const
}

export function useGetV1InstanceConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InstanceConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instance_configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstanceConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InstanceConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instance_configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InstanceConfigurationSetupKey() {
  return ['v1', '/v1/instance_configuration/setup', 'POST'] as const
}

export function usePostV1InstanceConfigurationSetup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.instance_configuration.setup.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.instance_configuration.setup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstanceConfigurationSetupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.instance_configuration.setup.$post> },
      ) => parseResponse(client.v1.instance_configuration.setup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsRetryStatesCreateOrUpdateKey() {
  return ['v1', '/v1/jobs/retry_states/create_or_update', 'POST'] as const
}

export function usePostV1JobsRetryStatesCreateOrUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.jobs.retry_states.create_or_update.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.retry_states.create_or_update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsRetryStatesCreateOrUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.jobs.retry_states.create_or_update.$post> },
      ) => parseResponse(client.v1.jobs.retry_states.create_or_update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsRetryStatesGetKey() {
  return ['v1', '/v1/jobs/retry_states/get', 'POST'] as const
}

export function usePostV1JobsRetryStatesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.retry_states.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.retry_states.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsRetryStatesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.retry_states.get.$post> },
      ) => parseResponse(client.v1.jobs.retry_states.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsDidPreviousJobSucceedKey() {
  return ['v1', '/v1/jobs/did_previous_job_succeed', 'POST'] as const
}

export function usePostV1JobsDidPreviousJobSucceed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.did_previous_job_succeed.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.did_previous_job_succeed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsDidPreviousJobSucceedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.did_previous_job_succeed.$post> },
      ) => parseResponse(client.v1.jobs.did_previous_job_succeed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsPersistCancellationKey() {
  return ['v1', '/v1/jobs/persist_cancellation', 'POST'] as const
}

export function usePostV1JobsPersistCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.jobs.persist_cancellation.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.persist_cancellation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsPersistCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.persist_cancellation.$post> },
      ) => parseResponse(client.v1.jobs.persist_cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingCustomerPortalKey() {
  return ['v1', '/v1/billing/customer_portal', 'POST'] as const
}

export function usePostV1BillingCustomerPortal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.customer_portal.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.customer_portal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingCustomerPortalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.customer_portal.$post> },
      ) => parseResponse(client.v1.billing.customer_portal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingBackfillUsageKey() {
  return ['v1', '/v1/billing/backfill_usage', 'POST'] as const
}

export function usePostV1BillingBackfillUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.backfill_usage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.backfill_usage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingBackfillUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.backfill_usage.$post> },
      ) => parseResponse(client.v1.billing.backfill_usage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingHandleWebhookKey() {
  return ['v1', '/v1/billing/handle_webhook', 'POST'] as const
}

export function usePostV1BillingHandleWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.handle_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.handle_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingHandleWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.handle_webhook.$post> },
      ) => parseResponse(client.v1.billing.handle_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingListInvoicesKey() {
  return ['v1', '/v1/billing/list_invoices', 'POST'] as const
}

export function usePostV1BillingListInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.list_invoices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.list_invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingListInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.list_invoices.$post> },
      ) => parseResponse(client.v1.billing.list_invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingPaymentInformationKey() {
  return ['v1', '/v1/billing/payment_information', 'POST'] as const
}

export function usePostV1BillingPaymentInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.payment_information.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.payment_information.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingPaymentInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.payment_information.$post> },
      ) => parseResponse(client.v1.billing.payment_information.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingSubscriptionInfoKey() {
  return ['v1', '/v1/billing/subscription_info', 'POST'] as const
}

export function usePostV1BillingSubscriptionInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription_info.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.subscription_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingSubscriptionInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.subscription_info.$post> },
      ) => parseResponse(client.v1.billing.subscription_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingTrialStatusKey() {
  return ['v1', '/v1/billing/trial_status', 'POST'] as const
}

export function usePostV1BillingTrialStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.trial_status.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.trial_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingTrialStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.trial_status.$post> },
      ) => parseResponse(client.v1.billing.trial_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingCancelSubscriptionKey() {
  return ['v1', '/v1/billing/cancel_subscription', 'POST'] as const
}

export function usePostV1BillingCancelSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.cancel_subscription.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.cancel_subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingCancelSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.cancel_subscription.$post> },
      ) => parseResponse(client.v1.billing.cancel_subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingUnscheduleCancelSubscriptionKey() {
  return ['v1', '/v1/billing/unschedule_cancel_subscription', 'POST'] as const
}

export function usePostV1BillingUnscheduleCancelSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing.unschedule_cancel_subscription.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.unschedule_cancel_subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingUnscheduleCancelSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.billing.unschedule_cancel_subscription.$post> },
      ) =>
        parseResponse(client.v1.billing.unschedule_cancel_subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingUnschedulePlanChangeKey() {
  return ['v1', '/v1/billing/unschedule_plan_change', 'POST'] as const
}

export function usePostV1BillingUnschedulePlanChange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing.unschedule_plan_change.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.unschedule_plan_change.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingUnschedulePlanChangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing.unschedule_plan_change.$post> },
      ) => parseResponse(client.v1.billing.unschedule_plan_change.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingDisableDelinquentWorkspacesKey() {
  return ['v1', '/v1/billing/disable_delinquent_workspaces', 'POST'] as const
}

export function usePostV1BillingDisableDelinquentWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.disable_delinquent_workspaces.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingDisableDelinquentWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.billing.disable_delinquent_workspaces.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingNotificationSettingsGetKey() {
  return ['v1', '/v1/billing/notification_settings/get', 'POST'] as const
}

export function usePostV1BillingNotificationSettingsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.notification_settings.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.notification_settings.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingNotificationSettingsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.billing.notification_settings.get.$post> },
      ) => parseResponse(client.v1.billing.notification_settings.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingNotificationSettingsUpdateKey() {
  return ['v1', '/v1/billing/notification_settings/update', 'POST'] as const
}

export function usePostV1BillingNotificationSettingsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.notification_settings.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.notification_settings.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingNotificationSettingsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.billing.notification_settings.update.$post> },
      ) => parseResponse(client.v1.billing.notification_settings.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationPaymentConfigOrganizationIdKey(
  args: InferRequestType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>,
) {
  return ['v1', '/v1/organization_payment_config/:organizationId', args] as const
}

export function useGetV1OrganizationPaymentConfigOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
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
        ? getGetV1OrganizationPaymentConfigOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organization_payment_config[':organizationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationPaymentConfigOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
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
        ? getGetV1OrganizationPaymentConfigOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organization_payment_config[':organizationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationPaymentConfigKey() {
  return ['v1', '/v1/organization_payment_config', 'POST'] as const
}

export function usePostV1OrganizationPaymentConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organization_payment_config.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organization_payment_config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationPaymentConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organization_payment_config.$post> },
      ) => parseResponse(client.v1.organization_payment_config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriodKey() {
  return ['v1', '/v1/organization_payment_config/:organizationId/end_grace_period', 'POST'] as const
}

export function usePostV1OrganizationPaymentConfigOrganizationIdEndGracePeriod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriodKey()
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
            (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organization_payment_config[':organizationId'].end_grace_period.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsGetKey() {
  return ['v1', '/v1/organizations/get', 'POST'] as const
}

export function usePostV1OrganizationsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.get.$post> },
      ) => parseResponse(client.v1.organizations.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsGetSemanticSearchEnablementKey() {
  return ['v1', '/v1/organizations/get_semantic_search_enablement', 'POST'] as const
}

export function usePostV1OrganizationsGetSemanticSearchEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.get_semantic_search_enablement.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.get_semantic_search_enablement.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsGetSemanticSearchEnablementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.organizations.get_semantic_search_enablement.$post>
        },
      ) =>
        parseResponse(
          client.v1.organizations.get_semantic_search_enablement.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsUpdateSemanticSearchEnablementKey() {
  return ['v1', '/v1/organizations/update_semantic_search_enablement', 'POST'] as const
}

export function usePostV1OrganizationsUpdateSemanticSearchEnablement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.organizations.update_semantic_search_enablement.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.update_semantic_search_enablement.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsUpdateSemanticSearchEnablementKey()
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
            typeof client.v1.organizations.update_semantic_search_enablement.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations.update_semantic_search_enablement.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOnboardingUpdateKey() {
  return ['v1', '/v1/organizations/onboarding/update', 'POST'] as const
}

export function usePostV1OrganizationsOnboardingUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.onboarding.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.onboarding.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOnboardingUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.onboarding.update.$post> },
      ) => parseResponse(client.v1.organizations.onboarding.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOnboardingSendMobileHandoffEmailKey() {
  return ['v1', '/v1/organizations/onboarding/send_mobile_handoff_email', 'POST'] as const
}

export function usePostV1OrganizationsOnboardingSendMobileHandoffEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOnboardingSendMobileHandoffEmailKey()
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
            typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations.onboarding.send_mobile_handoff_email.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsCreateKey() {
  return ['v1', '/v1/organizations/create', 'POST'] as const
}

export function usePostV1OrganizationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.create.$post> },
      ) => parseResponse(client.v1.organizations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsUpdateKey() {
  return ['v1', '/v1/organizations/update', 'POST'] as const
}

export function usePostV1OrganizationsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.update.$post> },
      ) => parseResponse(client.v1.organizations.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsAgenticStatusKey() {
  return ['v1', '/v1/organizations/agentic_status', 'POST'] as const
}

export function usePostV1OrganizationsAgenticStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.agentic_status.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.agentic_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsAgenticStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.agentic_status.$post> },
      ) => parseResponse(client.v1.organizations.agentic_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsDeleteKey() {
  return ['v1', '/v1/organizations/delete', 'POST'] as const
}

export function usePostV1OrganizationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.delete.$post> },
      ) => parseResponse(client.v1.organizations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsListByUserIdKey() {
  return ['v1', '/v1/organizations/list_by_user_id', 'POST'] as const
}

export function usePostV1OrganizationsListByUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.list_by_user_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.list_by_user_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsListByUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.list_by_user_id.$post> },
      ) => parseResponse(client.v1.organizations.list_by_user_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsGetUsageKey() {
  return ['v1', '/v1/organizations/get_usage', 'POST'] as const
}

export function usePostV1OrganizationsGetUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.get_usage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.get_usage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsGetUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.get_usage.$post> },
      ) => parseResponse(client.v1.organizations.get_usage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsGetDataWorkerUsageKey() {
  return ['v1', '/v1/organizations/get_data_worker_usage', 'POST'] as const
}

export function usePostV1OrganizationsGetDataWorkerUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.get_data_worker_usage.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.get_data_worker_usage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsGetDataWorkerUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.organizations.get_data_worker_usage.$post> },
      ) => parseResponse(client.v1.organizations.get_data_worker_usage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsListSummariesKey() {
  return ['v1', '/v1/organizations/list_summaries', 'POST'] as const
}

export function usePostV1OrganizationsListSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.list_summaries.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.list_summaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsListSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.organizations.list_summaries.$post> },
      ) => parseResponse(client.v1.organizations.list_summaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsGetOrganizationInfoKey() {
  return ['v1', '/v1/organizations/get_organization_info', 'POST'] as const
}

export function usePostV1OrganizationsGetOrganizationInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.get_organization_info.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.get_organization_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsGetOrganizationInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.organizations.get_organization_info.$post> },
      ) => parseResponse(client.v1.organizations.get_organization_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsListKey() {
  return ['v1', '/v1/groups/list', 'POST'] as const
}

export function usePostV1GroupsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.groups.list.$post> }) =>
        parseResponse(client.v1.groups.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsGetKey() {
  return ['v1', '/v1/groups/get', 'POST'] as const
}

export function usePostV1GroupsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.groups.get.$post> }) =>
        parseResponse(client.v1.groups.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsCreateKey() {
  return ['v1', '/v1/groups/create', 'POST'] as const
}

export function usePostV1GroupsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.groups.create.$post> }) =>
        parseResponse(client.v1.groups.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsUpdateKey() {
  return ['v1', '/v1/groups/update', 'POST'] as const
}

export function usePostV1GroupsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.groups.update.$post> }) =>
        parseResponse(client.v1.groups.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsDeleteKey() {
  return ['v1', '/v1/groups/delete', 'POST'] as const
}

export function usePostV1GroupsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.delete.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.groups.delete.$post> }) =>
        parseResponse(client.v1.groups.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsListMembersKey() {
  return ['v1', '/v1/groups/list_members', 'POST'] as const
}

export function usePostV1GroupsListMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.list_members.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.list_members.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsListMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.groups.list_members.$post> },
      ) => parseResponse(client.v1.groups.list_members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsAddMemberKey() {
  return ['v1', '/v1/groups/add_member', 'POST'] as const
}

export function usePostV1GroupsAddMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.add_member.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.add_member.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsAddMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.groups.add_member.$post> },
      ) => parseResponse(client.v1.groups.add_member.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupsRemoveMemberKey() {
  return ['v1', '/v1/groups/remove_member', 'POST'] as const
}

export function usePostV1GroupsRemoveMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.remove_member.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.groups.remove_member.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupsRemoveMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.groups.remove_member.$post> },
      ) => parseResponse(client.v1.groups.remove_member.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupPermissionsListKey() {
  return ['v1', '/v1/group_permissions/list', 'POST'] as const
}

export function usePostV1GroupPermissionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.group_permissions.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupPermissionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.group_permissions.list.$post> },
      ) => parseResponse(client.v1.group_permissions.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupPermissionsCreateKey() {
  return ['v1', '/v1/group_permissions/create', 'POST'] as const
}

export function usePostV1GroupPermissionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.group_permissions.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupPermissionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.group_permissions.create.$post> },
      ) => parseResponse(client.v1.group_permissions.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GroupPermissionsDeleteKey() {
  return ['v1', '/v1/group_permissions/delete', 'POST'] as const
}

export function usePostV1GroupPermissionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.group_permissions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GroupPermissionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.group_permissions.delete.$post> },
      ) => parseResponse(client.v1.group_permissions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainVerificationsListPendingKey() {
  return ['v1', '/v1/domain_verifications/list_pending', 'POST'] as const
}

export function usePostV1DomainVerificationsListPending<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.domain_verifications.list_pending.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainVerificationsListPendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.domain_verifications.list_pending.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainVerificationsCheckKey() {
  return ['v1', '/v1/domain_verifications/check', 'POST'] as const
}

export function usePostV1DomainVerificationsCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain_verifications.check.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domain_verifications.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainVerificationsCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domain_verifications.check.$post> },
      ) => parseResponse(client.v1.domain_verifications.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeploymentMetadataKey() {
  return ['v1', '/v1/deployment/metadata', 'POST'] as const
}

export function usePostV1DeploymentMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deployment.metadata.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeploymentMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.deployment.metadata.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApplicationsListKey() {
  return ['v1', '/v1/applications/list', 'POST'] as const
}

export function usePostV1ApplicationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.list.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.applications.list.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApplicationsDeleteKey() {
  return ['v1', '/v1/applications/delete', 'POST'] as const
}

export function usePostV1ApplicationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.applications.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.applications.delete.$post> },
      ) => parseResponse(client.v1.applications.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApplicationsCreateKey() {
  return ['v1', '/v1/applications/create', 'POST'] as const
}

export function usePostV1ApplicationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.applications.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.applications.create.$post> },
      ) => parseResponse(client.v1.applications.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApplicationsTokenKey() {
  return ['v1', '/v1/applications/token', 'POST'] as const
}

export function usePostV1ApplicationsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.applications.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.applications.token.$post> },
      ) => parseResponse(client.v1.applications.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScopedConfigurationListKey() {
  return ['v1', '/v1/scoped_configuration/list', 'POST'] as const
}

export function usePostV1ScopedConfigurationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scoped_configuration.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scoped_configuration.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScopedConfigurationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scoped_configuration.list.$post> },
      ) => parseResponse(client.v1.scoped_configuration.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScopedConfigurationGetContextKey() {
  return ['v1', '/v1/scoped_configuration/get_context', 'POST'] as const
}

export function usePostV1ScopedConfigurationGetContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.get_context.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scoped_configuration.get_context.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScopedConfigurationGetContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scoped_configuration.get_context.$post> },
      ) => parseResponse(client.v1.scoped_configuration.get_context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScopedConfigurationCreateKey() {
  return ['v1', '/v1/scoped_configuration/create', 'POST'] as const
}

export function usePostV1ScopedConfigurationCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scoped_configuration.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScopedConfigurationCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scoped_configuration.create.$post> },
      ) => parseResponse(client.v1.scoped_configuration.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScopedConfigurationGetKey() {
  return ['v1', '/v1/scoped_configuration/get', 'POST'] as const
}

export function usePostV1ScopedConfigurationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scoped_configuration.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scoped_configuration.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScopedConfigurationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scoped_configuration.get.$post> },
      ) => parseResponse(client.v1.scoped_configuration.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScopedConfigurationUpdateKey() {
  return ['v1', '/v1/scoped_configuration/update', 'POST'] as const
}

export function usePostV1ScopedConfigurationUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scoped_configuration.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScopedConfigurationUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scoped_configuration.update.$post> },
      ) => parseResponse(client.v1.scoped_configuration.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScopedConfigurationDeleteKey() {
  return ['v1', '/v1/scoped_configuration/delete', 'POST'] as const
}

export function usePostV1ScopedConfigurationDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.delete.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scoped_configuration.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScopedConfigurationDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scoped_configuration.delete.$post> },
      ) => parseResponse(client.v1.scoped_configuration.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutListKey() {
  return ['v1', '/v1/connector_rollout/list', 'POST'] as const
}

export function usePostV1ConnectorRolloutList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.list.$post> },
      ) => parseResponse(client.v1.connector_rollout.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutListByActorDefinitionIdKey() {
  return ['v1', '/v1/connector_rollout/list_by_actor_definition_id', 'POST'] as const
}

export function usePostV1ConnectorRolloutListByActorDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutListByActorDefinitionIdKey()
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
            typeof client.v1.connector_rollout.list_by_actor_definition_id.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.connector_rollout.list_by_actor_definition_id.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutListAllKey() {
  return ['v1', '/v1/connector_rollout/list_all', 'POST'] as const
}

export function usePostV1ConnectorRolloutListAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.list_all.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutListAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.connector_rollout.list_all.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutGetKey() {
  return ['v1', '/v1/connector_rollout/get', 'POST'] as const
}

export function usePostV1ConnectorRolloutGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.get.$post> },
      ) => parseResponse(client.v1.connector_rollout.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutGetActorSyncInfoKey() {
  return ['v1', '/v1/connector_rollout/get_actor_sync_info', 'POST'] as const
}

export function usePostV1ConnectorRolloutGetActorSyncInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutGetActorSyncInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_rollout.get_actor_sync_info.$post> },
      ) => parseResponse(client.v1.connector_rollout.get_actor_sync_info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutStartKey() {
  return ['v1', '/v1/connector_rollout/start', 'POST'] as const
}

export function usePostV1ConnectorRolloutStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.start.$post> },
      ) => parseResponse(client.v1.connector_rollout.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutRolloutKey() {
  return ['v1', '/v1/connector_rollout/rollout', 'POST'] as const
}

export function usePostV1ConnectorRolloutRollout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.rollout.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.rollout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutRolloutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.rollout.$post> },
      ) => parseResponse(client.v1.connector_rollout.rollout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutUpdateStateKey() {
  return ['v1', '/v1/connector_rollout/update_state', 'POST'] as const
}

export function usePostV1ConnectorRolloutUpdateState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.update_state.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.update_state.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutUpdateStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.update_state.$post> },
      ) => parseResponse(client.v1.connector_rollout.update_state.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutFinalizeKey() {
  return ['v1', '/v1/connector_rollout/finalize', 'POST'] as const
}

export function usePostV1ConnectorRolloutFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.finalize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.finalize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.finalize.$post> },
      ) => parseResponse(client.v1.connector_rollout.finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutManualStartKey() {
  return ['v1', '/v1/connector_rollout/manual_start', 'POST'] as const
}

export function usePostV1ConnectorRolloutManualStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.manual_start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutManualStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.manual_start.$post> },
      ) => parseResponse(client.v1.connector_rollout.manual_start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutManualRolloutKey() {
  return ['v1', '/v1/connector_rollout/manual_rollout', 'POST'] as const
}

export function usePostV1ConnectorRolloutManualRollout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_rollout.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.manual_rollout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutManualRolloutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.manual_rollout.$post> },
      ) => parseResponse(client.v1.connector_rollout.manual_rollout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutManualFinalizeKey() {
  return ['v1', '/v1/connector_rollout/manual_finalize', 'POST'] as const
}

export function usePostV1ConnectorRolloutManualFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_finalize.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.manual_finalize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutManualFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connector_rollout.manual_finalize.$post> },
      ) => parseResponse(client.v1.connector_rollout.manual_finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorRolloutManualPauseKey() {
  return ['v1', '/v1/connector_rollout/manual_pause', 'POST'] as const
}

export function usePostV1ConnectorRolloutManualPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_pause.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connector_rollout.manual_pause.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorRolloutManualPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connector_rollout.manual_pause.$post> },
      ) => parseResponse(client.v1.connector_rollout.manual_pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EntitlementsIsEntitledKey() {
  return ['v1', '/v1/entitlements/is_entitled', 'POST'] as const
}

export function usePostV1EntitlementsIsEntitled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.is_entitled.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.entitlements.is_entitled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EntitlementsIsEntitledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.entitlements.is_entitled.$post> },
      ) => parseResponse(client.v1.entitlements.is_entitled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EntitlementsGetEntitlementsKey() {
  return ['v1', '/v1/entitlements/get_entitlements', 'POST'] as const
}

export function usePostV1EntitlementsGetEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.entitlements.get_entitlements.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.entitlements.get_entitlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EntitlementsGetEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.entitlements.get_entitlements.$post> },
      ) => parseResponse(client.v1.entitlements.get_entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EntitlementsListPlansKey() {
  return ['v1', '/v1/entitlements/list_plans', 'POST'] as const
}

export function usePostV1EntitlementsListPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.list_plans.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EntitlementsListPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.entitlements.list_plans.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EntitlementsUpdatePlanKey() {
  return ['v1', '/v1/entitlements/update_plan', 'POST'] as const
}

export function usePostV1EntitlementsUpdatePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.update_plan.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.entitlements.update_plan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EntitlementsUpdatePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.entitlements.update_plan.$post> },
      ) => parseResponse(client.v1.entitlements.update_plan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UserInvitationsCreateKey() {
  return ['v1', '/v1/user_invitations/create', 'POST'] as const
}

export function usePostV1UserInvitationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.user_invitations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserInvitationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.user_invitations.create.$post> },
      ) => parseResponse(client.v1.user_invitations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserInvitationsByCodeInviteCodeKey(
  args: InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
) {
  return ['v1', '/v1/user_invitations/by_code/:inviteCode', args] as const
}

export function useGetV1UserInvitationsByCodeInviteCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
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
        ? getGetV1UserInvitationsByCodeInviteCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.user_invitations.by_code[':inviteCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserInvitationsByCodeInviteCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
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
        ? getGetV1UserInvitationsByCodeInviteCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.user_invitations.by_code[':inviteCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UserInvitationsListPendingKey() {
  return ['v1', '/v1/user_invitations/list_pending', 'POST'] as const
}

export function usePostV1UserInvitationsListPending<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.user_invitations.list_pending.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.user_invitations.list_pending.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserInvitationsListPendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.user_invitations.list_pending.$post> },
      ) => parseResponse(client.v1.user_invitations.list_pending.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UserInvitationsAcceptKey() {
  return ['v1', '/v1/user_invitations/accept', 'POST'] as const
}

export function usePostV1UserInvitationsAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.accept.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.user_invitations.accept.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserInvitationsAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.user_invitations.accept.$post> },
      ) => parseResponse(client.v1.user_invitations.accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UserInvitationsDeclineKey() {
  return ['v1', '/v1/user_invitations/decline', 'POST'] as const
}

export function usePostV1UserInvitationsDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.decline.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.user_invitations.decline.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserInvitationsDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.user_invitations.decline.$post> },
      ) => parseResponse(client.v1.user_invitations.decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UserInvitationsCancelKey() {
  return ['v1', '/v1/user_invitations/cancel', 'POST'] as const
}

export function usePostV1UserInvitationsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.user_invitations.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserInvitationsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.user_invitations.cancel.$post> },
      ) => parseResponse(client.v1.user_invitations.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TagsListKey() {
  return ['v1', '/v1/tags/list', 'POST'] as const
}

export function usePostV1TagsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tags.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tags.list.$post> }) =>
        parseResponse(client.v1.tags.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TagsUpdateKey() {
  return ['v1', '/v1/tags/update', 'POST'] as const
}

export function usePostV1TagsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tags.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tags.update.$post> }) =>
        parseResponse(client.v1.tags.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TagsDeleteKey() {
  return ['v1', '/v1/tags/delete', 'POST'] as const
}

export function usePostV1TagsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tags.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tags.delete.$post> }) =>
        parseResponse(client.v1.tags.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TagsCreateKey() {
  return ['v1', '/v1/tags/create', 'POST'] as const
}

export function usePostV1TagsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tags.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tags.create.$post> }) =>
        parseResponse(client.v1.tags.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DiagnosticToolGenerateReportKey() {
  return ['v1', '/v1/diagnostic_tool/generate_report', 'POST'] as const
}

export function usePostV1DiagnosticToolGenerateReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.diagnostic_tool.generate_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.diagnostic_tool.generate_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DiagnosticToolGenerateReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.diagnostic_tool.generate_report.$post> },
      ) => parseResponse(client.v1.diagnostic_tool.generate_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SignalKey() {
  return ['v1', '/v1/signal', 'POST'] as const
}

export function usePostV1Signal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.signal.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.signal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SignalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.signal.$post> }) =>
        parseResponse(client.v1.signal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CatalogsDiffKey() {
  return ['v1', '/v1/catalogs/diff', 'POST'] as const
}

export function usePostV1CatalogsDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.diff.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.catalogs.diff.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CatalogsDiffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.catalogs.diff.$post> }) =>
        parseResponse(client.v1.catalogs.diff.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsRunCheckKey() {
  return ['v1', '/v1/commands/run/check', 'POST'] as const
}

export function usePostV1CommandsRunCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.check.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.run.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsRunCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.run.check.$post> },
      ) => parseResponse(client.v1.commands.run.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsRunDiscoverKey() {
  return ['v1', '/v1/commands/run/discover', 'POST'] as const
}

export function usePostV1CommandsRunDiscover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.discover.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.run.discover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsRunDiscoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.run.discover.$post> },
      ) => parseResponse(client.v1.commands.run.discover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsRunConnectKey() {
  return ['v1', '/v1/commands/run/connect', 'POST'] as const
}

export function usePostV1CommandsRunConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.connect.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.run.connect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsRunConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.run.connect.$post> },
      ) => parseResponse(client.v1.commands.run.connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsRunReplicateKey() {
  return ['v1', '/v1/commands/run/replicate', 'POST'] as const
}

export function usePostV1CommandsRunReplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.replicate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.run.replicate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsRunReplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.run.replicate.$post> },
      ) => parseResponse(client.v1.commands.run.replicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsRunSpecKey() {
  return ['v1', '/v1/commands/run/spec', 'POST'] as const
}

export function usePostV1CommandsRunSpec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.spec.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.run.spec.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsRunSpecKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.run.spec.$post> },
      ) => parseResponse(client.v1.commands.run.spec.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsOutputCheckKey() {
  return ['v1', '/v1/commands/output/check', 'POST'] as const
}

export function usePostV1CommandsOutputCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.check.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.output.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsOutputCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.output.check.$post> },
      ) => parseResponse(client.v1.commands.output.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsOutputConnectKey() {
  return ['v1', '/v1/commands/output/connect', 'POST'] as const
}

export function usePostV1CommandsOutputConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.connect.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.output.connect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsOutputConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.output.connect.$post> },
      ) => parseResponse(client.v1.commands.output.connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsOutputDiscoverKey() {
  return ['v1', '/v1/commands/output/discover', 'POST'] as const
}

export function usePostV1CommandsOutputDiscover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.discover.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.output.discover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsOutputDiscoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.output.discover.$post> },
      ) => parseResponse(client.v1.commands.output.discover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsOutputReplicateKey() {
  return ['v1', '/v1/commands/output/replicate', 'POST'] as const
}

export function usePostV1CommandsOutputReplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.replicate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.output.replicate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsOutputReplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.output.replicate.$post> },
      ) => parseResponse(client.v1.commands.output.replicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsOutputSpecKey() {
  return ['v1', '/v1/commands/output/spec', 'POST'] as const
}

export function usePostV1CommandsOutputSpec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.spec.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.output.spec.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsOutputSpecKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.commands.output.spec.$post> },
      ) => parseResponse(client.v1.commands.output.spec.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsStatusKey() {
  return ['v1', '/v1/commands/status', 'POST'] as const
}

export function usePostV1CommandsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.status.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.commands.status.$post> }) =>
        parseResponse(client.v1.commands.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsGetKey() {
  return ['v1', '/v1/commands/get', 'POST'] as const
}

export function usePostV1CommandsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.commands.get.$post> }) =>
        parseResponse(client.v1.commands.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CommandsCancelKey() {
  return ['v1', '/v1/commands/cancel', 'POST'] as const
}

export function usePostV1CommandsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commands.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CommandsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.commands.cancel.$post> }) =>
        parseResponse(client.v1.commands.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkloadOutputWriteKey() {
  return ['v1', '/v1/workload_output/write', 'POST'] as const
}

export function usePostV1WorkloadOutputWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workload_output.write.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.workload_output.write.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkloadOutputWriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workload_output.write.$post> },
      ) => parseResponse(client.v1.workload_output.write.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplaneGroupCreateKey() {
  return ['v1', '/v1/dataplane_group/create', 'POST'] as const
}

export function usePostV1DataplaneGroupCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplane_group.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplaneGroupCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplane_group.create.$post> },
      ) => parseResponse(client.v1.dataplane_group.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplaneGroupUpdateKey() {
  return ['v1', '/v1/dataplane_group/update', 'POST'] as const
}

export function usePostV1DataplaneGroupUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplane_group.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplaneGroupUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplane_group.update.$post> },
      ) => parseResponse(client.v1.dataplane_group.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplaneGroupDeleteKey() {
  return ['v1', '/v1/dataplane_group/delete', 'POST'] as const
}

export function usePostV1DataplaneGroupDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplane_group.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplaneGroupDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplane_group.delete.$post> },
      ) => parseResponse(client.v1.dataplane_group.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplaneGroupListKey() {
  return ['v1', '/v1/dataplane_group/list', 'POST'] as const
}

export function usePostV1DataplaneGroupList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplane_group.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplaneGroupListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplane_group.list.$post> },
      ) => parseResponse(client.v1.dataplane_group.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataWorkerAllocationListKey() {
  return ['v1', '/v1/data_worker_allocation/list', 'POST'] as const
}

export function usePostV1DataWorkerAllocationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.data_worker_allocation.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataWorkerAllocationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.data_worker_allocation.list.$post> },
      ) => parseResponse(client.v1.data_worker_allocation.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataWorkerAllocationGetKey() {
  return ['v1', '/v1/data_worker_allocation/get', 'POST'] as const
}

export function usePostV1DataWorkerAllocationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.data_worker_allocation.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.data_worker_allocation.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataWorkerAllocationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.data_worker_allocation.get.$post> },
      ) => parseResponse(client.v1.data_worker_allocation.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataWorkerAllocationReallocateKey() {
  return ['v1', '/v1/data_worker_allocation/reallocate', 'POST'] as const
}

export function usePostV1DataWorkerAllocationReallocate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.reallocate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.data_worker_allocation.reallocate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataWorkerAllocationReallocateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.data_worker_allocation.reallocate.$post> },
      ) => parseResponse(client.v1.data_worker_allocation.reallocate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataWorkerAllocationAddCapacityKey() {
  return ['v1', '/v1/data_worker_allocation/add_capacity', 'POST'] as const
}

export function usePostV1DataWorkerAllocationAddCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.add_capacity.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.data_worker_allocation.add_capacity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataWorkerAllocationAddCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.data_worker_allocation.add_capacity.$post> },
      ) => parseResponse(client.v1.data_worker_allocation.add_capacity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataWorkerAllocationRemoveCapacityKey() {
  return ['v1', '/v1/data_worker_allocation/remove_capacity', 'POST'] as const
}

export function usePostV1DataWorkerAllocationRemoveCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.remove_capacity.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.data_worker_allocation.remove_capacity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataWorkerAllocationRemoveCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.data_worker_allocation.remove_capacity.$post> },
      ) =>
        parseResponse(client.v1.data_worker_allocation.remove_capacity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesCreateKey() {
  return ['v1', '/v1/dataplanes/create', 'POST'] as const
}

export function usePostV1DataplanesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.create.$post> },
      ) => parseResponse(client.v1.dataplanes.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesUpdateKey() {
  return ['v1', '/v1/dataplanes/update', 'POST'] as const
}

export function usePostV1DataplanesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.update.$post> },
      ) => parseResponse(client.v1.dataplanes.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesDeleteKey() {
  return ['v1', '/v1/dataplanes/delete', 'POST'] as const
}

export function usePostV1DataplanesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.delete.$post> },
      ) => parseResponse(client.v1.dataplanes.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesListKey() {
  return ['v1', '/v1/dataplanes/list', 'POST'] as const
}

export function usePostV1DataplanesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.list.$post> }) =>
        parseResponse(client.v1.dataplanes.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesTokenKey() {
  return ['v1', '/v1/dataplanes/token', 'POST'] as const
}

export function usePostV1DataplanesToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.token.$post> }) =>
        parseResponse(client.v1.dataplanes.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesHeartbeatKey() {
  return ['v1', '/v1/dataplanes/heartbeat', 'POST'] as const
}

export function usePostV1DataplanesHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.heartbeat.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.heartbeat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.heartbeat.$post> },
      ) => parseResponse(client.v1.dataplanes.heartbeat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesSecretStoragesListKey() {
  return ['v1', '/v1/dataplanes/secret_storages/list', 'POST'] as const
}

export function usePostV1DataplanesSecretStoragesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.dataplanes.secret_storages.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.secret_storages.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesSecretStoragesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.secret_storages.list.$post> },
      ) => parseResponse(client.v1.dataplanes.secret_storages.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesHealthKey() {
  return ['v1', '/v1/dataplanes/health', 'POST'] as const
}

export function usePostV1DataplanesHealth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.health.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.health.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesHealthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.health.$post> },
      ) => parseResponse(client.v1.dataplanes.health.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataplanesInitializeKey() {
  return ['v1', '/v1/dataplanes/initialize', 'POST'] as const
}

export function usePostV1DataplanesInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.initialize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataplanes.initialize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataplanesInitializeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.dataplanes.initialize.$post> },
      ) => parseResponse(client.v1.dataplanes.initialize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SsoConfigGetKey() {
  return ['v1', '/v1/sso_config/get', 'POST'] as const
}

export function usePostV1SsoConfigGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sso_config.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SsoConfigGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sso_config.get.$post> }) =>
        parseResponse(client.v1.sso_config.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SsoConfigCreateKey() {
  return ['v1', '/v1/sso_config/create', 'POST'] as const
}

export function usePostV1SsoConfigCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.create.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sso_config.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SsoConfigCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sso_config.create.$post> },
      ) => parseResponse(client.v1.sso_config.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SsoConfigDeleteKey() {
  return ['v1', '/v1/sso_config/delete', 'POST'] as const
}

export function usePostV1SsoConfigDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sso_config.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SsoConfigDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sso_config.delete.$post> },
      ) => parseResponse(client.v1.sso_config.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SsoConfigUpdateCredentialsKey() {
  return ['v1', '/v1/sso_config/update_credentials', 'POST'] as const
}

export function usePostV1SsoConfigUpdateCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sso_config.update_credentials.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sso_config.update_credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SsoConfigUpdateCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sso_config.update_credentials.$post> },
      ) => parseResponse(client.v1.sso_config.update_credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SsoConfigActivateKey() {
  return ['v1', '/v1/sso_config/activate', 'POST'] as const
}

export function usePostV1SsoConfigActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.activate.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sso_config.activate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SsoConfigActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sso_config.activate.$post> },
      ) => parseResponse(client.v1.sso_config.activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SsoConfigValidateTokenKey() {
  return ['v1', '/v1/sso_config/validate_token', 'POST'] as const
}

export function usePostV1SsoConfigValidateToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sso_config.validate_token.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sso_config.validate_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SsoConfigValidateTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sso_config.validate_token.$post> },
      ) => parseResponse(client.v1.sso_config.validate_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScimConfigGetKey() {
  return ['v1', '/v1/scim_config/get', 'POST'] as const
}

export function usePostV1ScimConfigGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scim_config.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScimConfigGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.scim_config.get.$post> }) =>
        parseResponse(client.v1.scim_config.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScimConfigEnableKey() {
  return ['v1', '/v1/scim_config/enable', 'POST'] as const
}

export function usePostV1ScimConfigEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.enable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scim_config.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScimConfigEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scim_config.enable.$post> },
      ) => parseResponse(client.v1.scim_config.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScimConfigRotateTokenKey() {
  return ['v1', '/v1/scim_config/rotate_token', 'POST'] as const
}

export function usePostV1ScimConfigRotateToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.rotate_token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.scim_config.rotate_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScimConfigRotateTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scim_config.rotate_token.$post> },
      ) => parseResponse(client.v1.scim_config.rotate_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ScimConfigDisableKey() {
  return ['v1', '/v1/scim_config/disable', 'POST'] as const
}

export function usePostV1ScimConfigDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.disable.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.scim_config.disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScimConfigDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.scim_config.disable.$post> },
      ) => parseResponse(client.v1.scim_config.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuditLogsListKey() {
  return ['v1', '/v1/audit_logs/list', 'POST'] as const
}

export function usePostV1AuditLogsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.audit_logs.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuditLogsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.audit_logs.list.$post> }) =>
        parseResponse(client.v1.audit_logs.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicKey() {
  return ['public', '/public'] as const
}

export function useGetPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicV1HealthKey() {
  return ['public', '/public/v1/health'] as const
}

export function useGetPublicV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicV1ApplicationsKey() {
  return ['public', '/public/v1/applications'] as const
}

export function useGetPublicV1Applications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicV1ApplicationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.applications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Applications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicV1ApplicationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.applications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1ApplicationsKey() {
  return ['public', '/public/v1/applications', 'POST'] as const
}

export function usePostPublicV1Applications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1ApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.applications.$post> },
      ) => parseResponse(client.public.v1.applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1ApplicationsApplicationIdKey(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
) {
  return ['public', '/public/v1/applications/:applicationId', args] as const
}

export function useGetPublicV1ApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
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
        ? getGetPublicV1ApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.applications[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1ApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
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
        ? getGetPublicV1ApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.applications[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1ApplicationsApplicationIdKey() {
  return ['public', '/public/v1/applications/:applicationId', 'DELETE'] as const
}

export function useDeletePublicV1ApplicationsApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1ApplicationsApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$delete']>
        },
      ) =>
        parseResponse(client.public.v1.applications[':applicationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublicV1ApplicationsTokenKey() {
  return ['public', '/public/v1/applications/token', 'POST'] as const
}

export function usePostPublicV1ApplicationsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.applications.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1ApplicationsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.applications.token.$post> },
      ) => parseResponse(client.public.v1.applications.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1JobsKey(args: InferRequestType<typeof client.public.v1.jobs.$get>) {
  return ['public', '/public/v1/jobs', args] as const
}

export function useGetPublicV1Jobs<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Jobs<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1JobsKey() {
  return ['public', '/public/v1/jobs', 'POST'] as const
}

export function usePostPublicV1Jobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1JobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.public.v1.jobs.$post> }) =>
        parseResponse(client.public.v1.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1JobsJobIdKey(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
) {
  return ['public', '/public/v1/jobs/:jobId', args] as const
}

export function useGetPublicV1JobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>
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
        ? getGetPublicV1JobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1JobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>
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
        ? getGetPublicV1JobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1JobsJobIdKey() {
  return ['public', '/public/v1/jobs/:jobId', 'DELETE'] as const
}

export function useDeletePublicV1JobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1JobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$delete']> },
      ) => parseResponse(client.public.v1.jobs[':jobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1RegionsKey(
  args: InferRequestType<typeof client.public.v1.regions.$get>,
) {
  return ['public', '/public/v1/regions', args] as const
}

export function useGetPublicV1Regions<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
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
        ? getGetPublicV1RegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Regions<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
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
        ? getGetPublicV1RegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1RegionsKey() {
  return ['public', '/public/v1/regions', 'POST'] as const
}

export function usePostPublicV1Regions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.regions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1RegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.public.v1.regions.$post> }) =>
        parseResponse(client.public.v1.regions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1RegionsRegionIdKey(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
) {
  return ['public', '/public/v1/regions/:regionId', args] as const
}

export function useGetPublicV1RegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
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
        ? getGetPublicV1RegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1RegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
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
        ? getGetPublicV1RegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1RegionsRegionIdKey() {
  return ['public', '/public/v1/regions/:regionId', 'DELETE'] as const
}

export function useDeletePublicV1RegionsRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.regions)[':regionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1RegionsRegionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$delete']> },
      ) => parseResponse(client.public.v1.regions[':regionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1RegionsRegionIdKey() {
  return ['public', '/public/v1/regions/:regionId', 'PATCH'] as const
}

export function usePatchPublicV1RegionsRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.regions)[':regionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1RegionsRegionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$patch']> },
      ) => parseResponse(client.public.v1.regions[':regionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1DataplanesKey(
  args: InferRequestType<typeof client.public.v1.dataplanes.$get>,
) {
  return ['public', '/public/v1/dataplanes', args] as const
}

export function useGetPublicV1Dataplanes<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.dataplanes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>
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
        ? getGetPublicV1DataplanesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.dataplanes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Dataplanes<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.dataplanes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>
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
        ? getGetPublicV1DataplanesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.dataplanes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1DataplanesKey() {
  return ['public', '/public/v1/dataplanes', 'POST'] as const
}

export function usePostPublicV1Dataplanes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.dataplanes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1DataplanesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.dataplanes.$post> },
      ) => parseResponse(client.public.v1.dataplanes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1DataplanesDataplaneIdKey(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
) {
  return ['public', '/public/v1/dataplanes/:dataplaneId', args] as const
}

export function useGetPublicV1DataplanesDataplaneId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
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
        ? getGetPublicV1DataplanesDataplaneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.dataplanes[':dataplaneId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1DataplanesDataplaneId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
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
        ? getGetPublicV1DataplanesDataplaneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.dataplanes[':dataplaneId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1DataplanesDataplaneIdKey() {
  return ['public', '/public/v1/dataplanes/:dataplaneId', 'DELETE'] as const
}

export function useDeletePublicV1DataplanesDataplaneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1DataplanesDataplaneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>
        },
      ) => parseResponse(client.public.v1.dataplanes[':dataplaneId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1DataplanesDataplaneIdKey() {
  return ['public', '/public/v1/dataplanes/:dataplaneId', 'PATCH'] as const
}

export function usePatchPublicV1DataplanesDataplaneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1DataplanesDataplaneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>
        },
      ) => parseResponse(client.public.v1.dataplanes[':dataplaneId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1ConnectorDefinitionsKey(
  args: InferRequestType<typeof client.public.v1.connector_definitions.$get>,
) {
  return ['public', '/public/v1/connector_definitions', args] as const
}

export function useGetPublicV1ConnectorDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.connector_definitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>
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
        ? getGetPublicV1ConnectorDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.connector_definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1ConnectorDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.connector_definitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>
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
        ? getGetPublicV1ConnectorDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.connector_definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
  >,
) {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources',
    args,
  ] as const
}

export function useGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources',
    'POST',
  ] as const
}

export function usePostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
  >,
) {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources/:definitionId',
    args,
  ] as const
}

export function useGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
            ':definitionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
            ':definitionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources/:definitionId',
    'PUT',
  ] as const
}

export function usePutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
            ':definitionId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources/:definitionId',
    'DELETE',
  ] as const
}

export function useDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
            ':definitionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
) {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/sources', args] as const
}

export function useGetPublicV1WorkspacesWorkspaceIdDefinitionsSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.sources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceIdDefinitionsSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.sources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsSourcesKey() {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/sources', 'POST'] as const
}

export function usePostPublicV1WorkspacesWorkspaceIdDefinitionsSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1WorkspacesWorkspaceIdDefinitionsSourcesKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.sources.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
  >,
) {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/sources/:definitionId',
    args,
  ] as const
}

export function useGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/sources/:definitionId',
    'PUT',
  ] as const
}

export function usePutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/sources/:definitionId',
    'DELETE',
  ] as const
}

export function useDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
) {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/destinations', args] as const
}

export function useGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinations<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.destinations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.destinations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsKey() {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/destinations', 'POST'] as const
}

export function usePostPublicV1WorkspacesWorkspaceIdDefinitionsDestinations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.destinations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
  >,
) {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/destinations/:definitionId',
    args,
  ] as const
}

export function useGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.destinations[
            ':definitionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
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
        ? getGetPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey(args)
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
                (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
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
          client.public.v1.workspaces[':workspaceId'].definitions.destinations[
            ':definitionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/destinations/:definitionId',
    'PUT',
  ] as const
}

export function usePutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.destinations[
            ':definitionId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/destinations/:definitionId',
    'DELETE',
  ] as const
}

export function useDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].definitions.destinations[
            ':definitionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1SourcesKey(
  args: InferRequestType<typeof client.public.v1.sources.$get>,
) {
  return ['public', '/public/v1/sources', args] as const
}

export function useGetPublicV1Sources<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
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
        ? getGetPublicV1SourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Sources<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
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
        ? getGetPublicV1SourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1SourcesKey() {
  return ['public', '/public/v1/sources', 'POST'] as const
}

export function usePostPublicV1Sources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.sources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1SourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.public.v1.sources.$post> }) =>
        parseResponse(client.public.v1.sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1SourcesSourceIdKey(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
) {
  return ['public', '/public/v1/sources/:sourceId', args] as const
}

export function useGetPublicV1SourcesSourceId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
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
        ? getGetPublicV1SourcesSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.sources[':sourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1SourcesSourceId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
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
        ? getGetPublicV1SourcesSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.sources[':sourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPublicV1SourcesSourceIdKey() {
  return ['public', '/public/v1/sources/:sourceId', 'PUT'] as const
}

export function usePutPublicV1SourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPublicV1SourcesSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$put']> },
      ) => parseResponse(client.public.v1.sources[':sourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1SourcesSourceIdKey() {
  return ['public', '/public/v1/sources/:sourceId', 'DELETE'] as const
}

export function useDeletePublicV1SourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1SourcesSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$delete']> },
      ) => parseResponse(client.public.v1.sources[':sourceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1SourcesSourceIdKey() {
  return ['public', '/public/v1/sources/:sourceId', 'PATCH'] as const
}

export function usePatchPublicV1SourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1SourcesSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$patch']> },
      ) => parseResponse(client.public.v1.sources[':sourceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1DestinationsKey(
  args: InferRequestType<typeof client.public.v1.destinations.$get>,
) {
  return ['public', '/public/v1/destinations', args] as const
}

export function useGetPublicV1Destinations<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>
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
        ? getGetPublicV1DestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Destinations<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>
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
        ? getGetPublicV1DestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1DestinationsKey() {
  return ['public', '/public/v1/destinations', 'POST'] as const
}

export function usePostPublicV1Destinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.destinations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1DestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.destinations.$post> },
      ) => parseResponse(client.public.v1.destinations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1DestinationsDestinationIdKey(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
) {
  return ['public', '/public/v1/destinations/:destinationId', args] as const
}

export function useGetPublicV1DestinationsDestinationId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
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
        ? getGetPublicV1DestinationsDestinationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.destinations[':destinationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1DestinationsDestinationId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
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
        ? getGetPublicV1DestinationsDestinationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.destinations[':destinationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPublicV1DestinationsDestinationIdKey() {
  return ['public', '/public/v1/destinations/:destinationId', 'PUT'] as const
}

export function usePutPublicV1DestinationsDestinationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPublicV1DestinationsDestinationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$put']>
        },
      ) => parseResponse(client.public.v1.destinations[':destinationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1DestinationsDestinationIdKey() {
  return ['public', '/public/v1/destinations/:destinationId', 'DELETE'] as const
}

export function useDeletePublicV1DestinationsDestinationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1DestinationsDestinationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>
        },
      ) =>
        parseResponse(client.public.v1.destinations[':destinationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1DestinationsDestinationIdKey() {
  return ['public', '/public/v1/destinations/:destinationId', 'PATCH'] as const
}

export function usePatchPublicV1DestinationsDestinationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1DestinationsDestinationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>
        },
      ) =>
        parseResponse(client.public.v1.destinations[':destinationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1OauthCallbackKey(
  args: InferRequestType<typeof client.public.v1.oauth.callback.$get>,
) {
  return ['public', '/public/v1/oauth/callback', args] as const
}

export function useGetPublicV1OauthCallback<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.oauth.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
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
        ? getGetPublicV1OauthCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.oauth.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1OauthCallback<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.oauth.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
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
        ? getGetPublicV1OauthCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.oauth.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1SourcesInitiateOAuthKey() {
  return ['public', '/public/v1/sources/initiateOAuth', 'POST'] as const
}

export function usePostPublicV1SourcesInitiateOAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.sources.initiateOAuth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.sources.initiateOAuth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1SourcesInitiateOAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.sources.initiateOAuth.$post> },
      ) => parseResponse(client.public.v1.sources.initiateOAuth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1ConnectionsKey(
  args: InferRequestType<typeof client.public.v1.connections.$get>,
) {
  return ['public', '/public/v1/connections', args] as const
}

export function useGetPublicV1Connections<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>
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
        ? getGetPublicV1ConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Connections<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>
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
        ? getGetPublicV1ConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1ConnectionsKey() {
  return ['public', '/public/v1/connections', 'POST'] as const
}

export function usePostPublicV1Connections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1ConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.connections.$post> },
      ) => parseResponse(client.public.v1.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1ConnectionsConnectionIdKey(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
) {
  return ['public', '/public/v1/connections/:connectionId', args] as const
}

export function useGetPublicV1ConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
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
        ? getGetPublicV1ConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.connections[':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1ConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
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
        ? getGetPublicV1ConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.connections[':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1ConnectionsConnectionIdKey() {
  return ['public', '/public/v1/connections/:connectionId', 'DELETE'] as const
}

export function useDeletePublicV1ConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1ConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$delete']>
        },
      ) => parseResponse(client.public.v1.connections[':connectionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1ConnectionsConnectionIdKey() {
  return ['public', '/public/v1/connections/:connectionId', 'PATCH'] as const
}

export function usePatchPublicV1ConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1ConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$patch']>
        },
      ) => parseResponse(client.public.v1.connections[':connectionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1StreamsKey(
  args: InferRequestType<typeof client.public.v1.streams.$get>,
) {
  return ['public', '/public/v1/streams', args] as const
}

export function useGetPublicV1Streams<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
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
        ? getGetPublicV1StreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.streams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Streams<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
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
        ? getGetPublicV1StreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.streams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesKey(
  args: InferRequestType<typeof client.public.v1.workspaces.$get>,
) {
  return ['public', '/public/v1/workspaces', args] as const
}

export function useGetPublicV1Workspaces<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>
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
        ? getGetPublicV1WorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Workspaces<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>
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
        ? getGetPublicV1WorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1WorkspacesKey() {
  return ['public', '/public/v1/workspaces', 'POST'] as const
}

export function usePostPublicV1Workspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.workspaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1WorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.workspaces.$post> },
      ) => parseResponse(client.public.v1.workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1WorkspacesWorkspaceIdKey(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
) {
  return ['public', '/public/v1/workspaces/:workspaceId', args] as const
}

export function useGetPublicV1WorkspacesWorkspaceId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
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
        ? getGetPublicV1WorkspacesWorkspaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.workspaces[':workspaceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1WorkspacesWorkspaceId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
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
        ? getGetPublicV1WorkspacesWorkspaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.workspaces[':workspaceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1WorkspacesWorkspaceIdKey() {
  return ['public', '/public/v1/workspaces/:workspaceId', 'DELETE'] as const
}

export function useDeletePublicV1WorkspacesWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1WorkspacesWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>
        },
      ) => parseResponse(client.public.v1.workspaces[':workspaceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1WorkspacesWorkspaceIdKey() {
  return ['public', '/public/v1/workspaces/:workspaceId', 'PATCH'] as const
}

export function usePatchPublicV1WorkspacesWorkspaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1WorkspacesWorkspaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>
        },
      ) => parseResponse(client.public.v1.workspaces[':workspaceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPublicV1WorkspacesWorkspaceIdOauthCredentialsKey() {
  return ['public', '/public/v1/workspaces/:workspaceId/oauthCredentials', 'PUT'] as const
}

export function usePutPublicV1WorkspacesWorkspaceIdOauthCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPublicV1WorkspacesWorkspaceIdOauthCredentialsKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].oauthCredentials.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/oauthCredentials/:actorType/:name',
    'DELETE',
  ] as const
}

export function useDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameKey()
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
            (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.workspaces[':workspaceId'].oauthCredentials[':actorType'][
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1PermissionsPermissionIdKey(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
) {
  return ['public', '/public/v1/permissions/:permissionId', args] as const
}

export function useGetPublicV1PermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
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
        ? getGetPublicV1PermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.permissions[':permissionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1PermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
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
        ? getGetPublicV1PermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.permissions[':permissionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1PermissionsPermissionIdKey() {
  return ['public', '/public/v1/permissions/:permissionId', 'DELETE'] as const
}

export function useDeletePublicV1PermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1PermissionsPermissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>
        },
      ) => parseResponse(client.public.v1.permissions[':permissionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1PermissionsPermissionIdKey() {
  return ['public', '/public/v1/permissions/:permissionId', 'PATCH'] as const
}

export function usePatchPublicV1PermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1PermissionsPermissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>
        },
      ) => parseResponse(client.public.v1.permissions[':permissionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1PermissionsKey(
  args: InferRequestType<typeof client.public.v1.permissions.$get>,
) {
  return ['public', '/public/v1/permissions', args] as const
}

export function useGetPublicV1Permissions<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>
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
        ? getGetPublicV1PermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Permissions<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>
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
        ? getGetPublicV1PermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1PermissionsKey() {
  return ['public', '/public/v1/permissions', 'POST'] as const
}

export function usePostPublicV1Permissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1PermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.permissions.$post> },
      ) => parseResponse(client.public.v1.permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1OrganizationsKey() {
  return ['public', '/public/v1/organizations'] as const
}

export function useGetPublicV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicV1OrganizationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicV1OrganizationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPublicV1OrganizationsOrganizationIdOauthCredentialsKey() {
  return ['public', '/public/v1/organizations/:organizationId/oauthCredentials', 'PUT'] as const
}

export function usePutPublicV1OrganizationsOrganizationIdOauthCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPublicV1OrganizationsOrganizationIdOauthCredentialsKey()
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
            (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.organizations[':organizationId'].oauthCredentials.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameKey() {
  return [
    'public',
    '/public/v1/organizations/:organizationId/oauthCredentials/:actorType/:name',
    'DELETE',
  ] as const
}

export function useDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameKey()
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
            (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.organizations[':organizationId'].oauthCredentials[':actorType'][
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1UsersKey(args: InferRequestType<typeof client.public.v1.users.$get>) {
  return ['public', '/public/v1/users', args] as const
}

export function useGetPublicV1Users<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Users<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicV1GroupsKey(
  args: InferRequestType<typeof client.public.v1.groups.$get>,
) {
  return ['public', '/public/v1/groups', args] as const
}

export function useGetPublicV1Groups<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1GroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Groups<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1GroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1GroupsKey() {
  return ['public', '/public/v1/groups', 'POST'] as const
}

export function usePostPublicV1Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1GroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.public.v1.groups.$post> }) =>
        parseResponse(client.public.v1.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1GroupsGroupIdKey(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
) {
  return ['public', '/public/v1/groups/:groupId', args] as const
}

export function useGetPublicV1GroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
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
        ? getGetPublicV1GroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1GroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
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
        ? getGetPublicV1GroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1GroupsGroupIdKey() {
  return ['public', '/public/v1/groups/:groupId', 'DELETE'] as const
}

export function useDeletePublicV1GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1GroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$delete']> },
      ) => parseResponse(client.public.v1.groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1GroupsGroupIdKey() {
  return ['public', '/public/v1/groups/:groupId', 'PATCH'] as const
}

export function usePatchPublicV1GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1GroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$patch']> },
      ) => parseResponse(client.public.v1.groups[':groupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1GroupsGroupIdMembersKey(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
) {
  return ['public', '/public/v1/groups/:groupId/members', args] as const
}

export function useGetPublicV1GroupsGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
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
        ? getGetPublicV1GroupsGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.groups[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1GroupsGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
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
        ? getGetPublicV1GroupsGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.groups[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1GroupsGroupIdMembersKey() {
  return ['public', '/public/v1/groups/:groupId/members', 'POST'] as const
}

export function usePostPublicV1GroupsGroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1GroupsGroupIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>
        },
      ) => parseResponse(client.public.v1.groups[':groupId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1GroupsGroupIdMembersUserIdKey() {
  return ['public', '/public/v1/groups/:groupId/members/:userId', 'DELETE'] as const
}

export function useDeletePublicV1GroupsGroupIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1GroupsGroupIdMembersUserIdKey()
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
            (typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.groups[':groupId'].members[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1GroupsGroupIdPermissionsKey(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
) {
  return ['public', '/public/v1/groups/:groupId/permissions', args] as const
}

export function useGetPublicV1GroupsGroupIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
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
        ? getGetPublicV1GroupsGroupIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.groups[':groupId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1GroupsGroupIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
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
        ? getGetPublicV1GroupsGroupIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.groups[':groupId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1GroupsGroupIdPermissionsKey() {
  return ['public', '/public/v1/groups/:groupId/permissions', 'POST'] as const
}

export function usePostPublicV1GroupsGroupIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1GroupsGroupIdPermissionsKey()
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
            (typeof client.public.v1.groups)[':groupId']['permissions']['$post']
          >
        },
      ) => parseResponse(client.public.v1.groups[':groupId'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicV1GroupsGroupIdPermissionsPermissionIdKey() {
  return ['public', '/public/v1/groups/:groupId/permissions/:permissionId', 'DELETE'] as const
}

export function useDeletePublicV1GroupsGroupIdPermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1GroupsGroupIdPermissionsPermissionIdKey()
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
            (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.v1.groups[':groupId'].permissions[':permissionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1TagsKey(args: InferRequestType<typeof client.public.v1.tags.$get>) {
  return ['public', '/public/v1/tags', args] as const
}

export function useGetPublicV1Tags<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1Tags<TError = unknown>(
  args: InferRequestType<typeof client.public.v1.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicV1TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicV1TagsKey() {
  return ['public', '/public/v1/tags', 'POST'] as const
}

export function usePostPublicV1Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.public.v1.tags.$post> }) =>
        parseResponse(client.public.v1.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1TagsTagIdKey(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
) {
  return ['public', '/public/v1/tags/:tagId', args] as const
}

export function useGetPublicV1TagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>
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
        ? getGetPublicV1TagsTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1TagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>
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
        ? getGetPublicV1TagsTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.v1.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePublicV1TagsTagIdKey() {
  return ['public', '/public/v1/tags/:tagId', 'DELETE'] as const
}

export function useDeletePublicV1TagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.tags)[':tagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicV1TagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$delete']> },
      ) => parseResponse(client.public.v1.tags[':tagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicV1TagsTagIdKey() {
  return ['public', '/public/v1/tags/:tagId', 'PATCH'] as const
}

export function usePatchPublicV1TagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.v1.tags)[':tagId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublicV1TagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$patch']> },
      ) => parseResponse(client.public.v1.tags[':tagId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublicV1EmbeddedWidgetTokenKey() {
  return ['public', '/public/v1/embedded/widget_token', 'POST'] as const
}

export function usePostPublicV1EmbeddedWidgetToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.widget_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.embedded.widget_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1EmbeddedWidgetTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.embedded.widget_token.$post> },
      ) => parseResponse(client.public.v1.embedded.widget_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublicV1EmbeddedScopedTokenKey() {
  return ['public', '/public/v1/embedded/scoped_token', 'POST'] as const
}

export function usePostPublicV1EmbeddedScopedToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.scoped_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.public.v1.embedded.scoped_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicV1EmbeddedScopedTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.public.v1.embedded.scoped_token.$post> },
      ) => parseResponse(client.public.v1.embedded.scoped_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicV1EmbeddedOrganizationsKey() {
  return ['public', '/public/v1/embedded/organizations'] as const
}

export function useGetPublicV1EmbeddedOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicV1EmbeddedOrganizationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.embedded.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicV1EmbeddedOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicV1EmbeddedOrganizationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.v1.embedded.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ServiceAccountsTokenKey() {
  return ['v1', '/v1/service_accounts/token', 'POST'] as const
}

export function usePostV1ServiceAccountsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.service_accounts.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.service_accounts.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ServiceAccountsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.service_accounts.token.$post> },
      ) => parseResponse(client.v1.service_accounts.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainVerificationsCreateKey() {
  return ['v1', '/v1/domain_verifications/create', 'POST'] as const
}

export function usePostV1DomainVerificationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.domain_verifications.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domain_verifications.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainVerificationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domain_verifications.create.$post> },
      ) => parseResponse(client.v1.domain_verifications.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainVerificationsListKey() {
  return ['v1', '/v1/domain_verifications/list', 'POST'] as const
}

export function usePostV1DomainVerificationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain_verifications.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domain_verifications.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainVerificationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domain_verifications.list.$post> },
      ) => parseResponse(client.v1.domain_verifications.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainVerificationsDeleteKey() {
  return ['v1', '/v1/domain_verifications/delete', 'POST'] as const
}

export function usePostV1DomainVerificationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.domain_verifications.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.domain_verifications.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainVerificationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domain_verifications.delete.$post> },
      ) => parseResponse(client.v1.domain_verifications.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainVerificationsResetKey() {
  return ['v1', '/v1/domain_verifications/reset', 'POST'] as const
}

export function usePostV1DomainVerificationsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain_verifications.reset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.domain_verifications.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainVerificationsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.domain_verifications.reset.$post> },
      ) => parseResponse(client.v1.domain_verifications.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AirbyteReleasesCreateKey() {
  return ['v1', '/v1/airbyte_releases/create', 'POST'] as const
}

export function usePostV1AirbyteReleasesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.airbyte_releases.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.airbyte_releases.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AirbyteReleasesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.airbyte_releases.create.$post> },
      ) => parseResponse(client.v1.airbyte_releases.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLinkCreateKey() {
  return ['v1', '/v1/private_link/create', 'POST'] as const
}

export function usePostV1PrivateLinkCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private_link.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLinkCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private_link.create.$post> },
      ) => parseResponse(client.v1.private_link.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLinkListKey() {
  return ['v1', '/v1/private_link/list', 'POST'] as const
}

export function usePostV1PrivateLinkList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private_link.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLinkListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private_link.list.$post> },
      ) => parseResponse(client.v1.private_link.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLinkDeleteKey() {
  return ['v1', '/v1/private_link/delete', 'POST'] as const
}

export function usePostV1PrivateLinkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private_link.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLinkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private_link.delete.$post> },
      ) => parseResponse(client.v1.private_link.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLinkGetKey() {
  return ['v1', '/v1/private_link/get', 'POST'] as const
}

export function usePostV1PrivateLinkGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private_link.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLinkGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private_link.get.$post> }) =>
        parseResponse(client.v1.private_link.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLinkUpdateKey() {
  return ['v1', '/v1/private_link/update', 'POST'] as const
}

export function usePostV1PrivateLinkUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private_link.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLinkUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private_link.update.$post> },
      ) => parseResponse(client.v1.private_link.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLinkListByStatusKey() {
  return ['v1', '/v1/private_link/list_by_status', 'POST'] as const
}

export function usePostV1PrivateLinkListByStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private_link.list_by_status.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private_link.list_by_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLinkListByStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private_link.list_by_status.$post> },
      ) => parseResponse(client.v1.private_link.list_by_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdToolCallsUsageKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/tool_calls/usage', args] as const
}

export function useGetV1OrganizationsOrganizationIdToolCallsUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
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
        ? getGetV1OrganizationsOrganizationIdToolCallsUsageKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
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
          client.v1.organizations[':organizationId'].tool_calls.usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdToolCallsUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
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
        ? getGetV1OrganizationsOrganizationIdToolCallsUsageKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
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
          client.v1.organizations[':organizationId'].tool_calls.usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
