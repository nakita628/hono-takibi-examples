import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAdminAclGetGrantsPhpQueryKey(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
) {
  return ['api', '/api/admin/acl/getGrants.php', args] as const
}

export function getApiAdminAclGetGrantsPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminAclGetGrantsPhpQueryKey>
  >({
    queryKey: getApiAdminAclGetGrantsPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.acl['getGrants.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminAclGetGrantsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAclGetGrantsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAdminAclGetGrantsPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminAclGetGrantsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAclGetGrantsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAdminAclGetGrantsPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminAclSaveGrantsPhpMutationKey() {
  return ['api', '/api/admin/acl/saveGrants.php', 'POST'] as const
}

export function getPostApiAdminAclSaveGrantsPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminAclSaveGrantsPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>,
    ) {
      return parseResponse(client.api.admin.acl['saveGrants.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminAclSaveGrantsPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminAclSaveGrantsPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminAddUserPhpMutationKey() {
  return ['api', '/api/admin/addUser.php', 'POST'] as const
}

export function getPostApiAdminAddUserPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['addUser.php']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['addUser.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminAddUserPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin)['addUser.php']['$post']>) {
      return parseResponse(client.api.admin['addUser.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminAddUserPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['addUser.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['addUser.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminAddUserPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminChangeUserPasswordPhpMutationKey() {
  return ['api', '/api/admin/changeUserPassword.php', 'POST'] as const
}

export function getPostApiAdminChangeUserPasswordPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['changeUserPassword.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['changeUserPassword.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminChangeUserPasswordPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['changeUserPassword.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['changeUserPassword.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminChangeUserPasswordPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['changeUserPassword.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['changeUserPassword.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminChangeUserPasswordPhpMutationOptions<
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

export function getPostApiAdminClamavTestPhpMutationKey() {
  return ['api', '/api/admin/clamavTest.php', 'POST'] as const
}

export function getPostApiAdminClamavTestPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['clamavTest.php']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminClamavTestPhpMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.admin['clamavTest.php'].$post(undefined, options))
    },
  })
}

export function usePostApiAdminClamavTestPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['clamavTest.php']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminClamavTestPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminDiskUsageDeleteSnapshotPhpMutationKey() {
  return ['api', '/api/admin/diskUsageDeleteSnapshot.php', 'POST'] as const
}

export function getPostApiAdminDiskUsageDeleteSnapshotPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminDiskUsageDeleteSnapshotPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['diskUsageDeleteSnapshot.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminDiskUsageDeleteSnapshotPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminDiskUsageDeleteSnapshotPhpMutationOptions<
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

export function getApiAdminDiskUsageSummaryPhpQueryKey(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
) {
  return ['api', '/api/admin/diskUsageSummary.php', args] as const
}

export function getApiAdminDiskUsageSummaryPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminDiskUsageSummaryPhpQueryKey>
  >({
    queryKey: getApiAdminDiskUsageSummaryPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['diskUsageSummary.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminDiskUsageSummaryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminDiskUsageSummaryPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAdminDiskUsageSummaryPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminDiskUsageSummaryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminDiskUsageSummaryPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAdminDiskUsageSummaryPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminDiskUsageTriggerScanPhpMutationKey() {
  return ['api', '/api/admin/diskUsageTriggerScan.php', 'POST'] as const
}

export function getPostApiAdminDiskUsageTriggerScanPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminDiskUsageTriggerScanPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['diskUsageTriggerScan.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminDiskUsageTriggerScanPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminDiskUsageTriggerScanPhpMutationOptions<
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

export function getPostApiAdminDownloadProBundlePhpMutationKey() {
  return ['api', '/api/admin/downloadProBundle.php', 'POST'] as const
}

export function getPostApiAdminDownloadProBundlePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['downloadProBundle.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['downloadProBundle.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminDownloadProBundlePhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['downloadProBundle.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['downloadProBundle.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminDownloadProBundlePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['downloadProBundle.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['downloadProBundle.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminDownloadProBundlePhpMutationOptions<
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

export function getApiAdminGetConfigPhpQueryKey() {
  return ['api', '/api/admin/getConfig.php'] as const
}

export function getApiAdminGetConfigPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminGetConfigPhpQueryKey>
  >({
    queryKey: getApiAdminGetConfigPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['getConfig.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminGetConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminGetConfigPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminGetConfigPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminGetConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminGetConfigPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminGetConfigPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminGetUsersPhpQueryKey() {
  return ['api', '/api/admin/getUsers.php'] as const
}

export function getApiAdminGetUsersPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminGetUsersPhpQueryKey>
  >({
    queryKey: getApiAdminGetUsersPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['getUsers.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminGetUsersPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminGetUsersPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminGetUsersPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminGetUsersPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminGetUsersPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminGetUsersPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminInstallProBundlePhpMutationKey() {
  return ['api', '/api/admin/installProBundle.php', 'POST'] as const
}

export function getPostApiAdminInstallProBundlePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['installProBundle.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['installProBundle.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminInstallProBundlePhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['installProBundle.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['installProBundle.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminInstallProBundlePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['installProBundle.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['installProBundle.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminInstallProBundlePhpMutationOptions<
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

export function getApiAdminOidcDebugInfoPhpQueryKey() {
  return ['api', '/api/admin/oidcDebugInfo.php'] as const
}

export function getApiAdminOidcDebugInfoPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminOidcDebugInfoPhpQueryKey>
  >({
    queryKey: getApiAdminOidcDebugInfoPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['oidcDebugInfo.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminOidcDebugInfoPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminOidcDebugInfoPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminOidcDebugInfoPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminOidcDebugInfoPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminOidcDebugInfoPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminOidcDebugInfoPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminOidcTestPhpMutationKey() {
  return ['api', '/api/admin/oidcTest.php', 'POST'] as const
}

export function getPostApiAdminOidcTestPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['oidcTest.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['oidcTest.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminOidcTestPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin)['oidcTest.php']['$post']>) {
      return parseResponse(client.api.admin['oidcTest.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminOidcTestPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['oidcTest.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['oidcTest.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminOidcTestPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminReadMetadataPhpQueryKey(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
) {
  return ['api', '/api/admin/readMetadata.php', args] as const
}

export function getApiAdminReadMetadataPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminReadMetadataPhpQueryKey>
  >({
    queryKey: getApiAdminReadMetadataPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['readMetadata.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminReadMetadataPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminReadMetadataPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAdminReadMetadataPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminReadMetadataPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminReadMetadataPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAdminReadMetadataPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiAdminRemoveUserPhpMutationKey() {
  return ['api', '/api/admin/removeUser.php', 'DELETE'] as const
}

export function getDeleteApiAdminRemoveUserPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['removeUser.php']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['removeUser.php']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminRemoveUserPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['removeUser.php']['$delete']>,
    ) {
      return parseResponse(client.api.admin['removeUser.php'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminRemoveUserPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['removeUser.php']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['removeUser.php']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminRemoveUserPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminResumableCleanupPhpMutationKey() {
  return ['api', '/api/admin/resumableCleanup.php', 'POST'] as const
}

export function getPostApiAdminResumableCleanupPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['resumableCleanup.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['resumableCleanup.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminResumableCleanupPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['resumableCleanup.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['resumableCleanup.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminResumableCleanupPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['resumableCleanup.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['resumableCleanup.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminResumableCleanupPhpMutationOptions<
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

export function getPostApiAdminSetEncryptionKeyPhpMutationKey() {
  return ['api', '/api/admin/setEncryptionKey.php', 'POST'] as const
}

export function getPostApiAdminSetEncryptionKeyPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminSetEncryptionKeyPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>,
    ) {
      return parseResponse(client.api.admin['setEncryptionKey.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminSetEncryptionKeyPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminSetEncryptionKeyPhpMutationOptions<
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

export function getPostApiAdminSetLicensePhpMutationKey() {
  return ['api', '/api/admin/setLicense.php', 'POST'] as const
}

export function getPostApiAdminSetLicensePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['setLicense.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['setLicense.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminSetLicensePhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin)['setLicense.php']['$post']>) {
      return parseResponse(client.api.admin['setLicense.php'].$post(args, options))
    },
  })
}

export function usePostApiAdminSetLicensePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['setLicense.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['setLicense.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminSetLicensePhpMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiAdminUpdateConfigPhpMutationKey() {
  return ['api', '/api/admin/updateConfig.php', 'PUT'] as const
}

export function getPutApiAdminUpdateConfigPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['updateConfig.php']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['updateConfig.php']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminUpdateConfigPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['updateConfig.php']['$put']>,
    ) {
      return parseResponse(client.api.admin['updateConfig.php'].$put(args, options))
    },
  })
}

export function usePutApiAdminUpdateConfigPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['updateConfig.php']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['updateConfig.php']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminUpdateConfigPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiAdminUpdateUserPermissionsPhpMutationKey() {
  return ['api', '/api/admin/updateUserPermissions.php', 'PUT'] as const
}

export function getPutApiAdminUpdateUserPermissionsPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminUpdateUserPermissionsPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>,
    ) {
      return parseResponse(client.api.admin['updateUserPermissions.php'].$put(args, options))
    },
  })
}

export function usePutApiAdminUpdateUserPermissionsPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminUpdateUserPermissionsPhpMutationOptions<
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

export function getApiAdminVirusLogPhpQueryKey(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
) {
  return ['api', '/api/admin/virusLog.php', args] as const
}

export function getApiAdminVirusLogPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminVirusLogPhpQueryKey>
  >({
    queryKey: getApiAdminVirusLogPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['virusLog.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminVirusLogPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminVirusLogPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminVirusLogPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminVirusLogPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminVirusLogPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminVirusLogPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAuthAuthPhpMutationKey() {
  return ['api', '/api/auth/auth.php', 'POST'] as const
}

export function getPostApiAuthAuthPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['auth.php']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.auth)['auth.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthAuthPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.auth)['auth.php']['$post']>) {
      return parseResponse(client.api.auth['auth.php'].$post(args, options))
    },
  })
}

export function usePostApiAuthAuthPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['auth.php']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.auth)['auth.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthAuthPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiAuthCheckAuthPhpQueryKey() {
  return ['api', '/api/auth/checkAuth.php'] as const
}

export function getApiAuthCheckAuthPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthCheckAuthPhpQueryKey>
  >({
    queryKey: getApiAuthCheckAuthPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth['checkAuth.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAuthCheckAuthPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthCheckAuthPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAuthCheckAuthPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAuthCheckAuthPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthCheckAuthPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAuthCheckAuthPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAuthLoginBasicPhpQueryKey() {
  return ['api', '/api/auth/login_basic.php'] as const
}

export function getApiAuthLoginBasicPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthLoginBasicPhpQueryKey>
  >({
    queryKey: getApiAuthLoginBasicPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth['login_basic.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAuthLoginBasicPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthLoginBasicPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAuthLoginBasicPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAuthLoginBasicPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthLoginBasicPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAuthLoginBasicPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAuthLogoutPhpMutationKey() {
  return ['api', '/api/auth/logout.php', 'POST'] as const
}

export function getPostApiAuthLogoutPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['logout.php']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.auth)['logout.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthLogoutPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.auth)['logout.php']['$post']>) {
      return parseResponse(client.api.auth['logout.php'].$post(args, options))
    },
  })
}

export function usePostApiAuthLogoutPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.auth)['logout.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.auth)['logout.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAuthLogoutPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiAuthTokenPhpQueryKey() {
  return ['api', '/api/auth/token.php'] as const
}

export function getApiAuthTokenPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthTokenPhpQueryKey>
  >({
    queryKey: getApiAuthTokenPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth['token.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAuthTokenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthTokenPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAuthTokenPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAuthTokenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthTokenPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAuthTokenPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiFileCopyFilesPhpMutationKey() {
  return ['api', '/api/file/copyFiles.php', 'POST'] as const
}

export function getPostApiFileCopyFilesPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['copyFiles.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['copyFiles.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileCopyFilesPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['copyFiles.php']['$post']>) {
      return parseResponse(client.api.file['copyFiles.php'].$post(args, options))
    },
  })
}

export function usePostApiFileCopyFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['copyFiles.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['copyFiles.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileCopyFilesPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileCreateFilePhpMutationKey() {
  return ['api', '/api/file/createFile.php', 'POST'] as const
}

export function getPostApiFileCreateFilePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['createFile.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['createFile.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileCreateFilePhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['createFile.php']['$post']>) {
      return parseResponse(client.api.file['createFile.php'].$post(args, options))
    },
  })
}

export function usePostApiFileCreateFilePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['createFile.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['createFile.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileCreateFilePhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileCreateShareLinkPhpMutationKey() {
  return ['api', '/api/file/createShareLink.php', 'POST'] as const
}

export function getPostApiFileCreateShareLinkPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['createShareLink.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['createShareLink.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileCreateShareLinkPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.file)['createShareLink.php']['$post']>,
    ) {
      return parseResponse(client.api.file['createShareLink.php'].$post(args, options))
    },
  })
}

export function usePostApiFileCreateShareLinkPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['createShareLink.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['createShareLink.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileCreateShareLinkPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileDeleteFilesPhpMutationKey() {
  return ['api', '/api/file/deleteFiles.php', 'POST'] as const
}

export function getPostApiFileDeleteFilesPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['deleteFiles.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['deleteFiles.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileDeleteFilesPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['deleteFiles.php']['$post']>) {
      return parseResponse(client.api.file['deleteFiles.php'].$post(args, options))
    },
  })
}

export function usePostApiFileDeleteFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['deleteFiles.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['deleteFiles.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileDeleteFilesPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileDeleteShareLinkPhpMutationKey() {
  return ['api', '/api/file/deleteShareLink.php', 'POST'] as const
}

export function getPostApiFileDeleteShareLinkPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['deleteShareLink.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['deleteShareLink.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileDeleteShareLinkPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.file)['deleteShareLink.php']['$post']>,
    ) {
      return parseResponse(client.api.file['deleteShareLink.php'].$post(args, options))
    },
  })
}

export function usePostApiFileDeleteShareLinkPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['deleteShareLink.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['deleteShareLink.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileDeleteShareLinkPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileDeleteTrashFilesPhpMutationKey() {
  return ['api', '/api/file/deleteTrashFiles.php', 'POST'] as const
}

export function getPostApiFileDeleteTrashFilesPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileDeleteTrashFilesPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>,
    ) {
      return parseResponse(client.api.file['deleteTrashFiles.php'].$post(args, options))
    },
  })
}

export function usePostApiFileDeleteTrashFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileDeleteTrashFilesPhpMutationOptions<
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

export function getApiFileDownloadPhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
) {
  return ['api', '/api/file/download.php', args] as const
}

export function getApiFileDownloadPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileDownloadPhpQueryKey>
  >({
    queryKey: getApiFileDownloadPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['download.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileDownloadPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileDownloadPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileDownloadPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileDownloadPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiFileDownloadZipPhpMutationKey() {
  return ['api', '/api/file/downloadZip.php', 'POST'] as const
}

export function getPostApiFileDownloadZipPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['downloadZip.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['downloadZip.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileDownloadZipPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['downloadZip.php']['$post']>) {
      return parseResponse(client.api.file['downloadZip.php'].$post(args, options))
    },
  })
}

export function usePostApiFileDownloadZipPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['downloadZip.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['downloadZip.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileDownloadZipPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiFileDownloadZipFilePhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
) {
  return ['api', '/api/file/downloadZipFile.php', args] as const
}

export function getApiFileDownloadZipFilePhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileDownloadZipFilePhpQueryKey>
  >({
    queryKey: getApiFileDownloadZipFilePhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['downloadZipFile.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileDownloadZipFilePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileDownloadZipFilePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFileDownloadZipFilePhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFileDownloadZipFilePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileDownloadZipFilePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFileDownloadZipFilePhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFileExtractZipPhpMutationKey() {
  return ['api', '/api/file/extractZip.php', 'POST'] as const
}

export function getPostApiFileExtractZipPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['extractZip.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['extractZip.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileExtractZipPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['extractZip.php']['$post']>) {
      return parseResponse(client.api.file['extractZip.php'].$post(args, options))
    },
  })
}

export function usePostApiFileExtractZipPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['extractZip.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['extractZip.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileExtractZipPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiFileGetFileListPhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
) {
  return ['api', '/api/file/getFileList.php', args] as const
}

export function getApiFileGetFileListPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetFileListPhpQueryKey>
  >({
    queryKey: getApiFileGetFileListPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['getFileList.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileGetFileListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetFileListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFileGetFileListPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFileGetFileListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetFileListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFileGetFileListPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFileGetFileTagPhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
) {
  return ['api', '/api/file/getFileTag.php', args] as const
}

export function getApiFileGetFileTagPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetFileTagPhpQueryKey>
  >({
    queryKey: getApiFileGetFileTagPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['getFileTag.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileGetFileTagPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetFileTagPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileGetFileTagPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileGetFileTagPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetFileTagPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileGetFileTagPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFileGetShareLinksPhpQueryKey() {
  return ['api', '/api/file/getShareLinks.php'] as const
}

export function getApiFileGetShareLinksPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetShareLinksPhpQueryKey>
  >({
    queryKey: getApiFileGetShareLinksPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['getShareLinks.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileGetShareLinksPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetShareLinksPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileGetShareLinksPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileGetShareLinksPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetShareLinksPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileGetShareLinksPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFileGetTrashItemsPhpQueryKey() {
  return ['api', '/api/file/getTrashItems.php'] as const
}

export function getApiFileGetTrashItemsPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetTrashItemsPhpQueryKey>
  >({
    queryKey: getApiFileGetTrashItemsPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['getTrashItems.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileGetTrashItemsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetTrashItemsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileGetTrashItemsPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileGetTrashItemsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileGetTrashItemsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileGetTrashItemsPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiFileMoveFilesPhpMutationKey() {
  return ['api', '/api/file/moveFiles.php', 'POST'] as const
}

export function getPostApiFileMoveFilesPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['moveFiles.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['moveFiles.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileMoveFilesPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['moveFiles.php']['$post']>) {
      return parseResponse(client.api.file['moveFiles.php'].$post(args, options))
    },
  })
}

export function usePostApiFileMoveFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['moveFiles.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['moveFiles.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileMoveFilesPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiFileRenameFilePhpMutationKey() {
  return ['api', '/api/file/renameFile.php', 'PUT'] as const
}

export function getPutApiFileRenameFilePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['renameFile.php']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['renameFile.php']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiFileRenameFilePhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['renameFile.php']['$put']>) {
      return parseResponse(client.api.file['renameFile.php'].$put(args, options))
    },
  })
}

export function usePutApiFileRenameFilePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['renameFile.php']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['renameFile.php']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiFileRenameFilePhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileRestoreFilesPhpMutationKey() {
  return ['api', '/api/file/restoreFiles.php', 'POST'] as const
}

export function getPostApiFileRestoreFilesPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['restoreFiles.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['restoreFiles.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileRestoreFilesPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.file)['restoreFiles.php']['$post']>,
    ) {
      return parseResponse(client.api.file['restoreFiles.php'].$post(args, options))
    },
  })
}

export function usePostApiFileRestoreFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['restoreFiles.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['restoreFiles.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileRestoreFilesPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiFileSaveFilePhpMutationKey() {
  return ['api', '/api/file/saveFile.php', 'PUT'] as const
}

export function getPutApiFileSaveFilePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['saveFile.php']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['saveFile.php']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiFileSaveFilePhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['saveFile.php']['$put']>) {
      return parseResponse(client.api.file['saveFile.php'].$put(args, options))
    },
  })
}

export function usePutApiFileSaveFilePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['saveFile.php']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['saveFile.php']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiFileSaveFilePhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFileSaveFileTagPhpMutationKey() {
  return ['api', '/api/file/saveFileTag.php', 'POST'] as const
}

export function getPostApiFileSaveFileTagPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['saveFileTag.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.file)['saveFileTag.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFileSaveFileTagPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.file)['saveFileTag.php']['$post']>) {
      return parseResponse(client.api.file['saveFileTag.php'].$post(args, options))
    },
  })
}

export function usePostApiFileSaveFileTagPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['saveFileTag.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.file)['saveFileTag.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFileSaveFileTagPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiFileSharePhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
) {
  return ['api', '/api/file/share.php', args] as const
}

export function getApiFileSharePhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileSharePhpQueryKey>
  >({
    queryKey: getApiFileSharePhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['share.php'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFileSharePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileSharePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileSharePhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileSharePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileSharePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileSharePhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFileSnippetPhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
) {
  return ['api', '/api/file/snippet.php', args] as const
}

export function getApiFileSnippetPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileSnippetPhpQueryKey>
  >({
    queryKey: getApiFileSnippetPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['snippet.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileSnippetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileSnippetPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileSnippetPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileSnippetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileSnippetPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileSnippetPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFileThumbnailPhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
) {
  return ['api', '/api/file/thumbnail.php', args] as const
}

export function getApiFileThumbnailPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileThumbnailPhpQueryKey>
  >({
    queryKey: getApiFileThumbnailPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['thumbnail.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileThumbnailPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileThumbnailPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileThumbnailPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileThumbnailPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileThumbnailPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileThumbnailPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFileZipStatusPhpQueryKey(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
) {
  return ['api', '/api/file/zipStatus.php', args] as const
}

export function getApiFileZipStatusPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileZipStatusPhpQueryKey>
  >({
    queryKey: getApiFileZipStatusPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.file['zipStatus.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFileZipStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileZipStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFileZipStatusPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFileZipStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFileZipStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFileZipStatusPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFolderCapabilitiesPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
) {
  return ['api', '/api/folder/capabilities.php', args] as const
}

export function getApiFolderCapabilitiesPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderCapabilitiesPhpQueryKey>
  >({
    queryKey: getApiFolderCapabilitiesPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['capabilities.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderCapabilitiesPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderCapabilitiesPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderCapabilitiesPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderCapabilitiesPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderCapabilitiesPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderCapabilitiesPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFolderCreateFolderPhpMutationKey() {
  return ['api', '/api/folder/createFolder.php', 'POST'] as const
}

export function getPostApiFolderCreateFolderPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['createFolder.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['createFolder.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderCreateFolderPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['createFolder.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['createFolder.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderCreateFolderPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['createFolder.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['createFolder.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderCreateFolderPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFolderCreateShareFolderLinkPhpMutationKey() {
  return ['api', '/api/folder/createShareFolderLink.php', 'POST'] as const
}

export function getPostApiFolderCreateShareFolderLinkPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderCreateShareFolderLinkPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['createShareFolderLink.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderCreateShareFolderLinkPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderCreateShareFolderLinkPhpMutationOptions<
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

export function getPostApiFolderDeleteFolderPhpMutationKey() {
  return ['api', '/api/folder/deleteFolder.php', 'POST'] as const
}

export function getPostApiFolderDeleteFolderPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['deleteFolder.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['deleteFolder.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderDeleteFolderPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['deleteFolder.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['deleteFolder.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderDeleteFolderPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['deleteFolder.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['deleteFolder.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderDeleteFolderPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFolderDeleteShareFolderLinkPhpMutationKey() {
  return ['api', '/api/folder/deleteShareFolderLink.php', 'POST'] as const
}

export function getPostApiFolderDeleteShareFolderLinkPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderDeleteShareFolderLinkPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['deleteShareFolderLink.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderDeleteShareFolderLinkPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderDeleteShareFolderLinkPhpMutationOptions<
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

export function getApiFolderDownloadSharedFilePhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
) {
  return ['api', '/api/folder/downloadSharedFile.php', args] as const
}

export function getApiFolderDownloadSharedFilePhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderDownloadSharedFilePhpQueryKey>
  >({
    queryKey: getApiFolderDownloadSharedFilePhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['downloadSharedFile.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderDownloadSharedFilePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderDownloadSharedFilePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderDownloadSharedFilePhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderDownloadSharedFilePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderDownloadSharedFilePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderDownloadSharedFilePhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFolderDownloadSharedFolderPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
) {
  return ['api', '/api/folder/downloadSharedFolder.php', args] as const
}

export function getApiFolderDownloadSharedFolderPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderDownloadSharedFolderPhpQueryKey>
  >({
    queryKey: getApiFolderDownloadSharedFolderPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['downloadSharedFolder.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderDownloadSharedFolderPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderDownloadSharedFolderPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderDownloadSharedFolderPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderDownloadSharedFolderPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderDownloadSharedFolderPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderDownloadSharedFolderPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFolderEncryptionJobStartPhpMutationKey() {
  return ['api', '/api/folder/encryptionJobStart.php', 'POST'] as const
}

export function getPostApiFolderEncryptionJobStartPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderEncryptionJobStartPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['encryptionJobStart.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderEncryptionJobStartPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderEncryptionJobStartPhpMutationOptions<
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

export function getApiFolderEncryptionJobStatusPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
) {
  return ['api', '/api/folder/encryptionJobStatus.php', args] as const
}

export function getApiFolderEncryptionJobStatusPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderEncryptionJobStatusPhpQueryKey>
  >({
    queryKey: getApiFolderEncryptionJobStatusPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['encryptionJobStatus.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderEncryptionJobStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderEncryptionJobStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderEncryptionJobStatusPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderEncryptionJobStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderEncryptionJobStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderEncryptionJobStatusPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFolderEncryptionJobTickPhpMutationKey() {
  return ['api', '/api/folder/encryptionJobTick.php', 'POST'] as const
}

export function getPostApiFolderEncryptionJobTickPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderEncryptionJobTickPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['encryptionJobTick.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderEncryptionJobTickPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderEncryptionJobTickPhpMutationOptions<
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

export function getApiFolderEncryptionPlanPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
) {
  return ['api', '/api/folder/encryptionPlan.php', args] as const
}

export function getApiFolderEncryptionPlanPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderEncryptionPlanPhpQueryKey>
  >({
    queryKey: getApiFolderEncryptionPlanPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['encryptionPlan.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderEncryptionPlanPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderEncryptionPlanPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderEncryptionPlanPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderEncryptionPlanPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderEncryptionPlanPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderEncryptionPlanPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFolderGetFolderColorsPhpQueryKey() {
  return ['api', '/api/folder/getFolderColors.php'] as const
}

export function getApiFolderGetFolderColorsPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetFolderColorsPhpQueryKey>
  >({
    queryKey: getApiFolderGetFolderColorsPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['getFolderColors.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderGetFolderColorsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetFolderColorsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderGetFolderColorsPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderGetFolderColorsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetFolderColorsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderGetFolderColorsPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFolderGetFolderEncryptionPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
) {
  return ['api', '/api/folder/getFolderEncryption.php', args] as const
}

export function getApiFolderGetFolderEncryptionPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetFolderEncryptionPhpQueryKey>
  >({
    queryKey: getApiFolderGetFolderEncryptionPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['getFolderEncryption.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderGetFolderEncryptionPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetFolderEncryptionPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderGetFolderEncryptionPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderGetFolderEncryptionPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetFolderEncryptionPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderGetFolderEncryptionPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFolderGetFolderListPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
) {
  return ['api', '/api/folder/getFolderList.php', args] as const
}

export function getApiFolderGetFolderListPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetFolderListPhpQueryKey>
  >({
    queryKey: getApiFolderGetFolderListPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['getFolderList.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderGetFolderListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetFolderListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderGetFolderListPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderGetFolderListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetFolderListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderGetFolderListPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFolderGetShareFolderLinksPhpQueryKey() {
  return ['api', '/api/folder/getShareFolderLinks.php'] as const
}

export function getApiFolderGetShareFolderLinksPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetShareFolderLinksPhpQueryKey>
  >({
    queryKey: getApiFolderGetShareFolderLinksPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['getShareFolderLinks.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderGetShareFolderLinksPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetShareFolderLinksPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderGetShareFolderLinksPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderGetShareFolderLinksPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderGetShareFolderLinksPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderGetShareFolderLinksPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiFolderIsEmptyPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
) {
  return ['api', '/api/folder/isEmpty.php', args] as const
}

export function getApiFolderIsEmptyPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderIsEmptyPhpQueryKey>
  >({
    queryKey: getApiFolderIsEmptyPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['isEmpty.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderIsEmptyPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderIsEmptyPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFolderIsEmptyPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFolderIsEmptyPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderIsEmptyPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFolderIsEmptyPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFolderListChildrenPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
) {
  return ['api', '/api/folder/listChildren.php', args] as const
}

export function getApiFolderListChildrenPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderListChildrenPhpQueryKey>
  >({
    queryKey: getApiFolderListChildrenPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['listChildren.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderListChildrenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderListChildrenPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderListChildrenPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderListChildrenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderListChildrenPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderListChildrenPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFolderMoveFolderPhpMutationKey() {
  return ['api', '/api/folder/moveFolder.php', 'POST'] as const
}

export function getPostApiFolderMoveFolderPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['moveFolder.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['moveFolder.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderMoveFolderPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['moveFolder.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['moveFolder.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderMoveFolderPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['moveFolder.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['moveFolder.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderMoveFolderPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFolderRenameFolderPhpMutationKey() {
  return ['api', '/api/folder/renameFolder.php', 'POST'] as const
}

export function getPostApiFolderRenameFolderPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['renameFolder.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['renameFolder.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderRenameFolderPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['renameFolder.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['renameFolder.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderRenameFolderPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['renameFolder.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['renameFolder.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderRenameFolderPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFolderSaveFolderColorPhpMutationKey() {
  return ['api', '/api/folder/saveFolderColor.php', 'POST'] as const
}

export function getPostApiFolderSaveFolderColorPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['saveFolderColor.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['saveFolderColor.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderSaveFolderColorPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['saveFolderColor.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['saveFolderColor.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderSaveFolderColorPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['saveFolderColor.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['saveFolderColor.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderSaveFolderColorPhpMutationOptions<
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

export function getPostApiFolderSetFolderEncryptionPhpMutationKey() {
  return ['api', '/api/folder/setFolderEncryption.php', 'POST'] as const
}

export function getPostApiFolderSetFolderEncryptionPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderSetFolderEncryptionPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['setFolderEncryption.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderSetFolderEncryptionPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderSetFolderEncryptionPhpMutationOptions<
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

export function getApiFolderShareFolderPhpQueryKey(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
) {
  return ['api', '/api/folder/shareFolder.php', args] as const
}

export function getApiFolderShareFolderPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderShareFolderPhpQueryKey>
  >({
    queryKey: getApiFolderShareFolderPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.folder['shareFolder.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFolderShareFolderPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderShareFolderPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiFolderShareFolderPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFolderShareFolderPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFolderShareFolderPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiFolderShareFolderPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiFolderUploadToSharedFolderPhpMutationKey() {
  return ['api', '/api/folder/uploadToSharedFolder.php', 'POST'] as const
}

export function getPostApiFolderUploadToSharedFolderPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFolderUploadToSharedFolderPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>,
    ) {
      return parseResponse(client.api.folder['uploadToSharedFolder.php'].$post(args, options))
    },
  })
}

export function usePostApiFolderUploadToSharedFolderPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFolderUploadToSharedFolderPhpMutationOptions<
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

export function getApiMediaGetProgressPhpQueryKey(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
) {
  return ['api', '/api/media/getProgress.php', args] as const
}

export function getApiMediaGetProgressPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaGetProgressPhpQueryKey>
  >({
    queryKey: getApiMediaGetProgressPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.media['getProgress.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMediaGetProgressPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMediaGetProgressPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiMediaGetProgressPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMediaGetProgressPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMediaGetProgressPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiMediaGetProgressPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiMediaGetViewedMapPhpQueryKey(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
) {
  return ['api', '/api/media/getViewedMap.php', args] as const
}

export function getApiMediaGetViewedMapPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaGetViewedMapPhpQueryKey>
  >({
    queryKey: getApiMediaGetViewedMapPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.media['getViewedMap.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMediaGetViewedMapPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMediaGetViewedMapPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiMediaGetViewedMapPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMediaGetViewedMapPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMediaGetViewedMapPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiMediaGetViewedMapPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiMediaUpdateProgressPhpMutationKey() {
  return ['api', '/api/media/updateProgress.php', 'POST'] as const
}

export function getPostApiMediaUpdateProgressPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.media)['updateProgress.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.media)['updateProgress.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiMediaUpdateProgressPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.media)['updateProgress.php']['$post']>,
    ) {
      return parseResponse(client.api.media['updateProgress.php'].$post(args, options))
    },
  })
}

export function usePostApiMediaUpdateProgressPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.media)['updateProgress.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.media)['updateProgress.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiMediaUpdateProgressPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiOnlyofficeCallbackPhpMutationKey() {
  return ['api', '/api/onlyoffice/callback.php', 'POST'] as const
}

export function getPostApiOnlyofficeCallbackPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['callback.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.onlyoffice)['callback.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOnlyofficeCallbackPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.onlyoffice)['callback.php']['$post']>,
    ) {
      return parseResponse(client.api.onlyoffice['callback.php'].$post(args, options))
    },
  })
}

export function usePostApiOnlyofficeCallbackPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['callback.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.onlyoffice)['callback.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOnlyofficeCallbackPhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiOnlyofficeConfigPhpQueryKey(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
) {
  return ['api', '/api/onlyoffice/config.php', args] as const
}

export function getApiOnlyofficeConfigPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOnlyofficeConfigPhpQueryKey>
  >({
    queryKey: getApiOnlyofficeConfigPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.onlyoffice['config.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiOnlyofficeConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOnlyofficeConfigPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiOnlyofficeConfigPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiOnlyofficeConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOnlyofficeConfigPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiOnlyofficeConfigPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiOnlyofficeSignedDownloadPhpQueryKey(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
) {
  return ['api', '/api/onlyoffice/signed-download.php', args] as const
}

export function getApiOnlyofficeSignedDownloadPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOnlyofficeSignedDownloadPhpQueryKey>
  >({
    queryKey: getApiOnlyofficeSignedDownloadPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.onlyoffice['signed-download.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiOnlyofficeSignedDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOnlyofficeSignedDownloadPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiOnlyofficeSignedDownloadPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiOnlyofficeSignedDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOnlyofficeSignedDownloadPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiOnlyofficeSignedDownloadPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiOnlyofficeStatusPhpQueryKey() {
  return ['api', '/api/onlyoffice/status.php'] as const
}

export function getApiOnlyofficeStatusPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOnlyofficeStatusPhpQueryKey>
  >({
    queryKey: getApiOnlyofficeStatusPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.onlyoffice['status.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiOnlyofficeStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOnlyofficeStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOnlyofficeStatusPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOnlyofficeStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOnlyofficeStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOnlyofficeStatusPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProAuditExportCsvPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
) {
  return ['api', '/api/pro/audit/exportCsv.php', args] as const
}

export function getApiProAuditExportCsvPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProAuditExportCsvPhpQueryKey>
  >({
    queryKey: getApiProAuditExportCsvPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.audit['exportCsv.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProAuditExportCsvPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProAuditExportCsvPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProAuditExportCsvPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProAuditExportCsvPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProAuditExportCsvPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProAuditExportCsvPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiProAuditListPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
) {
  return ['api', '/api/pro/audit/list.php', args] as const
}

export function getApiProAuditListPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProAuditListPhpQueryKey>
  >({
    queryKey: getApiProAuditListPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.audit['list.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProAuditListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProAuditListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProAuditListPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProAuditListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProAuditListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProAuditListPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProDiskUsageChildrenPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
) {
  return ['api', '/api/pro/diskUsageChildren.php', args] as const
}

export function getApiProDiskUsageChildrenPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProDiskUsageChildrenPhpQueryKey>
  >({
    queryKey: getApiProDiskUsageChildrenPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro['diskUsageChildren.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProDiskUsageChildrenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProDiskUsageChildrenPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProDiskUsageChildrenPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProDiskUsageChildrenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProDiskUsageChildrenPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProDiskUsageChildrenPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiProDiskUsageDeleteFilePermanentPhpMutationKey() {
  return ['api', '/api/pro/diskUsageDeleteFilePermanent.php', 'POST'] as const
}

export function getPostApiProDiskUsageDeleteFilePermanentPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProDiskUsageDeleteFilePermanentPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>,
    ) {
      return parseResponse(client.api.pro['diskUsageDeleteFilePermanent.php'].$post(args, options))
    },
  })
}

export function usePostApiProDiskUsageDeleteFilePermanentPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProDiskUsageDeleteFilePermanentPhpMutationOptions<
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

export function getPostApiProDiskUsageDeleteFolderRecursivePhpMutationKey() {
  return ['api', '/api/pro/diskUsageDeleteFolderRecursive.php', 'POST'] as const
}

export function getPostApiProDiskUsageDeleteFolderRecursivePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProDiskUsageDeleteFolderRecursivePhpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pro['diskUsageDeleteFolderRecursive.php'].$post(args, options),
      )
    },
  })
}

export function usePostApiProDiskUsageDeleteFolderRecursivePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProDiskUsageDeleteFolderRecursivePhpMutationOptions<
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

export function getApiProDiskUsageTopFilesPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
) {
  return ['api', '/api/pro/diskUsageTopFiles.php', args] as const
}

export function getApiProDiskUsageTopFilesPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProDiskUsageTopFilesPhpQueryKey>
  >({
    queryKey: getApiProDiskUsageTopFilesPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro['diskUsageTopFiles.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProDiskUsageTopFilesPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProDiskUsageTopFilesPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProDiskUsageTopFilesPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProDiskUsageTopFilesPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProDiskUsageTopFilesPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProDiskUsageTopFilesPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiProGroupsListPhpQueryKey() {
  return ['api', '/api/pro/groups/list.php'] as const
}

export function getApiProGroupsListPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProGroupsListPhpQueryKey>
  >({
    queryKey: getApiProGroupsListPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.groups['list.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProGroupsListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProGroupsListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProGroupsListPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProGroupsListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProGroupsListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProGroupsListPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiProGroupsSavePhpMutationKey() {
  return ['api', '/api/pro/groups/save.php', 'POST'] as const
}

export function getPostApiProGroupsSavePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.groups)['save.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro.groups)['save.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProGroupsSavePhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pro.groups)['save.php']['$post']>) {
      return parseResponse(client.api.pro.groups['save.php'].$post(args, options))
    },
  })
}

export function usePostApiProGroupsSavePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.groups)['save.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro.groups)['save.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProGroupsSavePhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiProPortalsGetPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
) {
  return ['api', '/api/pro/portals/get.php', args] as const
}

export function getApiProPortalsGetPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsGetPhpQueryKey>
  >({
    queryKey: getApiProPortalsGetPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.portals['get.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProPortalsGetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsGetPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProPortalsGetPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProPortalsGetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsGetPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProPortalsGetPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProPortalsListPhpQueryKey() {
  return ['api', '/api/pro/portals/list.php'] as const
}

export function getApiProPortalsListPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsListPhpQueryKey>
  >({
    queryKey: getApiProPortalsListPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.portals['list.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProPortalsListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProPortalsListPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProPortalsListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsListPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProPortalsListPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProPortalsPublicMetaPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
) {
  return ['api', '/api/pro/portals/publicMeta.php', args] as const
}

export function getApiProPortalsPublicMetaPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsPublicMetaPhpQueryKey>
  >({
    queryKey: getApiProPortalsPublicMetaPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.portals['publicMeta.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProPortalsPublicMetaPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsPublicMetaPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProPortalsPublicMetaPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProPortalsPublicMetaPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsPublicMetaPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProPortalsPublicMetaPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiProPortalsSavePhpMutationKey() {
  return ['api', '/api/pro/portals/save.php', 'POST'] as const
}

export function getPostApiProPortalsSavePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['save.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro.portals)['save.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProPortalsSavePhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pro.portals)['save.php']['$post']>) {
      return parseResponse(client.api.pro.portals['save.php'].$post(args, options))
    },
  })
}

export function usePostApiProPortalsSavePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['save.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro.portals)['save.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProPortalsSavePhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiProPortalsSubmissionsPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
) {
  return ['api', '/api/pro/portals/submissions.php', args] as const
}

export function getApiProPortalsSubmissionsPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsSubmissionsPhpQueryKey>
  >({
    queryKey: getApiProPortalsSubmissionsPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.portals['submissions.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProPortalsSubmissionsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsSubmissionsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProPortalsSubmissionsPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProPortalsSubmissionsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProPortalsSubmissionsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProPortalsSubmissionsPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiProPortalsSubmitFormPhpMutationKey() {
  return ['api', '/api/pro/portals/submitForm.php', 'POST'] as const
}

export function getPostApiProPortalsSubmitFormPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['submitForm.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro.portals)['submitForm.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProPortalsSubmitFormPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pro.portals)['submitForm.php']['$post']>,
    ) {
      return parseResponse(client.api.pro.portals['submitForm.php'].$post(args, options))
    },
  })
}

export function usePostApiProPortalsSubmitFormPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['submitForm.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro.portals)['submitForm.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProPortalsSubmitFormPhpMutationOptions<
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

export function getPostApiProPortalsUploadLogoPhpMutationKey() {
  return ['api', '/api/pro/portals/uploadLogo.php', 'POST'] as const
}

export function getPostApiProPortalsUploadLogoPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProPortalsUploadLogoPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>,
    ) {
      return parseResponse(client.api.pro.portals['uploadLogo.php'].$post(args, options))
    },
  })
}

export function usePostApiProPortalsUploadLogoPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProPortalsUploadLogoPhpMutationOptions<
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

export function getApiProSearchQueryPhpQueryKey(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
) {
  return ['api', '/api/pro/search/query.php', args] as const
}

export function getApiProSearchQueryPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProSearchQueryPhpQueryKey>
  >({
    queryKey: getApiProSearchQueryPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pro.search['query.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProSearchQueryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProSearchQueryPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProSearchQueryPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProSearchQueryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProSearchQueryPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProSearchQueryPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiProUploadBrandLogoPhpMutationKey() {
  return ['api', '/api/pro/uploadBrandLogo.php', 'POST'] as const
}

export function getPostApiProUploadBrandLogoPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProUploadBrandLogoPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>,
    ) {
      return parseResponse(client.api.pro['uploadBrandLogo.php'].$post(args, options))
    },
  })
}

export function usePostApiProUploadBrandLogoPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProUploadBrandLogoPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiProfileChangePasswordPhpMutationKey() {
  return ['api', '/api/profile/changePassword.php', 'POST'] as const
}

export function getPostApiProfileChangePasswordPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['changePassword.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['changePassword.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProfileChangePasswordPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['changePassword.php']['$post']>,
    ) {
      return parseResponse(client.api.profile['changePassword.php'].$post(args, options))
    },
  })
}

export function usePostApiProfileChangePasswordPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['changePassword.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['changePassword.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProfileChangePasswordPhpMutationOptions<
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

export function getApiProfileGetCurrentUserPhpQueryKey() {
  return ['api', '/api/profile/getCurrentUser.php'] as const
}

export function getApiProfileGetCurrentUserPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileGetCurrentUserPhpQueryKey>
  >({
    queryKey: getApiProfileGetCurrentUserPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.profile['getCurrentUser.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProfileGetCurrentUserPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileGetCurrentUserPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProfileGetCurrentUserPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProfileGetCurrentUserPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileGetCurrentUserPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProfileGetCurrentUserPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiProfileGetUserPermissionsPhpQueryKey() {
  return ['api', '/api/profile/getUserPermissions.php'] as const
}

export function getApiProfileGetUserPermissionsPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileGetUserPermissionsPhpQueryKey>
  >({
    queryKey: getApiProfileGetUserPermissionsPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.profile['getUserPermissions.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProfileGetUserPermissionsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileGetUserPermissionsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProfileGetUserPermissionsPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProfileGetUserPermissionsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileGetUserPermissionsPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProfileGetUserPermissionsPhpQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiProfileTotpDisablePhpMutationKey() {
  return ['api', '/api/profile/totp_disable.php', 'PUT'] as const
}

export function getPutApiProfileTotpDisablePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_disable.php']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['totp_disable.php']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiProfileTotpDisablePhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['totp_disable.php']['$put']>,
    ) {
      return parseResponse(client.api.profile['totp_disable.php'].$put(args, options))
    },
  })
}

export function usePutApiProfileTotpDisablePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['totp_disable.php']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['totp_disable.php']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiProfileTotpDisablePhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiProfileTotpRecoverPhpMutationKey() {
  return ['api', '/api/profile/totp_recover.php', 'POST'] as const
}

export function getPostApiProfileTotpRecoverPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_recover.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['totp_recover.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProfileTotpRecoverPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['totp_recover.php']['$post']>,
    ) {
      return parseResponse(client.api.profile['totp_recover.php'].$post(args, options))
    },
  })
}

export function usePostApiProfileTotpRecoverPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['totp_recover.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['totp_recover.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProfileTotpRecoverPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiProfileTotpSaveCodePhpMutationKey() {
  return ['api', '/api/profile/totp_saveCode.php', 'POST'] as const
}

export function getPostApiProfileTotpSaveCodePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_saveCode.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['totp_saveCode.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProfileTotpSaveCodePhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['totp_saveCode.php']['$post']>,
    ) {
      return parseResponse(client.api.profile['totp_saveCode.php'].$post(args, options))
    },
  })
}

export function usePostApiProfileTotpSaveCodePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['totp_saveCode.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['totp_saveCode.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProfileTotpSaveCodePhpMutationOptions<TError, TOnMutateResult>(
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

export function getApiProfileTotpSetupPhpQueryKey(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/profile/totp_setup.php', keyArgs] as const
}

export function getApiProfileTotpSetupPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileTotpSetupPhpQueryKey>
  >({
    queryKey: getApiProfileTotpSetupPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.profile['totp_setup.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProfileTotpSetupPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileTotpSetupPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProfileTotpSetupPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProfileTotpSetupPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProfileTotpSetupPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProfileTotpSetupPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiProfileTotpVerifyPhpMutationKey() {
  return ['api', '/api/profile/totp_verify.php', 'POST'] as const
}

export function getPostApiProfileTotpVerifyPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_verify.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['totp_verify.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProfileTotpVerifyPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['totp_verify.php']['$post']>,
    ) {
      return parseResponse(client.api.profile['totp_verify.php'].$post(args, options))
    },
  })
}

export function usePostApiProfileTotpVerifyPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['totp_verify.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['totp_verify.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProfileTotpVerifyPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiProfileUpdateUserPanelPhpMutationKey() {
  return ['api', '/api/profile/updateUserPanel.php', 'PUT'] as const
}

export function getPutApiProfileUpdateUserPanelPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['updateUserPanel.php']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['updateUserPanel.php']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiProfileUpdateUserPanelPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['updateUserPanel.php']['$put']>,
    ) {
      return parseResponse(client.api.profile['updateUserPanel.php'].$put(args, options))
    },
  })
}

export function usePutApiProfileUpdateUserPanelPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['updateUserPanel.php']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['updateUserPanel.php']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiProfileUpdateUserPanelPhpMutationOptions<
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

export function getPostApiProfileUploadPicturePhpMutationKey() {
  return ['api', '/api/profile/uploadPicture.php', 'POST'] as const
}

export function getPostApiProfileUploadPicturePhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['uploadPicture.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.profile)['uploadPicture.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProfileUploadPicturePhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.profile)['uploadPicture.php']['$post']>,
    ) {
      return parseResponse(client.api.profile['uploadPicture.php'].$post(args, options))
    },
  })
}

export function usePostApiProfileUploadPicturePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.profile)['uploadPicture.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.profile)['uploadPicture.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiProfileUploadPicturePhpMutationOptions<
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

export function getApiPublicSiteConfigPhpQueryKey() {
  return ['api', '/api/public/siteConfig.php'] as const
}

export function getApiPublicSiteConfigPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicSiteConfigPhpQueryKey>
  >({
    queryKey: getApiPublicSiteConfigPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['siteConfig.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicSiteConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSiteConfigPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicSiteConfigPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicSiteConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSiteConfigPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicSiteConfigPhpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiUploadCheckExistingPhpMutationKey() {
  return ['api', '/api/upload/checkExisting.php', 'POST'] as const
}

export function getPostApiUploadCheckExistingPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.upload)['checkExisting.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.upload)['checkExisting.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadCheckExistingPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.upload)['checkExisting.php']['$post']>,
    ) {
      return parseResponse(client.api.upload['checkExisting.php'].$post(args, options))
    },
  })
}

export function usePostApiUploadCheckExistingPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.upload)['checkExisting.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.upload)['checkExisting.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUploadCheckExistingPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUploadRemoveChunksPhpMutationKey() {
  return ['api', '/api/upload/removeChunks.php', 'POST'] as const
}

export function getPostApiUploadRemoveChunksPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.upload)['removeChunks.php']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.upload)['removeChunks.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadRemoveChunksPhpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.upload)['removeChunks.php']['$post']>,
    ) {
      return parseResponse(client.api.upload['removeChunks.php'].$post(args, options))
    },
  })
}

export function usePostApiUploadRemoveChunksPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.upload)['removeChunks.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.upload)['removeChunks.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUploadRemoveChunksPhpMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUploadUploadPhpMutationKey() {
  return ['api', '/api/upload/upload.php', 'POST'] as const
}

export function getPostApiUploadUploadPhpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.upload)['upload.php']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.upload)['upload.php']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadUploadPhpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.upload)['upload.php']['$post']>) {
      return parseResponse(client.api.upload['upload.php'].$post(args, options))
    },
  })
}

export function usePostApiUploadUploadPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.upload)['upload.php']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.upload)['upload.php']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiUploadUploadPhpMutationOptions<TError, TOnMutateResult>(
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
