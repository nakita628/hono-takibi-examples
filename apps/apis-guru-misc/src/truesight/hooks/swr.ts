import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHardwareKey() {
  return ['hardware'] as const
}

export function getPostHardwareActionsDeviceIdCollectNowKey() {
  return ['hardware', '/hardware/actions/:deviceId/collect-now', 'POST'] as const
}

export function usePostHardwareActionsDeviceIdCollectNow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['collect-now']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHardwareActionsDeviceIdCollectNowKey()
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
            (typeof client.hardware.actions)[':deviceId']['collect-now']['$post']
          >
        },
      ) =>
        parseResponse(
          client.hardware.actions[':deviceId']['collect-now'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostHardwareActionsDeviceIdRediscoverKey() {
  return ['hardware', '/hardware/actions/:deviceId/rediscover', 'POST'] as const
}

export function usePostHardwareActionsDeviceIdRediscover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['rediscover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHardwareActionsDeviceIdRediscoverKey()
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
            (typeof client.hardware.actions)[':deviceId']['rediscover']['$post']
          >
        },
      ) => parseResponse(client.hardware.actions[':deviceId'].rediscover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHardwareActionsDeviceIdReinitializeKey() {
  return ['hardware', '/hardware/actions/:deviceId/reinitialize', 'POST'] as const
}

export function usePostHardwareActionsDeviceIdReinitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHardwareActionsDeviceIdReinitializeKey()
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
            (typeof client.hardware.actions)[':deviceId']['reinitialize']['$post']
          >
        },
      ) =>
        parseResponse(client.hardware.actions[':deviceId'].reinitialize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHardwareActionsDeviceIdRemoveKey() {
  return ['hardware', '/hardware/actions/:deviceId/remove', 'POST'] as const
}

export function usePostHardwareActionsDeviceIdRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHardwareActionsDeviceIdRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.hardware.actions)[':deviceId']['remove']['$post']>
        },
      ) => parseResponse(client.hardware.actions[':deviceId'].remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHardwareActionsDeviceIdResetErrorCountKey() {
  return ['hardware', '/hardware/actions/:deviceId/reset-error-count', 'POST'] as const
}

export function usePostHardwareActionsDeviceIdResetErrorCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHardwareActionsDeviceIdResetErrorCountKey()
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
            (typeof client.hardware.actions)[':deviceId']['reset-error-count']['$post']
          >
        },
      ) =>
        parseResponse(
          client.hardware.actions[':deviceId']['reset-error-count'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHardwareApplicationsKey(
  args: InferRequestType<typeof client.hardware.applications.$get>,
) {
  return ['hardware', '/hardware/applications', args] as const
}

export function useGetHardwareApplications<TError = unknown>(
  args: InferRequestType<typeof client.hardware.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
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
        ? getGetHardwareApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareApplications<TError = unknown>(
  args: InferRequestType<typeof client.hardware.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
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
        ? getGetHardwareApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hardware.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareApplicationsApplicationIdKey(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
) {
  return ['hardware', '/hardware/applications/:applicationId', args] as const
}

export function useGetHardwareApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
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
        ? getGetHardwareApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware.applications[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.applications)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
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
        ? getGetHardwareApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.applications)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware.applications[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDeviceMonitorsDeviceIdKey(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
) {
  return ['hardware', '/hardware/device-monitors/:deviceId', args] as const
}

export function useGetHardwareDeviceMonitorsDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
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
        ? getGetHardwareDeviceMonitorsDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware['device-monitors'][':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDeviceMonitorsDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
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
        ? getGetHardwareDeviceMonitorsDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['device-monitors'][':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware['device-monitors'][':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDevicesKey(
  args: InferRequestType<typeof client.hardware.devices.$get>,
) {
  return ['hardware', '/hardware/devices', args] as const
}

export function useGetHardwareDevices<TError = unknown>(
  args: InferRequestType<typeof client.hardware.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
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
        ? getGetHardwareDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDevices<TError = unknown>(
  args: InferRequestType<typeof client.hardware.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
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
        ? getGetHardwareDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDevicesSummaryKey() {
  return ['hardware', '/hardware/devices-summary'] as const
}

export function useGetHardwareDevicesSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
        >
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
        ? getGetHardwareDevicesSummaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware['devices-summary'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDevicesSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
        >
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
        ? getGetHardwareDevicesSummaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['devices-summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware['devices-summary'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDevicesDeviceIdKey(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
) {
  return ['hardware', '/hardware/devices/:deviceId', args] as const
}

export function useGetHardwareDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
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
        ? getGetHardwareDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDevicesDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
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
        ? getGetHardwareDevicesDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.devices[':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDevicesDeviceIdAgentKey(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
) {
  return ['hardware', '/hardware/devices/:deviceId/agent', args] as const
}

export function useGetHardwareDevicesDeviceIdAgent<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
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
        ? getGetHardwareDevicesDeviceIdAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware.devices[':deviceId'].agent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDevicesDeviceIdAgent<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
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
        ? getGetHardwareDevicesDeviceIdAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.devices)[':deviceId']['agent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware.devices[':deviceId'].agent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDevicesDeviceIdAgentDevicesKey(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
) {
  return ['hardware', '/hardware/devices/:deviceId/agent-devices', args] as const
}

export function useGetHardwareDevicesDeviceIdAgentDevices<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
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
        ? getGetHardwareDevicesDeviceIdAgentDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hardware.devices[':deviceId']['agent-devices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDevicesDeviceIdAgentDevices<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
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
        ? getGetHardwareDevicesDeviceIdAgentDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['agent-devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hardware.devices[':deviceId']['agent-devices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareDevicesDeviceIdParameterHistoryKey(
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
) {
  return ['hardware', '/hardware/devices/:deviceId/parameter-history', args] as const
}

export function useGetHardwareDevicesDeviceIdParameterHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
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
        ? getGetHardwareDevicesDeviceIdParameterHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hardware.devices[':deviceId']['parameter-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareDevicesDeviceIdParameterHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
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
        ? getGetHardwareDevicesDeviceIdParameterHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hardware.devices)[':deviceId']['parameter-history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.hardware.devices[':deviceId']['parameter-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareEnergyUsageDeviceIdKey(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
) {
  return ['hardware', '/hardware/energy-usage/:deviceId', args] as const
}

export function useGetHardwareEnergyUsageDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
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
        ? getGetHardwareEnergyUsageDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware['energy-usage'][':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareEnergyUsageDeviceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
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
        ? getGetHardwareEnergyUsageDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['energy-usage'][':deviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware['energy-usage'][':deviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareGroupsKey(
  args: InferRequestType<typeof client.hardware.groups.$get>,
) {
  return ['hardware', '/hardware/groups', args] as const
}

export function useGetHardwareGroups<TError = unknown>(
  args: InferRequestType<typeof client.hardware.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHardwareGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareGroups<TError = unknown>(
  args: InferRequestType<typeof client.hardware.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHardwareGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareGroupsGroupIdKey(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
) {
  return ['hardware', '/hardware/groups/:groupId', args] as const
}

export function useGetHardwareGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
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
        ? getGetHardwareGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
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
        ? getGetHardwareGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutHardwareGroupsGroupIdKey() {
  return ['hardware', '/hardware/groups/:groupId', 'PUT'] as const
}

export function usePutHardwareGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hardware.groups)[':groupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hardware.groups)[':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutHardwareGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hardware.groups)[':groupId']['$put']> },
      ) => parseResponse(client.hardware.groups[':groupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHardwareHeatingMarginDevicesKey(
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
) {
  return ['hardware', '/hardware/heating-margin-devices', args] as const
}

export function useGetHardwareHeatingMarginDevices<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
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
        ? getGetHardwareHeatingMarginDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware['heating-margin-devices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareHeatingMarginDevices<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['heating-margin-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
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
        ? getGetHardwareHeatingMarginDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['heating-margin-devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hardware['heating-margin-devices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareHistoryKey(
  args: InferRequestType<typeof client.hardware.history.$get>,
) {
  return ['hardware', '/hardware/history', args] as const
}

export function useGetHardwareHistory<TError = unknown>(
  args: InferRequestType<typeof client.hardware.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
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
        ? getGetHardwareHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareHistory<TError = unknown>(
  args: InferRequestType<typeof client.hardware.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
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
        ? getGetHardwareHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareSearchDevicesKey(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
) {
  return ['hardware', '/hardware/search-devices', args] as const
}

export function useGetHardwareSearchDevices<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
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
        ? getGetHardwareSearchDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware['search-devices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareSearchDevices<TError = unknown>(
  args: InferRequestType<(typeof client.hardware)['search-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
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
        ? getGetHardwareSearchDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware)['search-devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware['search-devices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareServicesKey(
  args: InferRequestType<typeof client.hardware.services.$get>,
) {
  return ['hardware', '/hardware/services', args] as const
}

export function useGetHardwareServices<TError = unknown>(
  args: InferRequestType<typeof client.hardware.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
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
        ? getGetHardwareServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareServices<TError = unknown>(
  args: InferRequestType<typeof client.hardware.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
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
        ? getGetHardwareServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareServicesServiceIdKey(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
) {
  return ['hardware', '/hardware/services/:serviceId', args] as const
}

export function useGetHardwareServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
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
        ? getGetHardwareServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.hardware.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
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
        ? getGetHardwareServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hardware.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
