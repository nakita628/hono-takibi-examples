import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getGetV4EncodedFullHashesEncodedRequestKey(
  args: InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
) {
  return ['v4', '/v4/encodedFullHashes/:encodedRequest', args] as const
}

export function useGetV4EncodedFullHashesEncodedRequest<TError = unknown>(
  args: InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
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
        ? getGetV4EncodedFullHashesEncodedRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.encodedFullHashes[':encodedRequest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4EncodedFullHashesEncodedRequest<TError = unknown>(
  args: InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
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
        ? getGetV4EncodedFullHashesEncodedRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.encodedFullHashes[':encodedRequest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4EncodedUpdatesEncodedRequestKey(
  args: InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
) {
  return ['v4', '/v4/encodedUpdates/:encodedRequest', args] as const
}

export function useGetV4EncodedUpdatesEncodedRequest<TError = unknown>(
  args: InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
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
        ? getGetV4EncodedUpdatesEncodedRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.encodedUpdates[':encodedRequest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4EncodedUpdatesEncodedRequest<TError = unknown>(
  args: InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
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
        ? getGetV4EncodedUpdatesEncodedRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.encodedUpdates[':encodedRequest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4FullHashesFindKey() {
  return ['v4', '/v4/fullHashes:find', 'POST'] as const
}

export function usePostV4FullHashesFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['fullHashes:find']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)['fullHashes:find']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4FullHashesFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)['fullHashes:find']['$post']> },
      ) => parseResponse(client.v4['fullHashes:find'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4ThreatHitsKey() {
  return ['v4', '/v4/threatHits', 'POST'] as const
}

export function usePostV4ThreatHits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatHits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.threatHits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ThreatHitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.threatHits.$post> }) =>
        parseResponse(client.v4.threatHits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4ThreatListUpdatesFetchKey() {
  return ['v4', '/v4/threatListUpdates:fetch', 'POST'] as const
}

export function usePostV4ThreatListUpdatesFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['threatListUpdates:fetch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)['threatListUpdates:fetch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ThreatListUpdatesFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)['threatListUpdates:fetch']['$post']> },
      ) => parseResponse(client.v4['threatListUpdates:fetch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ThreatListsKey(args: InferRequestType<typeof client.v4.threatLists.$get>) {
  return ['v4', '/v4/threatLists', args] as const
}

export function useGetV4ThreatLists<TError = unknown>(
  args: InferRequestType<typeof client.v4.threatLists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4ThreatListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.threatLists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ThreatLists<TError = unknown>(
  args: InferRequestType<typeof client.v4.threatLists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4ThreatListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.threatLists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ThreatMatchesFindKey() {
  return ['v4', '/v4/threatMatches:find', 'POST'] as const
}

export function usePostV4ThreatMatchesFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['threatMatches:find']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)['threatMatches:find']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ThreatMatchesFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)['threatMatches:find']['$post']> },
      ) => parseResponse(client.v4['threatMatches:find'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
