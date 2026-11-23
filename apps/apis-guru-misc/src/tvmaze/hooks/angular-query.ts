import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostAuthPoll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.poll.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.poll.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthPollMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAuthStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.start.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthStartMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAuthValidateQueryKey() {
  return ['auth', '/auth/validate'] as const
}

export function getAuthValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthValidateQueryKey>
  >({
    queryKey: getAuthValidateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.validate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthValidateQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostScrobbleEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.episodes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.scrobble.episodes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrobbleEpisodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutScrobbleEpisodesEpisodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutScrobbleEpisodesEpisodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostScrobbleShows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.shows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.scrobble.shows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrobbleShowsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getScrobbleShowsShowIdQueryKey(
  args: InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
) {
  return ['scrobble', '/scrobble/shows/:show_id', args] as const
}

export function getScrobbleShowsShowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getScrobbleShowsShowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrobble.shows[':show_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectScrobbleShowsShowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScrobbleShowsShowIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserEpisodesQueryKey(args: InferRequestType<typeof client.user.episodes.$get>) {
  return ['user', '/user/episodes', args] as const
}

export function getUserEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.episodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserEpisodesQueryKey>
  >({
    queryKey: getUserEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.episodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserEpisodesEpisodeIdQueryKey(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
) {
  return ['user', '/user/episodes/:episode_id', args] as const
}

export function getUserEpisodesEpisodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserEpisodesEpisodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.episodes[':episode_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserEpisodesEpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserEpisodesEpisodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserEpisodesEpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserEpisodesEpisodeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserEpisodesEpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserEpisodesEpisodeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserFollowsNetworksQueryKey(
  args: InferRequestType<typeof client.user.follows.networks.$get>,
) {
  return ['user', '/user/follows/networks', args] as const
}

export function getUserFollowsNetworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.follows.networks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsNetworksQueryKey>
  >({
    queryKey: getUserFollowsNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.networks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserFollowsNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.follows.networks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserFollowsNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserFollowsNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserFollowsNetworksNetworkIdQueryKey(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
) {
  return ['user', '/user/follows/networks/:network_id', args] as const
}

export function getUserFollowsNetworksNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserFollowsNetworksNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.networks[':network_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserFollowsNetworksNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserFollowsNetworksNetworkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserFollowsNetworksNetworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserFollowsNetworksNetworkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserFollowsNetworksNetworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserFollowsNetworksNetworkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserFollowsPeopleQueryKey(
  args: InferRequestType<typeof client.user.follows.people.$get>,
) {
  return ['user', '/user/follows/people', args] as const
}

export function getUserFollowsPeopleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.follows.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsPeopleQueryKey>
  >({
    queryKey: getUserFollowsPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserFollowsPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.follows.people.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserFollowsPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserFollowsPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserFollowsPeoplePersonIdQueryKey(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
) {
  return ['user', '/user/follows/people/:person_id', args] as const
}

export function getUserFollowsPeoplePersonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserFollowsPeoplePersonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.people[':person_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserFollowsPeoplePersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserFollowsPeoplePersonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserFollowsPeoplePersonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserFollowsPeoplePersonIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserFollowsPeoplePersonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserFollowsPeoplePersonIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserFollowsShowsQueryKey(
  args: InferRequestType<typeof client.user.follows.shows.$get>,
) {
  return ['user', '/user/follows/shows', args] as const
}

export function getUserFollowsShowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.follows.shows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsShowsQueryKey>
  >({
    queryKey: getUserFollowsShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserFollowsShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.follows.shows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserFollowsShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserFollowsShowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserFollowsShowsShowIdQueryKey(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
) {
  return ['user', '/user/follows/shows/:show_id', args] as const
}

export function getUserFollowsShowsShowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserFollowsShowsShowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.shows[':show_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserFollowsShowsShowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserFollowsShowsShowIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserFollowsShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserFollowsShowsShowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserFollowsShowsShowId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserFollowsShowsShowIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserFollowsWebchannelsQueryKey(
  args: InferRequestType<typeof client.user.follows.webchannels.$get>,
) {
  return ['user', '/user/follows/webchannels', args] as const
}

export function getUserFollowsWebchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.follows.webchannels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFollowsWebchannelsQueryKey>
  >({
    queryKey: getUserFollowsWebchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.webchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserFollowsWebchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.follows.webchannels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserFollowsWebchannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserFollowsWebchannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserFollowsWebchannelsWebchannelIdQueryKey(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
) {
  return ['user', '/user/follows/webchannels/:webchannel_id', args] as const
}

export function getUserFollowsWebchannelsWebchannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserFollowsWebchannelsWebchannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.follows.webchannels[':webchannel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserFollowsWebchannelsWebchannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getUserFollowsWebchannelsWebchannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserFollowsWebchannelsWebchannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserFollowsWebchannelsWebchannelId<
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
                ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserFollowsWebchannelsWebchannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserFollowsWebchannelsWebchannelId<
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
                ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserFollowsWebchannelsWebchannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserTagsQueryKey() {
  return ['user', '/user/tags'] as const
}

export function getUserTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserTagsQueryKey>
  >({
    queryKey: getUserTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUserTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.user.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserTagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUserTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserTagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserTagsTagIdShowsQueryKey(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
) {
  return ['user', '/user/tags/:tag_id/shows', args] as const
}

export function getUserTagsTagIdShowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserTagsTagIdShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.tags[':tag_id'].shows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserTagsTagIdShows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserTagsTagIdShowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUserTagsTagIdShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserTagsTagIdShowsShowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserTagsTagIdShowsShowId<
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
                ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserTagsTagIdShowsShowIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserVotesEpisodesQueryKey() {
  return ['user', '/user/votes/episodes'] as const
}

export function getUserVotesEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserVotesEpisodesQueryKey>
  >({
    queryKey: getUserVotesEpisodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.votes.episodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserVotesEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserVotesEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserVotesEpisodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUserVotesEpisodesEpisodeIdQueryKey(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
) {
  return ['user', '/user/votes/episodes/:episode_id', args] as const
}

export function getUserVotesEpisodesEpisodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserVotesEpisodesEpisodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.votes.episodes[':episode_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserVotesEpisodesEpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserVotesEpisodesEpisodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserVotesEpisodesEpisodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserVotesEpisodesEpisodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserVotesEpisodesEpisodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserVotesEpisodesEpisodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserVotesShowsQueryKey(
  args: InferRequestType<typeof client.user.votes.shows.$get>,
) {
  return ['user', '/user/votes/shows', args] as const
}

export function getUserVotesShowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.votes.shows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserVotesShowsQueryKey>
  >({
    queryKey: getUserVotesShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.votes.shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserVotesShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.votes.shows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserVotesShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserVotesShowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserVotesShowsShowIdQueryKey(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
) {
  return ['user', '/user/votes/shows/:show_id', args] as const
}

export function getUserVotesShowsShowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserVotesShowsShowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.votes.shows[':show_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserVotesShowsShowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserVotesShowsShowIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUserVotesShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserVotesShowsShowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUserVotesShowsShowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserVotesShowsShowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
