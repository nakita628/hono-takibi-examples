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

export function getPersonasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.personas.$get>>,
) {
  return ['personas', '/personas', toValue(args)] as const
}

export function getPersonasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.personas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.personas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePersonas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.personas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>
          >,
          ReturnType<typeof getPersonasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.personas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPersonasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.personas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPersonasIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.personas)[':id']['$get']>>,
) {
  return ['personas', '/personas/:id', toValue(args)] as const
}

export function getPersonasIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.personas)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.personas[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonasId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.personas)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPersonasIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.personas)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPersonasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.personas[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
) {
  return ['playlists', '/playlists', toValue(args)] as const
}

export function getPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          ReturnType<typeof getPlaylistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':id']['$get']>>,
) {
  return ['playlists', '/playlists/:id', toValue(args)] as const
}

export function getPlaylistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPlaylistsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.$get>>,
) {
  return ['shows', '/shows', toValue(args)] as const
}

export function getShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
          ReturnType<typeof getShowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
) {
  return ['shows', '/shows/:id', toValue(args)] as const
}

export function getShowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getShowsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spins.$get>>,
) {
  return ['spins', '/spins', toValue(args)] as const
}

export function getSpinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
          ReturnType<typeof getSpinsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spins.$post>>>>>,
          TError,
          InferRequestType<typeof client.spins.$post>,
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

export function getSpinsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spins)[':id']['$get']>>,
) {
  return ['spins', '/spins/:id', toValue(args)] as const
}

export function getSpinsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spins)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpinsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spins[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpinsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spins)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSpinsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spins)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpinsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpinsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spins[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
