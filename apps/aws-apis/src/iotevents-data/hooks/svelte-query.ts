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

export function createPostAlarmsAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlarmsAcknowledgeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDetectorsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlarmsDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlarmsDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlarmsEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlarmsEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInputsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInputsMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlarmsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlarmsResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlarmsSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlarmsSnoozeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDetectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAlarmsAlarmModelNameKeyValuesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAlarmsAlarmModelNameKeyValuesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDetectorsDetectorModelNameKeyValuesIndex<
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
  args: () => InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDetectorsDetectorModelNameKeyValuesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAlarmsAlarmModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAlarmsAlarmModelNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDetectorsDetectorModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDetectorsDetectorModelNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
