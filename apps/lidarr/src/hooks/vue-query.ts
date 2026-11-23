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

export function getApiV1AlbumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.album.$get>>,
) {
  return ['api', '/api/v1/album', toValue(args)] as const
}

export function getApiV1AlbumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.album.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlbumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.album.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Album<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.album.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>
          >,
          ReturnType<typeof getApiV1AlbumQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AlbumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlbumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.album.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Album<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.album.$post>,
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
  const mutationDefaults = getPostApiV1AlbumMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AlbumIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.album)[':id']['$get']>>,
) {
  return ['api', '/api/v1/album/:id', toValue(args)] as const
}

export function getApiV1AlbumIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.album)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlbumIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.album[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.album)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1AlbumIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlbumIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlbumIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.album[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1AlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.album)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.album)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1AlbumIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1AlbumId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1AlbumIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1AlbumMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.monitor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.album.monitor.$put>,
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
  const mutationDefaults = getPutApiV1AlbumMonitorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AlbumLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.album.lookup.$get>>,
) {
  return ['api', '/api/v1/album/lookup', toValue(args)] as const
}

export function getApiV1AlbumLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.album.lookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlbumLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.album.lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AlbumLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.album.lookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AlbumLookupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.album.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlbumLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlbumLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.album.lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Albumstudio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.albumstudio.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.albumstudio.$post>,
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
  const mutationDefaults = getPostApiV1AlbumstudioMutationOptions<TError, TOnMutateResult>(
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

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          ReturnType<typeof getApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ArtistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>>,
) {
  return ['api', '/api/v1/artist/:id', toValue(args)] as const
}

export function getApiV1ArtistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ArtistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.artist[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ArtistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.artist)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ArtistIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.artist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ArtistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ArtistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.artist[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ArtistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ArtistIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1ArtistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1ArtistIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ArtistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.artist.$get>>,
) {
  return ['api', '/api/v1/artist', toValue(args)] as const
}

export function getApiV1ArtistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.artist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ArtistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.artist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Artist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.artist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
          >,
          ReturnType<typeof getApiV1ArtistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ArtistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ArtistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.artist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Artist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.artist.$post>,
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
  const mutationDefaults = getPostApiV1ArtistMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutApiV1ArtistEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.artist.editor.$put>,
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
  const mutationDefaults = getPutApiV1ArtistEditorMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1ArtistEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.editor.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.artist.editor.$delete>,
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
  const mutationDefaults = getDeleteApiV1ArtistEditorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ArtistLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.artist.lookup.$get>>,
) {
  return ['api', '/api/v1/artist/lookup', toValue(args)] as const
}

export function getApiV1ArtistLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.artist.lookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ArtistLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.artist.lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ArtistLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.artist.lookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ArtistLookupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.artist.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ArtistLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ArtistLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.artist.lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoginQueryKey() {
  return ['login', '/login'] as const
}

export function getLoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          ReturnType<typeof getLoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          ReturnType<typeof getLogoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AutotaggingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>>,
) {
  return ['api', '/api/v1/autotagging/:id', toValue(args)] as const
}

export function getApiV1AutotaggingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AutotaggingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.autotagging[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AutotaggingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.autotagging)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AutotaggingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.autotagging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotaggingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AutotaggingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.autotagging[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1AutotaggingIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1AutotaggingIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AutotaggingQueryKey() {
  return ['api', '/api/v1/autotagging'] as const
}

export function getApiV1AutotaggingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AutotaggingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.autotagging.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Autotagging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AutotaggingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotaggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AutotaggingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.autotagging.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Autotagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.autotagging.$post>,
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
  const mutationDefaults = getPostApiV1AutotaggingMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AutotaggingSchemaQueryKey() {
  return ['api', '/api/v1/autotagging/schema'] as const
}

export function getApiV1AutotaggingSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AutotaggingSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.autotagging.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AutotaggingSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AutotaggingSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.autotagging.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotaggingSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AutotaggingSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.autotagging.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemBackupQueryKey() {
  return ['api', '/api/v1/system/backup'] as const
}

export function getApiV1SystemBackupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemBackupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.backup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemBackupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemBackupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.backup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1SystemBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1SystemBackupIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1SystemBackupRestoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SystemBackupRestoreIdMutationOptions<
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

export function usePostApiV1SystemBackupRestoreUpload<
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
                Awaited<ReturnType<typeof client.api.v1.system.backup.restore.upload.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiV1SystemBackupRestoreUploadMutationOptions<
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

export function getApiV1BlocklistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocklist.$get>>,
) {
  return ['api', '/api/v1/blocklist', toValue(args)] as const
}

export function getApiV1BlocklistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocklist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BlocklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.blocklist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Blocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocklist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BlocklistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlocklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BlocklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.blocklist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1BlocklistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1BlocklistIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1BlocklistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.blocklist.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV1BlocklistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.calendar.$get>>,
) {
  return ['api', '/api/v1/calendar', toValue(args)] as const
}

export function getApiV1CalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CalendarQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CalendarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>>,
) {
  return ['api', '/api/v1/calendar/:id', toValue(args)] as const
}

export function getApiV1CalendarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CalendarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.calendar[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.calendar)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CalendarIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.calendar)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CalendarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CalendarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.calendar[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedV1CalendarLidarrIcsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>,
) {
  return ['feed', '/feed/v1/calendar/lidarr.ics', toValue(args)] as const
}

export function getFeedV1CalendarLidarrIcsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedV1CalendarLidarrIcsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feed.v1.calendar['lidarr.ics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedV1CalendarLidarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedV1CalendarLidarrIcsQueryKey>
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
          Awaited<ReturnType<(typeof client.feed.v1.calendar)['lidarr.ics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedV1CalendarLidarrIcsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedV1CalendarLidarrIcsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feed.v1.calendar['lidarr.ics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CommandIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.command)[':id']['$get']>>,
) {
  return ['api', '/api/v1/command/:id', toValue(args)] as const
}

export function getApiV1CommandIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.command)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CommandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.command[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.command)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CommandIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CommandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.command[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1CommandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1CommandIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CommandQueryKey() {
  return ['api', '/api/v1/command'] as const
}

export function getApiV1CommandQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CommandQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.command.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
          >,
          ReturnType<typeof getApiV1CommandQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CommandQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.command.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Command<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.command.$post>,
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
  const mutationDefaults = getPostApiV1CommandMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomfilterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>>,
) {
  return ['api', '/api/v1/customfilter/:id', toValue(args)] as const
}

export function getApiV1CustomfilterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomfilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customfilter[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomfilterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomfilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomfilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customfilter[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomfilterQueryKey() {
  return ['api', '/api/v1/customfilter'] as const
}

export function getApiV1CustomfilterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CustomfilterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customfilter.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CustomfilterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomfilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CustomfilterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customfilter.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Customfilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customfilter.$post>,
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
  const mutationDefaults = getPostApiV1CustomfilterMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomformatIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>>,
) {
  return ['api', '/api/v1/customformat/:id', toValue(args)] as const
}

export function getApiV1CustomformatIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomformatIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customformat[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomformatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customformat)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomformatIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.customformat)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomformatIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomformatIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customformat[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1CustomformatIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1CustomformatIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomformatQueryKey() {
  return ['api', '/api/v1/customformat'] as const
}

export function getApiV1CustomformatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CustomformatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customformat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Customformat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CustomformatQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomformatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CustomformatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customformat.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Customformat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customformat.$post>,
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
  const mutationDefaults = getPostApiV1CustomformatMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customformat.bulk.$put>,
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
  const mutationDefaults = getPutApiV1CustomformatBulkMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1CustomformatBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomformatSchemaQueryKey() {
  return ['api', '/api/v1/customformat/schema'] as const
}

export function getApiV1CustomformatSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CustomformatSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customformat.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomformatSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomformatSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customformat.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomformatSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CustomformatSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customformat.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WantedCutoffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.wanted.cutoff.$get>>,
) {
  return ['api', '/api/v1/wanted/cutoff', toValue(args)] as const
}

export function getApiV1WantedCutoffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.wanted.cutoff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WantedCutoffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.wanted.cutoff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WantedCutoff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.wanted.cutoff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WantedCutoffQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.cutoff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedCutoffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WantedCutoffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.wanted.cutoff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WantedCutoffIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>,
) {
  return ['api', '/api/v1/wanted/cutoff/:id', toValue(args)] as const
}

export function getApiV1WantedCutoffIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WantedCutoffIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.wanted.cutoff[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WantedCutoffId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WantedCutoffIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.wanted.cutoff)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedCutoffIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WantedCutoffIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.wanted.cutoff[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DelayprofileQueryKey() {
  return ['api', '/api/v1/delayprofile'] as const
}

export function getApiV1DelayprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DelayprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.delayprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Delayprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DelayprofileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DelayprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DelayprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.delayprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Delayprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.delayprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.delayprofile.$post>,
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
  const mutationDefaults = getPostApiV1DelayprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DelayprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v1/delayprofile/:id', toValue(args)] as const
}

export function getApiV1DelayprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DelayprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.delayprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DelayprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.delayprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DelayprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.delayprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DelayprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DelayprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.delayprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1DelayprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1DelayprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1DelayprofileReorderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1DelayprofileReorderIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DiskspaceQueryKey() {
  return ['api', '/api/v1/diskspace'] as const
}

export function getApiV1DiskspaceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DiskspaceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.diskspace.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Diskspace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DiskspaceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.diskspace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DiskspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DiskspaceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.diskspace.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DownloadclientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>>,
) {
  return ['api', '/api/v1/downloadclient/:id', toValue(args)] as const
}

export function getApiV1DownloadclientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DownloadclientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.downloadclient[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DownloadclientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DownloadclientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.downloadclient[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DownloadclientQueryKey() {
  return ['api', '/api/v1/downloadclient'] as const
}

export function getApiV1DownloadclientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DownloadclientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DownloadclientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DownloadclientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.downloadclient.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Downloadclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.$post>,
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
  const mutationDefaults = getPostApiV1DownloadclientMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DownloadclientSchemaQueryKey() {
  return ['api', '/api/v1/downloadclient/schema'] as const
}

export function getApiV1DownloadclientSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DownloadclientSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.downloadclient.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DownloadclientSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DownloadclientSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.downloadclient.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1DownloadclientTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1DownloadclientTestMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1DownloadclientTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1DownloadclientTestallMutationOptions<
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

export function usePostApiV1DownloadclientActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV1DownloadclientActionNameMutationOptions<
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

export function getApiV1ConfigDownloadclientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/config/downloadclient/:id', toValue(args)] as const
}

export function getApiV1ConfigDownloadclientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigDownloadclientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.downloadclient[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigDownloadclientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDownloadclientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigDownloadclientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.downloadclient[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigDownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ConfigDownloadclientIdMutationOptions<
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

export function getApiV1ConfigDownloadclientQueryKey() {
  return ['api', '/api/v1/config/downloadclient'] as const
}

export function getApiV1ConfigDownloadclientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigDownloadclientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigDownloadclientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDownloadclientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigDownloadclientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.downloadclient.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilesystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.$get>>,
) {
  return ['api', '/api/v1/filesystem', toValue(args)] as const
}

export function getApiV1FilesystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilesystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filesystem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FilesystemQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilesystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filesystem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilesystemTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.type.$get>>,
) {
  return ['api', '/api/v1/filesystem/type', toValue(args)] as const
}

export function getApiV1FilesystemTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.type.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilesystemTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filesystem.type.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.type.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FilesystemTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilesystemTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filesystem.type.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilesystemMediafilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>>,
) {
  return ['api', '/api/v1/filesystem/mediafiles', toValue(args)] as const
}

export function getApiV1FilesystemMediafilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilesystemMediafilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filesystem.mediafiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FilesystemMediafiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.mediafiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1FilesystemMediafilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.mediafiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemMediafilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilesystemMediafilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filesystem.mediafiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HealthQueryKey() {
  return ['api', '/api/v1/health'] as const
}

export function getApiV1HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          ReturnType<typeof getApiV1HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
) {
  return ['api', '/api/v1/history', toValue(args)] as const
}

export function getApiV1HistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          ReturnType<typeof getApiV1HistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistorySinceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.since.$get>>,
) {
  return ['api', '/api/v1/history/since', toValue(args)] as const
}

export function getApiV1HistorySinceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.since.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistorySinceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.since.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.since.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HistorySinceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistorySinceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistorySinceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.since.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistoryArtistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.artist.$get>>,
) {
  return ['api', '/api/v1/history/artist', toValue(args)] as const
}

export function getApiV1HistoryArtistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.artist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryArtistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.artist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistoryArtist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.artist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HistoryArtistQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.artist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryArtistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryArtistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.artist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1HistoryFailedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1HistoryFailedIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigHostIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>>,
) {
  return ['api', '/api/v1/config/host/:id', toValue(args)] as const
}

export function getApiV1ConfigHostIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigHostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.host[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigHostIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigHostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigHostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.host[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigHostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ConfigHostIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigHostQueryKey() {
  return ['api', '/api/v1/config/host'] as const
}

export function getApiV1ConfigHostQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigHostQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.host.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigHostQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigHostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigHostQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.host.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ImportlistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>>,
) {
  return ['api', '/api/v1/importlist/:id', toValue(args)] as const
}

export function getApiV1ImportlistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ImportlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.importlist[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.importlist)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ImportlistIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.importlist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ImportlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.importlist[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1ImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ImportlistQueryKey() {
  return ['api', '/api/v1/importlist'] as const
}

export function getApiV1ImportlistQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ImportlistQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Importlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ImportlistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ImportlistQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.importlist.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Importlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.$post>,
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
  const mutationDefaults = getPostApiV1ImportlistMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.bulk.$put>,
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
  const mutationDefaults = getPutApiV1ImportlistBulkMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1ImportlistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ImportlistSchemaQueryKey() {
  return ['api', '/api/v1/importlist/schema'] as const
}

export function getApiV1ImportlistSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ImportlistSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.importlist.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ImportlistSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ImportlistSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ImportlistSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.importlist.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ImportlistTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlist.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.importlist.test.$post>,
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
  const mutationDefaults = getPostApiV1ImportlistTestMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ImportlistTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1ImportlistTestallMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ImportlistActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1ImportlistActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ImportlistexclusionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/importlistexclusion/:id', toValue(args)] as const
}

export function getApiV1ImportlistexclusionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ImportlistexclusionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.importlistexclusion[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ImportlistexclusionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ImportlistexclusionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistexclusionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ImportlistexclusionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.importlistexclusion[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ImportlistexclusionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ImportlistexclusionIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1ImportlistexclusionId<
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
                Awaited<ReturnType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.importlistexclusion)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ImportlistexclusionIdMutationOptions<
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

export function getApiV1ImportlistexclusionQueryKey() {
  return ['api', '/api/v1/importlistexclusion'] as const
}

export function getApiV1ImportlistexclusionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ImportlistexclusionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.importlistexclusion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Importlistexclusion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ImportlistexclusionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.importlistexclusion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportlistexclusionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ImportlistexclusionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.importlistexclusion.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Importlistexclusion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1ImportlistexclusionMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>>,
) {
  return ['api', '/api/v1/indexer/:id', toValue(args)] as const
}

export function getApiV1IndexerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1IndexerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1IndexerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerQueryKey() {
  return ['api', '/api/v1/indexer'] as const
}

export function getApiV1IndexerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
          >,
          ReturnType<typeof getApiV1IndexerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Indexer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.$post>,
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
  const mutationDefaults = getPostApiV1IndexerMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.bulk.$put>,
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
  const mutationDefaults = getPutApiV1IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV1IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerSchemaQueryKey() {
  return ['api', '/api/v1/indexer/schema'] as const
}

export function getApiV1IndexerSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV1IndexerSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1IndexerTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.test.$post>,
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
  const mutationDefaults = getPostApiV1IndexerTestMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1IndexerTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.testall.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiV1IndexerTestallMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1IndexerActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1IndexerActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigIndexerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>>,
) {
  return ['api', '/api/v1/config/indexer/:id', toValue(args)] as const
}

export function getApiV1ConfigIndexerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigIndexerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.indexer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigIndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.indexer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigIndexerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.config.indexer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigIndexerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigIndexerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.indexer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigIndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ConfigIndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigIndexerQueryKey() {
  return ['api', '/api/v1/config/indexer'] as const
}

export function getApiV1ConfigIndexerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigIndexerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.indexer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigIndexerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.indexer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigIndexerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigIndexerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.indexer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1IndexerflagQueryKey() {
  return ['api', '/api/v1/indexerflag'] as const
}

export function getApiV1IndexerflagQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerflagQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexerflag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Indexerflag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>
            >
          >,
          ReturnType<typeof getApiV1IndexerflagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerflag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerflagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerflagQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexerflag.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LanguageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.language)[':id']['$get']>>,
) {
  return ['api', '/api/v1/language/:id', toValue(args)] as const
}

export function getApiV1LanguageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.language)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LanguageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.language[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.language)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LanguageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.language)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LanguageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LanguageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.language[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LanguageQueryKey() {
  return ['api', '/api/v1/language'] as const
}

export function getApiV1LanguageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LanguageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.language.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Language<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LanguageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.language.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LanguageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.language.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LocalizationQueryKey() {
  return ['api', '/api/v1/localization'] as const
}

export function getApiV1LocalizationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LocalizationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.localization.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LocalizationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocalizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LocalizationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.localization.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.$get>>,
) {
  return ['api', '/api/v1/log', toValue(args)] as const
}

export function getApiV1LogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
          >,
          ReturnType<typeof getApiV1LogQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1LogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileQueryKey() {
  return ['api', '/api/v1/log/file'] as const
}

export function getApiV1LogFileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LogFileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LogFileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LogFileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileFilenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>>,
) {
  return ['api', '/api/v1/log/file/:filename', toValue(args)] as const
}

export function getApiV1LogFileFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogFileFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LogFileFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogFileFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ManualimportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.manualimport.$get>>,
) {
  return ['api', '/api/v1/manualimport', toValue(args)] as const
}

export function getApiV1ManualimportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.manualimport.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ManualimportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.manualimport.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Manualimport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.manualimport.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ManualimportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ManualimportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ManualimportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.manualimport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Manualimport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manualimport.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.manualimport.$post>,
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
  const mutationDefaults = getPostApiV1ManualimportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MediacoverArtistArtistIdFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
  >,
) {
  return ['api', '/api/v1/mediacover/artist/:artistId/:filename', toValue(args)] as const
}

export function getApiV1MediacoverArtistArtistIdFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediacoverArtistArtistIdFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.mediacover.artist[':artistId'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediacoverArtistArtistIdFilename<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
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
                    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
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
                    (typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MediacoverArtistArtistIdFilenameQueryKey>
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
            ReturnType<(typeof client.api.v1.mediacover.artist)[':artistId'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediacoverArtistArtistIdFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediacoverArtistArtistIdFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.mediacover.artist[':artistId'][':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MediacoverAlbumAlbumIdFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
  >,
) {
  return ['api', '/api/v1/mediacover/album/:albumId/:filename', toValue(args)] as const
}

export function getApiV1MediacoverAlbumAlbumIdFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediacoverAlbumAlbumIdFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.mediacover.album[':albumId'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediacoverAlbumAlbumIdFilename<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
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
                    (typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']
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
                    (typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MediacoverAlbumAlbumIdFilenameQueryKey>
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
            ReturnType<(typeof client.api.v1.mediacover.album)[':albumId'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediacoverAlbumAlbumIdFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediacoverAlbumAlbumIdFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.mediacover.album[':albumId'][':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigMediamanagementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/config/mediamanagement/:id', toValue(args)] as const
}

export function getApiV1ConfigMediamanagementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigMediamanagementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.mediamanagement[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigMediamanagementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigMediamanagementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMediamanagementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigMediamanagementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.mediamanagement[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigMediamanagementId<
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
                Awaited<ReturnType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.mediamanagement)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ConfigMediamanagementIdMutationOptions<
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

export function getApiV1ConfigMediamanagementQueryKey() {
  return ['api', '/api/v1/config/mediamanagement'] as const
}

export function getApiV1ConfigMediamanagementQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigMediamanagementQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.mediamanagement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigMediamanagement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigMediamanagementQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.mediamanagement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMediamanagementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigMediamanagementQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.mediamanagement.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetadataIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>>,
) {
  return ['api', '/api/v1/metadata/:id', toValue(args)] as const
}

export function getApiV1MetadataIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetadataIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metadata[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.metadata)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetadataIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.metadata)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetadataIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metadata[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1MetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1MetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MetadataQueryKey() {
  return ['api', '/api/v1/metadata'] as const
}

export function getApiV1MetadataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MetadataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Metadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>
            >
          >,
          ReturnType<typeof getApiV1MetadataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MetadataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metadata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Metadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.metadata.$post>,
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
  const mutationDefaults = getPostApiV1MetadataMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MetadataSchemaQueryKey() {
  return ['api', '/api/v1/metadata/schema'] as const
}

export function getApiV1MetadataSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MetadataSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metadata.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetadataSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV1MetadataSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MetadataSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metadata.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1MetadataTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.metadata.test.$post>,
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
  const mutationDefaults = getPostApiV1MetadataTestMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1MetadataTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadata.testall.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiV1MetadataTestallMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1MetadataActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1MetadataActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MetadataprofileQueryKey() {
  return ['api', '/api/v1/metadataprofile'] as const
}

export function getApiV1MetadataprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MetadataprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metadataprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Metadataprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV1MetadataprofileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MetadataprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metadataprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Metadataprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.metadataprofile.$post>,
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
  const mutationDefaults = getPostApiV1MetadataprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MetadataprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v1/metadataprofile/:id', toValue(args)] as const
}

export function getApiV1MetadataprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetadataprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metadataprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetadataprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetadataprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.metadataprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetadataprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metadataprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1MetadataprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1MetadataprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1MetadataprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1MetadataprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MetadataprofileSchemaQueryKey() {
  return ['api', '/api/v1/metadataprofile/schema'] as const
}

export function getApiV1MetadataprofileSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MetadataprofileSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metadataprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetadataprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetadataprofileSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metadataprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetadataprofileSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MetadataprofileSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metadataprofile.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigMetadataproviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/config/metadataprovider/:id', toValue(args)] as const
}

export function getApiV1ConfigMetadataproviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigMetadataproviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.metadataprovider[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigMetadataproviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigMetadataproviderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMetadataproviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigMetadataproviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.metadataprovider[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigMetadataproviderId<
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
                Awaited<ReturnType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.metadataprovider)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ConfigMetadataproviderIdMutationOptions<
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

export function getApiV1ConfigMetadataproviderQueryKey() {
  return ['api', '/api/v1/config/metadataprovider'] as const
}

export function getApiV1ConfigMetadataproviderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigMetadataproviderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.metadataprovider.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigMetadataprovider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigMetadataproviderQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.metadataprovider.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigMetadataproviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigMetadataproviderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.metadataprovider.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WantedMissingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.wanted.missing.$get>>,
) {
  return ['api', '/api/v1/wanted/missing', toValue(args)] as const
}

export function getApiV1WantedMissingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.wanted.missing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WantedMissingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.wanted.missing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WantedMissing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.wanted.missing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WantedMissingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.wanted.missing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedMissingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WantedMissingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.wanted.missing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WantedMissingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>,
) {
  return ['api', '/api/v1/wanted/missing/:id', toValue(args)] as const
}

export function getApiV1WantedMissingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WantedMissingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.wanted.missing[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WantedMissingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WantedMissingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.wanted.missing)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WantedMissingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WantedMissingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.wanted.missing[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigNamingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>>,
) {
  return ['api', '/api/v1/config/naming/:id', toValue(args)] as const
}

export function getApiV1ConfigNamingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigNamingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.naming[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigNamingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.naming)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigNamingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.config.naming)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigNamingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigNamingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.naming[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigNamingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ConfigNamingIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigNamingQueryKey() {
  return ['api', '/api/v1/config/naming'] as const
}

export function getApiV1ConfigNamingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigNamingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.naming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigNaming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigNamingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigNamingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigNamingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.naming.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigNamingExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.config.naming.examples.$get>>,
) {
  return ['api', '/api/v1/config/naming/examples', toValue(args)] as const
}

export function getApiV1ConfigNamingExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.config.naming.examples.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigNamingExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.naming.examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigNamingExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.config.naming.examples.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigNamingExamplesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.naming.examples.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigNamingExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigNamingExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.naming.examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NotificationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>>,
) {
  return ['api', '/api/v1/notification/:id', toValue(args)] as const
}

export function getApiV1NotificationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationQueryKey() {
  return ['api', '/api/v1/notification'] as const
}

export function getApiV1NotificationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1NotificationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>
            >
          >,
          ReturnType<typeof getApiV1NotificationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1NotificationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Notification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.$post>,
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
  const mutationDefaults = getPostApiV1NotificationMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationSchemaQueryKey() {
  return ['api', '/api/v1/notification/schema'] as const
}

export function getApiV1NotificationSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1NotificationSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1NotificationSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1NotificationTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1NotificationTestMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1NotificationTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1NotificationTestallMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1NotificationActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.notification.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV1NotificationActionNameMutationOptions<
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

export function getApiV1ParseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.parse.$get>>,
) {
  return ['api', '/api/v1/parse', toValue(args)] as const
}

export function getApiV1ParseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.parse.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ParseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.parse.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Parse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.parse.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>
          >,
          ReturnType<typeof getApiV1ParseQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.parse.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ParseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ParseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.parse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          ReturnType<typeof getPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
          TError,
          void,
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
  const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1QualitydefinitionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>,
) {
  return ['api', '/api/v1/qualitydefinition/:id', toValue(args)] as const
}

export function getApiV1QualitydefinitionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QualitydefinitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.qualitydefinition[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QualitydefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QualitydefinitionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.qualitydefinition)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualitydefinitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QualitydefinitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.qualitydefinition[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1QualitydefinitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1QualitydefinitionIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QualitydefinitionQueryKey() {
  return ['api', '/api/v1/qualitydefinition'] as const
}

export function getApiV1QualitydefinitionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1QualitydefinitionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.qualitydefinition.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Qualitydefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
            >
          >,
          ReturnType<typeof getApiV1QualitydefinitionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualitydefinition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualitydefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1QualitydefinitionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.qualitydefinition.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1QualitydefinitionUpdate<
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
                Awaited<ReturnType<typeof client.api.v1.qualitydefinition.update.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.qualitydefinition.update.$put>,
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
  const mutationDefaults = getPutApiV1QualitydefinitionUpdateMutationOptions<
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

export function getApiV1QualityprofileQueryKey() {
  return ['api', '/api/v1/qualityprofile'] as const
}

export function getApiV1QualityprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1QualityprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.qualityprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Qualityprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV1QualityprofileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualityprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1QualityprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.qualityprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Qualityprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.qualityprofile.$post>,
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
  const mutationDefaults = getPostApiV1QualityprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QualityprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v1/qualityprofile/:id', toValue(args)] as const
}

export function getApiV1QualityprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QualityprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.qualityprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QualityprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QualityprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.qualityprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualityprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QualityprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.qualityprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1QualityprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1QualityprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QualityprofileSchemaQueryKey() {
  return ['api', '/api/v1/qualityprofile/schema'] as const
}

export function getApiV1QualityprofileSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1QualityprofileSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.qualityprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QualityprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1QualityprofileSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.qualityprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QualityprofileSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1QualityprofileSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.qualityprofile.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1QueueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1QueueIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1QueueBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.queue.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV1QueueBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QueueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.queue.$get>>,
) {
  return ['api', '/api/v1/queue', toValue(args)] as const
}

export function getApiV1QueueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.queue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.queue.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Queue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.queue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>
          >,
          ReturnType<typeof getApiV1QueueQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1QueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.queue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1QueueGrabId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1QueueGrabIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1QueueGrabBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.grab.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.queue.grab.bulk.$post>,
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
  const mutationDefaults = getPostApiV1QueueGrabBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QueueDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.queue.details.$get>>,
) {
  return ['api', '/api/v1/queue/details', toValue(args)] as const
}

export function getApiV1QueueDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.queue.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueueDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.queue.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QueueDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.queue.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>
            >
          >,
          ReturnType<typeof getApiV1QueueDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueueDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueueDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.queue.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QueueStatusQueryKey() {
  return ['api', '/api/v1/queue/status'] as const
}

export function getApiV1QueueStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1QueueStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.queue.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QueueStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>
            >
          >,
          ReturnType<typeof getApiV1QueueStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.queue.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueueStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1QueueStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.queue.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReleaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.release.$get>>,
) {
  return ['api', '/api/v1/release', toValue(args)] as const
}

export function getApiV1ReleaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.release.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReleaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.release.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Release<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.release.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
          >,
          ReturnType<typeof getApiV1ReleaseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReleaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.release.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Release<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.release.$post>,
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
  const mutationDefaults = getPostApiV1ReleaseMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ReleaseprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v1/releaseprofile/:id', toValue(args)] as const
}

export function getApiV1ReleaseprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReleaseprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.releaseprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReleaseprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReleaseprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.releaseprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleaseprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReleaseprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.releaseprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ReleaseprofileQueryKey() {
  return ['api', '/api/v1/releaseprofile'] as const
}

export function getApiV1ReleaseprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ReleaseprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.releaseprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Releaseprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ReleaseprofileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleaseprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ReleaseprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.releaseprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Releaseprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releaseprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.releaseprofile.$post>,
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
  const mutationDefaults = getPostApiV1ReleaseprofileMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ReleasePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.release.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.release.push.$post>,
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
  const mutationDefaults = getPostApiV1ReleasePushMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RemotepathmappingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>,
) {
  return ['api', '/api/v1/remotepathmapping/:id', toValue(args)] as const
}

export function getApiV1RemotepathmappingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RemotepathmappingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.remotepathmapping[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RemotepathmappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RemotepathmappingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.remotepathmapping)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RemotepathmappingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RemotepathmappingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.remotepathmapping[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1RemotepathmappingIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1RemotepathmappingIdMutationOptions<
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

export function getApiV1RemotepathmappingQueryKey() {
  return ['api', '/api/v1/remotepathmapping'] as const
}

export function getApiV1RemotepathmappingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1RemotepathmappingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.remotepathmapping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Remotepathmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
            >
          >,
          ReturnType<typeof getApiV1RemotepathmappingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.remotepathmapping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RemotepathmappingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1RemotepathmappingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.remotepathmapping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Remotepathmapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1RemotepathmappingMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rename.$get>>,
) {
  return ['api', '/api/v1/rename', toValue(args)] as const
}

export function getApiV1RenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rename.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rename.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Rename<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rename.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
          >,
          ReturnType<typeof getApiV1RenameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rename.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rename.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RetagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.retag.$get>>,
) {
  return ['api', '/api/v1/retag', toValue(args)] as const
}

export function getApiV1RetagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.retag.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RetagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.retag.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Retag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.retag.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>
          >,
          ReturnType<typeof getApiV1RetagQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.retag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1RetagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RetagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.retag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RootfolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>>,
) {
  return ['api', '/api/v1/rootfolder/:id', toValue(args)] as const
}

export function getApiV1RootfolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RootfolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rootfolder[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RootfolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.rootfolder)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RootfolderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.rootfolder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RootfolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RootfolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rootfolder[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1RootfolderIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1RootfolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RootfolderQueryKey() {
  return ['api', '/api/v1/rootfolder'] as const
}

export function getApiV1RootfolderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1RootfolderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rootfolder.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Rootfolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>
            >
          >,
          ReturnType<typeof getApiV1RootfolderQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RootfolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1RootfolderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rootfolder.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Rootfolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rootfolder.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.rootfolder.$post>,
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
  const mutationDefaults = getPostApiV1RootfolderMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.$get>>,
) {
  return ['api', '/api/v1/search', toValue(args)] as const
}

export function getApiV1SearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
          >,
          ReturnType<typeof getApiV1SearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':path']['$get']>>,
) {
  return ['content', '/content/:path', toValue(args)] as const
}

export function getContentPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
            >
          >,
          ReturnType<typeof getContentPathQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
) {
  return [':path', '/:path', toValue(args)] as const
}

export function getPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':path'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          ReturnType<typeof getPathQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemStatusQueryKey() {
  return ['api', '/api/v1/system/status'] as const
}

export function getApiV1SystemStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemRoutesQueryKey() {
  return ['api', '/api/v1/system/routes'] as const
}

export function getApiV1SystemRoutesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemRoutesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.routes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemRoutesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemRoutesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.routes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemRoutesDuplicateQueryKey() {
  return ['api', '/api/v1/system/routes/duplicate'] as const
}

export function getApiV1SystemRoutesDuplicateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemRoutesDuplicateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.routes.duplicate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SystemRoutesDuplicateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemRoutesDuplicateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemRoutesDuplicateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.routes.duplicate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1SystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.shutdown.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiV1SystemShutdownMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1SystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.restart.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiV1SystemRestartMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>>,
) {
  return ['api', '/api/v1/tag/:id', toValue(args)] as const
}

export function getApiV1TagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TagIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1TagIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagQueryKey() {
  return ['api', '/api/v1/tag'] as const
}

export function getApiV1TagQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1TagQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
          >,
          ReturnType<typeof getApiV1TagQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1TagQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Tag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.tag.$post>,
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
  const mutationDefaults = getPostApiV1TagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1TagDetailIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>>,
) {
  return ['api', '/api/v1/tag/detail/:id', toValue(args)] as const
}

export function getApiV1TagDetailIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagDetailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.detail[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TagDetailIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagDetailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagDetailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.detail[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagDetailQueryKey() {
  return ['api', '/api/v1/tag/detail'] as const
}

export function getApiV1TagDetailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1TagDetailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.detail.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagDetailQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1TagDetailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.detail.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemTaskQueryKey() {
  return ['api', '/api/v1/system/task'] as const
}

export function getApiV1SystemTaskQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemTaskQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.task.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemTaskQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemTaskQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.task.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>>,
) {
  return ['api', '/api/v1/system/task/:id', toValue(args)] as const
}

export function getApiV1SystemTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SystemTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SystemTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SystemTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TrackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.track.$get>>,
) {
  return ['api', '/api/v1/track', toValue(args)] as const
}

export function getApiV1TrackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.track.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TrackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.track.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Track<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.track.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>
          >,
          ReturnType<typeof getApiV1TrackQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.track.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TrackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.track.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TrackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.track)[':id']['$get']>>,
) {
  return ['api', '/api/v1/track/:id', toValue(args)] as const
}

export function getApiV1TrackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.track)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TrackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.track[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.track)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TrackIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.track)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TrackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.track[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TrackfileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>>,
) {
  return ['api', '/api/v1/trackfile/:id', toValue(args)] as const
}

export function getApiV1TrackfileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TrackfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.trackfile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TrackfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.trackfile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TrackfileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.trackfile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TrackfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.trackfile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1TrackfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1TrackfileIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1TrackfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1TrackfileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TrackfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.trackfile.$get>>,
) {
  return ['api', '/api/v1/trackfile', toValue(args)] as const
}

export function getApiV1TrackfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.trackfile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TrackfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.trackfile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Trackfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.trackfile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TrackfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrackfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TrackfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.trackfile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1TrackfileEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.trackfile.editor.$put>,
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
  const mutationDefaults = getPutApiV1TrackfileEditorMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1TrackfileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trackfile.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.trackfile.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV1TrackfileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigUiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>>,
) {
  return ['api', '/api/v1/config/ui/:id', toValue(args)] as const
}

export function getApiV1ConfigUiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigUiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.ui[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigUiIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigUiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigUiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.ui[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1ConfigUiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1ConfigUiIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigUiQueryKey() {
  return ['api', '/api/v1/config/ui'] as const
}

export function getApiV1ConfigUiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigUiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.ui.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigUiQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigUiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigUiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.ui.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UpdateQueryKey() {
  return ['api', '/api/v1/update'] as const
}

export function getApiV1UpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1UpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.update.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
          >,
          ReturnType<typeof getApiV1UpdateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1UpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileUpdateQueryKey() {
  return ['api', '/api/v1/log/file/update'] as const
}

export function getApiV1LogFileUpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LogFileUpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LogFileUpdateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LogFileUpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileUpdateFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>
  >,
) {
  return ['api', '/api/v1/log/file/update/:filename', toValue(args)] as const
}

export function getApiV1LogFileUpdateFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogFileUpdateFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file.update[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LogFileUpdateFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileUpdateFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogFileUpdateFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file.update[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
