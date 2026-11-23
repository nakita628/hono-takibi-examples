import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2AiAudioDescriptorsKey(
  args: InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
) {
  return ['v2', '/v2/ai/audio/descriptors', args] as const
}

export function useGetV2AiAudioDescriptors<TError = unknown>(
  args: InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
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
        ? getGetV2AiAudioDescriptorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.ai.audio.descriptors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AiAudioDescriptors<TError = unknown>(
  args: InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
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
        ? getGetV2AiAudioDescriptorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.ai.audio.descriptors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AiAudioInstrumentsKey(
  args: InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
) {
  return ['v2', '/v2/ai/audio/instruments', args] as const
}

export function useGetV2AiAudioInstruments<TError = unknown>(
  args: InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
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
        ? getGetV2AiAudioInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.ai.audio.instruments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AiAudioInstruments<TError = unknown>(
  args: InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
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
        ? getGetV2AiAudioInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.ai.audio.instruments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AiAudioRendersKey(
  args: InferRequestType<typeof client.v2.ai.audio.renders.$get>,
) {
  return ['v2', '/v2/ai/audio/renders', args] as const
}

export function useGetV2AiAudioRenders<TError = unknown>(
  args: InferRequestType<typeof client.v2.ai.audio.renders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
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
        ? getGetV2AiAudioRendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.ai.audio.renders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AiAudioRenders<TError = unknown>(
  args: InferRequestType<typeof client.v2.ai.audio.renders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
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
        ? getGetV2AiAudioRendersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.ai.audio.renders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AiAudioRendersKey() {
  return ['v2', '/v2/ai/audio/renders', 'POST'] as const
}

export function usePostV2AiAudioRenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.ai.audio.renders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AiAudioRendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.ai.audio.renders.$post> }) =>
        parseResponse(client.v2.ai.audio.renders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AudioKey(args: InferRequestType<typeof client.v2.audio.$get>) {
  return ['v2', '/v2/audio', args] as const
}

export function useGetV2Audio<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.audio.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Audio<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.audio.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2AudioCollectionsKey(
  args: InferRequestType<typeof client.v2.audio.collections.$get>,
) {
  return ['v2', '/v2/audio/collections', args] as const
}

export function useGetV2AudioCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
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
        ? getGetV2AudioCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
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
        ? getGetV2AudioCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AudioCollectionsKey() {
  return ['v2', '/v2/audio/collections', 'POST'] as const
}

export function usePostV2AudioCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.audio.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AudioCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.audio.collections.$post> },
      ) => parseResponse(client.v2.audio.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AudioCollectionsIdKey(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
) {
  return ['v2', '/v2/audio/collections/:id', args] as const
}

export function useGetV2AudioCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
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
        ? getGetV2AudioCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
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
        ? getGetV2AudioCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AudioCollectionsIdKey() {
  return ['v2', '/v2/audio/collections/:id', 'POST'] as const
}

export function usePostV2AudioCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AudioCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.audio.collections)[':id']['$post']> },
      ) => parseResponse(client.v2.audio.collections[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2AudioCollectionsIdKey() {
  return ['v2', '/v2/audio/collections/:id', 'DELETE'] as const
}

export function useDeleteV2AudioCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AudioCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.audio.collections)[':id']['$delete']> },
      ) => parseResponse(client.v2.audio.collections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AudioCollectionsIdItemsKey(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/audio/collections/:id/items', args] as const
}

export function useGetV2AudioCollectionsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
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
        ? getGetV2AudioCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.collections[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioCollectionsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
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
        ? getGetV2AudioCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.collections[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AudioCollectionsIdItemsKey() {
  return ['v2', '/v2/audio/collections/:id/items', 'POST'] as const
}

export function usePostV2AudioCollectionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AudioCollectionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$post']> },
      ) => parseResponse(client.v2.audio.collections[':id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2AudioCollectionsIdItemsKey() {
  return ['v2', '/v2/audio/collections/:id/items', 'DELETE'] as const
}

export function useDeleteV2AudioCollectionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AudioCollectionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>
        },
      ) => parseResponse(client.v2.audio.collections[':id'].items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AudioGenresKey(args: InferRequestType<typeof client.v2.audio.genres.$get>) {
  return ['v2', '/v2/audio/genres', args] as const
}

export function useGetV2AudioGenres<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioGenres<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AudioInstrumentsKey(
  args: InferRequestType<typeof client.v2.audio.instruments.$get>,
) {
  return ['v2', '/v2/audio/instruments', args] as const
}

export function useGetV2AudioInstruments<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.instruments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
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
        ? getGetV2AudioInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.instruments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioInstruments<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.instruments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
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
        ? getGetV2AudioInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.instruments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AudioLicensesKey(
  args: InferRequestType<typeof client.v2.audio.licenses.$get>,
) {
  return ['v2', '/v2/audio/licenses', args] as const
}

export function useGetV2AudioLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
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
        ? getGetV2AudioLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
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
        ? getGetV2AudioLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AudioLicensesKey() {
  return ['v2', '/v2/audio/licenses', 'POST'] as const
}

export function usePostV2AudioLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.audio.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AudioLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.audio.licenses.$post> }) =>
        parseResponse(client.v2.audio.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AudioLicensesIdDownloadsKey() {
  return ['v2', '/v2/audio/licenses/:id/downloads', 'POST'] as const
}

export function usePostV2AudioLicensesIdDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AudioLicensesIdDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>
        },
      ) => parseResponse(client.v2.audio.licenses[':id'].downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AudioMoodsKey(args: InferRequestType<typeof client.v2.audio.moods.$get>) {
  return ['v2', '/v2/audio/moods', args] as const
}

export function useGetV2AudioMoods<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.moods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioMoodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.moods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioMoods<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.moods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioMoodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.moods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AudioSearchKey(args: InferRequestType<typeof client.v2.audio.search.$get>) {
  return ['v2', '/v2/audio/search', args] as const
}

export function useGetV2AudioSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AudioIdKey(
  args: InferRequestType<(typeof client.v2.audio)[':id']['$get']>,
) {
  return ['v2', '/v2/audio/:id', args] as const
}

export function useGetV2AudioId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.audio)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2AudioIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.audio)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2AudioIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BulkSearchImagesKey() {
  return ['v2', '/v2/bulk_search/images', 'POST'] as const
}

export function usePostV2BulkSearchImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulk_search.images.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bulk_search.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BulkSearchImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bulk_search.images.$post> },
      ) => parseResponse(client.v2.bulk_search.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CatalogCollectionsKey(
  args: InferRequestType<typeof client.v2.catalog.collections.$get>,
) {
  return ['v2', '/v2/catalog/collections', args] as const
}

export function useGetV2CatalogCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.catalog.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
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
        ? getGetV2CatalogCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CatalogCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.catalog.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
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
        ? getGetV2CatalogCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CatalogCollectionsKey() {
  return ['v2', '/v2/catalog/collections', 'POST'] as const
}

export function usePostV2CatalogCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.catalog.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.catalog.collections.$post> },
      ) => parseResponse(client.v2.catalog.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CatalogCollectionsCollectionIdKey() {
  return ['v2', '/v2/catalog/collections/:collection_id', 'DELETE'] as const
}

export function useDeleteV2CatalogCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CatalogCollectionsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>
        },
      ) =>
        parseResponse(client.v2.catalog.collections[':collection_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CatalogCollectionsCollectionIdKey() {
  return ['v2', '/v2/catalog/collections/:collection_id', 'PATCH'] as const
}

export function usePatchV2CatalogCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CatalogCollectionsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>
        },
      ) =>
        parseResponse(client.v2.catalog.collections[':collection_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CatalogCollectionsCollectionIdItemsKey() {
  return ['v2', '/v2/catalog/collections/:collection_id/items', 'POST'] as const
}

export function usePostV2CatalogCollectionsCollectionIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CatalogCollectionsCollectionIdItemsKey()
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
            (typeof client.v2.catalog.collections)[':collection_id']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.catalog.collections[':collection_id'].items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CatalogCollectionsCollectionIdItemsKey() {
  return ['v2', '/v2/catalog/collections/:collection_id/items', 'DELETE'] as const
}

export function useDeleteV2CatalogCollectionsCollectionIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CatalogCollectionsCollectionIdItemsKey()
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
            (typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.catalog.collections[':collection_id'].items.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CatalogSearchKey(
  args: InferRequestType<typeof client.v2.catalog.search.$get>,
) {
  return ['v2', '/v2/catalog/search', args] as const
}

export function useGetV2CatalogSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.catalog.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
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
        ? getGetV2CatalogSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CatalogSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.catalog.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
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
        ? getGetV2CatalogSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.catalog.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ContributorsKey(
  args: InferRequestType<typeof client.v2.contributors.$get>,
) {
  return ['v2', '/v2/contributors', args] as const
}

export function useGetV2Contributors<TError = unknown>(
  args: InferRequestType<typeof client.v2.contributors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ContributorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.contributors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Contributors<TError = unknown>(
  args: InferRequestType<typeof client.v2.contributors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ContributorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.contributors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ContributorsContributorIdKey(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
) {
  return ['v2', '/v2/contributors/:contributor_id', args] as const
}

export function useGetV2ContributorsContributorId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
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
        ? getGetV2ContributorsContributorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.contributors[':contributor_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ContributorsContributorId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
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
        ? getGetV2ContributorsContributorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.contributors[':contributor_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ContributorsContributorIdCollectionsKey(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections', args] as const
}

export function useGetV2ContributorsContributorIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
            >
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
        ? getGetV2ContributorsContributorIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.contributors[':contributor_id'].collections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ContributorsContributorIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
            >
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
        ? getGetV2ContributorsContributorIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.contributors[':contributor_id'].collections.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ContributorsContributorIdCollectionsIdKey(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections/:id', args] as const
}

export function useGetV2ContributorsContributorIdCollectionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
              >
            >
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
        ? getGetV2ContributorsContributorIdCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.contributors[':contributor_id'].collections[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ContributorsContributorIdCollectionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
              >
            >
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
        ? getGetV2ContributorsContributorIdCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.contributors[':contributor_id'].collections[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ContributorsContributorIdCollectionsIdItemsKey(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections/:id/items', args] as const
}

export function useGetV2ContributorsContributorIdCollectionsIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
              >
            >
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
        ? getGetV2ContributorsContributorIdCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.contributors[':contributor_id'].collections[':id'].items.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ContributorsContributorIdCollectionsIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
              >
            >
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
        ? getGetV2ContributorsContributorIdCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.contributors[':contributor_id'].collections[':id'].items.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CvImagesKey() {
  return ['v2', '/v2/cv/images', 'POST'] as const
}

export function usePostV2CvImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.images.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.cv.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CvImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.cv.images.$post> }) =>
        parseResponse(client.v2.cv.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CvKeywordsKey(args: InferRequestType<typeof client.v2.cv.keywords.$get>) {
  return ['v2', '/v2/cv/keywords', args] as const
}

export function useGetV2CvKeywords<TError = unknown>(
  args: InferRequestType<typeof client.v2.cv.keywords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CvKeywordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cv.keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CvKeywords<TError = unknown>(
  args: InferRequestType<typeof client.v2.cv.keywords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CvKeywordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cv.keywords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CvSimilarImagesKey(
  args: InferRequestType<typeof client.v2.cv.similar.images.$get>,
) {
  return ['v2', '/v2/cv/similar/images', args] as const
}

export function useGetV2CvSimilarImages<TError = unknown>(
  args: InferRequestType<typeof client.v2.cv.similar.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
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
        ? getGetV2CvSimilarImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cv.similar.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CvSimilarImages<TError = unknown>(
  args: InferRequestType<typeof client.v2.cv.similar.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
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
        ? getGetV2CvSimilarImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cv.similar.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CvSimilarVideosKey(
  args: InferRequestType<typeof client.v2.cv.similar.videos.$get>,
) {
  return ['v2', '/v2/cv/similar/videos', args] as const
}

export function useGetV2CvSimilarVideos<TError = unknown>(
  args: InferRequestType<typeof client.v2.cv.similar.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
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
        ? getGetV2CvSimilarVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cv.similar.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CvSimilarVideos<TError = unknown>(
  args: InferRequestType<typeof client.v2.cv.similar.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
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
        ? getGetV2CvSimilarVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cv.similar.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialCategoriesKey() {
  return ['v2', '/v2/editorial/categories'] as const
}

export function useGetV2EditorialCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
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
        ? getGetV2EditorialCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
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
        ? getGetV2EditorialCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesCategoriesKey() {
  return ['v2', '/v2/editorial/images/categories'] as const
}

export function useGetV2EditorialImagesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
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
        ? getGetV2EditorialImagesCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.images.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
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
        ? getGetV2EditorialImagesCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.images.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesLicensesKey(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
) {
  return ['v2', '/v2/editorial/images/licenses', args] as const
}

export function useGetV2EditorialImagesLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
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
        ? getGetV2EditorialImagesLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
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
        ? getGetV2EditorialImagesLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EditorialImagesLicensesKey() {
  return ['v2', '/v2/editorial/images/licenses', 'POST'] as const
}

export function usePostV2EditorialImagesLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.editorial.images.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EditorialImagesLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.editorial.images.licenses.$post> },
      ) => parseResponse(client.v2.editorial.images.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EditorialImagesLivefeedsKey(
  args: InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
) {
  return ['v2', '/v2/editorial/images/livefeeds', args] as const
}

export function useGetV2EditorialImagesLivefeeds<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
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
        ? getGetV2EditorialImagesLivefeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.livefeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesLivefeeds<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
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
        ? getGetV2EditorialImagesLivefeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.livefeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesLivefeedsIdKey(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/images/livefeeds/:id', args] as const
}

export function useGetV2EditorialImagesLivefeedsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
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
        ? getGetV2EditorialImagesLivefeedsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.images.livefeeds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesLivefeedsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
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
        ? getGetV2EditorialImagesLivefeedsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.images.livefeeds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesLivefeedsIdItemsKey(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/editorial/images/livefeeds/:id/items', args] as const
}

export function useGetV2EditorialImagesLivefeedsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
            >
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
        ? getGetV2EditorialImagesLivefeedsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.images.livefeeds[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesLivefeedsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
            >
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
        ? getGetV2EditorialImagesLivefeedsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.images.livefeeds[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesSearchKey(
  args: InferRequestType<typeof client.v2.editorial.images.search.$get>,
) {
  return ['v2', '/v2/editorial/images/search', args] as const
}

export function useGetV2EditorialImagesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
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
        ? getGetV2EditorialImagesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
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
        ? getGetV2EditorialImagesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesUpdatedKey(
  args: InferRequestType<typeof client.v2.editorial.images.updated.$get>,
) {
  return ['v2', '/v2/editorial/images/updated', args] as const
}

export function useGetV2EditorialImagesUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
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
        ? getGetV2EditorialImagesUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.images.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
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
        ? getGetV2EditorialImagesUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialImagesIdKey(
  args: InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/images/:id', args] as const
}

export function useGetV2EditorialImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
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
        ? getGetV2EditorialImagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
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
        ? getGetV2EditorialImagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EditorialLicensesKey() {
  return ['v2', '/v2/editorial/licenses', 'POST'] as const
}

export function usePostV2EditorialLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.licenses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.editorial.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EditorialLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.editorial.licenses.$post> },
      ) => parseResponse(client.v2.editorial.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EditorialLivefeedsKey(
  args: InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
) {
  return ['v2', '/v2/editorial/livefeeds', args] as const
}

export function useGetV2EditorialLivefeeds<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
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
        ? getGetV2EditorialLivefeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.livefeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialLivefeeds<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
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
        ? getGetV2EditorialLivefeedsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.livefeeds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialLivefeedsIdKey(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/livefeeds/:id', args] as const
}

export function useGetV2EditorialLivefeedsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
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
        ? getGetV2EditorialLivefeedsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.livefeeds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialLivefeedsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
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
        ? getGetV2EditorialLivefeedsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.livefeeds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialLivefeedsIdItemsKey(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/editorial/livefeeds/:id/items', args] as const
}

export function useGetV2EditorialLivefeedsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
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
        ? getGetV2EditorialLivefeedsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.livefeeds[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialLivefeedsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
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
        ? getGetV2EditorialLivefeedsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.livefeeds[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialSearchKey(
  args: InferRequestType<typeof client.v2.editorial.search.$get>,
) {
  return ['v2', '/v2/editorial/search', args] as const
}

export function useGetV2EditorialSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
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
        ? getGetV2EditorialSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
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
        ? getGetV2EditorialSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialUpdatedKey(
  args: InferRequestType<typeof client.v2.editorial.updated.$get>,
) {
  return ['v2', '/v2/editorial/updated', args] as const
}

export function useGetV2EditorialUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
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
        ? getGetV2EditorialUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
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
        ? getGetV2EditorialUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialVideosCategoriesKey() {
  return ['v2', '/v2/editorial/videos/categories'] as const
}

export function useGetV2EditorialVideosCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
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
        ? getGetV2EditorialVideosCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.videos.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialVideosCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
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
        ? getGetV2EditorialVideosCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.editorial.videos.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialVideosLicensesKey(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
) {
  return ['v2', '/v2/editorial/videos/licenses', args] as const
}

export function useGetV2EditorialVideosLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
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
        ? getGetV2EditorialVideosLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.videos.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialVideosLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
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
        ? getGetV2EditorialVideosLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.videos.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EditorialVideosLicensesKey() {
  return ['v2', '/v2/editorial/videos/licenses', 'POST'] as const
}

export function usePostV2EditorialVideosLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.editorial.videos.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EditorialVideosLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.editorial.videos.licenses.$post> },
      ) => parseResponse(client.v2.editorial.videos.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EditorialVideosSearchKey(
  args: InferRequestType<typeof client.v2.editorial.videos.search.$get>,
) {
  return ['v2', '/v2/editorial/videos/search', args] as const
}

export function useGetV2EditorialVideosSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.videos.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
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
        ? getGetV2EditorialVideosSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.videos.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialVideosSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.editorial.videos.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
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
        ? getGetV2EditorialVideosSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.videos.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialVideosIdKey(
  args: InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/videos/:id', args] as const
}

export function useGetV2EditorialVideosId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
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
        ? getGetV2EditorialVideosIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.videos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialVideosId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
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
        ? getGetV2EditorialVideosIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial.videos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EditorialIdKey(
  args: InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/:id', args] as const
}

export function useGetV2EditorialId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EditorialIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EditorialId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2EditorialIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.editorial[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesKey(args: InferRequestType<typeof client.v2.images.$get>) {
  return ['v2', '/v2/images', args] as const
}

export function useGetV2Images<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Images<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesKey() {
  return ['v2', '/v2/images', 'POST'] as const
}

export function usePostV2Images<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.images.$post> }) =>
        parseResponse(client.v2.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesCategoriesKey(
  args: InferRequestType<typeof client.v2.images.categories.$get>,
) {
  return ['v2', '/v2/images/categories', args] as const
}

export function useGetV2ImagesCategories<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
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
        ? getGetV2ImagesCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCategories<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
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
        ? getGetV2ImagesCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesCollectionsKey(
  args: InferRequestType<typeof client.v2.images.collections.$get>,
) {
  return ['v2', '/v2/images/collections', args] as const
}

export function useGetV2ImagesCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
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
        ? getGetV2ImagesCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
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
        ? getGetV2ImagesCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesCollectionsKey() {
  return ['v2', '/v2/images/collections', 'POST'] as const
}

export function usePostV2ImagesCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.images.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.images.collections.$post> },
      ) => parseResponse(client.v2.images.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesCollectionsFeaturedKey(
  args: InferRequestType<typeof client.v2.images.collections.featured.$get>,
) {
  return ['v2', '/v2/images/collections/featured', args] as const
}

export function useGetV2ImagesCollectionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.collections.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
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
        ? getGetV2ImagesCollectionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.collections.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCollectionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.collections.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
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
        ? getGetV2ImagesCollectionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.collections.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesCollectionsFeaturedIdKey(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
) {
  return ['v2', '/v2/images/collections/featured/:id', args] as const
}

export function useGetV2ImagesCollectionsFeaturedId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
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
        ? getGetV2ImagesCollectionsFeaturedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.images.collections.featured[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCollectionsFeaturedId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
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
        ? getGetV2ImagesCollectionsFeaturedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.images.collections.featured[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesCollectionsFeaturedIdItemsKey(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/images/collections/featured/:id/items', args] as const
}

export function useGetV2ImagesCollectionsFeaturedIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
            >
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
        ? getGetV2ImagesCollectionsFeaturedIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.images.collections.featured[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCollectionsFeaturedIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
            >
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
        ? getGetV2ImagesCollectionsFeaturedIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.images.collections.featured[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesCollectionsIdKey(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
) {
  return ['v2', '/v2/images/collections/:id', args] as const
}

export function useGetV2ImagesCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
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
        ? getGetV2ImagesCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
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
        ? getGetV2ImagesCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesCollectionsIdKey() {
  return ['v2', '/v2/images/collections/:id', 'POST'] as const
}

export function usePostV2ImagesCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images.collections)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.images.collections)[':id']['$post']> },
      ) => parseResponse(client.v2.images.collections[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ImagesCollectionsIdKey() {
  return ['v2', '/v2/images/collections/:id', 'DELETE'] as const
}

export function useDeleteV2ImagesCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images.collections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ImagesCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.images.collections)[':id']['$delete']> },
      ) => parseResponse(client.v2.images.collections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesCollectionsIdItemsKey(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/images/collections/:id/items', args] as const
}

export function useGetV2ImagesCollectionsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
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
        ? getGetV2ImagesCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.images.collections[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesCollectionsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
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
        ? getGetV2ImagesCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.images.collections[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesCollectionsIdItemsKey() {
  return ['v2', '/v2/images/collections/:id/items', 'POST'] as const
}

export function usePostV2ImagesCollectionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesCollectionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$post']>
        },
      ) => parseResponse(client.v2.images.collections[':id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ImagesCollectionsIdItemsKey() {
  return ['v2', '/v2/images/collections/:id/items', 'DELETE'] as const
}

export function useDeleteV2ImagesCollectionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ImagesCollectionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$delete']>
        },
      ) => parseResponse(client.v2.images.collections[':id'].items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesLicensesKey(
  args: InferRequestType<typeof client.v2.images.licenses.$get>,
) {
  return ['v2', '/v2/images/licenses', args] as const
}

export function useGetV2ImagesLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
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
        ? getGetV2ImagesLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
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
        ? getGetV2ImagesLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesLicensesKey() {
  return ['v2', '/v2/images/licenses', 'POST'] as const
}

export function usePostV2ImagesLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.images.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.images.licenses.$post> }) =>
        parseResponse(client.v2.images.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ImagesLicensesIdDownloadsKey() {
  return ['v2', '/v2/images/licenses/:id/downloads', 'POST'] as const
}

export function usePostV2ImagesLicensesIdDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesLicensesIdDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>
        },
      ) => parseResponse(client.v2.images.licenses[':id'].downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesRecommendationsKey(
  args: InferRequestType<typeof client.v2.images.recommendations.$get>,
) {
  return ['v2', '/v2/images/recommendations', args] as const
}

export function useGetV2ImagesRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
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
        ? getGetV2ImagesRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
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
        ? getGetV2ImagesRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesSearchKey(
  args: InferRequestType<typeof client.v2.images.search.$get>,
) {
  return ['v2', '/v2/images/search', args] as const
}

export function useGetV2ImagesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ImagesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ImagesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesSearchSuggestionsKey(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$get>,
) {
  return ['v2', '/v2/images/search/suggestions', args] as const
}

export function useGetV2ImagesSearchSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
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
        ? getGetV2ImagesSearchSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.search.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesSearchSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
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
        ? getGetV2ImagesSearchSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.search.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesSearchSuggestionsKey() {
  return ['v2', '/v2/images/search/suggestions', 'POST'] as const
}

export function usePostV2ImagesSearchSuggestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.images.search.suggestions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesSearchSuggestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.images.search.suggestions.$post> },
      ) => parseResponse(client.v2.images.search.suggestions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesUpdatedKey(
  args: InferRequestType<typeof client.v2.images.updated.$get>,
) {
  return ['v2', '/v2/images/updated', args] as const
}

export function useGetV2ImagesUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
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
        ? getGetV2ImagesUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
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
        ? getGetV2ImagesUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesIdKey(
  args: InferRequestType<(typeof client.v2.images)[':id']['$get']>,
) {
  return ['v2', '/v2/images/:id', args] as const
}

export function useGetV2ImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ImagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ImagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ImagesIdSimilarKey(
  args: InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
) {
  return ['v2', '/v2/images/:id/similar', args] as const
}

export function useGetV2ImagesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
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
        ? getGetV2ImagesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
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
        ? getGetV2ImagesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OauthAccessTokenKey() {
  return ['v2', '/v2/oauth/access_token', 'POST'] as const
}

export function usePostV2OauthAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.access_token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.oauth.access_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.oauth.access_token.$post> },
      ) => parseResponse(client.v2.oauth.access_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OauthAuthorizeKey(
  args: InferRequestType<typeof client.v2.oauth.authorize.$get>,
) {
  return ['v2', '/v2/oauth/authorize', args] as const
}

export function useGetV2OauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.v2.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
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
        ? getGetV2OauthAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.v2.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
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
        ? getGetV2OauthAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SfxKey(args: InferRequestType<typeof client.v2.sfx.$get>) {
  return ['v2', '/v2/sfx', args] as const
}

export function useGetV2Sfx<TError = unknown>(
  args: InferRequestType<typeof client.v2.sfx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.sfx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Sfx<TError = unknown>(
  args: InferRequestType<typeof client.v2.sfx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.sfx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2SfxLicensesKey(args: InferRequestType<typeof client.v2.sfx.licenses.$get>) {
  return ['v2', '/v2/sfx/licenses', args] as const
}

export function useGetV2SfxLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.sfx.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxLicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sfx.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SfxLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.sfx.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxLicensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sfx.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SfxLicensesKey() {
  return ['v2', '/v2/sfx/licenses', 'POST'] as const
}

export function usePostV2SfxLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.sfx.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SfxLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.sfx.licenses.$post> }) =>
        parseResponse(client.v2.sfx.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SfxLicensesIdDownloadsKey() {
  return ['v2', '/v2/sfx/licenses/:id/downloads', 'POST'] as const
}

export function usePostV2SfxLicensesIdDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SfxLicensesIdDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']> },
      ) => parseResponse(client.v2.sfx.licenses[':id'].downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SfxSearchKey(args: InferRequestType<typeof client.v2.sfx.search.$get>) {
  return ['v2', '/v2/sfx/search', args] as const
}

export function useGetV2SfxSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.sfx.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sfx.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SfxSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.sfx.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sfx.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SfxIdKey(args: InferRequestType<(typeof client.v2.sfx)[':id']['$get']>) {
  return ['v2', '/v2/sfx/:id', args] as const
}

export function useGetV2SfxId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sfx)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sfx[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SfxId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sfx)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SfxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sfx[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TestKey(args: InferRequestType<typeof client.v2.test.$get>) {
  return ['v2', '/v2/test', args] as const
}

export function useGetV2Test<TError = unknown>(
  args: InferRequestType<typeof client.v2.test.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.test.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Test<TError = unknown>(
  args: InferRequestType<typeof client.v2.test.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.test.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2TestValidateKey(
  args: InferRequestType<typeof client.v2.test.validate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/test/validate', keyArgs] as const
}

export function useGetV2TestValidate<TError = unknown>(
  args: InferRequestType<typeof client.v2.test.validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TestValidateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.test.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TestValidate<TError = unknown>(
  args: InferRequestType<typeof client.v2.test.validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TestValidateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.test.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserKey() {
  return ['v2', '/v2/user'] as const
}

export function useGetV2User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserAccessTokenKey() {
  return ['v2', '/v2/user/access_token'] as const
}

export function useGetV2UserAccessToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserAccessTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.access_token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAccessToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserAccessTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.access_token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserSubscriptionsKey() {
  return ['v2', '/v2/user/subscriptions'] as const
}

export function useGetV2UserSubscriptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
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
        ? getGetV2UserSubscriptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.subscriptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserSubscriptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
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
        ? getGetV2UserSubscriptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.subscriptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosKey(args: InferRequestType<typeof client.v2.videos.$get>) {
  return ['v2', '/v2/videos', args] as const
}

export function useGetV2Videos<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Videos<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosCategoriesKey(
  args: InferRequestType<typeof client.v2.videos.categories.$get>,
) {
  return ['v2', '/v2/videos/categories', args] as const
}

export function useGetV2VideosCategories<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
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
        ? getGetV2VideosCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCategories<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
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
        ? getGetV2VideosCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosCollectionsKey(
  args: InferRequestType<typeof client.v2.videos.collections.$get>,
) {
  return ['v2', '/v2/videos/collections', args] as const
}

export function useGetV2VideosCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
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
        ? getGetV2VideosCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCollections<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
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
        ? getGetV2VideosCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VideosCollectionsKey() {
  return ['v2', '/v2/videos/collections', 'POST'] as const
}

export function usePostV2VideosCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.videos.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VideosCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.videos.collections.$post> },
      ) => parseResponse(client.v2.videos.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VideosCollectionsFeaturedKey(
  args: InferRequestType<typeof client.v2.videos.collections.featured.$get>,
) {
  return ['v2', '/v2/videos/collections/featured', args] as const
}

export function useGetV2VideosCollectionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.collections.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
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
        ? getGetV2VideosCollectionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.collections.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCollectionsFeatured<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.collections.featured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
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
        ? getGetV2VideosCollectionsFeaturedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.collections.featured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosCollectionsFeaturedIdKey(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
) {
  return ['v2', '/v2/videos/collections/featured/:id', args] as const
}

export function useGetV2VideosCollectionsFeaturedId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
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
        ? getGetV2VideosCollectionsFeaturedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.videos.collections.featured[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCollectionsFeaturedId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
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
        ? getGetV2VideosCollectionsFeaturedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.videos.collections.featured[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosCollectionsFeaturedIdItemsKey(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/videos/collections/featured/:id/items', args] as const
}

export function useGetV2VideosCollectionsFeaturedIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
            >
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
        ? getGetV2VideosCollectionsFeaturedIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.videos.collections.featured[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCollectionsFeaturedIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
            >
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
        ? getGetV2VideosCollectionsFeaturedIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.videos.collections.featured[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosCollectionsIdKey(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
) {
  return ['v2', '/v2/videos/collections/:id', args] as const
}

export function useGetV2VideosCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
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
        ? getGetV2VideosCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
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
        ? getGetV2VideosCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VideosCollectionsIdKey() {
  return ['v2', '/v2/videos/collections/:id', 'POST'] as const
}

export function usePostV2VideosCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VideosCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.videos.collections)[':id']['$post']> },
      ) => parseResponse(client.v2.videos.collections[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2VideosCollectionsIdKey() {
  return ['v2', '/v2/videos/collections/:id', 'DELETE'] as const
}

export function useDeleteV2VideosCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VideosCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.videos.collections)[':id']['$delete']> },
      ) => parseResponse(client.v2.videos.collections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VideosCollectionsIdItemsKey(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/videos/collections/:id/items', args] as const
}

export function useGetV2VideosCollectionsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
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
        ? getGetV2VideosCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.videos.collections[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosCollectionsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
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
        ? getGetV2VideosCollectionsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.videos.collections[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VideosCollectionsIdItemsKey() {
  return ['v2', '/v2/videos/collections/:id/items', 'POST'] as const
}

export function usePostV2VideosCollectionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VideosCollectionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$post']>
        },
      ) => parseResponse(client.v2.videos.collections[':id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2VideosCollectionsIdItemsKey() {
  return ['v2', '/v2/videos/collections/:id/items', 'DELETE'] as const
}

export function useDeleteV2VideosCollectionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VideosCollectionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>
        },
      ) => parseResponse(client.v2.videos.collections[':id'].items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VideosLicensesKey(
  args: InferRequestType<typeof client.v2.videos.licenses.$get>,
) {
  return ['v2', '/v2/videos/licenses', args] as const
}

export function useGetV2VideosLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
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
        ? getGetV2VideosLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosLicenses<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
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
        ? getGetV2VideosLicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VideosLicensesKey() {
  return ['v2', '/v2/videos/licenses', 'POST'] as const
}

export function usePostV2VideosLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.videos.licenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VideosLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.videos.licenses.$post> }) =>
        parseResponse(client.v2.videos.licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VideosLicensesIdDownloadsKey() {
  return ['v2', '/v2/videos/licenses/:id/downloads', 'POST'] as const
}

export function usePostV2VideosLicensesIdDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VideosLicensesIdDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>
        },
      ) => parseResponse(client.v2.videos.licenses[':id'].downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VideosSearchKey(
  args: InferRequestType<typeof client.v2.videos.search.$get>,
) {
  return ['v2', '/v2/videos/search', args] as const
}

export function useGetV2VideosSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VideosSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosSearch<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VideosSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosSearchSuggestionsKey(
  args: InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
) {
  return ['v2', '/v2/videos/search/suggestions', args] as const
}

export function useGetV2VideosSearchSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
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
        ? getGetV2VideosSearchSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.search.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosSearchSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
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
        ? getGetV2VideosSearchSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.search.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosUpdatedKey(
  args: InferRequestType<typeof client.v2.videos.updated.$get>,
) {
  return ['v2', '/v2/videos/updated', args] as const
}

export function useGetV2VideosUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
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
        ? getGetV2VideosUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosUpdated<TError = unknown>(
  args: InferRequestType<typeof client.v2.videos.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
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
        ? getGetV2VideosUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosIdKey(
  args: InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
) {
  return ['v2', '/v2/videos/:id', args] as const
}

export function useGetV2VideosId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2VideosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2VideosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VideosIdSimilarKey(
  args: InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
) {
  return ['v2', '/v2/videos/:id/similar', args] as const
}

export function useGetV2VideosIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
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
        ? getGetV2VideosIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VideosIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
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
        ? getGetV2VideosIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.videos[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
