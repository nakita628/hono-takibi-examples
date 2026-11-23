import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getVmmPingQueryKey() {
  return ['vmm.ping', '/vmm.ping'] as const
}

export function getVmmPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVmmPingQueryKey>
  >({
    queryKey: getVmmPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['vmm.ping'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVmmPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.ping']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVmmPingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVmmPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutVmmShutdownMutationKey() {
  return ['vmm.shutdown', '/vmm.shutdown', 'PUT'] as const
}

export function getPutVmmShutdownMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.shutdown']['$put']>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmmShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client['vmm.shutdown'].$put(undefined, options))
    },
  })
}

export function createPutVmmShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vmm.shutdown']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmmShutdownMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVmInfoQueryKey() {
  return ['vm.info', '/vm.info'] as const
}

export function getVmInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVmInfoQueryKey>
  >({
    queryKey: getVmInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['vm.info'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVmInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.info']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVmInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVmInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getVmCountersQueryKey() {
  return ['vm.counters', '/vm.counters'] as const
}

export function getVmCountersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVmCountersQueryKey>
  >({
    queryKey: getVmCountersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['vm.counters'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVmCounters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.counters']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVmCountersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVmCountersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getVmBalloonStatsQueryKey() {
  return ['vm.balloon-stats', '/vm.balloon-stats'] as const
}

export function getVmBalloonStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVmBalloonStatsQueryKey>
  >({
    queryKey: getVmBalloonStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['vm.balloon-stats'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVmBalloonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.balloon-stats']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVmBalloonStatsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVmBalloonStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutVmCreateMutationKey() {
  return ['vm.create', '/vm.create', 'PUT'] as const
}

export function getPutVmCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.create']['$put']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.create']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.create']['$put']>) {
      return parseResponse(client['vm.create'].$put(args, options))
    },
  })
}

export function createPutVmCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.create']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.create']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmDeleteMutationKey() {
  return ['vm.delete', '/vm.delete', 'PUT'] as const
}

export function getPutVmDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.delete']['$put']>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.delete'].$put(undefined, options))
    },
  })
}

export function createPutVmDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.delete']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmBootMutationKey() {
  return ['vm.boot', '/vm.boot', 'PUT'] as const
}

export function getPutVmBootMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.boot']['$put']>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmBootMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.boot'].$put(undefined, options))
    },
  })
}

export function createPutVmBoot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.boot']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmBootMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmPauseMutationKey() {
  return ['vm.pause', '/vm.pause', 'PUT'] as const
}

export function getPutVmPauseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.pause']['$put']>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmPauseMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.pause'].$put(undefined, options))
    },
  })
}

export function createPutVmPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.pause']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmPauseMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmResumeMutationKey() {
  return ['vm.resume', '/vm.resume', 'PUT'] as const
}

export function getPutVmResumeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resume']['$put']>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmResumeMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.resume'].$put(undefined, options))
    },
  })
}

export function createPutVmResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resume']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmResumeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmShutdownMutationKey() {
  return ['vm.shutdown', '/vm.shutdown', 'PUT'] as const
}

export function getPutVmShutdownMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.shutdown']['$put']>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.shutdown'].$put(undefined, options))
    },
  })
}

export function createPutVmShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.shutdown']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmShutdownMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmRebootMutationKey() {
  return ['vm.reboot', '/vm.reboot', 'PUT'] as const
}

export function getPutVmRebootMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.reboot']['$put']>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmRebootMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.reboot'].$put(undefined, options))
    },
  })
}

export function createPutVmReboot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.reboot']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmRebootMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmPowerButtonMutationKey() {
  return ['vm.power-button', '/vm.power-button', 'PUT'] as const
}

export function getPutVmPowerButtonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.power-button']['$put']>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmPowerButtonMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.power-button'].$put(undefined, options))
    },
  })
}

export function createPutVmPowerButton<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.power-button']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmPowerButtonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmResizeMutationKey() {
  return ['vm.resize', '/vm.resize', 'PUT'] as const
}

export function getPutVmResizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize']['$put']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.resize']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmResizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.resize']['$put']>) {
      return parseResponse(client['vm.resize'].$put(args, options))
    },
  })
}

export function createPutVmResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.resize']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmResizeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmResizeDiskMutationKey() {
  return ['vm.resize-disk', '/vm.resize-disk', 'PUT'] as const
}

export function getPutVmResizeDiskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize-disk']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.resize-disk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmResizeDiskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.resize-disk']['$put']>) {
      return parseResponse(client['vm.resize-disk'].$put(args, options))
    },
  })
}

export function createPutVmResizeDisk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize-disk']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.resize-disk']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmResizeDiskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmResizeZoneMutationKey() {
  return ['vm.resize-zone', '/vm.resize-zone', 'PUT'] as const
}

export function getPutVmResizeZoneMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize-zone']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.resize-zone']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmResizeZoneMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.resize-zone']['$put']>) {
      return parseResponse(client['vm.resize-zone'].$put(args, options))
    },
  })
}

export function createPutVmResizeZone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.resize-zone']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.resize-zone']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmResizeZoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddDeviceMutationKey() {
  return ['vm.add-device', '/vm.add-device', 'PUT'] as const
}

export function getPutVmAddDeviceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-device']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-device']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddDeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-device']['$put']>) {
      return parseResponse(client['vm.add-device'].$put(args, options))
    },
  })
}

export function createPutVmAddDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-device']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-device']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmRemoveDeviceMutationKey() {
  return ['vm.remove-device', '/vm.remove-device', 'PUT'] as const
}

export function getPutVmRemoveDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.remove-device']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.remove-device']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmRemoveDeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.remove-device']['$put']>) {
      return parseResponse(client['vm.remove-device'].$put(args, options))
    },
  })
}

export function createPutVmRemoveDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.remove-device']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.remove-device']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmRemoveDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddDiskMutationKey() {
  return ['vm.add-disk', '/vm.add-disk', 'PUT'] as const
}

export function getPutVmAddDiskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-disk']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-disk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddDiskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-disk']['$put']>) {
      return parseResponse(client['vm.add-disk'].$put(args, options))
    },
  })
}

export function createPutVmAddDisk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-disk']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-disk']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddDiskMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddFsMutationKey() {
  return ['vm.add-fs', '/vm.add-fs', 'PUT'] as const
}

export function getPutVmAddFsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-fs']['$put']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-fs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddFsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-fs']['$put']>) {
      return parseResponse(client['vm.add-fs'].$put(args, options))
    },
  })
}

export function createPutVmAddFs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-fs']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-fs']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddFsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddGenericVhostUserMutationKey() {
  return ['vm.add-generic-vhost-user', '/vm.add-generic-vhost-user', 'PUT'] as const
}

export function getPutVmAddGenericVhostUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['vm.add-generic-vhost-user']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-generic-vhost-user']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddGenericVhostUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-generic-vhost-user']['$put']>) {
      return parseResponse(client['vm.add-generic-vhost-user'].$put(args, options))
    },
  })
}

export function createPutVmAddGenericVhostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.add-generic-vhost-user']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-generic-vhost-user']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddGenericVhostUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddPmemMutationKey() {
  return ['vm.add-pmem', '/vm.add-pmem', 'PUT'] as const
}

export function getPutVmAddPmemMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-pmem']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-pmem']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddPmemMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-pmem']['$put']>) {
      return parseResponse(client['vm.add-pmem'].$put(args, options))
    },
  })
}

export function createPutVmAddPmem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-pmem']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-pmem']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddPmemMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddNetMutationKey() {
  return ['vm.add-net', '/vm.add-net', 'PUT'] as const
}

export function getPutVmAddNetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-net']['$put']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-net']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddNetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-net']['$put']>) {
      return parseResponse(client['vm.add-net'].$put(args, options))
    },
  })
}

export function createPutVmAddNet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-net']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-net']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddNetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddVsockMutationKey() {
  return ['vm.add-vsock', '/vm.add-vsock', 'PUT'] as const
}

export function getPutVmAddVsockMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-vsock']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-vsock']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddVsockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-vsock']['$put']>) {
      return parseResponse(client['vm.add-vsock'].$put(args, options))
    },
  })
}

export function createPutVmAddVsock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-vsock']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-vsock']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddVsockMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddVdpaMutationKey() {
  return ['vm.add-vdpa', '/vm.add-vdpa', 'PUT'] as const
}

export function getPutVmAddVdpaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-vdpa']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-vdpa']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddVdpaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-vdpa']['$put']>) {
      return parseResponse(client['vm.add-vdpa'].$put(args, options))
    },
  })
}

export function createPutVmAddVdpa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-vdpa']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-vdpa']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddVdpaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmAddUserDeviceMutationKey() {
  return ['vm.add-user-device', '/vm.add-user-device', 'PUT'] as const
}

export function getPutVmAddUserDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.add-user-device']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.add-user-device']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmAddUserDeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.add-user-device']['$put']>) {
      return parseResponse(client['vm.add-user-device'].$put(args, options))
    },
  })
}

export function createPutVmAddUserDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.add-user-device']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.add-user-device']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmAddUserDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmSnapshotMutationKey() {
  return ['vm.snapshot', '/vm.snapshot', 'PUT'] as const
}

export function getPutVmSnapshotMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.snapshot']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.snapshot']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.snapshot']['$put']>) {
      return parseResponse(client['vm.snapshot'].$put(args, options))
    },
  })
}

export function createPutVmSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.snapshot']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.snapshot']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmSnapshotMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmCoredumpMutationKey() {
  return ['vm.coredump', '/vm.coredump', 'PUT'] as const
}

export function getPutVmCoredumpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.coredump']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.coredump']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmCoredumpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.coredump']['$put']>) {
      return parseResponse(client['vm.coredump'].$put(args, options))
    },
  })
}

export function createPutVmCoredump<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.coredump']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.coredump']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmCoredumpMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmNmiMutationKey() {
  return ['vm.nmi', '/vm.nmi', 'PUT'] as const
}

export function getPutVmNmiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.nmi']['$put']>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmNmiMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.nmi'].$put(undefined, options))
    },
  })
}

export function createPutVmNmi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.nmi']['$put']>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmNmiMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmRestoreMutationKey() {
  return ['vm.restore', '/vm.restore', 'PUT'] as const
}

export function getPutVmRestoreMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.restore']['$put']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.restore']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.restore']['$put']>) {
      return parseResponse(client['vm.restore'].$put(args, options))
    },
  })
}

export function createPutVmRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.restore']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.restore']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmRestoreMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmReceiveMigrationMutationKey() {
  return ['vm.receive-migration', '/vm.receive-migration', 'PUT'] as const
}

export function getPutVmReceiveMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.receive-migration']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.receive-migration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmReceiveMigrationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.receive-migration']['$put']>) {
      return parseResponse(client['vm.receive-migration'].$put(args, options))
    },
  })
}

export function createPutVmReceiveMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.receive-migration']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.receive-migration']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmReceiveMigrationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmSendMigrationMutationKey() {
  return ['vm.send-migration', '/vm.send-migration', 'PUT'] as const
}

export function getPutVmSendMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.send-migration']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['vm.send-migration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVmSendMigrationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['vm.send-migration']['$put']>) {
      return parseResponse(client['vm.send-migration'].$put(args, options))
    },
  })
}

export function createPutVmSendMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.send-migration']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['vm.send-migration']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmSendMigrationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVmCancelMigrationMutationKey() {
  return ['vm.cancel-migration', '/vm.cancel-migration', 'PUT'] as const
}

export function getPutVmCancelMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['vm.cancel-migration']['$put']>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVmCancelMigrationMutationKey(),
    async mutationFn() {
      return parseResponse(client['vm.cancel-migration'].$put(undefined, options))
    },
  })
}

export function createPutVmCancelMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['vm.cancel-migration']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVmCancelMigrationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
