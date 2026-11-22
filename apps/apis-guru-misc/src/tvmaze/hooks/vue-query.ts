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

export function getAuthKey() {
  return ['auth'] as const
}

export function getScrobbleKey() {
  return ['scrobble'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getPostAuthPollMutationKey() {
  return ['auth', '/auth/poll', 'POST'] as const
}

export function getPostAuthPollMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.poll.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.poll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPollMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.poll.$post>) {
      return parseResponse(client.auth.poll.$post(args, options))
    },
  })
}

export function usePostAuthPoll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.poll.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.poll.$post>,
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
  const mutationDefaults = getPostAuthPollMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthStartMutationKey() {
  return ['auth', '/auth/start', 'POST'] as const
}

export function getPostAuthStartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.start.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.start.$post>) {
      return parseResponse(client.auth.start.$post(args, options))
    },
  })
}

export function usePostAuthStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.start.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.start.$post>,
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
  const mutationDefaults = getPostAuthStartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthValidateQueryKey() {
  return ['auth', '/auth/validate'] as const
}

export function getAuthValidateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthValidateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.validate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
          >,
          ReturnType<typeof getAuthValidateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthValidateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.validate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScrobbleEpisodesMutationKey() {
  return ['scrobble', '/scrobble/episodes', 'POST'] as const
}

export function getPostScrobbleEpisodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.episodes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scrobble.episodes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrobbleEpisodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrobble.episodes.$post>) {
      return parseResponse(client.scrobble.episodes.$post(args, options))
    },
  })
}

export function usePostScrobbleEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.episodes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scrobble.episodes.$post>,
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
  const mutationDefaults = getPostScrobbleEpisodesMutationOptions<TError, TOnMutateResult>(
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

export function getPutScrobbleEpisodesEpisodeIdMutationKey() {
  return ['scrobble', '/scrobble/episodes/:episode_id', 'PUT'] as const
}

export function getPutScrobbleEpisodesEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrobble.episodes)[':episode_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrobble.episodes)[':episode_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScrobbleEpisodesEpisodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrobble.episodes)[':episode_id']['$put']>,
    ) {
      return parseResponse(client.scrobble.episodes[':episode_id'].$put(args, options))
    },
  })
}

export function usePutScrobbleEpisodesEpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scrobble.episodes)[':episode_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scrobble.episodes)[':episode_id']['$put']>,
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
  const mutationDefaults = getPutScrobbleEpisodesEpisodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostScrobbleShowsMutationKey() {
  return ['scrobble', '/scrobble/shows', 'POST'] as const
}

export function getPostScrobbleShowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.shows.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scrobble.shows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrobbleShowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrobble.shows.$post>) {
      return parseResponse(client.scrobble.shows.$post(args, options))
    },
  })
}

export function usePostScrobbleShows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.shows.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scrobble.shows.$post>,
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
  const mutationDefaults = getPostScrobbleShowsMutationOptions<TError, TOnMutateResult>(
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

export function getScrobbleShowsShowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>>,
) {
  return ['scrobble', '/scrobble/shows/:show_id', toValue(args)] as const
}

export function getScrobbleShowsShowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScrobbleShowsShowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scrobble.shows[':show_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScrobbleShowsShowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScrobbleShowsShowIdQueryKey>
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
          Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrobbleShowsShowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScrobbleShowsShowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scrobble.shows[':show_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.episodes.$get>>,
) {
  return ['user', '/user/episodes', toValue(args)] as const
}

export function getUserEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.episodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.episodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
          >,
          ReturnType<typeof getUserEpisodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserEpisodesEpisodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>>,
) {
  return ['user', '/user/episodes/:episode_id', toValue(args)] as const
}

export function getUserEpisodesEpisodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserEpisodesEpisodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.episodes[':episode_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserEpisodesEpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserEpisodesEpisodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserEpisodesEpisodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserEpisodesEpisodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.episodes[':episode_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserEpisodesEpisodeIdMutationKey() {
  return ['user', '/user/episodes/:episode_id', 'PUT'] as const
}

export function getPutUserEpisodesEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.episodes)[':episode_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserEpisodesEpisodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$put']>) {
      return parseResponse(client.user.episodes[':episode_id'].$put(args, options))
    },
  })
}

export function usePutUserEpisodesEpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.episodes)[':episode_id']['$put']>,
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
  const mutationDefaults = getPutUserEpisodesEpisodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserEpisodesEpisodeIdMutationKey() {
  return ['user', '/user/episodes/:episode_id', 'DELETE'] as const
}

export function getDeleteUserEpisodesEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.episodes)[':episode_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserEpisodesEpisodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$delete']>,
    ) {
      return parseResponse(client.user.episodes[':episode_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserEpisodesEpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.episodes)[':episode_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserEpisodesEpisodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserFollowsNetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.networks.$get>>,
) {
  return ['user', '/user/follows/networks', toValue(args)] as const
}

export function getUserFollowsNetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.networks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.networks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.networks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
            >
          >,
          ReturnType<typeof getUserFollowsNetworksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.networks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserFollowsNetworksNetworkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>
  >,
) {
  return ['user', '/user/follows/networks/:network_id', toValue(args)] as const
}

export function getUserFollowsNetworksNetworkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsNetworksNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.networks[':network_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsNetworksNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserFollowsNetworksNetworkIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsNetworksNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsNetworksNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.networks[':network_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserFollowsNetworksNetworkIdMutationKey() {
  return ['user', '/user/follows/networks/:network_id', 'PUT'] as const
}

export function getPutUserFollowsNetworksNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserFollowsNetworksNetworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$put']>,
    ) {
      return parseResponse(client.user.follows.networks[':network_id'].$put(args, options))
    },
  })
}

export function usePutUserFollowsNetworksNetworkId<
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
                Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.networks)[':network_id']['$put']>,
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
  const mutationDefaults = getPutUserFollowsNetworksNetworkIdMutationOptions<
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

export function getDeleteUserFollowsNetworksNetworkIdMutationKey() {
  return ['user', '/user/follows/networks/:network_id', 'DELETE'] as const
}

export function getDeleteUserFollowsNetworksNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserFollowsNetworksNetworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$delete']>,
    ) {
      return parseResponse(client.user.follows.networks[':network_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserFollowsNetworksNetworkId<
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
                Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.networks)[':network_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserFollowsNetworksNetworkIdMutationOptions<
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

export function getUserFollowsPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.people.$get>>,
) {
  return ['user', '/user/follows/people', toValue(args)] as const
}

export function getUserFollowsPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.people.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
            >
          >,
          ReturnType<typeof getUserFollowsPeopleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserFollowsPeoplePersonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>
  >,
) {
  return ['user', '/user/follows/people/:person_id', toValue(args)] as const
}

export function getUserFollowsPeoplePersonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsPeoplePersonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.people[':person_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsPeoplePersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserFollowsPeoplePersonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsPeoplePersonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsPeoplePersonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.people[':person_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserFollowsPeoplePersonIdMutationKey() {
  return ['user', '/user/follows/people/:person_id', 'PUT'] as const
}

export function getPutUserFollowsPeoplePersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserFollowsPeoplePersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$put']>,
    ) {
      return parseResponse(client.user.follows.people[':person_id'].$put(args, options))
    },
  })
}

export function usePutUserFollowsPeoplePersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.people)[':person_id']['$put']>,
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
  const mutationDefaults = getPutUserFollowsPeoplePersonIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserFollowsPeoplePersonIdMutationKey() {
  return ['user', '/user/follows/people/:person_id', 'DELETE'] as const
}

export function getDeleteUserFollowsPeoplePersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserFollowsPeoplePersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$delete']>,
    ) {
      return parseResponse(client.user.follows.people[':person_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserFollowsPeoplePersonId<
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
                Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.people)[':person_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserFollowsPeoplePersonIdMutationOptions<
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

export function getUserFollowsShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.shows.$get>>,
) {
  return ['user', '/user/follows/shows', toValue(args)] as const
}

export function getUserFollowsShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.shows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.shows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.shows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>
            >
          >,
          ReturnType<typeof getUserFollowsShowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserFollowsShowsShowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>>,
) {
  return ['user', '/user/follows/shows/:show_id', toValue(args)] as const
}

export function getUserFollowsShowsShowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsShowsShowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.shows[':show_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsShowsShowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserFollowsShowsShowIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsShowsShowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsShowsShowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.shows[':show_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserFollowsShowsShowIdMutationKey() {
  return ['user', '/user/follows/shows/:show_id', 'PUT'] as const
}

export function getPutUserFollowsShowsShowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.shows)[':show_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserFollowsShowsShowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$put']>,
    ) {
      return parseResponse(client.user.follows.shows[':show_id'].$put(args, options))
    },
  })
}

export function usePutUserFollowsShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.shows)[':show_id']['$put']>,
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
  const mutationDefaults = getPutUserFollowsShowsShowIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserFollowsShowsShowIdMutationKey() {
  return ['user', '/user/follows/shows/:show_id', 'DELETE'] as const
}

export function getDeleteUserFollowsShowsShowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.shows)[':show_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserFollowsShowsShowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$delete']>,
    ) {
      return parseResponse(client.user.follows.shows[':show_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserFollowsShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.shows)[':show_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserFollowsShowsShowIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserFollowsWebchannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.webchannels.$get>>,
) {
  return ['user', '/user/follows/webchannels', toValue(args)] as const
}

export function getUserFollowsWebchannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.webchannels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsWebchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.webchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsWebchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.follows.webchannels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
            >
          >,
          ReturnType<typeof getUserFollowsWebchannelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsWebchannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsWebchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.webchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserFollowsWebchannelsWebchannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>
  >,
) {
  return ['user', '/user/follows/webchannels/:webchannel_id', toValue(args)] as const
}

export function getUserFollowsWebchannelsWebchannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserFollowsWebchannelsWebchannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.follows.webchannels[':webchannel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserFollowsWebchannelsWebchannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>
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
                  ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserFollowsWebchannelsWebchannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsWebchannelsWebchannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserFollowsWebchannelsWebchannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.follows.webchannels[':webchannel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserFollowsWebchannelsWebchannelIdMutationKey() {
  return ['user', '/user/follows/webchannels/:webchannel_id', 'PUT'] as const
}

export function getPutUserFollowsWebchannelsWebchannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserFollowsWebchannelsWebchannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>,
    ) {
      return parseResponse(client.user.follows.webchannels[':webchannel_id'].$put(args, options))
    },
  })
}

export function usePutUserFollowsWebchannelsWebchannelId<
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
                Awaited<
                  ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>,
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
  const mutationDefaults = getPutUserFollowsWebchannelsWebchannelIdMutationOptions<
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

export function getDeleteUserFollowsWebchannelsWebchannelIdMutationKey() {
  return ['user', '/user/follows/webchannels/:webchannel_id', 'DELETE'] as const
}

export function getDeleteUserFollowsWebchannelsWebchannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserFollowsWebchannelsWebchannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>,
    ) {
      return parseResponse(client.user.follows.webchannels[':webchannel_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserFollowsWebchannelsWebchannelId<
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
                Awaited<
                  ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserFollowsWebchannelsWebchannelIdMutationOptions<
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

export function getUserTagsQueryKey() {
  return ['user', '/user/tags'] as const
}

export function getUserTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>
          >,
          ReturnType<typeof getUserTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserTagsMutationKey() {
  return ['user', '/user/tags', 'POST'] as const
}

export function getPostUserTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.tags.$post>) {
      return parseResponse(client.user.tags.$post(args, options))
    },
  })
}

export function usePostUserTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.tags.$post>,
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
  const mutationDefaults = getPostUserTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserTagsTagIdMutationKey() {
  return ['user', '/user/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteUserTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user.tags)[':tag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserTagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user.tags)[':tag_id']['$delete']>) {
      return parseResponse(client.user.tags[':tag_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.tags)[':tag_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserTagsTagIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUserTagsTagIdMutationKey() {
  return ['user', '/user/tags/:tag_id', 'PATCH'] as const
}

export function getPatchUserTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user.tags)[':tag_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserTagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user.tags)[':tag_id']['$patch']>) {
      return parseResponse(client.user.tags[':tag_id'].$patch(args, options))
    },
  })
}

export function usePatchUserTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.tags)[':tag_id']['$patch']>,
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
  const mutationDefaults = getPatchUserTagsTagIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserTagsTagIdShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>,
) {
  return ['user', '/user/tags/:tag_id/shows', toValue(args)] as const
}

export function getUserTagsTagIdShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserTagsTagIdShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.tags[':tag_id'].shows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserTagsTagIdShows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserTagsTagIdShowsQueryKey>
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
          Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserTagsTagIdShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserTagsTagIdShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.tags[':tag_id'].shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserTagsTagIdShowsShowIdMutationKey() {
  return ['user', '/user/tags/:tag_id/shows/:show_id', 'PUT'] as const
}

export function getPutUserTagsTagIdShowsShowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserTagsTagIdShowsShowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>,
    ) {
      return parseResponse(client.user.tags[':tag_id'].shows[':show_id'].$put(args, options))
    },
  })
}

export function usePutUserTagsTagIdShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>,
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
  const mutationDefaults = getPutUserTagsTagIdShowsShowIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserTagsTagIdShowsShowIdMutationKey() {
  return ['user', '/user/tags/:tag_id/shows/:show_id', 'DELETE'] as const
}

export function getDeleteUserTagsTagIdShowsShowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserTagsTagIdShowsShowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>,
    ) {
      return parseResponse(client.user.tags[':tag_id'].shows[':show_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserTagsTagIdShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserTagsTagIdShowsShowIdMutationOptions<
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

export function getUserVotesEpisodesQueryKey() {
  return ['user', '/user/votes/episodes'] as const
}

export function getUserVotesEpisodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserVotesEpisodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.votes.episodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserVotesEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>
            >
          >,
          ReturnType<typeof getUserVotesEpisodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserVotesEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserVotesEpisodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.votes.episodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserVotesEpisodesEpisodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>
  >,
) {
  return ['user', '/user/votes/episodes/:episode_id', toValue(args)] as const
}

export function getUserVotesEpisodesEpisodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserVotesEpisodesEpisodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.votes.episodes[':episode_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserVotesEpisodesEpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserVotesEpisodesEpisodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserVotesEpisodesEpisodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserVotesEpisodesEpisodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.votes.episodes[':episode_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserVotesEpisodesEpisodeIdMutationKey() {
  return ['user', '/user/votes/episodes/:episode_id', 'PUT'] as const
}

export function getPutUserVotesEpisodesEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserVotesEpisodesEpisodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$put']>,
    ) {
      return parseResponse(client.user.votes.episodes[':episode_id'].$put(args, options))
    },
  })
}

export function usePutUserVotesEpisodesEpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$put']>,
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
  const mutationDefaults = getPutUserVotesEpisodesEpisodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserVotesEpisodesEpisodeIdMutationKey() {
  return ['user', '/user/votes/episodes/:episode_id', 'DELETE'] as const
}

export function getDeleteUserVotesEpisodesEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserVotesEpisodesEpisodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>,
    ) {
      return parseResponse(client.user.votes.episodes[':episode_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserVotesEpisodesEpisodeId<
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
                Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserVotesEpisodesEpisodeIdMutationOptions<
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

export function getUserVotesShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.votes.shows.$get>>,
) {
  return ['user', '/user/votes/shows', toValue(args)] as const
}

export function getUserVotesShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.votes.shows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserVotesShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.votes.shows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserVotesShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.votes.shows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>
            >
          >,
          ReturnType<typeof getUserVotesShowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserVotesShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserVotesShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.votes.shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserVotesShowsShowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>>,
) {
  return ['user', '/user/votes/shows/:show_id', toValue(args)] as const
}

export function getUserVotesShowsShowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserVotesShowsShowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.votes.shows[':show_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserVotesShowsShowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserVotesShowsShowIdQueryKey>
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
          Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserVotesShowsShowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserVotesShowsShowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.votes.shows[':show_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserVotesShowsShowIdMutationKey() {
  return ['user', '/user/votes/shows/:show_id', 'PUT'] as const
}

export function getPutUserVotesShowsShowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.votes.shows)[':show_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserVotesShowsShowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$put']>) {
      return parseResponse(client.user.votes.shows[':show_id'].$put(args, options))
    },
  })
}

export function usePutUserVotesShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.votes.shows)[':show_id']['$put']>,
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
  const mutationDefaults = getPutUserVotesShowsShowIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserVotesShowsShowIdMutationKey() {
  return ['user', '/user/votes/shows/:show_id', 'DELETE'] as const
}

export function getDeleteUserVotesShowsShowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.votes.shows)[':show_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserVotesShowsShowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$delete']>,
    ) {
      return parseResponse(client.user.votes.shows[':show_id'].$delete(args, options))
    },
  })
}

export function useDeleteUserVotesShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.votes.shows)[':show_id']['$delete']>,
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
  const mutationDefaults = getDeleteUserVotesShowsShowIdMutationOptions<TError, TOnMutateResult>(
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
