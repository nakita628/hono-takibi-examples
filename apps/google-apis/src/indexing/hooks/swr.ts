import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV3UrlNotificationsMetadataKey(
  args: InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
) {
  return ['v3', '/v3/urlNotifications/metadata', args] as const
}

export function useGetV3UrlNotificationsMetadata<TError = unknown>(
  args: InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
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
        ? getGetV3UrlNotificationsMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.urlNotifications.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3UrlNotificationsMetadata<TError = unknown>(
  args: InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
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
        ? getGetV3UrlNotificationsMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.urlNotifications.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3UrlNotificationsPublishKey() {
  return ['v3', '/v3/urlNotifications:publish', 'POST'] as const
}

export function usePostV3UrlNotificationsPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['urlNotifications:publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['urlNotifications:publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3UrlNotificationsPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)['urlNotifications:publish']['$post']> },
      ) => parseResponse(client.v3['urlNotifications:publish'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
