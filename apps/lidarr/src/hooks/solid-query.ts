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

export function getApiKey() {
  return ['api'] as const
}

export function getContentKey() {
  return ['content'] as const
}

export function getFeedKey() {
  return ['feed'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getApiV1AlbumQueryKey(args: InferRequestType<typeof client.api.v1.album.$get>) {
  return ['api', '/api/v1/album', args] as const
}

export function getApiV1AlbumQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.album.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AlbumQueryKey>
  >({
    queryKey: getApiV1AlbumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.album.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Album<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.album.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AlbumQueryKey>
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
    return { ...getApiV1AlbumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AlbumMutationKey() {
  return ['api', '/api/v1/album', 'POST'] as const
}

export function getPostApiV1AlbumMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.album.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AlbumMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.album.$post>) {
      return parseResponse(client.api.v1.album.$post(args, options))
    },
  })
}

export function createPostApiV1Album<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.album.$post>,
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
    const mutationDefaults = getPostApiV1AlbumMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AlbumIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.album)[':id']['$get']>,
) {
  return ['api', '/api/v1/album/:id', args] as const
}

export function getApiV1AlbumIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.album)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlbumIdQueryKey>
  >({
    queryKey: getApiV1AlbumIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.album[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.album)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AlbumIdQueryKey>
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
    return { ...getApiV1AlbumIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1AlbumIdMutationKey() {
  return ['api', '/api/v1/album/:id', 'PUT'] as const
}

export function getPutApiV1AlbumIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.album)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AlbumIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.album)[':id']['$put']>) {
      return parseResponse(client.api.v1.album[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1AlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.album)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1AlbumIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1AlbumIdMutationKey() {
  return ['api', '/api/v1/album/:id', 'DELETE'] as const
}

export function getDeleteApiV1AlbumIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.album)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AlbumIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.album)[':id']['$delete']>) {
      return parseResponse(client.api.v1.album[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1AlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.album)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1AlbumIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1AlbumMonitorMutationKey() {
  return ['api', '/api/v1/album/monitor', 'PUT'] as const
}

export function getPutApiV1AlbumMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.monitor.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.album.monitor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AlbumMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.album.monitor.$put>) {
      return parseResponse(client.api.v1.album.monitor.$put(args, options))
    },
  })
}

export function createPutApiV1AlbumMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.monitor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.album.monitor.$put>,
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
    const mutationDefaults = getPutApiV1AlbumMonitorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AlbumLookupQueryKey(
  args: InferRequestType<typeof client.api.v1.album.lookup.$get>,
) {
  return ['api', '/api/v1/album/lookup', args] as const
}

export function getApiV1AlbumLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.album.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlbumLookupQueryKey>
  >({
    queryKey: getApiV1AlbumLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.album.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AlbumLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.album.lookup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AlbumLookupQueryKey>
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
    return { ...getApiV1AlbumLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AlbumstudioMutationKey() {
  return ['api', '/api/v1/albumstudio', 'POST'] as const
}

export function getPostApiV1AlbumstudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.albumstudio.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.albumstudio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AlbumstudioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.albumstudio.$post>) {
      return parseResponse(client.api.v1.albumstudio.$post(args, options))
    },
  })
}

export function createPostApiV1Albumstudio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.albumstudio.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.albumstudio.$post>,
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
    const mutationDefaults = getPostApiV1AlbumstudioMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >({
    queryKey: getApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getApiQueryKey>
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
    return { ...getApiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ArtistIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>,
) {
  return ['api', '/api/v1/artist/:id', args] as const
}

export function getApiV1ArtistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ArtistIdQueryKey>
  >({
    queryKey: getApiV1ArtistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.artist[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1ArtistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ArtistIdQueryKey>
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
    return { ...getApiV1ArtistIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1ArtistIdMutationKey() {
  return ['api', '/api/v1/artist/:id', 'PUT'] as const
}

export function getPutApiV1ArtistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.artist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ArtistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.artist)[':id']['$put']>) {
      return parseResponse(client.api.v1.artist[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ArtistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.artist)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ArtistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ArtistIdMutationKey() {
  return ['api', '/api/v1/artist/:id', 'DELETE'] as const
}

export function getDeleteApiV1ArtistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.artist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ArtistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.artist)[':id']['$delete']>) {
      return parseResponse(client.api.v1.artist[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ArtistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.artist)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ArtistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ArtistQueryKey(args: InferRequestType<typeof client.api.v1.artist.$get>) {
  return ['api', '/api/v1/artist', args] as const
}

export function getApiV1ArtistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.artist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ArtistQueryKey>
  >({
    queryKey: getApiV1ArtistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.artist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Artist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.artist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ArtistQueryKey>
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
    return { ...getApiV1ArtistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ArtistMutationKey() {
  return ['api', '/api/v1/artist', 'POST'] as const
}

export function getPostApiV1ArtistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.artist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ArtistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.artist.$post>) {
      return parseResponse(client.api.v1.artist.$post(args, options))
    },
  })
}

export function createPostApiV1Artist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.artist.$post>,
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
    const mutationDefaults = getPostApiV1ArtistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1ArtistEditorMutationKey() {
  return ['api', '/api/v1/artist/editor', 'PUT'] as const
}

export function getPutApiV1ArtistEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.editor.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.artist.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ArtistEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.artist.editor.$put>) {
      return parseResponse(client.api.v1.artist.editor.$put(args, options))
    },
  })
}

export function createPutApiV1ArtistEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.artist.editor.$put>,
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
    const mutationDefaults = getPutApiV1ArtistEditorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ArtistEditorMutationKey() {
  return ['api', '/api/v1/artist/editor', 'DELETE'] as const
}

export function getDeleteApiV1ArtistEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.editor.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.artist.editor.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ArtistEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.artist.editor.$delete>) {
      return parseResponse(client.api.v1.artist.editor.$delete(args, options))
    },
  })
}

export function createDeleteApiV1ArtistEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.editor.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.artist.editor.$delete>,
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
    const mutationDefaults = getDeleteApiV1ArtistEditorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ArtistLookupQueryKey(
  args: InferRequestType<typeof client.api.v1.artist.lookup.$get>,
) {
  return ['api', '/api/v1/artist/lookup', args] as const
}

export function getApiV1ArtistLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.artist.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ArtistLookupQueryKey>
  >({
    queryKey: getApiV1ArtistLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.artist.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1ArtistLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.artist.lookup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ArtistLookupQueryKey>
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
    return { ...getApiV1ArtistLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLoginQueryKey() {
  return ['login', '/login'] as const
}

export function getLoginQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >({
    queryKey: getLoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLoginQueryKey>
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
    return { ...getLoginQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function createPostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
    const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >({
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLogoutQueryKey>
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
    return { ...getLogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AutotaggingIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>,
) {
  return ['api', '/api/v1/autotagging/:id', args] as const
}

export function getApiV1AutotaggingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotaggingIdQueryKey>
  >({
    queryKey: getApiV1AutotaggingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.autotagging[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutotaggingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutotaggingIdQueryKey>
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
    return { ...getApiV1AutotaggingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1AutotaggingIdMutationKey() {
  return ['api', '/api/v1/autotagging/:id', 'PUT'] as const
}

export function getPutApiV1AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.autotagging)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$put']>) {
      return parseResponse(client.api.v1.autotagging[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.autotagging)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1AutotaggingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1AutotaggingIdMutationKey() {
  return ['api', '/api/v1/autotagging/:id', 'DELETE'] as const
}

export function getDeleteApiV1AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.autotagging)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.autotagging)[':id']['$delete']>) {
      return parseResponse(client.api.v1.autotagging[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.autotagging)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1AutotaggingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AutotaggingQueryKey() {
  return ['api', '/api/v1/autotagging'] as const
}

export function getApiV1AutotaggingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotaggingQueryKey>
  >({
    queryKey: getApiV1AutotaggingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.autotagging.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Autotagging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutotaggingQueryKey>
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
    return { ...getApiV1AutotaggingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AutotaggingMutationKey() {
  return ['api', '/api/v1/autotagging', 'POST'] as const
}

export function getPostApiV1AutotaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.autotagging.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AutotaggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.autotagging.$post>) {
      return parseResponse(client.api.v1.autotagging.$post(args, options))
    },
  })
}

export function createPostApiV1Autotagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.autotagging.$post>,
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
    const mutationDefaults = getPostApiV1AutotaggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AutotaggingSchemaQueryKey() {
  return ['api', '/api/v1/autotagging/schema'] as const
}

export function getApiV1AutotaggingSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotaggingSchemaQueryKey>
  >({
    queryKey: getApiV1AutotaggingSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.autotagging.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutotaggingSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AutotaggingSchemaQueryKey>
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
    return { ...getApiV1AutotaggingSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemBackupQueryKey() {
  return ['api', '/api/v1/system/backup'] as const
}

export function getApiV1SystemBackupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemBackupQueryKey>
  >({
    queryKey: getApiV1SystemBackupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.backup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SystemBackupQueryKey>
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
    return { ...getApiV1SystemBackupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV1SystemBackupIdMutationKey() {
  return ['api', '/api/v1/system/backup/:id', 'DELETE'] as const
}

export function getDeleteApiV1SystemBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.system.backup)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SystemBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.system.backup[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1SystemBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.backup)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1SystemBackupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1SystemBackupRestoreIdMutationKey() {
  return ['api', '/api/v1/system/backup/restore/:id', 'POST'] as const
}

export function getPostApiV1SystemBackupRestoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemBackupRestoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.system.backup.restore[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1SystemBackupRestoreId<
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
                Awaited<ReturnType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1SystemBackupRestoreIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1SystemBackupRestoreUploadMutationKey() {
  return ['api', '/api/v1/system/backup/restore/upload', 'POST'] as const
}

export function getPostApiV1SystemBackupRestoreUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.system.backup.restore.upload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemBackupRestoreUploadMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.system.backup.restore.upload.$post(undefined, options))
    },
  })
}

export function createPostApiV1SystemBackupRestoreUpload<
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
                Awaited<ReturnType<typeof client.api.v1.system.backup.restore.upload.$post>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1SystemBackupRestoreUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1BlocklistQueryKey(
  args: InferRequestType<typeof client.api.v1.blocklist.$get>,
) {
  return ['api', '/api/v1/blocklist', args] as const
}

export function getApiV1BlocklistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.blocklist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlocklistQueryKey>
  >({
    queryKey: getApiV1BlocklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.blocklist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Blocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.blocklist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BlocklistQueryKey>
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
    return { ...getApiV1BlocklistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV1BlocklistIdMutationKey() {
  return ['api', '/api/v1/blocklist/:id', 'DELETE'] as const
}

export function getDeleteApiV1BlocklistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.blocklist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.blocklist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BlocklistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.blocklist)[':id']['$delete']>) {
      return parseResponse(client.api.v1.blocklist[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1BlocklistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.blocklist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.blocklist)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1BlocklistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1BlocklistBulkMutationKey() {
  return ['api', '/api/v1/blocklist/bulk', 'DELETE'] as const
}

export function getDeleteApiV1BlocklistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.blocklist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BlocklistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.blocklist.bulk.$delete>) {
      return parseResponse(client.api.v1.blocklist.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1BlocklistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.blocklist.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1BlocklistBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CalendarQueryKey(
  args: InferRequestType<typeof client.api.v1.calendar.$get>,
) {
  return ['api', '/api/v1/calendar', args] as const
}

export function getApiV1CalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CalendarQueryKey>
  >({
    queryKey: getApiV1CalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.calendar.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CalendarQueryKey>
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
    return { ...getApiV1CalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1CalendarIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>,
) {
  return ['api', '/api/v1/calendar/:id', args] as const
}

export function getApiV1CalendarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CalendarIdQueryKey>
  >({
    queryKey: getApiV1CalendarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.calendar[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CalendarIdQueryKey>
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
    return { ...getApiV1CalendarIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeedV1CalendarLidarrIcsQueryKey(
  args: InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>,
) {
  return ['feed', '/feed/v1/calendar/lidarr.ics', args] as const
}

export function getFeedV1CalendarLidarrIcsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedV1CalendarLidarrIcsQueryKey>
  >({
    queryKey: getFeedV1CalendarLidarrIcsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feed.v1.calendar['lidarr.ics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeedV1CalendarLidarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedV1CalendarLidarrIcsQueryKey>
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
      ...getFeedV1CalendarLidarrIcsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CommandIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.command)[':id']['$get']>,
) {
  return ['api', '/api/v1/command/:id', args] as const
}

export function getApiV1CommandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.command)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandIdQueryKey>
  >({
    queryKey: getApiV1CommandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.command[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.command)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CommandIdQueryKey>
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
    return { ...getApiV1CommandIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV1CommandIdMutationKey() {
  return ['api', '/api/v1/command/:id', 'DELETE'] as const
}

export function getDeleteApiV1CommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CommandIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>) {
      return parseResponse(client.api.v1.command[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1CommandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1CommandIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CommandQueryKey() {
  return ['api', '/api/v1/command'] as const
}

export function getApiV1CommandQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandQueryKey>
  >({
    queryKey: getApiV1CommandQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.command.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CommandQueryKey>
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
    return { ...getApiV1CommandQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1CommandMutationKey() {
  return ['api', '/api/v1/command', 'POST'] as const
}

export function getPostApiV1CommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.command.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CommandMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.command.$post>) {
      return parseResponse(client.api.v1.command.$post(args, options))
    },
  })
}

export function createPostApiV1Command<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.command.$post>,
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
    const mutationDefaults = getPostApiV1CommandMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomfilterIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>,
) {
  return ['api', '/api/v1/customfilter/:id', args] as const
}

export function getApiV1CustomfilterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomfilterIdQueryKey>
  >({
    queryKey: getApiV1CustomfilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customfilter[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomfilterIdQueryKey>
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
    return { ...getApiV1CustomfilterIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1CustomfilterIdMutationKey() {
  return ['api', '/api/v1/customfilter/:id', 'PUT'] as const
}

export function getPutApiV1CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomfilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>) {
      return parseResponse(client.api.v1.customfilter[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1CustomfilterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1CustomfilterIdMutationKey() {
  return ['api', '/api/v1/customfilter/:id', 'DELETE'] as const
}

export function getDeleteApiV1CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CustomfilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.customfilter[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1CustomfilterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomfilterQueryKey() {
  return ['api', '/api/v1/customfilter'] as const
}

export function getApiV1CustomfilterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomfilterQueryKey>
  >({
    queryKey: getApiV1CustomfilterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customfilter.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomfilterQueryKey>
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
    return { ...getApiV1CustomfilterQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1CustomfilterMutationKey() {
  return ['api', '/api/v1/customfilter', 'POST'] as const
}

export function getPostApiV1CustomfilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.customfilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomfilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.customfilter.$post>) {
      return parseResponse(client.api.v1.customfilter.$post(args, options))
    },
  })
}

export function createPostApiV1Customfilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customfilter.$post>,
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
    const mutationDefaults = getPostApiV1CustomfilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomformatIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>,
) {
  return ['api', '/api/v1/customformat/:id', args] as const
}

export function getApiV1CustomformatIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomformatIdQueryKey>
  >({
    queryKey: getApiV1CustomformatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customformat[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomformatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomformatIdQueryKey>
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
    return { ...getApiV1CustomformatIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1CustomformatIdMutationKey() {
  return ['api', '/api/v1/customformat/:id', 'PUT'] as const
}

export function getPutApiV1CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customformat)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomformatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$put']>) {
      return parseResponse(client.api.v1.customformat[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customformat)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1CustomformatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1CustomformatIdMutationKey() {
  return ['api', '/api/v1/customformat/:id', 'DELETE'] as const
}

export function getDeleteApiV1CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customformat)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CustomformatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.customformat)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.customformat[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customformat)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1CustomformatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomformatQueryKey() {
  return ['api', '/api/v1/customformat'] as const
}

export function getApiV1CustomformatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomformatQueryKey>
  >({
    queryKey: getApiV1CustomformatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customformat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Customformat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomformatQueryKey>
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
    return { ...getApiV1CustomformatQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1CustomformatMutationKey() {
  return ['api', '/api/v1/customformat', 'POST'] as const
}

export function getPostApiV1CustomformatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.customformat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomformatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.customformat.$post>) {
      return parseResponse(client.api.v1.customformat.$post(args, options))
    },
  })
}

export function createPostApiV1Customformat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customformat.$post>,
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
    const mutationDefaults = getPostApiV1CustomformatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1CustomformatBulkMutationKey() {
  return ['api', '/api/v1/customformat/bulk', 'PUT'] as const
}

export function getPutApiV1CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.customformat.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.customformat.bulk.$put>) {
      return parseResponse(client.api.v1.customformat.bulk.$put(args, options))
    },
  })
}

export function createPutApiV1CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customformat.bulk.$put>,
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
    const mutationDefaults = getPutApiV1CustomformatBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1CustomformatBulkMutationKey() {
  return ['api', '/api/v1/customformat/bulk', 'DELETE'] as const
}

export function getDeleteApiV1CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.customformat.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.customformat.bulk.$delete>) {
      return parseResponse(client.api.v1.customformat.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.customformat.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customformat.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1CustomformatBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomformatSchemaQueryKey() {
  return ['api', '/api/v1/customformat/schema'] as const
}

export function getApiV1CustomformatSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomformatSchemaQueryKey>
  >({
    queryKey: getApiV1CustomformatSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customformat.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomformatSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomformatSchemaQueryKey>
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
    return { ...getApiV1CustomformatSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1WantedCutoffQueryKey(
  args: InferRequestType<typeof client.api.v1.wanted.cutoff.$get>,
) {
  return ['api', '/api/v1/wanted/cutoff', args] as const
}

export function getApiV1WantedCutoffQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.wanted.cutoff.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedCutoffQueryKey>
  >({
    queryKey: getApiV1WantedCutoffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.wanted.cutoff.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1WantedCutoff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.wanted.cutoff.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WantedCutoffQueryKey>
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
    return { ...getApiV1WantedCutoffQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1WantedCutoffIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>,
) {
  return ['api', '/api/v1/wanted/cutoff/:id', args] as const
}

export function getApiV1WantedCutoffIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedCutoffIdQueryKey>
  >({
    queryKey: getApiV1WantedCutoffIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.wanted.cutoff[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1WantedCutoffId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WantedCutoffIdQueryKey>
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
    return { ...getApiV1WantedCutoffIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DelayprofileQueryKey() {
  return ['api', '/api/v1/delayprofile'] as const
}

export function getApiV1DelayprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DelayprofileQueryKey>
  >({
    queryKey: getApiV1DelayprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.delayprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Delayprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DelayprofileQueryKey>
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
    return { ...getApiV1DelayprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1DelayprofileMutationKey() {
  return ['api', '/api/v1/delayprofile', 'POST'] as const
}

export function getPostApiV1DelayprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.delayprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DelayprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.delayprofile.$post>) {
      return parseResponse(client.api.v1.delayprofile.$post(args, options))
    },
  })
}

export function createPostApiV1Delayprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.delayprofile.$post>,
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
    const mutationDefaults = getPostApiV1DelayprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DelayprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>,
) {
  return ['api', '/api/v1/delayprofile/:id', args] as const
}

export function getApiV1DelayprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DelayprofileIdQueryKey>
  >({
    queryKey: getApiV1DelayprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.delayprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DelayprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DelayprofileIdQueryKey>
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
    return { ...getApiV1DelayprofileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1DelayprofileIdMutationKey() {
  return ['api', '/api/v1/delayprofile/:id', 'PUT'] as const
}

export function getPutApiV1DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DelayprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$put']>) {
      return parseResponse(client.api.v1.delayprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1DelayprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1DelayprofileIdMutationKey() {
  return ['api', '/api/v1/delayprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV1DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DelayprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.delayprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1DelayprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1DelayprofileReorderIdMutationKey() {
  return ['api', '/api/v1/delayprofile/reorder/:id', 'PUT'] as const
}

export function getPutApiV1DelayprofileReorderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.delayprofile.reorder)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.delayprofile.reorder)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DelayprofileReorderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.delayprofile.reorder)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.delayprofile.reorder[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1DelayprofileReorderId<
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
                Awaited<ReturnType<(typeof client.api.v1.delayprofile.reorder)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.delayprofile.reorder)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1DelayprofileReorderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DiskspaceQueryKey() {
  return ['api', '/api/v1/diskspace'] as const
}

export function getApiV1DiskspaceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DiskspaceQueryKey>
  >({
    queryKey: getApiV1DiskspaceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.diskspace.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Diskspace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DiskspaceQueryKey>
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
    return { ...getApiV1DiskspaceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DownloadclientIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>,
) {
  return ['api', '/api/v1/downloadclient/:id', args] as const
}

export function getApiV1DownloadclientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientIdQueryKey>
  >({
    queryKey: getApiV1DownloadclientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.downloadclient[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DownloadclientIdQueryKey>
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
      ...getApiV1DownloadclientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1DownloadclientIdMutationKey() {
  return ['api', '/api/v1/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV1DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DownloadclientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>) {
      return parseResponse(client.api.v1.downloadclient[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1DownloadclientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1DownloadclientIdMutationKey() {
  return ['api', '/api/v1/downloadclient/:id', 'DELETE'] as const
}

export function getDeleteApiV1DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.downloadclient[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1DownloadclientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DownloadclientQueryKey() {
  return ['api', '/api/v1/downloadclient'] as const
}

export function getApiV1DownloadclientQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientQueryKey>
  >({
    queryKey: getApiV1DownloadclientQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DownloadclientQueryKey>
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
    return { ...getApiV1DownloadclientQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1DownloadclientMutationKey() {
  return ['api', '/api/v1/downloadclient', 'POST'] as const
}

export function getPostApiV1DownloadclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.$post>) {
      return parseResponse(client.api.v1.downloadclient.$post(args, options))
    },
  })
}

export function createPostApiV1Downloadclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.$post>,
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
    const mutationDefaults = getPostApiV1DownloadclientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1DownloadclientBulkMutationKey() {
  return ['api', '/api/v1/downloadclient/bulk', 'PUT'] as const
}

export function getPutApiV1DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>) {
      return parseResponse(client.api.v1.downloadclient.bulk.$put(args, options))
    },
  })
}

export function createPutApiV1DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>,
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
    const mutationDefaults = getPutApiV1DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1DownloadclientBulkMutationKey() {
  return ['api', '/api/v1/downloadclient/bulk', 'DELETE'] as const
}

export function getDeleteApiV1DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>) {
      return parseResponse(client.api.v1.downloadclient.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1DownloadclientBulk<
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
                Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1DownloadclientBulkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DownloadclientSchemaQueryKey() {
  return ['api', '/api/v1/downloadclient/schema'] as const
}

export function getApiV1DownloadclientSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientSchemaQueryKey>
  >({
    queryKey: getApiV1DownloadclientSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.downloadclient.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DownloadclientSchemaQueryKey>
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
    return { ...getApiV1DownloadclientSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1DownloadclientTestMutationKey() {
  return ['api', '/api/v1/downloadclient/test', 'POST'] as const
}

export function getPostApiV1DownloadclientTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.test.$post>) {
      return parseResponse(client.api.v1.downloadclient.test.$post(args, options))
    },
  })
}

export function createPostApiV1DownloadclientTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.test.$post>,
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
    const mutationDefaults = getPostApiV1DownloadclientTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1DownloadclientTestallMutationKey() {
  return ['api', '/api/v1/downloadclient/testall', 'POST'] as const
}

export function getPostApiV1DownloadclientTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.downloadclient.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV1DownloadclientTestall<
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
                Awaited<ReturnType<typeof client.api.v1.downloadclient.testall.$post>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1DownloadclientTestallMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1DownloadclientActionNameMutationKey() {
  return ['api', '/api/v1/downloadclient/action/:name', 'POST'] as const
}

export function getPostApiV1DownloadclientActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.downloadclient.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV1DownloadclientActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
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
    const mutationDefaults = getPostApiV1DownloadclientActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigDownloadclientIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/downloadclient/:id', args] as const
}

export function getApiV1ConfigDownloadclientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDownloadclientIdQueryKey>
  >({
    queryKey: getApiV1ConfigDownloadclientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.downloadclient[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigDownloadclientIdQueryKey>
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
      ...getApiV1ConfigDownloadclientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ConfigDownloadclientIdMutationKey() {
  return ['api', '/api/v1/config/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV1ConfigDownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigDownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.config.downloadclient[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigDownloadclientId<
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
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigDownloadclientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigDownloadclientQueryKey() {
  return ['api', '/api/v1/config/downloadclient'] as const
}

export function getApiV1ConfigDownloadclientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDownloadclientQueryKey>
  >({
    queryKey: getApiV1ConfigDownloadclientQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigDownloadclientQueryKey>
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
    return { ...getApiV1ConfigDownloadclientQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1FilesystemQueryKey(
  args: InferRequestType<typeof client.api.v1.filesystem.$get>,
) {
  return ['api', '/api/v1/filesystem', args] as const
}

export function getApiV1FilesystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.filesystem.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemQueryKey>
  >({
    queryKey: getApiV1FilesystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filesystem.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.filesystem.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1FilesystemQueryKey>
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
    return { ...getApiV1FilesystemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1FilesystemTypeQueryKey(
  args: InferRequestType<typeof client.api.v1.filesystem.type.$get>,
) {
  return ['api', '/api/v1/filesystem/type', args] as const
}

export function getApiV1FilesystemTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.filesystem.type.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemTypeQueryKey>
  >({
    queryKey: getApiV1FilesystemTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filesystem.type.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.filesystem.type.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1FilesystemTypeQueryKey>
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
    return { ...getApiV1FilesystemTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1FilesystemMediafilesQueryKey(
  args: InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>,
) {
  return ['api', '/api/v1/filesystem/mediafiles', args] as const
}

export function getApiV1FilesystemMediafilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemMediafilesQueryKey>
  >({
    queryKey: getApiV1FilesystemMediafilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filesystem.mediafiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1FilesystemMediafiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1FilesystemMediafilesQueryKey>
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
      ...getApiV1FilesystemMediafilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1HealthQueryKey() {
  return ['api', '/api/v1/health'] as const
}

export function getApiV1HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthQueryKey>
  >({
    queryKey: getApiV1HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1HealthQueryKey>
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
    return { ...getApiV1HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1HistoryQueryKey(args: InferRequestType<typeof client.api.v1.history.$get>) {
  return ['api', '/api/v1/history', args] as const
}

export function getApiV1HistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryQueryKey>
  >({
    queryKey: getApiV1HistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.history.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1HistoryQueryKey>
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
    return { ...getApiV1HistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1HistorySinceQueryKey(
  args: InferRequestType<typeof client.api.v1.history.since.$get>,
) {
  return ['api', '/api/v1/history/since', args] as const
}

export function getApiV1HistorySinceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.history.since.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistorySinceQueryKey>
  >({
    queryKey: getApiV1HistorySinceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.history.since.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.history.since.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1HistorySinceQueryKey>
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
    return { ...getApiV1HistorySinceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1HistoryArtistQueryKey(
  args: InferRequestType<typeof client.api.v1.history.artist.$get>,
) {
  return ['api', '/api/v1/history/artist', args] as const
}

export function getApiV1HistoryArtistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.history.artist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryArtistQueryKey>
  >({
    queryKey: getApiV1HistoryArtistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.history.artist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1HistoryArtist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.history.artist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1HistoryArtistQueryKey>
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
    return { ...getApiV1HistoryArtistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1HistoryFailedIdMutationKey() {
  return ['api', '/api/v1/history/failed/:id', 'POST'] as const
}

export function getPostApiV1HistoryFailedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.history.failed)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.history.failed)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1HistoryFailedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.history.failed)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.history.failed[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1HistoryFailedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.history.failed)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.history.failed)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1HistoryFailedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigHostIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/host/:id', args] as const
}

export function getApiV1ConfigHostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigHostIdQueryKey>
  >({
    queryKey: getApiV1ConfigHostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.host[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigHostIdQueryKey>
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
    return { ...getApiV1ConfigHostIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1ConfigHostIdMutationKey() {
  return ['api', '/api/v1/config/host/:id', 'PUT'] as const
}

export function getPutApiV1ConfigHostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigHostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>) {
      return parseResponse(client.api.v1.config.host[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigHostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigHostIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigHostQueryKey() {
  return ['api', '/api/v1/config/host'] as const
}

export function getApiV1ConfigHostQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigHostQueryKey>
  >({
    queryKey: getApiV1ConfigHostQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.host.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigHostQueryKey>
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
    return { ...getApiV1ConfigHostQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ImportlistIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>,
) {
  return ['api', '/api/v1/importlist/:id', args] as const
}

export function getApiV1ImportlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistIdQueryKey>
  >({
    queryKey: getApiV1ImportlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.importlist[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ImportlistIdQueryKey>
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
    return { ...getApiV1ImportlistIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1ImportlistIdMutationKey() {
  return ['api', '/api/v1/importlist/:id', 'PUT'] as const
}

export function getPutApiV1ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$put']>) {
      return parseResponse(client.api.v1.importlist[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.importlist)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ImportlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ImportlistIdMutationKey() {
  return ['api', '/api/v1/importlist/:id', 'DELETE'] as const
}

export function getDeleteApiV1ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.importlist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.importlist)[':id']['$delete']>) {
      return parseResponse(client.api.v1.importlist[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.importlist)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ImportlistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ImportlistQueryKey() {
  return ['api', '/api/v1/importlist'] as const
}

export function getApiV1ImportlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistQueryKey>
  >({
    queryKey: getApiV1ImportlistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Importlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ImportlistQueryKey>
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
    return { ...getApiV1ImportlistQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ImportlistMutationKey() {
  return ['api', '/api/v1/importlist', 'POST'] as const
}

export function getPostApiV1ImportlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.importlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.importlist.$post>) {
      return parseResponse(client.api.v1.importlist.$post(args, options))
    },
  })
}

export function createPostApiV1Importlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.$post>,
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
    const mutationDefaults = getPostApiV1ImportlistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1ImportlistBulkMutationKey() {
  return ['api', '/api/v1/importlist/bulk', 'PUT'] as const
}

export function getPutApiV1ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.importlist.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.importlist.bulk.$put>) {
      return parseResponse(client.api.v1.importlist.bulk.$put(args, options))
    },
  })
}

export function createPutApiV1ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.bulk.$put>,
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
    const mutationDefaults = getPutApiV1ImportlistBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ImportlistBulkMutationKey() {
  return ['api', '/api/v1/importlist/bulk', 'DELETE'] as const
}

export function getDeleteApiV1ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.importlist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.importlist.bulk.$delete>) {
      return parseResponse(client.api.v1.importlist.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.importlist.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1ImportlistBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ImportlistSchemaQueryKey() {
  return ['api', '/api/v1/importlist/schema'] as const
}

export function getApiV1ImportlistSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistSchemaQueryKey>
  >({
    queryKey: getApiV1ImportlistSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.importlist.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ImportlistSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ImportlistSchemaQueryKey>
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
    return { ...getApiV1ImportlistSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ImportlistTestMutationKey() {
  return ['api', '/api/v1/importlist/test', 'POST'] as const
}

export function getPostApiV1ImportlistTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.importlist.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportlistTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.importlist.test.$post>) {
      return parseResponse(client.api.v1.importlist.test.$post(args, options))
    },
  })
}

export function createPostApiV1ImportlistTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.test.$post>,
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
    const mutationDefaults = getPostApiV1ImportlistTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ImportlistTestallMutationKey() {
  return ['api', '/api/v1/importlist/testall', 'POST'] as const
}

export function getPostApiV1ImportlistTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportlistTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.importlist.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV1ImportlistTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.importlist.testall.$post>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1ImportlistTestallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ImportlistActionNameMutationKey() {
  return ['api', '/api/v1/importlist/action/:name', 'POST'] as const
}

export function getPostApiV1ImportlistActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.importlist.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.importlist.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportlistActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.importlist.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.importlist.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV1ImportlistActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.importlist.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.importlist.action)[':name']['$post']>,
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
    const mutationDefaults = getPostApiV1ImportlistActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ImportlistexclusionIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>,
) {
  return ['api', '/api/v1/importlistexclusion/:id', args] as const
}

export function getApiV1ImportlistexclusionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistexclusionIdQueryKey>
  >({
    queryKey: getApiV1ImportlistexclusionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.importlistexclusion[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ImportlistexclusionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ImportlistexclusionIdQueryKey>
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
      ...getApiV1ImportlistexclusionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ImportlistexclusionIdMutationKey() {
  return ['api', '/api/v1/importlistexclusion/:id', 'PUT'] as const
}

export function getPutApiV1ImportlistexclusionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ImportlistexclusionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.importlistexclusion[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ImportlistexclusionId<
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
                Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ImportlistexclusionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ImportlistexclusionIdMutationKey() {
  return ['api', '/api/v1/importlistexclusion/:id', 'DELETE'] as const
}

export function getDeleteApiV1ImportlistexclusionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ImportlistexclusionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.importlistexclusion[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ImportlistexclusionId<
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
                Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ImportlistexclusionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ImportlistexclusionQueryKey() {
  return ['api', '/api/v1/importlistexclusion'] as const
}

export function getApiV1ImportlistexclusionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistexclusionQueryKey>
  >({
    queryKey: getApiV1ImportlistexclusionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.importlistexclusion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Importlistexclusion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ImportlistexclusionQueryKey>
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
    return { ...getApiV1ImportlistexclusionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ImportlistexclusionMutationKey() {
  return ['api', '/api/v1/importlistexclusion', 'POST'] as const
}

export function getPostApiV1ImportlistexclusionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.importlistexclusion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportlistexclusionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.importlistexclusion.$post>) {
      return parseResponse(client.api.v1.importlistexclusion.$post(args, options))
    },
  })
}

export function createPostApiV1Importlistexclusion<
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
                Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlistexclusion.$post>,
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
    const mutationDefaults = getPostApiV1ImportlistexclusionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1IndexerIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>,
) {
  return ['api', '/api/v1/indexer/:id', args] as const
}

export function getApiV1IndexerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerIdQueryKey>
  >({
    queryKey: getApiV1IndexerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.indexer[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1IndexerIdQueryKey>
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
    return { ...getApiV1IndexerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1IndexerIdMutationKey() {
  return ['api', '/api/v1/indexer/:id', 'PUT'] as const
}

export function getPutApiV1IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v1.indexer[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1IndexerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1IndexerIdMutationKey() {
  return ['api', '/api/v1/indexer/:id', 'DELETE'] as const
}

export function getDeleteApiV1IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>) {
      return parseResponse(client.api.v1.indexer[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1IndexerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1IndexerQueryKey() {
  return ['api', '/api/v1/indexer'] as const
}

export function getApiV1IndexerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerQueryKey>
  >({
    queryKey: getApiV1IndexerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.indexer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1IndexerQueryKey>
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
    return { ...getApiV1IndexerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1IndexerMutationKey() {
  return ['api', '/api/v1/indexer', 'POST'] as const
}

export function getPostApiV1IndexerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.$post>) {
      return parseResponse(client.api.v1.indexer.$post(args, options))
    },
  })
}

export function createPostApiV1Indexer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.$post>,
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
    const mutationDefaults = getPostApiV1IndexerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1IndexerBulkMutationKey() {
  return ['api', '/api/v1/indexer/bulk', 'PUT'] as const
}

export function getPutApiV1IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.bulk.$put>) {
      return parseResponse(client.api.v1.indexer.bulk.$put(args, options))
    },
  })
}

export function createPutApiV1IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.bulk.$put>,
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
    const mutationDefaults = getPutApiV1IndexerBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1IndexerBulkMutationKey() {
  return ['api', '/api/v1/indexer/bulk', 'DELETE'] as const
}

export function getDeleteApiV1IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.bulk.$delete>) {
      return parseResponse(client.api.v1.indexer.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1IndexerBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1IndexerSchemaQueryKey() {
  return ['api', '/api/v1/indexer/schema'] as const
}

export function getApiV1IndexerSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerSchemaQueryKey>
  >({
    queryKey: getApiV1IndexerSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.indexer.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1IndexerSchemaQueryKey>
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
    return { ...getApiV1IndexerSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1IndexerTestMutationKey() {
  return ['api', '/api/v1/indexer/test', 'POST'] as const
}

export function getPostApiV1IndexerTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.test.$post>) {
      return parseResponse(client.api.v1.indexer.test.$post(args, options))
    },
  })
}

export function createPostApiV1IndexerTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.test.$post>,
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
    const mutationDefaults = getPostApiV1IndexerTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1IndexerTestallMutationKey() {
  return ['api', '/api/v1/indexer/testall', 'POST'] as const
}

export function getPostApiV1IndexerTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.indexer.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV1IndexerTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.testall.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1IndexerTestallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1IndexerActionNameMutationKey() {
  return ['api', '/api/v1/indexer/action/:name', 'POST'] as const
}

export function getPostApiV1IndexerActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.indexer.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.indexer.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV1IndexerActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
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
    const mutationDefaults = getPostApiV1IndexerActionNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigIndexerIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/indexer/:id', args] as const
}

export function getApiV1ConfigIndexerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigIndexerIdQueryKey>
  >({
    queryKey: getApiV1ConfigIndexerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.indexer[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigIndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigIndexerIdQueryKey>
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
      ...getApiV1ConfigIndexerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ConfigIndexerIdMutationKey() {
  return ['api', '/api/v1/config/indexer/:id', 'PUT'] as const
}

export function getPutApiV1ConfigIndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigIndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v1.config.indexer[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigIndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigIndexerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigIndexerQueryKey() {
  return ['api', '/api/v1/config/indexer'] as const
}

export function getApiV1ConfigIndexerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigIndexerQueryKey>
  >({
    queryKey: getApiV1ConfigIndexerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.indexer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigIndexerQueryKey>
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
    return { ...getApiV1ConfigIndexerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1IndexerflagQueryKey() {
  return ['api', '/api/v1/indexerflag'] as const
}

export function getApiV1IndexerflagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerflagQueryKey>
  >({
    queryKey: getApiV1IndexerflagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.indexerflag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Indexerflag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1IndexerflagQueryKey>
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
    return { ...getApiV1IndexerflagQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LanguageIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.language)[':id']['$get']>,
) {
  return ['api', '/api/v1/language/:id', args] as const
}

export function getApiV1LanguageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.language)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LanguageIdQueryKey>
  >({
    queryKey: getApiV1LanguageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.language[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.language)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LanguageIdQueryKey>
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
    return { ...getApiV1LanguageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LanguageQueryKey() {
  return ['api', '/api/v1/language'] as const
}

export function getApiV1LanguageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LanguageQueryKey>
  >({
    queryKey: getApiV1LanguageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.language.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Language<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LanguageQueryKey>
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
    return { ...getApiV1LanguageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LocalizationQueryKey() {
  return ['api', '/api/v1/localization'] as const
}

export function getApiV1LocalizationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocalizationQueryKey>
  >({
    queryKey: getApiV1LocalizationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.localization.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LocalizationQueryKey>
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
    return { ...getApiV1LocalizationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LogQueryKey(args: InferRequestType<typeof client.api.v1.log.$get>) {
  return ['api', '/api/v1/log', args] as const
}

export function getApiV1LogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.log.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1LogQueryKey>
  >({
    queryKey: getApiV1LogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.log.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LogQueryKey>
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
    return { ...getApiV1LogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LogFileQueryKey() {
  return ['api', '/api/v1/log/file'] as const
}

export function getApiV1LogFileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileQueryKey>
  >({
    queryKey: getApiV1LogFileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.file.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LogFileQueryKey>
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
    return { ...getApiV1LogFileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LogFileFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>,
) {
  return ['api', '/api/v1/log/file/:filename', args] as const
}

export function getApiV1LogFileFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileFilenameQueryKey>
  >({
    queryKey: getApiV1LogFileFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.file[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LogFileFilenameQueryKey>
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
      ...getApiV1LogFileFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ManualimportQueryKey(
  args: InferRequestType<typeof client.api.v1.manualimport.$get>,
) {
  return ['api', '/api/v1/manualimport', args] as const
}

export function getApiV1ManualimportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.manualimport.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ManualimportQueryKey>
  >({
    queryKey: getApiV1ManualimportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.manualimport.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Manualimport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.manualimport.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ManualimportQueryKey>
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
    return { ...getApiV1ManualimportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ManualimportMutationKey() {
  return ['api', '/api/v1/manualimport', 'POST'] as const
}

export function getPostApiV1ManualimportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.manualimport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ManualimportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.manualimport.$post>) {
      return parseResponse(client.api.v1.manualimport.$post(args, options))
    },
  })
}

export function createPostApiV1Manualimport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.manualimport.$post>,
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
    const mutationDefaults = getPostApiV1ManualimportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MediacoverArtistArtistIdFilenameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
  >,
) {
  return ['api', '/api/v1/mediacover/artist/:artistId/:filename', args] as const
}

export function getApiV1MediacoverArtistArtistIdFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediacoverArtistArtistIdFilenameQueryKey>
  >({
    queryKey: getApiV1MediacoverArtistArtistIdFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.mediacover.artist[':artistId'][':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MediacoverArtistArtistIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
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
                    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MediacoverArtistArtistIdFilenameQueryKey>
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
      ...getApiV1MediacoverArtistArtistIdFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1MediacoverAlbumAlbumIdFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>,
) {
  return ['api', '/api/v1/mediacover/album/:albumId/:filename', args] as const
}

export function getApiV1MediacoverAlbumAlbumIdFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediacoverAlbumAlbumIdFilenameQueryKey>
  >({
    queryKey: getApiV1MediacoverAlbumAlbumIdFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.mediacover.album[':albumId'][':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MediacoverAlbumAlbumIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']
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
                    (typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MediacoverAlbumAlbumIdFilenameQueryKey>
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
      ...getApiV1MediacoverAlbumAlbumIdFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ConfigMediamanagementIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/mediamanagement/:id', args] as const
}

export function getApiV1ConfigMediamanagementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMediamanagementIdQueryKey>
  >({
    queryKey: getApiV1ConfigMediamanagementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.mediamanagement[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigMediamanagementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigMediamanagementIdQueryKey>
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
      ...getApiV1ConfigMediamanagementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ConfigMediamanagementIdMutationKey() {
  return ['api', '/api/v1/config/mediamanagement/:id', 'PUT'] as const
}

export function getPutApiV1ConfigMediamanagementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigMediamanagementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.config.mediamanagement[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigMediamanagementId<
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
                Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigMediamanagementIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigMediamanagementQueryKey() {
  return ['api', '/api/v1/config/mediamanagement'] as const
}

export function getApiV1ConfigMediamanagementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMediamanagementQueryKey>
  >({
    queryKey: getApiV1ConfigMediamanagementQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.mediamanagement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigMediamanagement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigMediamanagementQueryKey>
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
    return { ...getApiV1ConfigMediamanagementQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1MetadataIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>,
) {
  return ['api', '/api/v1/metadata/:id', args] as const
}

export function getApiV1MetadataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataIdQueryKey>
  >({
    queryKey: getApiV1MetadataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metadata[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetadataIdQueryKey>
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
    return { ...getApiV1MetadataIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1MetadataIdMutationKey() {
  return ['api', '/api/v1/metadata/:id', 'PUT'] as const
}

export function getPutApiV1MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.metadata)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$put']>) {
      return parseResponse(client.api.v1.metadata[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.metadata)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1MetadataIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1MetadataIdMutationKey() {
  return ['api', '/api/v1/metadata/:id', 'DELETE'] as const
}

export function getDeleteApiV1MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.metadata)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.metadata)[':id']['$delete']>) {
      return parseResponse(client.api.v1.metadata[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.metadata)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1MetadataIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MetadataQueryKey() {
  return ['api', '/api/v1/metadata'] as const
}

export function getApiV1MetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataQueryKey>
  >({
    queryKey: getApiV1MetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Metadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetadataQueryKey>
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
    return { ...getApiV1MetadataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1MetadataMutationKey() {
  return ['api', '/api/v1/metadata', 'POST'] as const
}

export function getPostApiV1MetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.metadata.$post>) {
      return parseResponse(client.api.v1.metadata.$post(args, options))
    },
  })
}

export function createPostApiV1Metadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.metadata.$post>,
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
    const mutationDefaults = getPostApiV1MetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MetadataSchemaQueryKey() {
  return ['api', '/api/v1/metadata/schema'] as const
}

export function getApiV1MetadataSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataSchemaQueryKey>
  >({
    queryKey: getApiV1MetadataSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metadata.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetadataSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetadataSchemaQueryKey>
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
    return { ...getApiV1MetadataSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1MetadataTestMutationKey() {
  return ['api', '/api/v1/metadata/test', 'POST'] as const
}

export function getPostApiV1MetadataTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.metadata.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetadataTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.metadata.test.$post>) {
      return parseResponse(client.api.v1.metadata.test.$post(args, options))
    },
  })
}

export function createPostApiV1MetadataTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.metadata.test.$post>,
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
    const mutationDefaults = getPostApiV1MetadataTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1MetadataTestallMutationKey() {
  return ['api', '/api/v1/metadata/testall', 'POST'] as const
}

export function getPostApiV1MetadataTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetadataTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.metadata.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV1MetadataTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.testall.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1MetadataTestallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1MetadataActionNameMutationKey() {
  return ['api', '/api/v1/metadata/action/:name', 'POST'] as const
}

export function getPostApiV1MetadataActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.metadata.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.metadata.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetadataActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.metadata.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.metadata.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV1MetadataActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadata.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.metadata.action)[':name']['$post']>,
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
    const mutationDefaults = getPostApiV1MetadataActionNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MetadataprofileQueryKey() {
  return ['api', '/api/v1/metadataprofile'] as const
}

export function getApiV1MetadataprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataprofileQueryKey>
  >({
    queryKey: getApiV1MetadataprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metadataprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Metadataprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetadataprofileQueryKey>
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
    return { ...getApiV1MetadataprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1MetadataprofileMutationKey() {
  return ['api', '/api/v1/metadataprofile', 'POST'] as const
}

export function getPostApiV1MetadataprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.metadataprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetadataprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.metadataprofile.$post>) {
      return parseResponse(client.api.v1.metadataprofile.$post(args, options))
    },
  })
}

export function createPostApiV1Metadataprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.metadataprofile.$post>,
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
    const mutationDefaults = getPostApiV1MetadataprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MetadataprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>,
) {
  return ['api', '/api/v1/metadataprofile/:id', args] as const
}

export function getApiV1MetadataprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataprofileIdQueryKey>
  >({
    queryKey: getApiV1MetadataprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metadataprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetadataprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetadataprofileIdQueryKey>
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
      ...getApiV1MetadataprofileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1MetadataprofileIdMutationKey() {
  return ['api', '/api/v1/metadataprofile/:id', 'PUT'] as const
}

export function getPutApiV1MetadataprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MetadataprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.metadataprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1MetadataprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1MetadataprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1MetadataprofileIdMutationKey() {
  return ['api', '/api/v1/metadataprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV1MetadataprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1MetadataprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.metadataprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1MetadataprofileId<
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
                Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1MetadataprofileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MetadataprofileSchemaQueryKey() {
  return ['api', '/api/v1/metadataprofile/schema'] as const
}

export function getApiV1MetadataprofileSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataprofileSchemaQueryKey>
  >({
    queryKey: getApiV1MetadataprofileSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metadataprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetadataprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetadataprofileSchemaQueryKey>
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
    return { ...getApiV1MetadataprofileSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigMetadataproviderIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/metadataprovider/:id', args] as const
}

export function getApiV1ConfigMetadataproviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMetadataproviderIdQueryKey>
  >({
    queryKey: getApiV1ConfigMetadataproviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.metadataprovider[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigMetadataproviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigMetadataproviderIdQueryKey>
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
      ...getApiV1ConfigMetadataproviderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ConfigMetadataproviderIdMutationKey() {
  return ['api', '/api/v1/config/metadataprovider/:id', 'PUT'] as const
}

export function getPutApiV1ConfigMetadataproviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigMetadataproviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.config.metadataprovider[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigMetadataproviderId<
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
                Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigMetadataproviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigMetadataproviderQueryKey() {
  return ['api', '/api/v1/config/metadataprovider'] as const
}

export function getApiV1ConfigMetadataproviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMetadataproviderQueryKey>
  >({
    queryKey: getApiV1ConfigMetadataproviderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.metadataprovider.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigMetadataprovider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigMetadataproviderQueryKey>
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
    return { ...getApiV1ConfigMetadataproviderQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1WantedMissingQueryKey(
  args: InferRequestType<typeof client.api.v1.wanted.missing.$get>,
) {
  return ['api', '/api/v1/wanted/missing', args] as const
}

export function getApiV1WantedMissingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.wanted.missing.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedMissingQueryKey>
  >({
    queryKey: getApiV1WantedMissingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.wanted.missing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1WantedMissing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.wanted.missing.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WantedMissingQueryKey>
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
    return { ...getApiV1WantedMissingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1WantedMissingIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>,
) {
  return ['api', '/api/v1/wanted/missing/:id', args] as const
}

export function getApiV1WantedMissingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedMissingIdQueryKey>
  >({
    queryKey: getApiV1WantedMissingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.wanted.missing[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1WantedMissingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1WantedMissingIdQueryKey>
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
      ...getApiV1WantedMissingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ConfigNamingIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/naming/:id', args] as const
}

export function getApiV1ConfigNamingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigNamingIdQueryKey>
  >({
    queryKey: getApiV1ConfigNamingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.naming[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigNamingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigNamingIdQueryKey>
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
    return { ...getApiV1ConfigNamingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1ConfigNamingIdMutationKey() {
  return ['api', '/api/v1/config/naming/:id', 'PUT'] as const
}

export function getPutApiV1ConfigNamingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.naming)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigNamingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.config.naming)[':id']['$put']>) {
      return parseResponse(client.api.v1.config.naming[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigNamingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.naming)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigNamingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigNamingQueryKey() {
  return ['api', '/api/v1/config/naming'] as const
}

export function getApiV1ConfigNamingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigNamingQueryKey>
  >({
    queryKey: getApiV1ConfigNamingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.naming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigNaming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigNamingQueryKey>
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
    return { ...getApiV1ConfigNamingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigNamingExamplesQueryKey(
  args: InferRequestType<typeof client.api.v1.config.naming.examples.$get>,
) {
  return ['api', '/api/v1/config/naming/examples', args] as const
}

export function getApiV1ConfigNamingExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.config.naming.examples.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigNamingExamplesQueryKey>
  >({
    queryKey: getApiV1ConfigNamingExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.naming.examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigNamingExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.config.naming.examples.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigNamingExamplesQueryKey>
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
      ...getApiV1ConfigNamingExamplesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NotificationIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>,
) {
  return ['api', '/api/v1/notification/:id', args] as const
}

export function getApiV1NotificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationIdQueryKey>
  >({
    queryKey: getApiV1NotificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationIdQueryKey>
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
    return { ...getApiV1NotificationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1NotificationIdMutationKey() {
  return ['api', '/api/v1/notification/:id', 'PUT'] as const
}

export function getPutApiV1NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NotificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>) {
      return parseResponse(client.api.v1.notification[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1NotificationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1NotificationIdMutationKey() {
  return ['api', '/api/v1/notification/:id', 'DELETE'] as const
}

export function getDeleteApiV1NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.notification[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1NotificationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1NotificationQueryKey() {
  return ['api', '/api/v1/notification'] as const
}

export function getApiV1NotificationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationQueryKey>
  >({
    queryKey: getApiV1NotificationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationQueryKey>
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
    return { ...getApiV1NotificationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1NotificationMutationKey() {
  return ['api', '/api/v1/notification', 'POST'] as const
}

export function getPostApiV1NotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.notification.$post>) {
      return parseResponse(client.api.v1.notification.$post(args, options))
    },
  })
}

export function createPostApiV1Notification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.$post>,
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
    const mutationDefaults = getPostApiV1NotificationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1NotificationSchemaQueryKey() {
  return ['api', '/api/v1/notification/schema'] as const
}

export function getApiV1NotificationSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationSchemaQueryKey>
  >({
    queryKey: getApiV1NotificationSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationSchemaQueryKey>
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
    return { ...getApiV1NotificationSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1NotificationTestMutationKey() {
  return ['api', '/api/v1/notification/test', 'POST'] as const
}

export function getPostApiV1NotificationTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.notification.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.notification.test.$post>) {
      return parseResponse(client.api.v1.notification.test.$post(args, options))
    },
  })
}

export function createPostApiV1NotificationTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.test.$post>,
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
    const mutationDefaults = getPostApiV1NotificationTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1NotificationTestallMutationKey() {
  return ['api', '/api/v1/notification/testall', 'POST'] as const
}

export function getPostApiV1NotificationTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.notification.testall.$post(undefined, options))
    },
  })
}

export function createPostApiV1NotificationTestall<
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
                Awaited<ReturnType<typeof client.api.v1.notification.testall.$post>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1NotificationTestallMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1NotificationActionNameMutationKey() {
  return ['api', '/api/v1/notification/action/:name', 'POST'] as const
}

export function getPostApiV1NotificationActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.notification.action[':name'].$post(args, options))
    },
  })
}

export function createPostApiV1NotificationActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.notification.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
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
    const mutationDefaults = getPostApiV1NotificationActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ParseQueryKey(args: InferRequestType<typeof client.api.v1.parse.$get>) {
  return ['api', '/api/v1/parse', args] as const
}

export function getApiV1ParseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.parse.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ParseQueryKey>
  >({
    queryKey: getApiV1ParseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.parse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Parse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.parse.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ParseQueryKey>
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
    return { ...getApiV1ParseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPingQueryKey>
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
    return { ...getPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHeadPingMutationKey() {
  return ['ping', '/ping', 'HEAD'] as const
}

export function getHeadPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.ping.$head(undefined, options))
    },
  })
}

export function createHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
          TError,
          void,
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
    const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QualitydefinitionIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>,
) {
  return ['api', '/api/v1/qualitydefinition/:id', args] as const
}

export function getApiV1QualitydefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualitydefinitionIdQueryKey>
  >({
    queryKey: getApiV1QualitydefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.qualitydefinition[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1QualitydefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QualitydefinitionIdQueryKey>
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
      ...getApiV1QualitydefinitionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1QualitydefinitionIdMutationKey() {
  return ['api', '/api/v1/qualitydefinition/:id', 'PUT'] as const
}

export function getPutApiV1QualitydefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1QualitydefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.qualitydefinition[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1QualitydefinitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1QualitydefinitionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QualitydefinitionQueryKey() {
  return ['api', '/api/v1/qualitydefinition'] as const
}

export function getApiV1QualitydefinitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualitydefinitionQueryKey>
  >({
    queryKey: getApiV1QualitydefinitionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.qualitydefinition.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Qualitydefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QualitydefinitionQueryKey>
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
    return { ...getApiV1QualitydefinitionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1QualitydefinitionUpdateMutationKey() {
  return ['api', '/api/v1/qualitydefinition/update', 'PUT'] as const
}

export function getPutApiV1QualitydefinitionUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.qualitydefinition.update.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.qualitydefinition.update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1QualitydefinitionUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.qualitydefinition.update.$put>) {
      return parseResponse(client.api.v1.qualitydefinition.update.$put(args, options))
    },
  })
}

export function createPutApiV1QualitydefinitionUpdate<
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
                Awaited<ReturnType<typeof client.api.v1.qualitydefinition.update.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.qualitydefinition.update.$put>,
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
    const mutationDefaults = getPutApiV1QualitydefinitionUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QualityprofileQueryKey() {
  return ['api', '/api/v1/qualityprofile'] as const
}

export function getApiV1QualityprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualityprofileQueryKey>
  >({
    queryKey: getApiV1QualityprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.qualityprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Qualityprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QualityprofileQueryKey>
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
    return { ...getApiV1QualityprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1QualityprofileMutationKey() {
  return ['api', '/api/v1/qualityprofile', 'POST'] as const
}

export function getPostApiV1QualityprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.qualityprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QualityprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.qualityprofile.$post>) {
      return parseResponse(client.api.v1.qualityprofile.$post(args, options))
    },
  })
}

export function createPostApiV1Qualityprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.qualityprofile.$post>,
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
    const mutationDefaults = getPostApiV1QualityprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QualityprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>,
) {
  return ['api', '/api/v1/qualityprofile/:id', args] as const
}

export function getApiV1QualityprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualityprofileIdQueryKey>
  >({
    queryKey: getApiV1QualityprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.qualityprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1QualityprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QualityprofileIdQueryKey>
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
      ...getApiV1QualityprofileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1QualityprofileIdMutationKey() {
  return ['api', '/api/v1/qualityprofile/:id', 'PUT'] as const
}

export function getPutApiV1QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1QualityprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$put']>) {
      return parseResponse(client.api.v1.qualityprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1QualityprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1QualityprofileIdMutationKey() {
  return ['api', '/api/v1/qualityprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV1QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1QualityprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.qualityprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1QualityprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QualityprofileSchemaQueryKey() {
  return ['api', '/api/v1/qualityprofile/schema'] as const
}

export function getApiV1QualityprofileSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualityprofileSchemaQueryKey>
  >({
    queryKey: getApiV1QualityprofileSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.qualityprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1QualityprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QualityprofileSchemaQueryKey>
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
    return { ...getApiV1QualityprofileSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV1QueueIdMutationKey() {
  return ['api', '/api/v1/queue/:id', 'DELETE'] as const
}

export function getDeleteApiV1QueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.queue)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.queue)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1QueueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.queue)[':id']['$delete']>) {
      return parseResponse(client.api.v1.queue[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1QueueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.queue)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.queue)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1QueueIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1QueueBulkMutationKey() {
  return ['api', '/api/v1/queue/bulk', 'DELETE'] as const
}

export function getDeleteApiV1QueueBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.bulk.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.queue.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1QueueBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.queue.bulk.$delete>) {
      return parseResponse(client.api.v1.queue.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1QueueBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.queue.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1QueueBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QueueQueryKey(args: InferRequestType<typeof client.api.v1.queue.$get>) {
  return ['api', '/api/v1/queue', args] as const
}

export function getApiV1QueueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.queue.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1QueueQueryKey>
  >({
    queryKey: getApiV1QueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.queue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Queue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.queue.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QueueQueryKey>
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
    return { ...getApiV1QueueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1QueueGrabIdMutationKey() {
  return ['api', '/api/v1/queue/grab/:id', 'POST'] as const
}

export function getPostApiV1QueueGrabIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.queue.grab)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.queue.grab)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QueueGrabIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.queue.grab)[':id']['$post']>) {
      return parseResponse(client.api.v1.queue.grab[':id'].$post(args, options))
    },
  })
}

export function createPostApiV1QueueGrabId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.queue.grab)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.queue.grab)[':id']['$post']>,
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
    const mutationDefaults = getPostApiV1QueueGrabIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1QueueGrabBulkMutationKey() {
  return ['api', '/api/v1/queue/grab/bulk', 'POST'] as const
}

export function getPostApiV1QueueGrabBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.grab.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.queue.grab.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QueueGrabBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.queue.grab.bulk.$post>) {
      return parseResponse(client.api.v1.queue.grab.bulk.$post(args, options))
    },
  })
}

export function createPostApiV1QueueGrabBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.grab.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.queue.grab.bulk.$post>,
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
    const mutationDefaults = getPostApiV1QueueGrabBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1QueueDetailsQueryKey(
  args: InferRequestType<typeof client.api.v1.queue.details.$get>,
) {
  return ['api', '/api/v1/queue/details', args] as const
}

export function getApiV1QueueDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.queue.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueueDetailsQueryKey>
  >({
    queryKey: getApiV1QueueDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.queue.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1QueueDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.queue.details.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QueueDetailsQueryKey>
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
    return { ...getApiV1QueueDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1QueueStatusQueryKey() {
  return ['api', '/api/v1/queue/status'] as const
}

export function getApiV1QueueStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueueStatusQueryKey>
  >({
    queryKey: getApiV1QueueStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.queue.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1QueueStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1QueueStatusQueryKey>
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
    return { ...getApiV1QueueStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ReleaseQueryKey(args: InferRequestType<typeof client.api.v1.release.$get>) {
  return ['api', '/api/v1/release', args] as const
}

export function getApiV1ReleaseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.release.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleaseQueryKey>
  >({
    queryKey: getApiV1ReleaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.release.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Release<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.release.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ReleaseQueryKey>
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
    return { ...getApiV1ReleaseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ReleaseMutationKey() {
  return ['api', '/api/v1/release', 'POST'] as const
}

export function getPostApiV1ReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.release.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReleaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.release.$post>) {
      return parseResponse(client.api.v1.release.$post(args, options))
    },
  })
}

export function createPostApiV1Release<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.release.$post>,
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
    const mutationDefaults = getPostApiV1ReleaseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ReleaseprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>,
) {
  return ['api', '/api/v1/releaseprofile/:id', args] as const
}

export function getApiV1ReleaseprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleaseprofileIdQueryKey>
  >({
    queryKey: getApiV1ReleaseprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.releaseprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ReleaseprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ReleaseprofileIdQueryKey>
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
      ...getApiV1ReleaseprofileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1ReleaseprofileIdMutationKey() {
  return ['api', '/api/v1/releaseprofile/:id', 'PUT'] as const
}

export function getPutApiV1ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ReleaseprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$put']>) {
      return parseResponse(client.api.v1.releaseprofile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1ReleaseprofileIdMutationKey() {
  return ['api', '/api/v1/releaseprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV1ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ReleaseprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.releaseprofile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ReleaseprofileQueryKey() {
  return ['api', '/api/v1/releaseprofile'] as const
}

export function getApiV1ReleaseprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleaseprofileQueryKey>
  >({
    queryKey: getApiV1ReleaseprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.releaseprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Releaseprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ReleaseprofileQueryKey>
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
    return { ...getApiV1ReleaseprofileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ReleaseprofileMutationKey() {
  return ['api', '/api/v1/releaseprofile', 'POST'] as const
}

export function getPostApiV1ReleaseprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.releaseprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReleaseprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.releaseprofile.$post>) {
      return parseResponse(client.api.v1.releaseprofile.$post(args, options))
    },
  })
}

export function createPostApiV1Releaseprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.releaseprofile.$post>,
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
    const mutationDefaults = getPostApiV1ReleaseprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ReleasePushMutationKey() {
  return ['api', '/api/v1/release/push', 'POST'] as const
}

export function getPostApiV1ReleasePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.push.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.release.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReleasePushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.release.push.$post>) {
      return parseResponse(client.api.v1.release.push.$post(args, options))
    },
  })
}

export function createPostApiV1ReleasePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.release.push.$post>,
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
    const mutationDefaults = getPostApiV1ReleasePushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RemotepathmappingIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>,
) {
  return ['api', '/api/v1/remotepathmapping/:id', args] as const
}

export function getApiV1RemotepathmappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RemotepathmappingIdQueryKey>
  >({
    queryKey: getApiV1RemotepathmappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.remotepathmapping[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1RemotepathmappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RemotepathmappingIdQueryKey>
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
      ...getApiV1RemotepathmappingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1RemotepathmappingIdMutationKey() {
  return ['api', '/api/v1/remotepathmapping/:id', 'PUT'] as const
}

export function getPutApiV1RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.remotepathmapping[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1RemotepathmappingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1RemotepathmappingIdMutationKey() {
  return ['api', '/api/v1/remotepathmapping/:id', 'DELETE'] as const
}

export function getDeleteApiV1RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.remotepathmapping[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1RemotepathmappingId<
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
                Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1RemotepathmappingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RemotepathmappingQueryKey() {
  return ['api', '/api/v1/remotepathmapping'] as const
}

export function getApiV1RemotepathmappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RemotepathmappingQueryKey>
  >({
    queryKey: getApiV1RemotepathmappingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.remotepathmapping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Remotepathmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RemotepathmappingQueryKey>
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
    return { ...getApiV1RemotepathmappingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1RemotepathmappingMutationKey() {
  return ['api', '/api/v1/remotepathmapping', 'POST'] as const
}

export function getPostApiV1RemotepathmappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.remotepathmapping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RemotepathmappingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.remotepathmapping.$post>) {
      return parseResponse(client.api.v1.remotepathmapping.$post(args, options))
    },
  })
}

export function createPostApiV1Remotepathmapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.remotepathmapping.$post>,
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
    const mutationDefaults = getPostApiV1RemotepathmappingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RenameQueryKey(args: InferRequestType<typeof client.api.v1.rename.$get>) {
  return ['api', '/api/v1/rename', args] as const
}

export function getApiV1RenameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.rename.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RenameQueryKey>
  >({
    queryKey: getApiV1RenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rename.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Rename<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.rename.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RenameQueryKey>
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
    return { ...getApiV1RenameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1RetagQueryKey(args: InferRequestType<typeof client.api.v1.retag.$get>) {
  return ['api', '/api/v1/retag', args] as const
}

export function getApiV1RetagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.retag.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1RetagQueryKey>
  >({
    queryKey: getApiV1RetagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.retag.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Retag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.retag.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RetagQueryKey>
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
    return { ...getApiV1RetagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1RootfolderIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>,
) {
  return ['api', '/api/v1/rootfolder/:id', args] as const
}

export function getApiV1RootfolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RootfolderIdQueryKey>
  >({
    queryKey: getApiV1RootfolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rootfolder[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1RootfolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RootfolderIdQueryKey>
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
    return { ...getApiV1RootfolderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1RootfolderIdMutationKey() {
  return ['api', '/api/v1/rootfolder/:id', 'PUT'] as const
}

export function getPutApiV1RootfolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RootfolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$put']>) {
      return parseResponse(client.api.v1.rootfolder[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1RootfolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1RootfolderIdMutationKey() {
  return ['api', '/api/v1/rootfolder/:id', 'DELETE'] as const
}

export function getDeleteApiV1RootfolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RootfolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$delete']>) {
      return parseResponse(client.api.v1.rootfolder[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1RootfolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RootfolderQueryKey() {
  return ['api', '/api/v1/rootfolder'] as const
}

export function getApiV1RootfolderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RootfolderQueryKey>
  >({
    queryKey: getApiV1RootfolderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rootfolder.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1Rootfolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RootfolderQueryKey>
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
    return { ...getApiV1RootfolderQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1RootfolderMutationKey() {
  return ['api', '/api/v1/rootfolder', 'POST'] as const
}

export function getPostApiV1RootfolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.rootfolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RootfolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.rootfolder.$post>) {
      return parseResponse(client.api.v1.rootfolder.$post(args, options))
    },
  })
}

export function createPostApiV1Rootfolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.rootfolder.$post>,
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
    const mutationDefaults = getPostApiV1RootfolderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1SearchQueryKey(args: InferRequestType<typeof client.api.v1.search.$get>) {
  return ['api', '/api/v1/search', args] as const
}

export function getApiV1SearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchQueryKey>
  >({
    queryKey: getApiV1SearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SearchQueryKey>
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
    return { ...getApiV1SearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContentPathQueryKey(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
) {
  return ['content', '/content/:path', args] as const
}

export function getContentPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentPathQueryKey>
  >({
    queryKey: getContentPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getContentPathQueryKey>
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
    return { ...getContentPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
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
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPathQueryKey(args: InferRequestType<(typeof client)[':path']['$get']>) {
  return [':path', '/:path', args] as const
}

export function getPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >({
    queryKey: getPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPathQueryKey>
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
    return { ...getPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemStatusQueryKey() {
  return ['api', '/api/v1/system/status'] as const
}

export function getApiV1SystemStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemStatusQueryKey>
  >({
    queryKey: getApiV1SystemStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SystemStatusQueryKey>
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
    return { ...getApiV1SystemStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemRoutesQueryKey() {
  return ['api', '/api/v1/system/routes'] as const
}

export function getApiV1SystemRoutesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemRoutesQueryKey>
  >({
    queryKey: getApiV1SystemRoutesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.routes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SystemRoutesQueryKey>
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
    return { ...getApiV1SystemRoutesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemRoutesDuplicateQueryKey() {
  return ['api', '/api/v1/system/routes/duplicate'] as const
}

export function getApiV1SystemRoutesDuplicateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemRoutesDuplicateQueryKey>
  >({
    queryKey: getApiV1SystemRoutesDuplicateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.routes.duplicate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SystemRoutesDuplicateQueryKey>
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
    return { ...getApiV1SystemRoutesDuplicateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1SystemShutdownMutationKey() {
  return ['api', '/api/v1/system/shutdown', 'POST'] as const
}

export function getPostApiV1SystemShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.shutdown.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.system.shutdown.$post(undefined, options))
    },
  })
}

export function createPostApiV1SystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.shutdown.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1SystemShutdownMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1SystemRestartMutationKey() {
  return ['api', '/api/v1/system/restart', 'POST'] as const
}

export function getPostApiV1SystemRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.restart.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.system.restart.$post(undefined, options))
    },
  })
}

export function createPostApiV1SystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.restart.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostApiV1SystemRestartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1TagIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>,
) {
  return ['api', '/api/v1/tag/:id', args] as const
}

export function getApiV1TagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagIdQueryKey>
  >({
    queryKey: getApiV1TagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TagIdQueryKey>
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
    return { ...getApiV1TagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1TagIdMutationKey() {
  return ['api', '/api/v1/tag/:id', 'PUT'] as const
}

export function getPutApiV1TagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>) {
      return parseResponse(client.api.v1.tag[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1TagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1TagIdMutationKey() {
  return ['api', '/api/v1/tag/:id', 'DELETE'] as const
}

export function getDeleteApiV1TagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>) {
      return parseResponse(client.api.v1.tag[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1TagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1TagQueryKey() {
  return ['api', '/api/v1/tag'] as const
}

export function getApiV1TagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TagQueryKey>
  >({
    queryKey: getApiV1TagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TagQueryKey>
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
    return { ...getApiV1TagQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1TagMutationKey() {
  return ['api', '/api/v1/tag', 'POST'] as const
}

export function getPostApiV1TagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v1.tag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tag.$post>) {
      return parseResponse(client.api.v1.tag.$post(args, options))
    },
  })
}

export function createPostApiV1Tag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.tag.$post>,
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
    const mutationDefaults = getPostApiV1TagMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1TagDetailIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>,
) {
  return ['api', '/api/v1/tag/detail/:id', args] as const
}

export function getApiV1TagDetailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagDetailIdQueryKey>
  >({
    queryKey: getApiV1TagDetailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.detail[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TagDetailIdQueryKey>
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
    return { ...getApiV1TagDetailIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1TagDetailQueryKey() {
  return ['api', '/api/v1/tag/detail'] as const
}

export function getApiV1TagDetailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagDetailQueryKey>
  >({
    queryKey: getApiV1TagDetailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.detail.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TagDetailQueryKey>
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
    return { ...getApiV1TagDetailQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemTaskQueryKey() {
  return ['api', '/api/v1/system/task'] as const
}

export function getApiV1SystemTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemTaskQueryKey>
  >({
    queryKey: getApiV1SystemTaskQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.task.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SystemTaskQueryKey>
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
    return { ...getApiV1SystemTaskQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SystemTaskIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>,
) {
  return ['api', '/api/v1/system/task/:id', args] as const
}

export function getApiV1SystemTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemTaskIdQueryKey>
  >({
    queryKey: getApiV1SystemTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.system.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SystemTaskIdQueryKey>
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
    return { ...getApiV1SystemTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1TrackQueryKey(args: InferRequestType<typeof client.api.v1.track.$get>) {
  return ['api', '/api/v1/track', args] as const
}

export function getApiV1TrackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.track.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackQueryKey>
  >({
    queryKey: getApiV1TrackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.track.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Track<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.track.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TrackQueryKey>
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
    return { ...getApiV1TrackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1TrackIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.track)[':id']['$get']>,
) {
  return ['api', '/api/v1/track/:id', args] as const
}

export function getApiV1TrackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.track)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackIdQueryKey>
  >({
    queryKey: getApiV1TrackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.track[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1TrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.track)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TrackIdQueryKey>
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
    return { ...getApiV1TrackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1TrackfileIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>,
) {
  return ['api', '/api/v1/trackfile/:id', args] as const
}

export function getApiV1TrackfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackfileIdQueryKey>
  >({
    queryKey: getApiV1TrackfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.trackfile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1TrackfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TrackfileIdQueryKey>
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
    return { ...getApiV1TrackfileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1TrackfileIdMutationKey() {
  return ['api', '/api/v1/trackfile/:id', 'PUT'] as const
}

export function getPutApiV1TrackfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.trackfile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TrackfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$put']>) {
      return parseResponse(client.api.v1.trackfile[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1TrackfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.trackfile)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1TrackfileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1TrackfileIdMutationKey() {
  return ['api', '/api/v1/trackfile/:id', 'DELETE'] as const
}

export function getDeleteApiV1TrackfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.trackfile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TrackfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.trackfile)[':id']['$delete']>) {
      return parseResponse(client.api.v1.trackfile[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1TrackfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.trackfile)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1TrackfileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1TrackfileQueryKey(
  args: InferRequestType<typeof client.api.v1.trackfile.$get>,
) {
  return ['api', '/api/v1/trackfile', args] as const
}

export function getApiV1TrackfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.trackfile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackfileQueryKey>
  >({
    queryKey: getApiV1TrackfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.trackfile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Trackfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.trackfile.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1TrackfileQueryKey>
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
    return { ...getApiV1TrackfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1TrackfileEditorMutationKey() {
  return ['api', '/api/v1/trackfile/editor', 'PUT'] as const
}

export function getPutApiV1TrackfileEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.editor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.trackfile.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TrackfileEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.trackfile.editor.$put>) {
      return parseResponse(client.api.v1.trackfile.editor.$put(args, options))
    },
  })
}

export function createPutApiV1TrackfileEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.trackfile.editor.$put>,
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
    const mutationDefaults = getPutApiV1TrackfileEditorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1TrackfileBulkMutationKey() {
  return ['api', '/api/v1/trackfile/bulk', 'DELETE'] as const
}

export function getDeleteApiV1TrackfileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.trackfile.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TrackfileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.trackfile.bulk.$delete>) {
      return parseResponse(client.api.v1.trackfile.bulk.$delete(args, options))
    },
  })
}

export function createDeleteApiV1TrackfileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.trackfile.bulk.$delete>,
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
    const mutationDefaults = getDeleteApiV1TrackfileBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigUiIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>,
) {
  return ['api', '/api/v1/config/ui/:id', args] as const
}

export function getApiV1ConfigUiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigUiIdQueryKey>
  >({
    queryKey: getApiV1ConfigUiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.ui[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigUiIdQueryKey>
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
    return { ...getApiV1ConfigUiIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1ConfigUiIdMutationKey() {
  return ['api', '/api/v1/config/ui/:id', 'PUT'] as const
}

export function getPutApiV1ConfigUiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigUiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>) {
      return parseResponse(client.api.v1.config.ui[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1ConfigUiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1ConfigUiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ConfigUiQueryKey() {
  return ['api', '/api/v1/config/ui'] as const
}

export function getApiV1ConfigUiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigUiQueryKey>
  >({
    queryKey: getApiV1ConfigUiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.ui.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ConfigUiQueryKey>
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
    return { ...getApiV1ConfigUiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1UpdateQueryKey() {
  return ['api', '/api/v1/update'] as const
}

export function getApiV1UpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UpdateQueryKey>
  >({
    queryKey: getApiV1UpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.update.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UpdateQueryKey>
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
    return { ...getApiV1UpdateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LogFileUpdateQueryKey() {
  return ['api', '/api/v1/log/file/update'] as const
}

export function getApiV1LogFileUpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileUpdateQueryKey>
  >({
    queryKey: getApiV1LogFileUpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.file.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LogFileUpdateQueryKey>
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
    return { ...getApiV1LogFileUpdateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LogFileUpdateFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>,
) {
  return ['api', '/api/v1/log/file/update/:filename', args] as const
}

export function getApiV1LogFileUpdateFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileUpdateFilenameQueryKey>
  >({
    queryKey: getApiV1LogFileUpdateFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.file.update[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LogFileUpdateFilenameQueryKey>
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
      ...getApiV1LogFileUpdateFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
