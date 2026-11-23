import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAuthPollKey() {
  return ['auth', '/auth/poll', 'POST'] as const
}

export function usePostAuthPoll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.poll.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.poll.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthPollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.poll.$post> }) =>
        parseResponse(client.auth.poll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthStartKey() {
  return ['auth', '/auth/start', 'POST'] as const
}

export function usePostAuthStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.start.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.start.$post> }) =>
        parseResponse(client.auth.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthValidateKey() {
  return ['auth', '/auth/validate'] as const
}

export function useGetAuthValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScrobbleEpisodesKey() {
  return ['scrobble', '/scrobble/episodes', 'POST'] as const
}

export function usePostScrobbleEpisodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.episodes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scrobble.episodes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrobbleEpisodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrobble.episodes.$post> }) =>
        parseResponse(client.scrobble.episodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutScrobbleEpisodesEpisodeIdKey() {
  return ['scrobble', '/scrobble/episodes/:episode_id', 'PUT'] as const
}

export function usePutScrobbleEpisodesEpisodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrobble.episodes)[':episode_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrobble.episodes)[':episode_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScrobbleEpisodesEpisodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.scrobble.episodes)[':episode_id']['$put']> },
      ) => parseResponse(client.scrobble.episodes[':episode_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScrobbleShowsKey() {
  return ['scrobble', '/scrobble/shows', 'POST'] as const
}

export function usePostScrobbleShows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.shows.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scrobble.shows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrobbleShowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrobble.shows.$post> }) =>
        parseResponse(client.scrobble.shows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScrobbleShowsShowIdKey(
  args: InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
) {
  return ['scrobble', '/scrobble/shows/:show_id', args] as const
}

export function useGetScrobbleShowsShowId<TError = unknown>(
  args: InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
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
        ? getGetScrobbleShowsShowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrobble.shows[':show_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrobbleShowsShowId<TError = unknown>(
  args: InferRequestType<(typeof client.scrobble.shows)[':show_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
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
        ? getGetScrobbleShowsShowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrobble.shows)[':show_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrobble.shows[':show_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserEpisodesKey(args: InferRequestType<typeof client.user.episodes.$get>) {
  return ['user', '/user/episodes', args] as const
}

export function useGetUserEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.user.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEpisodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.user.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEpisodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.episodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserEpisodesEpisodeIdKey(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
) {
  return ['user', '/user/episodes/:episode_id', args] as const
}

export function useGetUserEpisodesEpisodeId<TError = unknown>(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
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
        ? getGetUserEpisodesEpisodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.episodes[':episode_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserEpisodesEpisodeId<TError = unknown>(
  args: InferRequestType<(typeof client.user.episodes)[':episode_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
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
        ? getGetUserEpisodesEpisodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.episodes[':episode_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserEpisodesEpisodeIdKey() {
  return ['user', '/user/episodes/:episode_id', 'PUT'] as const
}

export function usePutUserEpisodesEpisodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.episodes)[':episode_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserEpisodesEpisodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.episodes)[':episode_id']['$put']> },
      ) => parseResponse(client.user.episodes[':episode_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserEpisodesEpisodeIdKey() {
  return ['user', '/user/episodes/:episode_id', 'DELETE'] as const
}

export function useDeleteUserEpisodesEpisodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.episodes)[':episode_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.episodes)[':episode_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserEpisodesEpisodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.episodes)[':episode_id']['$delete']> },
      ) => parseResponse(client.user.episodes[':episode_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserFollowsNetworksKey(
  args: InferRequestType<typeof client.user.follows.networks.$get>,
) {
  return ['user', '/user/follows/networks', args] as const
}

export function useGetUserFollowsNetworks<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
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
        ? getGetUserFollowsNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsNetworks<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
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
        ? getGetUserFollowsNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserFollowsNetworksNetworkIdKey(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
) {
  return ['user', '/user/follows/networks/:network_id', args] as const
}

export function useGetUserFollowsNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
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
        ? getGetUserFollowsNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.follows.networks[':network_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
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
        ? getGetUserFollowsNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.follows.networks[':network_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserFollowsNetworksNetworkIdKey() {
  return ['user', '/user/follows/networks/:network_id', 'PUT'] as const
}

export function usePutUserFollowsNetworksNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserFollowsNetworksNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$put']> },
      ) => parseResponse(client.user.follows.networks[':network_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserFollowsNetworksNetworkIdKey() {
  return ['user', '/user/follows/networks/:network_id', 'DELETE'] as const
}

export function useDeleteUserFollowsNetworksNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.networks)[':network_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.networks)[':network_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserFollowsNetworksNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user.follows.networks)[':network_id']['$delete']>
        },
      ) => parseResponse(client.user.follows.networks[':network_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserFollowsPeopleKey(
  args: InferRequestType<typeof client.user.follows.people.$get>,
) {
  return ['user', '/user/follows/people', args] as const
}

export function useGetUserFollowsPeople<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.people.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
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
        ? getGetUserFollowsPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsPeople<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.people.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
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
        ? getGetUserFollowsPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.people.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserFollowsPeoplePersonIdKey(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
) {
  return ['user', '/user/follows/people/:person_id', args] as const
}

export function useGetUserFollowsPeoplePersonId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
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
        ? getGetUserFollowsPeoplePersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.people[':person_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsPeoplePersonId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.people)[':person_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
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
        ? getGetUserFollowsPeoplePersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.people[':person_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserFollowsPeoplePersonIdKey() {
  return ['user', '/user/follows/people/:person_id', 'PUT'] as const
}

export function usePutUserFollowsPeoplePersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserFollowsPeoplePersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.follows.people)[':person_id']['$put']> },
      ) => parseResponse(client.user.follows.people[':person_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserFollowsPeoplePersonIdKey() {
  return ['user', '/user/follows/people/:person_id', 'DELETE'] as const
}

export function useDeleteUserFollowsPeoplePersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.people)[':person_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.people)[':person_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserFollowsPeoplePersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.follows.people)[':person_id']['$delete']> },
      ) => parseResponse(client.user.follows.people[':person_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserFollowsShowsKey(
  args: InferRequestType<typeof client.user.follows.shows.$get>,
) {
  return ['user', '/user/follows/shows', args] as const
}

export function useGetUserFollowsShows<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
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
        ? getGetUserFollowsShowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsShows<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
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
        ? getGetUserFollowsShowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.shows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserFollowsShowsShowIdKey(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
) {
  return ['user', '/user/follows/shows/:show_id', args] as const
}

export function useGetUserFollowsShowsShowId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
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
        ? getGetUserFollowsShowsShowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.shows[':show_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsShowsShowId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
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
        ? getGetUserFollowsShowsShowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.shows[':show_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserFollowsShowsShowIdKey() {
  return ['user', '/user/follows/shows/:show_id', 'PUT'] as const
}

export function usePutUserFollowsShowsShowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.shows)[':show_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserFollowsShowsShowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$put']> },
      ) => parseResponse(client.user.follows.shows[':show_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserFollowsShowsShowIdKey() {
  return ['user', '/user/follows/shows/:show_id', 'DELETE'] as const
}

export function useDeleteUserFollowsShowsShowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.shows)[':show_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.shows)[':show_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserFollowsShowsShowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.follows.shows)[':show_id']['$delete']> },
      ) => parseResponse(client.user.follows.shows[':show_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserFollowsWebchannelsKey(
  args: InferRequestType<typeof client.user.follows.webchannels.$get>,
) {
  return ['user', '/user/follows/webchannels', args] as const
}

export function useGetUserFollowsWebchannels<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.webchannels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
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
        ? getGetUserFollowsWebchannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.webchannels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsWebchannels<TError = unknown>(
  args: InferRequestType<typeof client.user.follows.webchannels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
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
        ? getGetUserFollowsWebchannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.follows.webchannels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.follows.webchannels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserFollowsWebchannelsWebchannelIdKey(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
) {
  return ['user', '/user/follows/webchannels/:webchannel_id', args] as const
}

export function useGetUserFollowsWebchannelsWebchannelId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
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
        ? getGetUserFollowsWebchannelsWebchannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.follows.webchannels[':webchannel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFollowsWebchannelsWebchannelId<TError = unknown>(
  args: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
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
        ? getGetUserFollowsWebchannelsWebchannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.follows.webchannels[':webchannel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserFollowsWebchannelsWebchannelIdKey() {
  return ['user', '/user/follows/webchannels/:webchannel_id', 'PUT'] as const
}

export function usePutUserFollowsWebchannelsWebchannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserFollowsWebchannelsWebchannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$put']>
        },
      ) =>
        parseResponse(client.user.follows.webchannels[':webchannel_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserFollowsWebchannelsWebchannelIdKey() {
  return ['user', '/user/follows/webchannels/:webchannel_id', 'DELETE'] as const
}

export function useDeleteUserFollowsWebchannelsWebchannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.follows.webchannels)[':webchannel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserFollowsWebchannelsWebchannelIdKey()
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
            (typeof client.user.follows.webchannels)[':webchannel_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user.follows.webchannels[':webchannel_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserTagsKey() {
  return ['user', '/user/tags'] as const
}

export function useGetUserTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserTagsKey() {
  return ['user', '/user/tags', 'POST'] as const
}

export function usePostUserTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.tags.$post> }) =>
        parseResponse(client.user.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserTagsTagIdKey() {
  return ['user', '/user/tags/:tag_id', 'DELETE'] as const
}

export function useDeleteUserTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.tags)[':tag_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.tags)[':tag_id']['$delete']> },
      ) => parseResponse(client.user.tags[':tag_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserTagsTagIdKey() {
  return ['user', '/user/tags/:tag_id', 'PATCH'] as const
}

export function usePatchUserTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.tags)[':tag_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.tags)[':tag_id']['$patch']> },
      ) => parseResponse(client.user.tags[':tag_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserTagsTagIdShowsKey(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
) {
  return ['user', '/user/tags/:tag_id/shows', args] as const
}

export function useGetUserTagsTagIdShows<TError = unknown>(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
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
        ? getGetUserTagsTagIdShowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.tags[':tag_id'].shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserTagsTagIdShows<TError = unknown>(
  args: InferRequestType<(typeof client.user.tags)[':tag_id']['shows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
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
        ? getGetUserTagsTagIdShowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.tags[':tag_id'].shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserTagsTagIdShowsShowIdKey() {
  return ['user', '/user/tags/:tag_id/shows/:show_id', 'PUT'] as const
}

export function usePutUserTagsTagIdShowsShowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserTagsTagIdShowsShowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$put']>
        },
      ) => parseResponse(client.user.tags[':tag_id'].shows[':show_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserTagsTagIdShowsShowIdKey() {
  return ['user', '/user/tags/:tag_id/shows/:show_id', 'DELETE'] as const
}

export function useDeleteUserTagsTagIdShowsShowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserTagsTagIdShowsShowIdKey()
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
            (typeof client.user.tags)[':tag_id']['shows'][':show_id']['$delete']
          >
        },
      ) => parseResponse(client.user.tags[':tag_id'].shows[':show_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserVotesEpisodesKey() {
  return ['user', '/user/votes/episodes'] as const
}

export function useGetUserVotesEpisodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserVotesEpisodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.votes.episodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserVotesEpisodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserVotesEpisodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.episodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.votes.episodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserVotesEpisodesEpisodeIdKey(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
) {
  return ['user', '/user/votes/episodes/:episode_id', args] as const
}

export function useGetUserVotesEpisodesEpisodeId<TError = unknown>(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
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
        ? getGetUserVotesEpisodesEpisodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.votes.episodes[':episode_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserVotesEpisodesEpisodeId<TError = unknown>(
  args: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
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
        ? getGetUserVotesEpisodesEpisodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user.votes.episodes[':episode_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserVotesEpisodesEpisodeIdKey() {
  return ['user', '/user/votes/episodes/:episode_id', 'PUT'] as const
}

export function usePutUserVotesEpisodesEpisodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserVotesEpisodesEpisodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$put']> },
      ) => parseResponse(client.user.votes.episodes[':episode_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserVotesEpisodesEpisodeIdKey() {
  return ['user', '/user/votes/episodes/:episode_id', 'DELETE'] as const
}

export function useDeleteUserVotesEpisodesEpisodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserVotesEpisodesEpisodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.votes.episodes)[':episode_id']['$delete']> },
      ) => parseResponse(client.user.votes.episodes[':episode_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserVotesShowsKey(
  args: InferRequestType<typeof client.user.votes.shows.$get>,
) {
  return ['user', '/user/votes/shows', args] as const
}

export function useGetUserVotesShows<TError = unknown>(
  args: InferRequestType<typeof client.user.votes.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserVotesShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.votes.shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserVotesShows<TError = unknown>(
  args: InferRequestType<typeof client.user.votes.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserVotesShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.votes.shows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.votes.shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserVotesShowsShowIdKey(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
) {
  return ['user', '/user/votes/shows/:show_id', args] as const
}

export function useGetUserVotesShowsShowId<TError = unknown>(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
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
        ? getGetUserVotesShowsShowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.votes.shows[':show_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserVotesShowsShowId<TError = unknown>(
  args: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
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
        ? getGetUserVotesShowsShowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.votes.shows[':show_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserVotesShowsShowIdKey() {
  return ['user', '/user/votes/shows/:show_id', 'PUT'] as const
}

export function usePutUserVotesShowsShowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.votes.shows)[':show_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserVotesShowsShowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$put']> },
      ) => parseResponse(client.user.votes.shows[':show_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserVotesShowsShowIdKey() {
  return ['user', '/user/votes/shows/:show_id', 'DELETE'] as const
}

export function useDeleteUserVotesShowsShowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.votes.shows)[':show_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.votes.shows)[':show_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserVotesShowsShowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.votes.shows)[':show_id']['$delete']> },
      ) => parseResponse(client.user.votes.shows[':show_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
