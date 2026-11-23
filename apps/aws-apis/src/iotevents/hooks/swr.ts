import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlarmModelsKey() {
  return ['alarm-models'] as const
}

export function getAnalysisKey() {
  return ['analysis'] as const
}

export function getDetectorModelsKey() {
  return ['detector-models'] as const
}

export function getInputRoutingsKey() {
  return ['input-routings'] as const
}

export function getInputsKey() {
  return ['inputs'] as const
}

export function getLoggingKey() {
  return ['logging'] as const
}

export function getTagsResourceArnKey() {
  return ['tags#resourceArn'] as const
}

export function getTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys'] as const
}

export function getGetAlarmModelsKey(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarm-models', '/alarm-models', keyArgs] as const
}

export function useGetAlarmModels<TError = unknown>(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlarmModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['alarm-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlarmModels<TError = unknown>(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlarmModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['alarm-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAlarmModelsKey() {
  return ['alarm-models', '/alarm-models', 'POST'] as const
}

export function usePostAlarmModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['alarm-models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['alarm-models']['$post']> },
      ) => parseResponse(client['alarm-models'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorModelsKey(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector-models', '/detector-models', keyArgs] as const
}

export function useGetDetectorModels<TError = unknown>(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDetectorModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['detector-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorModels<TError = unknown>(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDetectorModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['detector-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorModelsKey() {
  return ['detector-models', '/detector-models', 'POST'] as const
}

export function usePostDetectorModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['detector-models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['detector-models']['$post']> },
      ) => parseResponse(client['detector-models'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInputsKey(args: InferRequestType<typeof client.inputs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['inputs', '/inputs', keyArgs] as const
}

export function useGetInputs<TError = unknown>(
  args: InferRequestType<typeof client.inputs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInputsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.inputs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInputs<TError = unknown>(
  args: InferRequestType<typeof client.inputs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInputsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.inputs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInputsKey() {
  return ['inputs', '/inputs', 'POST'] as const
}

export function usePostInputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.inputs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInputsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inputs.$post> }) =>
        parseResponse(client.inputs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlarmModelsAlarmModelNameKey(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarm-models', '/alarm-models/:alarmModelName', keyArgs] as const
}

export function useGetAlarmModelsAlarmModelName<TError = unknown>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
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
        ? getGetAlarmModelsAlarmModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['alarm-models'][':alarmModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlarmModelsAlarmModelName<TError = unknown>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
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
        ? getGetAlarmModelsAlarmModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['alarm-models'][':alarmModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAlarmModelsAlarmModelNameKey() {
  return ['alarm-models', '/alarm-models/:alarmModelName', 'POST'] as const
}

export function usePostAlarmModelsAlarmModelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmModelsAlarmModelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$post']> },
      ) => parseResponse(client['alarm-models'][':alarmModelName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAlarmModelsAlarmModelNameKey() {
  return ['alarm-models', '/alarm-models/:alarmModelName', 'DELETE'] as const
}

export function useDeleteAlarmModelsAlarmModelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAlarmModelsAlarmModelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$delete']> },
      ) => parseResponse(client['alarm-models'][':alarmModelName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorModelsDetectorModelNameKey(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector-models', '/detector-models/:detectorModelName', keyArgs] as const
}

export function useGetDetectorModelsDetectorModelName<TError = unknown>(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
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
        ? getGetDetectorModelsDetectorModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['detector-models'][':detectorModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorModelsDetectorModelName<TError = unknown>(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
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
        ? getGetDetectorModelsDetectorModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['detector-models'][':detectorModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorModelsDetectorModelNameKey() {
  return ['detector-models', '/detector-models/:detectorModelName', 'POST'] as const
}

export function usePostDetectorModelsDetectorModelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorModelsDetectorModelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>
        },
      ) => parseResponse(client['detector-models'][':detectorModelName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDetectorModelsDetectorModelNameKey() {
  return ['detector-models', '/detector-models/:detectorModelName', 'DELETE'] as const
}

export function useDeleteDetectorModelsDetectorModelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDetectorModelsDetectorModelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$delete']>
        },
      ) =>
        parseResponse(client['detector-models'][':detectorModelName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInputsInputNameKey(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['inputs', '/inputs/:inputName', keyArgs] as const
}

export function useGetInputsInputName<TError = unknown>(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInputsInputNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inputs[':inputName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInputsInputName<TError = unknown>(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInputsInputNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inputs[':inputName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInputsInputNameKey() {
  return ['inputs', '/inputs/:inputName', 'PUT'] as const
}

export function usePutInputsInputName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inputs)[':inputName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInputsInputNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inputs)[':inputName']['$put']> },
      ) => parseResponse(client.inputs[':inputName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInputsInputNameKey() {
  return ['inputs', '/inputs/:inputName', 'DELETE'] as const
}

export function useDeleteInputsInputName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inputs)[':inputName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInputsInputNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inputs)[':inputName']['$delete']> },
      ) => parseResponse(client.inputs[':inputName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalysisDetectorModelsAnalysisIdKey(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analysis', '/analysis/detector-models/:analysisId', keyArgs] as const
}

export function useGetAnalysisDetectorModelsAnalysisId<TError = unknown>(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
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
        ? getGetAnalysisDetectorModelsAnalysisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analysis['detector-models'][':analysisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysisDetectorModelsAnalysisId<TError = unknown>(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
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
        ? getGetAnalysisDetectorModelsAnalysisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analysis['detector-models'][':analysisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLoggingKey(args: InferRequestType<typeof client.logging.$get>) {
  const { header: _, ...keyArgs } = args
  return ['logging', '/logging', keyArgs] as const
}

export function useGetLogging<TError = unknown>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logging.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogging<TError = unknown>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logging.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutLoggingKey() {
  return ['logging', '/logging', 'PUT'] as const
}

export function usePutLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.logging.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logging.$put> }) =>
        parseResponse(client.logging.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalysisDetectorModelsAnalysisIdResultsKey(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['analysis', '/analysis/detector-models/:analysisId/results', keyArgs] as const
}

export function useGetAnalysisDetectorModelsAnalysisIdResults<TError = unknown>(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
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
        ? getGetAnalysisDetectorModelsAnalysisIdResultsKey(args)
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
                (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
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
          client.analysis['detector-models'][':analysisId'].results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysisDetectorModelsAnalysisIdResults<TError = unknown>(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
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
        ? getGetAnalysisDetectorModelsAnalysisIdResultsKey(args)
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
                (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
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
          client.analysis['detector-models'][':analysisId'].results.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAlarmModelsAlarmModelNameVersionsKey(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarm-models', '/alarm-models/:alarmModelName/versions', keyArgs] as const
}

export function useGetAlarmModelsAlarmModelNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
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
        ? getGetAlarmModelsAlarmModelNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['alarm-models'][':alarmModelName'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlarmModelsAlarmModelNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
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
        ? getGetAlarmModelsAlarmModelNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['alarm-models'][':alarmModelName'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectorModelsDetectorModelNameVersionsKey(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detector-models', '/detector-models/:detectorModelName/versions', keyArgs] as const
}

export function useGetDetectorModelsDetectorModelNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
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
        ? getGetDetectorModelsDetectorModelNameVersionsKey(args)
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
                (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
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
          client['detector-models'][':detectorModelName'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorModelsDetectorModelNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
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
        ? getGetDetectorModelsDetectorModelNameVersionsKey(args)
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
                (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
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
          client['detector-models'][':detectorModelName'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInputRoutingsKey() {
  return ['input-routings', '/input-routings', 'POST'] as const
}

export function usePostInputRoutings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['input-routings']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['input-routings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInputRoutingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['input-routings']['$post']> },
      ) => parseResponse(client['input-routings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>
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
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn']['$post']> },
      ) => parseResponse(client['tags#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalysisDetectorModelsIndexKey() {
  return ['analysis', '/analysis/detector-models/', 'POST'] as const
}

export function usePostAnalysisDetectorModelsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analysis)['detector-models']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analysis)['detector-models']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalysisDetectorModelsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.analysis)['detector-models']['index']['$post']> },
      ) => parseResponse(client.analysis['detector-models'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']> },
      ) => parseResponse(client['tags#resourceArn&tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
