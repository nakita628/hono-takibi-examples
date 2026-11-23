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

export function getAnnouncementsKey() {
  return ['announcements'] as const
}

export function getArrKey() {
  return ['arr'] as const
}

export function getBackupsKey() {
  return ['backups'] as const
}

export function getDatabasesKey() {
  return ['databases'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getArrQueryKey() {
  return ['arr', '/arr'] as const
}

export function getArrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getArrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.arr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arr.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arr.$get>>>>>,
          ReturnType<typeof getArrQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getArrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.arr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesQueryKey() {
  return ['databases', '/databases'] as const
}

export function getDatabasesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDatabasesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
          >,
          ReturnType<typeof getDatabasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDatabasesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMutationKey() {
  return ['databases', '/databases', 'POST'] as const
}

export function getPostDatabasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$post>>>>>,
    TError,
    InferRequestType<typeof client.databases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.databases.$post>) {
      return parseResponse(client.databases.$post(args, options))
    },
  })
}

export function usePostDatabases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.databases.$post>,
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
  const mutationDefaults = getPostDatabasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatabasesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases)[':id']['$get']>>,
) {
  return ['databases', '/databases/:id', toValue(args)] as const
}

export function getDatabasesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDatabasesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatabasesIdMutationKey() {
  return ['databases', '/databases/:id', 'DELETE'] as const
}

export function getDeleteDatabasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.databases)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.databases)[':id']['$delete']>) {
      return parseResponse(client.databases[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.databases)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.databases)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteDatabasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDatabasesIdMutationKey() {
  return ['databases', '/databases/:id', 'PATCH'] as const
}

export function getPatchDatabasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.databases)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.databases)[':id']['$patch']>) {
      return parseResponse(client.databases[':id'].$patch(args, options))
    },
  })
}

export function usePatchDatabasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.databases)[':id']['$patch']>,
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
  const mutationDefaults = getPatchDatabasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatabasesIdSyncMutationKey() {
  return ['databases', '/databases/:id/sync', 'POST'] as const
}

export function getPostDatabasesIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':id']['sync']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.databases)[':id']['sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesIdSyncMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.databases)[':id']['sync']['$post']>) {
      return parseResponse(client.databases[':id'].sync.$post(args, options))
    },
  })
}

export function usePostDatabasesIdSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases)[':id']['sync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases)[':id']['sync']['$post']>,
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
  const mutationDefaults = getPostDatabasesIdSyncMutationOptions<TError, TOnMutateResult>(
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
) {
  return ['jobs', '/jobs/:id', toValue(args)] as const
}

export function getJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBackupsQueryKey() {
  return ['backups', '/backups'] as const
}

export function getBackupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBackupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBackups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
          >,
          ReturnType<typeof getBackupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBackupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.backups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBackupsMutationKey() {
  return ['backups', '/backups', 'POST'] as const
}

export function getPostBackupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBackupsMutationKey(),
    async mutationFn() {
      return parseResponse(client.backups.$post(undefined, options))
    },
  })
}

export function usePostBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$post>>>>
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
  const mutationDefaults = getPostBackupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBackupsFilenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.backups)[':filename']['$get']>>,
) {
  return ['backups', '/backups/:filename', toValue(args)] as const
}

export function getBackupsFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.backups)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBackupsFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backups[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBackupsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.backups)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBackupsFilenameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':filename']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBackupsFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.backups[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBackupsFilenameMutationKey() {
  return ['backups', '/backups/:filename', 'DELETE'] as const
}

export function getDeleteBackupsFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':filename']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.backups)[':filename']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupsFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backups)[':filename']['$delete']>) {
      return parseResponse(client.backups[':filename'].$delete(args, options))
    },
  })
}

export function useDeleteBackupsFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':filename']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backups)[':filename']['$delete']>,
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
  const mutationDefaults = getDeleteBackupsFilenameMutationOptions<TError, TOnMutateResult>(
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

export function getPostBackupsUploadMutationKey() {
  return ['backups', '/backups/upload', 'POST'] as const
}

export function getPostBackupsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.backups.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupsUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.backups.upload.$post>) {
      return parseResponse(client.backups.upload.$post(args, options))
    },
  })
}

export function usePostBackupsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.backups.upload.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.backups.upload.$post>,
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
  const mutationDefaults = getPostBackupsUploadMutationOptions<TError, TOnMutateResult>(
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

export function getBackupsSettingsQueryKey() {
  return ['backups', '/backups/settings'] as const
}

export function getBackupsSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBackupsSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backups.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBackupsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.backups.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.backups.settings.$get>>>
            >
          >,
          ReturnType<typeof getBackupsSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBackupsSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.backups.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchBackupsSettingsMutationKey() {
  return ['backups', '/backups/settings', 'PATCH'] as const
}

export function getPatchBackupsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.settings.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.backups.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchBackupsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.backups.settings.$patch>) {
      return parseResponse(client.backups.settings.$patch(args, options))
    },
  })
}

export function usePatchBackupsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.backups.settings.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.backups.settings.$patch>,
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
  const mutationDefaults = getPatchBackupsSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getAnnouncementsQueryKey() {
  return ['announcements', '/announcements'] as const
}

export function getAnnouncementsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnnouncementsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.announcements.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnnouncements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
          >,
          ReturnType<typeof getAnnouncementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnnouncementsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.announcements.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnouncementsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.announcements)[':id']['$get']>>,
) {
  return ['announcements', '/announcements/:id', toValue(args)] as const
}

export function getAnnouncementsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.announcements)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnouncementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.announcements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.announcements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.announcements)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.announcements)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.announcements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnouncementsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.announcements)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnouncementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnouncementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.announcements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
