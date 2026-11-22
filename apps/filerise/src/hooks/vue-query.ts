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

export function getApiKey() {
  return ['api'] as const
}

export function getApiAdminAclGetGrantsPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>,
) {
  return ['api', '/api/admin/acl/getGrants.php', toValue(args)] as const
}

export function getApiAdminAclGetGrantsPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAdminAclGetGrantsPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin.acl['getGrants.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminAclGetGrantsPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminAclGetGrantsPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAdminAclGetGrantsPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin.acl['getGrants.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>
  >,
) {
  return ['api', '/api/admin/diskUsageSummary.php', toValue(args)] as const
}

export function getApiAdminDiskUsageSummaryPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAdminDiskUsageSummaryPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin['diskUsageSummary.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminDiskUsageSummaryPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminDiskUsageSummaryPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAdminDiskUsageSummaryPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin['diskUsageSummary.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiAdminGetConfigPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAdminGetConfigPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin['getConfig.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminGetConfigPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminGetConfigPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAdminGetConfigPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin['getConfig.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAdminGetUsersPhpQueryKey() {
  return ['api', '/api/admin/getUsers.php'] as const
}

export function getApiAdminGetUsersPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAdminGetUsersPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin['getUsers.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminGetUsersPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminGetUsersPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAdminGetUsersPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin['getUsers.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiAdminOidcDebugInfoPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAdminOidcDebugInfoPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin['oidcDebugInfo.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminOidcDebugInfoPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminOidcDebugInfoPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAdminOidcDebugInfoPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin['oidcDebugInfo.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>>,
) {
  return ['api', '/api/admin/readMetadata.php', toValue(args)] as const
}

export function getApiAdminReadMetadataPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAdminReadMetadataPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin['readMetadata.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminReadMetadataPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminReadMetadataPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAdminReadMetadataPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin['readMetadata.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>>,
) {
  return ['api', '/api/admin/virusLog.php', toValue(args)] as const
}

export function getApiAdminVirusLogPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAdminVirusLogPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.admin['virusLog.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAdminVirusLogPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAdminVirusLogPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminVirusLogPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAdminVirusLogPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.admin['virusLog.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth)['auth.php']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.auth)['auth.php']['$post']>,
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

export function getApiAuthCheckAuthPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthCheckAuthPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth['checkAuth.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAuthCheckAuthPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthCheckAuthPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthCheckAuthPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth['checkAuth.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAuthLoginBasicPhpQueryKey() {
  return ['api', '/api/auth/login_basic.php'] as const
}

export function getApiAuthLoginBasicPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthLoginBasicPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth['login_basic.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAuthLoginBasicPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthLoginBasicPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthLoginBasicPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth['login_basic.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiAuthTokenPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthTokenPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth['token.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAuthTokenPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthTokenPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthTokenPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth['token.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['download.php']['$get']>>,
) {
  return ['api', '/api/file/download.php', toValue(args)] as const
}

export function getApiFileDownloadPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['download.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileDownloadPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['download.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['download.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileDownloadPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileDownloadPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileDownloadPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['download.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>>,
) {
  return ['api', '/api/file/downloadZipFile.php', toValue(args)] as const
}

export function getApiFileDownloadZipFilePhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileDownloadZipFilePhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['downloadZipFile.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileDownloadZipFilePhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileDownloadZipFilePhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileDownloadZipFilePhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['downloadZipFile.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>>,
) {
  return ['api', '/api/file/getFileList.php', toValue(args)] as const
}

export function getApiFileGetFileListPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileGetFileListPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['getFileList.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileGetFileListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileGetFileListPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetFileListPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileGetFileListPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['getFileList.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFileGetFileTagPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>>,
) {
  return ['api', '/api/file/getFileTag.php', toValue(args)] as const
}

export function getApiFileGetFileTagPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileGetFileTagPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['getFileTag.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileGetFileTagPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileGetFileTagPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetFileTagPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileGetFileTagPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['getFileTag.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFileGetShareLinksPhpQueryKey() {
  return ['api', '/api/file/getShareLinks.php'] as const
}

export function getApiFileGetShareLinksPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFileGetShareLinksPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['getShareLinks.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileGetShareLinksPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetShareLinksPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFileGetShareLinksPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['getShareLinks.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFileGetTrashItemsPhpQueryKey() {
  return ['api', '/api/file/getTrashItems.php'] as const
}

export function getApiFileGetTrashItemsPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFileGetTrashItemsPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['getTrashItems.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileGetTrashItemsPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileGetTrashItemsPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFileGetTrashItemsPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['getTrashItems.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['share.php']['$get']>>,
) {
  return ['api', '/api/file/share.php', toValue(args)] as const
}

export function getApiFileSharePhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['share.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileSharePhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['share.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileSharePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['share.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileSharePhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileSharePhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileSharePhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['share.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFileSnippetPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['snippet.php']['$get']>>,
) {
  return ['api', '/api/file/snippet.php', toValue(args)] as const
}

export function getApiFileSnippetPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['snippet.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileSnippetPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['snippet.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileSnippetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['snippet.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileSnippetPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileSnippetPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileSnippetPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['snippet.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFileThumbnailPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>>,
) {
  return ['api', '/api/file/thumbnail.php', toValue(args)] as const
}

export function getApiFileThumbnailPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileThumbnailPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['thumbnail.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileThumbnailPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileThumbnailPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileThumbnailPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileThumbnailPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['thumbnail.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFileZipStatusPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>>,
) {
  return ['api', '/api/file/zipStatus.php', toValue(args)] as const
}

export function getApiFileZipStatusPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFileZipStatusPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.file['zipStatus.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFileZipStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFileZipStatusPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFileZipStatusPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFileZipStatusPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.file['zipStatus.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderCapabilitiesPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>>,
) {
  return ['api', '/api/folder/capabilities.php', toValue(args)] as const
}

export function getApiFolderCapabilitiesPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderCapabilitiesPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['capabilities.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderCapabilitiesPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderCapabilitiesPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderCapabilitiesPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['capabilities.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>
  >,
) {
  return ['api', '/api/folder/downloadSharedFile.php', toValue(args)] as const
}

export function getApiFolderDownloadSharedFilePhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderDownloadSharedFilePhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['downloadSharedFile.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderDownloadSharedFilePhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderDownloadSharedFilePhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderDownloadSharedFilePhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['downloadSharedFile.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderDownloadSharedFolderPhpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>
  >,
) {
  return ['api', '/api/folder/downloadSharedFolder.php', toValue(args)] as const
}

export function getApiFolderDownloadSharedFolderPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderDownloadSharedFolderPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['downloadSharedFolder.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderDownloadSharedFolderPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderDownloadSharedFolderPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderDownloadSharedFolderPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['downloadSharedFolder.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>
  >,
) {
  return ['api', '/api/folder/encryptionJobStatus.php', toValue(args)] as const
}

export function getApiFolderEncryptionJobStatusPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderEncryptionJobStatusPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['encryptionJobStatus.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderEncryptionJobStatusPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderEncryptionJobStatusPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderEncryptionJobStatusPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['encryptionJobStatus.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>
  >,
) {
  return ['api', '/api/folder/encryptionPlan.php', toValue(args)] as const
}

export function getApiFolderEncryptionPlanPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderEncryptionPlanPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['encryptionPlan.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderEncryptionPlanPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderEncryptionPlanPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderEncryptionPlanPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['encryptionPlan.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderGetFolderColorsPhpQueryKey() {
  return ['api', '/api/folder/getFolderColors.php'] as const
}

export function getApiFolderGetFolderColorsPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFolderGetFolderColorsPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['getFolderColors.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderGetFolderColorsPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetFolderColorsPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFolderGetFolderColorsPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['getFolderColors.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderGetFolderEncryptionPhpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>
  >,
) {
  return ['api', '/api/folder/getFolderEncryption.php', toValue(args)] as const
}

export function getApiFolderGetFolderEncryptionPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderGetFolderEncryptionPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['getFolderEncryption.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderGetFolderEncryptionPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetFolderEncryptionPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderGetFolderEncryptionPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['getFolderEncryption.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderGetFolderListPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>>,
) {
  return ['api', '/api/folder/getFolderList.php', toValue(args)] as const
}

export function getApiFolderGetFolderListPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderGetFolderListPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['getFolderList.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderGetFolderListPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetFolderListPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderGetFolderListPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['getFolderList.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderGetShareFolderLinksPhpQueryKey() {
  return ['api', '/api/folder/getShareFolderLinks.php'] as const
}

export function getApiFolderGetShareFolderLinksPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFolderGetShareFolderLinksPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['getShareFolderLinks.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderGetShareFolderLinksPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderGetShareFolderLinksPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFolderGetShareFolderLinksPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['getShareFolderLinks.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderIsEmptyPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>>,
) {
  return ['api', '/api/folder/isEmpty.php', toValue(args)] as const
}

export function getApiFolderIsEmptyPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderIsEmptyPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['isEmpty.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFolderIsEmptyPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderIsEmptyPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderIsEmptyPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderIsEmptyPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['isEmpty.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFolderListChildrenPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>>,
) {
  return ['api', '/api/folder/listChildren.php', toValue(args)] as const
}

export function getApiFolderListChildrenPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderListChildrenPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['listChildren.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderListChildrenPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderListChildrenPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderListChildrenPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['listChildren.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>>,
) {
  return ['api', '/api/folder/shareFolder.php', toValue(args)] as const
}

export function getApiFolderShareFolderPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFolderShareFolderPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.folder['shareFolder.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFolderShareFolderPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFolderShareFolderPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFolderShareFolderPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.folder['shareFolder.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>>,
) {
  return ['api', '/api/media/getProgress.php', toValue(args)] as const
}

export function getApiMediaGetProgressPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMediaGetProgressPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.media['getProgress.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMediaGetProgressPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaGetProgressPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMediaGetProgressPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.media['getProgress.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMediaGetViewedMapPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>>,
) {
  return ['api', '/api/media/getViewedMap.php', toValue(args)] as const
}

export function getApiMediaGetViewedMapPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMediaGetViewedMapPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.media['getViewedMap.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMediaGetViewedMapPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMediaGetViewedMapPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMediaGetViewedMapPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.media['getViewedMap.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>>,
) {
  return ['api', '/api/onlyoffice/config.php', toValue(args)] as const
}

export function getApiOnlyofficeConfigPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOnlyofficeConfigPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.onlyoffice['config.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOnlyofficeConfigPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOnlyofficeConfigPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOnlyofficeConfigPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.onlyoffice['config.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOnlyofficeSignedDownloadPhpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>
  >,
) {
  return ['api', '/api/onlyoffice/signed-download.php', toValue(args)] as const
}

export function getApiOnlyofficeSignedDownloadPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOnlyofficeSignedDownloadPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.onlyoffice['signed-download.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOnlyofficeSignedDownloadPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOnlyofficeSignedDownloadPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOnlyofficeSignedDownloadPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.onlyoffice['signed-download.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOnlyofficeStatusPhpQueryKey() {
  return ['api', '/api/onlyoffice/status.php'] as const
}

export function getApiOnlyofficeStatusPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiOnlyofficeStatusPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.onlyoffice['status.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOnlyofficeStatusPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOnlyofficeStatusPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiOnlyofficeStatusPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.onlyoffice['status.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProAuditExportCsvPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>,
) {
  return ['api', '/api/pro/audit/exportCsv.php', toValue(args)] as const
}

export function getApiProAuditExportCsvPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProAuditExportCsvPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.audit['exportCsv.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProAuditExportCsvPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProAuditExportCsvPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProAuditExportCsvPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.audit['exportCsv.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProAuditListPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>>,
) {
  return ['api', '/api/pro/audit/list.php', toValue(args)] as const
}

export function getApiProAuditListPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProAuditListPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.audit['list.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProAuditListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProAuditListPhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProAuditListPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProAuditListPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.audit['list.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProDiskUsageChildrenPhpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>
  >,
) {
  return ['api', '/api/pro/diskUsageChildren.php', toValue(args)] as const
}

export function getApiProDiskUsageChildrenPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProDiskUsageChildrenPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro['diskUsageChildren.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProDiskUsageChildrenPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProDiskUsageChildrenPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProDiskUsageChildrenPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro['diskUsageChildren.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>
  >,
) {
  return ['api', '/api/pro/diskUsageTopFiles.php', toValue(args)] as const
}

export function getApiProDiskUsageTopFilesPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProDiskUsageTopFilesPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro['diskUsageTopFiles.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProDiskUsageTopFilesPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProDiskUsageTopFilesPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProDiskUsageTopFilesPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro['diskUsageTopFiles.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProGroupsListPhpQueryKey() {
  return ['api', '/api/pro/groups/list.php'] as const
}

export function getApiProGroupsListPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProGroupsListPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.groups['list.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProGroupsListPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProGroupsListPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProGroupsListPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.groups['list.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>>,
) {
  return ['api', '/api/pro/portals/get.php', toValue(args)] as const
}

export function getApiProPortalsGetPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProPortalsGetPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.portals['get.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProPortalsGetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProPortalsGetPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsGetPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProPortalsGetPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.portals['get.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProPortalsListPhpQueryKey() {
  return ['api', '/api/pro/portals/list.php'] as const
}

export function getApiProPortalsListPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProPortalsListPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.portals['list.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProPortalsListPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsListPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProPortalsListPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.portals['list.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProPortalsPublicMetaPhpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>
  >,
) {
  return ['api', '/api/pro/portals/publicMeta.php', toValue(args)] as const
}

export function getApiProPortalsPublicMetaPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProPortalsPublicMetaPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.portals['publicMeta.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProPortalsPublicMetaPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsPublicMetaPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProPortalsPublicMetaPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.portals['publicMeta.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>
  >,
) {
  return ['api', '/api/pro/portals/submissions.php', toValue(args)] as const
}

export function getApiProPortalsSubmissionsPhpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProPortalsSubmissionsPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.portals['submissions.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProPortalsSubmissionsPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProPortalsSubmissionsPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProPortalsSubmissionsPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.portals['submissions.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>>,
) {
  return ['api', '/api/pro/search/query.php', toValue(args)] as const
}

export function getApiProSearchQueryPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProSearchQueryPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pro.search['query.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProSearchQueryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProSearchQueryPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProSearchQueryPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProSearchQueryPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pro.search['query.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiProfileGetCurrentUserPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProfileGetCurrentUserPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.profile['getCurrentUser.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProfileGetCurrentUserPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileGetCurrentUserPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProfileGetCurrentUserPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.profile['getCurrentUser.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProfileGetUserPermissionsPhpQueryKey() {
  return ['api', '/api/profile/getUserPermissions.php'] as const
}

export function getApiProfileGetUserPermissionsPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProfileGetUserPermissionsPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.profile['getUserPermissions.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProfileGetUserPermissionsPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileGetUserPermissionsPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProfileGetUserPermissionsPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.profile['getUserPermissions.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/profile/totp_setup.php', keyArgs] as const
}

export function getApiProfileTotpSetupPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProfileTotpSetupPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.profile['totp_setup.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProfileTotpSetupPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileTotpSetupPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProfileTotpSetupPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.profile['totp_setup.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiPublicSiteConfigPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPublicSiteConfigPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.public['siteConfig.php'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPublicSiteConfigPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicSiteConfigPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPublicSiteConfigPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.public['siteConfig.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
