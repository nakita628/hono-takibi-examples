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

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getPostV1alpha1DatacenterConnectorUpgradeApplianceMutationKey() {
  return ['v1alpha1', '/v1alpha1/:datacenterConnector:upgradeAppliance', 'POST'] as const
}

export function getPostV1alpha1DatacenterConnectorUpgradeApplianceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1alpha1)[':datacenterConnector:upgradeAppliance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':datacenterConnector:upgradeAppliance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1DatacenterConnectorUpgradeApplianceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1alpha1)[':datacenterConnector:upgradeAppliance']['$post']
      >,
    ) {
      return parseResponse(
        client.v1alpha1[':datacenterConnector:upgradeAppliance'].$post(args, options),
      )
    },
  })
}

export function usePostV1alpha1DatacenterConnectorUpgradeAppliance<
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
                  ReturnType<
                    (typeof client.v1alpha1)[':datacenterConnector:upgradeAppliance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1alpha1)[':datacenterConnector:upgradeAppliance']['$post']
          >,
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
  const mutationDefaults = getPostV1alpha1DatacenterConnectorUpgradeApplianceMutationOptions<
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

export function getPostV1alpha1GroupAddGroupMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:group:addGroupMigration', 'POST'] as const
}

export function getPostV1alpha1GroupAddGroupMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':group:addGroupMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':group:addGroupMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1GroupAddGroupMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':group:addGroupMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':group:addGroupMigration'].$post(args, options))
    },
  })
}

export function usePostV1alpha1GroupAddGroupMigration<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':group:addGroupMigration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':group:addGroupMigration']['$post']>,
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
  const mutationDefaults = getPostV1alpha1GroupAddGroupMigrationMutationOptions<
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

export function getPostV1alpha1GroupRemoveGroupMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:group:removeGroupMigration', 'POST'] as const
}

export function getPostV1alpha1GroupRemoveGroupMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':group:removeGroupMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':group:removeGroupMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1GroupRemoveGroupMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':group:removeGroupMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':group:removeGroupMigration'].$post(args, options))
    },
  })
}

export function usePostV1alpha1GroupRemoveGroupMigration<
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
                  ReturnType<(typeof client.v1alpha1)[':group:removeGroupMigration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':group:removeGroupMigration']['$post']>,
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
  const mutationDefaults = getPostV1alpha1GroupRemoveGroupMigrationMutationOptions<
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

export function getPostV1alpha1MigratingVmFinalizeMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:migratingVm:finalizeMigration', 'POST'] as const
}

export function getPostV1alpha1MigratingVmFinalizeMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':migratingVm:finalizeMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':migratingVm:finalizeMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1MigratingVmFinalizeMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:finalizeMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':migratingVm:finalizeMigration'].$post(args, options))
    },
  })
}

export function usePostV1alpha1MigratingVmFinalizeMigration<
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
                  ReturnType<(typeof client.v1alpha1)[':migratingVm:finalizeMigration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':migratingVm:finalizeMigration']['$post']>,
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
  const mutationDefaults = getPostV1alpha1MigratingVmFinalizeMigrationMutationOptions<
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

export function getPostV1alpha1MigratingVmPauseMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:migratingVm:pauseMigration', 'POST'] as const
}

export function getPostV1alpha1MigratingVmPauseMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':migratingVm:pauseMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':migratingVm:pauseMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1MigratingVmPauseMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:pauseMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':migratingVm:pauseMigration'].$post(args, options))
    },
  })
}

export function usePostV1alpha1MigratingVmPauseMigration<
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
                  ReturnType<(typeof client.v1alpha1)[':migratingVm:pauseMigration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':migratingVm:pauseMigration']['$post']>,
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
  const mutationDefaults = getPostV1alpha1MigratingVmPauseMigrationMutationOptions<
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

export function getPostV1alpha1MigratingVmResumeMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:migratingVm:resumeMigration', 'POST'] as const
}

export function getPostV1alpha1MigratingVmResumeMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':migratingVm:resumeMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':migratingVm:resumeMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1MigratingVmResumeMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:resumeMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':migratingVm:resumeMigration'].$post(args, options))
    },
  })
}

export function usePostV1alpha1MigratingVmResumeMigration<
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
                  ReturnType<(typeof client.v1alpha1)[':migratingVm:resumeMigration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':migratingVm:resumeMigration']['$post']>,
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
  const mutationDefaults = getPostV1alpha1MigratingVmResumeMigrationMutationOptions<
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

export function getPostV1alpha1MigratingVmStartMigrationMutationKey() {
  return ['v1alpha1', '/v1alpha1/:migratingVm:startMigration', 'POST'] as const
}

export function getPostV1alpha1MigratingVmStartMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':migratingVm:startMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':migratingVm:startMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1MigratingVmStartMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:startMigration']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':migratingVm:startMigration'].$post(args, options))
    },
  })
}

export function usePostV1alpha1MigratingVmStartMigration<
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
                  ReturnType<(typeof client.v1alpha1)[':migratingVm:startMigration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':migratingVm:startMigration']['$post']>,
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
  const mutationDefaults = getPostV1alpha1MigratingVmStartMigrationMutationOptions<
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

export function getV1alpha1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name', toValue(args)] as const
}

export function getV1alpha1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1alpha1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function getDeleteV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>) {
      return parseResponse(client.v1alpha1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1alpha1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function getPatchV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>) {
      return parseResponse(client.v1alpha1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1alpha1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name/locations', toValue(args)] as const
}

export function getV1alpha1NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1NameLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1alpha1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name/operations', toValue(args)] as const
}

export function getV1alpha1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1NameCancelMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:cancel', 'POST'] as const
}

export function getPostV1alpha1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1alpha1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1alpha1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentCloneJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/cloneJobs', toValue(args)] as const
}

export function getV1alpha1ParentCloneJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentCloneJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].cloneJobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentCloneJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentCloneJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentCloneJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentCloneJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].cloneJobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentCloneJobsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/cloneJobs', 'POST'] as const
}

export function getPostV1alpha1ParentCloneJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentCloneJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].cloneJobs.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentCloneJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentCloneJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentCutoverJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/cutoverJobs', toValue(args)] as const
}

export function getV1alpha1ParentCutoverJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentCutoverJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].cutoverJobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentCutoverJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentCutoverJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentCutoverJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentCutoverJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].cutoverJobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentCutoverJobsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/cutoverJobs', 'POST'] as const
}

export function getPostV1alpha1ParentCutoverJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentCutoverJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].cutoverJobs.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentCutoverJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentCutoverJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentDatacenterConnectorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/datacenterConnectors', toValue(args)] as const
}

export function getV1alpha1ParentDatacenterConnectorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentDatacenterConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].datacenterConnectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentDatacenterConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentDatacenterConnectorsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentDatacenterConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentDatacenterConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].datacenterConnectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentDatacenterConnectorsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/datacenterConnectors', 'POST'] as const
}

export function getPostV1alpha1ParentDatacenterConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentDatacenterConnectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].datacenterConnectors.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentDatacenterConnectors<
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentDatacenterConnectorsMutationOptions<
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

export function getV1alpha1ParentGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/groups', toValue(args)] as const
}

export function getV1alpha1ParentGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentGroupsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/groups', 'POST'] as const
}

export function getPostV1alpha1ParentGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].groups.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentMigratingVmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/migratingVms', toValue(args)] as const
}

export function getV1alpha1ParentMigratingVmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentMigratingVmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].migratingVms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentMigratingVms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentMigratingVmsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentMigratingVmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentMigratingVmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].migratingVms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentMigratingVmsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/migratingVms', 'POST'] as const
}

export function getPostV1alpha1ParentMigratingVmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['migratingVms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentMigratingVmsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].migratingVms.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentMigratingVms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['migratingVms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentMigratingVmsMutationOptions<
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

export function getV1alpha1ParentReplicationCyclesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/replicationCycles', toValue(args)] as const
}

export function getV1alpha1ParentReplicationCyclesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentReplicationCyclesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].replicationCycles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentReplicationCycles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentReplicationCyclesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentReplicationCyclesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentReplicationCyclesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].replicationCycles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1alpha1ParentSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/sources', toValue(args)] as const
}

export function getV1alpha1ParentSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentSourcesMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/sources', 'POST'] as const
}

export function getPostV1alpha1ParentSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].sources.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentSourcesMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentTargetProjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/targetProjects', toValue(args)] as const
}

export function getV1alpha1ParentTargetProjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentTargetProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].targetProjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentTargetProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentTargetProjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentTargetProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentTargetProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].targetProjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentTargetProjectsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/targetProjects', 'POST'] as const
}

export function getPostV1alpha1ParentTargetProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['targetProjects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentTargetProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].targetProjects.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentTargetProjects<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['targetProjects']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentTargetProjectsMutationOptions<
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

export function getV1alpha1ParentUtilizationReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/utilizationReports', toValue(args)] as const
}

export function getV1alpha1ParentUtilizationReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentUtilizationReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].utilizationReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentUtilizationReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentUtilizationReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentUtilizationReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentUtilizationReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].utilizationReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentUtilizationReportsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/utilizationReports', 'POST'] as const
}

export function getPostV1alpha1ParentUtilizationReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentUtilizationReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].utilizationReports.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentUtilizationReports<
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentUtilizationReportsMutationOptions<
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

export function getV1alpha1SourceFetchInventoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:source:fetchInventory', toValue(args)] as const
}

export function getV1alpha1SourceFetchInventoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1SourceFetchInventoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':source:fetchInventory'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1SourceFetchInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1SourceFetchInventoryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1SourceFetchInventoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1SourceFetchInventoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':source:fetchInventory'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
