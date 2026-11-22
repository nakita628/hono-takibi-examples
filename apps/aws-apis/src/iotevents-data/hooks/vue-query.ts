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

export function getAlarmsKey() {
  return ['alarms'] as const
}

export function getDetectorsKey() {
  return ['detectors'] as const
}

export function getInputsKey() {
  return ['inputs'] as const
}

export function getPostAlarmsAcknowledgeMutationKey() {
  return ['alarms', '/alarms/acknowledge', 'POST'] as const
}

export function getPostAlarmsAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.acknowledge.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alarms.acknowledge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmsAcknowledgeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alarms.acknowledge.$post>) {
      return parseResponse(client.alarms.acknowledge.$post(args, options))
    },
  })
}

export function usePostAlarmsAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alarms.acknowledge.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.alarms.acknowledge.$post>,
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
  const mutationDefaults = getPostAlarmsAcknowledgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostDetectorsDeleteMutationKey() {
  return ['detectors', '/detectors/delete', 'POST'] as const
}

export function getPostDetectorsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detectors.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.detectors.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.detectors.delete.$post>) {
      return parseResponse(client.detectors.delete.$post(args, options))
    },
  })
}

export function usePostDetectorsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.detectors.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.detectors.delete.$post>,
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
  const mutationDefaults = getPostDetectorsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlarmsDisableMutationKey() {
  return ['alarms', '/alarms/disable', 'POST'] as const
}

export function getPostAlarmsDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.disable.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alarms.disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmsDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alarms.disable.$post>) {
      return parseResponse(client.alarms.disable.$post(args, options))
    },
  })
}

export function usePostAlarmsDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.alarms.disable.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.alarms.disable.$post>,
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
  const mutationDefaults = getPostAlarmsDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlarmsEnableMutationKey() {
  return ['alarms', '/alarms/enable', 'POST'] as const
}

export function getPostAlarmsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.enable.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alarms.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmsEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alarms.enable.$post>) {
      return parseResponse(client.alarms.enable.$post(args, options))
    },
  })
}

export function usePostAlarmsEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.enable.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.alarms.enable.$post>,
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
  const mutationDefaults = getPostAlarmsEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostInputsMessagesMutationKey() {
  return ['inputs', '/inputs/messages', 'POST'] as const
}

export function getPostInputsMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inputs.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInputsMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inputs.messages.$post>) {
      return parseResponse(client.inputs.messages.$post(args, options))
    },
  })
}

export function usePostInputsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inputs.messages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.inputs.messages.$post>,
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
  const mutationDefaults = getPostInputsMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlarmsResetMutationKey() {
  return ['alarms', '/alarms/reset', 'POST'] as const
}

export function getPostAlarmsResetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.reset.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alarms.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmsResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alarms.reset.$post>) {
      return parseResponse(client.alarms.reset.$post(args, options))
    },
  })
}

export function usePostAlarmsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.reset.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.alarms.reset.$post>,
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
  const mutationDefaults = getPostAlarmsResetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAlarmsSnoozeMutationKey() {
  return ['alarms', '/alarms/snooze', 'POST'] as const
}

export function getPostAlarmsSnoozeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.snooze.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alarms.snooze.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlarmsSnoozeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alarms.snooze.$post>) {
      return parseResponse(client.alarms.snooze.$post(args, options))
    },
  })
}

export function usePostAlarmsSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.snooze.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.alarms.snooze.$post>,
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
  const mutationDefaults = getPostAlarmsSnoozeMutationOptions<TError, TOnMutateResult>(
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

export function getPostDetectorsMutationKey() {
  return ['detectors', '/detectors', 'POST'] as const
}

export function getPostDetectorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detectors.$post>>>>>,
    TError,
    InferRequestType<typeof client.detectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.detectors.$post>) {
      return parseResponse(client.detectors.$post(args, options))
    },
  })
}

export function usePostDetectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detectors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.detectors.$post>,
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
  const mutationDefaults = getPostDetectorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlarmsAlarmModelNameKeyValuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alarms', '/alarms/:alarmModelName/keyValues/', keyArgs] as const
}

export function getAlarmsAlarmModelNameKeyValuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlarmsAlarmModelNameKeyValuesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alarms[':alarmModelName'].keyValues.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlarmsAlarmModelNameKeyValuesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
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
                    (typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']
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
                    (typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAlarmsAlarmModelNameKeyValuesIndexQueryKey>
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
            ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmsAlarmModelNameKeyValuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlarmsAlarmModelNameKeyValuesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alarms[':alarmModelName'].keyValues.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDetectorsDetectorModelNameKeyValuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detectors', '/detectors/:detectorModelName/keyValues/', keyArgs] as const
}

export function getDetectorsDetectorModelNameKeyValuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectorsDetectorModelNameKeyValuesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.detectors[':detectorModelName'].keyValues.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDetectorsDetectorModelNameKeyValuesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']>
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
                    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
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
                    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDetectorsDetectorModelNameKeyValuesIndexQueryKey>
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
              (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorsDetectorModelNameKeyValuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectorsDetectorModelNameKeyValuesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.detectors[':detectorModelName'].keyValues.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlarmsAlarmModelNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alarms', '/alarms/:alarmModelName', keyArgs] as const
}

export function getAlarmsAlarmModelNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlarmsAlarmModelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alarms[':alarmModelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlarmsAlarmModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlarmsAlarmModelNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmsAlarmModelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlarmsAlarmModelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alarms[':alarmModelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDetectorsDetectorModelNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detectors', '/detectors/:detectorModelName', keyArgs] as const
}

export function getDetectorsDetectorModelNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectorsDetectorModelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.detectors[':detectorModelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDetectorsDetectorModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDetectorsDetectorModelNameQueryKey>
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
          Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorsDetectorModelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectorsDetectorModelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.detectors[':detectorModelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
