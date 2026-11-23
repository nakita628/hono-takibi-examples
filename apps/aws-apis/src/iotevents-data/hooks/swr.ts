import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAlarmsAcknowledgeKey() {
  return ['alarms', '/alarms/acknowledge', 'POST'] as const
}

export function usePostAlarmsAcknowledge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.acknowledge.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alarms.acknowledge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmsAcknowledgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alarms.acknowledge.$post> }) =>
        parseResponse(client.alarms.acknowledge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorsDeleteKey() {
  return ['detectors', '/detectors/delete', 'POST'] as const
}

export function usePostDetectorsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detectors.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.detectors.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.detectors.delete.$post> }) =>
        parseResponse(client.detectors.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAlarmsDisableKey() {
  return ['alarms', '/alarms/disable', 'POST'] as const
}

export function usePostAlarmsDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.disable.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alarms.disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmsDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alarms.disable.$post> }) =>
        parseResponse(client.alarms.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAlarmsEnableKey() {
  return ['alarms', '/alarms/enable', 'POST'] as const
}

export function usePostAlarmsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.enable.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alarms.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmsEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alarms.enable.$post> }) =>
        parseResponse(client.alarms.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInputsMessagesKey() {
  return ['inputs', '/inputs/messages', 'POST'] as const
}

export function usePostInputsMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.messages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inputs.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInputsMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inputs.messages.$post> }) =>
        parseResponse(client.inputs.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAlarmsResetKey() {
  return ['alarms', '/alarms/reset', 'POST'] as const
}

export function usePostAlarmsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.reset.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alarms.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alarms.reset.$post> }) =>
        parseResponse(client.alarms.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAlarmsSnoozeKey() {
  return ['alarms', '/alarms/snooze', 'POST'] as const
}

export function usePostAlarmsSnooze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alarms.snooze.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alarms.snooze.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlarmsSnoozeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alarms.snooze.$post> }) =>
        parseResponse(client.alarms.snooze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorsKey() {
  return ['detectors', '/detectors', 'POST'] as const
}

export function usePostDetectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detectors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.detectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.detectors.$post> }) =>
        parseResponse(client.detectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlarmsAlarmModelNameKeyValuesIndexKey(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarms', '/alarms/:alarmModelName/keyValues/', keyArgs] as const
}

export function useGetAlarmsAlarmModelNameKeyValuesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
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
        ? getGetAlarmsAlarmModelNameKeyValuesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alarms[':alarmModelName'].keyValues.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlarmsAlarmModelNameKeyValuesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
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
        ? getGetAlarmsAlarmModelNameKeyValuesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.alarms)[':alarmModelName']['keyValues']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alarms[':alarmModelName'].keyValues.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectorsDetectorModelNameKeyValuesIndexKey(
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detectors', '/detectors/:detectorModelName/keyValues/', keyArgs] as const
}

export function useGetDetectorsDetectorModelNameKeyValuesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDetectorsDetectorModelNameKeyValuesIndexKey(args)
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
                (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
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
          client.detectors[':detectorModelName'].keyValues.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorsDetectorModelNameKeyValuesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDetectorsDetectorModelNameKeyValuesIndexKey(args)
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
                (typeof client.detectors)[':detectorModelName']['keyValues']['index']['$get']
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
          client.detectors[':detectorModelName'].keyValues.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAlarmsAlarmModelNameKey(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alarms', '/alarms/:alarmModelName', keyArgs] as const
}

export function useGetAlarmsAlarmModelName<TError = unknown>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
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
        ? getGetAlarmsAlarmModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alarms[':alarmModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlarmsAlarmModelName<TError = unknown>(
  args: InferRequestType<(typeof client.alarms)[':alarmModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
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
        ? getGetAlarmsAlarmModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.alarms)[':alarmModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alarms[':alarmModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectorsDetectorModelNameKey(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detectors', '/detectors/:detectorModelName', keyArgs] as const
}

export function useGetDetectorsDetectorModelName<TError = unknown>(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
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
        ? getGetDetectorsDetectorModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detectors[':detectorModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorsDetectorModelName<TError = unknown>(
  args: InferRequestType<(typeof client.detectors)[':detectorModelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
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
        ? getGetDetectorsDetectorModelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detectors)[':detectorModelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detectors[':detectorModelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
