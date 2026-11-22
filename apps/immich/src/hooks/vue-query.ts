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

export function getActivitiesKey() {
  return ['activities'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getAlbumsKey() {
  return ['albums'] as const
}

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getAssetFilesKey() {
  return ['asset-files'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getClusterGroupsKey() {
  return ['cluster-groups'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDownloadKey() {
  return ['download'] as const
}

export function getDuplicatesKey() {
  return ['duplicates'] as const
}

export function getFacesKey() {
  return ['faces'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getLibrariesKey() {
  return ['libraries'] as const
}

export function getMapKey() {
  return ['map'] as const
}

export function getMemoriesKey() {
  return ['memories'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPartnersKey() {
  return ['partners'] as const
}

export function getPasskeysKey() {
  return ['passkeys'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getPublicKey() {
  return ['public'] as const
}

export function getQueuesKey() {
  return ['queues'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getServerKey() {
  return ['server'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getSharedLinksKey() {
  return ['shared-links'] as const
}

export function getStacksKey() {
  return ['stacks'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getSystemConfigKey() {
  return ['system-config'] as const
}

export function getSystemMetadataKey() {
  return ['system-metadata'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTimelineKey() {
  return ['timeline'] as const
}

export function getTrashKey() {
  return ['trash'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getViewKey() {
  return ['view'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.$get>>,
) {
  return ['activities', '/activities', toValue(args)] as const
}

export function getActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
          >,
          ReturnType<typeof getActivitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActivitiesMutationKey() {
  return ['activities', '/activities', 'POST'] as const
}

export function getPostActivitiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$post>>>>>,
    TError,
    InferRequestType<typeof client.activities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActivitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.activities.$post>) {
      return parseResponse(client.activities.$post(args, options))
    },
  })
}

export function usePostActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.activities.$post>,
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
  const mutationDefaults = getPostActivitiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActivitiesStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.statistics.$get>>,
) {
  return ['activities', '/activities/statistics', toValue(args)] as const
}

export function getActivitiesStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.statistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivitiesStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activities.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActivitiesStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.statistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.activities.statistics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.activities.statistics.$get>>>
            >
          >,
          ReturnType<typeof getActivitiesStatisticsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.activities.statistics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivitiesStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activities.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteActivitiesIdMutationKey() {
  return ['activities', '/activities/:id', 'DELETE'] as const
}

export function getDeleteActivitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.activities)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.activities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActivitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.activities)[':id']['$delete']>) {
      return parseResponse(client.activities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActivitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.activities)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.activities)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteActivitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminAuthUnlinkAllMutationKey() {
  return ['admin', '/admin/auth/unlink-all', 'POST'] as const
}

export function getPostAdminAuthUnlinkAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.auth)['unlink-all']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminAuthUnlinkAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.auth['unlink-all'].$post(undefined, options))
    },
  })
}

export function usePostAdminAuthUnlinkAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.admin.auth)['unlink-all']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostAdminAuthUnlinkAllMutationOptions<TError, TOnMutateResult>(
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

export function getAdminConfigQueryKey() {
  return ['admin', '/admin/config'] as const
}

export function getAdminConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.$get>>>>
          >,
          ReturnType<typeof getAdminConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminConfigMutationKey() {
  return ['admin', '/admin/config', 'PUT'] as const
}

export function getPutAdminConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.$put>>>>>,
    TError,
    InferRequestType<typeof client.admin.config.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.$put>) {
      return parseResponse(client.admin.config.$put(args, options))
    },
  })
}

export function usePutAdminConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.config.$put>,
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
  const mutationDefaults = getPutAdminConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminConfigDefaultsQueryKey() {
  return ['admin', '/admin/config/defaults'] as const
}

export function getAdminConfigDefaultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminConfigDefaultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.config.defaults.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConfigDefaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.defaults.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.defaults.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.defaults.$get>>>
            >
          >,
          ReturnType<typeof getAdminConfigDefaultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.defaults.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConfigDefaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminConfigDefaultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.config.defaults.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminConfigStorageTemplateQueryKey() {
  return ['admin', '/admin/config/storage-template'] as const
}

export function getAdminConfigStorageTemplateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminConfigStorageTemplateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.config['storage-template'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConfigStorageTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.config)['storage-template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.config)['storage-template']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.config)['storage-template']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminConfigStorageTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.config)['storage-template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConfigStorageTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminConfigStorageTemplateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.config['storage-template'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminConfigStorageTemplatePreviewMutationKey() {
  return ['admin', '/admin/config/storage-template/preview', 'POST'] as const
}

export function getPostAdminConfigStorageTemplatePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.config)['storage-template']['preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.config)['storage-template']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigStorageTemplatePreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.config)['storage-template']['preview']['$post']>,
    ) {
      return parseResponse(client.admin.config['storage-template'].preview.$post(args, options))
    },
  })
}

export function usePostAdminConfigStorageTemplatePreview<
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
                  ReturnType<(typeof client.admin.config)['storage-template']['preview']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.config)['storage-template']['preview']['$post']>,
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
  const mutationDefaults = getPostAdminConfigStorageTemplatePreviewMutationOptions<
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

export function getAdminDatabaseBackupsQueryKey() {
  return ['admin', '/admin/database-backups'] as const
}

export function getAdminDatabaseBackupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminDatabaseBackupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['database-backups'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminDatabaseBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['database-backups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['database-backups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['database-backups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminDatabaseBackupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['database-backups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDatabaseBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminDatabaseBackupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['database-backups'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdminDatabaseBackupsMutationKey() {
  return ['admin', '/admin/database-backups', 'DELETE'] as const
}

export function getDeleteAdminDatabaseBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['database-backups']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['database-backups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDatabaseBackupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['database-backups']['$delete']>) {
      return parseResponse(client.admin['database-backups'].$delete(args, options))
    },
  })
}

export function useDeleteAdminDatabaseBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['database-backups']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['database-backups']['$delete']>,
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
  const mutationDefaults = getDeleteAdminDatabaseBackupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminDatabaseBackupsStartRestoreMutationKey() {
  return ['admin', '/admin/database-backups/start-restore', 'POST'] as const
}

export function getPostAdminDatabaseBackupsStartRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['database-backups']['start-restore']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDatabaseBackupsStartRestoreMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin['database-backups']['start-restore'].$post(undefined, options),
      )
    },
  })
}

export function usePostAdminDatabaseBackupsStartRestore<
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
                  ReturnType<(typeof client.admin)['database-backups']['start-restore']['$post']>
                >
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminDatabaseBackupsStartRestoreMutationOptions<
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

export function getPostAdminDatabaseBackupsUploadMutationKey() {
  return ['admin', '/admin/database-backups/upload', 'POST'] as const
}

export function getPostAdminDatabaseBackupsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['database-backups']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['database-backups']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDatabaseBackupsUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['database-backups']['upload']['$post']>,
    ) {
      return parseResponse(client.admin['database-backups'].upload.$post(args, options))
    },
  })
}

export function usePostAdminDatabaseBackupsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['database-backups']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['database-backups']['upload']['$post']>,
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
  const mutationDefaults = getPostAdminDatabaseBackupsUploadMutationOptions<
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

export function getAdminDatabaseBackupsFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['database-backups'][':filename']['$get']>
  >,
) {
  return ['admin', '/admin/database-backups/:filename', toValue(args)] as const
}

export function getAdminDatabaseBackupsFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['database-backups'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminDatabaseBackupsFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['database-backups'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminDatabaseBackupsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['database-backups'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['database-backups'][':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['database-backups'][':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['database-backups'][':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminDatabaseBackupsFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['database-backups'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDatabaseBackupsFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminDatabaseBackupsFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['database-backups'][':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminIntegrityReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.integrity.report.$get>>,
) {
  return ['admin', '/admin/integrity/report', toValue(args)] as const
}

export function getAdminIntegrityReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.integrity.report.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIntegrityReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.integrity.report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIntegrityReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.integrity.report.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.report.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.report.$get>>>
            >
          >,
          ReturnType<typeof getAdminIntegrityReportQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.report.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIntegrityReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIntegrityReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.integrity.report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdminIntegrityReportIdMutationKey() {
  return ['admin', '/admin/integrity/report/:id', 'DELETE'] as const
}

export function getDeleteAdminIntegrityReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.integrity.report)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.integrity.report)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminIntegrityReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.integrity.report)[':id']['$delete']>,
    ) {
      return parseResponse(client.admin.integrity.report[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminIntegrityReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.integrity.report)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.integrity.report)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminIntegrityReportIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminIntegrityReportIdFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.integrity.report)[':id']['file']['$get']>
  >,
) {
  return ['admin', '/admin/integrity/report/:id/file', toValue(args)] as const
}

export function getAdminIntegrityReportIdFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.integrity.report)[':id']['file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIntegrityReportIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.integrity.report[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIntegrityReportIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.integrity.report)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.integrity.report)[':id']['file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.integrity.report)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.integrity.report)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminIntegrityReportIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.integrity.report)[':id']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIntegrityReportIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIntegrityReportIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.integrity.report[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminIntegrityReportTypeCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>
  >,
) {
  return ['admin', '/admin/integrity/report/:type/csv', toValue(args)] as const
}

export function getAdminIntegrityReportTypeCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIntegrityReportTypeCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.integrity.report[':type'].csv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIntegrityReportTypeCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminIntegrityReportTypeCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.integrity.report)[':type']['csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIntegrityReportTypeCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIntegrityReportTypeCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.integrity.report[':type'].csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminIntegritySummaryQueryKey() {
  return ['admin', '/admin/integrity/summary'] as const
}

export function getAdminIntegritySummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminIntegritySummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.integrity.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIntegritySummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.summary.$get>>>
            >
          >,
          ReturnType<typeof getAdminIntegritySummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.integrity.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIntegritySummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminIntegritySummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.integrity.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminMaintenanceMutationKey() {
  return ['admin', '/admin/maintenance', 'POST'] as const
}

export function getPostAdminMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.maintenance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMaintenanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.maintenance.$post>) {
      return parseResponse(client.admin.maintenance.$post(args, options))
    },
  })
}

export function usePostAdminMaintenance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.maintenance.$post>,
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
  const mutationDefaults = getPostAdminMaintenanceMutationOptions<TError, TOnMutateResult>(
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

export function getAdminMaintenanceDetectInstallQueryKey() {
  return ['admin', '/admin/maintenance/detect-install'] as const
}

export function getAdminMaintenanceDetectInstallQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminMaintenanceDetectInstallQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.maintenance['detect-install'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminMaintenanceDetectInstall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.maintenance)['detect-install']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.maintenance)['detect-install']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.maintenance)['detect-install']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminMaintenanceDetectInstallQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.maintenance)['detect-install']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminMaintenanceDetectInstallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminMaintenanceDetectInstallQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.maintenance['detect-install'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminMaintenanceLoginMutationKey() {
  return ['admin', '/admin/maintenance/login', 'POST'] as const
}

export function getPostAdminMaintenanceLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.maintenance.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMaintenanceLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.maintenance.login.$post>) {
      return parseResponse(client.admin.maintenance.login.$post(args, options))
    },
  })
}

export function usePostAdminMaintenanceLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.maintenance.login.$post>,
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
  const mutationDefaults = getPostAdminMaintenanceLoginMutationOptions<TError, TOnMutateResult>(
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

export function getAdminMaintenanceStatusQueryKey() {
  return ['admin', '/admin/maintenance/status'] as const
}

export function getAdminMaintenanceStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminMaintenanceStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.maintenance.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminMaintenanceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.status.$get>>>
            >
          >,
          ReturnType<typeof getAdminMaintenanceStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.maintenance.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminMaintenanceStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminMaintenanceStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.maintenance.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminNotificationsMutationKey() {
  return ['admin', '/admin/notifications', 'POST'] as const
}

export function getPostAdminNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.notifications.$post>) {
      return parseResponse(client.admin.notifications.$post(args, options))
    },
  })
}

export function usePostAdminNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.notifications.$post>,
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
  const mutationDefaults = getPostAdminNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminNotificationsTemplatesNameMutationKey() {
  return ['admin', '/admin/notifications/templates/:name', 'POST'] as const
}

export function getPostAdminNotificationsTemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.notifications.templates)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.notifications.templates)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminNotificationsTemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.notifications.templates)[':name']['$post']>,
    ) {
      return parseResponse(client.admin.notifications.templates[':name'].$post(args, options))
    },
  })
}

export function usePostAdminNotificationsTemplatesName<
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
                Awaited<ReturnType<(typeof client.admin.notifications.templates)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.notifications.templates)[':name']['$post']>,
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
  const mutationDefaults = getPostAdminNotificationsTemplatesNameMutationOptions<
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

export function getPostAdminNotificationsTemplatesNamePreviewMutationKey() {
  return ['admin', '/admin/notifications/templates/:name/preview', 'POST'] as const
}

export function getPostAdminNotificationsTemplatesNamePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.notifications.templates)[':name']['preview']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.notifications.templates)[':name']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminNotificationsTemplatesNamePreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.notifications.templates)[':name']['preview']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.notifications.templates[':name'].preview.$post(args, options),
      )
    },
  })
}

export function usePostAdminNotificationsTemplatesNamePreview<
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
                    (typeof client.admin.notifications.templates)[':name']['preview']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.notifications.templates)[':name']['preview']['$post']
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
  const mutationDefaults = getPostAdminNotificationsTemplatesNamePreviewMutationOptions<
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

export function getPostAdminNotificationsTestEmailMutationKey() {
  return ['admin', '/admin/notifications/test-email', 'POST'] as const
}

export function getPostAdminNotificationsTestEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.notifications)['test-email']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.notifications)['test-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminNotificationsTestEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.notifications)['test-email']['$post']>,
    ) {
      return parseResponse(client.admin.notifications['test-email'].$post(args, options))
    },
  })
}

export function usePostAdminNotificationsTestEmail<
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
                Awaited<ReturnType<(typeof client.admin.notifications)['test-email']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.notifications)['test-email']['$post']>,
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
  const mutationDefaults = getPostAdminNotificationsTestEmailMutationOptions<
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

export function getAdminUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
) {
  return ['admin', '/admin/users', toValue(args)] as const
}

export function getAdminUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          ReturnType<typeof getAdminUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsersMutationKey() {
  return ['admin', '/admin/users', 'POST'] as const
}

export function getPostAdminUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.users.$post>) {
      return parseResponse(client.admin.users.$post(args, options))
    },
  })
}

export function usePostAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.users.$post>,
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
  const mutationDefaults = getPostAdminUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
) {
  return ['admin', '/admin/users/:id', toValue(args)] as const
}

export function getAdminUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminUsersIdMutationKey() {
  return ['admin', '/admin/users/:id', 'PUT'] as const
}

export function getPutAdminUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':id']['$put']>) {
      return parseResponse(client.admin.users[':id'].$put(args, options))
    },
  })
}

export function usePutAdminUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['$put']>,
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
  const mutationDefaults = getPutAdminUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAdminUsersIdMutationKey() {
  return ['admin', '/admin/users/:id', 'DELETE'] as const
}

export function getDeleteAdminUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':id']['$delete']>) {
      return parseResponse(client.admin.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminUsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersIdCalendarHeatmapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>
  >,
) {
  return ['admin', '/admin/users/:id/calendar-heatmap', toValue(args)] as const
}

export function getAdminUsersIdCalendarHeatmapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdCalendarHeatmapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id']['calendar-heatmap'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdCalendarHeatmap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdCalendarHeatmapQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':id']['calendar-heatmap']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdCalendarHeatmapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdCalendarHeatmapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id']['calendar-heatmap'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminUsersIdPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['preferences']['$get']>
  >,
) {
  return ['admin', '/admin/users/:id/preferences', toValue(args)] as const
}

export function getAdminUsersIdPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['preferences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['preferences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['preferences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['preferences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdPreferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':id']['preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminUsersIdPreferencesMutationKey() {
  return ['admin', '/admin/users/:id/preferences', 'PUT'] as const
}

export function getPutAdminUsersIdPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['preferences']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['preferences']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersIdPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['preferences']['$put']>,
    ) {
      return parseResponse(client.admin.users[':id'].preferences.$put(args, options))
    },
  })
}

export function usePutAdminUsersIdPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['preferences']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['preferences']['$put']>,
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
  const mutationDefaults = getPutAdminUsersIdPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersIdRestoreMutationKey() {
  return ['admin', '/admin/users/:id/restore', 'POST'] as const
}

export function getPostAdminUsersIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['restore']['$post']>,
    ) {
      return parseResponse(client.admin.users[':id'].restore.$post(args, options))
    },
  })
}

export function usePostAdminUsersIdRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['restore']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['restore']['$post']>,
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
  const mutationDefaults = getPostAdminUsersIdRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersIdSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['sessions']['$get']>>,
) {
  return ['admin', '/admin/users/:id/sessions', toValue(args)] as const
}

export function getAdminUsersIdSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['sessions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['sessions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminUsersIdStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['statistics']['$get']>
  >,
) {
  return ['admin', '/admin/users/:id/statistics', toValue(args)] as const
}

export function getAdminUsersIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.albums.$get>>,
) {
  return ['albums', '/albums', toValue(args)] as const
}

export function getAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.albums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlbums<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.albums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
          ReturnType<typeof getAlbumsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAlbumsMutationKey() {
  return ['albums', '/albums', 'POST'] as const
}

export function getPostAlbumsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$post>>>>>,
    TError,
    InferRequestType<typeof client.albums.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlbumsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.albums.$post>) {
      return parseResponse(client.albums.$post(args, options))
    },
  })
}

export function usePostAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.albums.$post>,
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
  const mutationDefaults = getPostAlbumsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAlbumsAssetsMutationKey() {
  return ['albums', '/albums/assets', 'PUT'] as const
}

export function getPutAlbumsAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.assets.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.albums.assets.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAlbumsAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.albums.assets.$put>) {
      return parseResponse(client.albums.assets.$put(args, options))
    },
  })
}

export function usePutAlbumsAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.assets.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.albums.assets.$put>,
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
  const mutationDefaults = getPutAlbumsAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlbumsStatisticsQueryKey() {
  return ['albums', '/albums/statistics'] as const
}

export function getAlbumsStatisticsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlbumsStatisticsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums.statistics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.albums.statistics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.albums.statistics.$get>>>
            >
          >,
          ReturnType<typeof getAlbumsStatisticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.statistics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlbumsStatisticsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.albums.statistics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlbumsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['$get']>>,
) {
  return ['albums', '/albums/:id', toValue(args)] as const
}

export function getAlbumsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAlbumsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.albums[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAlbumsIdMutationKey() {
  return ['albums', '/albums/:id', 'DELETE'] as const
}

export function getDeleteAlbumsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.albums)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAlbumsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.albums)[':id']['$delete']>) {
      return parseResponse(client.albums[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAlbumsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.albums)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAlbumsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAlbumsIdMutationKey() {
  return ['albums', '/albums/:id', 'PATCH'] as const
}

export function getPatchAlbumsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.albums)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAlbumsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.albums)[':id']['$patch']>) {
      return parseResponse(client.albums[':id'].$patch(args, options))
    },
  })
}

export function usePatchAlbumsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.albums)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAlbumsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAlbumsIdAssetsMutationKey() {
  return ['albums', '/albums/:id/assets', 'PUT'] as const
}

export function getPutAlbumsIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['assets']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.albums)[':id']['assets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAlbumsIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.albums)[':id']['assets']['$put']>) {
      return parseResponse(client.albums[':id'].assets.$put(args, options))
    },
  })
}

export function usePutAlbumsIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['assets']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.albums)[':id']['assets']['$put']>,
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
  const mutationDefaults = getPutAlbumsIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAlbumsIdAssetsMutationKey() {
  return ['albums', '/albums/:id/assets', 'DELETE'] as const
}

export function getDeleteAlbumsIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.albums)[':id']['assets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.albums)[':id']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAlbumsIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.albums)[':id']['assets']['$delete']>) {
      return parseResponse(client.albums[':id'].assets.$delete(args, options))
    },
  })
}

export function useDeleteAlbumsIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['assets']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.albums)[':id']['assets']['$delete']>,
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
  const mutationDefaults = getDeleteAlbumsIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getAlbumsIdMapMarkersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['map-markers']['$get']>>,
) {
  return ['albums', '/albums/:id/map-markers', toValue(args)] as const
}

export function getAlbumsIdMapMarkersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['map-markers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsIdMapMarkersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums[':id']['map-markers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsIdMapMarkers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.albums)[':id']['map-markers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['map-markers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['map-markers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['map-markers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlbumsIdMapMarkersQueryKey>
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
          Awaited<ReturnType<(typeof client.albums)[':id']['map-markers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdMapMarkersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsIdMapMarkersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.albums[':id']['map-markers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAlbumsIdUserUserIdMutationKey() {
  return ['albums', '/albums/:id/user/:userId', 'PUT'] as const
}

export function getPutAlbumsIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.albums)[':id']['user'][':userId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAlbumsIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$put']>,
    ) {
      return parseResponse(client.albums[':id'].user[':userId'].$put(args, options))
    },
  })
}

export function usePutAlbumsIdUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.albums)[':id']['user'][':userId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$put']>,
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
  const mutationDefaults = getPutAlbumsIdUserUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAlbumsIdUserUserIdMutationKey() {
  return ['albums', '/albums/:id/user/:userId', 'DELETE'] as const
}

export function getDeleteAlbumsIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.albums)[':id']['user'][':userId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAlbumsIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$delete']>,
    ) {
      return parseResponse(client.albums[':id'].user[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteAlbumsIdUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.albums)[':id']['user'][':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.albums)[':id']['user'][':userId']['$delete']>,
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
  const mutationDefaults = getDeleteAlbumsIdUserUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutAlbumsIdUsersMutationKey() {
  return ['albums', '/albums/:id/users', 'PUT'] as const
}

export function getPutAlbumsIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['users']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.albums)[':id']['users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAlbumsIdUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.albums)[':id']['users']['$put']>) {
      return parseResponse(client.albums[':id'].users.$put(args, options))
    },
  })
}

export function usePutAlbumsIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['users']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.albums)[':id']['users']['$put']>,
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
  const mutationDefaults = getPutAlbumsIdUsersMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeysQueryKey() {
  return ['api-keys', '/api-keys'] as const
}

export function getApiKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeysMutationKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys']['$post']>) {
      return parseResponse(client['api-keys'].$post(args, options))
    },
  })
}

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-keys']['$post']>,
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
  const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeysMeQueryKey() {
  return ['api-keys', '/api-keys/me'] as const
}

export function getApiKeysMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiKeysMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'].me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKeysMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['me']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeysMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiKeysMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'].me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKeysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys'][':id']['$get']>>,
) {
  return ['api-keys', '/api-keys/:id', toValue(args)] as const
}

export function getApiKeysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeysIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiKeysIdMutationKey() {
  return ['api-keys', '/api-keys/:id', 'PUT'] as const
}

export function getPutApiKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-keys'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':id']['$put']>) {
      return parseResponse(client['api-keys'][':id'].$put(args, options))
    },
  })
}

export function usePutApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-keys'][':id']['$put']>,
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
  const mutationDefaults = getPutApiKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiKeysIdMutationKey() {
  return ['api-keys', '/api-keys/:id', 'DELETE'] as const
}

export function getDeleteApiKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':id']['$delete']>) {
      return parseResponse(client['api-keys'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['api-keys'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['api-keys'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeysIdRotateMutationKey() {
  return ['api-keys', '/api-keys/:id/rotate', 'POST'] as const
}

export function getPostApiKeysIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-keys'][':id']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysIdRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['api-keys'][':id']['rotate']['$post']>,
    ) {
      return parseResponse(client['api-keys'][':id'].rotate.$post(args, options))
    },
  })
}

export function usePostApiKeysIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys'][':id']['rotate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-keys'][':id']['rotate']['$post']>,
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
  const mutationDefaults = getPostApiKeysIdRotateMutationOptions<TError, TOnMutateResult>(
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

export function getAssetFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-files']['$get']>>,
) {
  return ['asset-files', '/asset-files', toValue(args)] as const
}

export function getAssetFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['asset-files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetFiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-files']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-files']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-files']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetFilesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-files']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['asset-files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetFilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-files'][':id']['$get']>>,
) {
  return ['asset-files', '/asset-files/:id', toValue(args)] as const
}

export function getAssetFilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-files'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetFilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['asset-files'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetFilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-files'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-files'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-files'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-files'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetFilesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-files'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetFilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetFilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['asset-files'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAssetFilesIdMutationKey() {
  return ['asset-files', '/asset-files/:id', 'DELETE'] as const
}

export function getDeleteAssetFilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['asset-files'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['asset-files'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetFilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['asset-files'][':id']['$delete']>) {
      return parseResponse(client['asset-files'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAssetFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['asset-files'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['asset-files'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAssetFilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAssetFilesIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-files'][':id']['download']['$get']>
  >,
) {
  return ['asset-files', '/asset-files/:id/download', toValue(args)] as const
}

export function getAssetFilesIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-files'][':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetFilesIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['asset-files'][':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetFilesIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['asset-files'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-files'][':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-files'][':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-files'][':id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetFilesIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client)['asset-files'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetFilesIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetFilesIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['asset-files'][':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetsMutationKey() {
  return ['assets', '/assets', 'PUT'] as const
}

export function getPutAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.assets.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$put>) {
      return parseResponse(client.assets.$put(args, options))
    },
  })
}

export function usePutAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.assets.$put>,
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
  const mutationDefaults = getPutAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAssetsMutationKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function getPostAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$post>) {
      return parseResponse(client.assets.$post(args, options))
    },
  })
}

export function usePostAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assets.$post>,
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
  const mutationDefaults = getPostAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAssetsMutationKey() {
  return ['assets', '/assets', 'DELETE'] as const
}

export function getDeleteAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.assets.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$delete>) {
      return parseResponse(client.assets.$delete(args, options))
    },
  })
}

export function useDeleteAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.assets.$delete>,
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
  const mutationDefaults = getDeleteAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAssetsBulkUploadCheckMutationKey() {
  return ['assets', '/assets/bulk-upload-check', 'POST'] as const
}

export function getPostAssetsBulkUploadCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)['bulk-upload-check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)['bulk-upload-check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsBulkUploadCheckMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)['bulk-upload-check']['$post']>) {
      return parseResponse(client.assets['bulk-upload-check'].$post(args, options))
    },
  })
}

export function usePostAssetsBulkUploadCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)['bulk-upload-check']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)['bulk-upload-check']['$post']>,
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
  const mutationDefaults = getPostAssetsBulkUploadCheckMutationOptions<TError, TOnMutateResult>(
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

export function getPutAssetsCopyMutationKey() {
  return ['assets', '/assets/copy', 'PUT'] as const
}

export function getPutAssetsCopyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.copy.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.assets.copy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsCopyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.copy.$put>) {
      return parseResponse(client.assets.copy.$put(args, options))
    },
  })
}

export function usePutAssetsCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.copy.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.assets.copy.$put>,
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
  const mutationDefaults = getPutAssetsCopyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAssetsJobsMutationKey() {
  return ['assets', '/assets/jobs', 'POST'] as const
}

export function getPostAssetsJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.jobs.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.assets.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.jobs.$post>) {
      return parseResponse(client.assets.jobs.$post(args, options))
    },
  })
}

export function usePostAssetsJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.jobs.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.assets.jobs.$post>,
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
  const mutationDefaults = getPostAssetsJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAssetsMetadataMutationKey() {
  return ['assets', '/assets/metadata', 'PUT'] as const
}

export function getPutAssetsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.metadata.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.assets.metadata.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.metadata.$put>) {
      return parseResponse(client.assets.metadata.$put(args, options))
    },
  })
}

export function usePutAssetsMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.metadata.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.metadata.$put>,
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
  const mutationDefaults = getPutAssetsMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAssetsMetadataMutationKey() {
  return ['assets', '/assets/metadata', 'DELETE'] as const
}

export function getDeleteAssetsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.metadata.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.assets.metadata.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.metadata.$delete>) {
      return parseResponse(client.assets.metadata.$delete(args, options))
    },
  })
}

export function useDeleteAssetsMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.assets.metadata.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.assets.metadata.$delete>,
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
  const mutationDefaults = getDeleteAssetsMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getAssetsStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.statistics.$get>>,
) {
  return ['assets', '/assets/statistics', toValue(args)] as const
}

export function getAssetsStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.statistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.statistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.statistics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.statistics.$get>>>
            >
          >,
          ReturnType<typeof getAssetsStatisticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.statistics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['$get']>>,
) {
  return ['assets', '/assets/:id', toValue(args)] as const
}

export function getAssetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetsIdMutationKey() {
  return ['assets', '/assets/:id', 'PUT'] as const
}

export function getPutAssetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.assets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':id']['$put']>) {
      return parseResponse(client.assets[':id'].$put(args, options))
    },
  })
}

export function usePutAssetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':id']['$put']>,
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
  const mutationDefaults = getPutAssetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetsIdEditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['edits']['$get']>>,
) {
  return ['assets', '/assets/:id/edits', toValue(args)] as const
}

export function getAssetsIdEditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['edits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdEditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].edits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdEdits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['edits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdEditsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdEditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdEditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].edits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetsIdEditsMutationKey() {
  return ['assets', '/assets/:id/edits', 'PUT'] as const
}

export function getPutAssetsIdEditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':id']['edits']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsIdEditsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':id']['edits']['$put']>) {
      return parseResponse(client.assets[':id'].edits.$put(args, options))
    },
  })
}

export function usePutAssetsIdEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':id']['edits']['$put']>,
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
  const mutationDefaults = getPutAssetsIdEditsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAssetsIdEditsMutationKey() {
  return ['assets', '/assets/:id/edits', 'DELETE'] as const
}

export function getDeleteAssetsIdEditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.assets)[':id']['edits']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsIdEditsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':id']['edits']['$delete']>) {
      return parseResponse(client.assets[':id'].edits.$delete(args, options))
    },
  })
}

export function useDeleteAssetsIdEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.assets)[':id']['edits']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.assets)[':id']['edits']['$delete']>,
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
  const mutationDefaults = getDeleteAssetsIdEditsMutationOptions<TError, TOnMutateResult>(
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

export function getAssetsIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['metadata']['$get']>>,
) {
  return ['assets', '/assets/:id/metadata', toValue(args)] as const
}

export function getAssetsIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetsIdMetadataMutationKey() {
  return ['assets', '/assets/:id/metadata', 'PUT'] as const
}

export function getPutAssetsIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['metadata']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':id']['metadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsIdMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':id']['metadata']['$put']>) {
      return parseResponse(client.assets[':id'].metadata.$put(args, options))
    },
  })
}

export function usePutAssetsIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['metadata']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':id']['metadata']['$put']>,
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
  const mutationDefaults = getPutAssetsIdMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getAssetsIdMetadataKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$get']>
  >,
) {
  return ['assets', '/assets/:id/metadata/:key', toValue(args)] as const
}

export function getAssetsIdMetadataKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdMetadataKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].metadata[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdMetadataKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':id']['metadata'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['metadata'][':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['metadata'][':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdMetadataKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':id']['metadata'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdMetadataKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdMetadataKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].metadata[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAssetsIdMetadataKeyMutationKey() {
  return ['assets', '/assets/:id/metadata/:key', 'DELETE'] as const
}

export function getDeleteAssetsIdMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':id']['metadata'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsIdMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$delete']>,
    ) {
      return parseResponse(client.assets[':id'].metadata[':key'].$delete(args, options))
    },
  })
}

export function useDeleteAssetsIdMetadataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.assets)[':id']['metadata'][':key']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.assets)[':id']['metadata'][':key']['$delete']>,
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
  const mutationDefaults = getDeleteAssetsIdMetadataKeyMutationOptions<TError, TOnMutateResult>(
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

export function getAssetsIdOcrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['ocr']['$get']>>,
) {
  return ['assets', '/assets/:id/ocr', toValue(args)] as const
}

export function getAssetsIdOcrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['ocr']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdOcrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].ocr.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdOcr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['ocr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['ocr']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['ocr']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['ocr']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdOcrQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['ocr']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdOcrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdOcrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].ocr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsIdOriginalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['original']['$get']>>,
) {
  return ['assets', '/assets/:id/original', toValue(args)] as const
}

export function getAssetsIdOriginalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['original']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdOriginalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].original.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdOriginal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['original']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['original']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['original']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['original']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdOriginalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['original']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdOriginalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdOriginalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].original.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsIdThumbnailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['thumbnail']['$get']>>,
) {
  return ['assets', '/assets/:id/thumbnail', toValue(args)] as const
}

export function getAssetsIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['thumbnail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['thumbnail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':id']['thumbnail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':id']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsIdVideoPlaybackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['video']['playback']['$get']>
  >,
) {
  return ['assets', '/assets/:id/video/playback', toValue(args)] as const
}

export function getAssetsIdVideoPlaybackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['video']['playback']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdVideoPlaybackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].video.playback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdVideoPlayback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':id']['video']['playback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['video']['playback']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['video']['playback']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':id']['video']['playback']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsIdVideoPlaybackQueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':id']['video']['playback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdVideoPlaybackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdVideoPlaybackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].video.playback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsIdVideoStreamMainM3u8QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>
  >,
) {
  return ['assets', '/assets/:id/video/stream/main.m3u8', toValue(args)] as const
}

export function getAssetsIdVideoStreamMainM3u8QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdVideoStreamMainM3u8QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].video.stream['main.m3u8'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsIdVideoStreamMainM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>
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
                  ReturnType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssetsIdVideoStreamMainM3u8QueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':id']['video']['stream']['main.m3u8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdVideoStreamMainM3u8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdVideoStreamMainM3u8QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].video.stream['main.m3u8'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAssetsIdVideoStreamSessionIdMutationKey() {
  return ['assets', '/assets/:id/video/stream/:sessionId', 'DELETE'] as const
}

export function getDeleteAssetsIdVideoStreamSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assets)[':id']['video']['stream'][':sessionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.assets)[':id']['video']['stream'][':sessionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsIdVideoStreamSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assets)[':id']['video']['stream'][':sessionId']['$delete']
      >,
    ) {
      return parseResponse(client.assets[':id'].video.stream[':sessionId'].$delete(args, options))
    },
  })
}

export function useDeleteAssetsIdVideoStreamSessionId<
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
                    ReturnType<
                      (typeof client.assets)[':id']['video']['stream'][':sessionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.assets)[':id']['video']['stream'][':sessionId']['$delete']
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
  const mutationDefaults = getDeleteAssetsIdVideoStreamSessionIdMutationOptions<
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

export function getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assets',
    '/assets/:id/video/stream/:sessionId/:variantIndex/playlist.m3u8',
    keyArgs,
  ] as const
}

export function getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].video.stream[':sessionId'][':variantIndex']['playlist.m3u8'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
    >
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
                    (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
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
                    (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8QueryKey>
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
              (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex']['playlist.m3u8']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8QueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].video.stream[':sessionId'][':variantIndex']['playlist.m3u8'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsIdVideoStreamSessionIdVariantIndexFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets/:id/video/stream/:sessionId/:variantIndex/:filename', keyArgs] as const
}

export function getAssetsIdVideoStreamSessionIdVariantIndexFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsIdVideoStreamSessionIdVariantIndexFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':id'].video.stream[':sessionId'][':variantIndex'][':filename'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAssetsIdVideoStreamSessionIdVariantIndexFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
    >
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
                    (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
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
                    (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssetsIdVideoStreamSessionIdVariantIndexFilenameQueryKey>
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
              (typeof client.assets)[':id']['video']['stream'][':sessionId'][':variantIndex'][':filename']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdVideoStreamSessionIdVariantIndexFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsIdVideoStreamSessionIdVariantIndexFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':id'].video.stream[':sessionId'][':variantIndex'][':filename'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthAdminSignUpMutationKey() {
  return ['auth', '/auth/admin-sign-up', 'POST'] as const
}

export function getPostAuthAdminSignUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['admin-sign-up']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['admin-sign-up']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAdminSignUpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['admin-sign-up']['$post']>) {
      return parseResponse(client.auth['admin-sign-up'].$post(args, options))
    },
  })
}

export function usePostAuthAdminSignUp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['admin-sign-up']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth)['admin-sign-up']['$post']>,
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
  const mutationDefaults = getPostAuthAdminSignUpMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthChangePasswordMutationKey() {
  return ['auth', '/auth/change-password', 'POST'] as const
}

export function getPostAuthChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['change-password']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['change-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['change-password']['$post']>) {
      return parseResponse(client.auth['change-password'].$post(args, options))
    },
  })
}

export function usePostAuthChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['change-password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth)['change-password']['$post']>,
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
  const mutationDefaults = getPostAuthChangePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthLoginMutationKey() {
  return ['auth', '/auth/login', 'POST'] as const
}

export function getPostAuthLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.login.$post>) {
      return parseResponse(client.auth.login.$post(args, options))
    },
  })
}

export function usePostAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.login.$post>,
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
  const mutationDefaults = getPostAuthLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthLogoutMutationKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function getPostAuthLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.logout.$post(undefined, options))
    },
  })
}

export function usePostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuthPinCodeMutationKey() {
  return ['auth', '/auth/pin-code', 'PUT'] as const
}

export function getPutAuthPinCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['pin-code']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth)['pin-code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthPinCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['pin-code']['$put']>) {
      return parseResponse(client.auth['pin-code'].$put(args, options))
    },
  })
}

export function usePutAuthPinCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['pin-code']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.auth)['pin-code']['$put']>,
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
  const mutationDefaults = getPutAuthPinCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthPinCodeMutationKey() {
  return ['auth', '/auth/pin-code', 'POST'] as const
}

export function getPostAuthPinCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['pin-code']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth)['pin-code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPinCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['pin-code']['$post']>) {
      return parseResponse(client.auth['pin-code'].$post(args, options))
    },
  })
}

export function usePostAuthPinCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['pin-code']['$post']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.auth)['pin-code']['$post']>,
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
  const mutationDefaults = getPostAuthPinCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthPinCodeMutationKey() {
  return ['auth', '/auth/pin-code', 'DELETE'] as const
}

export function getDeleteAuthPinCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['pin-code']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth)['pin-code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthPinCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['pin-code']['$delete']>) {
      return parseResponse(client.auth['pin-code'].$delete(args, options))
    },
  })
}

export function useDeleteAuthPinCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.auth)['pin-code']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.auth)['pin-code']['$delete']>,
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
  const mutationDefaults = getDeleteAuthPinCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSessionLockMutationKey() {
  return ['auth', '/auth/session/lock', 'POST'] as const
}

export function getPostAuthSessionLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.lock.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionLockMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.session.lock.$post(undefined, options))
    },
  })
}

export function usePostAuthSessionLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.lock.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostAuthSessionLockMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSessionUnlockMutationKey() {
  return ['auth', '/auth/session/unlock', 'POST'] as const
}

export function getPostAuthSessionUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.unlock.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.session.unlock.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionUnlockMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.session.unlock.$post>) {
      return parseResponse(client.auth.session.unlock.$post(args, options))
    },
  })
}

export function usePostAuthSessionUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.unlock.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.session.unlock.$post>,
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
  const mutationDefaults = getPostAuthSessionUnlockMutationOptions<TError, TOnMutateResult>(
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

export function getAuthStatusQueryKey() {
  return ['auth', '/auth/status'] as const
}

export function getAuthStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.status.$get>>>>
          >,
          ReturnType<typeof getAuthStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthValidateTokenMutationKey() {
  return ['auth', '/auth/validateToken', 'POST'] as const
}

export function getPostAuthValidateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.validateToken.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthValidateTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.validateToken.$post(undefined, options))
    },
  })
}

export function usePostAuthValidateToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.validateToken.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthValidateTokenMutationOptions<TError, TOnMutateResult>(
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

export function getClusterGroupsRequestsQueryKey() {
  return ['cluster-groups', '/cluster-groups/requests'] as const
}

export function getClusterGroupsRequestsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getClusterGroupsRequestsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cluster-groups'].requests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusterGroupsRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cluster-groups']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups']['requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClusterGroupsRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client)['cluster-groups']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterGroupsRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getClusterGroupsRequestsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['cluster-groups'].requests.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteClusterGroupsRequestsIdMutationKey() {
  return ['cluster-groups', '/cluster-groups/requests/:id', 'DELETE'] as const
}

export function getDeleteClusterGroupsRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cluster-groups']['requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClusterGroupsRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['$delete']>,
    ) {
      return parseResponse(client['cluster-groups'].requests[':id'].$delete(args, options))
    },
  })
}

export function useDeleteClusterGroupsRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['cluster-groups']['requests'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteClusterGroupsRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostClusterGroupsRequestsIdAcceptMutationKey() {
  return ['cluster-groups', '/cluster-groups/requests/:id/accept', 'POST'] as const
}

export function getPostClusterGroupsRequestsIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['cluster-groups']['requests'][':id']['accept']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterGroupsRequestsIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['cluster-groups']['requests'][':id']['accept']['$post']
      >,
    ) {
      return parseResponse(client['cluster-groups'].requests[':id'].accept.$post(args, options))
    },
  })
}

export function usePostClusterGroupsRequestsIdAccept<
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
                    ReturnType<
                      (typeof client)['cluster-groups']['requests'][':id']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['cluster-groups']['requests'][':id']['accept']['$post']>,
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
  const mutationDefaults = getPostClusterGroupsRequestsIdAcceptMutationOptions<
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

export function getPostClusterGroupsIdLeaveMutationKey() {
  return ['cluster-groups', '/cluster-groups/:id/leave', 'POST'] as const
}

export function getPostClusterGroupsIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['leave']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['cluster-groups'][':id']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterGroupsIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cluster-groups'][':id']['leave']['$post']>,
    ) {
      return parseResponse(client['cluster-groups'][':id'].leave.$post(args, options))
    },
  })
}

export function usePostClusterGroupsIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['leave']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['cluster-groups'][':id']['leave']['$post']>,
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
  const mutationDefaults = getPostClusterGroupsIdLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostClusterGroupsIdRegeneratePeopleMutationKey() {
  return ['cluster-groups', '/cluster-groups/:id/regenerate-people', 'POST'] as const
}

export function getPostClusterGroupsIdRegeneratePeopleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['cluster-groups'][':id']['regenerate-people']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['cluster-groups'][':id']['regenerate-people']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterGroupsIdRegeneratePeopleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['cluster-groups'][':id']['regenerate-people']['$post']
      >,
    ) {
      return parseResponse(
        client['cluster-groups'][':id']['regenerate-people'].$post(args, options),
      )
    },
  })
}

export function usePostClusterGroupsIdRegeneratePeople<
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
                    ReturnType<
                      (typeof client)['cluster-groups'][':id']['regenerate-people']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['cluster-groups'][':id']['regenerate-people']['$post']>,
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
  const mutationDefaults = getPostClusterGroupsIdRegeneratePeopleMutationOptions<
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

export function getClusterGroupsIdRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$get']>
  >,
) {
  return ['cluster-groups', '/cluster-groups/:id/requests', toValue(args)] as const
}

export function getClusterGroupsIdRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClusterGroupsIdRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cluster-groups'][':id'].requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusterGroupsIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClusterGroupsIdRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterGroupsIdRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClusterGroupsIdRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cluster-groups'][':id'].requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutClusterGroupsIdRequestsMutationKey() {
  return ['cluster-groups', '/cluster-groups/:id/requests', 'PUT'] as const
}

export function getPutClusterGroupsIdRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['requests']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClusterGroupsIdRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$put']>,
    ) {
      return parseResponse(client['cluster-groups'][':id'].requests.$put(args, options))
    },
  })
}

export function usePutClusterGroupsIdRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['requests']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cluster-groups'][':id']['requests']['$put']>,
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
  const mutationDefaults = getPutClusterGroupsIdRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getClusterGroupsIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cluster-groups'][':id']['users']['$get']>
  >,
) {
  return ['cluster-groups', '/cluster-groups/:id/users', toValue(args)] as const
}

export function getClusterGroupsIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cluster-groups'][':id']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClusterGroupsIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cluster-groups'][':id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusterGroupsIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['cluster-groups'][':id']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClusterGroupsIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client)['cluster-groups'][':id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterGroupsIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClusterGroupsIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cluster-groups'][':id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigDefaultsQueryKey() {
  return ['config', '/config/defaults'] as const
}

export function getConfigDefaultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigDefaultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.defaults.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfigDefaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.defaults.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.defaults.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.defaults.$get>>>
            >
          >,
          ReturnType<typeof getConfigDefaultsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.defaults.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigDefaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigDefaultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.defaults.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDownloadArchiveMutationKey() {
  return ['download', '/download/archive', 'POST'] as const
}

export function getPostDownloadArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.download.archive.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.download.archive.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDownloadArchiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.download.archive.$post>) {
      return parseResponse(client.download.archive.$post(args, options))
    },
  })
}

export function usePostDownloadArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.download.archive.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.download.archive.$post>,
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
  const mutationDefaults = getPostDownloadArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostDownloadInfoMutationKey() {
  return ['download', '/download/info', 'POST'] as const
}

export function getPostDownloadInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.download.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.download.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDownloadInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.download.info.$post>) {
      return parseResponse(client.download.info.$post(args, options))
    },
  })
}

export function usePostDownloadInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.download.info.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.download.info.$post>,
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
  const mutationDefaults = getPostDownloadInfoMutationOptions<TError, TOnMutateResult>(
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

export function getDuplicatesQueryKey() {
  return ['duplicates', '/duplicates'] as const
}

export function getDuplicatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDuplicatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.duplicates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDuplicates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.$get>>>>
          >,
          ReturnType<typeof getDuplicatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDuplicatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDuplicatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.duplicates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDuplicatesMutationKey() {
  return ['duplicates', '/duplicates', 'DELETE'] as const
}

export function getDeleteDuplicatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.duplicates.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDuplicatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.duplicates.$delete>) {
      return parseResponse(client.duplicates.$delete(args, options))
    },
  })
}

export function useDeleteDuplicates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.duplicates.$delete>,
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
  const mutationDefaults = getDeleteDuplicatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostDuplicatesResolveMutationKey() {
  return ['duplicates', '/duplicates/resolve', 'POST'] as const
}

export function getPostDuplicatesResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.resolve.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.duplicates.resolve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDuplicatesResolveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.duplicates.resolve.$post>) {
      return parseResponse(client.duplicates.resolve.$post(args, options))
    },
  })
}

export function usePostDuplicatesResolve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.duplicates.resolve.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.duplicates.resolve.$post>,
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
  const mutationDefaults = getPostDuplicatesResolveMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDuplicatesIdMutationKey() {
  return ['duplicates', '/duplicates/:id', 'DELETE'] as const
}

export function getDeleteDuplicatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.duplicates)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.duplicates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDuplicatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.duplicates)[':id']['$delete']>) {
      return parseResponse(client.duplicates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDuplicatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.duplicates)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.duplicates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteDuplicatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getFacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.faces.$get>>,
) {
  return ['faces', '/faces', toValue(args)] as const
}

export function getFacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.faces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.faces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.faces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
          ReturnType<typeof getFacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.faces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFacesMutationKey() {
  return ['faces', '/faces', 'POST'] as const
}

export function getPostFacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$post>>>>>,
    TError,
    InferRequestType<typeof client.faces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.faces.$post>) {
      return parseResponse(client.faces.$post(args, options))
    },
  })
}

export function usePostFaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$post>>>>>,
          TError,
          InferRequestType<typeof client.faces.$post>,
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
  const mutationDefaults = getPostFacesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutFacesIdMutationKey() {
  return ['faces', '/faces/:id', 'PUT'] as const
}

export function getPutFacesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.faces)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFacesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faces)[':id']['$put']>) {
      return parseResponse(client.faces[':id'].$put(args, options))
    },
  })
}

export function usePutFacesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.faces)[':id']['$put']>,
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
  const mutationDefaults = getPutFacesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFacesIdMutationKey() {
  return ['faces', '/faces/:id', 'DELETE'] as const
}

export function getDeleteFacesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.faces)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFacesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faces)[':id']['$delete']>) {
      return parseResponse(client.faces[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFacesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.faces)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteFacesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsQueryKey() {
  return ['jobs', '/jobs'] as const
}

export function getJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>
          | undefined,
          TError,
          InferRequestType<typeof client.jobs.$post>,
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
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutJobsNameMutationKey() {
  return ['jobs', '/jobs/:name', 'PUT'] as const
}

export function getPutJobsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':name']['$put']>) {
      return parseResponse(client.jobs[':name'].$put(args, options))
    },
  })
}

export function usePutJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':name']['$put']>,
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
  const mutationDefaults = getPutJobsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLibrariesQueryKey() {
  return ['libraries', '/libraries'] as const
}

export function getLibrariesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLibrariesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.libraries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLibraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libraries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libraries.$get>>>>
          >,
          ReturnType<typeof getLibrariesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libraries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLibrariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLibrariesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.libraries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibrariesMutationKey() {
  return ['libraries', '/libraries', 'POST'] as const
}

export function getPostLibrariesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libraries.$post>>>>>,
    TError,
    InferRequestType<typeof client.libraries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibrariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.libraries.$post>) {
      return parseResponse(client.libraries.$post(args, options))
    },
  })
}

export function usePostLibraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libraries.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.libraries.$post>,
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
  const mutationDefaults = getPostLibrariesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLibrariesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.libraries)[':id']['$get']>>,
) {
  return ['libraries', '/libraries/:id', toValue(args)] as const
}

export function getLibrariesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.libraries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibrariesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.libraries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibrariesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.libraries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getLibrariesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibrariesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibrariesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.libraries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLibrariesIdMutationKey() {
  return ['libraries', '/libraries/:id', 'PUT'] as const
}

export function getPutLibrariesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.libraries)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLibrariesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.libraries)[':id']['$put']>) {
      return parseResponse(client.libraries[':id'].$put(args, options))
    },
  })
}

export function usePutLibrariesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.libraries)[':id']['$put']>,
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
  const mutationDefaults = getPutLibrariesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLibrariesIdMutationKey() {
  return ['libraries', '/libraries/:id', 'DELETE'] as const
}

export function getDeleteLibrariesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.libraries)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.libraries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLibrariesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.libraries)[':id']['$delete']>) {
      return parseResponse(client.libraries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLibrariesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.libraries)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.libraries)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteLibrariesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostLibrariesIdScanMutationKey() {
  return ['libraries', '/libraries/:id/scan', 'POST'] as const
}

export function getPostLibrariesIdScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.libraries)[':id']['scan']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.libraries)[':id']['scan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibrariesIdScanMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.libraries)[':id']['scan']['$post']>) {
      return parseResponse(client.libraries[':id'].scan.$post(args, options))
    },
  })
}

export function usePostLibrariesIdScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.libraries)[':id']['scan']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.libraries)[':id']['scan']['$post']>,
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
  const mutationDefaults = getPostLibrariesIdScanMutationOptions<TError, TOnMutateResult>(
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

export function getLibrariesIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.libraries)[':id']['statistics']['$get']>>,
) {
  return ['libraries', '/libraries/:id/statistics', toValue(args)] as const
}

export function getLibrariesIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.libraries)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibrariesIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.libraries[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibrariesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libraries)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.libraries)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.libraries)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.libraries)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLibrariesIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.libraries)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibrariesIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibrariesIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.libraries[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibrariesIdValidateMutationKey() {
  return ['libraries', '/libraries/:id/validate', 'POST'] as const
}

export function getPostLibrariesIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libraries)[':id']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.libraries)[':id']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibrariesIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.libraries)[':id']['validate']['$post']>,
    ) {
      return parseResponse(client.libraries[':id'].validate.$post(args, options))
    },
  })
}

export function usePostLibrariesIdValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.libraries)[':id']['validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.libraries)[':id']['validate']['$post']>,
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
  const mutationDefaults = getPostLibrariesIdValidateMutationOptions<TError, TOnMutateResult>(
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

export function getMapMarkersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.map.markers.$get>>,
) {
  return ['map', '/map/markers', toValue(args)] as const
}

export function getMapMarkersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.map.markers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapMarkersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map.markers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMapMarkers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.map.markers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.markers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.markers.$get>>>>
          >,
          ReturnType<typeof getMapMarkersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.markers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMapMarkersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapMarkersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map.markers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapReverseGeocodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.map)['reverse-geocode']['$get']>>,
) {
  return ['map', '/map/reverse-geocode', toValue(args)] as const
}

export function getMapReverseGeocodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.map)['reverse-geocode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapReverseGeocodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map['reverse-geocode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMapReverseGeocode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.map)['reverse-geocode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.map)['reverse-geocode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)['reverse-geocode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)['reverse-geocode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMapReverseGeocodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.map)['reverse-geocode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapReverseGeocodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapReverseGeocodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map['reverse-geocode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.memories.$get>>,
) {
  return ['memories', '/memories', toValue(args)] as const
}

export function getMemoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.memories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.memories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMemories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.memories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.$get>>>>
          >,
          ReturnType<typeof getMemoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMemoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.memories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMemoriesMutationKey() {
  return ['memories', '/memories', 'POST'] as const
}

export function getPostMemoriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.$post>>>>>,
    TError,
    InferRequestType<typeof client.memories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMemoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.memories.$post>) {
      return parseResponse(client.memories.$post(args, options))
    },
  })
}

export function usePostMemories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.memories.$post>,
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
  const mutationDefaults = getPostMemoriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMemoriesStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.memories.statistics.$get>>,
) {
  return ['memories', '/memories/statistics', toValue(args)] as const
}

export function getMemoriesStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.memories.statistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemoriesStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.memories.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMemoriesStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.memories.statistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.memories.statistics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.memories.statistics.$get>>>
            >
          >,
          ReturnType<typeof getMemoriesStatisticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.memories.statistics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMemoriesStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemoriesStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.memories.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.memories)[':id']['$get']>>,
) {
  return ['memories', '/memories/:id', toValue(args)] as const
}

export function getMemoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.memories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.memories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMemoriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.memories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMemoriesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMemoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.memories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMemoriesIdMutationKey() {
  return ['memories', '/memories/:id', 'PUT'] as const
}

export function getPutMemoriesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.memories)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMemoriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.memories)[':id']['$put']>) {
      return parseResponse(client.memories[':id'].$put(args, options))
    },
  })
}

export function usePutMemoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.memories)[':id']['$put']>,
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
  const mutationDefaults = getPutMemoriesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMemoriesIdMutationKey() {
  return ['memories', '/memories/:id', 'DELETE'] as const
}

export function getDeleteMemoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.memories)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMemoriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.memories)[':id']['$delete']>) {
      return parseResponse(client.memories[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMemoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.memories)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.memories)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteMemoriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutMemoriesIdAssetsMutationKey() {
  return ['memories', '/memories/:id/assets', 'PUT'] as const
}

export function getPutMemoriesIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.memories)[':id']['assets']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.memories)[':id']['assets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMemoriesIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.memories)[':id']['assets']['$put']>) {
      return parseResponse(client.memories[':id'].assets.$put(args, options))
    },
  })
}

export function usePutMemoriesIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.memories)[':id']['assets']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.memories)[':id']['assets']['$put']>,
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
  const mutationDefaults = getPutMemoriesIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMemoriesIdAssetsMutationKey() {
  return ['memories', '/memories/:id/assets', 'DELETE'] as const
}

export function getDeleteMemoriesIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.memories)[':id']['assets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.memories)[':id']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMemoriesIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.memories)[':id']['assets']['$delete']>) {
      return parseResponse(client.memories[':id'].assets.$delete(args, options))
    },
  })
}

export function useDeleteMemoriesIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.memories)[':id']['assets']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.memories)[':id']['assets']['$delete']>,
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
  const mutationDefaults = getDeleteMemoriesIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
) {
  return ['notifications', '/notifications', toValue(args)] as const
}

export function getNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          ReturnType<typeof getNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsMutationKey() {
  return ['notifications', '/notifications', 'PUT'] as const
}

export function getPutNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.notifications.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.$put>) {
      return parseResponse(client.notifications.$put(args, options))
    },
  })
}

export function usePutNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.notifications.$put>,
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
  const mutationDefaults = getPutNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNotificationsMutationKey() {
  return ['notifications', '/notifications', 'DELETE'] as const
}

export function getDeleteNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.notifications.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.$delete>) {
      return parseResponse(client.notifications.$delete(args, options))
    },
  })
}

export function useDeleteNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.notifications.$delete>,
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
  const mutationDefaults = getDeleteNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['$get']>>,
) {
  return ['notifications', '/notifications/:id', toValue(args)] as const
}

export function getNotificationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'PUT'] as const
}

export function getPutNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$put']>) {
      return parseResponse(client.notifications[':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)[':id']['$put']>,
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
  const mutationDefaults = getPutNotificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'DELETE'] as const
}

export function getDeleteNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$delete']>) {
      return parseResponse(client.notifications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.notifications)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteNotificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthAuthorizeMutationKey() {
  return ['oauth', '/oauth/authorize', 'POST'] as const
}

export function getPostOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.authorize.$post>) {
      return parseResponse(client.oauth.authorize.$post(args, options))
    },
  })
}

export function usePostOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.authorize.$post>,
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
  const mutationDefaults = getPostOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthBackchannelLogoutMutationKey() {
  return ['oauth', '/oauth/backchannel-logout', 'POST'] as const
}

export function getPostOauthBackchannelLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['backchannel-logout']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth)['backchannel-logout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthBackchannelLogoutMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth)['backchannel-logout']['$post']>) {
      return parseResponse(client.oauth['backchannel-logout'].$post(args, options))
    },
  })
}

export function usePostOauthBackchannelLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth)['backchannel-logout']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth)['backchannel-logout']['$post']>,
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
  const mutationDefaults = getPostOauthBackchannelLogoutMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthCallbackMutationKey() {
  return ['oauth', '/oauth/callback', 'POST'] as const
}

export function getPostOauthCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.callback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.callback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthCallbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.callback.$post>) {
      return parseResponse(client.oauth.callback.$post(args, options))
    },
  })
}

export function usePostOauthCallback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.callback.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.callback.$post>,
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
  const mutationDefaults = getPostOauthCallbackMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthLinkMutationKey() {
  return ['oauth', '/oauth/link', 'POST'] as const
}

export function getPostOauthLinkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.link.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.link.$post>) {
      return parseResponse(client.oauth.link.$post(args, options))
    },
  })
}

export function usePostOauthLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.link.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.link.$post>,
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
  const mutationDefaults = getPostOauthLinkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauthMobileRedirectQueryKey() {
  return ['oauth', '/oauth/mobile-redirect'] as const
}

export function getOauthMobileRedirectQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauthMobileRedirectQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth['mobile-redirect'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthMobileRedirect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth)['mobile-redirect']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth)['mobile-redirect']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth)['mobile-redirect']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauthMobileRedirectQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth)['mobile-redirect']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthMobileRedirectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauthMobileRedirectQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth['mobile-redirect'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthUnlinkMutationKey() {
  return ['oauth', '/oauth/unlink', 'POST'] as const
}

export function getPostOauthUnlinkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.unlink.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOauthUnlinkMutationKey(),
    async mutationFn() {
      return parseResponse(client.oauth.unlink.$post(undefined, options))
    },
  })
}

export function usePostOauthUnlink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.unlink.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostOauthUnlinkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPartnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partners.$get>>,
) {
  return ['partners', '/partners', toValue(args)] as const
}

export function getPartnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.partners.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePartners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.partners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
          >,
          ReturnType<typeof getPartnersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.partners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPartnersMutationKey() {
  return ['partners', '/partners', 'POST'] as const
}

export function getPostPartnersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$post>>>>>,
    TError,
    InferRequestType<typeof client.partners.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partners.$post>) {
      return parseResponse(client.partners.$post(args, options))
    },
  })
}

export function usePostPartners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.partners.$post>,
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
  const mutationDefaults = getPostPartnersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutPartnersIdMutationKey() {
  return ['partners', '/partners/:id', 'PUT'] as const
}

export function getPutPartnersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.partners)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.partners)[':id']['$put']>) {
      return parseResponse(client.partners[':id'].$put(args, options))
    },
  })
}

export function usePutPartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.partners)[':id']['$put']>,
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
  const mutationDefaults = getPutPartnersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPartnersIdMutationKey() {
  return ['partners', '/partners/:id', 'POST'] as const
}

export function getPostPartnersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.partners)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.partners)[':id']['$post']>) {
      return parseResponse(client.partners[':id'].$post(args, options))
    },
  })
}

export function usePostPartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.partners)[':id']['$post']>,
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
  const mutationDefaults = getPostPartnersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePartnersIdMutationKey() {
  return ['partners', '/partners/:id', 'DELETE'] as const
}

export function getDeletePartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.partners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.partners)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.partners)[':id']['$delete']>) {
      return parseResponse(client.partners[':id'].$delete(args, options))
    },
  })
}

export function useDeletePartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.partners)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.partners)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePartnersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPasskeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.passkeys.$get>>,
) {
  return ['passkeys', '/passkeys', toValue(args)] as const
}

export function getPasskeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.passkeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPasskeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.passkeys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePasskeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.passkeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.$get>>>>
          >,
          ReturnType<typeof getPasskeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPasskeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPasskeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.passkeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPasskeysAuthenticationFinishMutationKey() {
  return ['passkeys', '/passkeys/authentication/finish', 'POST'] as const
}

export function getPostPasskeysAuthenticationFinishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.passkeys.authentication.finish.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.passkeys.authentication.finish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasskeysAuthenticationFinishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.passkeys.authentication.finish.$post>) {
      return parseResponse(client.passkeys.authentication.finish.$post(args, options))
    },
  })
}

export function usePostPasskeysAuthenticationFinish<
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
                Awaited<ReturnType<typeof client.passkeys.authentication.finish.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.passkeys.authentication.finish.$post>,
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
  const mutationDefaults = getPostPasskeysAuthenticationFinishMutationOptions<
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

export function getPostPasskeysAuthenticationStartMutationKey() {
  return ['passkeys', '/passkeys/authentication/start', 'POST'] as const
}

export function getPostPasskeysAuthenticationStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.authentication.start.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPasskeysAuthenticationStartMutationKey(),
    async mutationFn() {
      return parseResponse(client.passkeys.authentication.start.$post(undefined, options))
    },
  })
}

export function usePostPasskeysAuthenticationStart<
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
                Awaited<ReturnType<typeof client.passkeys.authentication.start.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostPasskeysAuthenticationStartMutationOptions<
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

export function getPostPasskeysRegistrationFinishMutationKey() {
  return ['passkeys', '/passkeys/registration/finish', 'POST'] as const
}

export function getPostPasskeysRegistrationFinishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.registration.finish.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.passkeys.registration.finish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasskeysRegistrationFinishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.passkeys.registration.finish.$post>) {
      return parseResponse(client.passkeys.registration.finish.$post(args, options))
    },
  })
}

export function usePostPasskeysRegistrationFinish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.passkeys.registration.finish.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.passkeys.registration.finish.$post>,
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
  const mutationDefaults = getPostPasskeysRegistrationFinishMutationOptions<
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

export function getPostPasskeysRegistrationStartMutationKey() {
  return ['passkeys', '/passkeys/registration/start', 'POST'] as const
}

export function getPostPasskeysRegistrationStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.passkeys.registration.start.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPasskeysRegistrationStartMutationKey(),
    async mutationFn() {
      return parseResponse(client.passkeys.registration.start.$post(undefined, options))
    },
  })
}

export function usePostPasskeysRegistrationStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.passkeys.registration.start.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostPasskeysRegistrationStartMutationOptions<TError, TOnMutateResult>(
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

export function getPasskeysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.passkeys)[':id']['$get']>>,
) {
  return ['passkeys', '/passkeys/:id', toValue(args)] as const
}

export function getPasskeysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.passkeys)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPasskeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.passkeys[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePasskeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.passkeys)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPasskeysIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPasskeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPasskeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.passkeys[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePasskeysIdMutationKey() {
  return ['passkeys', '/passkeys/:id', 'DELETE'] as const
}

export function getDeletePasskeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.passkeys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePasskeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.passkeys)[':id']['$delete']>) {
      return parseResponse(client.passkeys[':id'].$delete(args, options))
    },
  })
}

export function useDeletePasskeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.passkeys)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.passkeys)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePasskeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPasskeysIdMutationKey() {
  return ['passkeys', '/passkeys/:id', 'PATCH'] as const
}

export function getPatchPasskeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.passkeys)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPasskeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.passkeys)[':id']['$patch']>) {
      return parseResponse(client.passkeys[':id'].$patch(args, options))
    },
  })
}

export function usePatchPasskeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passkeys)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.passkeys)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPasskeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
) {
  return ['people', '/people', toValue(args)] as const
}

export function getPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          ReturnType<typeof getPeopleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPeopleMutationKey() {
  return ['people', '/people', 'PUT'] as const
}

export function getPutPeopleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$put>>>>>,
    TError,
    InferRequestType<typeof client.people.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPeopleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.people.$put>) {
      return parseResponse(client.people.$put(args, options))
    },
  })
}

export function usePutPeople<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$put>>>>>,
          TError,
          InferRequestType<typeof client.people.$put>,
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
  const mutationDefaults = getPutPeopleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPeopleMutationKey() {
  return ['people', '/people', 'POST'] as const
}

export function getPostPeopleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$post>>>>>,
    TError,
    InferRequestType<typeof client.people.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPeopleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.people.$post>) {
      return parseResponse(client.people.$post(args, options))
    },
  })
}

export function usePostPeople<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.people.$post>,
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
  const mutationDefaults = getPostPeopleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePeopleMutationKey() {
  return ['people', '/people', 'DELETE'] as const
}

export function getDeletePeopleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.people.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeletePeopleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.people.$delete>) {
      return parseResponse(client.people.$delete(args, options))
    },
  })
}

export function useDeletePeople<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.people.$delete>,
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
  const mutationDefaults = getDeletePeopleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPeopleMergeMutationKey() {
  return ['people', '/people/merge', 'POST'] as const
}

export function getPostPeopleMergeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.merge.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.people.merge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPeopleMergeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.people.merge.$post>) {
      return parseResponse(client.people.merge.$post(args, options))
    },
  })
}

export function usePostPeopleMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.merge.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.people.merge.$post>,
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
  const mutationDefaults = getPostPeopleMergeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPeopleUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.users.$get>>,
) {
  return ['people', '/people/users', toValue(args)] as const
}

export function getPeopleUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeopleUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$get>>>>
          >,
          ReturnType<typeof getPeopleUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPeopleUsersMutationKey() {
  return ['people', '/people/users', 'PUT'] as const
}

export function getPutPeopleUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$put>>>>>,
    TError,
    InferRequestType<typeof client.people.users.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPeopleUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.people.users.$put>) {
      return parseResponse(client.people.users.$put(args, options))
    },
  })
}

export function usePutPeopleUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.people.users.$put>,
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
  const mutationDefaults = getPutPeopleUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePeopleUsersMutationKey() {
  return ['people', '/people/users', 'DELETE'] as const
}

export function getDeletePeopleUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.people.users.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeletePeopleUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.people.users.$delete>) {
      return parseResponse(client.people.users.$delete(args, options))
    },
  })
}

export function useDeletePeopleUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.people.users.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.people.users.$delete>,
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
  const mutationDefaults = getDeletePeopleUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPeopleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
) {
  return ['people', '/people/:id', toValue(args)] as const
}

export function getPeopleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPeopleIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPeopleIdMutationKey() {
  return ['people', '/people/:id', 'PUT'] as const
}

export function getPutPeopleIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.people)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPeopleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.people)[':id']['$put']>) {
      return parseResponse(client.people[':id'].$put(args, options))
    },
  })
}

export function usePutPeopleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.people)[':id']['$put']>,
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
  const mutationDefaults = getPutPeopleIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePeopleIdMutationKey() {
  return ['people', '/people/:id', 'DELETE'] as const
}

export function getDeletePeopleIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.people)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePeopleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.people)[':id']['$delete']>) {
      return parseResponse(client.people[':id'].$delete(args, options))
    },
  })
}

export function useDeletePeopleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.people)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePeopleIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPeopleIdMergeMutationKey() {
  return ['people', '/people/:id/merge', 'POST'] as const
}

export function getPostPeopleIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['merge']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.people)[':id']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPeopleIdMergeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.people)[':id']['merge']['$post']>) {
      return parseResponse(client.people[':id'].merge.$post(args, options))
    },
  })
}

export function usePostPeopleIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['merge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.people)[':id']['merge']['$post']>,
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
  const mutationDefaults = getPostPeopleIdMergeMutationOptions<TError, TOnMutateResult>(
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

export function getPutPeopleIdReassignMutationKey() {
  return ['people', '/people/:id/reassign', 'PUT'] as const
}

export function getPutPeopleIdReassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['reassign']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.people)[':id']['reassign']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPeopleIdReassignMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.people)[':id']['reassign']['$put']>) {
      return parseResponse(client.people[':id'].reassign.$put(args, options))
    },
  })
}

export function usePutPeopleIdReassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['reassign']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.people)[':id']['reassign']['$put']>,
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
  const mutationDefaults = getPutPeopleIdReassignMutationOptions<TError, TOnMutateResult>(
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

export function getPeopleIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['statistics']['$get']>>,
) {
  return ['people', '/people/:id/statistics', toValue(args)] as const
}

export function getPeopleIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['statistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.people)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdThumbnailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['thumbnail']['$get']>>,
) {
  return ['people', '/people/:id/thumbnail', toValue(args)] as const
}

export function getPeopleIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['thumbnail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['thumbnail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['thumbnail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.people)[':id']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
) {
  return ['plugins', '/plugins', toValue(args)] as const
}

export function getPluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          ReturnType<typeof getPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsMethodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.methods.$get>>,
) {
  return ['plugins', '/plugins/methods', toValue(args)] as const
}

export function getPluginsMethodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.methods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.methods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.methods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.plugins.methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.plugins.methods.$get>>>
            >
          >,
          ReturnType<typeof getPluginsMethodsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.methods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsTemplatesQueryKey() {
  return ['plugins', '/plugins/templates'] as const
}

export function getPluginsTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPluginsTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.plugins.templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.plugins.templates.$get>>>
            >
          >,
          ReturnType<typeof getPluginsTemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPluginsTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.templates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['$get']>>,
) {
  return ['plugins', '/plugins/:id', toValue(args)] as const
}

export function getPluginsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPluginsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicConfigQueryKey() {
  return ['public', '/public/config'] as const
}

export function getPublicConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPublicConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublicConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.config.$get>>>>
          >,
          ReturnType<typeof getPublicConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPublicConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.public.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicConfigDefaultsQueryKey() {
  return ['public', '/public/config/defaults'] as const
}

export function getPublicConfigDefaultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPublicConfigDefaultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.config.defaults.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicConfigDefaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.config.defaults.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.public.config.defaults.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.public.config.defaults.$get>>>
            >
          >,
          ReturnType<typeof getPublicConfigDefaultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.public.config.defaults.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicConfigDefaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPublicConfigDefaultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.public.config.defaults.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueuesQueryKey() {
  return ['queues', '/queues'] as const
}

export function getQueuesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueuesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
          ReturnType<typeof getQueuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueuesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.queues.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueuesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':name']['$get']>>,
) {
  return ['queues', '/queues/:name', toValue(args)] as const
}

export function getQueuesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueuesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueuesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getQueuesNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueuesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queues[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQueuesNameMutationKey() {
  return ['queues', '/queues/:name', 'PUT'] as const
}

export function getPutQueuesNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.queues)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQueuesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queues)[':name']['$put']>) {
      return parseResponse(client.queues[':name'].$put(args, options))
    },
  })
}

export function usePutQueuesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.queues)[':name']['$put']>,
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
  const mutationDefaults = getPutQueuesNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueuesNameJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':name']['jobs']['$get']>>,
) {
  return ['queues', '/queues/:name/jobs', toValue(args)] as const
}

export function getQueuesNameJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':name']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueuesNameJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues[':name'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueuesNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':name']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queues)[':name']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queues)[':name']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueuesNameJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':name']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueuesNameJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queues[':name'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteQueuesNameJobsMutationKey() {
  return ['queues', '/queues/:name/jobs', 'DELETE'] as const
}

export function getDeleteQueuesNameJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':name']['jobs']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.queues)[':name']['jobs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueuesNameJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queues)[':name']['jobs']['$delete']>) {
      return parseResponse(client.queues[':name'].jobs.$delete(args, options))
    },
  })
}

export function useDeleteQueuesNameJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.queues)[':name']['jobs']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.queues)[':name']['jobs']['$delete']>,
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
  const mutationDefaults = getDeleteQueuesNameJobsMutationOptions<TError, TOnMutateResult>(
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

export function getSearchCitiesQueryKey() {
  return ['search', '/search/cities'] as const
}

export function getSearchCitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSearchCitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.cities.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearchCities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.cities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.cities.$get>>>>
          >,
          ReturnType<typeof getSearchCitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.cities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSearchCitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.search.cities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchExploreQueryKey() {
  return ['search', '/search/explore'] as const
}

export function getSearchExploreQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSearchExploreQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.explore.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearchExplore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.explore.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.explore.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.explore.$get>>>>
          >,
          ReturnType<typeof getSearchExploreQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.explore.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchExploreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSearchExploreQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.search.explore.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchLargeAssetsMutationKey() {
  return ['search', '/search/large-assets', 'POST'] as const
}

export function getPostSearchLargeAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)['large-assets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.search)['large-assets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchLargeAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.search)['large-assets']['$post']>) {
      return parseResponse(client.search['large-assets'].$post(args, options))
    },
  })
}

export function usePostSearchLargeAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['large-assets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.search)['large-assets']['$post']>,
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
  const mutationDefaults = getPostSearchLargeAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchMetadataMutationKey() {
  return ['search', '/search/metadata', 'POST'] as const
}

export function getPostSearchMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.metadata.$post>) {
      return parseResponse(client.search.metadata.$post(args, options))
    },
  })
}

export function usePostSearchMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.metadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.metadata.$post>,
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
  const mutationDefaults = getPostSearchMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getSearchPersonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.person.$get>>,
) {
  return ['search', '/search/person', toValue(args)] as const
}

export function getSearchPersonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.person.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchPersonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.person.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchPerson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.person.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.person.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.person.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.person.$get>>>>
          >,
          ReturnType<typeof getSearchPersonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.person.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchPersonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchPersonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.person.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchPlacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.places.$get>>,
) {
  return ['search', '/search/places', toValue(args)] as const
}

export function getSearchPlacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.places.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchPlacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.places.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchPlaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.places.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.places.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.places.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.places.$get>>>>
          >,
          ReturnType<typeof getSearchPlacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.places.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchPlacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchPlacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.places.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchRandomMutationKey() {
  return ['search', '/search/random', 'POST'] as const
}

export function getPostSearchRandomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.random.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.random.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchRandomMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.random.$post>) {
      return parseResponse(client.search.random.$post(args, options))
    },
  })
}

export function usePostSearchRandom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.random.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.random.$post>,
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
  const mutationDefaults = getPostSearchRandomMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchSmartMutationKey() {
  return ['search', '/search/smart', 'POST'] as const
}

export function getPostSearchSmartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.smart.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.smart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchSmartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.smart.$post>) {
      return parseResponse(client.search.smart.$post(args, options))
    },
  })
}

export function usePostSearchSmart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.smart.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.smart.$post>,
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
  const mutationDefaults = getPostSearchSmartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSearchStatisticsMutationKey() {
  return ['search', '/search/statistics', 'POST'] as const
}

export function getPostSearchStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.statistics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.statistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchStatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.statistics.$post>) {
      return parseResponse(client.search.statistics.$post(args, options))
    },
  })
}

export function usePostSearchStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.statistics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.statistics.$post>,
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
  const mutationDefaults = getPostSearchStatisticsMutationOptions<TError, TOnMutateResult>(
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

export function getSearchSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.suggestions.$get>>,
) {
  return ['search', '/search/suggestions', toValue(args)] as const
}

export function getSearchSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.suggestions.$get>>>
            >
          >,
          ReturnType<typeof getSearchSuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerAboutQueryKey() {
  return ['server', '/server/about'] as const
}

export function getServerAboutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerAboutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.about.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.about.$get>>>>
          >,
          ReturnType<typeof getServerAboutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerAboutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.about.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerApkLinksQueryKey() {
  return ['server', '/server/apk-links'] as const
}

export function getServerApkLinksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerApkLinksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server['apk-links'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServerApkLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server)['apk-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.server)['apk-links']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.server)['apk-links']['$get']>>>
            >
          >,
          ReturnType<typeof getServerApkLinksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.server)['apk-links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerApkLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerApkLinksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server['apk-links'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerConfigQueryKey() {
  return ['server', '/server/config'] as const
}

export function getServerConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.config.$get>>>>
          >,
          ReturnType<typeof getServerConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerFeaturesQueryKey() {
  return ['server', '/server/features'] as const
}

export function getServerFeaturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerFeaturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.features.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.server.features.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.server.features.$get>>>
            >
          >,
          ReturnType<typeof getServerFeaturesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.features.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerFeaturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.features.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerLicenseQueryKey() {
  return ['server', '/server/license'] as const
}

export function getServerLicenseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerLicenseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$get>>>>
          >,
          ReturnType<typeof getServerLicenseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerLicenseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.license.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServerLicenseMutationKey() {
  return ['server', '/server/license', 'PUT'] as const
}

export function getPutServerLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.server.license.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutServerLicenseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.server.license.$put>) {
      return parseResponse(client.server.license.$put(args, options))
    },
  })
}

export function usePutServerLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.server.license.$put>,
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
  const mutationDefaults = getPutServerLicenseMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteServerLicenseMutationKey() {
  return ['server', '/server/license', 'DELETE'] as const
}

export function getDeleteServerLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteServerLicenseMutationKey(),
    async mutationFn() {
      return parseResponse(client.server.license.$delete(undefined, options))
    },
  })
}

export function useDeleteServerLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.server.license.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteServerLicenseMutationOptions<TError, TOnMutateResult>(
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

export function getServerMediaTypesQueryKey() {
  return ['server', '/server/media-types'] as const
}

export function getServerMediaTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerMediaTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server['media-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServerMediaTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server)['media-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.server)['media-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.server)['media-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServerMediaTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.server)['media-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerMediaTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerMediaTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server['media-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerPingQueryKey() {
  return ['server', '/server/ping'] as const
}

export function getServerPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>
          >,
          ReturnType<typeof getServerPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerStatisticsQueryKey() {
  return ['server', '/server/statistics'] as const
}

export function getServerStatisticsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerStatisticsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.statistics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServerStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.server.statistics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.server.statistics.$get>>>
            >
          >,
          ReturnType<typeof getServerStatisticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.statistics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerStatisticsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.statistics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerStorageQueryKey() {
  return ['server', '/server/storage'] as const
}

export function getServerStorageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerStorageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.storage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.storage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.storage.$get>>>>
          >,
          ReturnType<typeof getServerStorageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerStorageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.storage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerVersionQueryKey() {
  return ['server', '/server/version'] as const
}

export function getServerVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.version.$get>>>>
          >,
          ReturnType<typeof getServerVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerVersionCheckQueryKey() {
  return ['server', '/server/version-check'] as const
}

export function getServerVersionCheckQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerVersionCheckQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server['version-check'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServerVersionCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server)['version-check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.server)['version-check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.server)['version-check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServerVersionCheckQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.server)['version-check']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerVersionCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerVersionCheckQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server['version-check'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerVersionHistoryQueryKey() {
  return ['server', '/server/version-history'] as const
}

export function getServerVersionHistoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerVersionHistoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server['version-history'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServerVersionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server)['version-history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.server)['version-history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.server)['version-history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServerVersionHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.server)['version-history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerVersionHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerVersionHistoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server['version-history'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionsQueryKey() {
  return ['sessions', '/sessions'] as const
}

export function getSessionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSessionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          ReturnType<typeof getSessionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSessionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSessionsMutationKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function getPostSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$post>) {
      return parseResponse(client.sessions.$post(args, options))
    },
  })
}

export function usePostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sessions.$post>,
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
  const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSessionsMutationKey() {
  return ['sessions', '/sessions', 'DELETE'] as const
}

export function getDeleteSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.sessions.$delete(undefined, options))
    },
  })
}

export function useDeleteSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSessionsIdMutationKey() {
  return ['sessions', '/sessions/:id', 'PUT'] as const
}

export function getPutSessionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSessionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':id']['$put']>) {
      return parseResponse(client.sessions[':id'].$put(args, options))
    },
  })
}

export function usePutSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':id']['$put']>,
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
  const mutationDefaults = getPutSessionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSessionsIdMutationKey() {
  return ['sessions', '/sessions/:id', 'DELETE'] as const
}

export function getDeleteSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sessions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':id']['$delete']>) {
      return parseResponse(client.sessions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sessions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sessions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSessionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsIdLockMutationKey() {
  return ['sessions', '/sessions/:id/lock', 'POST'] as const
}

export function getPostSessionsIdLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':id']['lock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sessions)[':id']['lock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsIdLockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':id']['lock']['$post']>) {
      return parseResponse(client.sessions[':id'].lock.$post(args, options))
    },
  })
}

export function usePostSessionsIdLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sessions)[':id']['lock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sessions)[':id']['lock']['$post']>,
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
  const mutationDefaults = getPostSessionsIdLockMutationOptions<TError, TOnMutateResult>(
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

export function getSharedLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links']['$get']>>,
) {
  return ['shared-links', '/shared-links', toValue(args)] as const
}

export function getSharedLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shared-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['$get']>>>
            >
          >,
          ReturnType<typeof getSharedLinksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shared-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSharedLinksMutationKey() {
  return ['shared-links', '/shared-links', 'POST'] as const
}

export function getPostSharedLinksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shared-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharedLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shared-links']['$post']>) {
      return parseResponse(client['shared-links'].$post(args, options))
    },
  })
}

export function usePostSharedLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['shared-links']['$post']>,
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
  const mutationDefaults = getPostSharedLinksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSharedLinksLoginMutationKey() {
  return ['shared-links', '/shared-links/login', 'POST'] as const
}

export function getPostSharedLinksLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['login']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shared-links']['login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharedLinksLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shared-links']['login']['$post']>) {
      return parseResponse(client['shared-links'].login.$post(args, options))
    },
  })
}

export function usePostSharedLinksLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links']['login']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['shared-links']['login']['$post']>,
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
  const mutationDefaults = getPostSharedLinksLoginMutationOptions<TError, TOnMutateResult>(
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

export function getSharedLinksMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links']['me']['$get']>>,
) {
  return ['shared-links', '/shared-links/me', toValue(args)] as const
}

export function getSharedLinksMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links']['me']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLinksMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shared-links'].me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLinksMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links']['me']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links']['me']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links']['me']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedLinksMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLinksMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLinksMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shared-links'].me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLinksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links'][':id']['$get']>>,
) {
  return ['shared-links', '/shared-links/:id', toValue(args)] as const
}

export function getSharedLinksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLinksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shared-links'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLinksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shared-links'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedLinksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLinksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLinksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shared-links'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSharedLinksIdMutationKey() {
  return ['shared-links', '/shared-links/:id', 'DELETE'] as const
}

export function getDeleteSharedLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared-links'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['shared-links'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSharedLinksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shared-links'][':id']['$delete']>) {
      return parseResponse(client['shared-links'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteSharedLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['shared-links'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['shared-links'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteSharedLinksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSharedLinksIdMutationKey() {
  return ['shared-links', '/shared-links/:id', 'PATCH'] as const
}

export function getPatchSharedLinksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-links'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shared-links'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSharedLinksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shared-links'][':id']['$patch']>) {
      return parseResponse(client['shared-links'][':id'].$patch(args, options))
    },
  })
}

export function usePatchSharedLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['shared-links'][':id']['$patch']>,
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
  const mutationDefaults = getPatchSharedLinksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSharedLinksIdAssetsMutationKey() {
  return ['shared-links', '/shared-links/:id/assets', 'PUT'] as const
}

export function getPutSharedLinksIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shared-links'][':id']['assets']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['shared-links'][':id']['assets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSharedLinksIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['shared-links'][':id']['assets']['$put']>,
    ) {
      return parseResponse(client['shared-links'][':id'].assets.$put(args, options))
    },
  })
}

export function usePutSharedLinksIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links'][':id']['assets']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['shared-links'][':id']['assets']['$put']>,
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
  const mutationDefaults = getPutSharedLinksIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSharedLinksIdAssetsMutationKey() {
  return ['shared-links', '/shared-links/:id/assets', 'DELETE'] as const
}

export function getDeleteSharedLinksIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shared-links'][':id']['assets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['shared-links'][':id']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSharedLinksIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['shared-links'][':id']['assets']['$delete']>,
    ) {
      return parseResponse(client['shared-links'][':id'].assets.$delete(args, options))
    },
  })
}

export function useDeleteSharedLinksIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shared-links'][':id']['assets']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['shared-links'][':id']['assets']['$delete']>,
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
  const mutationDefaults = getDeleteSharedLinksIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getStacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
) {
  return ['stacks', '/stacks', toValue(args)] as const
}

export function getStacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStacks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
          ReturnType<typeof getStacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStacksMutationKey() {
  return ['stacks', '/stacks', 'POST'] as const
}

export function getPostStacksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$post>>>>>,
    TError,
    InferRequestType<typeof client.stacks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.$post>) {
      return parseResponse(client.stacks.$post(args, options))
    },
  })
}

export function usePostStacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.stacks.$post>,
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
  const mutationDefaults = getPostStacksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStacksMutationKey() {
  return ['stacks', '/stacks', 'DELETE'] as const
}

export function getDeleteStacksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.stacks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStacksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.$delete>) {
      return parseResponse(client.stacks.$delete(args, options))
    },
  })
}

export function useDeleteStacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.stacks.$delete>,
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
  const mutationDefaults = getDeleteStacksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStacksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['$get']>>,
) {
  return ['stacks', '/stacks/:id', toValue(args)] as const
}

export function getStacksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStacksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStacksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStacksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStacksIdMutationKey() {
  return ['stacks', '/stacks/:id', 'PUT'] as const
}

export function getPutStacksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStacksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['$put']>) {
      return parseResponse(client.stacks[':id'].$put(args, options))
    },
  })
}

export function usePutStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['$put']>,
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
  const mutationDefaults = getPutStacksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStacksIdMutationKey() {
  return ['stacks', '/stacks/:id', 'DELETE'] as const
}

export function getDeleteStacksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStacksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['$delete']>) {
      return parseResponse(client.stacks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteStacksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStacksIdAssetsAssetIdMutationKey() {
  return ['stacks', '/stacks/:id/assets/:assetId', 'DELETE'] as const
}

export function getDeleteStacksIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stacks)[':id']['assets'][':assetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['assets'][':assetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStacksIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stacks)[':id']['assets'][':assetId']['$delete']>,
    ) {
      return parseResponse(client.stacks[':id'].assets[':assetId'].$delete(args, options))
    },
  })
}

export function useDeleteStacksIdAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.stacks)[':id']['assets'][':assetId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['assets'][':assetId']['$delete']>,
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
  const mutationDefaults = getDeleteStacksIdAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getSyncAckQueryKey() {
  return ['sync', '/sync/ack'] as const
}

export function getSyncAckQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSyncAckQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.ack.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSyncAck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$get>>>>
          >,
          ReturnType<typeof getSyncAckQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSyncAckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSyncAckQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.ack.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSyncAckMutationKey() {
  return ['sync', '/sync/ack', 'POST'] as const
}

export function getPostSyncAckMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.sync.ack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncAckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.ack.$post>) {
      return parseResponse(client.sync.ack.$post(args, options))
    },
  })
}

export function usePostSyncAck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.sync.ack.$post>,
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
  const mutationDefaults = getPostSyncAckMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSyncAckMutationKey() {
  return ['sync', '/sync/ack', 'DELETE'] as const
}

export function getDeleteSyncAckMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.sync.ack.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSyncAckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.ack.$delete>) {
      return parseResponse(client.sync.ack.$delete(args, options))
    },
  })
}

export function useDeleteSyncAck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ack.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.sync.ack.$delete>,
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
  const mutationDefaults = getDeleteSyncAckMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSyncStreamMutationKey() {
  return ['sync', '/sync/stream', 'POST'] as const
}

export function getPostSyncStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.stream.$post>>>>>,
    TError,
    InferRequestType<typeof client.sync.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.stream.$post>) {
      return parseResponse(client.sync.stream.$post(args, options))
    },
  })
}

export function usePostSyncStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.stream.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sync.stream.$post>,
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
  const mutationDefaults = getPostSyncStreamMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSystemConfigQueryKey() {
  return ['system-config', '/system-config'] as const
}

export function getSystemConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['system-config'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['system-config']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['system-config']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['system-config']['$get']>>>
            >
          >,
          ReturnType<typeof getSystemConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['system-config']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['system-config'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSystemConfigMutationKey() {
  return ['system-config', '/system-config', 'PUT'] as const
}

export function getPutSystemConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['system-config']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['system-config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemConfigMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['system-config']['$put']>) {
      return parseResponse(client['system-config'].$put(args, options))
    },
  })
}

export function usePutSystemConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['system-config']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['system-config']['$put']>,
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
  const mutationDefaults = getPutSystemConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSystemConfigDefaultsQueryKey() {
  return ['system-config', '/system-config/defaults'] as const
}

export function getSystemConfigDefaultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemConfigDefaultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['system-config'].defaults.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConfigDefaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['system-config']['defaults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['system-config']['defaults']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['system-config']['defaults']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemConfigDefaultsQueryKey>
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
          Awaited<ReturnType<(typeof client)['system-config']['defaults']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigDefaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConfigDefaultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['system-config'].defaults.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemConfigStorageTemplateOptionsQueryKey() {
  return ['system-config', '/system-config/storage-template-options'] as const
}

export function getSystemConfigStorageTemplateOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemConfigStorageTemplateOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['system-config']['storage-template-options'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConfigStorageTemplateOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['system-config']['storage-template-options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['system-config']['storage-template-options']['$get']>
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
                  ReturnType<(typeof client)['system-config']['storage-template-options']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSystemConfigStorageTemplateOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['system-config']['storage-template-options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigStorageTemplateOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConfigStorageTemplateOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['system-config']['storage-template-options'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemMetadataAdminOnboardingQueryKey() {
  return ['system-metadata', '/system-metadata/admin-onboarding'] as const
}

export function getSystemMetadataAdminOnboardingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemMetadataAdminOnboardingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['system-metadata']['admin-onboarding'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemMetadataAdminOnboarding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['system-metadata']['admin-onboarding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['system-metadata']['admin-onboarding']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['system-metadata']['admin-onboarding']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemMetadataAdminOnboardingQueryKey>
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
          Awaited<ReturnType<(typeof client)['system-metadata']['admin-onboarding']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemMetadataAdminOnboardingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemMetadataAdminOnboardingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['system-metadata']['admin-onboarding'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemMetadataAdminOnboardingMutationKey() {
  return ['system-metadata', '/system-metadata/admin-onboarding', 'POST'] as const
}

export function getPostSystemMetadataAdminOnboardingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['system-metadata']['admin-onboarding']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['system-metadata']['admin-onboarding']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemMetadataAdminOnboardingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['system-metadata']['admin-onboarding']['$post']>,
    ) {
      return parseResponse(client['system-metadata']['admin-onboarding'].$post(args, options))
    },
  })
}

export function usePostSystemMetadataAdminOnboarding<
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
                    ReturnType<(typeof client)['system-metadata']['admin-onboarding']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['system-metadata']['admin-onboarding']['$post']>,
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
  const mutationDefaults = getPostSystemMetadataAdminOnboardingMutationOptions<
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

export function getSystemMetadataReverseGeocodingStateQueryKey() {
  return ['system-metadata', '/system-metadata/reverse-geocoding-state'] as const
}

export function getSystemMetadataReverseGeocodingStateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemMetadataReverseGeocodingStateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['system-metadata']['reverse-geocoding-state'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemMetadataReverseGeocodingState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['system-metadata']['reverse-geocoding-state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['system-metadata']['reverse-geocoding-state']['$get']>
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
                  ReturnType<(typeof client)['system-metadata']['reverse-geocoding-state']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSystemMetadataReverseGeocodingStateQueryKey>
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
          Awaited<ReturnType<(typeof client)['system-metadata']['reverse-geocoding-state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemMetadataReverseGeocodingStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemMetadataReverseGeocodingStateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['system-metadata']['reverse-geocoding-state'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemMetadataVersionCheckStateQueryKey() {
  return ['system-metadata', '/system-metadata/version-check-state'] as const
}

export function getSystemMetadataVersionCheckStateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemMetadataVersionCheckStateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['system-metadata']['version-check-state'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemMetadataVersionCheckState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['system-metadata']['version-check-state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['system-metadata']['version-check-state']['$get']>
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
                  ReturnType<(typeof client)['system-metadata']['version-check-state']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSystemMetadataVersionCheckStateQueryKey>
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
          Awaited<ReturnType<(typeof client)['system-metadata']['version-check-state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemMetadataVersionCheckStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemMetadataVersionCheckStateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['system-metadata']['version-check-state'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTagsMutationKey() {
  return ['tags', '/tags', 'PUT'] as const
}

export function getPutTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$put>>>>>,
    TError,
    InferRequestType<typeof client.tags.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$put>) {
      return parseResponse(client.tags.$put(args, options))
    },
  })
}

export function usePutTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$put>>>>>,
          TError,
          InferRequestType<typeof client.tags.$put>,
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
  const mutationDefaults = getPutTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
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
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutTagsAssetsMutationKey() {
  return ['tags', '/tags/assets', 'PUT'] as const
}

export function getPutTagsAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.assets.$put>>>>>,
    TError,
    InferRequestType<typeof client.tags.assets.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.assets.$put>) {
      return parseResponse(client.tags.assets.$put(args, options))
    },
  })
}

export function usePutTagsAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.assets.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.tags.assets.$put>,
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
  const mutationDefaults = getPutTagsAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':id']['$get']>>,
) {
  return ['tags', '/tags/:id', toValue(args)] as const
}

export function getTagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTagsIdMutationKey() {
  return ['tags', '/tags/:id', 'PUT'] as const
}

export function getPutTagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.tags)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':id']['$put']>) {
      return parseResponse(client.tags[':id'].$put(args, options))
    },
  })
}

export function usePutTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':id']['$put']>,
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
  const mutationDefaults = getPutTagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsIdMutationKey() {
  return ['tags', '/tags/:id', 'DELETE'] as const
}

export function getDeleteTagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':id']['$delete']>) {
      return parseResponse(client.tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutTagsIdAssetsMutationKey() {
  return ['tags', '/tags/:id/assets', 'PUT'] as const
}

export function getPutTagsIdAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['assets']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':id']['assets']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':id']['assets']['$put']>) {
      return parseResponse(client.tags[':id'].assets.$put(args, options))
    },
  })
}

export function usePutTagsIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':id']['assets']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':id']['assets']['$put']>,
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
  const mutationDefaults = getPutTagsIdAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsIdAssetsMutationKey() {
  return ['tags', '/tags/:id/assets', 'DELETE'] as const
}

export function getDeleteTagsIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['assets']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':id']['assets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':id']['assets']['$delete']>) {
      return parseResponse(client.tags[':id'].assets.$delete(args, options))
    },
  })
}

export function useDeleteTagsIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':id']['assets']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':id']['assets']['$delete']>,
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
  const mutationDefaults = getDeleteTagsIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getTimelineBucketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.bucket.$get>>,
) {
  return ['timeline', '/timeline/bucket', toValue(args)] as const
}

export function getTimelineBucketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.bucket.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimelineBucketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timeline.bucket.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimelineBucket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.bucket.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.bucket.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.bucket.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.bucket.$get>>>
            >
          >,
          ReturnType<typeof getTimelineBucketQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.bucket.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineBucketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimelineBucketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timeline.bucket.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimelineBucketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.buckets.$get>>,
) {
  return ['timeline', '/timeline/buckets', toValue(args)] as const
}

export function getTimelineBucketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.buckets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimelineBucketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timeline.buckets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimelineBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.buckets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.buckets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.buckets.$get>>>
            >
          >,
          ReturnType<typeof getTimelineBucketsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.buckets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimelineBucketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timeline.buckets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTrashEmptyMutationKey() {
  return ['trash', '/trash/empty', 'POST'] as const
}

export function getPostTrashEmptyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trash.empty.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTrashEmptyMutationKey(),
    async mutationFn() {
      return parseResponse(client.trash.empty.$post(undefined, options))
    },
  })
}

export function usePostTrashEmpty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trash.empty.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTrashEmptyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTrashRestoreMutationKey() {
  return ['trash', '/trash/restore', 'POST'] as const
}

export function getPostTrashRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trash.restore.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTrashRestoreMutationKey(),
    async mutationFn() {
      return parseResponse(client.trash.restore.$post(undefined, options))
    },
  })
}

export function usePostTrashRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trash.restore.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTrashRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostTrashRestoreAssetsMutationKey() {
  return ['trash', '/trash/restore/assets', 'POST'] as const
}

export function getPostTrashRestoreAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.trash.restore.assets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.trash.restore.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrashRestoreAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.trash.restore.assets.$post>) {
      return parseResponse(client.trash.restore.assets.$post(args, options))
    },
  })
}

export function usePostTrashRestoreAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trash.restore.assets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.trash.restore.assets.$post>,
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
  const mutationDefaults = getPostTrashRestoreAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeMutationKey() {
  return ['users', '/users/me', 'PUT'] as const
}

export function getPutUsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$put>>>>>,
    TError,
    InferRequestType<typeof client.users.me.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.$put>) {
      return parseResponse(client.users.me.$put(args, options))
    },
  })
}

export function usePutUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.users.me.$put>,
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
  const mutationDefaults = getPutUsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersMeCalendarHeatmapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.me)['calendar-heatmap']['$get']>>,
) {
  return ['users', '/users/me/calendar-heatmap', toValue(args)] as const
}

export function getUsersMeCalendarHeatmapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.me)['calendar-heatmap']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeCalendarHeatmapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me['calendar-heatmap'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeCalendarHeatmap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me)['calendar-heatmap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.me)['calendar-heatmap']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['calendar-heatmap']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['calendar-heatmap']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeCalendarHeatmapQueryKey>
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
          Awaited<ReturnType<(typeof client.users.me)['calendar-heatmap']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeCalendarHeatmapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeCalendarHeatmapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me['calendar-heatmap'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeLicenseQueryKey() {
  return ['users', '/users/me/license'] as const
}

export function getUsersMeLicenseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeLicenseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMeLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeLicenseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeLicenseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.license.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeLicenseMutationKey() {
  return ['users', '/users/me/license', 'PUT'] as const
}

export function getPutUsersMeLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.license.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeLicenseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.license.$put>) {
      return parseResponse(client.users.me.license.$put(args, options))
    },
  })
}

export function usePutUsersMeLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.license.$put>,
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
  const mutationDefaults = getPutUsersMeLicenseMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeLicenseMutationKey() {
  return ['users', '/users/me/license', 'DELETE'] as const
}

export function getDeleteUsersMeLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeLicenseMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.license.$delete(undefined, options))
    },
  })
}

export function useDeleteUsersMeLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.users.me.license.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteUsersMeLicenseMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeOnboardingQueryKey() {
  return ['users', '/users/me/onboarding'] as const
}

export function getUsersMeOnboardingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeOnboardingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.onboarding.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeOnboarding<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeOnboardingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeOnboardingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeOnboardingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.onboarding.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeOnboardingMutationKey() {
  return ['users', '/users/me/onboarding', 'PUT'] as const
}

export function getPutUsersMeOnboardingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.onboarding.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeOnboardingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.onboarding.$put>) {
      return parseResponse(client.users.me.onboarding.$put(args, options))
    },
  })
}

export function usePutUsersMeOnboarding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.onboarding.$put>,
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
  const mutationDefaults = getPutUsersMeOnboardingMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeOnboardingMutationKey() {
  return ['users', '/users/me/onboarding', 'DELETE'] as const
}

export function getDeleteUsersMeOnboardingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeOnboardingMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.onboarding.$delete(undefined, options))
    },
  })
}

export function useDeleteUsersMeOnboarding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.users.me.onboarding.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteUsersMeOnboardingMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMePreferencesQueryKey() {
  return ['users', '/users/me/preferences'] as const
}

export function getUsersMePreferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMePreferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMePreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.preferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.preferences.$get>>>
            >
          >,
          ReturnType<typeof getUsersMePreferencesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMePreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMePreferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.preferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMePreferencesMutationKey() {
  return ['users', '/users/me/preferences', 'PUT'] as const
}

export function getPutUsersMePreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.preferences.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.preferences.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMePreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.preferences.$put>) {
      return parseResponse(client.users.me.preferences.$put(args, options))
    },
  })
}

export function usePutUsersMePreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.preferences.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.preferences.$put>,
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
  const mutationDefaults = getPutUsersMePreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersProfileImageMutationKey() {
  return ['users', '/users/profile-image', 'POST'] as const
}

export function getPostUsersProfileImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)['profile-image']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['profile-image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersProfileImageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['profile-image']['$post']>) {
      return parseResponse(client.users['profile-image'].$post(args, options))
    },
  })
}

export function usePostUsersProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['profile-image']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)['profile-image']['$post']>,
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
  const mutationDefaults = getPostUsersProfileImageMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersProfileImageMutationKey() {
  return ['users', '/users/profile-image', 'DELETE'] as const
}

export function getDeleteUsersProfileImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['profile-image']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersProfileImageMutationKey(),
    async mutationFn() {
      return parseResponse(client.users['profile-image'].$delete(undefined, options))
    },
  })
}

export function useDeleteUsersProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)['profile-image']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteUsersProfileImageMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  return ['users', '/users/:id', toValue(args)] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdProfileImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['profile-image']['$get']>>,
) {
  return ['users', '/users/:id/profile-image', toValue(args)] as const
}

export function getUsersIdProfileImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['profile-image']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdProfileImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id']['profile-image'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdProfileImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['profile-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['profile-image']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['profile-image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['profile-image']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdProfileImageQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['profile-image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdProfileImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdProfileImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id']['profile-image'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewFolderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.view.folder.$get>>,
) {
  return ['view', '/view/folder', toValue(args)] as const
}

export function getViewFolderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.view.folder.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewFolderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.view.folder.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useViewFolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.view.folder.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.view.folder.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.view.folder.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.view.folder.$get>>>>
          >,
          ReturnType<typeof getViewFolderQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.view.folder.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getViewFolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewFolderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.view.folder.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewFolderUniquePathsQueryKey() {
  return ['view', '/view/folder/unique-paths'] as const
}

export function getViewFolderUniquePathsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getViewFolderUniquePathsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.view.folder['unique-paths'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViewFolderUniquePaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.view.folder)['unique-paths']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.view.folder)['unique-paths']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.view.folder)['unique-paths']['$get']>>
              >
            >
          >,
          ReturnType<typeof getViewFolderUniquePathsQueryKey>
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
          Awaited<ReturnType<(typeof client.view.folder)['unique-paths']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewFolderUniquePathsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getViewFolderUniquePathsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.view.folder['unique-paths'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
) {
  return ['workflows', '/workflows', toValue(args)] as const
}

export function getWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          ReturnType<typeof getWorkflowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkflowsMutationKey() {
  return ['workflows', '/workflows', 'POST'] as const
}

export function getPostWorkflowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>>,
    TError,
    InferRequestType<typeof client.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.$post>) {
      return parseResponse(client.workflows.$post(args, options))
    },
  })
}

export function usePostWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workflows.$post>,
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
  const mutationDefaults = getPostWorkflowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkflowsTriggersQueryKey() {
  return ['workflows', '/workflows/triggers'] as const
}

export function getWorkflowsTriggersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWorkflowsTriggersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.triggers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsTriggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflows.triggers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflows.triggers.$get>>>
            >
          >,
          ReturnType<typeof getWorkflowsTriggersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.triggers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWorkflowsTriggersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.triggers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['$get']>>,
) {
  return ['workflows', '/workflows/:id', toValue(args)] as const
}

export function getWorkflowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getWorkflowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkflowsIdMutationKey() {
  return ['workflows', '/workflows/:id', 'PUT'] as const
}

export function getPutWorkflowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkflowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':id']['$put']>) {
      return parseResponse(client.workflows[':id'].$put(args, options))
    },
  })
}

export function usePutWorkflowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':id']['$put']>,
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
  const mutationDefaults = getPutWorkflowsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWorkflowsIdMutationKey() {
  return ['workflows', '/workflows/:id', 'DELETE'] as const
}

export function getDeleteWorkflowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workflows)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkflowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':id']['$delete']>) {
      return parseResponse(client.workflows[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWorkflowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.workflows)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.workflows)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWorkflowsIdMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowsIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['logs']['$get']>>,
) {
  return ['workflows', '/workflows/:id/logs', toValue(args)] as const
}

export function getWorkflowsIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':id']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':id']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsIdLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsIdShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['share']['$get']>>,
) {
  return ['workflows', '/workflows/:id/share', toValue(args)] as const
}

export function getWorkflowsIdShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['share']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsIdShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':id'].share.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsIdShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['share']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':id']['share']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':id']['share']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':id']['share']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsIdShareQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':id']['share']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsIdShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsIdShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':id'].share.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
