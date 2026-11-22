import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getPostBatchGetChannelMutationKey() {
  return ['BatchGetChannel', '/BatchGetChannel', 'POST'] as const
}

export function getPostBatchGetChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetChannel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BatchGetChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchGetChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchGetChannel.$post>) {
      return parseResponse(client.BatchGetChannel.$post(args, options))
    },
  })
}

export function createPostBatchGetChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetChannel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.BatchGetChannel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchGetChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBatchGetStreamKeyMutationKey() {
  return ['BatchGetStreamKey', '/BatchGetStreamKey', 'POST'] as const
}

export function getPostBatchGetStreamKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetStreamKey.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BatchGetStreamKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchGetStreamKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchGetStreamKey.$post>) {
      return parseResponse(client.BatchGetStreamKey.$post(args, options))
    },
  })
}

export function createPostBatchGetStreamKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetStreamKey.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.BatchGetStreamKey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchGetStreamKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreateChannelMutationKey() {
  return ['CreateChannel', '/CreateChannel', 'POST'] as const
}

export function getPostCreateChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateChannel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateChannel.$post>) {
      return parseResponse(client.CreateChannel.$post(args, options))
    },
  })
}

export function createPostCreateChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateChannel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateChannel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreateRecordingConfigurationMutationKey() {
  return ['CreateRecordingConfiguration', '/CreateRecordingConfiguration', 'POST'] as const
}

export function getPostCreateRecordingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateRecordingConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CreateRecordingConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateRecordingConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateRecordingConfiguration.$post>) {
      return parseResponse(client.CreateRecordingConfiguration.$post(args, options))
    },
  })
}

export function createPostCreateRecordingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.CreateRecordingConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.CreateRecordingConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateRecordingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreateStreamKeyMutationKey() {
  return ['CreateStreamKey', '/CreateStreamKey', 'POST'] as const
}

export function getPostCreateStreamKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateStreamKey.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateStreamKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateStreamKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateStreamKey.$post>) {
      return parseResponse(client.CreateStreamKey.$post(args, options))
    },
  })
}

export function createPostCreateStreamKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateStreamKey.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateStreamKey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateStreamKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteChannelMutationKey() {
  return ['DeleteChannel', '/DeleteChannel', 'POST'] as const
}

export function getPostDeleteChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteChannel.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteChannel.$post>) {
      return parseResponse(client.DeleteChannel.$post(args, options))
    },
  })
}

export function createPostDeleteChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteChannel.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteChannel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeletePlaybackKeyPairMutationKey() {
  return ['DeletePlaybackKeyPair', '/DeletePlaybackKeyPair', 'POST'] as const
}

export function getPostDeletePlaybackKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeletePlaybackKeyPair.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeletePlaybackKeyPair.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeletePlaybackKeyPairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeletePlaybackKeyPair.$post>) {
      return parseResponse(client.DeletePlaybackKeyPair.$post(args, options))
    },
  })
}

export function createPostDeletePlaybackKeyPair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DeletePlaybackKeyPair.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DeletePlaybackKeyPair.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeletePlaybackKeyPairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteRecordingConfigurationMutationKey() {
  return ['DeleteRecordingConfiguration', '/DeleteRecordingConfiguration', 'POST'] as const
}

export function getPostDeleteRecordingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteRecordingConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeleteRecordingConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteRecordingConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteRecordingConfiguration.$post>) {
      return parseResponse(client.DeleteRecordingConfiguration.$post(args, options))
    },
  })
}

export function createPostDeleteRecordingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.DeleteRecordingConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.DeleteRecordingConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteRecordingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteStreamKeyMutationKey() {
  return ['DeleteStreamKey', '/DeleteStreamKey', 'POST'] as const
}

export function getPostDeleteStreamKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteStreamKey.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteStreamKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteStreamKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteStreamKey.$post>) {
      return parseResponse(client.DeleteStreamKey.$post(args, options))
    },
  })
}

export function createPostDeleteStreamKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteStreamKey.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteStreamKey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteStreamKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetChannelMutationKey() {
  return ['GetChannel', '/GetChannel', 'POST'] as const
}

export function getPostGetChannelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetChannel.$post>>>>>,
    TError,
    InferRequestType<typeof client.GetChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetChannel.$post>) {
      return parseResponse(client.GetChannel.$post(args, options))
    },
  })
}

export function createPostGetChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetChannel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetChannel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetPlaybackKeyPairMutationKey() {
  return ['GetPlaybackKeyPair', '/GetPlaybackKeyPair', 'POST'] as const
}

export function getPostGetPlaybackKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetPlaybackKeyPair.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetPlaybackKeyPair.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetPlaybackKeyPairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetPlaybackKeyPair.$post>) {
      return parseResponse(client.GetPlaybackKeyPair.$post(args, options))
    },
  })
}

export function createPostGetPlaybackKeyPair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetPlaybackKeyPair.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetPlaybackKeyPair.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetPlaybackKeyPairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetRecordingConfigurationMutationKey() {
  return ['GetRecordingConfiguration', '/GetRecordingConfiguration', 'POST'] as const
}

export function getPostGetRecordingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetRecordingConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GetRecordingConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetRecordingConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetRecordingConfiguration.$post>) {
      return parseResponse(client.GetRecordingConfiguration.$post(args, options))
    },
  })
}

export function createPostGetRecordingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetRecordingConfiguration.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetRecordingConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetRecordingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetStreamMutationKey() {
  return ['GetStream', '/GetStream', 'POST'] as const
}

export function getPostGetStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStream.$post>>>>>,
    TError,
    InferRequestType<typeof client.GetStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetStream.$post>) {
      return parseResponse(client.GetStream.$post(args, options))
    },
  })
}

export function createPostGetStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStream.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetStream.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetStreamMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetStreamKeyMutationKey() {
  return ['GetStreamKey', '/GetStreamKey', 'POST'] as const
}

export function getPostGetStreamKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStreamKey.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetStreamKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetStreamKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetStreamKey.$post>) {
      return parseResponse(client.GetStreamKey.$post(args, options))
    },
  })
}

export function createPostGetStreamKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStreamKey.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetStreamKey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetStreamKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetStreamSessionMutationKey() {
  return ['GetStreamSession', '/GetStreamSession', 'POST'] as const
}

export function getPostGetStreamSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetStreamSession.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetStreamSession.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetStreamSessionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetStreamSession.$post>) {
      return parseResponse(client.GetStreamSession.$post(args, options))
    },
  })
}

export function createPostGetStreamSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetStreamSession.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetStreamSession.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetStreamSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImportPlaybackKeyPairMutationKey() {
  return ['ImportPlaybackKeyPair', '/ImportPlaybackKeyPair', 'POST'] as const
}

export function getPostImportPlaybackKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ImportPlaybackKeyPair.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ImportPlaybackKeyPair.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportPlaybackKeyPairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ImportPlaybackKeyPair.$post>) {
      return parseResponse(client.ImportPlaybackKeyPair.$post(args, options))
    },
  })
}

export function createPostImportPlaybackKeyPair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ImportPlaybackKeyPair.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ImportPlaybackKeyPair.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImportPlaybackKeyPairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListChannelsMutationKey() {
  return ['ListChannels', '/ListChannels', 'POST'] as const
}

export function getPostListChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListChannels.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListChannels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListChannels.$post>) {
      return parseResponse(client.ListChannels.$post(args, options))
    },
  })
}

export function createPostListChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListChannels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListChannels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListChannelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListPlaybackKeyPairsMutationKey() {
  return ['ListPlaybackKeyPairs', '/ListPlaybackKeyPairs', 'POST'] as const
}

export function getPostListPlaybackKeyPairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListPlaybackKeyPairs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListPlaybackKeyPairs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListPlaybackKeyPairsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListPlaybackKeyPairs.$post>) {
      return parseResponse(client.ListPlaybackKeyPairs.$post(args, options))
    },
  })
}

export function createPostListPlaybackKeyPairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListPlaybackKeyPairs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListPlaybackKeyPairs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListPlaybackKeyPairsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListRecordingConfigurationsMutationKey() {
  return ['ListRecordingConfigurations', '/ListRecordingConfigurations', 'POST'] as const
}

export function getPostListRecordingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListRecordingConfigurations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListRecordingConfigurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListRecordingConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListRecordingConfigurations.$post>) {
      return parseResponse(client.ListRecordingConfigurations.$post(args, options))
    },
  })
}

export function createPostListRecordingConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListRecordingConfigurations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListRecordingConfigurations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListRecordingConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListStreamKeysMutationKey() {
  return ['ListStreamKeys', '/ListStreamKeys', 'POST'] as const
}

export function getPostListStreamKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreamKeys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListStreamKeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListStreamKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListStreamKeys.$post>) {
      return parseResponse(client.ListStreamKeys.$post(args, options))
    },
  })
}

export function createPostListStreamKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreamKeys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListStreamKeys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListStreamKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListStreamSessionsMutationKey() {
  return ['ListStreamSessions', '/ListStreamSessions', 'POST'] as const
}

export function getPostListStreamSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreamSessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListStreamSessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListStreamSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListStreamSessions.$post>) {
      return parseResponse(client.ListStreamSessions.$post(args, options))
    },
  })
}

export function createPostListStreamSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListStreamSessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListStreamSessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListStreamSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListStreamsMutationKey() {
  return ['ListStreams', '/ListStreams', 'POST'] as const
}

export function getPostListStreamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreams.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListStreams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListStreams.$post>) {
      return parseResponse(client.ListStreams.$post(args, options))
    },
  })
}

export function createPostListStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListStreams.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListStreams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListStreamsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPutMetadataMutationKey() {
  return ['PutMetadata', '/PutMetadata', 'POST'] as const
}

export function getPostPutMetadataMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutMetadata.$post>>>>>,
    TError,
    InferRequestType<typeof client.PutMetadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutMetadata.$post>) {
      return parseResponse(client.PutMetadata.$post(args, options))
    },
  })
}

export function createPostPutMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutMetadata.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.PutMetadata.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPutMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostStopStreamMutationKey() {
  return ['StopStream', '/StopStream', 'POST'] as const
}

export function getPostStopStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopStream.$post>>>>>,
    TError,
    InferRequestType<typeof client.StopStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStopStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StopStream.$post>) {
      return parseResponse(client.StopStream.$post(args, options))
    },
  })
}

export function createPostStopStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopStream.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StopStream.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStopStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUpdateChannelMutationKey() {
  return ['UpdateChannel', '/UpdateChannel', 'POST'] as const
}

export function getPostUpdateChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateChannel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateChannel.$post>) {
      return parseResponse(client.UpdateChannel.$post(args, options))
    },
  })
}

export function createPostUpdateChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateChannel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UpdateChannel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
