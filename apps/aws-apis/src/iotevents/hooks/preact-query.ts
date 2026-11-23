import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getAlarmModelsQueryKey(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarm-models', '/alarm-models', keyArgs] as const
}

export function getAlarmModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['alarm-models']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmModelsQueryKey>
  >({
    queryKey: getAlarmModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['alarm-models'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAlarmModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAlarmModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAlarmModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAlarmModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAlarmModelsMutationKey() {
  return ['alarm-models', '/alarm-models', 'POST'] as const
}

export function getPostAlarmModelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['alarm-models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['alarm-models']['$post']>) {
      return parseResponse(client['alarm-models'].$post(args, options))
    },
  })
}

export function usePostAlarmModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['alarm-models']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlarmModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDetectorModelsQueryKey(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector-models', '/detector-models', keyArgs] as const
}

export function getDetectorModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorModelsQueryKey>
  >({
    queryKey: getDetectorModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['detector-models'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDetectorModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDetectorModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDetectorModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['detector-models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDetectorModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDetectorModelsMutationKey() {
  return ['detector-models', '/detector-models', 'POST'] as const
}

export function getPostDetectorModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['detector-models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['detector-models']['$post']>) {
      return parseResponse(client['detector-models'].$post(args, options))
    },
  })
}

export function usePostDetectorModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['detector-models']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDetectorModelsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInputsQueryKey(args: InferRequestType<typeof client.inputs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['inputs', '/inputs', keyArgs] as const
}

export function getInputsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inputs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInputsQueryKey>
  >({
    queryKey: getInputsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inputs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInputs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inputs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInputsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInputsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInputs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inputs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInputsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInputsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInputsMutationKey() {
  return ['inputs', '/inputs', 'POST'] as const
}

export function getPostInputsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$post>>>>>,
    TError,
    InferRequestType<typeof client.inputs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInputsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inputs.$post>) {
      return parseResponse(client.inputs.$post(args, options))
    },
  })
}

export function usePostInputs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$post>>>>>,
        TError,
        InferRequestType<typeof client.inputs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInputsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlarmModelsAlarmModelNameQueryKey(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarm-models', '/alarm-models/:alarmModelName', keyArgs] as const
}

export function getAlarmModelsAlarmModelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmModelsAlarmModelNameQueryKey>
  >({
    queryKey: getAlarmModelsAlarmModelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['alarm-models'][':alarmModelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAlarmModelsAlarmModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmModelsAlarmModelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAlarmModelsAlarmModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAlarmModelsAlarmModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmModelsAlarmModelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAlarmModelsAlarmModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAlarmModelsAlarmModelNameMutationKey() {
  return ['alarm-models', '/alarm-models/:alarmModelName', 'POST'] as const
}

export function getPostAlarmModelsAlarmModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmModelsAlarmModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$post']>,
    ) {
      return parseResponse(client['alarm-models'][':alarmModelName'].$post(args, options))
    },
  })
}

export function usePostAlarmModelsAlarmModelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlarmModelsAlarmModelNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAlarmModelsAlarmModelNameMutationKey() {
  return ['alarm-models', '/alarm-models/:alarmModelName', 'DELETE'] as const
}

export function getDeleteAlarmModelsAlarmModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAlarmModelsAlarmModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>,
    ) {
      return parseResponse(client['alarm-models'][':alarmModelName'].$delete(args, options))
    },
  })
}

export function useDeleteAlarmModelsAlarmModelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAlarmModelsAlarmModelNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDetectorModelsDetectorModelNameQueryKey(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector-models', '/detector-models/:detectorModelName', keyArgs] as const
}

export function getDetectorModelsDetectorModelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorModelsDetectorModelNameQueryKey>
  >({
    queryKey: getDetectorModelsDetectorModelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['detector-models'][':detectorModelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDetectorModelsDetectorModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorModelsDetectorModelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDetectorModelsDetectorModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDetectorModelsDetectorModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorModelsDetectorModelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDetectorModelsDetectorModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDetectorModelsDetectorModelNameMutationKey() {
  return ['detector-models', '/detector-models/:detectorModelName', 'POST'] as const
}

export function getPostDetectorModelsDetectorModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorModelsDetectorModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>,
    ) {
      return parseResponse(client['detector-models'][':detectorModelName'].$post(args, options))
    },
  })
}

export function usePostDetectorModelsDetectorModelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDetectorModelsDetectorModelNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDetectorModelsDetectorModelNameMutationKey() {
  return ['detector-models', '/detector-models/:detectorModelName', 'DELETE'] as const
}

export function getDeleteDetectorModelsDetectorModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['detector-models'][':detectorModelName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDetectorModelsDetectorModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$delete']>,
    ) {
      return parseResponse(client['detector-models'][':detectorModelName'].$delete(args, options))
    },
  })
}

export function useDeleteDetectorModelsDetectorModelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['detector-models'][':detectorModelName']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDetectorModelsDetectorModelNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInputsInputNameQueryKey(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['inputs', '/inputs/:inputName', keyArgs] as const
}

export function getInputsInputNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInputsInputNameQueryKey>
  >({
    queryKey: getInputsInputNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inputs[':inputName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInputsInputName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInputsInputNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInputsInputNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInputsInputName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inputs)[':inputName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInputsInputNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInputsInputNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutInputsInputNameMutationKey() {
  return ['inputs', '/inputs/:inputName', 'PUT'] as const
}

export function getPutInputsInputNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inputs)[':inputName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInputsInputNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inputs)[':inputName']['$put']>) {
      return parseResponse(client.inputs[':inputName'].$put(args, options))
    },
  })
}

export function usePutInputsInputName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.inputs)[':inputName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInputsInputNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInputsInputNameMutationKey() {
  return ['inputs', '/inputs/:inputName', 'DELETE'] as const
}

export function getDeleteInputsInputNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inputs)[':inputName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInputsInputNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inputs)[':inputName']['$delete']>) {
      return parseResponse(client.inputs[':inputName'].$delete(args, options))
    },
  })
}

export function useDeleteInputsInputName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inputs)[':inputName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inputs)[':inputName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInputsInputNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnalysisDetectorModelsAnalysisIdQueryKey(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analysis', '/analysis/detector-models/:analysisId', keyArgs] as const
}

export function getAnalysisDetectorModelsAnalysisIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysisDetectorModelsAnalysisIdQueryKey>
  >({
    queryKey: getAnalysisDetectorModelsAnalysisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analysis['detector-models'][':analysisId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysisDetectorModelsAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysisDetectorModelsAnalysisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAnalysisDetectorModelsAnalysisIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysisDetectorModelsAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysisDetectorModelsAnalysisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAnalysisDetectorModelsAnalysisIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLoggingQueryKey(args: InferRequestType<typeof client.logging.$get>) {
  const { header: _, ...keyArgs } = args
  return ['logging', '/logging', keyArgs] as const
}

export function getLoggingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logging.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggingQueryKey>
  >({
    queryKey: getLoggingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logging.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoggingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoggingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLoggingMutationKey() {
  return ['logging', '/logging', 'PUT'] as const
}

export function getPutLoggingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
    TError,
    InferRequestType<typeof client.logging.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLoggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logging.$put>) {
      return parseResponse(client.logging.$put(args, options))
    },
  })
}

export function usePutLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
        TError,
        InferRequestType<typeof client.logging.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLoggingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnalysisDetectorModelsAnalysisIdResultsQueryKey(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['analysis', '/analysis/detector-models/:analysisId/results', keyArgs] as const
}

export function getAnalysisDetectorModelsAnalysisIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['results']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAnalysisDetectorModelsAnalysisIdResultsQueryKey>
  >({
    queryKey: getAnalysisDetectorModelsAnalysisIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analysis['detector-models'][':analysisId'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysisDetectorModelsAnalysisIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['results']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAnalysisDetectorModelsAnalysisIdResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAnalysisDetectorModelsAnalysisIdResultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysisDetectorModelsAnalysisIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['results']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analysis)['detector-models'][':analysisId']['results']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAnalysisDetectorModelsAnalysisIdResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAnalysisDetectorModelsAnalysisIdResultsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAlarmModelsAlarmModelNameVersionsQueryKey(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarm-models', '/alarm-models/:alarmModelName/versions', keyArgs] as const
}

export function getAlarmModelsAlarmModelNameVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmModelsAlarmModelNameVersionsQueryKey>
  >({
    queryKey: getAlarmModelsAlarmModelNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['alarm-models'][':alarmModelName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAlarmModelsAlarmModelNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmModelsAlarmModelNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAlarmModelsAlarmModelNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAlarmModelsAlarmModelNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmModelsAlarmModelNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAlarmModelsAlarmModelNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDetectorModelsDetectorModelNameVersionsQueryKey(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detector-models', '/detector-models/:detectorModelName/versions', keyArgs] as const
}

export function getDetectorModelsDetectorModelNameVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorModelsDetectorModelNameVersionsQueryKey>
  >({
    queryKey: getDetectorModelsDetectorModelNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['detector-models'][':detectorModelName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDetectorModelsDetectorModelNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDetectorModelsDetectorModelNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDetectorModelsDetectorModelNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDetectorModelsDetectorModelNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['detector-models'][':detectorModelName']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDetectorModelsDetectorModelNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDetectorModelsDetectorModelNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInputRoutingsMutationKey() {
  return ['input-routings', '/input-routings', 'POST'] as const
}

export function getPostInputRoutingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['input-routings']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['input-routings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInputRoutingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['input-routings']['$post']>) {
      return parseResponse(client['input-routings'].$post(args, options))
    },
  })
}

export function usePostInputRoutings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['input-routings']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['input-routings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInputRoutingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tags#resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>) {
      return parseResponse(client['tags#resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnalysisDetectorModelsIndexMutationKey() {
  return ['analysis', '/analysis/detector-models/', 'POST'] as const
}

export function getPostAnalysisDetectorModelsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analysis)['detector-models']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analysis)['detector-models']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalysisDetectorModelsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analysis)['detector-models']['index']['$post']>,
    ) {
      return parseResponse(client.analysis['detector-models'].index.$post(args, options))
    },
  })
}

export function usePostAnalysisDetectorModelsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.analysis)['detector-models']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.analysis)['detector-models']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnalysisDetectorModelsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    ) {
      return parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
