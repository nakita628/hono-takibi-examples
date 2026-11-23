import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVmAddDeviceKey() {
  return ['vm.add-device'] as const
}

export function getVmAddDiskKey() {
  return ['vm.add-disk'] as const
}

export function getVmAddFsKey() {
  return ['vm.add-fs'] as const
}

export function getVmAddGenericVhostUserKey() {
  return ['vm.add-generic-vhost-user'] as const
}

export function getVmAddNetKey() {
  return ['vm.add-net'] as const
}

export function getVmAddPmemKey() {
  return ['vm.add-pmem'] as const
}

export function getVmAddUserDeviceKey() {
  return ['vm.add-user-device'] as const
}

export function getVmAddVdpaKey() {
  return ['vm.add-vdpa'] as const
}

export function getVmAddVsockKey() {
  return ['vm.add-vsock'] as const
}

export function getVmBalloonStatsKey() {
  return ['vm.balloon-stats'] as const
}

export function getVmBootKey() {
  return ['vm.boot'] as const
}

export function getVmCancelMigrationKey() {
  return ['vm.cancel-migration'] as const
}

export function getVmCoredumpKey() {
  return ['vm.coredump'] as const
}

export function getVmCountersKey() {
  return ['vm.counters'] as const
}

export function getVmCreateKey() {
  return ['vm.create'] as const
}

export function getVmDeleteKey() {
  return ['vm.delete'] as const
}

export function getVmInfoKey() {
  return ['vm.info'] as const
}

export function getVmNmiKey() {
  return ['vm.nmi'] as const
}

export function getVmPauseKey() {
  return ['vm.pause'] as const
}

export function getVmPowerButtonKey() {
  return ['vm.power-button'] as const
}

export function getVmRebootKey() {
  return ['vm.reboot'] as const
}

export function getVmReceiveMigrationKey() {
  return ['vm.receive-migration'] as const
}

export function getVmRemoveDeviceKey() {
  return ['vm.remove-device'] as const
}

export function getVmResizeKey() {
  return ['vm.resize'] as const
}

export function getVmResizeDiskKey() {
  return ['vm.resize-disk'] as const
}

export function getVmResizeZoneKey() {
  return ['vm.resize-zone'] as const
}

export function getVmRestoreKey() {
  return ['vm.restore'] as const
}

export function getVmResumeKey() {
  return ['vm.resume'] as const
}

export function getVmSendMigrationKey() {
  return ['vm.send-migration'] as const
}

export function getVmShutdownKey() {
  return ['vm.shutdown'] as const
}

export function getVmSnapshotKey() {
  return ['vm.snapshot'] as const
}

export function getVmmPingKey() {
  return ['vmm.ping'] as const
}

export function getVmmShutdownKey() {
  return ['vmm.shutdown'] as const
}

export function getGetVmmPingKey() {
  return ['vmm.ping', '/vmm.ping'] as const
}

export function useGetVmmPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmmPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vmm.ping'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVmmPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmmPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vmm.ping'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVmmShutdownKey() {
  return ['vmm.shutdown', '/vmm.shutdown', 'PUT'] as const
}

export function usePutVmmShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.shutdown']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmmShutdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vmm.shutdown'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVmInfoKey() {
  return ['vm.info', '/vm.info'] as const
}

export function useGetVmInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vm.info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVmInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vm.info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVmCountersKey() {
  return ['vm.counters', '/vm.counters'] as const
}

export function useGetVmCounters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmCountersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vm.counters'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVmCounters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmCountersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vm.counters'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVmBalloonStatsKey() {
  return ['vm.balloon-stats', '/vm.balloon-stats'] as const
}

export function useGetVmBalloonStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmBalloonStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vm.balloon-stats'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVmBalloonStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVmBalloonStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['vm.balloon-stats'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVmCreateKey() {
  return ['vm.create', '/vm.create', 'PUT'] as const
}

export function usePutVmCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.create']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.create']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.create']['$put']> }) =>
        parseResponse(client['vm.create'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmDeleteKey() {
  return ['vm.delete', '/vm.delete', 'PUT'] as const
}

export function usePutVmDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.delete']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.delete'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmBootKey() {
  return ['vm.boot', '/vm.boot', 'PUT'] as const
}

export function usePutVmBoot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.boot']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmBootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.boot'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmPauseKey() {
  return ['vm.pause', '/vm.pause', 'PUT'] as const
}

export function usePutVmPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.pause']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.pause'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmResumeKey() {
  return ['vm.resume', '/vm.resume', 'PUT'] as const
}

export function usePutVmResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resume']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.resume'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmShutdownKey() {
  return ['vm.shutdown', '/vm.shutdown', 'PUT'] as const
}

export function usePutVmShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.shutdown']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmShutdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.shutdown'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmRebootKey() {
  return ['vm.reboot', '/vm.reboot', 'PUT'] as const
}

export function usePutVmReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.reboot']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmRebootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.reboot'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmPowerButtonKey() {
  return ['vm.power-button', '/vm.power-button', 'PUT'] as const
}

export function usePutVmPowerButton<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.power-button']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmPowerButtonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.power-button'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmResizeKey() {
  return ['vm.resize', '/vm.resize', 'PUT'] as const
}

export function usePutVmResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.resize']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.resize']['$put']> }) =>
        parseResponse(client['vm.resize'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmResizeDiskKey() {
  return ['vm.resize-disk', '/vm.resize-disk', 'PUT'] as const
}

export function usePutVmResizeDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize-disk']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.resize-disk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmResizeDiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.resize-disk']['$put']> },
      ) => parseResponse(client['vm.resize-disk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmResizeZoneKey() {
  return ['vm.resize-zone', '/vm.resize-zone', 'PUT'] as const
}

export function usePutVmResizeZone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize-zone']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.resize-zone']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmResizeZoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.resize-zone']['$put']> },
      ) => parseResponse(client['vm.resize-zone'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddDeviceKey() {
  return ['vm.add-device', '/vm.add-device', 'PUT'] as const
}

export function usePutVmAddDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-device']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-device']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.add-device']['$put']> },
      ) => parseResponse(client['vm.add-device'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmRemoveDeviceKey() {
  return ['vm.remove-device', '/vm.remove-device', 'PUT'] as const
}

export function usePutVmRemoveDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.remove-device']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.remove-device']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmRemoveDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.remove-device']['$put']> },
      ) => parseResponse(client['vm.remove-device'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddDiskKey() {
  return ['vm.add-disk', '/vm.add-disk', 'PUT'] as const
}

export function usePutVmAddDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-disk']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-disk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddDiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.add-disk']['$put']> }) =>
        parseResponse(client['vm.add-disk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddFsKey() {
  return ['vm.add-fs', '/vm.add-fs', 'PUT'] as const
}

export function usePutVmAddFs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-fs']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-fs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddFsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.add-fs']['$put']> }) =>
        parseResponse(client['vm.add-fs'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddGenericVhostUserKey() {
  return ['vm.add-generic-vhost-user', '/vm.add-generic-vhost-user', 'PUT'] as const
}

export function usePutVmAddGenericVhostUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['vm.add-generic-vhost-user']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-generic-vhost-user']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddGenericVhostUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.add-generic-vhost-user']['$put']> },
      ) => parseResponse(client['vm.add-generic-vhost-user'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddPmemKey() {
  return ['vm.add-pmem', '/vm.add-pmem', 'PUT'] as const
}

export function usePutVmAddPmem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-pmem']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-pmem']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddPmemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.add-pmem']['$put']> }) =>
        parseResponse(client['vm.add-pmem'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddNetKey() {
  return ['vm.add-net', '/vm.add-net', 'PUT'] as const
}

export function usePutVmAddNet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-net']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-net']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddNetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.add-net']['$put']> }) =>
        parseResponse(client['vm.add-net'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddVsockKey() {
  return ['vm.add-vsock', '/vm.add-vsock', 'PUT'] as const
}

export function usePutVmAddVsock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-vsock']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-vsock']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddVsockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.add-vsock']['$put']> }) =>
        parseResponse(client['vm.add-vsock'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddVdpaKey() {
  return ['vm.add-vdpa', '/vm.add-vdpa', 'PUT'] as const
}

export function usePutVmAddVdpa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-vdpa']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-vdpa']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddVdpaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.add-vdpa']['$put']> }) =>
        parseResponse(client['vm.add-vdpa'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmAddUserDeviceKey() {
  return ['vm.add-user-device', '/vm.add-user-device', 'PUT'] as const
}

export function usePutVmAddUserDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-user-device']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.add-user-device']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmAddUserDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.add-user-device']['$put']> },
      ) => parseResponse(client['vm.add-user-device'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmSnapshotKey() {
  return ['vm.snapshot', '/vm.snapshot', 'PUT'] as const
}

export function usePutVmSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.snapshot']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.snapshot']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.snapshot']['$put']> }) =>
        parseResponse(client['vm.snapshot'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmCoredumpKey() {
  return ['vm.coredump', '/vm.coredump', 'PUT'] as const
}

export function usePutVmCoredump<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.coredump']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.coredump']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmCoredumpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.coredump']['$put']> }) =>
        parseResponse(client['vm.coredump'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmNmiKey() {
  return ['vm.nmi', '/vm.nmi', 'PUT'] as const
}

export function usePutVmNmi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.nmi']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmNmiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.nmi'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmRestoreKey() {
  return ['vm.restore', '/vm.restore', 'PUT'] as const
}

export function usePutVmRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.restore']['$put']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.restore']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['vm.restore']['$put']> }) =>
        parseResponse(client['vm.restore'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmReceiveMigrationKey() {
  return ['vm.receive-migration', '/vm.receive-migration', 'PUT'] as const
}

export function usePutVmReceiveMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.receive-migration']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.receive-migration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmReceiveMigrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.receive-migration']['$put']> },
      ) => parseResponse(client['vm.receive-migration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmSendMigrationKey() {
  return ['vm.send-migration', '/vm.send-migration', 'PUT'] as const
}

export function usePutVmSendMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.send-migration']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['vm.send-migration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmSendMigrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['vm.send-migration']['$put']> },
      ) => parseResponse(client['vm.send-migration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVmCancelMigrationKey() {
  return ['vm.cancel-migration', '/vm.cancel-migration', 'PUT'] as const
}

export function usePutVmCancelMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.cancel-migration']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVmCancelMigrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['vm.cancel-migration'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
