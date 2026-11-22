import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.disable.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.alarms.disable.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.enable.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.alarms.enable.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.inputs.messages.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.reset.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.alarms.reset.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.snooze.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.alarms.snooze.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detectors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.detectors.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarms', '/alarms/:alarmModelName/keyValues/', keyArgs] as const
}

export function getAlarmsAlarmModelNameKeyValuesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlarmsAlarmModelNameKeyValuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alarms[':alarmModelName'].keyValues.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAlarmsAlarmModelNameKeyValuesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAlarmsAlarmModelNameKeyValuesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAlarmsAlarmModelNameKeyValuesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDetectorsDetectorModelNameKeyValuesIndexQueryKey(
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detectors', '/detectors/:detectorModelName/keyValues/', keyArgs] as const
}

export function getDetectorsDetectorModelNameKeyValuesIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDetectorsDetectorModelNameKeyValuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detectors[':detectorModelName'].keyValues.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDetectorsDetectorModelNameKeyValuesIndexQueryKey>
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
      ...getDetectorsDetectorModelNameKeyValuesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDetectorsDetectorModelNameKeyValuesIndex<
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
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDetectorsDetectorModelNameKeyValuesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAlarmsAlarmModelNameQueryKey(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarms', '/alarms/:alarmModelName', keyArgs] as const
}

export function getAlarmsAlarmModelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlarmsAlarmModelNameQueryKey>
  >({
    queryKey: getAlarmsAlarmModelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alarms[':alarmModelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAlarmsAlarmModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAlarmsAlarmModelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAlarmsAlarmModelNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAlarmsAlarmModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlarmsAlarmModelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAlarmsAlarmModelNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDetectorsDetectorModelNameQueryKey(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detectors', '/detectors/:detectorModelName', keyArgs] as const
}

export function getDetectorsDetectorModelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDetectorsDetectorModelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detectors[':detectorModelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDetectorsDetectorModelNameQueryKey>
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
      ...getDetectorsDetectorModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDetectorsDetectorModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDetectorsDetectorModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
