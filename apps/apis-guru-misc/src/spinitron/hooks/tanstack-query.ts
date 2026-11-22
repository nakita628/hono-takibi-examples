import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPersonasKey() {
  return ['personas'] as const
}

export function getPlaylistsKey() {
  return ['playlists'] as const
}

export function getShowsKey() {
  return ['shows'] as const
}

export function getSpinsKey() {
  return ['spins'] as const
}

export function getPersonasQueryKey(args: InferRequestType<typeof client.personas.$get>) {
  return ['personas', '/personas', args] as const
}

export function getPersonasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.personas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPersonasQueryKey>
  >({
    queryKey: getPersonasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.personas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePersonas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.personas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPersonasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPersonasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePersonas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.personas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPersonasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPersonasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPersonasIdQueryKey(
  args: InferRequestType<(typeof client.personas)[':id']['$get']>,
) {
  return ['personas', '/personas/:id', args] as const
}

export function getPersonasIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.personas)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPersonasIdQueryKey>
  >({
    queryKey: getPersonasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.personas[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePersonasId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.personas)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPersonasIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePersonasId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.personas)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPersonasIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlaylistsQueryKey(args: InferRequestType<typeof client.playlists.$get>) {
  return ['playlists', '/playlists', args] as const
}

export function getPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >({
    queryKey: getPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlaylistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlaylistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlaylistsIdQueryKey(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
) {
  return ['playlists', '/playlists/:id', args] as const
}

export function getPlaylistsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsIdQueryKey>
  >({
    queryKey: getPlaylistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlaylistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlaylistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlaylistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlaylistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsQueryKey(args: InferRequestType<typeof client.shows.$get>) {
  return ['shows', '/shows', args] as const
}

export function getShowsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShowsQueryKey>
  >({
    queryKey: getShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdQueryKey(args: InferRequestType<(typeof client.shows)[':id']['$get']>) {
  return ['shows', '/shows/:id', args] as const
}

export function getShowsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.shows)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdQueryKey>
  >({
    queryKey: getShowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpinsQueryKey(args: InferRequestType<typeof client.spins.$get>) {
  return ['spins', '/spins', args] as const
}

export function getSpinsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpinsQueryKey>
  >({
    queryKey: getSpinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpinsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpinsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpinsMutationKey() {
  return ['spins', '/spins', 'POST'] as const
}

export function getPostSpinsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$post>>>>>,
    TError,
    InferRequestType<typeof client.spins.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpinsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spins.$post>) {
      return parseResponse(client.spins.$post(args, options))
    },
  })
}

export function usePostSpins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$post>>>>>,
        TError,
        InferRequestType<typeof client.spins.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpinsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpinsIdQueryKey(args: InferRequestType<(typeof client.spins)[':id']['$get']>) {
  return ['spins', '/spins/:id', args] as const
}

export function getSpinsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.spins)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpinsIdQueryKey>
  >({
    queryKey: getSpinsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spins[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpinsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpinsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpinsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpinsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpinsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpinsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
