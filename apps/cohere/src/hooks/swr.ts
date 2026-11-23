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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV1ChatKey() {
  return ['v1', '/v1/chat', 'POST'] as const
}

export function usePostV1Chat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.chat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.chat.$post> }) =>
        parseResponse(client.v1.chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ChatKey() {
  return ['v2', '/v2/chat', 'POST'] as const
}

export function usePostV2Chat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.chat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.chat.$post> }) =>
        parseResponse(client.v2.chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ParseKey() {
  return ['v2', '/v2/parse', 'POST'] as const
}

export function usePostV2Parse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parse.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.parse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.parse.$post> }) =>
        parseResponse(client.v2.parse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GenerateKey() {
  return ['v1', '/v1/generate', 'POST'] as const
}

export function usePostV1Generate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.generate.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.generate.$post> }) =>
        parseResponse(client.v1.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EmbedKey() {
  return ['v1', '/v1/embed', 'POST'] as const
}

export function usePostV1Embed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.embed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmbedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.embed.$post> }) =>
        parseResponse(client.v1.embed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmbedKey() {
  return ['v2', '/v2/embed', 'POST'] as const
}

export function usePostV2Embed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.embed.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.embed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmbedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.embed.$post> }) =>
        parseResponse(client.v2.embed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AudioTranscriptionsKey() {
  return ['v2', '/v2/audio/transcriptions', 'POST'] as const
}

export function usePostV2AudioTranscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.transcriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.audio.transcriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AudioTranscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.audio.transcriptions.$post> },
      ) => parseResponse(client.v2.audio.transcriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BatchesKey(args: InferRequestType<typeof client.v2.batches.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/batches', keyArgs] as const
}

export function useGetV2Batches<TError = unknown>(
  args: InferRequestType<typeof client.v2.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.batches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Batches<TError = unknown>(
  args: InferRequestType<typeof client.v2.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.batches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BatchesKey() {
  return ['v2', '/v2/batches', 'POST'] as const
}

export function usePostV2Batches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.batches.$post> }) =>
        parseResponse(client.v2.batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BatchesIdKey(
  args: InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/batches/:id', keyArgs] as const
}

export function useGetV2BatchesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2BatchesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.batches[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BatchesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2BatchesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.batches[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BatchesIdCancelKey() {
  return ['v2', '/v2/batches/:id:cancel', 'POST'] as const
}

export function usePostV2BatchesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.batches)[':id:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BatchesIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.batches)[':id:cancel']['$post']> },
      ) => parseResponse(client.v2.batches[':id:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmbedJobsKey(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/embed-jobs', keyArgs] as const
}

export function useGetV1EmbedJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EmbedJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['embed-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmbedJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EmbedJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['embed-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmbedJobsKey() {
  return ['v1', '/v1/embed-jobs', 'POST'] as const
}

export function usePostV1EmbedJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['embed-jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmbedJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['embed-jobs']['$post']> },
      ) => parseResponse(client.v1['embed-jobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EmbedJobsIdKey(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/embed-jobs/:id', keyArgs] as const
}

export function useGetV1EmbedJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EmbedJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['embed-jobs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmbedJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EmbedJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['embed-jobs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmbedJobsIdCancelKey() {
  return ['v1', '/v1/embed-jobs/:id/cancel', 'POST'] as const
}

export function usePostV1EmbedJobsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmbedJobsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']> },
      ) => parseResponse(client.v1['embed-jobs'][':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RerankKey() {
  return ['v1', '/v1/rerank', 'POST'] as const
}

export function usePostV1Rerank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rerank.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.rerank.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RerankKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rerank.$post> }) =>
        parseResponse(client.v1.rerank.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2RerankKey() {
  return ['v2', '/v2/rerank', 'POST'] as const
}

export function usePostV2Rerank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.rerank.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.rerank.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RerankKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.rerank.$post> }) =>
        parseResponse(client.v2.rerank.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ClassifyKey() {
  return ['v1', '/v1/classify', 'POST'] as const
}

export function usePostV1Classify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.classify.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.classify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClassifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.classify.$post> }) =>
        parseResponse(client.v1.classify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsKey(args: InferRequestType<typeof client.v1.datasets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/datasets', keyArgs] as const
}

export function useGetV1Datasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Datasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DatasetsKey() {
  return ['v1', '/v1/datasets', 'POST'] as const
}

export function usePostV1Datasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.datasets.$post> }) =>
        parseResponse(client.v1.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsUsageKey(
  args: InferRequestType<typeof client.v1.datasets.usage.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/datasets/usage', keyArgs] as const
}

export function useGetV1DatasetsUsage<TError = unknown>(
  args: InferRequestType<typeof client.v1.datasets.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
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
        ? getGetV1DatasetsUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsUsage<TError = unknown>(
  args: InferRequestType<typeof client.v1.datasets.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
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
        ? getGetV1DatasetsUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsIdKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/datasets/:id', keyArgs] as const
}

export function useGetV1DatasetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DatasetsIdKey() {
  return ['v1', '/v1/datasets/:id', 'DELETE'] as const
}

export function useDeleteV1DatasetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DatasetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.datasets)[':id']['$delete']> },
      ) => parseResponse(client.v1.datasets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SummarizeKey() {
  return ['v1', '/v1/summarize', 'POST'] as const
}

export function usePostV1Summarize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.summarize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.summarize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SummarizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.summarize.$post> }) =>
        parseResponse(client.v1.summarize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokenizeKey() {
  return ['v1', '/v1/tokenize', 'POST'] as const
}

export function usePostV1Tokenize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenize.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.tokenize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokenizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tokenize.$post> }) =>
        parseResponse(client.v1.tokenize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DetokenizeKey() {
  return ['v1', '/v1/detokenize', 'POST'] as const
}

export function usePostV1Detokenize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.detokenize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.detokenize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DetokenizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.detokenize.$post> }) =>
        parseResponse(client.v1.detokenize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectorsKey(args: InferRequestType<typeof client.v1.connectors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/connectors', keyArgs] as const
}

export function useGetV1Connectors<TError = unknown>(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConnectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Connectors<TError = unknown>(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConnectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectorsKey() {
  return ['v1', '/v1/connectors', 'POST'] as const
}

export function usePostV1Connectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connectors.$post> }) =>
        parseResponse(client.v1.connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectorsIdKey(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/connectors/:id', keyArgs] as const
}

export function useGetV1ConnectorsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ConnectorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connectors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ConnectorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connectors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConnectorsIdKey() {
  return ['v1', '/v1/connectors/:id', 'DELETE'] as const
}

export function useDeleteV1ConnectorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.connectors)[':id']['$delete']> },
      ) => parseResponse(client.v1.connectors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ConnectorsIdKey() {
  return ['v1', '/v1/connectors/:id', 'PATCH'] as const
}

export function usePatchV1ConnectorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ConnectorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.connectors)[':id']['$patch']> },
      ) => parseResponse(client.v1.connectors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorsIdOauthAuthorizeKey() {
  return ['v1', '/v1/connectors/:id/oauth/authorize', 'POST'] as const
}

export function usePostV1ConnectorsIdOauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsIdOauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>
        },
      ) => parseResponse(client.v1.connectors[':id'].oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ModelsModelKey(
  args: InferRequestType<(typeof client.v1.models)[':model']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/models/:model', keyArgs] as const
}

export function useGetV1ModelsModel<TError = unknown>(
  args: InferRequestType<(typeof client.v1.models)[':model']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ModelsModelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models[':model'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ModelsModel<TError = unknown>(
  args: InferRequestType<(typeof client.v1.models)[':model']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ModelsModelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models[':model'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ModelsKey(args: InferRequestType<typeof client.v1.models.$get>) {
  return ['v1', '/v1/models', args] as const
}

export function useGetV1Models<TError = unknown>(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Models<TError = unknown>(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CheckApiKeyKey() {
  return ['v1', '/v1/check-api-key', 'POST'] as const
}

export function usePostV1CheckApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['check-api-key']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['check-api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CheckApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['check-api-key']['$post']> },
      ) => parseResponse(client.v1['check-api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinetuningFinetunedModelsKey(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/finetuning/finetuned-models', keyArgs] as const
}

export function useGetV1FinetuningFinetunedModels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
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
        ? getGetV1FinetuningFinetunedModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.finetuning['finetuned-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinetuningFinetunedModels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
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
        ? getGetV1FinetuningFinetunedModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.finetuning['finetuned-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinetuningFinetunedModelsKey() {
  return ['v1', '/v1/finetuning/finetuned-models', 'POST'] as const
}

export function usePostV1FinetuningFinetunedModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinetuningFinetunedModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']> },
      ) => parseResponse(client.v1.finetuning['finetuned-models'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinetuningFinetunedModelsIdKey(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/finetuning/finetuned-models/:id', keyArgs] as const
}

export function useGetV1FinetuningFinetunedModelsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
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
        ? getGetV1FinetuningFinetunedModelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.finetuning['finetuned-models'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinetuningFinetunedModelsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
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
        ? getGetV1FinetuningFinetunedModelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.finetuning['finetuned-models'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1FinetuningFinetunedModelsIdKey() {
  return ['v1', '/v1/finetuning/finetuned-models/:id', 'DELETE'] as const
}

export function useDeleteV1FinetuningFinetunedModelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FinetuningFinetunedModelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>
        },
      ) =>
        parseResponse(client.v1.finetuning['finetuned-models'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1FinetuningFinetunedModelsIdKey() {
  return ['v1', '/v1/finetuning/finetuned-models/:id', 'PATCH'] as const
}

export function usePatchV1FinetuningFinetunedModelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1FinetuningFinetunedModelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>
        },
      ) =>
        parseResponse(client.v1.finetuning['finetuned-models'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinetuningFinetunedModelsFinetunedModelIdEventsKey(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/finetuning/finetuned-models/:finetuned_model_id/events', keyArgs] as const
}

export function useGetV1FinetuningFinetunedModelsFinetunedModelIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
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
        ? getGetV1FinetuningFinetunedModelsFinetunedModelIdEventsKey(args)
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
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
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
          client.v1.finetuning['finetuned-models'][':finetuned_model_id'].events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinetuningFinetunedModelsFinetunedModelIdEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
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
        ? getGetV1FinetuningFinetunedModelsFinetunedModelIdEventsKey(args)
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
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
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
          client.v1.finetuning['finetuned-models'][':finetuned_model_id'].events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsKey(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/finetuning/finetuned-models/:finetuned_model_id/training-step-metrics',
    keyArgs,
  ] as const
}

export function useGetV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
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
        ? getGetV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsKey(args)
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
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
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
          client.v1.finetuning['finetuned-models'][':finetuned_model_id'][
            'training-step-metrics'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
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
        ? getGetV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsKey(args)
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
                (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
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
          client.v1.finetuning['finetuned-models'][':finetuned_model_id'][
            'training-step-metrics'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
