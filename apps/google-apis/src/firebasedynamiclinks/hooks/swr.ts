import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1InstallAttributionKey() {
  return ['v1', '/v1/installAttribution', 'POST'] as const
}

export function usePostV1InstallAttribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.installAttribution.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.installAttribution.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallAttributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.installAttribution.$post> },
      ) => parseResponse(client.v1.installAttribution.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ManagedShortLinksCreateKey() {
  return ['v1', '/v1/managedShortLinks:create', 'POST'] as const
}

export function usePostV1ManagedShortLinksCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['managedShortLinks:create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['managedShortLinks:create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ManagedShortLinksCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['managedShortLinks:create']['$post']> },
      ) => parseResponse(client.v1['managedShortLinks:create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ReopenAttributionKey() {
  return ['v1', '/v1/reopenAttribution', 'POST'] as const
}

export function usePostV1ReopenAttribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reopenAttribution.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.reopenAttribution.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReopenAttributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.reopenAttribution.$post> },
      ) => parseResponse(client.v1.reopenAttribution.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ShortLinksKey() {
  return ['v1', '/v1/shortLinks', 'POST'] as const
}

export function usePostV1ShortLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shortLinks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.shortLinks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShortLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.shortLinks.$post> }) =>
        parseResponse(client.v1.shortLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DynamicLinkLinkStatsKey(
  args: InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>,
) {
  return ['v1', '/v1/:dynamicLink/linkStats', args] as const
}

export function useGetV1DynamicLinkLinkStats<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
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
        ? getGetV1DynamicLinkLinkStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':dynamicLink'].linkStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DynamicLinkLinkStats<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
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
        ? getGetV1DynamicLinkLinkStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':dynamicLink'].linkStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
