import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['alarm-models']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alarm-models', '/alarm-models', keyArgs] as const
}

export function getAlarmModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['alarm-models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlarmModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['alarm-models'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlarmModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['alarm-models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>
            >
          >,
          ReturnType<typeof getAlarmModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['alarm-models']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlarmModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['alarm-models'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['detector-models']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detector-models', '/detector-models', keyArgs] as const
}

export function getDetectorModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['detector-models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectorModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['detector-models'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDetectorModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['detector-models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
            >
          >,
          ReturnType<typeof getDetectorModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['detector-models']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectorModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['detector-models'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getInputsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inputs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inputs', '/inputs', keyArgs] as const
}

export function getInputsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inputs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInputsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inputs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInputs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inputs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
          ReturnType<typeof getInputsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInputsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInputsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inputs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.inputs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alarm-models', '/alarm-models/:alarmModelName', keyArgs] as const
}

export function getAlarmModelsAlarmModelNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlarmModelsAlarmModelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['alarm-models'][':alarmModelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['alarm-models'][':alarmModelName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlarmModelsAlarmModelNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlarmModelsAlarmModelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['alarm-models'][':alarmModelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detector-models', '/detector-models/:detectorModelName', keyArgs] as const
}

export function getDetectorModelsDetectorModelNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectorModelsDetectorModelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['detector-models'][':detectorModelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['detector-models'][':detectorModelName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDetectorModelsDetectorModelNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectorModelsDetectorModelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['detector-models'][':detectorModelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['detector-models'][':detectorModelName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['detector-models'][':detectorModelName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inputs)[':inputName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inputs', '/inputs/:inputName', keyArgs] as const
}

export function getInputsInputNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inputs)[':inputName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInputsInputNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inputs[':inputName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInputsInputName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inputs)[':inputName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInputsInputNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inputs)[':inputName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInputsInputNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInputsInputNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inputs[':inputName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inputs)[':inputName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inputs)[':inputName']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['analysis', '/analysis/detector-models/:analysisId', keyArgs] as const
}

export function getAnalysisDetectorModelsAnalysisIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysisDetectorModelsAnalysisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analysis['detector-models'][':analysisId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analysis)['detector-models'][':analysisId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalysisDetectorModelsAnalysisIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysisDetectorModelsAnalysisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analysis['detector-models'][':analysisId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoggingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['logging', '/logging', keyArgs] as const
}

export function getLoggingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoggingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logging.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
          >,
          ReturnType<typeof getLoggingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoggingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.logging.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['results']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['analysis', '/analysis/detector-models/:analysisId/results', keyArgs] as const
}

export function getAnalysisDetectorModelsAnalysisIdResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysisDetectorModelsAnalysisIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analysis['detector-models'][':analysisId'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analysis)['detector-models'][':analysisId']['results']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysisDetectorModelsAnalysisIdResultsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysisDetectorModelsAnalysisIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analysis['detector-models'][':analysisId'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlarmModelsAlarmModelNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alarm-models', '/alarm-models/:alarmModelName/versions', keyArgs] as const
}

export function getAlarmModelsAlarmModelNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlarmModelsAlarmModelNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['alarm-models'][':alarmModelName'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['alarm-models'][':alarmModelName']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAlarmModelsAlarmModelNameVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlarmModelsAlarmModelNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['alarm-models'][':alarmModelName'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDetectorModelsDetectorModelNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detector-models', '/detector-models/:detectorModelName/versions', keyArgs] as const
}

export function getDetectorModelsDetectorModelNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectorModelsDetectorModelNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['detector-models'][':detectorModelName'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['detector-models'][':detectorModelName']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getDetectorModelsDetectorModelNameVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectorModelsDetectorModelNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['detector-models'][':detectorModelName'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tags#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
