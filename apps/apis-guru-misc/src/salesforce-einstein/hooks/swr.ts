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

export function getGetV2ApiusageKey() {
  return ['v2', '/v2/apiusage'] as const
}

export function useGetV2Apiusage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ApiusageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apiusage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Apiusage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ApiusageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apiusage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apiusage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LanguageDatasetsKey(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
) {
  return ['v2', '/v2/language/datasets', args] as const
}

export function useGetV2LanguageDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
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
        ? getGetV2LanguageDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v2.language.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
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
        ? getGetV2LanguageDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LanguageDatasetsUploadKey() {
  return ['v2', '/v2/language/datasets/upload', 'POST'] as const
}

export function usePostV2LanguageDatasetsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.datasets.upload.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.datasets.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageDatasetsUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.language.datasets.upload.$post> },
      ) => parseResponse(client.v2.language.datasets.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LanguageDatasetsUploadSyncKey() {
  return ['v2', '/v2/language/datasets/upload/sync', 'POST'] as const
}

export function usePostV2LanguageDatasetsUploadSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.language.datasets.upload.sync.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.datasets.upload.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageDatasetsUploadSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.language.datasets.upload.sync.$post> },
      ) => parseResponse(client.v2.language.datasets.upload.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LanguageDatasetsDatasetIdKey(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
) {
  return ['v2', '/v2/language/datasets/:datasetId', args] as const
}

export function useGetV2LanguageDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
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
        ? getGetV2LanguageDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.language.datasets[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
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
        ? getGetV2LanguageDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.language.datasets[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2LanguageDatasetsDatasetIdKey() {
  return ['v2', '/v2/language/datasets/:datasetId', 'DELETE'] as const
}

export function useDeleteV2LanguageDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LanguageDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['$delete']> },
      ) => parseResponse(client.v2.language.datasets[':datasetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LanguageDatasetsDatasetIdExamplesKey(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
) {
  return ['v2', '/v2/language/datasets/:datasetId/examples', args] as const
}

export function useGetV2LanguageDatasetsDatasetIdExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
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
        ? getGetV2LanguageDatasetsDatasetIdExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.language.datasets[':datasetId'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageDatasetsDatasetIdExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
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
        ? getGetV2LanguageDatasetsDatasetIdExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['examples']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.language.datasets[':datasetId'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LanguageDatasetsDatasetIdModelsKey(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
) {
  return ['v2', '/v2/language/datasets/:datasetId/models', args] as const
}

export function useGetV2LanguageDatasetsDatasetIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
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
        ? getGetV2LanguageDatasetsDatasetIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.language.datasets[':datasetId'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageDatasetsDatasetIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
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
        ? getGetV2LanguageDatasetsDatasetIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.language.datasets)[':datasetId']['models']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.language.datasets[':datasetId'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LanguageDatasetsDatasetIdUploadKey() {
  return ['v2', '/v2/language/datasets/:datasetId/upload', 'PUT'] as const
}

export function usePutV2LanguageDatasetsDatasetIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.language.datasets)[':datasetId']['upload']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LanguageDatasetsDatasetIdUploadKey()
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
            (typeof client.v2.language.datasets)[':datasetId']['upload']['$put']
          >
        },
      ) => parseResponse(client.v2.language.datasets[':datasetId'].upload.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LanguageDeletionIdKey(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
) {
  return ['v2', '/v2/language/deletion/:id', args] as const
}

export function useGetV2LanguageDeletionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
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
        ? getGetV2LanguageDeletionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.deletion[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageDeletionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.deletion)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
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
        ? getGetV2LanguageDeletionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.deletion)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.deletion[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LanguageExamplesKey(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
) {
  return ['v2', '/v2/language/examples', args] as const
}

export function useGetV2LanguageExamples<TError = unknown>(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
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
        ? getGetV2LanguageExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageExamples<TError = unknown>(
  args: InferRequestType<typeof client.v2.language.examples.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
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
        ? getGetV2LanguageExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.examples.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LanguageFeedbackKey() {
  return ['v2', '/v2/language/feedback', 'POST'] as const
}

export function usePostV2LanguageFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.feedback.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.language.feedback.$post> },
      ) => parseResponse(client.v2.language.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LanguageIntentKey() {
  return ['v2', '/v2/language/intent', 'POST'] as const
}

export function usePostV2LanguageIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.intent.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.intent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.language.intent.$post> }) =>
        parseResponse(client.v2.language.intent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LanguageModelsModelIdKey(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
) {
  return ['v2', '/v2/language/models/:modelId', args] as const
}

export function useGetV2LanguageModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
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
        ? getGetV2LanguageModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
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
        ? getGetV2LanguageModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2LanguageModelsModelIdKey() {
  return ['v2', '/v2/language/models/:modelId', 'DELETE'] as const
}

export function useDeleteV2LanguageModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.language.models)[':modelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LanguageModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.language.models)[':modelId']['$delete']> },
      ) => parseResponse(client.v2.language.models[':modelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LanguageModelsModelIdLcKey(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
) {
  return ['v2', '/v2/language/models/:modelId/lc', args] as const
}

export function useGetV2LanguageModelsModelIdLc<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
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
        ? getGetV2LanguageModelsModelIdLcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.models[':modelId'].lc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageModelsModelIdLc<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
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
        ? getGetV2LanguageModelsModelIdLcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.models)[':modelId']['lc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.models[':modelId'].lc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LanguageRetrainKey() {
  return ['v2', '/v2/language/retrain', 'POST'] as const
}

export function usePostV2LanguageRetrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.retrain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.retrain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageRetrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.language.retrain.$post> }) =>
        parseResponse(client.v2.language.retrain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LanguageSentimentKey() {
  return ['v2', '/v2/language/sentiment', 'POST'] as const
}

export function usePostV2LanguageSentiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.sentiment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.sentiment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageSentimentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.language.sentiment.$post> },
      ) => parseResponse(client.v2.language.sentiment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LanguageTrainKey() {
  return ['v2', '/v2/language/train', 'POST'] as const
}

export function usePostV2LanguageTrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.language.train.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.language.train.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LanguageTrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.language.train.$post> }) =>
        parseResponse(client.v2.language.train.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LanguageTrainModelIdKey(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
) {
  return ['v2', '/v2/language/train/:modelId', args] as const
}

export function useGetV2LanguageTrainModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
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
        ? getGetV2LanguageTrainModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.train[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LanguageTrainModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.language.train)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
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
        ? getGetV2LanguageTrainModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.language.train)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.language.train[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2Oauth2TokenKey() {
  return ['v2', '/v2/oauth2/token', 'POST'] as const
}

export function usePostV2Oauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2Oauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.oauth2.token.$post> }) =>
        parseResponse(client.v2.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2Oauth2TokensTokenKey() {
  return ['v2', '/v2/oauth2/tokens/:token', 'DELETE'] as const
}

export function useDeleteV2Oauth2TokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.oauth2.tokens)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2Oauth2TokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.oauth2.tokens)[':token']['$delete']> },
      ) => parseResponse(client.v2.oauth2.tokens[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2VisionBulkfeedbackKey() {
  return ['v2', '/v2/vision/bulkfeedback', 'PUT'] as const
}

export function usePutV2VisionBulkfeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.bulkfeedback.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.bulkfeedback.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2VisionBulkfeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.vision.bulkfeedback.$put> },
      ) => parseResponse(client.v2.vision.bulkfeedback.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionDatasetsKey(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
) {
  return ['v2', '/v2/vision/datasets', args] as const
}

export function useGetV2VisionDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
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
        ? getGetV2VisionDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v2.vision.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
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
        ? getGetV2VisionDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VisionDatasetsKey() {
  return ['v2', '/v2/vision/datasets', 'POST'] as const
}

export function usePostV2VisionDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.datasets.$post> }) =>
        parseResponse(client.v2.vision.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VisionDatasetsUploadKey() {
  return ['v2', '/v2/vision/datasets/upload', 'POST'] as const
}

export function usePostV2VisionDatasetsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.datasets.upload.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.datasets.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionDatasetsUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.vision.datasets.upload.$post> },
      ) => parseResponse(client.v2.vision.datasets.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VisionDatasetsUploadSyncKey() {
  return ['v2', '/v2/vision/datasets/upload/sync', 'POST'] as const
}

export function usePostV2VisionDatasetsUploadSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.vision.datasets.upload.sync.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.datasets.upload.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionDatasetsUploadSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.vision.datasets.upload.sync.$post> },
      ) => parseResponse(client.v2.vision.datasets.upload.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionDatasetsDatasetIdKey(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
) {
  return ['v2', '/v2/vision/datasets/:datasetId', args] as const
}

export function useGetV2VisionDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
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
        ? getGetV2VisionDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.datasets[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
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
        ? getGetV2VisionDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.datasets[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2VisionDatasetsDatasetIdKey() {
  return ['v2', '/v2/vision/datasets/:datasetId', 'DELETE'] as const
}

export function useDeleteV2VisionDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VisionDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['$delete']> },
      ) => parseResponse(client.v2.vision.datasets[':datasetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionDatasetsDatasetIdExamplesKey(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
) {
  return ['v2', '/v2/vision/datasets/:datasetId/examples', args] as const
}

export function useGetV2VisionDatasetsDatasetIdExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
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
        ? getGetV2VisionDatasetsDatasetIdExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.vision.datasets[':datasetId'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionDatasetsDatasetIdExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
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
        ? getGetV2VisionDatasetsDatasetIdExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.vision.datasets[':datasetId'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VisionDatasetsDatasetIdExamplesKey() {
  return ['v2', '/v2/vision/datasets/:datasetId/examples', 'POST'] as const
}

export function usePostV2VisionDatasetsDatasetIdExamples<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionDatasetsDatasetIdExamplesKey()
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
            (typeof client.v2.vision.datasets)[':datasetId']['examples']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.vision.datasets[':datasetId'].examples.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionDatasetsDatasetIdModelsKey(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
) {
  return ['v2', '/v2/vision/datasets/:datasetId/models', args] as const
}

export function useGetV2VisionDatasetsDatasetIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
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
        ? getGetV2VisionDatasetsDatasetIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.vision.datasets[':datasetId'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionDatasetsDatasetIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
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
        ? getGetV2VisionDatasetsDatasetIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.vision.datasets[':datasetId'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2VisionDatasetsDatasetIdUploadKey() {
  return ['v2', '/v2/vision/datasets/:datasetId/upload', 'PUT'] as const
}

export function usePutV2VisionDatasetsDatasetIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2VisionDatasetsDatasetIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.vision.datasets)[':datasetId']['upload']['$put']>
        },
      ) => parseResponse(client.v2.vision.datasets[':datasetId'].upload.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionDeletionIdKey(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
) {
  return ['v2', '/v2/vision/deletion/:id', args] as const
}

export function useGetV2VisionDeletionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
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
        ? getGetV2VisionDeletionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.deletion[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionDeletionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.deletion)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
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
        ? getGetV2VisionDeletionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.deletion)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.deletion[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VisionDetectKey() {
  return ['v2', '/v2/vision/detect', 'POST'] as const
}

export function usePostV2VisionDetect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.detect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.detect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionDetectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.detect.$post> }) =>
        parseResponse(client.v2.vision.detect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionExamplesKey(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
) {
  return ['v2', '/v2/vision/examples', args] as const
}

export function useGetV2VisionExamples<TError = unknown>(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
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
        ? getGetV2VisionExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionExamples<TError = unknown>(
  args: InferRequestType<typeof client.v2.vision.examples.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
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
        ? getGetV2VisionExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.examples.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VisionFeedbackKey() {
  return ['v2', '/v2/vision/feedback', 'POST'] as const
}

export function usePostV2VisionFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.feedback.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.feedback.$post> }) =>
        parseResponse(client.v2.vision.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionModelsModelIdKey(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
) {
  return ['v2', '/v2/vision/models/:modelId', args] as const
}

export function useGetV2VisionModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
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
        ? getGetV2VisionModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
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
        ? getGetV2VisionModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2VisionModelsModelIdKey() {
  return ['v2', '/v2/vision/models/:modelId', 'DELETE'] as const
}

export function useDeleteV2VisionModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vision.models)[':modelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VisionModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.vision.models)[':modelId']['$delete']> },
      ) => parseResponse(client.v2.vision.models[':modelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionModelsModelIdLcKey(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
) {
  return ['v2', '/v2/vision/models/:modelId/lc', args] as const
}

export function useGetV2VisionModelsModelIdLc<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
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
        ? getGetV2VisionModelsModelIdLcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.models[':modelId'].lc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionModelsModelIdLc<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
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
        ? getGetV2VisionModelsModelIdLcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.models)[':modelId']['lc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.models[':modelId'].lc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VisionOcrKey() {
  return ['v2', '/v2/vision/ocr', 'POST'] as const
}

export function usePostV2VisionOcr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.ocr.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.ocr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionOcrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.ocr.$post> }) =>
        parseResponse(client.v2.vision.ocr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VisionPredictKey() {
  return ['v2', '/v2/vision/predict', 'POST'] as const
}

export function usePostV2VisionPredict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.predict.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.predict.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionPredictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.predict.$post> }) =>
        parseResponse(client.v2.vision.predict.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VisionRetrainKey() {
  return ['v2', '/v2/vision/retrain', 'POST'] as const
}

export function usePostV2VisionRetrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.retrain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.retrain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionRetrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.retrain.$post> }) =>
        parseResponse(client.v2.vision.retrain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VisionTrainKey() {
  return ['v2', '/v2/vision/train', 'POST'] as const
}

export function usePostV2VisionTrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vision.train.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.vision.train.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VisionTrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vision.train.$post> }) =>
        parseResponse(client.v2.vision.train.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VisionTrainModelIdKey(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
) {
  return ['v2', '/v2/vision/train/:modelId', args] as const
}

export function useGetV2VisionTrainModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
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
        ? getGetV2VisionTrainModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.train[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VisionTrainModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vision.train)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
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
        ? getGetV2VisionTrainModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vision.train)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vision.train[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
