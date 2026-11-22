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

export function createPostPermissionGroupPermissionGroupIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPermissionGroupPermissionGroupIdUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePermissionGroupPermissionGroupIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePermissionGroupPermissionGroupIdUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDatasetsDatasetIdChangesetsv2QueryKey(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/changesetsv2', keyArgs] as const
}

export function getDatasetsDatasetIdChangesetsv2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetsDatasetIdChangesetsv2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetId'].changesetsv2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDatasetsDatasetIdChangesetsv2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDatasetsDatasetIdChangesetsv2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDatasetsDatasetIdChangesetsv2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasetsDatasetIdChangesetsv2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDatasetsDatasetIdDataviewsv2QueryKey(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/dataviewsv2', keyArgs] as const
}

export function getDatasetsDatasetIdDataviewsv2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetsDatasetIdDataviewsv2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetId'].dataviewsv2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDatasetsDatasetIdDataviewsv2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDatasetsDatasetIdDataviewsv2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDatasetsDatasetIdDataviewsv2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasetsDatasetIdDataviewsv2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDatasetsv2QueryKey(args: InferRequestType<typeof client.datasetsv2.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datasetsv2', '/datasetsv2', keyArgs] as const
}

export function getDatasetsv2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datasetsv2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsv2QueryKey>
  >({
    queryKey: getDatasetsv2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasetsv2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDatasetsv2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datasetsv2.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsv2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsv2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDatasetsv2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datasetsv2.$post>,
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
    const mutationDefaults = getPostDatasetsv2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPermissionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['permission-group']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['permission-group']['$post']>,
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
    const mutationDefaults = getPostPermissionGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
        TError,
        InferRequestType<typeof client.user.$post>,
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
    const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDatasetsv2DatasetIdQueryKey(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasetsv2', '/datasetsv2/:datasetId', keyArgs] as const
}

export function getDatasetsv2DatasetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsv2DatasetIdQueryKey>
  >({
    queryKey: getDatasetsv2DatasetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasetsv2[':datasetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDatasetsv2DatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsv2DatasetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsv2DatasetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutDatasetsv2DatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatasetsv2DatasetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDatasetsv2DatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatasetsv2DatasetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPermissionGroupPermissionGroupIdQueryKey(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['permission-group', '/permission-group/:permissionGroupId', keyArgs] as const
}

export function getPermissionGroupPermissionGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPermissionGroupPermissionGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['permission-group'][':permissionGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPermissionGroupPermissionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPermissionGroupPermissionGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutPermissionGroupPermissionGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPermissionGroupPermissionGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePermissionGroupPermissionGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePermissionGroupPermissionGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserUserIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserUserIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/changesetsv2/:changesetId', keyArgs] as const
}

export function getDatasetsDatasetIdChangesetsv2ChangesetIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetsDatasetIdChangesetsv2ChangesetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetId'].changesetsv2[':changesetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDatasetsDatasetIdChangesetsv2ChangesetId<
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
  args: () => InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDatasetsDatasetIdChangesetsv2ChangesetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDatasetsDatasetIdChangesetsv2ChangesetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatasetsDatasetIdChangesetsv2ChangesetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/dataviewsv2/:dataviewId', keyArgs] as const
}

export function getDatasetsDatasetIdDataviewsv2DataviewIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetId'].dataviewsv2[':dataviewId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDatasetsDatasetIdDataviewsv2DataviewId<
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
  args: () => InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDatasetsDatasetIdDataviewsv2DataviewIdQueryKey>
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
      ...getDatasetsDatasetIdDataviewsv2DataviewIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCredentialsProgrammaticEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['credentials', '/credentials/programmatic#environmentId', keyArgs] as const
}

export function getCredentialsProgrammaticEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCredentialsProgrammaticEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credentials['programmatic#environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCredentialsProgrammaticEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCredentialsProgrammaticEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/:userId', keyArgs] as const
}

export function getUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.user)[':userId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >({
    queryKey: getUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':userId']['$put']>,
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
    const mutationDefaults = getPutUserUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWorkingLocationV1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.workingLocationV1.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.workingLocationV1.$post>,
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
    const mutationDefaults = getPostWorkingLocationV1MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPermissionGroupMaxResultsQueryKey(
  args: InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['permission-group#maxResults', '/permission-group#maxResults', keyArgs] as const
}

export function getPermissionGroupMaxResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPermissionGroupMaxResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['permission-group#maxResults'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPermissionGroupMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPermissionGroupMaxResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdPermissionGroupsMaxResultsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/:userId/permission-groups#maxResults', keyArgs] as const
}

export function getUserUserIdPermissionGroupsMaxResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserUserIdPermissionGroupsMaxResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId']['permission-groups#maxResults'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdPermissionGroupsMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user)[':userId']['permission-groups#maxResults']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserUserIdPermissionGroupsMaxResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserMaxResultsQueryKey(
  args: InferRequestType<(typeof client)['user#maxResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user#maxResults', '/user#maxResults', keyArgs] as const
}

export function getUserMaxResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user#maxResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserMaxResultsQueryKey>
  >({
    queryKey: getUserMaxResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user#maxResults'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserMaxResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['user#maxResults']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserMaxResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserMaxResultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'permission-group',
    '/permission-group/:permissionGroupId/users#maxResults',
    keyArgs,
  ] as const
}

export function getPermissionGroupPermissionGroupIdUsersMaxResultsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPermissionGroupPermissionGroupIdUsersMaxResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['permission-group'][':permissionGroupId']['users#maxResults'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPermissionGroupPermissionGroupIdUsersMaxResults<
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
  args: () => InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPermissionGroupPermissionGroupIdUsersMaxResultsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostUserUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
