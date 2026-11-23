import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getGetApiOembedKey(args: InferRequestType<typeof client.api.oembed.$get>) {
  return ['api', '/api/oembed', args] as const
}

export function useGetApiOembed<TError = unknown>(
  args: InferRequestType<typeof client.api.oembed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOembedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oembed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOembed<TError = unknown>(
  args: InferRequestType<typeof client.api.oembed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOembedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oembed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProofsKey(args: InferRequestType<typeof client.api.proofs.$get>) {
  return ['api', '/api/proofs', args] as const
}

export function useGetApiProofs<TError = unknown>(
  args: InferRequestType<typeof client.api.proofs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiProofsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.proofs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProofs<TError = unknown>(
  args: InferRequestType<typeof client.api.proofs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiProofsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.proofs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsKey() {
  return ['api', '/api/v1/accounts', 'POST'] as const
}

export function usePostApiV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.accounts.$post> }) =>
        parseResponse(client.api.v1.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsRelationshipsKey(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
) {
  return ['api', '/api/v1/accounts/relationships', args] as const
}

export function useGetApiV1AccountsRelationships<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
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
        ? getGetApiV1AccountsRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts.relationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsRelationships<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
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
        ? getGetApiV1AccountsRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts.relationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsSearchKey(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
) {
  return ['api', '/api/v1/accounts/search', args] as const
}

export function useGetApiV1AccountsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
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
        ? getGetApiV1AccountsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
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
        ? getGetApiV1AccountsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AccountsUpdateCredentialsKey() {
  return ['api', '/api/v1/accounts/update_credentials', 'PATCH'] as const
}

export function usePatchApiV1AccountsUpdateCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.accounts.update_credentials.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.accounts.update_credentials.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsUpdateCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.accounts.update_credentials.$patch> },
      ) => parseResponse(client.api.v1.accounts.update_credentials.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsVerifyCredentialsKey() {
  return ['api', '/api/v1/accounts/verify_credentials'] as const
}

export function useGetApiV1AccountsVerifyCredentials<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
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
        ? getGetApiV1AccountsVerifyCredentialsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts.verify_credentials.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsVerifyCredentials<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
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
        ? getGetApiV1AccountsVerifyCredentialsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts.verify_credentials.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsIdKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id', args] as const
}

export function useGetApiV1AccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
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
        ? getGetApiV1AccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
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
        ? getGetApiV1AccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsIdBlockKey() {
  return ['api', '/api/v1/accounts/:id/block', 'POST'] as const
}

export function usePostApiV1AccountsIdBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['block']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsIdFeaturedTagsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/featured_tags', args] as const
}

export function useGetApiV1AccountsIdFeaturedTags<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
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
        ? getGetApiV1AccountsIdFeaturedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':id'].featured_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsIdFeaturedTags<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
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
        ? getGetApiV1AccountsIdFeaturedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':id'].featured_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsIdFollowKey() {
  return ['api', '/api/v1/accounts/:id/follow', 'POST'] as const
}

export function usePostApiV1AccountsIdFollow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdFollowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['follow']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].follow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsIdFollowersKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/followers', args] as const
}

export function useGetApiV1AccountsIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
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
        ? getGetApiV1AccountsIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
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
        ? getGetApiV1AccountsIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsIdFollowingKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/following', args] as const
}

export function useGetApiV1AccountsIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
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
        ? getGetApiV1AccountsIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
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
        ? getGetApiV1AccountsIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsIdIdentityProofsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/identity_proofs', args] as const
}

export function useGetApiV1AccountsIdIdentityProofs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
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
        ? getGetApiV1AccountsIdIdentityProofsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':id'].identity_proofs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsIdIdentityProofs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
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
        ? getGetApiV1AccountsIdIdentityProofsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':id'].identity_proofs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsIdListsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/lists', args] as const
}

export function useGetApiV1AccountsIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
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
        ? getGetApiV1AccountsIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
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
        ? getGetApiV1AccountsIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsIdMuteKey() {
  return ['api', '/api/v1/accounts/:id/mute', 'POST'] as const
}

export function usePostApiV1AccountsIdMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['mute']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].mute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsIdNoteKey() {
  return ['api', '/api/v1/accounts/:id/note', 'POST'] as const
}

export function usePostApiV1AccountsIdNote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['note']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['note']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdNoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['note']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].note.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsIdPinKey() {
  return ['api', '/api/v1/accounts/:id/pin', 'POST'] as const
}

export function usePostApiV1AccountsIdPin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['pin']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].pin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsIdStatusesKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/statuses', args] as const
}

export function useGetApiV1AccountsIdStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
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
        ? getGetApiV1AccountsIdStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsIdStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
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
        ? getGetApiV1AccountsIdStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':id'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsIdUnblockKey() {
  return ['api', '/api/v1/accounts/:id/unblock', 'POST'] as const
}

export function usePostApiV1AccountsIdUnblock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdUnblockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].unblock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsIdUnfollowKey() {
  return ['api', '/api/v1/accounts/:id/unfollow', 'POST'] as const
}

export function usePostApiV1AccountsIdUnfollow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdUnfollowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].unfollow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsIdUnmuteKey() {
  return ['api', '/api/v1/accounts/:id/unmute', 'POST'] as const
}

export function usePostApiV1AccountsIdUnmute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdUnmuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].unmute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsIdUnpinKey() {
  return ['api', '/api/v1/accounts/:id/unpin', 'POST'] as const
}

export function usePostApiV1AccountsIdUnpin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsIdUnpinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']> },
      ) => parseResponse(client.api.v1.accounts[':id'].unpin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AdminAccountsKey(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
) {
  return ['api', '/api/v1/admin/accounts', args] as const
}

export function useGetApiV1AdminAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
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
        ? getGetApiV1AdminAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AdminAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
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
        ? getGetApiV1AdminAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AdminAccountsIdKey(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
) {
  return ['api', '/api/v1/admin/accounts/:id', args] as const
}

export function useGetApiV1AdminAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
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
        ? getGetApiV1AdminAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AdminAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
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
        ? getGetApiV1AdminAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AdminAccountsIdActionKey() {
  return ['api', '/api/v1/admin/accounts/:id/action', 'POST'] as const
}

export function usePostApiV1AdminAccountsIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminAccountsIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.accounts[':id'].action.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminAccountsIdApproveKey() {
  return ['api', '/api/v1/admin/accounts/:id/approve', 'POST'] as const
}

export function usePostApiV1AdminAccountsIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminAccountsIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.accounts[':id'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminAccountsIdEnableKey() {
  return ['api', '/api/v1/admin/accounts/:id/enable', 'POST'] as const
}

export function usePostApiV1AdminAccountsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminAccountsIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.accounts[':id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminAccountsIdRejectKey() {
  return ['api', '/api/v1/admin/accounts/:id/reject', 'POST'] as const
}

export function usePostApiV1AdminAccountsIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminAccountsIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.accounts[':id'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminAccountsIdUnsilenceKey() {
  return ['api', '/api/v1/admin/accounts/:id/unsilence', 'POST'] as const
}

export function usePostApiV1AdminAccountsIdUnsilence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminAccountsIdUnsilenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.accounts[':id'].unsilence.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminAccountsIdUnsuspendKey() {
  return ['api', '/api/v1/admin/accounts/:id/unsuspend', 'POST'] as const
}

export function usePostApiV1AdminAccountsIdUnsuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminAccountsIdUnsuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.accounts[':id'].unsuspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AdminReportsKey(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
) {
  return ['api', '/api/v1/admin/reports', args] as const
}

export function useGetApiV1AdminReports<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
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
        ? getGetApiV1AdminReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AdminReports<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
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
        ? getGetApiV1AdminReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AdminReportsIdKey(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
) {
  return ['api', '/api/v1/admin/reports/:id', args] as const
}

export function useGetApiV1AdminReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
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
        ? getGetApiV1AdminReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AdminReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
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
        ? getGetApiV1AdminReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.admin.reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AdminReportsIdAssignToSelfKey() {
  return ['api', '/api/v1/admin/reports/:id/assign_to_self', 'POST'] as const
}

export function usePostApiV1AdminReportsIdAssignToSelf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminReportsIdAssignToSelfKey()
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
            (typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.admin.reports[':id'].assign_to_self.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminReportsIdReopenKey() {
  return ['api', '/api/v1/admin/reports/:id/reopen', 'POST'] as const
}

export function usePostApiV1AdminReportsIdReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminReportsIdReopenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.reports[':id'].reopen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminReportsIdResolveKey() {
  return ['api', '/api/v1/admin/reports/:id/resolve', 'POST'] as const
}

export function usePostApiV1AdminReportsIdResolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminReportsIdResolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.reports[':id'].resolve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AdminReportsIdUnassignKey() {
  return ['api', '/api/v1/admin/reports/:id/unassign', 'POST'] as const
}

export function usePostApiV1AdminReportsIdUnassign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AdminReportsIdUnassignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>
        },
      ) => parseResponse(client.api.v1.admin.reports[':id'].unassign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AnnouncementsKey(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
) {
  return ['api', '/api/v1/announcements', args] as const
}

export function useGetApiV1Announcements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
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
        ? getGetApiV1AnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Announcements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
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
        ? getGetApiV1AnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AnnouncementsIdDismissKey() {
  return ['api', '/api/v1/announcements/:id/dismiss', 'POST'] as const
}

export function usePostApiV1AnnouncementsIdDismiss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AnnouncementsIdDismissKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>
        },
      ) => parseResponse(client.api.v1.announcements[':id'].dismiss.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1AnnouncementsIdReactionsNameKey() {
  return ['api', '/api/v1/announcements/:id/reactions/:name', 'PUT'] as const
}

export function usePutApiV1AnnouncementsIdReactionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AnnouncementsIdReactionsNameKey()
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
            (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.announcements[':id'].reactions[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AnnouncementsIdReactionsNameKey() {
  return ['api', '/api/v1/announcements/:id/reactions/:name', 'DELETE'] as const
}

export function useDeleteApiV1AnnouncementsIdReactionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AnnouncementsIdReactionsNameKey()
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
            (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.announcements[':id'].reactions[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppsKey() {
  return ['api', '/api/v1/apps', 'POST'] as const
}

export function usePostApiV1Apps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.apps.$post> }) =>
        parseResponse(client.api.v1.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppsVerifyCredentialsKey() {
  return ['api', '/api/v1/apps/verify_credentials'] as const
}

export function useGetApiV1AppsVerifyCredentials<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
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
        ? getGetApiV1AppsVerifyCredentialsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.apps.verify_credentials.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppsVerifyCredentials<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
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
        ? getGetApiV1AppsVerifyCredentialsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.apps.verify_credentials.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BlocksKey(args: InferRequestType<typeof client.api.v1.blocks.$get>) {
  return ['api', '/api/v1/blocks', args] as const
}

export function useGetApiV1Blocks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1BlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Blocks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1BlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BookmarksKey(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
) {
  return ['api', '/api/v1/bookmarks', args] as const
}

export function useGetApiV1Bookmarks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1BookmarksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Bookmarks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1BookmarksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ConversationsKey(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
) {
  return ['api', '/api/v1/conversations', args] as const
}

export function useGetApiV1Conversations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
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
        ? getGetApiV1ConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Conversations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
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
        ? getGetApiV1ConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1ConversationsIdKey() {
  return ['api', '/api/v1/conversations/:id', 'DELETE'] as const
}

export function useDeleteApiV1ConversationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.conversations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.conversations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ConversationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.conversations)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.conversations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ConversationsIdReadKey() {
  return ['api', '/api/v1/conversations/:id/read', 'POST'] as const
}

export function usePostApiV1ConversationsIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.conversations)[':id']['read']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.conversations)[':id']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ConversationsIdReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.conversations)[':id']['read']['$post']> },
      ) => parseResponse(client.api.v1.conversations[':id'].read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CustomEmojisKey() {
  return ['api', '/api/v1/custom_emojis'] as const
}

export function useGetApiV1CustomEmojis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CustomEmojisKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.custom_emojis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomEmojis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CustomEmojisKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.custom_emojis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DirectoryKey(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
) {
  return ['api', '/api/v1/directory', args] as const
}

export function useGetApiV1Directory<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DirectoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.directory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Directory<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DirectoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.directory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DomainBlocksKey(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
) {
  return ['api', '/api/v1/domain_blocks', args] as const
}

export function useGetApiV1DomainBlocks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
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
        ? getGetApiV1DomainBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.domain_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DomainBlocks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
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
        ? getGetApiV1DomainBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.domain_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DomainBlocksKey() {
  return ['api', '/api/v1/domain_blocks', 'POST'] as const
}

export function usePostApiV1DomainBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.domain_blocks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DomainBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.domain_blocks.$post> },
      ) => parseResponse(client.api.v1.domain_blocks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1DomainBlocksKey() {
  return ['api', '/api/v1/domain_blocks', 'DELETE'] as const
}

export function useDeleteApiV1DomainBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.domain_blocks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1DomainBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.domain_blocks.$delete> },
      ) => parseResponse(client.api.v1.domain_blocks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EndorsementsKey(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
) {
  return ['api', '/api/v1/endorsements', args] as const
}

export function useGetApiV1Endorsements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
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
        ? getGetApiV1EndorsementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.endorsements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Endorsements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
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
        ? getGetApiV1EndorsementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.endorsements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1FavouritesKey(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
) {
  return ['api', '/api/v1/favourites', args] as const
}

export function useGetApiV1Favourites<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
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
        ? getGetApiV1FavouritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.favourites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Favourites<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
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
        ? getGetApiV1FavouritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.favourites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1FeaturedTagsKey() {
  return ['api', '/api/v1/featured_tags'] as const
}

export function useGetApiV1FeaturedTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FeaturedTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.featured_tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FeaturedTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FeaturedTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.featured_tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1FeaturedTagsKey() {
  return ['api', '/api/v1/featured_tags', 'POST'] as const
}

export function usePostApiV1FeaturedTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.featured_tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FeaturedTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.featured_tags.$post> },
      ) => parseResponse(client.api.v1.featured_tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FeaturedTagsSuggestionsKey() {
  return ['api', '/api/v1/featured_tags/suggestions'] as const
}

export function useGetApiV1FeaturedTagsSuggestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
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
        ? getGetApiV1FeaturedTagsSuggestionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.featured_tags.suggestions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FeaturedTagsSuggestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
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
        ? getGetApiV1FeaturedTagsSuggestionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.featured_tags.suggestions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1FeaturedTagsIdKey() {
  return ['api', '/api/v1/featured_tags/:id', 'DELETE'] as const
}

export function useDeleteApiV1FeaturedTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.featured_tags)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.featured_tags)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1FeaturedTagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.featured_tags)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.featured_tags[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FiltersKey() {
  return ['api', '/api/v1/filters'] as const
}

export function useGetApiV1Filters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FiltersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.filters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Filters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FiltersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.filters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1FiltersKey() {
  return ['api', '/api/v1/filters', 'POST'] as const
}

export function usePostApiV1Filters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.filters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.filters.$post> }) =>
        parseResponse(client.api.v1.filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FiltersIdKey(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
) {
  return ['api', '/api/v1/filters/:id', args] as const
}

export function useGetApiV1FiltersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1FiltersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.filters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FiltersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1FiltersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.filters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1FiltersIdKey() {
  return ['api', '/api/v1/filters/:id', 'PUT'] as const
}

export function usePutApiV1FiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.filters)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1FiltersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.filters)[':id']['$put']> },
      ) => parseResponse(client.api.v1.filters[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1FiltersIdKey() {
  return ['api', '/api/v1/filters/:id', 'DELETE'] as const
}

export function useDeleteApiV1FiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.filters)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1FiltersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.filters)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.filters[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FollowRequestsKey(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
) {
  return ['api', '/api/v1/follow_requests', args] as const
}

export function useGetApiV1FollowRequests<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
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
        ? getGetApiV1FollowRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.follow_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FollowRequests<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
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
        ? getGetApiV1FollowRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.follow_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1FollowRequestsIdAuthorizeKey() {
  return ['api', '/api/v1/follow_requests/:id/authorize', 'POST'] as const
}

export function usePostApiV1FollowRequestsIdAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FollowRequestsIdAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>
        },
      ) => parseResponse(client.api.v1.follow_requests[':id'].authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1FollowRequestsIdRejectKey() {
  return ['api', '/api/v1/follow_requests/:id/reject', 'POST'] as const
}

export function usePostApiV1FollowRequestsIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FollowRequestsIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>
        },
      ) => parseResponse(client.api.v1.follow_requests[':id'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InstanceKey() {
  return ['api', '/api/v1/instance'] as const
}

export function useGetApiV1Instance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1InstanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.instance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Instance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1InstanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.instance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1InstanceActivityKey() {
  return ['api', '/api/v1/instance/activity'] as const
}

export function useGetApiV1InstanceActivity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
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
        ? getGetApiV1InstanceActivityKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.instance.activity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InstanceActivity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
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
        ? getGetApiV1InstanceActivityKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.instance.activity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1InstancePeersKey() {
  return ['api', '/api/v1/instance/peers'] as const
}

export function useGetApiV1InstancePeers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1InstancePeersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.instance.peers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InstancePeers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1InstancePeersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.instance.peers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ListsKey() {
  return ['api', '/api/v1/lists'] as const
}

export function useGetApiV1Lists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Lists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ListsKey() {
  return ['api', '/api/v1/lists', 'PUT'] as const
}

export function usePutApiV1Lists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.lists.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.lists.$put> }) =>
        parseResponse(client.api.v1.lists.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ListsKey() {
  return ['api', '/api/v1/lists', 'POST'] as const
}

export function usePostApiV1Lists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.lists.$post> }) =>
        parseResponse(client.api.v1.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ListsKey() {
  return ['api', '/api/v1/lists', 'DELETE'] as const
}

export function useDeleteApiV1Lists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.lists.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ListsIdKey(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
) {
  return ['api', '/api/v1/lists/:id', args] as const
}

export function useGetApiV1ListsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1ListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ListsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1ListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ListsIdAccountsKey(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
) {
  return ['api', '/api/v1/lists/:id/accounts', args] as const
}

export function useGetApiV1ListsIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
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
        ? getGetApiV1ListsIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.lists[':id'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ListsIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
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
        ? getGetApiV1ListsIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.lists[':id'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ListsIdAccountsKey() {
  return ['api', '/api/v1/lists/:id/accounts', 'POST'] as const
}

export function usePostApiV1ListsIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ListsIdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$post']> },
      ) => parseResponse(client.api.v1.lists[':id'].accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ListsIdAccountsKey() {
  return ['api', '/api/v1/lists/:id/accounts', 'DELETE'] as const
}

export function useDeleteApiV1ListsIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ListsIdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']> },
      ) => parseResponse(client.api.v1.lists[':id'].accounts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MarkersKey(args: InferRequestType<typeof client.api.v1.markers.$get>) {
  return ['api', '/api/v1/markers', args] as const
}

export function useGetApiV1Markers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.markers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MarkersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.markers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Markers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.markers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MarkersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.markers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1MarkersKey() {
  return ['api', '/api/v1/markers', 'POST'] as const
}

export function usePostApiV1Markers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.markers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MarkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.markers.$post> }) =>
        parseResponse(client.api.v1.markers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1MediaKey() {
  return ['api', '/api/v1/media', 'POST'] as const
}

export function usePostApiV1Media<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.media.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.media.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.media.$post> }) =>
        parseResponse(client.api.v1.media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MediaIdKey(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
) {
  return ['api', '/api/v1/media/:id', args] as const
}

export function useGetApiV1MediaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1MediaIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.media[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MediaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1MediaIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.media[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1MediaIdKey() {
  return ['api', '/api/v1/media/:id', 'POST'] as const
}

export function usePostApiV1MediaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.media)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MediaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.media)[':id']['$post']> },
      ) => parseResponse(client.api.v1.media[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MutesKey(args: InferRequestType<typeof client.api.v1.mutes.$get>) {
  return ['api', '/api/v1/mutes', args] as const
}

export function useGetApiV1Mutes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.mutes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.mutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Mutes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.mutes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.mutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NotificationsKey(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
) {
  return ['api', '/api/v1/notifications', args] as const
}

export function useGetApiV1Notifications<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
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
        ? getGetApiV1NotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Notifications<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
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
        ? getGetApiV1NotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NotificationsClearKey() {
  return ['api', '/api/v1/notifications/clear', 'POST'] as const
}

export function usePostApiV1NotificationsClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.clear.$post>>>
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
  const swrKey = customKey ?? getPostApiV1NotificationsClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.notifications.clear.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NotificationsIdKey(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
) {
  return ['api', '/api/v1/notifications/:id', args] as const
}

export function useGetApiV1NotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
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
        ? getGetApiV1NotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
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
        ? getGetApiV1NotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NotificationsIdDismissKey() {
  return ['api', '/api/v1/notifications/:id/dismiss', 'POST'] as const
}

export function usePostApiV1NotificationsIdDismiss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NotificationsIdDismissKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>
        },
      ) => parseResponse(client.api.v1.notifications[':id'].dismiss.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PollsIdKey(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
) {
  return ['api', '/api/v1/polls/:id', args] as const
}

export function useGetApiV1PollsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1PollsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.polls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PollsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1PollsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.polls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PollsIdKey() {
  return ['api', '/api/v1/polls/:id', 'POST'] as const
}

export function usePostApiV1PollsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.polls)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PollsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.polls)[':id']['$post']> },
      ) => parseResponse(client.api.v1.polls[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PreferencesKey() {
  return ['api', '/api/v1/preferences'] as const
}

export function useGetApiV1Preferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Preferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PushSubscriptionKey() {
  return ['api', '/api/v1/push/subscription'] as const
}

export function useGetApiV1PushSubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
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
        ? getGetApiV1PushSubscriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.push.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PushSubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
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
        ? getGetApiV1PushSubscriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.push.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PushSubscriptionKey() {
  return ['api', '/api/v1/push/subscription', 'PUT'] as const
}

export function usePutApiV1PushSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.push.subscription.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PushSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.push.subscription.$put> },
      ) => parseResponse(client.api.v1.push.subscription.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PushSubscriptionKey() {
  return ['api', '/api/v1/push/subscription', 'POST'] as const
}

export function usePostApiV1PushSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.push.subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PushSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.push.subscription.$post> },
      ) => parseResponse(client.api.v1.push.subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PushSubscriptionKey() {
  return ['api', '/api/v1/push/subscription', 'DELETE'] as const
}

export function useDeleteApiV1PushSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$delete>>>
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
  const swrKey = customKey ?? getDeleteApiV1PushSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.push.subscription.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsKey() {
  return ['api', '/api/v1/reports', 'POST'] as const
}

export function usePostApiV1Reports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.reports.$post> }) =>
        parseResponse(client.api.v1.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ScheduledStatusesKey(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
) {
  return ['api', '/api/v1/scheduled_statuses', args] as const
}

export function useGetApiV1ScheduledStatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
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
        ? getGetApiV1ScheduledStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.scheduled_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ScheduledStatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
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
        ? getGetApiV1ScheduledStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.scheduled_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ScheduledStatusesIdKey(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
) {
  return ['api', '/api/v1/scheduled_statuses/:id', args] as const
}

export function useGetApiV1ScheduledStatusesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
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
        ? getGetApiV1ScheduledStatusesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.scheduled_statuses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ScheduledStatusesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
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
        ? getGetApiV1ScheduledStatusesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.scheduled_statuses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ScheduledStatusesIdKey() {
  return ['api', '/api/v1/scheduled_statuses/:id', 'PUT'] as const
}

export function usePutApiV1ScheduledStatusesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ScheduledStatusesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']> },
      ) => parseResponse(client.api.v1.scheduled_statuses[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ScheduledStatusesIdKey() {
  return ['api', '/api/v1/scheduled_statuses/:id', 'DELETE'] as const
}

export function useDeleteApiV1ScheduledStatusesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ScheduledStatusesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.scheduled_statuses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesKey() {
  return ['api', '/api/v1/statuses', 'POST'] as const
}

export function usePostApiV1Statuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statuses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.statuses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.statuses.$post> }) =>
        parseResponse(client.api.v1.statuses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1StatusesIdKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id', args] as const
}

export function useGetApiV1StatusesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
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
        ? getGetApiV1StatusesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statuses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1StatusesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
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
        ? getGetApiV1StatusesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statuses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1StatusesIdKey() {
  return ['api', '/api/v1/statuses/:id', 'DELETE'] as const
}

export function useDeleteApiV1StatusesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1StatusesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.statuses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdBookmarkKey() {
  return ['api', '/api/v1/statuses/:id/bookmark', 'POST'] as const
}

export function usePostApiV1StatusesIdBookmark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdBookmarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].bookmark.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1StatusesIdContextKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id/context', args] as const
}

export function useGetApiV1StatusesIdContext<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
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
        ? getGetApiV1StatusesIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statuses[':id'].context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1StatusesIdContext<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
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
        ? getGetApiV1StatusesIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statuses[':id'].context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1StatusesIdFavouriteKey() {
  return ['api', '/api/v1/statuses/:id/favourite', 'POST'] as const
}

export function usePostApiV1StatusesIdFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdFavouriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].favourite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1StatusesIdFavouritedByKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id/favourited_by', args] as const
}

export function useGetApiV1StatusesIdFavouritedBy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
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
        ? getGetApiV1StatusesIdFavouritedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.statuses[':id'].favourited_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1StatusesIdFavouritedBy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
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
        ? getGetApiV1StatusesIdFavouritedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.statuses[':id'].favourited_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1StatusesIdMuteKey() {
  return ['api', '/api/v1/statuses/:id/mute', 'POST'] as const
}

export function usePostApiV1StatusesIdMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['mute']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].mute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdPinKey() {
  return ['api', '/api/v1/statuses/:id/pin', 'POST'] as const
}

export function usePostApiV1StatusesIdPin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['pin']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].pin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdReblogKey() {
  return ['api', '/api/v1/statuses/:id/reblog', 'POST'] as const
}

export function usePostApiV1StatusesIdReblog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdReblogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].reblog.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1StatusesIdRebloggedByKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id/reblogged_by', args] as const
}

export function useGetApiV1StatusesIdRebloggedBy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
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
        ? getGetApiV1StatusesIdRebloggedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.statuses[':id'].reblogged_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1StatusesIdRebloggedBy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
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
        ? getGetApiV1StatusesIdRebloggedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.statuses[':id'].reblogged_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1StatusesIdUnbookmarkKey() {
  return ['api', '/api/v1/statuses/:id/unbookmark', 'POST'] as const
}

export function usePostApiV1StatusesIdUnbookmark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdUnbookmarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].unbookmark.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdUnfavouriteKey() {
  return ['api', '/api/v1/statuses/:id/unfavourite', 'POST'] as const
}

export function usePostApiV1StatusesIdUnfavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdUnfavouriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>
        },
      ) => parseResponse(client.api.v1.statuses[':id'].unfavourite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdUnmuteKey() {
  return ['api', '/api/v1/statuses/:id/unmute', 'POST'] as const
}

export function usePostApiV1StatusesIdUnmute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdUnmuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].unmute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdUnpinKey() {
  return ['api', '/api/v1/statuses/:id/unpin', 'POST'] as const
}

export function usePostApiV1StatusesIdUnpin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdUnpinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].unpin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StatusesIdUnreblogKey() {
  return ['api', '/api/v1/statuses/:id/unreblog', 'POST'] as const
}

export function usePostApiV1StatusesIdUnreblog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatusesIdUnreblogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']> },
      ) => parseResponse(client.api.v1.statuses[':id'].unreblog.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SuggestionsKey(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
) {
  return ['api', '/api/v1/suggestions', args] as const
}

export function useGetApiV1Suggestions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
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
        ? getGetApiV1SuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Suggestions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
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
        ? getGetApiV1SuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SuggestionsIdKey() {
  return ['api', '/api/v1/suggestions/:id', 'DELETE'] as const
}

export function useDeleteApiV1SuggestionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.suggestions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.suggestions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SuggestionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.suggestions)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.suggestions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TimelinesHomeKey(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
) {
  return ['api', '/api/v1/timelines/home', args] as const
}

export function useGetApiV1TimelinesHome<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
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
        ? getGetApiV1TimelinesHomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.home.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TimelinesHome<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
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
        ? getGetApiV1TimelinesHomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.home.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TimelinesListListIdKey(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
) {
  return ['api', '/api/v1/timelines/list/:list_id', args] as const
}

export function useGetApiV1TimelinesListListId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
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
        ? getGetApiV1TimelinesListListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.list[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TimelinesListListId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
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
        ? getGetApiV1TimelinesListListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.list[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TimelinesPublicKey(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
) {
  return ['api', '/api/v1/timelines/public', args] as const
}

export function useGetApiV1TimelinesPublic<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
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
        ? getGetApiV1TimelinesPublicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.public.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TimelinesPublic<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
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
        ? getGetApiV1TimelinesPublicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.public.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TimelinesTagHashtagKey(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
) {
  return ['api', '/api/v1/timelines/tag/:hashtag', args] as const
}

export function useGetApiV1TimelinesTagHashtag<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
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
        ? getGetApiV1TimelinesTagHashtagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.tag[':hashtag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TimelinesTagHashtag<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
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
        ? getGetApiV1TimelinesTagHashtagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.timelines.tag[':hashtag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TrendsKey(args: InferRequestType<typeof client.api.v1.trends.$get>) {
  return ['api', '/api/v1/trends', args] as const
}

export function useGetApiV1Trends<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.trends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TrendsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.trends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Trends<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.trends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TrendsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.trends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2SearchKey(args: InferRequestType<typeof client.api.v2.search.$get>) {
  return ['api', '/api/v2/search', args] as const
}

export function useGetApiV2Search<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2SearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Search<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2SearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthAuthorizeKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function useGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthRevokeKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function usePostOauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.revoke.$post> }) =>
        parseResponse(client.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
