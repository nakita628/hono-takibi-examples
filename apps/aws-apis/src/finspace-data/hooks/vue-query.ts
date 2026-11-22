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

export function getCredentialsKey() {
  return ['credentials'] as const
}

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getDatasetsv2Key() {
  return ['datasetsv2'] as const
}

export function getPermissionGroupKey() {
  return ['permission-group'] as const
}

export function getPermissionGroupMaxResultsKey() {
  return ['permission-group#maxResults'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUserMaxResultsKey() {
  return ['user#maxResults'] as const
}

export function getWorkingLocationV1Key() {
  return ['workingLocationV1'] as const
}

export function getPostPermissionGroupPermissionGroupIdUsersUserIdMutationKey() {
  return ['permission-group', '/permission-group/:permissionGroupId/users/:userId', 'POST'] as const
}

export function getPostPermissionGroupPermissionGroupIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPermissionGroupPermissionGroupIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client['permission-group'][':permissionGroupId'].users[':userId'].$post(args, options),
      )
    },
  })
}

export function usePostPermissionGroupPermissionGroupIdUsersUserId<
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
                    (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
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
  const mutationDefaults = getPostPermissionGroupPermissionGroupIdUsersUserIdMutationOptions<
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

export function getDeletePermissionGroupPermissionGroupIdUsersUserIdMutationKey() {
  return [
    'permission-group',
    '/permission-group/:permissionGroupId/users/:userId',
    'DELETE',
  ] as const
}

export function getDeletePermissionGroupPermissionGroupIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionGroupPermissionGroupIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client['permission-group'][':permissionGroupId'].users[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePermissionGroupPermissionGroupIdUsersUserId<
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
                    (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
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
  const mutationDefaults = getDeletePermissionGroupPermissionGroupIdUsersUserIdMutationOptions<
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

export function getDatasetsDatasetIdChangesetsv2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetId/changesetsv2', keyArgs] as const
}

export function getDatasetsDatasetIdChangesetsv2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetIdChangesetsv2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetId'].changesetsv2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetIdChangesetsv2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetIdChangesetsv2QueryKey>
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
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetIdChangesetsv2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetIdChangesetsv2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetId'].changesetsv2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsDatasetIdChangesetsv2MutationKey() {
  return ['datasets', '/datasets/:datasetId/changesetsv2', 'POST'] as const
}

export function getPostDatasetsDatasetIdChangesetsv2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsDatasetIdChangesetsv2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>,
    ) {
      return parseResponse(client.datasets[':datasetId'].changesetsv2.$post(args, options))
    },
  })
}

export function usePostDatasetsDatasetIdChangesetsv2<
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
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>,
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
  const mutationDefaults = getPostDatasetsDatasetIdChangesetsv2MutationOptions<
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

export function getDatasetsDatasetIdDataviewsv2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetId/dataviewsv2', keyArgs] as const
}

export function getDatasetsDatasetIdDataviewsv2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetIdDataviewsv2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetId'].dataviewsv2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetIdDataviewsv2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetIdDataviewsv2QueryKey>
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
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetIdDataviewsv2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetIdDataviewsv2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetId'].dataviewsv2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsDatasetIdDataviewsv2MutationKey() {
  return ['datasets', '/datasets/:datasetId/dataviewsv2', 'POST'] as const
}

export function getPostDatasetsDatasetIdDataviewsv2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsDatasetIdDataviewsv2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>,
    ) {
      return parseResponse(client.datasets[':datasetId'].dataviewsv2.$post(args, options))
    },
  })
}

export function usePostDatasetsDatasetIdDataviewsv2<
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
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>,
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
  const mutationDefaults = getPostDatasetsDatasetIdDataviewsv2MutationOptions<
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

export function getDatasetsv2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasetsv2.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasetsv2', '/datasetsv2', keyArgs] as const
}

export function getDatasetsv2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasetsv2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsv2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasetsv2.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatasetsv2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasetsv2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>
          >,
          ReturnType<typeof getDatasetsv2QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsv2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsv2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasetsv2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsv2MutationKey() {
  return ['datasetsv2', '/datasetsv2', 'POST'] as const
}

export function getPostDatasetsv2MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$post>>>>>,
    TError,
    InferRequestType<typeof client.datasetsv2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsv2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasetsv2.$post>) {
      return parseResponse(client.datasetsv2.$post(args, options))
    },
  })
}

export function usePostDatasetsv2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.datasetsv2.$post>,
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
  const mutationDefaults = getPostDatasetsv2MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPermissionGroupMutationKey() {
  return ['permission-group', '/permission-group', 'POST'] as const
}

export function getPostPermissionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['permission-group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['permission-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPermissionGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['permission-group']['$post']>) {
      return parseResponse(client['permission-group'].$post(args, options))
    },
  })
}

export function usePostPermissionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['permission-group']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['permission-group']['$post']>,
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
  const mutationDefaults = getPostPermissionGroupMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserMutationKey() {
  return ['user', '/user', 'POST'] as const
}

export function getPostUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$post>) {
      return parseResponse(client.user.$post(args, options))
    },
  })
}

export function usePostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
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
  const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasetsv2DatasetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasetsv2', '/datasetsv2/:datasetId', keyArgs] as const
}

export function getDatasetsv2DatasetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsv2DatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasetsv2[':datasetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsv2DatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsv2DatasetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsv2DatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsv2DatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasetsv2[':datasetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatasetsv2DatasetIdMutationKey() {
  return ['datasetsv2', '/datasetsv2/:datasetId', 'PUT'] as const
}

export function getPutDatasetsv2DatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasetsv2)[':datasetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasetsv2DatasetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$put']>) {
      return parseResponse(client.datasetsv2[':datasetId'].$put(args, options))
    },
  })
}

export function usePutDatasetsv2DatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasetsv2)[':datasetId']['$put']>,
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
  const mutationDefaults = getPutDatasetsv2DatasetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatasetsv2DatasetIdMutationKey() {
  return ['datasetsv2', '/datasetsv2/:datasetId', 'DELETE'] as const
}

export function getDeleteDatasetsv2DatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasetsv2)[':datasetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetsv2DatasetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$delete']>) {
      return parseResponse(client.datasetsv2[':datasetId'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetsv2DatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasetsv2)[':datasetId']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetsv2DatasetIdMutationOptions<TError, TOnMutateResult>(
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

export function getPermissionGroupPermissionGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['permission-group', '/permission-group/:permissionGroupId', keyArgs] as const
}

export function getPermissionGroupPermissionGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPermissionGroupPermissionGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['permission-group'][':permissionGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePermissionGroupPermissionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>
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
                  ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPermissionGroupPermissionGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionGroupPermissionGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPermissionGroupPermissionGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['permission-group'][':permissionGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPermissionGroupPermissionGroupIdMutationKey() {
  return ['permission-group', '/permission-group/:permissionGroupId', 'PUT'] as const
}

export function getPutPermissionGroupPermissionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPermissionGroupPermissionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$put']>,
    ) {
      return parseResponse(client['permission-group'][':permissionGroupId'].$put(args, options))
    },
  })
}

export function usePutPermissionGroupPermissionGroupId<
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
                  ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$put']>,
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
  const mutationDefaults = getPutPermissionGroupPermissionGroupIdMutationOptions<
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

export function getDeletePermissionGroupPermissionGroupIdMutationKey() {
  return ['permission-group', '/permission-group/:permissionGroupId', 'DELETE'] as const
}

export function getDeletePermissionGroupPermissionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionGroupPermissionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>,
    ) {
      return parseResponse(client['permission-group'][':permissionGroupId'].$delete(args, options))
    },
  })
}

export function useDeletePermissionGroupPermissionGroupId<
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
                  ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>,
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
  const mutationDefaults = getDeletePermissionGroupPermissionGroupIdMutationOptions<
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

export function getPostUserUserIdDisableMutationKey() {
  return ['user', '/user/:userId/disable', 'POST'] as const
}

export function getPostUserUserIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['disable']['$post']>) {
      return parseResponse(client.user[':userId'].disable.$post(args, options))
    },
  })
}

export function usePostUserUserIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['disable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['disable']['$post']>,
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
  const mutationDefaults = getPostUserUserIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserUserIdEnableMutationKey() {
  return ['user', '/user/:userId/enable', 'POST'] as const
}

export function getPostUserUserIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['enable']['$post']>) {
      return parseResponse(client.user[':userId'].enable.$post(args, options))
    },
  })
}

export function usePostUserUserIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['enable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['enable']['$post']>,
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
  const mutationDefaults = getPostUserUserIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetId/changesetsv2/:changesetId', keyArgs] as const
}

export function getDatasetsDatasetIdChangesetsv2ChangesetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetId'].changesetsv2[':changesetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetIdChangesetsv2ChangesetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']>
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
                    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
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
                    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey>
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
              (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetId'].changesetsv2[':changesetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatasetsDatasetIdChangesetsv2ChangesetIdMutationKey() {
  return ['datasets', '/datasets/:datasetId/changesetsv2/:changesetId', 'PUT'] as const
}

export function getPutDatasetsDatasetIdChangesetsv2ChangesetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDatasetsDatasetIdChangesetsv2ChangesetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
      >,
    ) {
      return parseResponse(
        client.datasets[':datasetId'].changesetsv2[':changesetId'].$put(args, options),
      )
    },
  })
}

export function usePutDatasetsDatasetIdChangesetsv2ChangesetId<
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
                    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
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
  const mutationDefaults = getPutDatasetsDatasetIdChangesetsv2ChangesetIdMutationOptions<
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

export function getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetId/dataviewsv2/:dataviewId', keyArgs] as const
}

export function getDatasetsDatasetIdDataviewsv2DataviewIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetId'].dataviewsv2[':dataviewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetIdDataviewsv2DataviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']>
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
                    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
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
                    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey>
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
            ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetId'].dataviewsv2[':dataviewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsMutationKey() {
  return [
    'datasets',
    '/datasets/:datasetId/dataviewsv2/:dataviewId/external-access-details',
    'POST',
  ] as const
}

export function getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
      >,
    ) {
      return parseResponse(
        client.datasets[':datasetId'].dataviewsv2[':dataviewId']['external-access-details'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetails<
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
                    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
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
  const mutationDefaults =
    getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsMutationOptions<
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

export function getCredentialsProgrammaticEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['credentials', '/credentials/programmatic#environmentId', keyArgs] as const
}

export function getCredentialsProgrammaticEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCredentialsProgrammaticEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credentials['programmatic#environmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCredentialsProgrammaticEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>
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
                  ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCredentialsProgrammaticEnvironmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialsProgrammaticEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCredentialsProgrammaticEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credentials['programmatic#environmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/:userId', keyArgs] as const
}

export function getUserUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUserUserIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserUserIdMutationKey() {
  return ['user', '/user/:userId', 'PUT'] as const
}

export function getPutUserUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['$put']>) {
      return parseResponse(client.user[':userId'].$put(args, options))
    },
  })
}

export function usePutUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['$put']>,
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
  const mutationDefaults = getPutUserUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWorkingLocationV1MutationKey() {
  return ['workingLocationV1', '/workingLocationV1', 'POST'] as const
}

export function getPostWorkingLocationV1MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workingLocationV1.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.workingLocationV1.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkingLocationV1MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workingLocationV1.$post>) {
      return parseResponse(client.workingLocationV1.$post(args, options))
    },
  })
}

export function usePostWorkingLocationV1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workingLocationV1.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.workingLocationV1.$post>,
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
  const mutationDefaults = getPostWorkingLocationV1MutationOptions<TError, TOnMutateResult>(
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

export function getPermissionGroupMaxResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['permission-group#maxResults']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['permission-group#maxResults', '/permission-group#maxResults', keyArgs] as const
}

export function getPermissionGroupMaxResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['permission-group#maxResults']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPermissionGroupMaxResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['permission-group#maxResults'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePermissionGroupMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['permission-group#maxResults']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPermissionGroupMaxResultsQueryKey>
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
          Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionGroupMaxResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPermissionGroupMaxResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['permission-group#maxResults'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdPermissionGroupsMaxResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user', '/user/:userId/permission-groups#maxResults', keyArgs] as const
}

export function getUserUserIdPermissionGroupsMaxResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdPermissionGroupsMaxResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId']['permission-groups#maxResults'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdPermissionGroupsMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
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
                    (typeof client.user)[':userId']['permission-groups#maxResults']['$get']
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
                    (typeof client.user)[':userId']['permission-groups#maxResults']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserUserIdPermissionGroupsMaxResultsQueryKey>
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
            ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPermissionGroupsMaxResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdPermissionGroupsMaxResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId']['permission-groups#maxResults'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserMaxResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user#maxResults']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['user#maxResults', '/user#maxResults', keyArgs] as const
}

export function getUserMaxResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user#maxResults']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserMaxResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user#maxResults'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user#maxResults']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
            >
          >,
          ReturnType<typeof getUserMaxResultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserMaxResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserMaxResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user#maxResults'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'permission-group',
    '/permission-group/:permissionGroupId/users#maxResults',
    keyArgs,
  ] as const
}

export function getPermissionGroupPermissionGroupIdUsersMaxResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['permission-group'][':permissionGroupId']['users#maxResults'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePermissionGroupPermissionGroupIdUsersMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
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
                    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
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
                    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey>
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
              (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['permission-group'][':permissionGroupId']['users#maxResults'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserUserIdPasswordMutationKey() {
  return ['user', '/user/:userId/password', 'POST'] as const
}

export function getPostUserUserIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['password']['$post']>) {
      return parseResponse(client.user[':userId'].password.$post(args, options))
    },
  })
}

export function usePostUserUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['password']['$post']>,
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
  const mutationDefaults = getPostUserUserIdPasswordMutationOptions<TError, TOnMutateResult>(
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
