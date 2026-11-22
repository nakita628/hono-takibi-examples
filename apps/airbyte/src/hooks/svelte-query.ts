import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1SourcesSourceIdSearchMutationKey() {
  return ['v1', '/v1/sources/:sourceId/search', 'POST'] as const
}

export function getPostV1SourcesSourceIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesSourceIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search']['$post']>,
    ) {
      return parseResponse(client.v1.sources[':sourceId'].search.$post(args, options))
    },
  })
}

export function createPostV1SourcesSourceIdSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':sourceId']['search']['$post']>,
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
    const mutationDefaults = getPostV1SourcesSourceIdSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationsDestinationIdSearchMutationKey() {
  return ['v1', '/v1/destinations/:destinationId/search', 'POST'] as const
}

export function getPostV1DestinationsDestinationIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsDestinationIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>,
    ) {
      return parseResponse(client.v1.destinations[':destinationId'].search.$post(args, options))
    },
  })
}

export function createPostV1DestinationsDestinationIdSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>,
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
    const mutationDefaults = getPostV1DestinationsDestinationIdSearchMutationOptions<
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

export function getV1SourcesSourceIdSearchStatusQueryKey(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
) {
  return ['v1', '/v1/sources/:sourceId/search-status', args] as const
}

export function getV1SourcesSourceIdSearchStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesSourceIdSearchStatusQueryKey>
  >({
    queryKey: getV1SourcesSourceIdSearchStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources[':sourceId']['search-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SourcesSourceIdSearchStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesSourceIdSearchStatusQueryKey>
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
      ...getV1SourcesSourceIdSearchStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DestinationsDestinationIdSearchStatusQueryKey(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
) {
  return ['v1', '/v1/destinations/:destinationId/search-status', args] as const
}

export function getV1DestinationsDestinationIdSearchStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DestinationsDestinationIdSearchStatusQueryKey>
  >({
    queryKey: getV1DestinationsDestinationIdSearchStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.destinations[':destinationId']['search-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DestinationsDestinationIdSearchStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.destinations)[':destinationId']['search-status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DestinationsDestinationIdSearchStatusQueryKey>
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
      ...getV1DestinationsDestinationIdSearchStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1SourcesSourceIdEnablementQueryKey(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
) {
  return ['v1', '/v1/sources/:sourceId/enablement', args] as const
}

export function getV1SourcesSourceIdEnablementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourcesSourceIdEnablementQueryKey>
  >({
    queryKey: getV1SourcesSourceIdEnablementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources[':sourceId'].enablement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SourcesSourceIdEnablement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesSourceIdEnablementQueryKey>
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
      ...getV1SourcesSourceIdEnablementQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1SourcesSourceIdEnablementMutationKey() {
  return ['v1', '/v1/sources/:sourceId/enablement', 'PUT'] as const
}

export function getPutV1SourcesSourceIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SourcesSourceIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>,
    ) {
      return parseResponse(client.v1.sources[':sourceId'].enablement.$put(args, options))
    },
  })
}

export function createPutV1SourcesSourceIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>,
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
    const mutationDefaults = getPutV1SourcesSourceIdEnablementMutationOptions<
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

export function getPostV1SourcesSourceIdEnablementMutationKey() {
  return ['v1', '/v1/sources/:sourceId/enablement', 'POST'] as const
}

export function getPostV1SourcesSourceIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesSourceIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>,
    ) {
      return parseResponse(client.v1.sources[':sourceId'].enablement.$post(args, options))
    },
  })
}

export function createPostV1SourcesSourceIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>,
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
    const mutationDefaults = getPostV1SourcesSourceIdEnablementMutationOptions<
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

export function getDeleteV1SourcesSourceIdEnablementMutationKey() {
  return ['v1', '/v1/sources/:sourceId/enablement', 'DELETE'] as const
}

export function getDeleteV1SourcesSourceIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SourcesSourceIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>,
    ) {
      return parseResponse(client.v1.sources[':sourceId'].enablement.$delete(args, options))
    },
  })
}

export function createDeleteV1SourcesSourceIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>,
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
    const mutationDefaults = getDeleteV1SourcesSourceIdEnablementMutationOptions<
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

export function getV1DestinationsDestinationIdEnablementQueryKey(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>,
) {
  return ['v1', '/v1/destinations/:destinationId/enablement', args] as const
}

export function getV1DestinationsDestinationIdEnablementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DestinationsDestinationIdEnablementQueryKey>
  >({
    queryKey: getV1DestinationsDestinationIdEnablementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.destinations[':destinationId'].enablement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DestinationsDestinationIdEnablement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['enablement']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DestinationsDestinationIdEnablementQueryKey>
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
      ...getV1DestinationsDestinationIdEnablementQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1DestinationsDestinationIdEnablementMutationKey() {
  return ['v1', '/v1/destinations/:destinationId/enablement', 'PUT'] as const
}

export function getPutV1DestinationsDestinationIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DestinationsDestinationIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.destinations)[':destinationId']['enablement']['$put']
      >,
    ) {
      return parseResponse(client.v1.destinations[':destinationId'].enablement.$put(args, options))
    },
  })
}

export function createPutV1DestinationsDestinationIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$put']>,
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
    const mutationDefaults = getPutV1DestinationsDestinationIdEnablementMutationOptions<
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

export function getPostV1DestinationsDestinationIdEnablementMutationKey() {
  return ['v1', '/v1/destinations/:destinationId/enablement', 'POST'] as const
}

export function getPostV1DestinationsDestinationIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsDestinationIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.destinations)[':destinationId']['enablement']['$post']
      >,
    ) {
      return parseResponse(client.v1.destinations[':destinationId'].enablement.$post(args, options))
    },
  })
}

export function createPostV1DestinationsDestinationIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$post']>,
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
    const mutationDefaults = getPostV1DestinationsDestinationIdEnablementMutationOptions<
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

export function getDeleteV1DestinationsDestinationIdEnablementMutationKey() {
  return ['v1', '/v1/destinations/:destinationId/enablement', 'DELETE'] as const
}

export function getDeleteV1DestinationsDestinationIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DestinationsDestinationIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.destinations)[':destinationId']['enablement']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.destinations[':destinationId'].enablement.$delete(args, options),
      )
    },
  })
}

export function createDeleteV1DestinationsDestinationIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.destinations)[':destinationId']['enablement']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.destinations)[':destinationId']['enablement']['$delete']
        >,
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
    const mutationDefaults = getDeleteV1DestinationsDestinationIdEnablementMutationOptions<
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

export function getV1ConnectionsConnectionIdEnablementQueryKey(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>,
) {
  return ['v1', '/v1/connections/:connectionId/enablement', args] as const
}

export function getV1ConnectionsConnectionIdEnablementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectionsConnectionIdEnablementQueryKey>
  >({
    queryKey: getV1ConnectionsConnectionIdEnablementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connections[':connectionId'].enablement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConnectionsConnectionIdEnablement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.connections)[':connectionId']['enablement']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConnectionsConnectionIdEnablementQueryKey>
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
      ...getV1ConnectionsConnectionIdEnablementQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ConnectionsConnectionIdEnablementMutationKey() {
  return ['v1', '/v1/connections/:connectionId/enablement', 'PUT'] as const
}

export function getPutV1ConnectionsConnectionIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConnectionsConnectionIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>,
    ) {
      return parseResponse(client.v1.connections[':connectionId'].enablement.$put(args, options))
    },
  })
}

export function createPutV1ConnectionsConnectionIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>,
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
    const mutationDefaults = getPutV1ConnectionsConnectionIdEnablementMutationOptions<
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

export function getPostV1ConnectionsConnectionIdEnablementMutationKey() {
  return ['v1', '/v1/connections/:connectionId/enablement', 'POST'] as const
}

export function getPostV1ConnectionsConnectionIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsConnectionIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connections)[':connectionId']['enablement']['$post']
      >,
    ) {
      return parseResponse(client.v1.connections[':connectionId'].enablement.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsConnectionIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$post']>,
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
    const mutationDefaults = getPostV1ConnectionsConnectionIdEnablementMutationOptions<
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

export function getDeleteV1ConnectionsConnectionIdEnablementMutationKey() {
  return ['v1', '/v1/connections/:connectionId/enablement', 'DELETE'] as const
}

export function getDeleteV1ConnectionsConnectionIdEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectionsConnectionIdEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connections)[':connectionId']['enablement']['$delete']
      >,
    ) {
      return parseResponse(client.v1.connections[':connectionId'].enablement.$delete(args, options))
    },
  })
}

export function createDeleteV1ConnectionsConnectionIdEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$delete']>,
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
    const mutationDefaults = getDeleteV1ConnectionsConnectionIdEnablementMutationOptions<
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

export function getPostV1ConnectionsResolveEnablementForSyncMutationKey() {
  return ['v1', '/v1/connections/resolve_enablement_for_sync', 'POST'] as const
}

export function getPostV1ConnectionsResolveEnablementForSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.resolve_enablement_for_sync.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.resolve_enablement_for_sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsResolveEnablementForSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.resolve_enablement_for_sync.$post>,
    ) {
      return parseResponse(client.v1.connections.resolve_enablement_for_sync.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsResolveEnablementForSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.resolve_enablement_for_sync.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.resolve_enablement_for_sync.$post>,
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
    const mutationDefaults = getPostV1ConnectionsResolveEnablementForSyncMutationOptions<
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

export function getPostV1ConnectionsConnectionIdBackfillMutationKey() {
  return ['v1', '/v1/connections/:connectionId/backfill', 'POST'] as const
}

export function getPostV1ConnectionsConnectionIdBackfillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsConnectionIdBackfillMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>,
    ) {
      return parseResponse(client.v1.connections[':connectionId'].backfill.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsConnectionIdBackfill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>,
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
    const mutationDefaults = getPostV1ConnectionsConnectionIdBackfillMutationOptions<
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

export function getPostV1WorkspacesCreateMutationKey() {
  return ['v1', '/v1/workspaces/create', 'POST'] as const
}

export function getPostV1WorkspacesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.create.$post>) {
      return parseResponse(client.v1.workspaces.create.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.create.$post>,
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
    const mutationDefaults = getPostV1WorkspacesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesCreateIfNotExistMutationKey() {
  return ['v1', '/v1/workspaces/create_if_not_exist', 'POST'] as const
}

export function getPostV1WorkspacesCreateIfNotExistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.create_if_not_exist.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.create_if_not_exist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesCreateIfNotExistMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.create_if_not_exist.$post>,
    ) {
      return parseResponse(client.v1.workspaces.create_if_not_exist.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesCreateIfNotExist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.create_if_not_exist.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.create_if_not_exist.$post>,
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
    const mutationDefaults = getPostV1WorkspacesCreateIfNotExistMutationOptions<
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

export function getPostV1WorkspacesDeleteMutationKey() {
  return ['v1', '/v1/workspaces/delete', 'POST'] as const
}

export function getPostV1WorkspacesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.workspaces.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.delete.$post>) {
      return parseResponse(client.v1.workspaces.delete.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.workspaces.delete.$post>,
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
    const mutationDefaults = getPostV1WorkspacesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesListPaginatedMutationKey() {
  return ['v1', '/v1/workspaces/list_paginated', 'POST'] as const
}

export function getPostV1WorkspacesListPaginatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list_paginated.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.list_paginated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesListPaginatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.list_paginated.$post>) {
      return parseResponse(client.v1.workspaces.list_paginated.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesListPaginated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.list_paginated.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.list_paginated.$post>,
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
    const mutationDefaults = getPostV1WorkspacesListPaginatedMutationOptions<
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

export function getPostV1WorkspacesListByOrganizationIdMutationKey() {
  return ['v1', '/v1/workspaces/list_by_organization_id', 'POST'] as const
}

export function getPostV1WorkspacesListByOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.list_by_organization_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.list_by_organization_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesListByOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.list_by_organization_id.$post>,
    ) {
      return parseResponse(client.v1.workspaces.list_by_organization_id.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesListByOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.list_by_organization_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.list_by_organization_id.$post>,
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
    const mutationDefaults = getPostV1WorkspacesListByOrganizationIdMutationOptions<
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

export function getPostV1WorkspacesListByUserIdMutationKey() {
  return ['v1', '/v1/workspaces/list_by_user_id', 'POST'] as const
}

export function getPostV1WorkspacesListByUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.list_by_user_id.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.list_by_user_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesListByUserIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.list_by_user_id.$post>) {
      return parseResponse(client.v1.workspaces.list_by_user_id.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesListByUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.list_by_user_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.list_by_user_id.$post>,
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
    const mutationDefaults = getPostV1WorkspacesListByUserIdMutationOptions<
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

export function getPostV1WorkspacesGetAvailableDbtJobsMutationKey() {
  return ['v1', '/v1/workspaces/get_available_dbt_jobs', 'POST'] as const
}

export function getPostV1WorkspacesGetAvailableDbtJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetAvailableDbtJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>,
    ) {
      return parseResponse(client.v1.workspaces.get_available_dbt_jobs.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGetAvailableDbtJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetAvailableDbtJobsMutationOptions<
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

export function getPostV1WorkspacesGetMutationKey() {
  return ['v1', '/v1/workspaces/get', 'POST'] as const
}

export function getPostV1WorkspacesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.get.$post>) {
      return parseResponse(client.v1.workspaces.get.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesGetBySlugMutationKey() {
  return ['v1', '/v1/workspaces/get_by_slug', 'POST'] as const
}

export function getPostV1WorkspacesGetBySlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_by_slug.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetBySlugMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>) {
      return parseResponse(client.v1.workspaces.get_by_slug.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGetBySlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_by_slug.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetBySlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesGetByConnectionIdMutationKey() {
  return ['v1', '/v1/workspaces/get_by_connection_id', 'POST'] as const
}

export function getPostV1WorkspacesGetByConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetByConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
    ) {
      return parseResponse(client.v1.workspaces.get_by_connection_id.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGetByConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetByConnectionIdMutationOptions<
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

export function getPostV1WorkspacesGetByConnectionIdWithTombstoneMutationKey() {
  return ['v1', '/v1/workspaces/get_by_connection_id_with_tombstone', 'POST'] as const
}

export function getPostV1WorkspacesGetByConnectionIdWithTombstoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetByConnectionIdWithTombstoneMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>,
    ) {
      return parseResponse(
        client.v1.workspaces.get_by_connection_id_with_tombstone.$post(args, options),
      )
    },
  })
}

export function createPostV1WorkspacesGetByConnectionIdWithTombstone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetByConnectionIdWithTombstoneMutationOptions<
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

export function getPostV1WorkspacesGetOrganizationInfoMutationKey() {
  return ['v1', '/v1/workspaces/get_organization_info', 'POST'] as const
}

export function getPostV1WorkspacesGetOrganizationInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_organization_info.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_organization_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetOrganizationInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.get_organization_info.$post>,
    ) {
      return parseResponse(client.v1.workspaces.get_organization_info.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGetOrganizationInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.get_organization_info.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_organization_info.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetOrganizationInfoMutationOptions<
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

export function getPostV1WorkspacesUpdateMutationKey() {
  return ['v1', '/v1/workspaces/update', 'POST'] as const
}

export function getPostV1WorkspacesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.update.$post>) {
      return parseResponse(client.v1.workspaces.update.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.update.$post>,
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
    const mutationDefaults = getPostV1WorkspacesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesUpdateNameMutationKey() {
  return ['v1', '/v1/workspaces/update_name', 'POST'] as const
}

export function getPostV1WorkspacesUpdateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update_name.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.update_name.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesUpdateNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.update_name.$post>) {
      return parseResponse(client.v1.workspaces.update_name.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesUpdateName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.update_name.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.update_name.$post>,
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
    const mutationDefaults = getPostV1WorkspacesUpdateNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesUpdateOrganizationMutationKey() {
  return ['v1', '/v1/workspaces/update_organization', 'POST'] as const
}

export function getPostV1WorkspacesUpdateOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.update_organization.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.update_organization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesUpdateOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.update_organization.$post>,
    ) {
      return parseResponse(client.v1.workspaces.update_organization.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesUpdateOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.update_organization.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.update_organization.$post>,
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
    const mutationDefaults = getPostV1WorkspacesUpdateOrganizationMutationOptions<
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

export function getPostV1WorkspacesGetUsageMutationKey() {
  return ['v1', '/v1/workspaces/get_usage', 'POST'] as const
}

export function getPostV1WorkspacesGetUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_usage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_usage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetUsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workspaces.get_usage.$post>) {
      return parseResponse(client.v1.workspaces.get_usage.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGetUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workspaces.get_usage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_usage.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetUsageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkspacesGetDataWorkerAvailabilityMutationKey() {
  return ['v1', '/v1/workspaces/get_data_worker_availability', 'POST'] as const
}

export function getPostV1WorkspacesGetDataWorkerAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workspaces.get_data_worker_availability.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workspaces.get_data_worker_availability.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesGetDataWorkerAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.get_data_worker_availability.$post>,
    ) {
      return parseResponse(client.v1.workspaces.get_data_worker_availability.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesGetDataWorkerAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.workspaces.get_data_worker_availability.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workspaces.get_data_worker_availability.$post>,
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
    const mutationDefaults = getPostV1WorkspacesGetDataWorkerAvailabilityMutationOptions<
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

export function getPostV1WorkspacesTagFeedbackStatusAsDoneMutationKey() {
  return ['v1', '/v1/workspaces/tag_feedback_status_as_done', 'POST'] as const
}

export function getPostV1WorkspacesTagFeedbackStatusAsDoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkspacesTagFeedbackStatusAsDoneMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
    ) {
      return parseResponse(client.v1.workspaces.tag_feedback_status_as_done.$post(args, options))
    },
  })
}

export function createPostV1WorkspacesTagFeedbackStatusAsDone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
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
    const mutationDefaults = getPostV1WorkspacesTagFeedbackStatusAsDoneMutationOptions<
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

export function getPostV1NotificationsTryMutationKey() {
  return ['v1', '/v1/notifications/try', 'POST'] as const
}

export function getPostV1NotificationsTryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.notifications.try.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsTryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notifications.try.$post>) {
      return parseResponse(client.v1.notifications.try.$post(args, options))
    },
  })
}

export function createPostV1NotificationsTry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.notifications.try.$post>,
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
    const mutationDefaults = getPostV1NotificationsTryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NotificationsTryWebhookMutationKey() {
  return ['v1', '/v1/notifications/try_webhook', 'POST'] as const
}

export function getPostV1NotificationsTryWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.try_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.notifications.try_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsTryWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notifications.try_webhook.$post>) {
      return parseResponse(client.v1.notifications.try_webhook.$post(args, options))
    },
  })
}

export function createPostV1NotificationsTryWebhook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.notifications.try_webhook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.notifications.try_webhook.$post>,
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
    const mutationDefaults = getPostV1NotificationsTryWebhookMutationOptions<
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

export function getPostV1SourceDefinitionsUpdateMutationKey() {
  return ['v1', '/v1/source_definitions/update', 'POST'] as const
}

export function getPostV1SourceDefinitionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_definitions.update.$post>) {
      return parseResponse(client.v1.source_definitions.update.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.update.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsUpdateMutationOptions<
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

export function getPostV1SourceDefinitionsListMutationKey() {
  return ['v1', '/v1/source_definitions/list', 'POST'] as const
}

export function getPostV1SourceDefinitionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.list.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.source_definitions.list.$post(undefined, options))
    },
  })
}

export function createPostV1SourceDefinitionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1SourceDefinitionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourceDefinitionsListLatestMutationKey() {
  return ['v1', '/v1/source_definitions/list_latest', 'POST'] as const
}

export function getPostV1SourceDefinitionsListLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListLatestMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.source_definitions.list_latest.$post(undefined, options))
    },
  })
}

export function createPostV1SourceDefinitionsListLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list_latest.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1SourceDefinitionsListLatestMutationOptions<
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

export function getPostV1SourceDefinitionsGetMutationKey() {
  return ['v1', '/v1/source_definitions/get', 'POST'] as const
}

export function getPostV1SourceDefinitionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_definitions.get.$post>) {
      return parseResponse(client.v1.source_definitions.get.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_definitions.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.get.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourceDefinitionsDeleteMutationKey() {
  return ['v1', '/v1/source_definitions/delete', 'POST'] as const
}

export function getPostV1SourceDefinitionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.source_definitions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_definitions.delete.$post>) {
      return parseResponse(client.v1.source_definitions.delete.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.source_definitions.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.source_definitions.delete.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsDeleteMutationOptions<
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

export function getPostV1SourceDefinitionsListPrivateMutationKey() {
  return ['v1', '/v1/source_definitions/list_private', 'POST'] as const
}

export function getPostV1SourceDefinitionsListPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListPrivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.list_private.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsListPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list_private.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsListPrivateMutationOptions<
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

export function getPostV1SourceDefinitionsListForWorkspaceMutationKey() {
  return ['v1', '/v1/source_definitions/list_for_workspace', 'POST'] as const
}

export function getPostV1SourceDefinitionsListForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.list_for_workspace.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsListForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.list_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsListForWorkspaceMutationOptions<
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

export function getPostV1SourceDefinitionsListEnterpriseSourceStubsMutationKey() {
  return ['v1', '/v1/source_definitions/list_enterprise_source_stubs', 'POST'] as const
}

export function getPostV1SourceDefinitionsListEnterpriseSourceStubsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListEnterpriseSourceStubsMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.source_definitions.list_enterprise_source_stubs.$post(undefined, options),
      )
    },
  })
}

export function createPostV1SourceDefinitionsListEnterpriseSourceStubs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
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
    const mutationDefaults = getPostV1SourceDefinitionsListEnterpriseSourceStubsMutationOptions<
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

export function getPostV1SourceDefinitionsListEnterpriseStubsForWorkspaceMutationKey() {
  return ['v1', '/v1/source_definitions/list_enterprise_stubs_for_workspace', 'POST'] as const
}

export function getPostV1SourceDefinitionsListEnterpriseStubsForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsListEnterpriseStubsForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post
      >,
    ) {
      return parseResponse(
        client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post(args, options),
      )
    },
  })
}

export function createPostV1SourceDefinitionsListEnterpriseStubsForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post
        >,
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
    const mutationDefaults =
      getPostV1SourceDefinitionsListEnterpriseStubsForWorkspaceMutationOptions<
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

export function getPostV1SourceDefinitionsCreateCustomMutationKey() {
  return ['v1', '/v1/source_definitions/create_custom', 'POST'] as const
}

export function getPostV1SourceDefinitionsCreateCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsCreateCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.create_custom.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsCreateCustom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.create_custom.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsCreateCustomMutationOptions<
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

export function getPostV1SourceDefinitionsGetForWorkspaceMutationKey() {
  return ['v1', '/v1/source_definitions/get_for_workspace', 'POST'] as const
}

export function getPostV1SourceDefinitionsGetForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGetForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.get_for_workspace.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsGetForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.get_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsGetForWorkspaceMutationOptions<
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

export function getPostV1SourceDefinitionsGetForScopeMutationKey() {
  return ['v1', '/v1/source_definitions/get_for_scope', 'POST'] as const
}

export function getPostV1SourceDefinitionsGetForScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.get_for_scope.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.get_for_scope.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGetForScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.get_for_scope.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.get_for_scope.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsGetForScope<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.get_for_scope.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.get_for_scope.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsGetForScopeMutationOptions<
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

export function getPostV1SourceDefinitionsGrantDefinitionMutationKey() {
  return ['v1', '/v1/source_definitions/grant_definition', 'POST'] as const
}

export function getPostV1SourceDefinitionsGrantDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsGrantDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.grant_definition.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsGrantDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definitions.grant_definition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsGrantDefinitionMutationOptions<
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

export function getPostV1SourceDefinitionsRevokeDefinitionMutationKey() {
  return ['v1', '/v1/source_definitions/revoke_definition', 'POST'] as const
}

export function getPostV1SourceDefinitionsRevokeDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.source_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionsRevokeDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
    ) {
      return parseResponse(client.v1.source_definitions.revoke_definition.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionsRevokeDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.source_definitions.revoke_definition.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionsRevokeDefinitionMutationOptions<
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

export function getPostV1ActorDefinitionVersionsGetForSourceMutationKey() {
  return ['v1', '/v1/actor_definition_versions/get_for_source', 'POST'] as const
}

export function getPostV1ActorDefinitionVersionsGetForSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_for_source.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definition_versions.get_for_source.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionVersionsGetForSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.actor_definition_versions.get_for_source.$post>,
    ) {
      return parseResponse(client.v1.actor_definition_versions.get_for_source.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionVersionsGetForSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_for_source.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definition_versions.get_for_source.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionVersionsGetForSourceMutationOptions<
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

export function getPostV1SourceDefinitionSpecificationsGetMutationKey() {
  return ['v1', '/v1/source_definition_specifications/get', 'POST'] as const
}

export function getPostV1SourceDefinitionSpecificationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionSpecificationsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
    ) {
      return parseResponse(client.v1.source_definition_specifications.get.$post(args, options))
    },
  })
}

export function createPostV1SourceDefinitionSpecificationsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_definition_specifications.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionSpecificationsGetMutationOptions<
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

export function getPostV1SourceDefinitionSpecificationsGetForSourceMutationKey() {
  return ['v1', '/v1/source_definition_specifications/get_for_source', 'POST'] as const
}

export function getPostV1SourceDefinitionSpecificationsGetForSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.source_definition_specifications.get_for_source.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceDefinitionSpecificationsGetForSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.source_definition_specifications.get_for_source.$post
      >,
    ) {
      return parseResponse(
        client.v1.source_definition_specifications.get_for_source.$post(args, options),
      )
    },
  })
}

export function createPostV1SourceDefinitionSpecificationsGetForSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<typeof client.v1.source_definition_specifications.get_for_source.$post>,
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
    const mutationDefaults = getPostV1SourceDefinitionSpecificationsGetForSourceMutationOptions<
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

export function getPostV1ActorDefinitionVersionsResolveMutationKey() {
  return ['v1', '/v1/actor_definition_versions/resolve', 'POST'] as const
}

export function getPostV1ActorDefinitionVersionsResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.resolve.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definition_versions.resolve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionVersionsResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.actor_definition_versions.resolve.$post>,
    ) {
      return parseResponse(client.v1.actor_definition_versions.resolve.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionVersionsResolve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definition_versions.resolve.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definition_versions.resolve.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionVersionsResolveMutationOptions<
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

export function getPostV1ActorDefinitionVersionsGetDefaultMutationKey() {
  return ['v1', '/v1/actor_definition_versions/get_default', 'POST'] as const
}

export function getPostV1ActorDefinitionVersionsGetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_default.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definition_versions.get_default.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionVersionsGetDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.actor_definition_versions.get_default.$post>,
    ) {
      return parseResponse(client.v1.actor_definition_versions.get_default.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionVersionsGetDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_default.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definition_versions.get_default.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionVersionsGetDefaultMutationOptions<
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

export function getPostV1ActorDefinitionsCreateMutationKey() {
  return ['v1', '/v1/actor_definitions/create', 'POST'] as const
}

export function getPostV1ActorDefinitionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definitions.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.actor_definitions.create.$post>) {
      return parseResponse(client.v1.actor_definitions.create.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definitions.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definitions.create.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionsCreateMutationOptions<
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

export function getPostV1ActorDefinitionsUpdateMutationKey() {
  return ['v1', '/v1/actor_definitions/update', 'POST'] as const
}

export function getPostV1ActorDefinitionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definitions.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.actor_definitions.update.$post>) {
      return parseResponse(client.v1.actor_definitions.update.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definitions.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definitions.update.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionsUpdateMutationOptions<
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

export function getPostV1ActorDefinitionsFinishMutationKey() {
  return ['v1', '/v1/actor_definitions/finish', 'POST'] as const
}

export function getPostV1ActorDefinitionsFinishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.finish.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definitions.finish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionsFinishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.actor_definitions.finish.$post>) {
      return parseResponse(client.v1.actor_definitions.finish.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionsFinish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definitions.finish.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definitions.finish.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionsFinishMutationOptions<
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

export function getPostV1ActorDefinitionsResultMutationKey() {
  return ['v1', '/v1/actor_definitions/result', 'POST'] as const
}

export function getPostV1ActorDefinitionsResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.actor_definitions.result.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definitions.result.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionsResultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.actor_definitions.result.$post>) {
      return parseResponse(client.v1.actor_definitions.result.$post(args, options))
    },
  })
}

export function createPostV1ActorDefinitionsResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.actor_definitions.result.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definitions.result.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionsResultMutationOptions<
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

export function getPostV1DeclarativeSourceDefinitionsCreateManifestMutationKey() {
  return ['v1', '/v1/declarative_source_definitions/create_manifest', 'POST'] as const
}

export function getPostV1DeclarativeSourceDefinitionsCreateManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.declarative_source_definitions.create_manifest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.declarative_source_definitions.create_manifest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeclarativeSourceDefinitionsCreateManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.declarative_source_definitions.create_manifest.$post>,
    ) {
      return parseResponse(
        client.v1.declarative_source_definitions.create_manifest.$post(args, options),
      )
    },
  })
}

export function createPostV1DeclarativeSourceDefinitionsCreateManifest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.declarative_source_definitions.create_manifest.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.declarative_source_definitions.create_manifest.$post>,
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
    const mutationDefaults = getPostV1DeclarativeSourceDefinitionsCreateManifestMutationOptions<
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

export function getPostV1DeclarativeSourceDefinitionsUpdateActiveManifestMutationKey() {
  return ['v1', '/v1/declarative_source_definitions/update_active_manifest', 'POST'] as const
}

export function getPostV1DeclarativeSourceDefinitionsUpdateActiveManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.declarative_source_definitions.update_active_manifest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeclarativeSourceDefinitionsUpdateActiveManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.declarative_source_definitions.update_active_manifest.$post
      >,
    ) {
      return parseResponse(
        client.v1.declarative_source_definitions.update_active_manifest.$post(args, options),
      )
    },
  })
}

export function createPostV1DeclarativeSourceDefinitionsUpdateActiveManifest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          typeof client.v1.declarative_source_definitions.update_active_manifest.$post
        >,
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
    const mutationDefaults =
      getPostV1DeclarativeSourceDefinitionsUpdateActiveManifestMutationOptions<
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

export function getPostV1DeclarativeSourceDefinitionsListManifestsMutationKey() {
  return ['v1', '/v1/declarative_source_definitions/list_manifests', 'POST'] as const
}

export function getPostV1DeclarativeSourceDefinitionsListManifestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.declarative_source_definitions.list_manifests.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.declarative_source_definitions.list_manifests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeclarativeSourceDefinitionsListManifestsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.declarative_source_definitions.list_manifests.$post>,
    ) {
      return parseResponse(
        client.v1.declarative_source_definitions.list_manifests.$post(args, options),
      )
    },
  })
}

export function createPostV1DeclarativeSourceDefinitionsListManifests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.declarative_source_definitions.list_manifests.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.declarative_source_definitions.list_manifests.$post>,
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
    const mutationDefaults = getPostV1DeclarativeSourceDefinitionsListManifestsMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsCreateMutationKey() {
  return ['v1', '/v1/connector_builder_projects/create', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.create.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.create.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.create.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsCreateMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsPublishMutationKey() {
  return ['v1', '/v1/connector_builder_projects/publish', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.publish.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.publish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.publish.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.publish.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.publish.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.publish.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsPublishMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsGetBaseImageMutationKey() {
  return ['v1', '/v1/connector_builder_projects/get_base_image', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsGetBaseImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.get_base_image.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.get_base_image.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsGetBaseImageMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.get_base_image.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.get_base_image.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsGetBaseImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.get_base_image.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.get_base_image.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsGetBaseImageMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsUpdateMutationKey() {
  return ['v1', '/v1/connector_builder_projects/update', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.connector_builder_projects.update.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.update.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.update.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.connector_builder_projects.update.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.update.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsUpdateMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsDeleteMutationKey() {
  return ['v1', '/v1/connector_builder_projects/delete', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.connector_builder_projects.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.delete.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.delete.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.connector_builder_projects.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.delete.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsDeleteMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsListMutationKey() {
  return ['v1', '/v1/connector_builder_projects/list', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.list.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.list.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.list.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsListMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsGetWithManifestMutationKey() {
  return ['v1', '/v1/connector_builder_projects/get_with_manifest', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsGetWithManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsGetWithManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>,
    ) {
      return parseResponse(
        client.v1.connector_builder_projects.get_with_manifest.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorBuilderProjectsGetWithManifest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsGetWithManifestMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsGetForDefinitionIdMutationKey() {
  return ['v1', '/v1/connector_builder_projects/get_for_definition_id', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsGetForDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.connector_builder_projects.get_for_definition_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsGetForDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.connector_builder_projects.get_for_definition_id.$post
      >,
    ) {
      return parseResponse(
        client.v1.connector_builder_projects.get_for_definition_id.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorBuilderProjectsGetForDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<typeof client.v1.connector_builder_projects.get_for_definition_id.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsGetForDefinitionIdMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsUpdateTestingValuesMutationKey() {
  return ['v1', '/v1/connector_builder_projects/update_testing_values', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsUpdateTestingValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.connector_builder_projects.update_testing_values.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsUpdateTestingValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.connector_builder_projects.update_testing_values.$post
      >,
    ) {
      return parseResponse(
        client.v1.connector_builder_projects.update_testing_values.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorBuilderProjectsUpdateTestingValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<typeof client.v1.connector_builder_projects.update_testing_values.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsUpdateTestingValuesMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsReadStreamMutationKey() {
  return ['v1', '/v1/connector_builder_projects/read_stream', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsReadStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.read_stream.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.read_stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsReadStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.read_stream.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.read_stream.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsReadStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.read_stream.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.read_stream.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsReadStreamMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsFullResolveMutationKey() {
  return ['v1', '/v1/connector_builder_projects/full_resolve', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsFullResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.full_resolve.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.full_resolve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsFullResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.full_resolve.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.full_resolve.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsFullResolve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.full_resolve.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.full_resolve.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsFullResolveMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsResolveMutationKey() {
  return ['v1', '/v1/connector_builder_projects/resolve', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.resolve.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.resolve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.resolve.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.resolve.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsResolve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.resolve.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.resolve.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsResolveMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsCapabilitiesMutationKey() {
  return ['v1', '/v1/connector_builder_projects/capabilities', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsCapabilitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.capabilities.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.capabilities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsCapabilitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.capabilities.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.capabilities.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsCapabilities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.capabilities.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.capabilities.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsCapabilitiesMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsForkMutationKey() {
  return ['v1', '/v1/connector_builder_projects/fork', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.fork.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.fork.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsForkMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.fork.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.fork.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsFork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.fork.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.fork.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsForkMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsContributeCheckMutationKey() {
  return ['v1', '/v1/connector_builder_projects/contribute/check', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsContributeCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.contribute.check.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.contribute.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsContributeCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.contribute.check.$post>,
    ) {
      return parseResponse(
        client.v1.connector_builder_projects.contribute.check.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorBuilderProjectsContributeCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.connector_builder_projects.contribute.check.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.contribute.check.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsContributeCheckMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsContributeGenerateMutationKey() {
  return ['v1', '/v1/connector_builder_projects/contribute/generate', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsContributeGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.contribute.generate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.contribute.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsContributeGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.contribute.generate.$post>,
    ) {
      return parseResponse(
        client.v1.connector_builder_projects.contribute.generate.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorBuilderProjectsContributeGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.connector_builder_projects.contribute.generate.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.contribute.generate.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsContributeGenerateMutationOptions<
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

export function getPostV1ConnectorBuilderAssistProcessMutationKey() {
  return ['v1', '/v1/connector_builder_assist/process', 'POST'] as const
}

export function getPostV1ConnectorBuilderAssistProcessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_assist.process.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_assist.process.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderAssistProcessMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_assist.process.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_assist.process.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderAssistProcess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_assist.process.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_assist.process.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderAssistProcessMutationOptions<
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

export function getPostV1ConnectorBuilderAssistWarmMutationKey() {
  return ['v1', '/v1/connector_builder_assist/warm', 'POST'] as const
}

export function getPostV1ConnectorBuilderAssistWarmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_assist.warm.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_assist.warm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderAssistWarmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_builder_assist.warm.$post>) {
      return parseResponse(client.v1.connector_builder_assist.warm.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderAssistWarm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_assist.warm.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_assist.warm.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderAssistWarmMutationOptions<
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

export function getPostV1ConnectorDocumentationGetMutationKey() {
  return ['v1', '/v1/connector_documentation/get', 'POST'] as const
}

export function getPostV1ConnectorDocumentationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_documentation.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_documentation.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorDocumentationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_documentation.get.$post>) {
      return parseResponse(client.v1.connector_documentation.get.$post(args, options))
    },
  })
}

export function createPostV1ConnectorDocumentationGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_documentation.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_documentation.get.$post>,
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
    const mutationDefaults = getPostV1ConnectorDocumentationGetMutationOptions<
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

export function getPostV1SourcesCreateMutationKey() {
  return ['v1', '/v1/sources/create', 'POST'] as const
}

export function getPostV1SourcesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.create.$post>) {
      return parseResponse(client.v1.sources.create.$post(args, options))
    },
  })
}

export function createPostV1SourcesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.create.$post>,
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
    const mutationDefaults = getPostV1SourcesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesUpdateMutationKey() {
  return ['v1', '/v1/sources/update', 'POST'] as const
}

export function getPostV1SourcesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.update.$post>) {
      return parseResponse(client.v1.sources.update.$post(args, options))
    },
  })
}

export function createPostV1SourcesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.update.$post>,
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
    const mutationDefaults = getPostV1SourcesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesPartialUpdateMutationKey() {
  return ['v1', '/v1/sources/partial_update', 'POST'] as const
}

export function getPostV1SourcesPartialUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.partial_update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.partial_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesPartialUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.partial_update.$post>) {
      return parseResponse(client.v1.sources.partial_update.$post(args, options))
    },
  })
}

export function createPostV1SourcesPartialUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.partial_update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.partial_update.$post>,
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
    const mutationDefaults = getPostV1SourcesPartialUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesUpgradeVersionMutationKey() {
  return ['v1', '/v1/sources/upgrade_version', 'POST'] as const
}

export function getPostV1SourcesUpgradeVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.upgrade_version.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sources.upgrade_version.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesUpgradeVersionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.upgrade_version.$post>) {
      return parseResponse(client.v1.sources.upgrade_version.$post(args, options))
    },
  })
}

export function createPostV1SourcesUpgradeVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.sources.upgrade_version.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sources.upgrade_version.$post>,
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
    const mutationDefaults = getPostV1SourcesUpgradeVersionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesListMutationKey() {
  return ['v1', '/v1/sources/list', 'POST'] as const
}

export function getPostV1SourcesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.list.$post>) {
      return parseResponse(client.v1.sources.list.$post(args, options))
    },
  })
}

export function createPostV1SourcesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.sources.list.$post>,
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
    const mutationDefaults = getPostV1SourcesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesListPaginatedMutationKey() {
  return ['v1', '/v1/sources/list_paginated', 'POST'] as const
}

export function getPostV1SourcesListPaginatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list_paginated.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.list_paginated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesListPaginatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.list_paginated.$post>) {
      return parseResponse(client.v1.sources.list_paginated.$post(args, options))
    },
  })
}

export function createPostV1SourcesListPaginated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.list_paginated.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.list_paginated.$post>,
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
    const mutationDefaults = getPostV1SourcesListPaginatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesGetMutationKey() {
  return ['v1', '/v1/sources/get', 'POST'] as const
}

export function getPostV1SourcesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.get.$post>) {
      return parseResponse(client.v1.sources.get.$post(args, options))
    },
  })
}

export function createPostV1SourcesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.sources.get.$post>,
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
    const mutationDefaults = getPostV1SourcesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesGetWithMetadataMutationKey() {
  return ['v1', '/v1/sources/get_with_metadata', 'POST'] as const
}

export function getPostV1SourcesGetWithMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.get_with_metadata.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.get_with_metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesGetWithMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.get_with_metadata.$post>) {
      return parseResponse(client.v1.sources.get_with_metadata.$post(args, options))
    },
  })
}

export function createPostV1SourcesGetWithMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.get_with_metadata.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.get_with_metadata.$post>,
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
    const mutationDefaults = getPostV1SourcesGetWithMetadataMutationOptions<
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

export function getPostV1SourcesMostRecentSourceActorCatalogMutationKey() {
  return ['v1', '/v1/sources/most_recent_source_actor_catalog', 'POST'] as const
}

export function getPostV1SourcesMostRecentSourceActorCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesMostRecentSourceActorCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
    ) {
      return parseResponse(client.v1.sources.most_recent_source_actor_catalog.$post(args, options))
    },
  })
}

export function createPostV1SourcesMostRecentSourceActorCatalog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
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
    const mutationDefaults = getPostV1SourcesMostRecentSourceActorCatalogMutationOptions<
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

export function getPostV1SourcesSearchMutationKey() {
  return ['v1', '/v1/sources/search', 'POST'] as const
}

export function getPostV1SourcesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sources.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.search.$post>) {
      return parseResponse(client.v1.sources.search.$post(args, options))
    },
  })
}

export function createPostV1SourcesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.search.$post>,
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
    const mutationDefaults = getPostV1SourcesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesDeleteMutationKey() {
  return ['v1', '/v1/sources/delete', 'POST'] as const
}

export function getPostV1SourcesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.delete.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sources.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.delete.$post>) {
      return parseResponse(client.v1.sources.delete.$post(args, options))
    },
  })
}

export function createPostV1SourcesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sources.delete.$post>,
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
    const mutationDefaults = getPostV1SourcesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WorkspacesWorkspaceIdSkillsDocsQueryKey(
  args: InferRequestType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>,
) {
  return ['v1', '/v1/workspaces/:workspaceId/skills/docs', args] as const
}

export function getV1WorkspacesWorkspaceIdSkillsDocsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkspacesWorkspaceIdSkillsDocsQueryKey>
  >({
    queryKey: getV1WorkspacesWorkspaceIdSkillsDocsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workspaces[':workspaceId'].skills.docs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkspacesWorkspaceIdSkillsDocs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkspacesWorkspaceIdSkillsDocsQueryKey>
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
      ...getV1WorkspacesWorkspaceIdSkillsDocsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1DestinationsDestinationIdExecuteMutationKey() {
  return ['v1', '/v1/destinations/:destinationId/execute', 'POST'] as const
}

export function getPostV1DestinationsDestinationIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsDestinationIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>,
    ) {
      return parseResponse(client.v1.destinations[':destinationId'].execute.$post(args, options))
    },
  })
}

export function createPostV1DestinationsDestinationIdExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>,
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
    const mutationDefaults = getPostV1DestinationsDestinationIdExecuteMutationOptions<
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

export function getPostV1SourcesSourceIdExecuteMutationKey() {
  return ['v1', '/v1/sources/:sourceId/execute', 'POST'] as const
}

export function getPostV1SourcesSourceIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesSourceIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>,
    ) {
      return parseResponse(client.v1.sources[':sourceId'].execute.$post(args, options))
    },
  })
}

export function createPostV1SourcesSourceIdExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>,
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
    const mutationDefaults = getPostV1SourcesSourceIdExecuteMutationOptions<
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

export function getPostV1SourcesCheckConnectionMutationKey() {
  return ['v1', '/v1/sources/check_connection', 'POST'] as const
}

export function getPostV1SourcesCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.check_connection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCheckConnectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.check_connection.$post>) {
      return parseResponse(client.v1.sources.check_connection.$post(args, options))
    },
  })
}

export function createPostV1SourcesCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.check_connection.$post>,
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
    const mutationDefaults = getPostV1SourcesCheckConnectionMutationOptions<
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

export function getPostV1SourcesCheckConnectionForUpdateMutationKey() {
  return ['v1', '/v1/sources/check_connection_for_update', 'POST'] as const
}

export function getPostV1SourcesCheckConnectionForUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesCheckConnectionForUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
    ) {
      return parseResponse(client.v1.sources.check_connection_for_update.$post(args, options))
    },
  })
}

export function createPostV1SourcesCheckConnectionForUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.check_connection_for_update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
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
    const mutationDefaults = getPostV1SourcesCheckConnectionForUpdateMutationOptions<
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

export function getPostV1SourcesDiscoverSchemaMutationKey() {
  return ['v1', '/v1/sources/discover_schema', 'POST'] as const
}

export function getPostV1SourcesDiscoverSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.discover_schema.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.discover_schema.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesDiscoverSchemaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.discover_schema.$post>) {
      return parseResponse(client.v1.sources.discover_schema.$post(args, options))
    },
  })
}

export function createPostV1SourcesDiscoverSchema<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.discover_schema.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.discover_schema.$post>,
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
    const mutationDefaults = getPostV1SourcesDiscoverSchemaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourcesApplySchemaChangesMutationKey() {
  return ['v1', '/v1/sources/apply_schema_changes', 'POST'] as const
}

export function getPostV1SourcesApplySchemaChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sources.apply_schema_changes.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sources.apply_schema_changes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesApplySchemaChangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sources.apply_schema_changes.$post>) {
      return parseResponse(client.v1.sources.apply_schema_changes.$post(args, options))
    },
  })
}

export function createPostV1SourcesApplySchemaChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.sources.apply_schema_changes.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sources.apply_schema_changes.$post>,
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
    const mutationDefaults = getPostV1SourcesApplySchemaChangesMutationOptions<
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

export function getPostV1SourcesWriteDiscoverCatalogResultMutationKey() {
  return ['v1', '/v1/sources/write_discover_catalog_result', 'POST'] as const
}

export function getPostV1SourcesWriteDiscoverCatalogResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sources.write_discover_catalog_result.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourcesWriteDiscoverCatalogResultMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
    ) {
      return parseResponse(client.v1.sources.write_discover_catalog_result.$post(args, options))
    },
  })
}

export function createPostV1SourcesWriteDiscoverCatalogResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.sources.write_discover_catalog_result.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
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
    const mutationDefaults = getPostV1SourcesWriteDiscoverCatalogResultMutationOptions<
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

export function getPostV1DestinationsWriteDiscoverCatalogResultMutationKey() {
  return ['v1', '/v1/destinations/write_discover_catalog_result', 'POST'] as const
}

export function getPostV1DestinationsWriteDiscoverCatalogResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.write_discover_catalog_result.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.write_discover_catalog_result.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsWriteDiscoverCatalogResultMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destinations.write_discover_catalog_result.$post>,
    ) {
      return parseResponse(
        client.v1.destinations.write_discover_catalog_result.$post(args, options),
      )
    },
  })
}

export function createPostV1DestinationsWriteDiscoverCatalogResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.write_discover_catalog_result.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.write_discover_catalog_result.$post>,
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
    const mutationDefaults = getPostV1DestinationsWriteDiscoverCatalogResultMutationOptions<
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

export function getPostV1DestinationDefinitionsUpdateMutationKey() {
  return ['v1', '/v1/destination_definitions/update', 'POST'] as const
}

export function getPostV1DestinationDefinitionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.update.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.update.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.update.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsUpdateMutationOptions<
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

export function getPostV1DestinationDefinitionsListMutationKey() {
  return ['v1', '/v1/destination_definitions/list', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.destination_definitions.list.$post(undefined, options))
    },
  })
}

export function createPostV1DestinationDefinitionsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1DestinationDefinitionsListMutationOptions<
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

export function getPostV1DestinationDefinitionsListLatestMutationKey() {
  return ['v1', '/v1/destination_definitions/list_latest', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_latest.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListLatestMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.destination_definitions.list_latest.$post(undefined, options))
    },
  })
}

export function createPostV1DestinationDefinitionsListLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list_latest.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1DestinationDefinitionsListLatestMutationOptions<
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

export function getPostV1DestinationDefinitionsGetMutationKey() {
  return ['v1', '/v1/destination_definitions/get', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destination_definitions.get.$post>) {
      return parseResponse(client.v1.destination_definitions.get.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.get.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsGetMutationOptions<
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

export function getPostV1DestinationDefinitionsDeleteMutationKey() {
  return ['v1', '/v1/destination_definitions/delete', 'POST'] as const
}

export function getPostV1DestinationDefinitionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.delete.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.destination_definitions.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsDeleteMutationOptions<
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

export function getPostV1DestinationDefinitionsListPrivateMutationKey() {
  return ['v1', '/v1/destination_definitions/list_private', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_private.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListPrivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.list_private.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsListPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list_private.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsListPrivateMutationOptions<
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

export function getPostV1DestinationDefinitionsListForWorkspaceMutationKey() {
  return ['v1', '/v1/destination_definitions/list_for_workspace', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.list_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
    ) {
      return parseResponse(
        client.v1.destination_definitions.list_for_workspace.$post(args, options),
      )
    },
  })
}

export function createPostV1DestinationDefinitionsListForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.list_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsListForWorkspaceMutationOptions<
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

export function getPostV1DestinationDefinitionsListEnterpriseStubsForWorkspaceMutationKey() {
  return ['v1', '/v1/destination_definitions/list_enterprise_stubs_for_workspace', 'POST'] as const
}

export function getPostV1DestinationDefinitionsListEnterpriseStubsForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsListEnterpriseStubsForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
      >,
    ) {
      return parseResponse(
        client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post(args, options),
      )
    },
  })
}

export function createPostV1DestinationDefinitionsListEnterpriseStubsForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
        >,
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
    const mutationDefaults =
      getPostV1DestinationDefinitionsListEnterpriseStubsForWorkspaceMutationOptions<
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

export function getPostV1DestinationDefinitionsCreateCustomMutationKey() {
  return ['v1', '/v1/destination_definitions/create_custom', 'POST'] as const
}

export function getPostV1DestinationDefinitionsCreateCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.create_custom.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsCreateCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.create_custom.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsCreateCustom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.create_custom.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsCreateCustomMutationOptions<
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

export function getPostV1DestinationDefinitionsGetForWorkspaceMutationKey() {
  return ['v1', '/v1/destination_definitions/get_for_workspace', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGetForWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_workspace.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGetForWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.get_for_workspace.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsGetForWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_workspace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsGetForWorkspaceMutationOptions<
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

export function getPostV1DestinationDefinitionsGetForScopeMutationKey() {
  return ['v1', '/v1/destination_definitions/get_for_scope', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGetForScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_scope.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.get_for_scope.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGetForScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.get_for_scope.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.get_for_scope.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsGetForScope<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.get_for_scope.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.get_for_scope.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsGetForScopeMutationOptions<
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

export function getPostV1DestinationDefinitionsGrantDefinitionMutationKey() {
  return ['v1', '/v1/destination_definitions/grant_definition', 'POST'] as const
}

export function getPostV1DestinationDefinitionsGrantDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definitions.grant_definition.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsGrantDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.grant_definition.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsGrantDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definitions.grant_definition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsGrantDefinitionMutationOptions<
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

export function getPostV1DestinationDefinitionsRevokeDefinitionMutationKey() {
  return ['v1', '/v1/destination_definitions/revoke_definition', 'POST'] as const
}

export function getPostV1DestinationDefinitionsRevokeDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destination_definitions.revoke_definition.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionsRevokeDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
    ) {
      return parseResponse(client.v1.destination_definitions.revoke_definition.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionsRevokeDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.destination_definitions.revoke_definition.$post>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionsRevokeDefinitionMutationOptions<
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

export function getPostV1ActorDefinitionVersionsGetForDestinationMutationKey() {
  return ['v1', '/v1/actor_definition_versions/get_for_destination', 'POST'] as const
}

export function getPostV1ActorDefinitionVersionsGetForDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.actor_definition_versions.get_for_destination.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.actor_definition_versions.get_for_destination.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ActorDefinitionVersionsGetForDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.actor_definition_versions.get_for_destination.$post>,
    ) {
      return parseResponse(
        client.v1.actor_definition_versions.get_for_destination.$post(args, options),
      )
    },
  })
}

export function createPostV1ActorDefinitionVersionsGetForDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.actor_definition_versions.get_for_destination.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.actor_definition_versions.get_for_destination.$post>,
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
    const mutationDefaults = getPostV1ActorDefinitionVersionsGetForDestinationMutationOptions<
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

export function getPostV1DestinationDefinitionSpecificationsGetMutationKey() {
  return ['v1', '/v1/destination_definition_specifications/get', 'POST'] as const
}

export function getPostV1DestinationDefinitionSpecificationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_definition_specifications.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionSpecificationsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
    ) {
      return parseResponse(client.v1.destination_definition_specifications.get.$post(args, options))
    },
  })
}

export function createPostV1DestinationDefinitionSpecificationsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_definition_specifications.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
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
    const mutationDefaults = getPostV1DestinationDefinitionSpecificationsGetMutationOptions<
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

export function getPostV1DestinationDefinitionSpecificationsGetForDestinationMutationKey() {
  return ['v1', '/v1/destination_definition_specifications/get_for_destination', 'POST'] as const
}

export function getPostV1DestinationDefinitionSpecificationsGetForDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      typeof client.v1.destination_definition_specifications.get_for_destination.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationDefinitionSpecificationsGetForDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.destination_definition_specifications.get_for_destination.$post
      >,
    ) {
      return parseResponse(
        client.v1.destination_definition_specifications.get_for_destination.$post(args, options),
      )
    },
  })
}

export function createPostV1DestinationDefinitionSpecificationsGetForDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          typeof client.v1.destination_definition_specifications.get_for_destination.$post
        >,
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
    const mutationDefaults =
      getPostV1DestinationDefinitionSpecificationsGetForDestinationMutationOptions<
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

export function getPostV1DestinationsCreateMutationKey() {
  return ['v1', '/v1/destinations/create', 'POST'] as const
}

export function getPostV1DestinationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.create.$post>) {
      return parseResponse(client.v1.destinations.create.$post(args, options))
    },
  })
}

export function createPostV1DestinationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.create.$post>,
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
    const mutationDefaults = getPostV1DestinationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationsUpdateMutationKey() {
  return ['v1', '/v1/destinations/update', 'POST'] as const
}

export function getPostV1DestinationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.update.$post>) {
      return parseResponse(client.v1.destinations.update.$post(args, options))
    },
  })
}

export function createPostV1DestinationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.update.$post>,
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
    const mutationDefaults = getPostV1DestinationsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationsPartialUpdateMutationKey() {
  return ['v1', '/v1/destinations/partial_update', 'POST'] as const
}

export function getPostV1DestinationsPartialUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.partial_update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.partial_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsPartialUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.partial_update.$post>) {
      return parseResponse(client.v1.destinations.partial_update.$post(args, options))
    },
  })
}

export function createPostV1DestinationsPartialUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.partial_update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.partial_update.$post>,
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
    const mutationDefaults = getPostV1DestinationsPartialUpdateMutationOptions<
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

export function getPostV1DestinationsUpgradeVersionMutationKey() {
  return ['v1', '/v1/destinations/upgrade_version', 'POST'] as const
}

export function getPostV1DestinationsUpgradeVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.destinations.upgrade_version.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destinations.upgrade_version.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsUpgradeVersionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.upgrade_version.$post>) {
      return parseResponse(client.v1.destinations.upgrade_version.$post(args, options))
    },
  })
}

export function createPostV1DestinationsUpgradeVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.destinations.upgrade_version.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destinations.upgrade_version.$post>,
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
    const mutationDefaults = getPostV1DestinationsUpgradeVersionMutationOptions<
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

export function getPostV1DestinationsListMutationKey() {
  return ['v1', '/v1/destinations/list', 'POST'] as const
}

export function getPostV1DestinationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.list.$post>) {
      return parseResponse(client.v1.destinations.list.$post(args, options))
    },
  })
}

export function createPostV1DestinationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.list.$post>,
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
    const mutationDefaults = getPostV1DestinationsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationsListPaginatedMutationKey() {
  return ['v1', '/v1/destinations/list_paginated', 'POST'] as const
}

export function getPostV1DestinationsListPaginatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.list_paginated.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.list_paginated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsListPaginatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.list_paginated.$post>) {
      return parseResponse(client.v1.destinations.list_paginated.$post(args, options))
    },
  })
}

export function createPostV1DestinationsListPaginated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.list_paginated.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.list_paginated.$post>,
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
    const mutationDefaults = getPostV1DestinationsListPaginatedMutationOptions<
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

export function getPostV1DestinationsGetMutationKey() {
  return ['v1', '/v1/destinations/get', 'POST'] as const
}

export function getPostV1DestinationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.get.$post>) {
      return parseResponse(client.v1.destinations.get.$post(args, options))
    },
  })
}

export function createPostV1DestinationsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.get.$post>,
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
    const mutationDefaults = getPostV1DestinationsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationsDiscoverSchemaMutationKey() {
  return ['v1', '/v1/destinations/discover_schema', 'POST'] as const
}

export function getPostV1DestinationsDiscoverSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.discover_schema.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.discover_schema.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsDiscoverSchemaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.discover_schema.$post>) {
      return parseResponse(client.v1.destinations.discover_schema.$post(args, options))
    },
  })
}

export function createPostV1DestinationsDiscoverSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.discover_schema.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.discover_schema.$post>,
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
    const mutationDefaults = getPostV1DestinationsDiscoverSchemaMutationOptions<
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

export function getPostV1DestinationsGetCatalogForConnectionMutationKey() {
  return ['v1', '/v1/destinations/get_catalog_for_connection', 'POST'] as const
}

export function getPostV1DestinationsGetCatalogForConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.get_catalog_for_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.get_catalog_for_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsGetCatalogForConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destinations.get_catalog_for_connection.$post>,
    ) {
      return parseResponse(client.v1.destinations.get_catalog_for_connection.$post(args, options))
    },
  })
}

export function createPostV1DestinationsGetCatalogForConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.get_catalog_for_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.get_catalog_for_connection.$post>,
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
    const mutationDefaults = getPostV1DestinationsGetCatalogForConnectionMutationOptions<
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

export function getPostV1DestinationsSearchMutationKey() {
  return ['v1', '/v1/destinations/search', 'POST'] as const
}

export function getPostV1DestinationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.search.$post>) {
      return parseResponse(client.v1.destinations.search.$post(args, options))
    },
  })
}

export function createPostV1DestinationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.search.$post>,
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
    const mutationDefaults = getPostV1DestinationsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationsCheckConnectionMutationKey() {
  return ['v1', '/v1/destinations/check_connection', 'POST'] as const
}

export function getPostV1DestinationsCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCheckConnectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.check_connection.$post>) {
      return parseResponse(client.v1.destinations.check_connection.$post(args, options))
    },
  })
}

export function createPostV1DestinationsCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.check_connection.$post>,
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
    const mutationDefaults = getPostV1DestinationsCheckConnectionMutationOptions<
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

export function getPostV1DestinationsCheckConnectionForUpdateMutationKey() {
  return ['v1', '/v1/destinations/check_connection_for_update', 'POST'] as const
}

export function getPostV1DestinationsCheckConnectionForUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destinations.check_connection_for_update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsCheckConnectionForUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
    ) {
      return parseResponse(client.v1.destinations.check_connection_for_update.$post(args, options))
    },
  })
}

export function createPostV1DestinationsCheckConnectionForUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destinations.check_connection_for_update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
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
    const mutationDefaults = getPostV1DestinationsCheckConnectionForUpdateMutationOptions<
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

export function getPostV1DestinationsDeleteMutationKey() {
  return ['v1', '/v1/destinations/delete', 'POST'] as const
}

export function getPostV1DestinationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.destinations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.destinations.delete.$post>) {
      return parseResponse(client.v1.destinations.delete.$post(args, options))
    },
  })
}

export function createPostV1DestinationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.destinations.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.destinations.delete.$post>,
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
    const mutationDefaults = getPostV1DestinationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsCreateMutationKey() {
  return ['v1', '/v1/connections/create', 'POST'] as const
}

export function getPostV1ConnectionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.create.$post>) {
      return parseResponse(client.v1.connections.create.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.create.$post>,
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
    const mutationDefaults = getPostV1ConnectionsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsUpdateMutationKey() {
  return ['v1', '/v1/connections/update', 'POST'] as const
}

export function getPostV1ConnectionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.update.$post>) {
      return parseResponse(client.v1.connections.update.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.update.$post>,
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
    const mutationDefaults = getPostV1ConnectionsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsUpdateWithReasonMutationKey() {
  return ['v1', '/v1/connections/update_with_reason', 'POST'] as const
}

export function getPostV1ConnectionsUpdateWithReasonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.update_with_reason.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.update_with_reason.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsUpdateWithReasonMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.update_with_reason.$post>,
    ) {
      return parseResponse(client.v1.connections.update_with_reason.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsUpdateWithReason<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.update_with_reason.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.update_with_reason.$post>,
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
    const mutationDefaults = getPostV1ConnectionsUpdateWithReasonMutationOptions<
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

export function getPostV1ConnectionsListMutationKey() {
  return ['v1', '/v1/connections/list', 'POST'] as const
}

export function getPostV1ConnectionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.list.$post>) {
      return parseResponse(client.v1.connections.list.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.list.$post>,
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
    const mutationDefaults = getPostV1ConnectionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsListPaginatedMutationKey() {
  return ['v1', '/v1/connections/list_paginated', 'POST'] as const
}

export function getPostV1ConnectionsListPaginatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_paginated.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.list_paginated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsListPaginatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.list_paginated.$post>) {
      return parseResponse(client.v1.connections.list_paginated.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsListPaginated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.list_paginated.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.list_paginated.$post>,
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
    const mutationDefaults = getPostV1ConnectionsListPaginatedMutationOptions<
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

export function getPostV1ConnectionsListAllMutationKey() {
  return ['v1', '/v1/connections/list_all', 'POST'] as const
}

export function getPostV1ConnectionsListAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.list_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsListAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.list_all.$post>) {
      return parseResponse(client.v1.connections.list_all.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsListAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.list_all.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.list_all.$post>,
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
    const mutationDefaults = getPostV1ConnectionsListAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsStatusMutationKey() {
  return ['v1', '/v1/connections/status', 'POST'] as const
}

export function getPostV1ConnectionsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.status.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.status.$post>) {
      return parseResponse(client.v1.connections.status.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.status.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.status.$post>,
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
    const mutationDefaults = getPostV1ConnectionsStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsSyncProgressMutationKey() {
  return ['v1', '/v1/connections/sync_progress', 'POST'] as const
}

export function getPostV1ConnectionsSyncProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync_progress.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.sync_progress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsSyncProgressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.sync_progress.$post>) {
      return parseResponse(client.v1.connections.sync_progress.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsSyncProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.sync_progress.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.sync_progress.$post>,
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
    const mutationDefaults = getPostV1ConnectionsSyncProgressMutationOptions<
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

export function getPostV1ConnectionsHistoryUptimeMutationKey() {
  return ['v1', '/v1/connections/history/uptime', 'POST'] as const
}

export function getPostV1ConnectionsHistoryUptimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.history.uptime.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.history.uptime.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsHistoryUptimeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.history.uptime.$post>) {
      return parseResponse(client.v1.connections.history.uptime.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsHistoryUptime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.history.uptime.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.history.uptime.$post>,
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
    const mutationDefaults = getPostV1ConnectionsHistoryUptimeMutationOptions<
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

export function getPostV1ConnectionsHistoryDataMutationKey() {
  return ['v1', '/v1/connections/history/data', 'POST'] as const
}

export function getPostV1ConnectionsHistoryDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.history.data.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.history.data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsHistoryDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.history.data.$post>) {
      return parseResponse(client.v1.connections.history.data.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsHistoryData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.history.data.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.history.data.$post>,
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
    const mutationDefaults = getPostV1ConnectionsHistoryDataMutationOptions<
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

export function getPostV1ConnectionsStreamHistoryMutationKey() {
  return ['v1', '/v1/connections/stream_history', 'POST'] as const
}

export function getPostV1ConnectionsStreamHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.stream_history.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.stream_history.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsStreamHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.stream_history.$post>) {
      return parseResponse(client.v1.connections.stream_history.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsStreamHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.stream_history.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.stream_history.$post>,
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
    const mutationDefaults = getPostV1ConnectionsStreamHistoryMutationOptions<
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

export function getPostV1ConnectionsEventsGetMutationKey() {
  return ['v1', '/v1/connections/events/get', 'POST'] as const
}

export function getPostV1ConnectionsEventsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.events.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.events.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsEventsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.events.get.$post>) {
      return parseResponse(client.v1.connections.events.get.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsEventsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.events.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.events.get.$post>,
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
    const mutationDefaults = getPostV1ConnectionsEventsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsEventsListMutationKey() {
  return ['v1', '/v1/connections/events/list', 'POST'] as const
}

export function getPostV1ConnectionsEventsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.events.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.events.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsEventsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.events.list.$post>) {
      return parseResponse(client.v1.connections.events.list.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsEventsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.events.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.events.list.$post>,
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
    const mutationDefaults = getPostV1ConnectionsEventsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsEventsListMinimalMutationKey() {
  return ['v1', '/v1/connections/events/list_minimal', 'POST'] as const
}

export function getPostV1ConnectionsEventsListMinimalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.events.list_minimal.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.events.list_minimal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsEventsListMinimalMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.events.list_minimal.$post>,
    ) {
      return parseResponse(client.v1.connections.events.list_minimal.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsEventsListMinimal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.events.list_minimal.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.events.list_minimal.$post>,
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
    const mutationDefaults = getPostV1ConnectionsEventsListMinimalMutationOptions<
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

export function getPostV1ConnectionsEventsBackfillMutationKey() {
  return ['v1', '/v1/connections/events/backfill', 'POST'] as const
}

export function getPostV1ConnectionsEventsBackfillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.events.backfill.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.events.backfill.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsEventsBackfillMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.events.backfill.$post>) {
      return parseResponse(client.v1.connections.events.backfill.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsEventsBackfill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.events.backfill.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.events.backfill.$post>,
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
    const mutationDefaults = getPostV1ConnectionsEventsBackfillMutationOptions<
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

export function getPostV1ConnectionsEventsListForJobMutationKey() {
  return ['v1', '/v1/connections/events/list_for_job', 'POST'] as const
}

export function getPostV1ConnectionsEventsListForJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.events.list_for_job.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.events.list_for_job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsEventsListForJobMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.events.list_for_job.$post>,
    ) {
      return parseResponse(client.v1.connections.events.list_for_job.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsEventsListForJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.events.list_for_job.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.events.list_for_job.$post>,
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
    const mutationDefaults = getPostV1ConnectionsEventsListForJobMutationOptions<
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

export function getPostV1ConnectionsLastJobPerStreamMutationKey() {
  return ['v1', '/v1/connections/last_job_per_stream', 'POST'] as const
}

export function getPostV1ConnectionsLastJobPerStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.last_job_per_stream.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.last_job_per_stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsLastJobPerStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.last_job_per_stream.$post>,
    ) {
      return parseResponse(client.v1.connections.last_job_per_stream.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsLastJobPerStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.last_job_per_stream.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.last_job_per_stream.$post>,
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
    const mutationDefaults = getPostV1ConnectionsLastJobPerStreamMutationOptions<
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

export function getPostV1ConnectionsGetMutationKey() {
  return ['v1', '/v1/connections/get', 'POST'] as const
}

export function getPostV1ConnectionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.get.$post>) {
      return parseResponse(client.v1.connections.get.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.get.$post>,
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
    const mutationDefaults = getPostV1ConnectionsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsGetForJobMutationKey() {
  return ['v1', '/v1/connections/getForJob', 'POST'] as const
}

export function getPostV1ConnectionsGetForJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.getForJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.getForJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsGetForJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.getForJob.$post>) {
      return parseResponse(client.v1.connections.getForJob.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsGetForJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.getForJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.getForJob.$post>,
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
    const mutationDefaults = getPostV1ConnectionsGetForJobMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsListByActorDefinitionMutationKey() {
  return ['v1', '/v1/connections/list_by_actor_definition', 'POST'] as const
}

export function getPostV1ConnectionsListByActorDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.list_by_actor_definition.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.list_by_actor_definition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsListByActorDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.list_by_actor_definition.$post>,
    ) {
      return parseResponse(client.v1.connections.list_by_actor_definition.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsListByActorDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.list_by_actor_definition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.list_by_actor_definition.$post>,
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
    const mutationDefaults = getPostV1ConnectionsListByActorDefinitionMutationOptions<
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

export function getPostV1ConnectionsApplySchemaChangesMutationKey() {
  return ['v1', '/v1/connections/apply_schema_changes', 'POST'] as const
}

export function getPostV1ConnectionsApplySchemaChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.connections.apply_schema_changes.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.connections.apply_schema_changes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsApplySchemaChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.apply_schema_changes.$post>,
    ) {
      return parseResponse(client.v1.connections.apply_schema_changes.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsApplySchemaChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.connections.apply_schema_changes.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.connections.apply_schema_changes.$post>,
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
    const mutationDefaults = getPostV1ConnectionsApplySchemaChangesMutationOptions<
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

export function getPostV1ConnectionsPostprocessDiscoveredCatalogMutationKey() {
  return ['v1', '/v1/connections/postprocess_discovered_catalog', 'POST'] as const
}

export function getPostV1ConnectionsPostprocessDiscoveredCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.postprocess_discovered_catalog.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.postprocess_discovered_catalog.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsPostprocessDiscoveredCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.postprocess_discovered_catalog.$post>,
    ) {
      return parseResponse(
        client.v1.connections.postprocess_discovered_catalog.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectionsPostprocessDiscoveredCatalog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.postprocess_discovered_catalog.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.postprocess_discovered_catalog.$post>,
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
    const mutationDefaults = getPostV1ConnectionsPostprocessDiscoveredCatalogMutationOptions<
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

export function getPostV1ConnectionsGetContextMutationKey() {
  return ['v1', '/v1/connections/get_context', 'POST'] as const
}

export function getPostV1ConnectionsGetContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.get_context.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.get_context.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsGetContextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.get_context.$post>) {
      return parseResponse(client.v1.connections.get_context.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsGetContext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.get_context.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.get_context.$post>,
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
    const mutationDefaults = getPostV1ConnectionsGetContextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1StateGetMutationKey() {
  return ['v1', '/v1/state/get', 'POST'] as const
}

export function getPostV1StateGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.state.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StateGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.state.get.$post>) {
      return parseResponse(client.v1.state.get.$post(args, options))
    },
  })
}

export function createPostV1StateGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.state.get.$post>,
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
    const mutationDefaults = getPostV1StateGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1StateCreateOrUpdateMutationKey() {
  return ['v1', '/v1/state/create_or_update', 'POST'] as const
}

export function getPostV1StateCreateOrUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.create_or_update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.state.create_or_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StateCreateOrUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.state.create_or_update.$post>) {
      return parseResponse(client.v1.state.create_or_update.$post(args, options))
    },
  })
}

export function createPostV1StateCreateOrUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.state.create_or_update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.state.create_or_update.$post>,
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
    const mutationDefaults = getPostV1StateCreateOrUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1StateCreateOrUpdateSafeMutationKey() {
  return ['v1', '/v1/state/create_or_update_safe', 'POST'] as const
}

export function getPostV1StateCreateOrUpdateSafeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.state.create_or_update_safe.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.state.create_or_update_safe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StateCreateOrUpdateSafeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.state.create_or_update_safe.$post>) {
      return parseResponse(client.v1.state.create_or_update_safe.$post(args, options))
    },
  })
}

export function createPostV1StateCreateOrUpdateSafe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.state.create_or_update_safe.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.state.create_or_update_safe.$post>,
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
    const mutationDefaults = getPostV1StateCreateOrUpdateSafeMutationOptions<
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

export function getPostV1ConnectionsSearchMutationKey() {
  return ['v1', '/v1/connections/search', 'POST'] as const
}

export function getPostV1ConnectionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.search.$post>) {
      return parseResponse(client.v1.connections.search.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.search.$post>,
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
    const mutationDefaults = getPostV1ConnectionsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsDeleteMutationKey() {
  return ['v1', '/v1/connections/delete', 'POST'] as const
}

export function getPostV1ConnectionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.connections.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.delete.$post>) {
      return parseResponse(client.v1.connections.delete.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.connections.delete.$post>,
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
    const mutationDefaults = getPostV1ConnectionsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsSyncMutationKey() {
  return ['v1', '/v1/connections/sync', 'POST'] as const
}

export function getPostV1ConnectionsSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connections.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.sync.$post>) {
      return parseResponse(client.v1.connections.sync.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.sync.$post>,
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
    const mutationDefaults = getPostV1ConnectionsSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsResetMutationKey() {
  return ['v1', '/v1/connections/reset', 'POST'] as const
}

export function getPostV1ConnectionsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.reset.$post>) {
      return parseResponse(client.v1.connections.reset.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.reset.$post>,
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
    const mutationDefaults = getPostV1ConnectionsResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsClearMutationKey() {
  return ['v1', '/v1/connections/clear', 'POST'] as const
}

export function getPostV1ConnectionsClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.clear.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.clear.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsClearMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.clear.$post>) {
      return parseResponse(client.v1.connections.clear.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.clear.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.clear.$post>,
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
    const mutationDefaults = getPostV1ConnectionsClearMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectionsAutoDisableMutationKey() {
  return ['v1', '/v1/connections/auto_disable', 'POST'] as const
}

export function getPostV1ConnectionsAutoDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.auto_disable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.auto_disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsAutoDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.auto_disable.$post>) {
      return parseResponse(client.v1.connections.auto_disable.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsAutoDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.auto_disable.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.auto_disable.$post>,
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
    const mutationDefaults = getPostV1ConnectionsAutoDisableMutationOptions<
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

export function getPostV1ConnectionsClearStreamMutationKey() {
  return ['v1', '/v1/connections/clear/stream', 'POST'] as const
}

export function getPostV1ConnectionsClearStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.clear.stream.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.clear.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsClearStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.clear.stream.$post>) {
      return parseResponse(client.v1.connections.clear.stream.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsClearStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.clear.stream.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.clear.stream.$post>,
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
    const mutationDefaults = getPostV1ConnectionsClearStreamMutationOptions<
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

export function getPostV1ConnectionsResetStreamMutationKey() {
  return ['v1', '/v1/connections/reset/stream', 'POST'] as const
}

export function getPostV1ConnectionsResetStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.reset.stream.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.reset.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsResetStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.reset.stream.$post>) {
      return parseResponse(client.v1.connections.reset.stream.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsResetStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connections.reset.stream.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.reset.stream.$post>,
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
    const mutationDefaults = getPostV1ConnectionsResetStreamMutationOptions<
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

export function getPostV1ConnectionsRefreshMutationKey() {
  return ['v1', '/v1/connections/refresh', 'POST'] as const
}

export function getPostV1ConnectionsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connections.refresh.$post>) {
      return parseResponse(client.v1.connections.refresh.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connections.refresh.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connections.refresh.$post>,
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
    const mutationDefaults = getPostV1ConnectionsRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OperationsCheckMutationKey() {
  return ['v1', '/v1/operations/check', 'POST'] as const
}

export function getPostV1OperationsCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.check.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.operations.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.check.$post>) {
      return parseResponse(client.v1.operations.check.$post(args, options))
    },
  })
}

export function createPostV1OperationsCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.check.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.check.$post>,
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
    const mutationDefaults = getPostV1OperationsCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OperationsCreateMutationKey() {
  return ['v1', '/v1/operations/create', 'POST'] as const
}

export function getPostV1OperationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.operations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.create.$post>) {
      return parseResponse(client.v1.operations.create.$post(args, options))
    },
  })
}

export function createPostV1OperationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.create.$post>,
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
    const mutationDefaults = getPostV1OperationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OperationsUpdateMutationKey() {
  return ['v1', '/v1/operations/update', 'POST'] as const
}

export function getPostV1OperationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.operations.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.update.$post>) {
      return parseResponse(client.v1.operations.update.$post(args, options))
    },
  })
}

export function createPostV1OperationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.update.$post>,
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
    const mutationDefaults = getPostV1OperationsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OperationsListMutationKey() {
  return ['v1', '/v1/operations/list', 'POST'] as const
}

export function getPostV1OperationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.operations.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.list.$post>) {
      return parseResponse(client.v1.operations.list.$post(args, options))
    },
  })
}

export function createPostV1OperationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.list.$post>,
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
    const mutationDefaults = getPostV1OperationsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OperationsGetMutationKey() {
  return ['v1', '/v1/operations/get', 'POST'] as const
}

export function getPostV1OperationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.operations.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.get.$post>) {
      return parseResponse(client.v1.operations.get.$post(args, options))
    },
  })
}

export function createPostV1OperationsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.operations.get.$post>,
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
    const mutationDefaults = getPostV1OperationsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OperationsDeleteMutationKey() {
  return ['v1', '/v1/operations/delete', 'POST'] as const
}

export function getPostV1OperationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.operations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OperationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.operations.delete.$post>) {
      return parseResponse(client.v1.operations.delete.$post(args, options))
    },
  })
}

export function createPostV1OperationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.operations.delete.$post>,
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
    const mutationDefaults = getPostV1OperationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SchedulerSourcesCheckConnectionMutationKey() {
  return ['v1', '/v1/scheduler/sources/check_connection', 'POST'] as const
}

export function getPostV1SchedulerSourcesCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.check_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulerSourcesCheckConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
    ) {
      return parseResponse(client.v1.scheduler.sources.check_connection.$post(args, options))
    },
  })
}

export function createPostV1SchedulerSourcesCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scheduler.sources.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
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
    const mutationDefaults = getPostV1SchedulerSourcesCheckConnectionMutationOptions<
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

export function getPostV1SchedulerSourcesDiscoverSchemaMutationKey() {
  return ['v1', '/v1/scheduler/sources/discover_schema', 'POST'] as const
}

export function getPostV1SchedulerSourcesDiscoverSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.sources.discover_schema.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulerSourcesDiscoverSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
    ) {
      return parseResponse(client.v1.scheduler.sources.discover_schema.$post(args, options))
    },
  })
}

export function createPostV1SchedulerSourcesDiscoverSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scheduler.sources.discover_schema.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
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
    const mutationDefaults = getPostV1SchedulerSourcesDiscoverSchemaMutationOptions<
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

export function getPostV1SchedulerDestinationsCheckConnectionMutationKey() {
  return ['v1', '/v1/scheduler/destinations/check_connection', 'POST'] as const
}

export function getPostV1SchedulerDestinationsCheckConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scheduler.destinations.check_connection.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulerDestinationsCheckConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
    ) {
      return parseResponse(client.v1.scheduler.destinations.check_connection.$post(args, options))
    },
  })
}

export function createPostV1SchedulerDestinationsCheckConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scheduler.destinations.check_connection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
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
    const mutationDefaults = getPostV1SchedulerDestinationsCheckConnectionMutationOptions<
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

export function getPostV1SourceOauthsOauthParamsCreateMutationKey() {
  return ['v1', '/v1/source_oauths/oauth_params/create', 'POST'] as const
}

export function getPostV1SourceOauthsOauthParamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsOauthParamsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
    ) {
      return parseResponse(client.v1.source_oauths.oauth_params.create.$post(args, options))
    },
  })
}

export function createPostV1SourceOauthsOauthParamsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.oauth_params.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
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
    const mutationDefaults = getPostV1SourceOauthsOauthParamsCreateMutationOptions<
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

export function getPostV1SourceOauthsGetConsentUrlMutationKey() {
  return ['v1', '/v1/source_oauths/get_consent_url', 'POST'] as const
}

export function getPostV1SourceOauthsGetConsentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsGetConsentUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>) {
      return parseResponse(client.v1.source_oauths.get_consent_url.$post(args, options))
    },
  })
}

export function createPostV1SourceOauthsGetConsentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.get_consent_url.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>,
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
    const mutationDefaults = getPostV1SourceOauthsGetConsentUrlMutationOptions<
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

export function getPostV1SourceOauthsGetEmbeddedConsentUrlMutationKey() {
  return ['v1', '/v1/source_oauths/get_embedded_consent_url', 'POST'] as const
}

export function getPostV1SourceOauthsGetEmbeddedConsentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsGetEmbeddedConsentUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>,
    ) {
      return parseResponse(client.v1.source_oauths.get_embedded_consent_url.$post(args, options))
    },
  })
}

export function createPostV1SourceOauthsGetEmbeddedConsentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>,
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
    const mutationDefaults = getPostV1SourceOauthsGetEmbeddedConsentUrlMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsGetOauthConsentUrlMutationKey() {
  return ['v1', '/v1/connector_builder_projects/get_oauth_consent_url', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsGetOauthConsentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsGetOauthConsentUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post
      >,
    ) {
      return parseResponse(
        client.v1.connector_builder_projects.get_oauth_consent_url.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorBuilderProjectsGetOauthConsentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsGetOauthConsentUrlMutationOptions<
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

export function getPostV1SourceOauthsCompleteOauthMutationKey() {
  return ['v1', '/v1/source_oauths/complete_oauth', 'POST'] as const
}

export function getPostV1SourceOauthsCompleteOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.source_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsCompleteOauthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>) {
      return parseResponse(client.v1.source_oauths.complete_oauth.$post(args, options))
    },
  })
}

export function createPostV1SourceOauthsCompleteOauth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.complete_oauth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>,
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
    const mutationDefaults = getPostV1SourceOauthsCompleteOauthMutationOptions<
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

export function getPostV1ConnectorBuilderProjectsCompleteOauthMutationKey() {
  return ['v1', '/v1/connector_builder_projects/complete_oauth', 'POST'] as const
}

export function getPostV1ConnectorBuilderProjectsCompleteOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_builder_projects.complete_oauth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_builder_projects.complete_oauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorBuilderProjectsCompleteOauthMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_builder_projects.complete_oauth.$post>,
    ) {
      return parseResponse(client.v1.connector_builder_projects.complete_oauth.$post(args, options))
    },
  })
}

export function createPostV1ConnectorBuilderProjectsCompleteOauth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_builder_projects.complete_oauth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_builder_projects.complete_oauth.$post>,
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
    const mutationDefaults = getPostV1ConnectorBuilderProjectsCompleteOauthMutationOptions<
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

export function getPostV1SourceOauthsRevokeMutationKey() {
  return ['v1', '/v1/source_oauths/revoke', 'POST'] as const
}

export function getPostV1SourceOauthsRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_oauths.revoke.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_oauths.revoke.$post>) {
      return parseResponse(client.v1.source_oauths.revoke.$post(args, options))
    },
  })
}

export function createPostV1SourceOauthsRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_oauths.revoke.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.revoke.$post>,
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
    const mutationDefaults = getPostV1SourceOauthsRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SourceOauthsGetScopesMutationKey() {
  return ['v1', '/v1/source_oauths/get_scopes', 'POST'] as const
}

export function getPostV1SourceOauthsGetScopesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_oauths.get_scopes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.source_oauths.get_scopes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceOauthsGetScopesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.source_oauths.get_scopes.$post>) {
      return parseResponse(client.v1.source_oauths.get_scopes.$post(args, options))
    },
  })
}

export function createPostV1SourceOauthsGetScopes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.source_oauths.get_scopes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.source_oauths.get_scopes.$post>,
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
    const mutationDefaults = getPostV1SourceOauthsGetScopesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DestinationOauthsGetConsentUrlMutationKey() {
  return ['v1', '/v1/destination_oauths/get_consent_url', 'POST'] as const
}

export function getPostV1DestinationOauthsGetConsentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.get_consent_url.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationOauthsGetConsentUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
    ) {
      return parseResponse(client.v1.destination_oauths.get_consent_url.$post(args, options))
    },
  })
}

export function createPostV1DestinationOauthsGetConsentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_oauths.get_consent_url.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
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
    const mutationDefaults = getPostV1DestinationOauthsGetConsentUrlMutationOptions<
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

export function getPostV1DestinationOauthsCompleteOauthMutationKey() {
  return ['v1', '/v1/destination_oauths/complete_oauth', 'POST'] as const
}

export function getPostV1DestinationOauthsCompleteOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.complete_oauth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationOauthsCompleteOauthMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
    ) {
      return parseResponse(client.v1.destination_oauths.complete_oauth.$post(args, options))
    },
  })
}

export function createPostV1DestinationOauthsCompleteOauth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_oauths.complete_oauth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
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
    const mutationDefaults = getPostV1DestinationOauthsCompleteOauthMutationOptions<
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

export function getPostV1DestinationOauthsOauthParamsCreateMutationKey() {
  return ['v1', '/v1/destination_oauths/oauth_params/create', 'POST'] as const
}

export function getPostV1DestinationOauthsOauthParamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.destination_oauths.oauth_params.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DestinationOauthsOauthParamsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
    ) {
      return parseResponse(client.v1.destination_oauths.oauth_params.create.$post(args, options))
    },
  })
}

export function createPostV1DestinationOauthsOauthParamsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.destination_oauths.oauth_params.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
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
    const mutationDefaults = getPostV1DestinationOauthsOauthParamsCreateMutationOptions<
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

export function getPostV1WebBackendCheckUpdatesMutationKey() {
  return ['v1', '/v1/web_backend/check_updates', 'POST'] as const
}

export function getPostV1WebBackendCheckUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.check_updates.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendCheckUpdatesMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.web_backend.check_updates.$post(undefined, options))
    },
  })
}

export function createPostV1WebBackendCheckUpdates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.check_updates.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1WebBackendCheckUpdatesMutationOptions<
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

export function getPostV1WebBackendMappersValidateMutationKey() {
  return ['v1', '/v1/web_backend/mappers/validate', 'POST'] as const
}

export function getPostV1WebBackendMappersValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.mappers.validate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.mappers.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendMappersValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.mappers.validate.$post>) {
      return parseResponse(client.v1.web_backend.mappers.validate.$post(args, options))
    },
  })
}

export function createPostV1WebBackendMappersValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.mappers.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.mappers.validate.$post>,
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
    const mutationDefaults = getPostV1WebBackendMappersValidateMutationOptions<
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

export function getPostV1WebBackendConnectionsListMutationKey() {
  return ['v1', '/v1/web_backend/connections/list', 'POST'] as const
}

export function getPostV1WebBackendConnectionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.connections.list.$post>) {
      return parseResponse(client.v1.web_backend.connections.list.$post(args, options))
    },
  })
}

export function createPostV1WebBackendConnectionsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.list.$post>,
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
    const mutationDefaults = getPostV1WebBackendConnectionsListMutationOptions<
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

export function getPostV1WebBackendConnectionsStatusCountsMutationKey() {
  return ['v1', '/v1/web_backend/connections/status_counts', 'POST'] as const
}

export function getPostV1WebBackendConnectionsStatusCountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.status_counts.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.status_counts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsStatusCountsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.web_backend.connections.status_counts.$post>,
    ) {
      return parseResponse(client.v1.web_backend.connections.status_counts.$post(args, options))
    },
  })
}

export function createPostV1WebBackendConnectionsStatusCounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.status_counts.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.status_counts.$post>,
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
    const mutationDefaults = getPostV1WebBackendConnectionsStatusCountsMutationOptions<
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

export function getPostV1WebBackendConnectionsGetMutationKey() {
  return ['v1', '/v1/web_backend/connections/get', 'POST'] as const
}

export function getPostV1WebBackendConnectionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.connections.get.$post>) {
      return parseResponse(client.v1.web_backend.connections.get.$post(args, options))
    },
  })
}

export function createPostV1WebBackendConnectionsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.get.$post>,
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
    const mutationDefaults = getPostV1WebBackendConnectionsGetMutationOptions<
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

export function getPostV1WebBackendConnectionsCreateMutationKey() {
  return ['v1', '/v1/web_backend/connections/create', 'POST'] as const
}

export function getPostV1WebBackendConnectionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
    ) {
      return parseResponse(client.v1.web_backend.connections.create.$post(args, options))
    },
  })
}

export function createPostV1WebBackendConnectionsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
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
    const mutationDefaults = getPostV1WebBackendConnectionsCreateMutationOptions<
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

export function getPostV1WebBackendConnectionsUpdateMutationKey() {
  return ['v1', '/v1/web_backend/connections/update', 'POST'] as const
}

export function getPostV1WebBackendConnectionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.connections.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendConnectionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
    ) {
      return parseResponse(client.v1.web_backend.connections.update.$post(args, options))
    },
  })
}

export function createPostV1WebBackendConnectionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.connections.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
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
    const mutationDefaults = getPostV1WebBackendConnectionsUpdateMutationOptions<
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

export function getPostV1WebBackendDescribeCronExpressionMutationKey() {
  return ['v1', '/v1/web_backend/describe_cron_expression', 'POST'] as const
}

export function getPostV1WebBackendDescribeCronExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.describe_cron_expression.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.describe_cron_expression.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendDescribeCronExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.web_backend.describe_cron_expression.$post>,
    ) {
      return parseResponse(client.v1.web_backend.describe_cron_expression.$post(args, options))
    },
  })
}

export function createPostV1WebBackendDescribeCronExpression<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.describe_cron_expression.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.describe_cron_expression.$post>,
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
    const mutationDefaults = getPostV1WebBackendDescribeCronExpressionMutationOptions<
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

export function getPostV1WebBackendStateGetTypeMutationKey() {
  return ['v1', '/v1/web_backend/state/get_type', 'POST'] as const
}

export function getPostV1WebBackendStateGetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.state.get_type.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.state.get_type.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendStateGetTypeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.state.get_type.$post>) {
      return parseResponse(client.v1.web_backend.state.get_type.$post(args, options))
    },
  })
}

export function createPostV1WebBackendStateGetType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.state.get_type.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.state.get_type.$post>,
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
    const mutationDefaults = getPostV1WebBackendStateGetTypeMutationOptions<
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

export function getPostV1WebBackendWorkspaceStateMutationKey() {
  return ['v1', '/v1/web_backend/workspace/state', 'POST'] as const
}

export function getPostV1WebBackendWorkspaceStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.web_backend.workspace.state.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.web_backend.workspace.state.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebBackendWorkspaceStateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.web_backend.workspace.state.$post>) {
      return parseResponse(client.v1.web_backend.workspace.state.$post(args, options))
    },
  })
}

export function createPostV1WebBackendWorkspaceState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.web_backend.workspace.state.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.web_backend.workspace.state.$post>,
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
    const mutationDefaults = getPostV1WebBackendWorkspaceStateMutationOptions<
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

export function getV1WebBackendConfigQueryKey() {
  return ['v1', '/v1/web_backend/config'] as const
}

export function getV1WebBackendConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebBackendConfigQueryKey>
  >({
    queryKey: getV1WebBackendConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.web_backend.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WebBackendConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.web_backend.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebBackendConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WebBackendConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1JobsCreateMutationKey() {
  return ['v1', '/v1/jobs/create', 'POST'] as const
}

export function getPostV1JobsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.create.$post>) {
      return parseResponse(client.v1.jobs.create.$post(args, options))
    },
  })
}

export function createPostV1JobsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.create.$post>,
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
    const mutationDefaults = getPostV1JobsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsJobSuccessWithAttemptNumberMutationKey() {
  return ['v1', '/v1/jobs/job_success_with_attempt_number', 'POST'] as const
}

export function getPostV1JobsJobSuccessWithAttemptNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.job_success_with_attempt_number.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.job_success_with_attempt_number.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsJobSuccessWithAttemptNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.jobs.job_success_with_attempt_number.$post>,
    ) {
      return parseResponse(client.v1.jobs.job_success_with_attempt_number.$post(args, options))
    },
  })
}

export function createPostV1JobsJobSuccessWithAttemptNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.job_success_with_attempt_number.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.job_success_with_attempt_number.$post>,
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
    const mutationDefaults = getPostV1JobsJobSuccessWithAttemptNumberMutationOptions<
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

export function getPostV1JobsListMutationKey() {
  return ['v1', '/v1/jobs/list', 'POST'] as const
}

export function getPostV1JobsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.list.$post>) {
      return parseResponse(client.v1.jobs.list.$post(args, options))
    },
  })
}

export function createPostV1JobsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.list.$post>,
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
    const mutationDefaults = getPostV1JobsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsListForWorkspacesMutationKey() {
  return ['v1', '/v1/jobs/list_for_workspaces', 'POST'] as const
}

export function getPostV1JobsListForWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.list_for_workspaces.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.list_for_workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsListForWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.list_for_workspaces.$post>) {
      return parseResponse(client.v1.jobs.list_for_workspaces.$post(args, options))
    },
  })
}

export function createPostV1JobsListForWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.list_for_workspaces.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.list_for_workspaces.$post>,
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
    const mutationDefaults = getPostV1JobsListForWorkspacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsGetMutationKey() {
  return ['v1', '/v1/jobs/get', 'POST'] as const
}

export function getPostV1JobsGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.jobs.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get.$post>) {
      return parseResponse(client.v1.jobs.get.$post(args, options))
    },
  })
}

export function createPostV1JobsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get.$post>,
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
    const mutationDefaults = getPostV1JobsGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsGetLastReplicationJobMutationKey() {
  return ['v1', '/v1/jobs/get_last_replication_job', 'POST'] as const
}

export function getPostV1JobsGetLastReplicationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetLastReplicationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>) {
      return parseResponse(client.v1.jobs.get_last_replication_job.$post(args, options))
    },
  })
}

export function createPostV1JobsGetLastReplicationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>,
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
    const mutationDefaults = getPostV1JobsGetLastReplicationJobMutationOptions<
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

export function getPostV1JobsGetLastReplicationJobWithCancelMutationKey() {
  return ['v1', '/v1/jobs/get_last_replication_job_with_cancel', 'POST'] as const
}

export function getPostV1JobsGetLastReplicationJobWithCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetLastReplicationJobWithCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>,
    ) {
      return parseResponse(client.v1.jobs.get_last_replication_job_with_cancel.$post(args, options))
    },
  })
}

export function createPostV1JobsGetLastReplicationJobWithCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>,
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
    const mutationDefaults = getPostV1JobsGetLastReplicationJobWithCancelMutationOptions<
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

export function getPostV1JobsGetWithoutLogsMutationKey() {
  return ['v1', '/v1/jobs/get_without_logs', 'POST'] as const
}

export function getPostV1JobsGetWithoutLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_without_logs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_without_logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetWithoutLogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_without_logs.$post>) {
      return parseResponse(client.v1.jobs.get_without_logs.$post(args, options))
    },
  })
}

export function createPostV1JobsGetWithoutLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_without_logs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_without_logs.$post>,
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
    const mutationDefaults = getPostV1JobsGetWithoutLogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsGetLightMutationKey() {
  return ['v1', '/v1/jobs/get_light', 'POST'] as const
}

export function getPostV1JobsGetLightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_light.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_light.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetLightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_light.$post>) {
      return parseResponse(client.v1.jobs.get_light.$post(args, options))
    },
  })
}

export function createPostV1JobsGetLight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_light.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_light.$post>,
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
    const mutationDefaults = getPostV1JobsGetLightMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsCancelMutationKey() {
  return ['v1', '/v1/jobs/cancel', 'POST'] as const
}

export function getPostV1JobsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.cancel.$post>) {
      return parseResponse(client.v1.jobs.cancel.$post(args, options))
    },
  })
}

export function createPostV1JobsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.cancel.$post>,
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
    const mutationDefaults = getPostV1JobsCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsGetDebugInfoMutationKey() {
  return ['v1', '/v1/jobs/get_debug_info', 'POST'] as const
}

export function getPostV1JobsGetDebugInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_debug_info.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_debug_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetDebugInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_debug_info.$post>) {
      return parseResponse(client.v1.jobs.get_debug_info.$post(args, options))
    },
  })
}

export function createPostV1JobsGetDebugInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_debug_info.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_debug_info.$post>,
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
    const mutationDefaults = getPostV1JobsGetDebugInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsGetInputMutationKey() {
  return ['v1', '/v1/jobs/get_input', 'POST'] as const
}

export function getPostV1JobsGetInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_input.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.get_input.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetInputMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.get_input.$post>) {
      return parseResponse(client.v1.jobs.get_input.$post(args, options))
    },
  })
}

export function createPostV1JobsGetInput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.get_input.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.get_input.$post>,
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
    const mutationDefaults = getPostV1JobsGetInputMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsFailNonTerminalMutationKey() {
  return ['v1', '/v1/jobs/fail_non_terminal', 'POST'] as const
}

export function getPostV1JobsFailNonTerminalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.fail_non_terminal.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.jobs.fail_non_terminal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsFailNonTerminalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.fail_non_terminal.$post>) {
      return parseResponse(client.v1.jobs.fail_non_terminal.$post(args, options))
    },
  })
}

export function createPostV1JobsFailNonTerminal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.jobs.fail_non_terminal.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.jobs.fail_non_terminal.$post>,
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
    const mutationDefaults = getPostV1JobsFailNonTerminalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsReportJobStartMutationKey() {
  return ['v1', '/v1/jobs/reportJobStart', 'POST'] as const
}

export function getPostV1JobsReportJobStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.reportJobStart.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.reportJobStart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsReportJobStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.reportJobStart.$post>) {
      return parseResponse(client.v1.jobs.reportJobStart.$post(args, options))
    },
  })
}

export function createPostV1JobsReportJobStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.reportJobStart.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.reportJobStart.$post>,
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
    const mutationDefaults = getPostV1JobsReportJobStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsSetJobQueuedMutationKey() {
  return ['v1', '/v1/jobs/setJobQueued', 'POST'] as const
}

export function getPostV1JobsSetJobQueuedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.setJobQueued.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.setJobQueued.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsSetJobQueuedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.setJobQueued.$post>) {
      return parseResponse(client.v1.jobs.setJobQueued.$post(args, options))
    },
  })
}

export function createPostV1JobsSetJobQueued<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.setJobQueued.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.setJobQueued.$post>,
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
    const mutationDefaults = getPostV1JobsSetJobQueuedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsCancelQueuedJobMutationKey() {
  return ['v1', '/v1/jobs/cancelQueuedJob', 'POST'] as const
}

export function getPostV1JobsCancelQueuedJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancelQueuedJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.cancelQueuedJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsCancelQueuedJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.cancelQueuedJob.$post>) {
      return parseResponse(client.v1.jobs.cancelQueuedJob.$post(args, options))
    },
  })
}

export function createPostV1JobsCancelQueuedJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.cancelQueuedJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.cancelQueuedJob.$post>,
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
    const mutationDefaults = getPostV1JobsCancelQueuedJobMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsCheckDataWorkerCapacityMutationKey() {
  return ['v1', '/v1/jobs/checkDataWorkerCapacity', 'POST'] as const
}

export function getPostV1JobsCheckDataWorkerCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsCheckDataWorkerCapacityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>) {
      return parseResponse(client.v1.jobs.checkDataWorkerCapacity.$post(args, options))
    },
  })
}

export function createPostV1JobsCheckDataWorkerCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>,
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
    const mutationDefaults = getPostV1JobsCheckDataWorkerCapacityMutationOptions<
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

export function getPostV1JobsGetWebhookConfigMutationKey() {
  return ['v1', '/v1/jobs/getWebhookConfig', 'POST'] as const
}

export function getPostV1JobsGetWebhookConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.getWebhookConfig.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.getWebhookConfig.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsGetWebhookConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.getWebhookConfig.$post>) {
      return parseResponse(client.v1.jobs.getWebhookConfig.$post(args, options))
    },
  })
}

export function createPostV1JobsGetWebhookConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.getWebhookConfig.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.getWebhookConfig.$post>,
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
    const mutationDefaults = getPostV1JobsGetWebhookConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsJobFailureMutationKey() {
  return ['v1', '/v1/jobs/job_failure', 'POST'] as const
}

export function getPostV1JobsJobFailureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.job_failure.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.job_failure.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsJobFailureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.job_failure.$post>) {
      return parseResponse(client.v1.jobs.job_failure.$post(args, options))
    },
  })
}

export function createPostV1JobsJobFailure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.job_failure.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.job_failure.$post>,
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
    const mutationDefaults = getPostV1JobsJobFailureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsDeleteStreamResetRecordsMutationKey() {
  return ['v1', '/v1/jobs/delete_stream_reset_records', 'POST'] as const
}

export function getPostV1JobsDeleteStreamResetRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.jobs.delete_stream_reset_records.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.jobs.delete_stream_reset_records.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsDeleteStreamResetRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.jobs.delete_stream_reset_records.$post>,
    ) {
      return parseResponse(client.v1.jobs.delete_stream_reset_records.$post(args, options))
    },
  })
}

export function createPostV1JobsDeleteStreamResetRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.jobs.delete_stream_reset_records.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.jobs.delete_stream_reset_records.$post>,
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
    const mutationDefaults = getPostV1JobsDeleteStreamResetRecordsMutationOptions<
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

export function getPostV1JobsExplainMutationKey() {
  return ['v1', '/v1/jobs/explain', 'POST'] as const
}

export function getPostV1JobsExplainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.explain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.explain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsExplainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.explain.$post>) {
      return parseResponse(client.v1.jobs.explain.$post(args, options))
    },
  })
}

export function createPostV1JobsExplain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.explain.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.explain.$post>,
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
    const mutationDefaults = getPostV1JobsExplainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsEvaluateOutlierMutationKey() {
  return ['v1', '/v1/jobs/evaluate_outlier', 'POST'] as const
}

export function getPostV1JobsEvaluateOutlierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.evaluate_outlier.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.evaluate_outlier.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsEvaluateOutlierMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.evaluate_outlier.$post>) {
      return parseResponse(client.v1.jobs.evaluate_outlier.$post(args, options))
    },
  })
}

export function createPostV1JobsEvaluateOutlier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.evaluate_outlier.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.evaluate_outlier.$post>,
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
    const mutationDefaults = getPostV1JobsEvaluateOutlierMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsFinalizeMutationKey() {
  return ['v1', '/v1/jobs/finalize', 'POST'] as const
}

export function getPostV1JobsFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.finalize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.finalize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsFinalizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.finalize.$post>) {
      return parseResponse(client.v1.jobs.finalize.$post(args, options))
    },
  })
}

export function createPostV1JobsFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.finalize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.finalize.$post>,
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
    const mutationDefaults = getPostV1JobsFinalizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersGetMutationKey() {
  return ['v1', '/v1/users/get', 'POST'] as const
}

export function getPostV1UsersGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.users.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.get.$post>) {
      return parseResponse(client.v1.users.get.$post(args, options))
    },
  })
}

export function createPostV1UsersGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.users.get.$post>,
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
    const mutationDefaults = getPostV1UsersGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersGetByAuthIdMutationKey() {
  return ['v1', '/v1/users/get_by_auth_id', 'POST'] as const
}

export function getPostV1UsersGetByAuthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get_by_auth_id.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.get_by_auth_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersGetByAuthIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.get_by_auth_id.$post>) {
      return parseResponse(client.v1.users.get_by_auth_id.$post(args, options))
    },
  })
}

export function createPostV1UsersGetByAuthId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get_by_auth_id.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.get_by_auth_id.$post>,
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
    const mutationDefaults = getPostV1UsersGetByAuthIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersGetByEmailMutationKey() {
  return ['v1', '/v1/users/get_by_email', 'POST'] as const
}

export function getPostV1UsersGetByEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get_by_email.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.get_by_email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersGetByEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.get_by_email.$post>) {
      return parseResponse(client.v1.users.get_by_email.$post(args, options))
    },
  })
}

export function createPostV1UsersGetByEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.get_by_email.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.get_by_email.$post>,
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
    const mutationDefaults = getPostV1UsersGetByEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersGetOrCreateByAuthIdMutationKey() {
  return ['v1', '/v1/users/get_or_create_by_auth_id', 'POST'] as const
}

export function getPostV1UsersGetOrCreateByAuthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.users.get_or_create_by_auth_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.get_or_create_by_auth_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersGetOrCreateByAuthIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.users.get_or_create_by_auth_id.$post>,
    ) {
      return parseResponse(client.v1.users.get_or_create_by_auth_id.$post(args, options))
    },
  })
}

export function createPostV1UsersGetOrCreateByAuthId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.users.get_or_create_by_auth_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.get_or_create_by_auth_id.$post>,
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
    const mutationDefaults = getPostV1UsersGetOrCreateByAuthIdMutationOptions<
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

export function getPostV1UsersUpdateMutationKey() {
  return ['v1', '/v1/users/update', 'POST'] as const
}

export function getPostV1UsersUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.users.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.update.$post>) {
      return parseResponse(client.v1.users.update.$post(args, options))
    },
  })
}

export function createPostV1UsersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.update.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.users.update.$post>,
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
    const mutationDefaults = getPostV1UsersUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersDeleteMutationKey() {
  return ['v1', '/v1/users/delete', 'POST'] as const
}

export function getPostV1UsersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.delete.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.users.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.delete.$post>) {
      return parseResponse(client.v1.users.delete.$post(args, options))
    },
  })
}

export function createPostV1UsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.users.delete.$post>,
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
    const mutationDefaults = getPostV1UsersDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UsersListAccessInfoByWorkspaceIdMutationKey() {
  return ['v1', '/v1/users/list_access_info_by_workspace_id', 'POST'] as const
}

export function getPostV1UsersListAccessInfoByWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.users.list_access_info_by_workspace_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.list_access_info_by_workspace_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersListAccessInfoByWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.users.list_access_info_by_workspace_id.$post>,
    ) {
      return parseResponse(client.v1.users.list_access_info_by_workspace_id.$post(args, options))
    },
  })
}

export function createPostV1UsersListAccessInfoByWorkspaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.users.list_access_info_by_workspace_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.list_access_info_by_workspace_id.$post>,
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
    const mutationDefaults = getPostV1UsersListAccessInfoByWorkspaceIdMutationOptions<
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

export function getPostV1UsersListByOrganizationIdMutationKey() {
  return ['v1', '/v1/users/list_by_organization_id', 'POST'] as const
}

export function getPostV1UsersListByOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.users.list_by_organization_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.list_by_organization_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersListByOrganizationIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.list_by_organization_id.$post>) {
      return parseResponse(client.v1.users.list_by_organization_id.$post(args, options))
    },
  })
}

export function createPostV1UsersListByOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.users.list_by_organization_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.list_by_organization_id.$post>,
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
    const mutationDefaults = getPostV1UsersListByOrganizationIdMutationOptions<
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

export function getPostV1UsersListInstanceAdminMutationKey() {
  return ['v1', '/v1/users/list_instance_admin', 'POST'] as const
}

export function getPostV1UsersListInstanceAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.list_instance_admin.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersListInstanceAdminMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.users.list_instance_admin.$post(undefined, options))
    },
  })
}

export function createPostV1UsersListInstanceAdmin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.users.list_instance_admin.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1UsersListInstanceAdminMutationOptions<
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

export function getPostV1PermissionsCreateMutationKey() {
  return ['v1', '/v1/permissions/create', 'POST'] as const
}

export function getPostV1PermissionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.permissions.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.permissions.create.$post>) {
      return parseResponse(client.v1.permissions.create.$post(args, options))
    },
  })
}

export function createPostV1PermissionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.permissions.create.$post>,
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
    const mutationDefaults = getPostV1PermissionsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PermissionsGetMutationKey() {
  return ['v1', '/v1/permissions/get', 'POST'] as const
}

export function getPostV1PermissionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.permissions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.permissions.get.$post>) {
      return parseResponse(client.v1.permissions.get.$post(args, options))
    },
  })
}

export function createPostV1PermissionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.permissions.get.$post>,
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
    const mutationDefaults = getPostV1PermissionsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PermissionsCheckMutationKey() {
  return ['v1', '/v1/permissions/check', 'POST'] as const
}

export function getPostV1PermissionsCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.check.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.permissions.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.permissions.check.$post>) {
      return parseResponse(client.v1.permissions.check.$post(args, options))
    },
  })
}

export function createPostV1PermissionsCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.check.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.permissions.check.$post>,
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
    const mutationDefaults = getPostV1PermissionsCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PermissionsCheckMultipleWorkspacesMutationKey() {
  return ['v1', '/v1/permissions/check_multiple_workspaces', 'POST'] as const
}

export function getPostV1PermissionsCheckMultipleWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.permissions.check_multiple_workspaces.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.permissions.check_multiple_workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsCheckMultipleWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.permissions.check_multiple_workspaces.$post>,
    ) {
      return parseResponse(client.v1.permissions.check_multiple_workspaces.$post(args, options))
    },
  })
}

export function createPostV1PermissionsCheckMultipleWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.permissions.check_multiple_workspaces.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.permissions.check_multiple_workspaces.$post>,
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
    const mutationDefaults = getPostV1PermissionsCheckMultipleWorkspacesMutationOptions<
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

export function getPostV1PermissionsUpdateMutationKey() {
  return ['v1', '/v1/permissions/update', 'POST'] as const
}

export function getPostV1PermissionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.permissions.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.permissions.update.$post>) {
      return parseResponse(client.v1.permissions.update.$post(args, options))
    },
  })
}

export function createPostV1PermissionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.update.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.permissions.update.$post>,
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
    const mutationDefaults = getPostV1PermissionsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SecretsPersistenceConfigGetMutationKey() {
  return ['v1', '/v1/secrets_persistence_config/get', 'POST'] as const
}

export function getPostV1SecretsPersistenceConfigGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.secrets_persistence_config.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.secrets_persistence_config.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretsPersistenceConfigGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.secrets_persistence_config.get.$post>,
    ) {
      return parseResponse(client.v1.secrets_persistence_config.get.$post(args, options))
    },
  })
}

export function createPostV1SecretsPersistenceConfigGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.secrets_persistence_config.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.secrets_persistence_config.get.$post>,
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
    const mutationDefaults = getPostV1SecretsPersistenceConfigGetMutationOptions<
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

export function getPostV1SecretsPersistenceConfigCreateOrUpdateMutationKey() {
  return ['v1', '/v1/secrets_persistence_config/create_or_update', 'POST'] as const
}

export function getPostV1SecretsPersistenceConfigCreateOrUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.secrets_persistence_config.create_or_update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.secrets_persistence_config.create_or_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretsPersistenceConfigCreateOrUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.secrets_persistence_config.create_or_update.$post>,
    ) {
      return parseResponse(
        client.v1.secrets_persistence_config.create_or_update.$post(args, options),
      )
    },
  })
}

export function createPostV1SecretsPersistenceConfigCreateOrUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.secrets_persistence_config.create_or_update.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.secrets_persistence_config.create_or_update.$post>,
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
    const mutationDefaults = getPostV1SecretsPersistenceConfigCreateOrUpdateMutationOptions<
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

export function getPostV1SecretStorageCreateMutationKey() {
  return ['v1', '/v1/secret_storage/create', 'POST'] as const
}

export function getPostV1SecretStorageCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.secret_storage.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretStorageCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.secret_storage.create.$post>) {
      return parseResponse(client.v1.secret_storage.create.$post(args, options))
    },
  })
}

export function createPostV1SecretStorageCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.secret_storage.create.$post>,
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
    const mutationDefaults = getPostV1SecretStorageCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SecretStorageListMutationKey() {
  return ['v1', '/v1/secret_storage/list', 'POST'] as const
}

export function getPostV1SecretStorageListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.secret_storage.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretStorageListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.secret_storage.list.$post>) {
      return parseResponse(client.v1.secret_storage.list.$post(args, options))
    },
  })
}

export function createPostV1SecretStorageList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.secret_storage.list.$post>,
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
    const mutationDefaults = getPostV1SecretStorageListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SecretStorageDeleteMutationKey() {
  return ['v1', '/v1/secret_storage/delete', 'POST'] as const
}

export function getPostV1SecretStorageDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.secret_storage.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretStorageDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.secret_storage.delete.$post>) {
      return parseResponse(client.v1.secret_storage.delete.$post(args, options))
    },
  })
}

export function createPostV1SecretStorageDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.secret_storage.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.secret_storage.delete.$post>,
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
    const mutationDefaults = getPostV1SecretStorageDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SecretStorageGetMutationKey() {
  return ['v1', '/v1/secret_storage/get', 'POST'] as const
}

export function getPostV1SecretStorageGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.secret_storage.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretStorageGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.secret_storage.get.$post>) {
      return parseResponse(client.v1.secret_storage.get.$post(args, options))
    },
  })
}

export function createPostV1SecretStorageGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.secret_storage.get.$post>,
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
    const mutationDefaults = getPostV1SecretStorageGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SecretStorageMigrateMutationKey() {
  return ['v1', '/v1/secret_storage/migrate', 'POST'] as const
}

export function getPostV1SecretStorageMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.secret_storage.migrate.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.secret_storage.migrate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SecretStorageMigrateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.secret_storage.migrate.$post>) {
      return parseResponse(client.v1.secret_storage.migrate.$post(args, options))
    },
  })
}

export function createPostV1SecretStorageMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.secret_storage.migrate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.secret_storage.migrate.$post>,
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
    const mutationDefaults = getPostV1SecretStorageMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PermissionsDeleteMutationKey() {
  return ['v1', '/v1/permissions/delete', 'POST'] as const
}

export function getPostV1PermissionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.permissions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.permissions.delete.$post>) {
      return parseResponse(client.v1.permissions.delete.$post(args, options))
    },
  })
}

export function createPostV1PermissionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.permissions.delete.$post>,
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
    const mutationDefaults = getPostV1PermissionsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PermissionsDeleteUserFromWorkspaceMutationKey() {
  return ['v1', '/v1/permissions/delete_user_from_workspace', 'POST'] as const
}

export function getPostV1PermissionsDeleteUserFromWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.permissions.delete_user_from_workspace.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.permissions.delete_user_from_workspace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsDeleteUserFromWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.permissions.delete_user_from_workspace.$post>,
    ) {
      return parseResponse(client.v1.permissions.delete_user_from_workspace.$post(args, options))
    },
  })
}

export function createPostV1PermissionsDeleteUserFromWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.permissions.delete_user_from_workspace.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.permissions.delete_user_from_workspace.$post>,
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
    const mutationDefaults = getPostV1PermissionsDeleteUserFromWorkspaceMutationOptions<
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

export function getPostV1PermissionsListByUserMutationKey() {
  return ['v1', '/v1/permissions/list_by_user', 'POST'] as const
}

export function getPostV1PermissionsListByUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.permissions.list_by_user.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.permissions.list_by_user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PermissionsListByUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.permissions.list_by_user.$post>) {
      return parseResponse(client.v1.permissions.list_by_user.$post(args, options))
    },
  })
}

export function createPostV1PermissionsListByUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.permissions.list_by_user.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.permissions.list_by_user.$post>,
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
    const mutationDefaults = getPostV1PermissionsListByUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1HealthQueryKey() {
  return ['v1', '/v1/health'] as const
}

export function getV1HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HealthQueryKey>
  >({
    queryKey: getV1HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1OpenapiQueryKey() {
  return ['v1', '/v1/openapi'] as const
}

export function getV1OpenapiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OpenapiQueryKey>
  >({
    queryKey: getV1OpenapiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Openapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.openapi.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OpenapiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1AttemptCreateNewAttemptNumberMutationKey() {
  return ['v1', '/v1/attempt/create_new_attempt_number', 'POST'] as const
}

export function getPostV1AttemptCreateNewAttemptNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.attempt.create_new_attempt_number.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.create_new_attempt_number.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptCreateNewAttemptNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.attempt.create_new_attempt_number.$post>,
    ) {
      return parseResponse(client.v1.attempt.create_new_attempt_number.$post(args, options))
    },
  })
}

export function createPostV1AttemptCreateNewAttemptNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.attempt.create_new_attempt_number.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.create_new_attempt_number.$post>,
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
    const mutationDefaults = getPostV1AttemptCreateNewAttemptNumberMutationOptions<
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

export function getPostV1AttemptSaveStreamMetadataMutationKey() {
  return ['v1', '/v1/attempt/save_stream_metadata', 'POST'] as const
}

export function getPostV1AttemptSaveStreamMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.attempt.save_stream_metadata.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.save_stream_metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptSaveStreamMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.save_stream_metadata.$post>) {
      return parseResponse(client.v1.attempt.save_stream_metadata.$post(args, options))
    },
  })
}

export function createPostV1AttemptSaveStreamMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.attempt.save_stream_metadata.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.save_stream_metadata.$post>,
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
    const mutationDefaults = getPostV1AttemptSaveStreamMetadataMutationOptions<
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

export function getPostV1AttemptSaveStatsMutationKey() {
  return ['v1', '/v1/attempt/save_stats', 'POST'] as const
}

export function getPostV1AttemptSaveStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_stats.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.save_stats.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptSaveStatsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.save_stats.$post>) {
      return parseResponse(client.v1.attempt.save_stats.$post(args, options))
    },
  })
}

export function createPostV1AttemptSaveStats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_stats.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.save_stats.$post>,
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
    const mutationDefaults = getPostV1AttemptSaveStatsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AttemptSaveSyncConfigMutationKey() {
  return ['v1', '/v1/attempt/save_sync_config', 'POST'] as const
}

export function getPostV1AttemptSaveSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.save_sync_config.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.save_sync_config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptSaveSyncConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.save_sync_config.$post>) {
      return parseResponse(client.v1.attempt.save_sync_config.$post(args, options))
    },
  })
}

export function createPostV1AttemptSaveSyncConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.attempt.save_sync_config.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.save_sync_config.$post>,
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
    const mutationDefaults = getPostV1AttemptSaveSyncConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AttemptFailMutationKey() {
  return ['v1', '/v1/attempt/fail', 'POST'] as const
}

export function getPostV1AttemptFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.fail.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.attempt.fail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptFailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.fail.$post>) {
      return parseResponse(client.v1.attempt.fail.$post(args, options))
    },
  })
}

export function createPostV1AttemptFail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.fail.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.attempt.fail.$post>,
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
    const mutationDefaults = getPostV1AttemptFailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AttemptGetCombinedStatsMutationKey() {
  return ['v1', '/v1/attempt/get_combined_stats', 'POST'] as const
}

export function getPostV1AttemptGetCombinedStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.get_combined_stats.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.get_combined_stats.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptGetCombinedStatsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.get_combined_stats.$post>) {
      return parseResponse(client.v1.attempt.get_combined_stats.$post(args, options))
    },
  })
}

export function createPostV1AttemptGetCombinedStats<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.attempt.get_combined_stats.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.get_combined_stats.$post>,
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
    const mutationDefaults = getPostV1AttemptGetCombinedStatsMutationOptions<
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

export function getPostV1AttemptGetForJobMutationKey() {
  return ['v1', '/v1/attempt/get_for_job', 'POST'] as const
}

export function getPostV1AttemptGetForJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.get_for_job.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.attempt.get_for_job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AttemptGetForJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.attempt.get_for_job.$post>) {
      return parseResponse(client.v1.attempt.get_for_job.$post(args, options))
    },
  })
}

export function createPostV1AttemptGetForJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.attempt.get_for_job.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.attempt.get_for_job.$post>,
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
    const mutationDefaults = getPostV1AttemptGetForJobMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1StreamStatusesListMutationKey() {
  return ['v1', '/v1/stream_statuses/list', 'POST'] as const
}

export function getPostV1StreamStatusesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.stream_statuses.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StreamStatusesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.stream_statuses.list.$post>) {
      return parseResponse(client.v1.stream_statuses.list.$post(args, options))
    },
  })
}

export function createPostV1StreamStatusesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.stream_statuses.list.$post>,
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
    const mutationDefaults = getPostV1StreamStatusesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1StreamStatusesLatestPerRunStateMutationKey() {
  return ['v1', '/v1/stream_statuses/latest_per_run_state', 'POST'] as const
}

export function getPostV1StreamStatusesLatestPerRunStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.stream_statuses.latest_per_run_state.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.stream_statuses.latest_per_run_state.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StreamStatusesLatestPerRunStateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.stream_statuses.latest_per_run_state.$post>,
    ) {
      return parseResponse(client.v1.stream_statuses.latest_per_run_state.$post(args, options))
    },
  })
}

export function createPostV1StreamStatusesLatestPerRunState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.stream_statuses.latest_per_run_state.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.stream_statuses.latest_per_run_state.$post>,
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
    const mutationDefaults = getPostV1StreamStatusesLatestPerRunStateMutationOptions<
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

export function getPostV1StreamStatusesCreateMutationKey() {
  return ['v1', '/v1/stream_statuses/create', 'POST'] as const
}

export function getPostV1StreamStatusesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.stream_statuses.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StreamStatusesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.stream_statuses.create.$post>) {
      return parseResponse(client.v1.stream_statuses.create.$post(args, options))
    },
  })
}

export function createPostV1StreamStatusesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.stream_statuses.create.$post>,
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
    const mutationDefaults = getPostV1StreamStatusesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1StreamStatusesUpdateMutationKey() {
  return ['v1', '/v1/stream_statuses/update', 'POST'] as const
}

export function getPostV1StreamStatusesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.stream_statuses.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StreamStatusesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.stream_statuses.update.$post>) {
      return parseResponse(client.v1.stream_statuses.update.$post(args, options))
    },
  })
}

export function createPostV1StreamStatusesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.stream_statuses.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.stream_statuses.update.$post>,
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
    const mutationDefaults = getPostV1StreamStatusesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InstanceConfigurationQueryKey() {
  return ['v1', '/v1/instance_configuration'] as const
}

export function getV1InstanceConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstanceConfigurationQueryKey>
  >({
    queryKey: getV1InstanceConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instance_configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InstanceConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.instance_configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstanceConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1InstanceConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1InstanceConfigurationSetupMutationKey() {
  return ['v1', '/v1/instance_configuration/setup', 'POST'] as const
}

export function getPostV1InstanceConfigurationSetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.instance_configuration.setup.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.instance_configuration.setup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InstanceConfigurationSetupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.instance_configuration.setup.$post>) {
      return parseResponse(client.v1.instance_configuration.setup.$post(args, options))
    },
  })
}

export function createPostV1InstanceConfigurationSetup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.instance_configuration.setup.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.instance_configuration.setup.$post>,
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
    const mutationDefaults = getPostV1InstanceConfigurationSetupMutationOptions<
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

export function getPostV1JobsRetryStatesCreateOrUpdateMutationKey() {
  return ['v1', '/v1/jobs/retry_states/create_or_update', 'POST'] as const
}

export function getPostV1JobsRetryStatesCreateOrUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.jobs.retry_states.create_or_update.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.jobs.retry_states.create_or_update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsRetryStatesCreateOrUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.jobs.retry_states.create_or_update.$post>,
    ) {
      return parseResponse(client.v1.jobs.retry_states.create_or_update.$post(args, options))
    },
  })
}

export function createPostV1JobsRetryStatesCreateOrUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.jobs.retry_states.create_or_update.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.jobs.retry_states.create_or_update.$post>,
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
    const mutationDefaults = getPostV1JobsRetryStatesCreateOrUpdateMutationOptions<
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

export function getPostV1JobsRetryStatesGetMutationKey() {
  return ['v1', '/v1/jobs/retry_states/get', 'POST'] as const
}

export function getPostV1JobsRetryStatesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.retry_states.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.retry_states.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsRetryStatesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.retry_states.get.$post>) {
      return parseResponse(client.v1.jobs.retry_states.get.$post(args, options))
    },
  })
}

export function createPostV1JobsRetryStatesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.retry_states.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.retry_states.get.$post>,
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
    const mutationDefaults = getPostV1JobsRetryStatesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JobsDidPreviousJobSucceedMutationKey() {
  return ['v1', '/v1/jobs/did_previous_job_succeed', 'POST'] as const
}

export function getPostV1JobsDidPreviousJobSucceedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.jobs.did_previous_job_succeed.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.jobs.did_previous_job_succeed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsDidPreviousJobSucceedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.did_previous_job_succeed.$post>) {
      return parseResponse(client.v1.jobs.did_previous_job_succeed.$post(args, options))
    },
  })
}

export function createPostV1JobsDidPreviousJobSucceed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.jobs.did_previous_job_succeed.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jobs.did_previous_job_succeed.$post>,
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
    const mutationDefaults = getPostV1JobsDidPreviousJobSucceedMutationOptions<
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

export function getPostV1JobsPersistCancellationMutationKey() {
  return ['v1', '/v1/jobs/persist_cancellation', 'POST'] as const
}

export function getPostV1JobsPersistCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.jobs.persist_cancellation.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.jobs.persist_cancellation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsPersistCancellationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.persist_cancellation.$post>) {
      return parseResponse(client.v1.jobs.persist_cancellation.$post(args, options))
    },
  })
}

export function createPostV1JobsPersistCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.jobs.persist_cancellation.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.jobs.persist_cancellation.$post>,
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
    const mutationDefaults = getPostV1JobsPersistCancellationMutationOptions<
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

export function getPostV1BillingCustomerPortalMutationKey() {
  return ['v1', '/v1/billing/customer_portal', 'POST'] as const
}

export function getPostV1BillingCustomerPortalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.customer_portal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.customer_portal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingCustomerPortalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.customer_portal.$post>) {
      return parseResponse(client.v1.billing.customer_portal.$post(args, options))
    },
  })
}

export function createPostV1BillingCustomerPortal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.customer_portal.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.customer_portal.$post>,
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
    const mutationDefaults = getPostV1BillingCustomerPortalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BillingBackfillUsageMutationKey() {
  return ['v1', '/v1/billing/backfill_usage', 'POST'] as const
}

export function getPostV1BillingBackfillUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.backfill_usage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.backfill_usage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingBackfillUsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.backfill_usage.$post>) {
      return parseResponse(client.v1.billing.backfill_usage.$post(args, options))
    },
  })
}

export function createPostV1BillingBackfillUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.backfill_usage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.backfill_usage.$post>,
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
    const mutationDefaults = getPostV1BillingBackfillUsageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BillingHandleWebhookMutationKey() {
  return ['v1', '/v1/billing/handle_webhook', 'POST'] as const
}

export function getPostV1BillingHandleWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.handle_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.handle_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingHandleWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.handle_webhook.$post>) {
      return parseResponse(client.v1.billing.handle_webhook.$post(args, options))
    },
  })
}

export function createPostV1BillingHandleWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.handle_webhook.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.handle_webhook.$post>,
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
    const mutationDefaults = getPostV1BillingHandleWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BillingListInvoicesMutationKey() {
  return ['v1', '/v1/billing/list_invoices', 'POST'] as const
}

export function getPostV1BillingListInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.list_invoices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.list_invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingListInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.list_invoices.$post>) {
      return parseResponse(client.v1.billing.list_invoices.$post(args, options))
    },
  })
}

export function createPostV1BillingListInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.list_invoices.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.list_invoices.$post>,
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
    const mutationDefaults = getPostV1BillingListInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BillingPaymentInformationMutationKey() {
  return ['v1', '/v1/billing/payment_information', 'POST'] as const
}

export function getPostV1BillingPaymentInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.payment_information.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.payment_information.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingPaymentInformationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.payment_information.$post>) {
      return parseResponse(client.v1.billing.payment_information.$post(args, options))
    },
  })
}

export function createPostV1BillingPaymentInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.payment_information.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.payment_information.$post>,
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
    const mutationDefaults = getPostV1BillingPaymentInformationMutationOptions<
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

export function getPostV1BillingSubscriptionInfoMutationKey() {
  return ['v1', '/v1/billing/subscription_info', 'POST'] as const
}

export function getPostV1BillingSubscriptionInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription_info.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.subscription_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.subscription_info.$post>) {
      return parseResponse(client.v1.billing.subscription_info.$post(args, options))
    },
  })
}

export function createPostV1BillingSubscriptionInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.subscription_info.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.subscription_info.$post>,
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
    const mutationDefaults = getPostV1BillingSubscriptionInfoMutationOptions<
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

export function getPostV1BillingTrialStatusMutationKey() {
  return ['v1', '/v1/billing/trial_status', 'POST'] as const
}

export function getPostV1BillingTrialStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.trial_status.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.trial_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingTrialStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.trial_status.$post>) {
      return parseResponse(client.v1.billing.trial_status.$post(args, options))
    },
  })
}

export function createPostV1BillingTrialStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.trial_status.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.trial_status.$post>,
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
    const mutationDefaults = getPostV1BillingTrialStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BillingCancelSubscriptionMutationKey() {
  return ['v1', '/v1/billing/cancel_subscription', 'POST'] as const
}

export function getPostV1BillingCancelSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.cancel_subscription.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.cancel_subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingCancelSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.cancel_subscription.$post>) {
      return parseResponse(client.v1.billing.cancel_subscription.$post(args, options))
    },
  })
}

export function createPostV1BillingCancelSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.cancel_subscription.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.cancel_subscription.$post>,
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
    const mutationDefaults = getPostV1BillingCancelSubscriptionMutationOptions<
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

export function getPostV1BillingUnscheduleCancelSubscriptionMutationKey() {
  return ['v1', '/v1/billing/unschedule_cancel_subscription', 'POST'] as const
}

export function getPostV1BillingUnscheduleCancelSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing.unschedule_cancel_subscription.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.billing.unschedule_cancel_subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingUnscheduleCancelSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.billing.unschedule_cancel_subscription.$post>,
    ) {
      return parseResponse(client.v1.billing.unschedule_cancel_subscription.$post(args, options))
    },
  })
}

export function createPostV1BillingUnscheduleCancelSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.billing.unschedule_cancel_subscription.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.billing.unschedule_cancel_subscription.$post>,
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
    const mutationDefaults = getPostV1BillingUnscheduleCancelSubscriptionMutationOptions<
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

export function getPostV1BillingUnschedulePlanChangeMutationKey() {
  return ['v1', '/v1/billing/unschedule_plan_change', 'POST'] as const
}

export function getPostV1BillingUnschedulePlanChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing.unschedule_plan_change.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.billing.unschedule_plan_change.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingUnschedulePlanChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.billing.unschedule_plan_change.$post>,
    ) {
      return parseResponse(client.v1.billing.unschedule_plan_change.$post(args, options))
    },
  })
}

export function createPostV1BillingUnschedulePlanChange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.billing.unschedule_plan_change.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.billing.unschedule_plan_change.$post>,
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
    const mutationDefaults = getPostV1BillingUnschedulePlanChangeMutationOptions<
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

export function getPostV1BillingDisableDelinquentWorkspacesMutationKey() {
  return ['v1', '/v1/billing/disable_delinquent_workspaces', 'POST'] as const
}

export function getPostV1BillingDisableDelinquentWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.disable_delinquent_workspaces.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingDisableDelinquentWorkspacesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.billing.disable_delinquent_workspaces.$post(undefined, options),
      )
    },
  })
}

export function createPostV1BillingDisableDelinquentWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.disable_delinquent_workspaces.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1BillingDisableDelinquentWorkspacesMutationOptions<
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

export function getPostV1BillingNotificationSettingsGetMutationKey() {
  return ['v1', '/v1/billing/notification_settings/get', 'POST'] as const
}

export function getPostV1BillingNotificationSettingsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.notification_settings.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.notification_settings.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingNotificationSettingsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.billing.notification_settings.get.$post>,
    ) {
      return parseResponse(client.v1.billing.notification_settings.get.$post(args, options))
    },
  })
}

export function createPostV1BillingNotificationSettingsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.notification_settings.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.notification_settings.get.$post>,
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
    const mutationDefaults = getPostV1BillingNotificationSettingsGetMutationOptions<
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

export function getPostV1BillingNotificationSettingsUpdateMutationKey() {
  return ['v1', '/v1/billing/notification_settings/update', 'POST'] as const
}

export function getPostV1BillingNotificationSettingsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing.notification_settings.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.notification_settings.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingNotificationSettingsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.billing.notification_settings.update.$post>,
    ) {
      return parseResponse(client.v1.billing.notification_settings.update.$post(args, options))
    },
  })
}

export function createPostV1BillingNotificationSettingsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.billing.notification_settings.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.notification_settings.update.$post>,
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
    const mutationDefaults = getPostV1BillingNotificationSettingsUpdateMutationOptions<
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

export function getV1OrganizationPaymentConfigOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>,
) {
  return ['v1', '/v1/organization_payment_config/:organizationId', args] as const
}

export function getV1OrganizationPaymentConfigOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationPaymentConfigOrganizationIdQueryKey>
  >({
    queryKey: getV1OrganizationPaymentConfigOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organization_payment_config[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationPaymentConfigOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organization_payment_config)[':organizationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.organization_payment_config)[':organizationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationPaymentConfigOrganizationIdQueryKey>
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
      ...getV1OrganizationPaymentConfigOrganizationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1OrganizationPaymentConfigMutationKey() {
  return ['v1', '/v1/organization_payment_config', 'POST'] as const
}

export function getPostV1OrganizationPaymentConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organization_payment_config.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organization_payment_config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationPaymentConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organization_payment_config.$post>) {
      return parseResponse(client.v1.organization_payment_config.$post(args, options))
    },
  })
}

export function createPostV1OrganizationPaymentConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organization_payment_config.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organization_payment_config.$post>,
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
    const mutationDefaults = getPostV1OrganizationPaymentConfigMutationOptions<
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

export function getPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriodMutationKey() {
  return ['v1', '/v1/organization_payment_config/:organizationId/end_grace_period', 'POST'] as const
}

export function getPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organization_payment_config[':organizationId'].end_grace_period.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
        >,
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
    const mutationDefaults =
      getPostV1OrganizationPaymentConfigOrganizationIdEndGracePeriodMutationOptions<
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

export function getPostV1OrganizationsGetMutationKey() {
  return ['v1', '/v1/organizations/get', 'POST'] as const
}

export function getPostV1OrganizationsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.get.$post>) {
      return parseResponse(client.v1.organizations.get.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.get.$post>,
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
    const mutationDefaults = getPostV1OrganizationsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrganizationsGetSemanticSearchEnablementMutationKey() {
  return ['v1', '/v1/organizations/get_semantic_search_enablement', 'POST'] as const
}

export function getPostV1OrganizationsGetSemanticSearchEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.get_semantic_search_enablement.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.get_semantic_search_enablement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsGetSemanticSearchEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.organizations.get_semantic_search_enablement.$post>,
    ) {
      return parseResponse(
        client.v1.organizations.get_semantic_search_enablement.$post(args, options),
      )
    },
  })
}

export function createPostV1OrganizationsGetSemanticSearchEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.organizations.get_semantic_search_enablement.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.get_semantic_search_enablement.$post>,
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
    const mutationDefaults = getPostV1OrganizationsGetSemanticSearchEnablementMutationOptions<
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

export function getPostV1OrganizationsUpdateSemanticSearchEnablementMutationKey() {
  return ['v1', '/v1/organizations/update_semantic_search_enablement', 'POST'] as const
}

export function getPostV1OrganizationsUpdateSemanticSearchEnablementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.organizations.update_semantic_search_enablement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsUpdateSemanticSearchEnablementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.organizations.update_semantic_search_enablement.$post
      >,
    ) {
      return parseResponse(
        client.v1.organizations.update_semantic_search_enablement.$post(args, options),
      )
    },
  })
}

export function createPostV1OrganizationsUpdateSemanticSearchEnablement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<typeof client.v1.organizations.update_semantic_search_enablement.$post>,
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
    const mutationDefaults = getPostV1OrganizationsUpdateSemanticSearchEnablementMutationOptions<
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

export function getPostV1OrganizationsOnboardingUpdateMutationKey() {
  return ['v1', '/v1/organizations/onboarding/update', 'POST'] as const
}

export function getPostV1OrganizationsOnboardingUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.onboarding.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.onboarding.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOnboardingUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.organizations.onboarding.update.$post>,
    ) {
      return parseResponse(client.v1.organizations.onboarding.update.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsOnboardingUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.onboarding.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.onboarding.update.$post>,
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
    const mutationDefaults = getPostV1OrganizationsOnboardingUpdateMutationOptions<
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

export function getPostV1OrganizationsOnboardingSendMobileHandoffEmailMutationKey() {
  return ['v1', '/v1/organizations/onboarding/send_mobile_handoff_email', 'POST'] as const
}

export function getPostV1OrganizationsOnboardingSendMobileHandoffEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOnboardingSendMobileHandoffEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post
      >,
    ) {
      return parseResponse(
        client.v1.organizations.onboarding.send_mobile_handoff_email.$post(args, options),
      )
    },
  })
}

export function createPostV1OrganizationsOnboardingSendMobileHandoffEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post>,
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
    const mutationDefaults = getPostV1OrganizationsOnboardingSendMobileHandoffEmailMutationOptions<
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

export function getPostV1OrganizationsCreateMutationKey() {
  return ['v1', '/v1/organizations/create', 'POST'] as const
}

export function getPostV1OrganizationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.create.$post>) {
      return parseResponse(client.v1.organizations.create.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.create.$post>,
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
    const mutationDefaults = getPostV1OrganizationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrganizationsUpdateMutationKey() {
  return ['v1', '/v1/organizations/update', 'POST'] as const
}

export function getPostV1OrganizationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.update.$post>) {
      return parseResponse(client.v1.organizations.update.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.update.$post>,
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
    const mutationDefaults = getPostV1OrganizationsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrganizationsAgenticStatusMutationKey() {
  return ['v1', '/v1/organizations/agentic_status', 'POST'] as const
}

export function getPostV1OrganizationsAgenticStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.agentic_status.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.agentic_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsAgenticStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.agentic_status.$post>) {
      return parseResponse(client.v1.organizations.agentic_status.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsAgenticStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.agentic_status.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.agentic_status.$post>,
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
    const mutationDefaults = getPostV1OrganizationsAgenticStatusMutationOptions<
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

export function getPostV1OrganizationsDeleteMutationKey() {
  return ['v1', '/v1/organizations/delete', 'POST'] as const
}

export function getPostV1OrganizationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.organizations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.delete.$post>) {
      return parseResponse(client.v1.organizations.delete.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.organizations.delete.$post>,
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
    const mutationDefaults = getPostV1OrganizationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrganizationsListByUserIdMutationKey() {
  return ['v1', '/v1/organizations/list_by_user_id', 'POST'] as const
}

export function getPostV1OrganizationsListByUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.list_by_user_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.list_by_user_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsListByUserIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.list_by_user_id.$post>) {
      return parseResponse(client.v1.organizations.list_by_user_id.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsListByUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.list_by_user_id.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.list_by_user_id.$post>,
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
    const mutationDefaults = getPostV1OrganizationsListByUserIdMutationOptions<
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

export function getPostV1OrganizationsGetUsageMutationKey() {
  return ['v1', '/v1/organizations/get_usage', 'POST'] as const
}

export function getPostV1OrganizationsGetUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.get_usage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.get_usage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsGetUsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.get_usage.$post>) {
      return parseResponse(client.v1.organizations.get_usage.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsGetUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.get_usage.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.get_usage.$post>,
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
    const mutationDefaults = getPostV1OrganizationsGetUsageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1OrganizationsGetDataWorkerUsageMutationKey() {
  return ['v1', '/v1/organizations/get_data_worker_usage', 'POST'] as const
}

export function getPostV1OrganizationsGetDataWorkerUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.get_data_worker_usage.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.get_data_worker_usage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsGetDataWorkerUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.organizations.get_data_worker_usage.$post>,
    ) {
      return parseResponse(client.v1.organizations.get_data_worker_usage.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsGetDataWorkerUsage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.get_data_worker_usage.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.get_data_worker_usage.$post>,
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
    const mutationDefaults = getPostV1OrganizationsGetDataWorkerUsageMutationOptions<
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

export function getPostV1OrganizationsListSummariesMutationKey() {
  return ['v1', '/v1/organizations/list_summaries', 'POST'] as const
}

export function getPostV1OrganizationsListSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.list_summaries.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.list_summaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsListSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.list_summaries.$post>) {
      return parseResponse(client.v1.organizations.list_summaries.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsListSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.list_summaries.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.list_summaries.$post>,
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
    const mutationDefaults = getPostV1OrganizationsListSummariesMutationOptions<
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

export function getPostV1OrganizationsGetOrganizationInfoMutationKey() {
  return ['v1', '/v1/organizations/get_organization_info', 'POST'] as const
}

export function getPostV1OrganizationsGetOrganizationInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.organizations.get_organization_info.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.get_organization_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsGetOrganizationInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.organizations.get_organization_info.$post>,
    ) {
      return parseResponse(client.v1.organizations.get_organization_info.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsGetOrganizationInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.organizations.get_organization_info.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.get_organization_info.$post>,
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
    const mutationDefaults = getPostV1OrganizationsGetOrganizationInfoMutationOptions<
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

export function getPostV1GroupsListMutationKey() {
  return ['v1', '/v1/groups/list', 'POST'] as const
}

export function getPostV1GroupsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.groups.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.list.$post>) {
      return parseResponse(client.v1.groups.list.$post(args, options))
    },
  })
}

export function createPostV1GroupsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.groups.list.$post>,
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
    const mutationDefaults = getPostV1GroupsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsGetMutationKey() {
  return ['v1', '/v1/groups/get', 'POST'] as const
}

export function getPostV1GroupsGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.groups.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.get.$post>) {
      return parseResponse(client.v1.groups.get.$post(args, options))
    },
  })
}

export function createPostV1GroupsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.groups.get.$post>,
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
    const mutationDefaults = getPostV1GroupsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsCreateMutationKey() {
  return ['v1', '/v1/groups/create', 'POST'] as const
}

export function getPostV1GroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.groups.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.create.$post>) {
      return parseResponse(client.v1.groups.create.$post(args, options))
    },
  })
}

export function createPostV1GroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.groups.create.$post>,
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
    const mutationDefaults = getPostV1GroupsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsUpdateMutationKey() {
  return ['v1', '/v1/groups/update', 'POST'] as const
}

export function getPostV1GroupsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.groups.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.update.$post>) {
      return parseResponse(client.v1.groups.update.$post(args, options))
    },
  })
}

export function createPostV1GroupsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.groups.update.$post>,
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
    const mutationDefaults = getPostV1GroupsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsDeleteMutationKey() {
  return ['v1', '/v1/groups/delete', 'POST'] as const
}

export function getPostV1GroupsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.delete.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.groups.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.delete.$post>) {
      return parseResponse(client.v1.groups.delete.$post(args, options))
    },
  })
}

export function createPostV1GroupsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.groups.delete.$post>,
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
    const mutationDefaults = getPostV1GroupsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsListMembersMutationKey() {
  return ['v1', '/v1/groups/list_members', 'POST'] as const
}

export function getPostV1GroupsListMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.list_members.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.groups.list_members.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsListMembersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.list_members.$post>) {
      return parseResponse(client.v1.groups.list_members.$post(args, options))
    },
  })
}

export function createPostV1GroupsListMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.list_members.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.groups.list_members.$post>,
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
    const mutationDefaults = getPostV1GroupsListMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsAddMemberMutationKey() {
  return ['v1', '/v1/groups/add_member', 'POST'] as const
}

export function getPostV1GroupsAddMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.add_member.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.groups.add_member.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsAddMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.add_member.$post>) {
      return parseResponse(client.v1.groups.add_member.$post(args, options))
    },
  })
}

export function createPostV1GroupsAddMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.add_member.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.groups.add_member.$post>,
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
    const mutationDefaults = getPostV1GroupsAddMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupsRemoveMemberMutationKey() {
  return ['v1', '/v1/groups/remove_member', 'POST'] as const
}

export function getPostV1GroupsRemoveMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.remove_member.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.groups.remove_member.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupsRemoveMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.groups.remove_member.$post>) {
      return parseResponse(client.v1.groups.remove_member.$post(args, options))
    },
  })
}

export function createPostV1GroupsRemoveMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.groups.remove_member.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.groups.remove_member.$post>,
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
    const mutationDefaults = getPostV1GroupsRemoveMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupPermissionsListMutationKey() {
  return ['v1', '/v1/group_permissions/list', 'POST'] as const
}

export function getPostV1GroupPermissionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.group_permissions.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupPermissionsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.group_permissions.list.$post>) {
      return parseResponse(client.v1.group_permissions.list.$post(args, options))
    },
  })
}

export function createPostV1GroupPermissionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.group_permissions.list.$post>,
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
    const mutationDefaults = getPostV1GroupPermissionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GroupPermissionsCreateMutationKey() {
  return ['v1', '/v1/group_permissions/create', 'POST'] as const
}

export function getPostV1GroupPermissionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.group_permissions.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupPermissionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.group_permissions.create.$post>) {
      return parseResponse(client.v1.group_permissions.create.$post(args, options))
    },
  })
}

export function createPostV1GroupPermissionsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.group_permissions.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.group_permissions.create.$post>,
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
    const mutationDefaults = getPostV1GroupPermissionsCreateMutationOptions<
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

export function getPostV1GroupPermissionsDeleteMutationKey() {
  return ['v1', '/v1/group_permissions/delete', 'POST'] as const
}

export function getPostV1GroupPermissionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.group_permissions.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.group_permissions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GroupPermissionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.group_permissions.delete.$post>) {
      return parseResponse(client.v1.group_permissions.delete.$post(args, options))
    },
  })
}

export function createPostV1GroupPermissionsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.group_permissions.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.group_permissions.delete.$post>,
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
    const mutationDefaults = getPostV1GroupPermissionsDeleteMutationOptions<
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

export function getPostV1DomainVerificationsListPendingMutationKey() {
  return ['v1', '/v1/domain_verifications/list_pending', 'POST'] as const
}

export function getPostV1DomainVerificationsListPendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.domain_verifications.list_pending.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainVerificationsListPendingMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.domain_verifications.list_pending.$post(undefined, options))
    },
  })
}

export function createPostV1DomainVerificationsListPending<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.domain_verifications.list_pending.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1DomainVerificationsListPendingMutationOptions<
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

export function getPostV1DomainVerificationsCheckMutationKey() {
  return ['v1', '/v1/domain_verifications/check', 'POST'] as const
}

export function getPostV1DomainVerificationsCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain_verifications.check.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domain_verifications.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainVerificationsCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domain_verifications.check.$post>) {
      return parseResponse(client.v1.domain_verifications.check.$post(args, options))
    },
  })
}

export function createPostV1DomainVerificationsCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.domain_verifications.check.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.domain_verifications.check.$post>,
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
    const mutationDefaults = getPostV1DomainVerificationsCheckMutationOptions<
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

export function getPostV1DeploymentMetadataMutationKey() {
  return ['v1', '/v1/deployment/metadata', 'POST'] as const
}

export function getPostV1DeploymentMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deployment.metadata.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeploymentMetadataMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.deployment.metadata.$post(undefined, options))
    },
  })
}

export function createPostV1DeploymentMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.deployment.metadata.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1DeploymentMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ApplicationsListMutationKey() {
  return ['v1', '/v1/applications/list', 'POST'] as const
}

export function getPostV1ApplicationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.list.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApplicationsListMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.applications.list.$post(undefined, options))
    },
  })
}

export function createPostV1ApplicationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.list.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1ApplicationsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ApplicationsDeleteMutationKey() {
  return ['v1', '/v1/applications/delete', 'POST'] as const
}

export function getPostV1ApplicationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.applications.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApplicationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.applications.delete.$post>) {
      return parseResponse(client.v1.applications.delete.$post(args, options))
    },
  })
}

export function createPostV1ApplicationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.applications.delete.$post>,
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
    const mutationDefaults = getPostV1ApplicationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ApplicationsCreateMutationKey() {
  return ['v1', '/v1/applications/create', 'POST'] as const
}

export function getPostV1ApplicationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.applications.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApplicationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.applications.create.$post>) {
      return parseResponse(client.v1.applications.create.$post(args, options))
    },
  })
}

export function createPostV1ApplicationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.applications.create.$post>,
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
    const mutationDefaults = getPostV1ApplicationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ApplicationsTokenMutationKey() {
  return ['v1', '/v1/applications/token', 'POST'] as const
}

export function getPostV1ApplicationsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.applications.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApplicationsTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.applications.token.$post>) {
      return parseResponse(client.v1.applications.token.$post(args, options))
    },
  })
}

export function createPostV1ApplicationsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.applications.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.applications.token.$post>,
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
    const mutationDefaults = getPostV1ApplicationsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ScopedConfigurationListMutationKey() {
  return ['v1', '/v1/scoped_configuration/list', 'POST'] as const
}

export function getPostV1ScopedConfigurationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scoped_configuration.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scoped_configuration.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScopedConfigurationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scoped_configuration.list.$post>) {
      return parseResponse(client.v1.scoped_configuration.list.$post(args, options))
    },
  })
}

export function createPostV1ScopedConfigurationList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scoped_configuration.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scoped_configuration.list.$post>,
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
    const mutationDefaults = getPostV1ScopedConfigurationListMutationOptions<
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

export function getPostV1ScopedConfigurationGetContextMutationKey() {
  return ['v1', '/v1/scoped_configuration/get_context', 'POST'] as const
}

export function getPostV1ScopedConfigurationGetContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.get_context.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scoped_configuration.get_context.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScopedConfigurationGetContextMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.scoped_configuration.get_context.$post>,
    ) {
      return parseResponse(client.v1.scoped_configuration.get_context.$post(args, options))
    },
  })
}

export function createPostV1ScopedConfigurationGetContext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scoped_configuration.get_context.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scoped_configuration.get_context.$post>,
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
    const mutationDefaults = getPostV1ScopedConfigurationGetContextMutationOptions<
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

export function getPostV1ScopedConfigurationCreateMutationKey() {
  return ['v1', '/v1/scoped_configuration/create', 'POST'] as const
}

export function getPostV1ScopedConfigurationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scoped_configuration.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScopedConfigurationCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scoped_configuration.create.$post>) {
      return parseResponse(client.v1.scoped_configuration.create.$post(args, options))
    },
  })
}

export function createPostV1ScopedConfigurationCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scoped_configuration.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scoped_configuration.create.$post>,
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
    const mutationDefaults = getPostV1ScopedConfigurationCreateMutationOptions<
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

export function getPostV1ScopedConfigurationGetMutationKey() {
  return ['v1', '/v1/scoped_configuration/get', 'POST'] as const
}

export function getPostV1ScopedConfigurationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scoped_configuration.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scoped_configuration.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScopedConfigurationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scoped_configuration.get.$post>) {
      return parseResponse(client.v1.scoped_configuration.get.$post(args, options))
    },
  })
}

export function createPostV1ScopedConfigurationGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scoped_configuration.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scoped_configuration.get.$post>,
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
    const mutationDefaults = getPostV1ScopedConfigurationGetMutationOptions<
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

export function getPostV1ScopedConfigurationUpdateMutationKey() {
  return ['v1', '/v1/scoped_configuration/update', 'POST'] as const
}

export function getPostV1ScopedConfigurationUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scoped_configuration.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScopedConfigurationUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scoped_configuration.update.$post>) {
      return parseResponse(client.v1.scoped_configuration.update.$post(args, options))
    },
  })
}

export function createPostV1ScopedConfigurationUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scoped_configuration.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scoped_configuration.update.$post>,
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
    const mutationDefaults = getPostV1ScopedConfigurationUpdateMutationOptions<
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

export function getPostV1ScopedConfigurationDeleteMutationKey() {
  return ['v1', '/v1/scoped_configuration/delete', 'POST'] as const
}

export function getPostV1ScopedConfigurationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.scoped_configuration.delete.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scoped_configuration.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScopedConfigurationDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scoped_configuration.delete.$post>) {
      return parseResponse(client.v1.scoped_configuration.delete.$post(args, options))
    },
  })
}

export function createPostV1ScopedConfigurationDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scoped_configuration.delete.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scoped_configuration.delete.$post>,
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
    const mutationDefaults = getPostV1ScopedConfigurationDeleteMutationOptions<
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

export function getPostV1ConnectorRolloutListMutationKey() {
  return ['v1', '/v1/connector_rollout/list', 'POST'] as const
}

export function getPostV1ConnectorRolloutListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_rollout.list.$post>) {
      return parseResponse(client.v1.connector_rollout.list.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.list.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectorRolloutListByActorDefinitionIdMutationKey() {
  return ['v1', '/v1/connector_rollout/list_by_actor_definition_id', 'POST'] as const
}

export function getPostV1ConnectorRolloutListByActorDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutListByActorDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>,
    ) {
      return parseResponse(
        client.v1.connector_rollout.list_by_actor_definition_id.$post(args, options),
      )
    },
  })
}

export function createPostV1ConnectorRolloutListByActorDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutListByActorDefinitionIdMutationOptions<
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

export function getPostV1ConnectorRolloutListAllMutationKey() {
  return ['v1', '/v1/connector_rollout/list_all', 'POST'] as const
}

export function getPostV1ConnectorRolloutListAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.list_all.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutListAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.connector_rollout.list_all.$post(undefined, options))
    },
  })
}

export function createPostV1ConnectorRolloutListAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.list_all.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1ConnectorRolloutListAllMutationOptions<
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

export function getPostV1ConnectorRolloutGetMutationKey() {
  return ['v1', '/v1/connector_rollout/get', 'POST'] as const
}

export function getPostV1ConnectorRolloutGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_rollout.get.$post>) {
      return parseResponse(client.v1.connector_rollout.get.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.get.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectorRolloutGetActorSyncInfoMutationKey() {
  return ['v1', '/v1/connector_rollout/get_actor_sync_info', 'POST'] as const
}

export function getPostV1ConnectorRolloutGetActorSyncInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutGetActorSyncInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>,
    ) {
      return parseResponse(client.v1.connector_rollout.get_actor_sync_info.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutGetActorSyncInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutGetActorSyncInfoMutationOptions<
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

export function getPostV1ConnectorRolloutStartMutationKey() {
  return ['v1', '/v1/connector_rollout/start', 'POST'] as const
}

export function getPostV1ConnectorRolloutStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_rollout.start.$post>) {
      return parseResponse(client.v1.connector_rollout.start.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.start.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectorRolloutRolloutMutationKey() {
  return ['v1', '/v1/connector_rollout/rollout', 'POST'] as const
}

export function getPostV1ConnectorRolloutRolloutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.rollout.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.rollout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutRolloutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_rollout.rollout.$post>) {
      return parseResponse(client.v1.connector_rollout.rollout.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutRollout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.rollout.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.rollout.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutRolloutMutationOptions<
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

export function getPostV1ConnectorRolloutUpdateStateMutationKey() {
  return ['v1', '/v1/connector_rollout/update_state', 'POST'] as const
}

export function getPostV1ConnectorRolloutUpdateStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.update_state.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.update_state.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutUpdateStateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.update_state.$post>,
    ) {
      return parseResponse(client.v1.connector_rollout.update_state.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutUpdateState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.update_state.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.update_state.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutUpdateStateMutationOptions<
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

export function getPostV1ConnectorRolloutFinalizeMutationKey() {
  return ['v1', '/v1/connector_rollout/finalize', 'POST'] as const
}

export function getPostV1ConnectorRolloutFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connector_rollout.finalize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.finalize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutFinalizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connector_rollout.finalize.$post>) {
      return parseResponse(client.v1.connector_rollout.finalize.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutFinalize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.finalize.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.finalize.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutFinalizeMutationOptions<
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

export function getPostV1ConnectorRolloutManualStartMutationKey() {
  return ['v1', '/v1/connector_rollout/manual_start', 'POST'] as const
}

export function getPostV1ConnectorRolloutManualStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_start.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.manual_start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutManualStartMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.manual_start.$post>,
    ) {
      return parseResponse(client.v1.connector_rollout.manual_start.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutManualStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.manual_start.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.manual_start.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutManualStartMutationOptions<
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

export function getPostV1ConnectorRolloutManualRolloutMutationKey() {
  return ['v1', '/v1/connector_rollout/manual_rollout', 'POST'] as const
}

export function getPostV1ConnectorRolloutManualRolloutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_rollout.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.manual_rollout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutManualRolloutMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.manual_rollout.$post>,
    ) {
      return parseResponse(client.v1.connector_rollout.manual_rollout.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutManualRollout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.manual_rollout.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.manual_rollout.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutManualRolloutMutationOptions<
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

export function getPostV1ConnectorRolloutManualFinalizeMutationKey() {
  return ['v1', '/v1/connector_rollout/manual_finalize', 'POST'] as const
}

export function getPostV1ConnectorRolloutManualFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_finalize.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.manual_finalize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutManualFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.manual_finalize.$post>,
    ) {
      return parseResponse(client.v1.connector_rollout.manual_finalize.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutManualFinalize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.manual_finalize.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.manual_finalize.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutManualFinalizeMutationOptions<
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

export function getPostV1ConnectorRolloutManualPauseMutationKey() {
  return ['v1', '/v1/connector_rollout/manual_pause', 'POST'] as const
}

export function getPostV1ConnectorRolloutManualPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connector_rollout.manual_pause.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connector_rollout.manual_pause.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorRolloutManualPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connector_rollout.manual_pause.$post>,
    ) {
      return parseResponse(client.v1.connector_rollout.manual_pause.$post(args, options))
    },
  })
}

export function createPostV1ConnectorRolloutManualPause<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.connector_rollout.manual_pause.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.connector_rollout.manual_pause.$post>,
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
    const mutationDefaults = getPostV1ConnectorRolloutManualPauseMutationOptions<
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

export function getPostV1EntitlementsIsEntitledMutationKey() {
  return ['v1', '/v1/entitlements/is_entitled', 'POST'] as const
}

export function getPostV1EntitlementsIsEntitledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.is_entitled.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.entitlements.is_entitled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EntitlementsIsEntitledMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.entitlements.is_entitled.$post>) {
      return parseResponse(client.v1.entitlements.is_entitled.$post(args, options))
    },
  })
}

export function createPostV1EntitlementsIsEntitled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.entitlements.is_entitled.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.entitlements.is_entitled.$post>,
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
    const mutationDefaults = getPostV1EntitlementsIsEntitledMutationOptions<
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

export function getPostV1EntitlementsGetEntitlementsMutationKey() {
  return ['v1', '/v1/entitlements/get_entitlements', 'POST'] as const
}

export function getPostV1EntitlementsGetEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.entitlements.get_entitlements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.entitlements.get_entitlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EntitlementsGetEntitlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.entitlements.get_entitlements.$post>) {
      return parseResponse(client.v1.entitlements.get_entitlements.$post(args, options))
    },
  })
}

export function createPostV1EntitlementsGetEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.entitlements.get_entitlements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.entitlements.get_entitlements.$post>,
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
    const mutationDefaults = getPostV1EntitlementsGetEntitlementsMutationOptions<
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

export function getPostV1EntitlementsListPlansMutationKey() {
  return ['v1', '/v1/entitlements/list_plans', 'POST'] as const
}

export function getPostV1EntitlementsListPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.list_plans.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1EntitlementsListPlansMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.entitlements.list_plans.$post(undefined, options))
    },
  })
}

export function createPostV1EntitlementsListPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.entitlements.list_plans.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1EntitlementsListPlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1EntitlementsUpdatePlanMutationKey() {
  return ['v1', '/v1/entitlements/update_plan', 'POST'] as const
}

export function getPostV1EntitlementsUpdatePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.update_plan.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.entitlements.update_plan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EntitlementsUpdatePlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.entitlements.update_plan.$post>) {
      return parseResponse(client.v1.entitlements.update_plan.$post(args, options))
    },
  })
}

export function createPostV1EntitlementsUpdatePlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.entitlements.update_plan.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.entitlements.update_plan.$post>,
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
    const mutationDefaults = getPostV1EntitlementsUpdatePlanMutationOptions<
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

export function getPostV1UserInvitationsCreateMutationKey() {
  return ['v1', '/v1/user_invitations/create', 'POST'] as const
}

export function getPostV1UserInvitationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.user_invitations.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user_invitations.create.$post>) {
      return parseResponse(client.v1.user_invitations.create.$post(args, options))
    },
  })
}

export function createPostV1UserInvitationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.user_invitations.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.user_invitations.create.$post>,
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
    const mutationDefaults = getPostV1UserInvitationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UserInvitationsByCodeInviteCodeQueryKey(
  args: InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
) {
  return ['v1', '/v1/user_invitations/by_code/:inviteCode', args] as const
}

export function getV1UserInvitationsByCodeInviteCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsByCodeInviteCodeQueryKey>
  >({
    queryKey: getV1UserInvitationsByCodeInviteCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.user_invitations.by_code[':inviteCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UserInvitationsByCodeInviteCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsByCodeInviteCodeQueryKey>
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
      ...getV1UserInvitationsByCodeInviteCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1UserInvitationsListPendingMutationKey() {
  return ['v1', '/v1/user_invitations/list_pending', 'POST'] as const
}

export function getPostV1UserInvitationsListPendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.user_invitations.list_pending.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.user_invitations.list_pending.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsListPendingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user_invitations.list_pending.$post>) {
      return parseResponse(client.v1.user_invitations.list_pending.$post(args, options))
    },
  })
}

export function createPostV1UserInvitationsListPending<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.user_invitations.list_pending.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.user_invitations.list_pending.$post>,
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
    const mutationDefaults = getPostV1UserInvitationsListPendingMutationOptions<
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

export function getPostV1UserInvitationsAcceptMutationKey() {
  return ['v1', '/v1/user_invitations/accept', 'POST'] as const
}

export function getPostV1UserInvitationsAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.accept.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.user_invitations.accept.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsAcceptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user_invitations.accept.$post>) {
      return parseResponse(client.v1.user_invitations.accept.$post(args, options))
    },
  })
}

export function createPostV1UserInvitationsAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.user_invitations.accept.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.user_invitations.accept.$post>,
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
    const mutationDefaults = getPostV1UserInvitationsAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1UserInvitationsDeclineMutationKey() {
  return ['v1', '/v1/user_invitations/decline', 'POST'] as const
}

export function getPostV1UserInvitationsDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.decline.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.user_invitations.decline.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsDeclineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user_invitations.decline.$post>) {
      return parseResponse(client.v1.user_invitations.decline.$post(args, options))
    },
  })
}

export function createPostV1UserInvitationsDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.user_invitations.decline.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.user_invitations.decline.$post>,
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
    const mutationDefaults = getPostV1UserInvitationsDeclineMutationOptions<
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

export function getPostV1UserInvitationsCancelMutationKey() {
  return ['v1', '/v1/user_invitations/cancel', 'POST'] as const
}

export function getPostV1UserInvitationsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.user_invitations.cancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.user_invitations.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user_invitations.cancel.$post>) {
      return parseResponse(client.v1.user_invitations.cancel.$post(args, options))
    },
  })
}

export function createPostV1UserInvitationsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.user_invitations.cancel.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.user_invitations.cancel.$post>,
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
    const mutationDefaults = getPostV1UserInvitationsCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TagsListMutationKey() {
  return ['v1', '/v1/tags/list', 'POST'] as const
}

export function getPostV1TagsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tags.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tags.list.$post>) {
      return parseResponse(client.v1.tags.list.$post(args, options))
    },
  })
}

export function createPostV1TagsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tags.list.$post>,
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
    const mutationDefaults = getPostV1TagsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TagsUpdateMutationKey() {
  return ['v1', '/v1/tags/update', 'POST'] as const
}

export function getPostV1TagsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tags.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tags.update.$post>) {
      return parseResponse(client.v1.tags.update.$post(args, options))
    },
  })
}

export function createPostV1TagsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.update.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tags.update.$post>,
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
    const mutationDefaults = getPostV1TagsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TagsDeleteMutationKey() {
  return ['v1', '/v1/tags/delete', 'POST'] as const
}

export function getPostV1TagsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tags.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tags.delete.$post>) {
      return parseResponse(client.v1.tags.delete.$post(args, options))
    },
  })
}

export function createPostV1TagsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tags.delete.$post>,
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
    const mutationDefaults = getPostV1TagsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TagsCreateMutationKey() {
  return ['v1', '/v1/tags/create', 'POST'] as const
}

export function getPostV1TagsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tags.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tags.create.$post>) {
      return parseResponse(client.v1.tags.create.$post(args, options))
    },
  })
}

export function createPostV1TagsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tags.create.$post>,
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
    const mutationDefaults = getPostV1TagsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DiagnosticToolGenerateReportMutationKey() {
  return ['v1', '/v1/diagnostic_tool/generate_report', 'POST'] as const
}

export function getPostV1DiagnosticToolGenerateReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.diagnostic_tool.generate_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.diagnostic_tool.generate_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DiagnosticToolGenerateReportMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.diagnostic_tool.generate_report.$post>,
    ) {
      return parseResponse(client.v1.diagnostic_tool.generate_report.$post(args, options))
    },
  })
}

export function createPostV1DiagnosticToolGenerateReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.diagnostic_tool.generate_report.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.diagnostic_tool.generate_report.$post>,
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
    const mutationDefaults = getPostV1DiagnosticToolGenerateReportMutationOptions<
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

export function getPostV1SignalMutationKey() {
  return ['v1', '/v1/signal', 'POST'] as const
}

export function getPostV1SignalMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.signal.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.v1.signal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SignalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.signal.$post>) {
      return parseResponse(client.v1.signal.$post(args, options))
    },
  })
}

export function createPostV1Signal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.signal.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.signal.$post>,
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
    const mutationDefaults = getPostV1SignalMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CatalogsDiffMutationKey() {
  return ['v1', '/v1/catalogs/diff', 'POST'] as const
}

export function getPostV1CatalogsDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.diff.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.catalogs.diff.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CatalogsDiffMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.catalogs.diff.$post>) {
      return parseResponse(client.v1.catalogs.diff.$post(args, options))
    },
  })
}

export function createPostV1CatalogsDiff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.catalogs.diff.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.catalogs.diff.$post>,
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
    const mutationDefaults = getPostV1CatalogsDiffMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRunCheckMutationKey() {
  return ['v1', '/v1/commands/run/check', 'POST'] as const
}

export function getPostV1CommandsRunCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.check.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.run.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRunCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.run.check.$post>) {
      return parseResponse(client.v1.commands.run.check.$post(args, options))
    },
  })
}

export function createPostV1CommandsRunCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.check.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.run.check.$post>,
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
    const mutationDefaults = getPostV1CommandsRunCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRunDiscoverMutationKey() {
  return ['v1', '/v1/commands/run/discover', 'POST'] as const
}

export function getPostV1CommandsRunDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.discover.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.run.discover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRunDiscoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.run.discover.$post>) {
      return parseResponse(client.v1.commands.run.discover.$post(args, options))
    },
  })
}

export function createPostV1CommandsRunDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.discover.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.run.discover.$post>,
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
    const mutationDefaults = getPostV1CommandsRunDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRunConnectMutationKey() {
  return ['v1', '/v1/commands/run/connect', 'POST'] as const
}

export function getPostV1CommandsRunConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.connect.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.run.connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRunConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.run.connect.$post>) {
      return parseResponse(client.v1.commands.run.connect.$post(args, options))
    },
  })
}

export function createPostV1CommandsRunConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.connect.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.run.connect.$post>,
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
    const mutationDefaults = getPostV1CommandsRunConnectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRunReplicateMutationKey() {
  return ['v1', '/v1/commands/run/replicate', 'POST'] as const
}

export function getPostV1CommandsRunReplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.replicate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.run.replicate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRunReplicateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.run.replicate.$post>) {
      return parseResponse(client.v1.commands.run.replicate.$post(args, options))
    },
  })
}

export function createPostV1CommandsRunReplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.replicate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.run.replicate.$post>,
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
    const mutationDefaults = getPostV1CommandsRunReplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRunSpecMutationKey() {
  return ['v1', '/v1/commands/run/spec', 'POST'] as const
}

export function getPostV1CommandsRunSpecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.spec.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.run.spec.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRunSpecMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.run.spec.$post>) {
      return parseResponse(client.v1.commands.run.spec.$post(args, options))
    },
  })
}

export function createPostV1CommandsRunSpec<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.run.spec.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.run.spec.$post>,
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
    const mutationDefaults = getPostV1CommandsRunSpecMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsOutputCheckMutationKey() {
  return ['v1', '/v1/commands/output/check', 'POST'] as const
}

export function getPostV1CommandsOutputCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.check.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.output.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsOutputCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.output.check.$post>) {
      return parseResponse(client.v1.commands.output.check.$post(args, options))
    },
  })
}

export function createPostV1CommandsOutputCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.check.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.output.check.$post>,
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
    const mutationDefaults = getPostV1CommandsOutputCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsOutputConnectMutationKey() {
  return ['v1', '/v1/commands/output/connect', 'POST'] as const
}

export function getPostV1CommandsOutputConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.connect.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.output.connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsOutputConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.output.connect.$post>) {
      return parseResponse(client.v1.commands.output.connect.$post(args, options))
    },
  })
}

export function createPostV1CommandsOutputConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.commands.output.connect.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.output.connect.$post>,
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
    const mutationDefaults = getPostV1CommandsOutputConnectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsOutputDiscoverMutationKey() {
  return ['v1', '/v1/commands/output/discover', 'POST'] as const
}

export function getPostV1CommandsOutputDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.discover.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.output.discover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsOutputDiscoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.output.discover.$post>) {
      return parseResponse(client.v1.commands.output.discover.$post(args, options))
    },
  })
}

export function createPostV1CommandsOutputDiscover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.commands.output.discover.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.output.discover.$post>,
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
    const mutationDefaults = getPostV1CommandsOutputDiscoverMutationOptions<
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

export function getPostV1CommandsOutputReplicateMutationKey() {
  return ['v1', '/v1/commands/output/replicate', 'POST'] as const
}

export function getPostV1CommandsOutputReplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.replicate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.output.replicate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsOutputReplicateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.output.replicate.$post>) {
      return parseResponse(client.v1.commands.output.replicate.$post(args, options))
    },
  })
}

export function createPostV1CommandsOutputReplicate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.commands.output.replicate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.output.replicate.$post>,
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
    const mutationDefaults = getPostV1CommandsOutputReplicateMutationOptions<
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

export function getPostV1CommandsOutputSpecMutationKey() {
  return ['v1', '/v1/commands/output/spec', 'POST'] as const
}

export function getPostV1CommandsOutputSpecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.spec.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.output.spec.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsOutputSpecMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.output.spec.$post>) {
      return parseResponse(client.v1.commands.output.spec.$post(args, options))
    },
  })
}

export function createPostV1CommandsOutputSpec<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.output.spec.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.output.spec.$post>,
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
    const mutationDefaults = getPostV1CommandsOutputSpecMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsStatusMutationKey() {
  return ['v1', '/v1/commands/status', 'POST'] as const
}

export function getPostV1CommandsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.status.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.commands.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.status.$post>) {
      return parseResponse(client.v1.commands.status.$post(args, options))
    },
  })
}

export function createPostV1CommandsStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.status.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.status.$post>,
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
    const mutationDefaults = getPostV1CommandsStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsGetMutationKey() {
  return ['v1', '/v1/commands/get', 'POST'] as const
}

export function getPostV1CommandsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.commands.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.get.$post>) {
      return parseResponse(client.v1.commands.get.$post(args, options))
    },
  })
}

export function createPostV1CommandsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.commands.get.$post>,
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
    const mutationDefaults = getPostV1CommandsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsCancelMutationKey() {
  return ['v1', '/v1/commands/cancel', 'POST'] as const
}

export function getPostV1CommandsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.commands.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.cancel.$post>) {
      return parseResponse(client.v1.commands.cancel.$post(args, options))
    },
  })
}

export function createPostV1CommandsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.cancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.commands.cancel.$post>,
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
    const mutationDefaults = getPostV1CommandsCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1WorkloadOutputWriteMutationKey() {
  return ['v1', '/v1/workload_output/write', 'POST'] as const
}

export function getPostV1WorkloadOutputWriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workload_output.write.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.workload_output.write.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkloadOutputWriteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workload_output.write.$post>) {
      return parseResponse(client.v1.workload_output.write.$post(args, options))
    },
  })
}

export function createPostV1WorkloadOutputWrite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workload_output.write.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.workload_output.write.$post>,
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
    const mutationDefaults = getPostV1WorkloadOutputWriteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplaneGroupCreateMutationKey() {
  return ['v1', '/v1/dataplane_group/create', 'POST'] as const
}

export function getPostV1DataplaneGroupCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplane_group.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneGroupCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplane_group.create.$post>) {
      return parseResponse(client.v1.dataplane_group.create.$post(args, options))
    },
  })
}

export function createPostV1DataplaneGroupCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplane_group.create.$post>,
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
    const mutationDefaults = getPostV1DataplaneGroupCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplaneGroupUpdateMutationKey() {
  return ['v1', '/v1/dataplane_group/update', 'POST'] as const
}

export function getPostV1DataplaneGroupUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplane_group.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneGroupUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplane_group.update.$post>) {
      return parseResponse(client.v1.dataplane_group.update.$post(args, options))
    },
  })
}

export function createPostV1DataplaneGroupUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplane_group.update.$post>,
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
    const mutationDefaults = getPostV1DataplaneGroupUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplaneGroupDeleteMutationKey() {
  return ['v1', '/v1/dataplane_group/delete', 'POST'] as const
}

export function getPostV1DataplaneGroupDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplane_group.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneGroupDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplane_group.delete.$post>) {
      return parseResponse(client.v1.dataplane_group.delete.$post(args, options))
    },
  })
}

export function createPostV1DataplaneGroupDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplane_group.delete.$post>,
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
    const mutationDefaults = getPostV1DataplaneGroupDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplaneGroupListMutationKey() {
  return ['v1', '/v1/dataplane_group/list', 'POST'] as const
}

export function getPostV1DataplaneGroupListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplane_group.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneGroupListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplane_group.list.$post>) {
      return parseResponse(client.v1.dataplane_group.list.$post(args, options))
    },
  })
}

export function createPostV1DataplaneGroupList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplane_group.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplane_group.list.$post>,
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
    const mutationDefaults = getPostV1DataplaneGroupListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataWorkerAllocationListMutationKey() {
  return ['v1', '/v1/data_worker_allocation/list', 'POST'] as const
}

export function getPostV1DataWorkerAllocationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.data_worker_allocation.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataWorkerAllocationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.data_worker_allocation.list.$post>) {
      return parseResponse(client.v1.data_worker_allocation.list.$post(args, options))
    },
  })
}

export function createPostV1DataWorkerAllocationList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.data_worker_allocation.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.data_worker_allocation.list.$post>,
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
    const mutationDefaults = getPostV1DataWorkerAllocationListMutationOptions<
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

export function getPostV1DataWorkerAllocationGetMutationKey() {
  return ['v1', '/v1/data_worker_allocation/get', 'POST'] as const
}

export function getPostV1DataWorkerAllocationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.data_worker_allocation.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.data_worker_allocation.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataWorkerAllocationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.data_worker_allocation.get.$post>) {
      return parseResponse(client.v1.data_worker_allocation.get.$post(args, options))
    },
  })
}

export function createPostV1DataWorkerAllocationGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.data_worker_allocation.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.data_worker_allocation.get.$post>,
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
    const mutationDefaults = getPostV1DataWorkerAllocationGetMutationOptions<
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

export function getPostV1DataWorkerAllocationReallocateMutationKey() {
  return ['v1', '/v1/data_worker_allocation/reallocate', 'POST'] as const
}

export function getPostV1DataWorkerAllocationReallocateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.reallocate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.data_worker_allocation.reallocate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataWorkerAllocationReallocateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.data_worker_allocation.reallocate.$post>,
    ) {
      return parseResponse(client.v1.data_worker_allocation.reallocate.$post(args, options))
    },
  })
}

export function createPostV1DataWorkerAllocationReallocate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.data_worker_allocation.reallocate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.data_worker_allocation.reallocate.$post>,
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
    const mutationDefaults = getPostV1DataWorkerAllocationReallocateMutationOptions<
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

export function getPostV1DataWorkerAllocationAddCapacityMutationKey() {
  return ['v1', '/v1/data_worker_allocation/add_capacity', 'POST'] as const
}

export function getPostV1DataWorkerAllocationAddCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.add_capacity.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.data_worker_allocation.add_capacity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataWorkerAllocationAddCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.data_worker_allocation.add_capacity.$post>,
    ) {
      return parseResponse(client.v1.data_worker_allocation.add_capacity.$post(args, options))
    },
  })
}

export function createPostV1DataWorkerAllocationAddCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.data_worker_allocation.add_capacity.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.data_worker_allocation.add_capacity.$post>,
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
    const mutationDefaults = getPostV1DataWorkerAllocationAddCapacityMutationOptions<
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

export function getPostV1DataWorkerAllocationRemoveCapacityMutationKey() {
  return ['v1', '/v1/data_worker_allocation/remove_capacity', 'POST'] as const
}

export function getPostV1DataWorkerAllocationRemoveCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.data_worker_allocation.remove_capacity.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.data_worker_allocation.remove_capacity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataWorkerAllocationRemoveCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.data_worker_allocation.remove_capacity.$post>,
    ) {
      return parseResponse(client.v1.data_worker_allocation.remove_capacity.$post(args, options))
    },
  })
}

export function createPostV1DataWorkerAllocationRemoveCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.data_worker_allocation.remove_capacity.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.data_worker_allocation.remove_capacity.$post>,
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
    const mutationDefaults = getPostV1DataWorkerAllocationRemoveCapacityMutationOptions<
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

export function getPostV1DataplanesCreateMutationKey() {
  return ['v1', '/v1/dataplanes/create', 'POST'] as const
}

export function getPostV1DataplanesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.create.$post>) {
      return parseResponse(client.v1.dataplanes.create.$post(args, options))
    },
  })
}

export function createPostV1DataplanesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.create.$post>,
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
    const mutationDefaults = getPostV1DataplanesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesUpdateMutationKey() {
  return ['v1', '/v1/dataplanes/update', 'POST'] as const
}

export function getPostV1DataplanesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.update.$post>) {
      return parseResponse(client.v1.dataplanes.update.$post(args, options))
    },
  })
}

export function createPostV1DataplanesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.update.$post>,
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
    const mutationDefaults = getPostV1DataplanesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesDeleteMutationKey() {
  return ['v1', '/v1/dataplanes/delete', 'POST'] as const
}

export function getPostV1DataplanesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.delete.$post>) {
      return parseResponse(client.v1.dataplanes.delete.$post(args, options))
    },
  })
}

export function createPostV1DataplanesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.delete.$post>,
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
    const mutationDefaults = getPostV1DataplanesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesListMutationKey() {
  return ['v1', '/v1/dataplanes/list', 'POST'] as const
}

export function getPostV1DataplanesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.list.$post>) {
      return parseResponse(client.v1.dataplanes.list.$post(args, options))
    },
  })
}

export function createPostV1DataplanesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.list.$post>,
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
    const mutationDefaults = getPostV1DataplanesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesTokenMutationKey() {
  return ['v1', '/v1/dataplanes/token', 'POST'] as const
}

export function getPostV1DataplanesTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.token.$post>) {
      return parseResponse(client.v1.dataplanes.token.$post(args, options))
    },
  })
}

export function createPostV1DataplanesToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.token.$post>,
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
    const mutationDefaults = getPostV1DataplanesTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesHeartbeatMutationKey() {
  return ['v1', '/v1/dataplanes/heartbeat', 'POST'] as const
}

export function getPostV1DataplanesHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.heartbeat.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.heartbeat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesHeartbeatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.heartbeat.$post>) {
      return parseResponse(client.v1.dataplanes.heartbeat.$post(args, options))
    },
  })
}

export function createPostV1DataplanesHeartbeat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.heartbeat.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.heartbeat.$post>,
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
    const mutationDefaults = getPostV1DataplanesHeartbeatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesSecretStoragesListMutationKey() {
  return ['v1', '/v1/dataplanes/secret_storages/list', 'POST'] as const
}

export function getPostV1DataplanesSecretStoragesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.dataplanes.secret_storages.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.secret_storages.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesSecretStoragesListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.dataplanes.secret_storages.list.$post>,
    ) {
      return parseResponse(client.v1.dataplanes.secret_storages.list.$post(args, options))
    },
  })
}

export function createPostV1DataplanesSecretStoragesList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.dataplanes.secret_storages.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.secret_storages.list.$post>,
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
    const mutationDefaults = getPostV1DataplanesSecretStoragesListMutationOptions<
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

export function getPostV1DataplanesHealthMutationKey() {
  return ['v1', '/v1/dataplanes/health', 'POST'] as const
}

export function getPostV1DataplanesHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.health.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.health.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesHealthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.health.$post>) {
      return parseResponse(client.v1.dataplanes.health.$post(args, options))
    },
  })
}

export function createPostV1DataplanesHealth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.health.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.health.$post>,
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
    const mutationDefaults = getPostV1DataplanesHealthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DataplanesInitializeMutationKey() {
  return ['v1', '/v1/dataplanes/initialize', 'POST'] as const
}

export function getPostV1DataplanesInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.initialize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.dataplanes.initialize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplanesInitializeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataplanes.initialize.$post>) {
      return parseResponse(client.v1.dataplanes.initialize.$post(args, options))
    },
  })
}

export function createPostV1DataplanesInitialize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataplanes.initialize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dataplanes.initialize.$post>,
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
    const mutationDefaults = getPostV1DataplanesInitializeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SsoConfigGetMutationKey() {
  return ['v1', '/v1/sso_config/get', 'POST'] as const
}

export function getPostV1SsoConfigGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.sso_config.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SsoConfigGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sso_config.get.$post>) {
      return parseResponse(client.v1.sso_config.get.$post(args, options))
    },
  })
}

export function createPostV1SsoConfigGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.sso_config.get.$post>,
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
    const mutationDefaults = getPostV1SsoConfigGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SsoConfigCreateMutationKey() {
  return ['v1', '/v1/sso_config/create', 'POST'] as const
}

export function getPostV1SsoConfigCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.create.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sso_config.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SsoConfigCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sso_config.create.$post>) {
      return parseResponse(client.v1.sso_config.create.$post(args, options))
    },
  })
}

export function createPostV1SsoConfigCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.create.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sso_config.create.$post>,
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
    const mutationDefaults = getPostV1SsoConfigCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SsoConfigDeleteMutationKey() {
  return ['v1', '/v1/sso_config/delete', 'POST'] as const
}

export function getPostV1SsoConfigDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sso_config.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SsoConfigDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sso_config.delete.$post>) {
      return parseResponse(client.v1.sso_config.delete.$post(args, options))
    },
  })
}

export function createPostV1SsoConfigDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sso_config.delete.$post>,
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
    const mutationDefaults = getPostV1SsoConfigDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SsoConfigUpdateCredentialsMutationKey() {
  return ['v1', '/v1/sso_config/update_credentials', 'POST'] as const
}

export function getPostV1SsoConfigUpdateCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sso_config.update_credentials.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sso_config.update_credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SsoConfigUpdateCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sso_config.update_credentials.$post>) {
      return parseResponse(client.v1.sso_config.update_credentials.$post(args, options))
    },
  })
}

export function createPostV1SsoConfigUpdateCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.sso_config.update_credentials.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sso_config.update_credentials.$post>,
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
    const mutationDefaults = getPostV1SsoConfigUpdateCredentialsMutationOptions<
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

export function getPostV1SsoConfigActivateMutationKey() {
  return ['v1', '/v1/sso_config/activate', 'POST'] as const
}

export function getPostV1SsoConfigActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.activate.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sso_config.activate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SsoConfigActivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sso_config.activate.$post>) {
      return parseResponse(client.v1.sso_config.activate.$post(args, options))
    },
  })
}

export function createPostV1SsoConfigActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.sso_config.activate.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sso_config.activate.$post>,
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
    const mutationDefaults = getPostV1SsoConfigActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SsoConfigValidateTokenMutationKey() {
  return ['v1', '/v1/sso_config/validate_token', 'POST'] as const
}

export function getPostV1SsoConfigValidateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sso_config.validate_token.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sso_config.validate_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SsoConfigValidateTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sso_config.validate_token.$post>) {
      return parseResponse(client.v1.sso_config.validate_token.$post(args, options))
    },
  })
}

export function createPostV1SsoConfigValidateToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.sso_config.validate_token.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.sso_config.validate_token.$post>,
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
    const mutationDefaults = getPostV1SsoConfigValidateTokenMutationOptions<
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

export function getPostV1ScimConfigGetMutationKey() {
  return ['v1', '/v1/scim_config/get', 'POST'] as const
}

export function getPostV1ScimConfigGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.scim_config.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScimConfigGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scim_config.get.$post>) {
      return parseResponse(client.v1.scim_config.get.$post(args, options))
    },
  })
}

export function createPostV1ScimConfigGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scim_config.get.$post>,
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
    const mutationDefaults = getPostV1ScimConfigGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ScimConfigEnableMutationKey() {
  return ['v1', '/v1/scim_config/enable', 'POST'] as const
}

export function getPostV1ScimConfigEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.enable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scim_config.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScimConfigEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scim_config.enable.$post>) {
      return parseResponse(client.v1.scim_config.enable.$post(args, options))
    },
  })
}

export function createPostV1ScimConfigEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.enable.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scim_config.enable.$post>,
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
    const mutationDefaults = getPostV1ScimConfigEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ScimConfigRotateTokenMutationKey() {
  return ['v1', '/v1/scim_config/rotate_token', 'POST'] as const
}

export function getPostV1ScimConfigRotateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.rotate_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.scim_config.rotate_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScimConfigRotateTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scim_config.rotate_token.$post>) {
      return parseResponse(client.v1.scim_config.rotate_token.$post(args, options))
    },
  })
}

export function createPostV1ScimConfigRotateToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.scim_config.rotate_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.scim_config.rotate_token.$post>,
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
    const mutationDefaults = getPostV1ScimConfigRotateTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ScimConfigDisableMutationKey() {
  return ['v1', '/v1/scim_config/disable', 'POST'] as const
}

export function getPostV1ScimConfigDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.disable.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.scim_config.disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScimConfigDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.scim_config.disable.$post>) {
      return parseResponse(client.v1.scim_config.disable.$post(args, options))
    },
  })
}

export function createPostV1ScimConfigDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.scim_config.disable.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.scim_config.disable.$post>,
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
    const mutationDefaults = getPostV1ScimConfigDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AuditLogsListMutationKey() {
  return ['v1', '/v1/audit_logs/list', 'POST'] as const
}

export function getPostV1AuditLogsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.audit_logs.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuditLogsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.audit_logs.list.$post>) {
      return parseResponse(client.v1.audit_logs.list.$post(args, options))
    },
  })
}

export function createPostV1AuditLogsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.audit_logs.list.$post>,
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
    const mutationDefaults = getPostV1AuditLogsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicQueryKey() {
  return ['public', '/public'] as const
}

export function getPublicQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublicQueryKey>
  >({
    queryKey: getPublicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublic<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPublicV1HealthQueryKey() {
  return ['public', '/public/v1/health'] as const
}

export function getPublicV1HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1HealthQueryKey>
  >({
    queryKey: getPublicV1HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPublicV1ApplicationsQueryKey() {
  return ['public', '/public/v1/applications'] as const
}

export function getPublicV1ApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1ApplicationsQueryKey>
  >({
    queryKey: getPublicV1ApplicationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1Applications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1ApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1ApplicationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1ApplicationsMutationKey() {
  return ['public', '/public/v1/applications', 'POST'] as const
}

export function getPostPublicV1ApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1ApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.applications.$post>) {
      return parseResponse(client.public.v1.applications.$post(args, options))
    },
  })
}

export function createPostPublicV1Applications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.applications.$post>,
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
    const mutationDefaults = getPostPublicV1ApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1ApplicationsApplicationIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
) {
  return ['public', '/public/v1/applications/:applicationId', args] as const
}

export function getPublicV1ApplicationsApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1ApplicationsApplicationIdQueryKey>
  >({
    queryKey: getPublicV1ApplicationsApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.applications[':applicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1ApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1ApplicationsApplicationIdQueryKey>
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
      ...getPublicV1ApplicationsApplicationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1ApplicationsApplicationIdMutationKey() {
  return ['public', '/public/v1/applications/:applicationId', 'DELETE'] as const
}

export function getDeletePublicV1ApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.applications)[':applicationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1ApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.applications[':applicationId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1ApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.v1.applications)[':applicationId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1ApplicationsApplicationIdMutationOptions<
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

export function getPostPublicV1ApplicationsTokenMutationKey() {
  return ['public', '/public/v1/applications/token', 'POST'] as const
}

export function getPostPublicV1ApplicationsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.applications.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.applications.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1ApplicationsTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.applications.token.$post>) {
      return parseResponse(client.public.v1.applications.token.$post(args, options))
    },
  })
}

export function createPostPublicV1ApplicationsToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.public.v1.applications.token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.applications.token.$post>,
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
    const mutationDefaults = getPostPublicV1ApplicationsTokenMutationOptions<
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

export function getPublicV1JobsQueryKey(args: InferRequestType<typeof client.public.v1.jobs.$get>) {
  return ['public', '/public/v1/jobs', args] as const
}

export function getPublicV1JobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1JobsQueryKey>
  >({
    queryKey: getPublicV1JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1JobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1JobsMutationKey() {
  return ['public', '/public/v1/jobs', 'POST'] as const
}

export function getPostPublicV1JobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.public.v1.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1JobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.jobs.$post>) {
      return parseResponse(client.public.v1.jobs.$post(args, options))
    },
  })
}

export function createPostPublicV1Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.public.v1.jobs.$post>,
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
    const mutationDefaults = getPostPublicV1JobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1JobsJobIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
) {
  return ['public', '/public/v1/jobs/:jobId', args] as const
}

export function getPublicV1JobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1JobsJobIdQueryKey>
  >({
    queryKey: getPublicV1JobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1JobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1JobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1JobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePublicV1JobsJobIdMutationKey() {
  return ['public', '/public/v1/jobs/:jobId', 'DELETE'] as const
}

export function getDeletePublicV1JobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1JobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$delete']>) {
      return parseResponse(client.public.v1.jobs[':jobId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1JobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.jobs)[':jobId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1JobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1RegionsQueryKey(
  args: InferRequestType<typeof client.public.v1.regions.$get>,
) {
  return ['public', '/public/v1/regions', args] as const
}

export function getPublicV1RegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.regions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1RegionsQueryKey>
  >({
    queryKey: getPublicV1RegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.regions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Regions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.regions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1RegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1RegionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1RegionsMutationKey() {
  return ['public', '/public/v1/regions', 'POST'] as const
}

export function getPostPublicV1RegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.public.v1.regions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1RegionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.regions.$post>) {
      return parseResponse(client.public.v1.regions.$post(args, options))
    },
  })
}

export function createPostPublicV1Regions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.regions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.regions.$post>,
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
    const mutationDefaults = getPostPublicV1RegionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1RegionsRegionIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
) {
  return ['public', '/public/v1/regions/:regionId', args] as const
}

export function getPublicV1RegionsRegionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1RegionsRegionIdQueryKey>
  >({
    queryKey: getPublicV1RegionsRegionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.regions[':regionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1RegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1RegionsRegionIdQueryKey>
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
      ...getPublicV1RegionsRegionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1RegionsRegionIdMutationKey() {
  return ['public', '/public/v1/regions/:regionId', 'DELETE'] as const
}

export function getDeletePublicV1RegionsRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.regions)[':regionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1RegionsRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.regions[':regionId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1RegionsRegionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.regions)[':regionId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1RegionsRegionIdMutationOptions<
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

export function getPatchPublicV1RegionsRegionIdMutationKey() {
  return ['public', '/public/v1/regions/:regionId', 'PATCH'] as const
}

export function getPatchPublicV1RegionsRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.regions)[':regionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1RegionsRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.regions[':regionId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1RegionsRegionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.regions)[':regionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.regions)[':regionId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1RegionsRegionIdMutationOptions<
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

export function getPublicV1DataplanesQueryKey(
  args: InferRequestType<typeof client.public.v1.dataplanes.$get>,
) {
  return ['public', '/public/v1/dataplanes', args] as const
}

export function getPublicV1DataplanesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.dataplanes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1DataplanesQueryKey>
  >({
    queryKey: getPublicV1DataplanesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.dataplanes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Dataplanes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.dataplanes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1DataplanesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1DataplanesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1DataplanesMutationKey() {
  return ['public', '/public/v1/dataplanes', 'POST'] as const
}

export function getPostPublicV1DataplanesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.dataplanes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1DataplanesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.dataplanes.$post>) {
      return parseResponse(client.public.v1.dataplanes.$post(args, options))
    },
  })
}

export function createPostPublicV1Dataplanes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.dataplanes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.dataplanes.$post>,
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
    const mutationDefaults = getPostPublicV1DataplanesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1DataplanesDataplaneIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
) {
  return ['public', '/public/v1/dataplanes/:dataplaneId', args] as const
}

export function getPublicV1DataplanesDataplaneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1DataplanesDataplaneIdQueryKey>
  >({
    queryKey: getPublicV1DataplanesDataplaneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.dataplanes[':dataplaneId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1DataplanesDataplaneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1DataplanesDataplaneIdQueryKey>
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
      ...getPublicV1DataplanesDataplaneIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1DataplanesDataplaneIdMutationKey() {
  return ['public', '/public/v1/dataplanes/:dataplaneId', 'DELETE'] as const
}

export function getDeletePublicV1DataplanesDataplaneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1DataplanesDataplaneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.dataplanes[':dataplaneId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1DataplanesDataplaneId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1DataplanesDataplaneIdMutationOptions<
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

export function getPatchPublicV1DataplanesDataplaneIdMutationKey() {
  return ['public', '/public/v1/dataplanes/:dataplaneId', 'PATCH'] as const
}

export function getPatchPublicV1DataplanesDataplaneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1DataplanesDataplaneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.dataplanes[':dataplaneId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1DataplanesDataplaneId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1DataplanesDataplaneIdMutationOptions<
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

export function getPublicV1ConnectorDefinitionsQueryKey(
  args: InferRequestType<typeof client.public.v1.connector_definitions.$get>,
) {
  return ['public', '/public/v1/connector_definitions', args] as const
}

export function getPublicV1ConnectorDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.v1.connector_definitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1ConnectorDefinitionsQueryKey>
  >({
    queryKey: getPublicV1ConnectorDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.connector_definitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1ConnectorDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.connector_definitions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.public.v1.connector_definitions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1ConnectorDefinitionsQueryKey>
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
      ...getPublicV1ConnectorDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesQueryKey(
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesQueryKey>
  >({
    queryKey: getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesQueryKey>
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
      ...getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources',
    'POST',
  ] as const
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
        >,
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
    const mutationDefaults =
      getPostPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesMutationOptions<
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdQueryKey(
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdQueryKey
    >
  >({
    queryKey:
      getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
          ':definitionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdQueryKey
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
      ...getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources/:definitionId',
    'PUT',
  ] as const
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
          ':definitionId'
        ].$put(args, options),
      )
    },
  })
}

export function createPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
        >,
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
    const mutationDefaults =
      getPutPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationOptions<
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

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources/:definitionId',
    'DELETE',
  ] as const
}

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
          ':definitionId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
        >,
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
    const mutationDefaults =
      getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdMutationOptions<
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesQueryKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
) {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/sources', args] as const
}

export function getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesQueryKey>
  >({
    queryKey: getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceIdDefinitionsSources<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesQueryKey>
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
      ...getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsSourcesMutationKey() {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/sources', 'POST'] as const
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1WorkspacesWorkspaceIdDefinitionsSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.sources.$post(args, options),
      )
    },
  })
}

export function createPostPublicV1WorkspacesWorkspaceIdDefinitionsSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
        >,
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
    const mutationDefaults = getPostPublicV1WorkspacesWorkspaceIdDefinitionsSourcesMutationOptions<
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdQueryKey(
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdQueryKey>
  >({
    queryKey: getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdQueryKey>
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
      ...getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/sources/:definitionId',
    'PUT',
  ] as const
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
        >,
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
    const mutationDefaults =
      getPutPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationOptions<
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

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/sources/:definitionId',
    'DELETE',
  ] as const
}

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
        >,
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
    const mutationDefaults =
      getDeletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdMutationOptions<
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsQueryKey(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
) {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/destinations', args] as const
}

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsQueryKey>
  >({
    queryKey: getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.destinations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceIdDefinitionsDestinations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsQueryKey>
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
      ...getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsMutationKey() {
  return ['public', '/public/v1/workspaces/:workspaceId/definitions/destinations', 'POST'] as const
}

export function getPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.destinations.$post(args, options),
      )
    },
  })
}

export function createPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
        >,
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
    const mutationDefaults =
      getPostPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsMutationOptions<
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdQueryKey(
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

export function getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdQueryKey>
  >({
    queryKey: getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.destinations[':definitionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdQueryKey
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
      ...getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/destinations/:definitionId',
    'PUT',
  ] as const
}

export function getPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.destinations[':definitionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
        >,
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
    const mutationDefaults =
      getPutPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationOptions<
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

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/definitions/destinations/:definitionId',
    'DELETE',
  ] as const
}

export function getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].definitions.destinations[
          ':definitionId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
        >,
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
    const mutationDefaults =
      getDeletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdMutationOptions<
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

export function getPublicV1SourcesQueryKey(
  args: InferRequestType<typeof client.public.v1.sources.$get>,
) {
  return ['public', '/public/v1/sources', args] as const
}

export function getPublicV1SourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1SourcesQueryKey>
  >({
    queryKey: getPublicV1SourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.sources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1SourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1SourcesMutationKey() {
  return ['public', '/public/v1/sources', 'POST'] as const
}

export function getPostPublicV1SourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.public.v1.sources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1SourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.sources.$post>) {
      return parseResponse(client.public.v1.sources.$post(args, options))
    },
  })
}

export function createPostPublicV1Sources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.sources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.sources.$post>,
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
    const mutationDefaults = getPostPublicV1SourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1SourcesSourceIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
) {
  return ['public', '/public/v1/sources/:sourceId', args] as const
}

export function getPublicV1SourcesSourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1SourcesSourceIdQueryKey>
  >({
    queryKey: getPublicV1SourcesSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.sources[':sourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1SourcesSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1SourcesSourceIdQueryKey>
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
      ...getPublicV1SourcesSourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPublicV1SourcesSourceIdMutationKey() {
  return ['public', '/public/v1/sources/:sourceId', 'PUT'] as const
}

export function getPutPublicV1SourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPublicV1SourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$put']>,
    ) {
      return parseResponse(client.public.v1.sources[':sourceId'].$put(args, options))
    },
  })
}

export function createPutPublicV1SourcesSourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$put']>,
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
    const mutationDefaults = getPutPublicV1SourcesSourceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePublicV1SourcesSourceIdMutationKey() {
  return ['public', '/public/v1/sources/:sourceId', 'DELETE'] as const
}

export function getDeletePublicV1SourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1SourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.sources[':sourceId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1SourcesSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1SourcesSourceIdMutationOptions<
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

export function getPatchPublicV1SourcesSourceIdMutationKey() {
  return ['public', '/public/v1/sources/:sourceId', 'PATCH'] as const
}

export function getPatchPublicV1SourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1SourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.sources[':sourceId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1SourcesSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.sources)[':sourceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1SourcesSourceIdMutationOptions<
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

export function getPublicV1DestinationsQueryKey(
  args: InferRequestType<typeof client.public.v1.destinations.$get>,
) {
  return ['public', '/public/v1/destinations', args] as const
}

export function getPublicV1DestinationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.v1.destinations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1DestinationsQueryKey>
  >({
    queryKey: getPublicV1DestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.destinations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1Destinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.destinations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1DestinationsQueryKey>
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
      ...getPublicV1DestinationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1DestinationsMutationKey() {
  return ['public', '/public/v1/destinations', 'POST'] as const
}

export function getPostPublicV1DestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.destinations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1DestinationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.destinations.$post>) {
      return parseResponse(client.public.v1.destinations.$post(args, options))
    },
  })
}

export function createPostPublicV1Destinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.destinations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.destinations.$post>,
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
    const mutationDefaults = getPostPublicV1DestinationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1DestinationsDestinationIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
) {
  return ['public', '/public/v1/destinations/:destinationId', args] as const
}

export function getPublicV1DestinationsDestinationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1DestinationsDestinationIdQueryKey>
  >({
    queryKey: getPublicV1DestinationsDestinationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.destinations[':destinationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1DestinationsDestinationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1DestinationsDestinationIdQueryKey>
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
      ...getPublicV1DestinationsDestinationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPublicV1DestinationsDestinationIdMutationKey() {
  return ['public', '/public/v1/destinations/:destinationId', 'PUT'] as const
}

export function getPutPublicV1DestinationsDestinationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPublicV1DestinationsDestinationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$put']>,
    ) {
      return parseResponse(client.public.v1.destinations[':destinationId'].$put(args, options))
    },
  })
}

export function createPutPublicV1DestinationsDestinationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$put']>,
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
    const mutationDefaults = getPutPublicV1DestinationsDestinationIdMutationOptions<
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

export function getDeletePublicV1DestinationsDestinationIdMutationKey() {
  return ['public', '/public/v1/destinations/:destinationId', 'DELETE'] as const
}

export function getDeletePublicV1DestinationsDestinationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1DestinationsDestinationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.destinations[':destinationId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1DestinationsDestinationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1DestinationsDestinationIdMutationOptions<
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

export function getPatchPublicV1DestinationsDestinationIdMutationKey() {
  return ['public', '/public/v1/destinations/:destinationId', 'PATCH'] as const
}

export function getPatchPublicV1DestinationsDestinationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1DestinationsDestinationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.destinations[':destinationId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1DestinationsDestinationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1DestinationsDestinationIdMutationOptions<
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

export function getPublicV1OauthCallbackQueryKey(
  args: InferRequestType<typeof client.public.v1.oauth.callback.$get>,
) {
  return ['public', '/public/v1/oauth/callback', args] as const
}

export function getPublicV1OauthCallbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.v1.oauth.callback.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1OauthCallbackQueryKey>
  >({
    queryKey: getPublicV1OauthCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.oauth.callback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1OauthCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.oauth.callback.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.oauth.callback.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1OauthCallbackQueryKey>
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
      ...getPublicV1OauthCallbackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1SourcesInitiateOAuthMutationKey() {
  return ['public', '/public/v1/sources/initiateOAuth', 'POST'] as const
}

export function getPostPublicV1SourcesInitiateOAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.sources.initiateOAuth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.sources.initiateOAuth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1SourcesInitiateOAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.sources.initiateOAuth.$post>) {
      return parseResponse(client.public.v1.sources.initiateOAuth.$post(args, options))
    },
  })
}

export function createPostPublicV1SourcesInitiateOAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.public.v1.sources.initiateOAuth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.sources.initiateOAuth.$post>,
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
    const mutationDefaults = getPostPublicV1SourcesInitiateOAuthMutationOptions<
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

export function getPublicV1ConnectionsQueryKey(
  args: InferRequestType<typeof client.public.v1.connections.$get>,
) {
  return ['public', '/public/v1/connections', args] as const
}

export function getPublicV1ConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.v1.connections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1ConnectionsQueryKey>
  >({
    queryKey: getPublicV1ConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Connections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1ConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1ConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1ConnectionsMutationKey() {
  return ['public', '/public/v1/connections', 'POST'] as const
}

export function getPostPublicV1ConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1ConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.connections.$post>) {
      return parseResponse(client.public.v1.connections.$post(args, options))
    },
  })
}

export function createPostPublicV1Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.connections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.connections.$post>,
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
    const mutationDefaults = getPostPublicV1ConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1ConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
) {
  return ['public', '/public/v1/connections/:connectionId', args] as const
}

export function getPublicV1ConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1ConnectionsConnectionIdQueryKey>
  >({
    queryKey: getPublicV1ConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.connections[':connectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1ConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1ConnectionsConnectionIdQueryKey>
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
      ...getPublicV1ConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1ConnectionsConnectionIdMutationKey() {
  return ['public', '/public/v1/connections/:connectionId', 'DELETE'] as const
}

export function getDeletePublicV1ConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1ConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.connections[':connectionId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1ConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.public.v1.connections)[':connectionId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1ConnectionsConnectionIdMutationOptions<
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

export function getPatchPublicV1ConnectionsConnectionIdMutationKey() {
  return ['public', '/public/v1/connections/:connectionId', 'PATCH'] as const
}

export function getPatchPublicV1ConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1ConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.connections[':connectionId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1ConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.connections)[':connectionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1ConnectionsConnectionIdMutationOptions<
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

export function getPublicV1StreamsQueryKey(
  args: InferRequestType<typeof client.public.v1.streams.$get>,
) {
  return ['public', '/public/v1/streams', args] as const
}

export function getPublicV1StreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.streams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1StreamsQueryKey>
  >({
    queryKey: getPublicV1StreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.streams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Streams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.streams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.streams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1StreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1StreamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPublicV1WorkspacesQueryKey(
  args: InferRequestType<typeof client.public.v1.workspaces.$get>,
) {
  return ['public', '/public/v1/workspaces', args] as const
}

export function getPublicV1WorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.workspaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesQueryKey>
  >({
    queryKey: getPublicV1WorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Workspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.workspaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1WorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1WorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1WorkspacesMutationKey() {
  return ['public', '/public/v1/workspaces', 'POST'] as const
}

export function getPostPublicV1WorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1WorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.workspaces.$post>) {
      return parseResponse(client.public.v1.workspaces.$post(args, options))
    },
  })
}

export function createPostPublicV1Workspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.workspaces.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.workspaces.$post>,
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
    const mutationDefaults = getPostPublicV1WorkspacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1WorkspacesWorkspaceIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
) {
  return ['public', '/public/v1/workspaces/:workspaceId', args] as const
}

export function getPublicV1WorkspacesWorkspaceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1WorkspacesWorkspaceIdQueryKey>
  >({
    queryKey: getPublicV1WorkspacesWorkspaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1WorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1WorkspacesWorkspaceIdQueryKey>
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
      ...getPublicV1WorkspacesWorkspaceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1WorkspacesWorkspaceIdMutationKey() {
  return ['public', '/public/v1/workspaces/:workspaceId', 'DELETE'] as const
}

export function getDeletePublicV1WorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1WorkspacesWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.workspaces[':workspaceId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1WorkspacesWorkspaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1WorkspacesWorkspaceIdMutationOptions<
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

export function getPatchPublicV1WorkspacesWorkspaceIdMutationKey() {
  return ['public', '/public/v1/workspaces/:workspaceId', 'PATCH'] as const
}

export function getPatchPublicV1WorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1WorkspacesWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.workspaces[':workspaceId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1WorkspacesWorkspaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1WorkspacesWorkspaceIdMutationOptions<
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

export function getPutPublicV1WorkspacesWorkspaceIdOauthCredentialsMutationKey() {
  return ['public', '/public/v1/workspaces/:workspaceId/oauthCredentials', 'PUT'] as const
}

export function getPutPublicV1WorkspacesWorkspaceIdOauthCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPublicV1WorkspacesWorkspaceIdOauthCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].oauthCredentials.$put(args, options),
      )
    },
  })
}

export function createPutPublicV1WorkspacesWorkspaceIdOauthCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
        >,
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
    const mutationDefaults = getPutPublicV1WorkspacesWorkspaceIdOauthCredentialsMutationOptions<
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

export function getDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameMutationKey() {
  return [
    'public',
    '/public/v1/workspaces/:workspaceId/oauthCredentials/:actorType/:name',
    'DELETE',
  ] as const
}

export function getDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.workspaces[':workspaceId'].oauthCredentials[':actorType'][':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
        >,
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
    const mutationDefaults =
      getDeletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameMutationOptions<
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

export function getPublicV1PermissionsPermissionIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
) {
  return ['public', '/public/v1/permissions/:permissionId', args] as const
}

export function getPublicV1PermissionsPermissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1PermissionsPermissionIdQueryKey>
  >({
    queryKey: getPublicV1PermissionsPermissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.permissions[':permissionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1PermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1PermissionsPermissionIdQueryKey>
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
      ...getPublicV1PermissionsPermissionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1PermissionsPermissionIdMutationKey() {
  return ['public', '/public/v1/permissions/:permissionId', 'DELETE'] as const
}

export function getDeletePublicV1PermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1PermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.permissions[':permissionId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1PermissionsPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1PermissionsPermissionIdMutationOptions<
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

export function getPatchPublicV1PermissionsPermissionIdMutationKey() {
  return ['public', '/public/v1/permissions/:permissionId', 'PATCH'] as const
}

export function getPatchPublicV1PermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1PermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.permissions[':permissionId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1PermissionsPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1PermissionsPermissionIdMutationOptions<
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

export function getPublicV1PermissionsQueryKey(
  args: InferRequestType<typeof client.public.v1.permissions.$get>,
) {
  return ['public', '/public/v1/permissions', args] as const
}

export function getPublicV1PermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.v1.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1PermissionsQueryKey>
  >({
    queryKey: getPublicV1PermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Permissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.permissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1PermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1PermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1PermissionsMutationKey() {
  return ['public', '/public/v1/permissions', 'POST'] as const
}

export function getPostPublicV1PermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1PermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.permissions.$post>) {
      return parseResponse(client.public.v1.permissions.$post(args, options))
    },
  })
}

export function createPostPublicV1Permissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.permissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.permissions.$post>,
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
    const mutationDefaults = getPostPublicV1PermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1OrganizationsQueryKey() {
  return ['public', '/public/v1/organizations'] as const
}

export function getPublicV1OrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1OrganizationsQueryKey>
  >({
    queryKey: getPublicV1OrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.organizations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1Organizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1OrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1OrganizationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutPublicV1OrganizationsOrganizationIdOauthCredentialsMutationKey() {
  return ['public', '/public/v1/organizations/:organizationId/oauthCredentials', 'PUT'] as const
}

export function getPutPublicV1OrganizationsOrganizationIdOauthCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPublicV1OrganizationsOrganizationIdOauthCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
      >,
    ) {
      return parseResponse(
        client.public.v1.organizations[':organizationId'].oauthCredentials.$put(args, options),
      )
    },
  })
}

export function createPutPublicV1OrganizationsOrganizationIdOauthCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
        >,
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
    const mutationDefaults =
      getPutPublicV1OrganizationsOrganizationIdOauthCredentialsMutationOptions<
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

export function getDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameMutationKey() {
  return [
    'public',
    '/public/v1/organizations/:organizationId/oauthCredentials/:actorType/:name',
    'DELETE',
  ] as const
}

export function getDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.organizations[':organizationId'].oauthCredentials[':actorType'][
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
        >,
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
    const mutationDefaults =
      getDeletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameMutationOptions<
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

export function getPublicV1UsersQueryKey(
  args: InferRequestType<typeof client.public.v1.users.$get>,
) {
  return ['public', '/public/v1/users', args] as const
}

export function getPublicV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1UsersQueryKey>
  >({
    queryKey: getPublicV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPublicV1GroupsQueryKey(
  args: InferRequestType<typeof client.public.v1.groups.$get>,
) {
  return ['public', '/public/v1/groups', args] as const
}

export function getPublicV1GroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1GroupsQueryKey>
  >({
    queryKey: getPublicV1GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Groups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1GroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1GroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1GroupsMutationKey() {
  return ['public', '/public/v1/groups', 'POST'] as const
}

export function getPostPublicV1GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.public.v1.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1GroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.groups.$post>) {
      return parseResponse(client.public.v1.groups.$post(args, options))
    },
  })
}

export function createPostPublicV1Groups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.groups.$post>,
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
    const mutationDefaults = getPostPublicV1GroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1GroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
) {
  return ['public', '/public/v1/groups/:groupId', args] as const
}

export function getPublicV1GroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1GroupsGroupIdQueryKey>
  >({
    queryKey: getPublicV1GroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1GroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1GroupsGroupIdQueryKey>
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
      ...getPublicV1GroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePublicV1GroupsGroupIdMutationKey() {
  return ['public', '/public/v1/groups/:groupId', 'DELETE'] as const
}

export function getDeletePublicV1GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$delete']>,
    ) {
      return parseResponse(client.public.v1.groups[':groupId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1GroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.groups)[':groupId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1GroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPublicV1GroupsGroupIdMutationKey() {
  return ['public', '/public/v1/groups/:groupId', 'PATCH'] as const
}

export function getPatchPublicV1GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$patch']>,
    ) {
      return parseResponse(client.public.v1.groups[':groupId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1GroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.groups)[':groupId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1GroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1GroupsGroupIdMembersQueryKey(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
) {
  return ['public', '/public/v1/groups/:groupId/members', args] as const
}

export function getPublicV1GroupsGroupIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1GroupsGroupIdMembersQueryKey>
  >({
    queryKey: getPublicV1GroupsGroupIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.groups[':groupId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1GroupsGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1GroupsGroupIdMembersQueryKey>
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
      ...getPublicV1GroupsGroupIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1GroupsGroupIdMembersMutationKey() {
  return ['public', '/public/v1/groups/:groupId/members', 'POST'] as const
}

export function getPostPublicV1GroupsGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1GroupsGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>,
    ) {
      return parseResponse(client.public.v1.groups[':groupId'].members.$post(args, options))
    },
  })
}

export function createPostPublicV1GroupsGroupIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>,
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
    const mutationDefaults = getPostPublicV1GroupsGroupIdMembersMutationOptions<
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

export function getDeletePublicV1GroupsGroupIdMembersUserIdMutationKey() {
  return ['public', '/public/v1/groups/:groupId/members/:userId', 'DELETE'] as const
}

export function getDeletePublicV1GroupsGroupIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1GroupsGroupIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.groups[':groupId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePublicV1GroupsGroupIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']
        >,
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
    const mutationDefaults = getDeletePublicV1GroupsGroupIdMembersUserIdMutationOptions<
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

export function getPublicV1GroupsGroupIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
) {
  return ['public', '/public/v1/groups/:groupId/permissions', args] as const
}

export function getPublicV1GroupsGroupIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1GroupsGroupIdPermissionsQueryKey>
  >({
    queryKey: getPublicV1GroupsGroupIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.groups[':groupId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1GroupsGroupIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1GroupsGroupIdPermissionsQueryKey>
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
      ...getPublicV1GroupsGroupIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPublicV1GroupsGroupIdPermissionsMutationKey() {
  return ['public', '/public/v1/groups/:groupId/permissions', 'POST'] as const
}

export function getPostPublicV1GroupsGroupIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1GroupsGroupIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>,
    ) {
      return parseResponse(client.public.v1.groups[':groupId'].permissions.$post(args, options))
    },
  })
}

export function createPostPublicV1GroupsGroupIdPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>,
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
    const mutationDefaults = getPostPublicV1GroupsGroupIdPermissionsMutationOptions<
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

export function getDeletePublicV1GroupsGroupIdPermissionsPermissionIdMutationKey() {
  return ['public', '/public/v1/groups/:groupId/permissions/:permissionId', 'DELETE'] as const
}

export function getDeletePublicV1GroupsGroupIdPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1GroupsGroupIdPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.v1.groups[':groupId'].permissions[':permissionId'].$delete(args, options),
      )
    },
  })
}

export function createDeletePublicV1GroupsGroupIdPermissionsPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
        >,
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
    const mutationDefaults = getDeletePublicV1GroupsGroupIdPermissionsPermissionIdMutationOptions<
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

export function getPublicV1TagsQueryKey(args: InferRequestType<typeof client.public.v1.tags.$get>) {
  return ['public', '/public/v1/tags', args] as const
}

export function getPublicV1TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.v1.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1TagsQueryKey>
  >({
    queryKey: getPublicV1TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.v1.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1TagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPublicV1TagsMutationKey() {
  return ['public', '/public/v1/tags', 'POST'] as const
}

export function getPostPublicV1TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.public.v1.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1TagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.tags.$post>) {
      return parseResponse(client.public.v1.tags.$post(args, options))
    },
  })
}

export function createPostPublicV1Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.public.v1.tags.$post>,
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
    const mutationDefaults = getPostPublicV1TagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicV1TagsTagIdQueryKey(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
) {
  return ['public', '/public/v1/tags/:tagId', args] as const
}

export function getPublicV1TagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1TagsTagIdQueryKey>
  >({
    queryKey: getPublicV1TagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.tags[':tagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1TagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1TagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicV1TagsTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePublicV1TagsTagIdMutationKey() {
  return ['public', '/public/v1/tags/:tagId', 'DELETE'] as const
}

export function getDeletePublicV1TagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.public.v1.tags)[':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicV1TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$delete']>) {
      return parseResponse(client.public.v1.tags[':tagId'].$delete(args, options))
    },
  })
}

export function createDeletePublicV1TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.public.v1.tags)[':tagId']['$delete']>,
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
    const mutationDefaults = getDeletePublicV1TagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPublicV1TagsTagIdMutationKey() {
  return ['public', '/public/v1/tags/:tagId', 'PATCH'] as const
}

export function getPatchPublicV1TagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.v1.tags)[':tagId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicV1TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$patch']>) {
      return parseResponse(client.public.v1.tags[':tagId'].$patch(args, options))
    },
  })
}

export function createPatchPublicV1TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.v1.tags)[':tagId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.v1.tags)[':tagId']['$patch']>,
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
    const mutationDefaults = getPatchPublicV1TagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPublicV1EmbeddedWidgetTokenMutationKey() {
  return ['public', '/public/v1/embedded/widget_token', 'POST'] as const
}

export function getPostPublicV1EmbeddedWidgetTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.widget_token.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.embedded.widget_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1EmbeddedWidgetTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.embedded.widget_token.$post>) {
      return parseResponse(client.public.v1.embedded.widget_token.$post(args, options))
    },
  })
}

export function createPostPublicV1EmbeddedWidgetToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.public.v1.embedded.widget_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.embedded.widget_token.$post>,
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
    const mutationDefaults = getPostPublicV1EmbeddedWidgetTokenMutationOptions<
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

export function getPostPublicV1EmbeddedScopedTokenMutationKey() {
  return ['public', '/public/v1/embedded/scoped_token', 'POST'] as const
}

export function getPostPublicV1EmbeddedScopedTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.scoped_token.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.public.v1.embedded.scoped_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicV1EmbeddedScopedTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.v1.embedded.scoped_token.$post>) {
      return parseResponse(client.public.v1.embedded.scoped_token.$post(args, options))
    },
  })
}

export function createPostPublicV1EmbeddedScopedToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.public.v1.embedded.scoped_token.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.public.v1.embedded.scoped_token.$post>,
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
    const mutationDefaults = getPostPublicV1EmbeddedScopedTokenMutationOptions<
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

export function getPublicV1EmbeddedOrganizationsQueryKey() {
  return ['public', '/public/v1/embedded/organizations'] as const
}

export function getPublicV1EmbeddedOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicV1EmbeddedOrganizationsQueryKey>
  >({
    queryKey: getPublicV1EmbeddedOrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.v1.embedded.organizations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicV1EmbeddedOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.public.v1.embedded.organizations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicV1EmbeddedOrganizationsQueryKey>
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
      ...getPublicV1EmbeddedOrganizationsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ServiceAccountsTokenMutationKey() {
  return ['v1', '/v1/service_accounts/token', 'POST'] as const
}

export function getPostV1ServiceAccountsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.service_accounts.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.service_accounts.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServiceAccountsTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.service_accounts.token.$post>) {
      return parseResponse(client.v1.service_accounts.token.$post(args, options))
    },
  })
}

export function createPostV1ServiceAccountsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.service_accounts.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.service_accounts.token.$post>,
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
    const mutationDefaults = getPostV1ServiceAccountsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DomainVerificationsCreateMutationKey() {
  return ['v1', '/v1/domain_verifications/create', 'POST'] as const
}

export function getPostV1DomainVerificationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.domain_verifications.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domain_verifications.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainVerificationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domain_verifications.create.$post>) {
      return parseResponse(client.v1.domain_verifications.create.$post(args, options))
    },
  })
}

export function createPostV1DomainVerificationsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.domain_verifications.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.domain_verifications.create.$post>,
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
    const mutationDefaults = getPostV1DomainVerificationsCreateMutationOptions<
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

export function getPostV1DomainVerificationsListMutationKey() {
  return ['v1', '/v1/domain_verifications/list', 'POST'] as const
}

export function getPostV1DomainVerificationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain_verifications.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domain_verifications.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainVerificationsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domain_verifications.list.$post>) {
      return parseResponse(client.v1.domain_verifications.list.$post(args, options))
    },
  })
}

export function createPostV1DomainVerificationsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.domain_verifications.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.domain_verifications.list.$post>,
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
    const mutationDefaults = getPostV1DomainVerificationsListMutationOptions<
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

export function getPostV1DomainVerificationsDeleteMutationKey() {
  return ['v1', '/v1/domain_verifications/delete', 'POST'] as const
}

export function getPostV1DomainVerificationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.domain_verifications.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.domain_verifications.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainVerificationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domain_verifications.delete.$post>) {
      return parseResponse(client.v1.domain_verifications.delete.$post(args, options))
    },
  })
}

export function createPostV1DomainVerificationsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.domain_verifications.delete.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.domain_verifications.delete.$post>,
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
    const mutationDefaults = getPostV1DomainVerificationsDeleteMutationOptions<
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

export function getPostV1DomainVerificationsResetMutationKey() {
  return ['v1', '/v1/domain_verifications/reset', 'POST'] as const
}

export function getPostV1DomainVerificationsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.domain_verifications.reset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.domain_verifications.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainVerificationsResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domain_verifications.reset.$post>) {
      return parseResponse(client.v1.domain_verifications.reset.$post(args, options))
    },
  })
}

export function createPostV1DomainVerificationsReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.domain_verifications.reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.domain_verifications.reset.$post>,
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
    const mutationDefaults = getPostV1DomainVerificationsResetMutationOptions<
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

export function getPostV1AirbyteReleasesCreateMutationKey() {
  return ['v1', '/v1/airbyte_releases/create', 'POST'] as const
}

export function getPostV1AirbyteReleasesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.airbyte_releases.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.airbyte_releases.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AirbyteReleasesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.airbyte_releases.create.$post>) {
      return parseResponse(client.v1.airbyte_releases.create.$post(args, options))
    },
  })
}

export function createPostV1AirbyteReleasesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.airbyte_releases.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.airbyte_releases.create.$post>,
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
    const mutationDefaults = getPostV1AirbyteReleasesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrivateLinkCreateMutationKey() {
  return ['v1', '/v1/private_link/create', 'POST'] as const
}

export function getPostV1PrivateLinkCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private_link.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLinkCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private_link.create.$post>) {
      return parseResponse(client.v1.private_link.create.$post(args, options))
    },
  })
}

export function createPostV1PrivateLinkCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.private_link.create.$post>,
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
    const mutationDefaults = getPostV1PrivateLinkCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrivateLinkListMutationKey() {
  return ['v1', '/v1/private_link/list', 'POST'] as const
}

export function getPostV1PrivateLinkListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private_link.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLinkListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private_link.list.$post>) {
      return parseResponse(client.v1.private_link.list.$post(args, options))
    },
  })
}

export function createPostV1PrivateLinkList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.private_link.list.$post>,
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
    const mutationDefaults = getPostV1PrivateLinkListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrivateLinkDeleteMutationKey() {
  return ['v1', '/v1/private_link/delete', 'POST'] as const
}

export function getPostV1PrivateLinkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private_link.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLinkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private_link.delete.$post>) {
      return parseResponse(client.v1.private_link.delete.$post(args, options))
    },
  })
}

export function createPostV1PrivateLinkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.delete.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.private_link.delete.$post>,
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
    const mutationDefaults = getPostV1PrivateLinkDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrivateLinkGetMutationKey() {
  return ['v1', '/v1/private_link/get', 'POST'] as const
}

export function getPostV1PrivateLinkGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private_link.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLinkGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private_link.get.$post>) {
      return parseResponse(client.v1.private_link.get.$post(args, options))
    },
  })
}

export function createPostV1PrivateLinkGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.private_link.get.$post>,
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
    const mutationDefaults = getPostV1PrivateLinkGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrivateLinkUpdateMutationKey() {
  return ['v1', '/v1/private_link/update', 'POST'] as const
}

export function getPostV1PrivateLinkUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private_link.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLinkUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private_link.update.$post>) {
      return parseResponse(client.v1.private_link.update.$post(args, options))
    },
  })
}

export function createPostV1PrivateLinkUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.private_link.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.private_link.update.$post>,
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
    const mutationDefaults = getPostV1PrivateLinkUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PrivateLinkListByStatusMutationKey() {
  return ['v1', '/v1/private_link/list_by_status', 'POST'] as const
}

export function getPostV1PrivateLinkListByStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private_link.list_by_status.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private_link.list_by_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLinkListByStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private_link.list_by_status.$post>) {
      return parseResponse(client.v1.private_link.list_by_status.$post(args, options))
    },
  })
}

export function createPostV1PrivateLinkListByStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.private_link.list_by_status.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.private_link.list_by_status.$post>,
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
    const mutationDefaults = getPostV1PrivateLinkListByStatusMutationOptions<
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

export function getV1OrganizationsOrganizationIdToolCallsUsageQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/tool_calls/usage', args] as const
}

export function getV1OrganizationsOrganizationIdToolCallsUsageQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdToolCallsUsageQueryKey>
  >({
    queryKey: getV1OrganizationsOrganizationIdToolCallsUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].tool_calls.usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdToolCallsUsage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsOrganizationIdToolCallsUsageQueryKey>
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
      ...getV1OrganizationsOrganizationIdToolCallsUsageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
