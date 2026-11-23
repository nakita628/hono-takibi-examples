import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchGetChannelKey() {
  return ['BatchGetChannel'] as const
}

export function getBatchGetStreamKeyKey() {
  return ['BatchGetStreamKey'] as const
}

export function getCreateChannelKey() {
  return ['CreateChannel'] as const
}

export function getCreateRecordingConfigurationKey() {
  return ['CreateRecordingConfiguration'] as const
}

export function getCreateStreamKeyKey() {
  return ['CreateStreamKey'] as const
}

export function getDeleteChannelKey() {
  return ['DeleteChannel'] as const
}

export function getDeletePlaybackKeyPairKey() {
  return ['DeletePlaybackKeyPair'] as const
}

export function getDeleteRecordingConfigurationKey() {
  return ['DeleteRecordingConfiguration'] as const
}

export function getDeleteStreamKeyKey() {
  return ['DeleteStreamKey'] as const
}

export function getGetChannelKey() {
  return ['GetChannel'] as const
}

export function getGetPlaybackKeyPairKey() {
  return ['GetPlaybackKeyPair'] as const
}

export function getGetRecordingConfigurationKey() {
  return ['GetRecordingConfiguration'] as const
}

export function getGetStreamKey() {
  return ['GetStream'] as const
}

export function getGetStreamKeyKey() {
  return ['GetStreamKey'] as const
}

export function getGetStreamSessionKey() {
  return ['GetStreamSession'] as const
}

export function getImportPlaybackKeyPairKey() {
  return ['ImportPlaybackKeyPair'] as const
}

export function getListChannelsKey() {
  return ['ListChannels'] as const
}

export function getListPlaybackKeyPairsKey() {
  return ['ListPlaybackKeyPairs'] as const
}

export function getListRecordingConfigurationsKey() {
  return ['ListRecordingConfigurations'] as const
}

export function getListStreamKeysKey() {
  return ['ListStreamKeys'] as const
}

export function getListStreamSessionsKey() {
  return ['ListStreamSessions'] as const
}

export function getListStreamsKey() {
  return ['ListStreams'] as const
}

export function getPutMetadataKey() {
  return ['PutMetadata'] as const
}

export function getStopStreamKey() {
  return ['StopStream'] as const
}

export function getUpdateChannelKey() {
  return ['UpdateChannel'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostBatchGetChannelKey() {
  return ['BatchGetChannel', '/BatchGetChannel', 'POST'] as const
}

export function usePostBatchGetChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetChannel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchGetChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchGetChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BatchGetChannel.$post> }) =>
        parseResponse(client.BatchGetChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchGetStreamKeyKey() {
  return ['BatchGetStreamKey', '/BatchGetStreamKey', 'POST'] as const
}

export function usePostBatchGetStreamKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetStreamKey.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchGetStreamKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchGetStreamKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BatchGetStreamKey.$post> }) =>
        parseResponse(client.BatchGetStreamKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateChannelKey() {
  return ['CreateChannel', '/CreateChannel', 'POST'] as const
}

export function usePostCreateChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateChannel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateChannel.$post> }) =>
        parseResponse(client.CreateChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateRecordingConfigurationKey() {
  return ['CreateRecordingConfiguration', '/CreateRecordingConfiguration', 'POST'] as const
}

export function usePostCreateRecordingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateRecordingConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateRecordingConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateRecordingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateRecordingConfiguration.$post> },
      ) => parseResponse(client.CreateRecordingConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateStreamKeyKey() {
  return ['CreateStreamKey', '/CreateStreamKey', 'POST'] as const
}

export function usePostCreateStreamKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateStreamKey.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateStreamKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateStreamKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateStreamKey.$post> }) =>
        parseResponse(client.CreateStreamKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteChannelKey() {
  return ['DeleteChannel', '/DeleteChannel', 'POST'] as const
}

export function usePostDeleteChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteChannel.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteChannel.$post> }) =>
        parseResponse(client.DeleteChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeletePlaybackKeyPairKey() {
  return ['DeletePlaybackKeyPair', '/DeletePlaybackKeyPair', 'POST'] as const
}

export function usePostDeletePlaybackKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeletePlaybackKeyPair.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeletePlaybackKeyPair.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeletePlaybackKeyPairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeletePlaybackKeyPair.$post> },
      ) => parseResponse(client.DeletePlaybackKeyPair.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteRecordingConfigurationKey() {
  return ['DeleteRecordingConfiguration', '/DeleteRecordingConfiguration', 'POST'] as const
}

export function usePostDeleteRecordingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteRecordingConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteRecordingConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteRecordingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteRecordingConfiguration.$post> },
      ) => parseResponse(client.DeleteRecordingConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteStreamKeyKey() {
  return ['DeleteStreamKey', '/DeleteStreamKey', 'POST'] as const
}

export function usePostDeleteStreamKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteStreamKey.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteStreamKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteStreamKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteStreamKey.$post> }) =>
        parseResponse(client.DeleteStreamKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetChannelKey() {
  return ['GetChannel', '/GetChannel', 'POST'] as const
}

export function usePostGetChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetChannel.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.GetChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetChannel.$post> }) =>
        parseResponse(client.GetChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetPlaybackKeyPairKey() {
  return ['GetPlaybackKeyPair', '/GetPlaybackKeyPair', 'POST'] as const
}

export function usePostGetPlaybackKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetPlaybackKeyPair.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetPlaybackKeyPair.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetPlaybackKeyPairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetPlaybackKeyPair.$post> }) =>
        parseResponse(client.GetPlaybackKeyPair.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetRecordingConfigurationKey() {
  return ['GetRecordingConfiguration', '/GetRecordingConfiguration', 'POST'] as const
}

export function usePostGetRecordingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetRecordingConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetRecordingConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetRecordingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetRecordingConfiguration.$post> },
      ) => parseResponse(client.GetRecordingConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetStreamKey() {
  return ['GetStream', '/GetStream', 'POST'] as const
}

export function usePostGetStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStream.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.GetStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetStream.$post> }) =>
        parseResponse(client.GetStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetStreamKeyKey() {
  return ['GetStreamKey', '/GetStreamKey', 'POST'] as const
}

export function usePostGetStreamKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStreamKey.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetStreamKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetStreamKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetStreamKey.$post> }) =>
        parseResponse(client.GetStreamKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetStreamSessionKey() {
  return ['GetStreamSession', '/GetStreamSession', 'POST'] as const
}

export function usePostGetStreamSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStreamSession.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetStreamSession.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetStreamSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetStreamSession.$post> }) =>
        parseResponse(client.GetStreamSession.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportPlaybackKeyPairKey() {
  return ['ImportPlaybackKeyPair', '/ImportPlaybackKeyPair', 'POST'] as const
}

export function usePostImportPlaybackKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ImportPlaybackKeyPair.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ImportPlaybackKeyPair.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportPlaybackKeyPairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ImportPlaybackKeyPair.$post> },
      ) => parseResponse(client.ImportPlaybackKeyPair.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListChannelsKey() {
  return ['ListChannels', '/ListChannels', 'POST'] as const
}

export function usePostListChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListChannels.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListChannels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListChannels.$post> }) =>
        parseResponse(client.ListChannels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListPlaybackKeyPairsKey() {
  return ['ListPlaybackKeyPairs', '/ListPlaybackKeyPairs', 'POST'] as const
}

export function usePostListPlaybackKeyPairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListPlaybackKeyPairs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListPlaybackKeyPairs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListPlaybackKeyPairsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListPlaybackKeyPairs.$post> },
      ) => parseResponse(client.ListPlaybackKeyPairs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListRecordingConfigurationsKey() {
  return ['ListRecordingConfigurations', '/ListRecordingConfigurations', 'POST'] as const
}

export function usePostListRecordingConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListRecordingConfigurations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListRecordingConfigurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListRecordingConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListRecordingConfigurations.$post> },
      ) => parseResponse(client.ListRecordingConfigurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListStreamKeysKey() {
  return ['ListStreamKeys', '/ListStreamKeys', 'POST'] as const
}

export function usePostListStreamKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreamKeys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListStreamKeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListStreamKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListStreamKeys.$post> }) =>
        parseResponse(client.ListStreamKeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListStreamSessionsKey() {
  return ['ListStreamSessions', '/ListStreamSessions', 'POST'] as const
}

export function usePostListStreamSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreamSessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListStreamSessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListStreamSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListStreamSessions.$post> }) =>
        parseResponse(client.ListStreamSessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListStreamsKey() {
  return ['ListStreams', '/ListStreams', 'POST'] as const
}

export function usePostListStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListStreams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListStreams.$post> }) =>
        parseResponse(client.ListStreams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutMetadataKey() {
  return ['PutMetadata', '/PutMetadata', 'POST'] as const
}

export function usePostPutMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutMetadata.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.PutMetadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutMetadata.$post> }) =>
        parseResponse(client.PutMetadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStopStreamKey() {
  return ['StopStream', '/StopStream', 'POST'] as const
}

export function usePostStopStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopStream.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.StopStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStopStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StopStream.$post> }) =>
        parseResponse(client.StopStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateChannelKey() {
  return ['UpdateChannel', '/UpdateChannel', 'POST'] as const
}

export function usePostUpdateChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateChannel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateChannel.$post> }) =>
        parseResponse(client.UpdateChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
