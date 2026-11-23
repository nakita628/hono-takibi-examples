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

export function createApiAdminAclGetGrantsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAdminAclGetGrantsPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiAdminAclSaveGrantsPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminAclSaveGrantsPhpMutationOptions<
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

export function createPostApiAdminAddUserPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminAddUserPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAdminChangeUserPasswordPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminChangeUserPasswordPhpMutationOptions<
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

export function createPostApiAdminClamavTestPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminClamavTestPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAdminDiskUsageDeleteSnapshotPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminDiskUsageDeleteSnapshotPhpMutationOptions<
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

export function createApiAdminDiskUsageSummaryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAdminDiskUsageSummaryPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiAdminDiskUsageTriggerScanPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminDiskUsageTriggerScanPhpMutationOptions<
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

export function createPostApiAdminDownloadProBundlePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminDownloadProBundlePhpMutationOptions<
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

export function createApiAdminGetConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAdminGetConfigPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiAdminGetUsersPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAdminGetUsersPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAdminInstallProBundlePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminInstallProBundlePhpMutationOptions<
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

export function createApiAdminOidcDebugInfoPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAdminOidcDebugInfoPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAdminOidcTestPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminOidcTestPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiAdminReadMetadataPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAdminReadMetadataPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiAdminRemoveUserPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAdminRemoveUserPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAdminResumableCleanupPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminResumableCleanupPhpMutationOptions<
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

export function createPostApiAdminSetEncryptionKeyPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminSetEncryptionKeyPhpMutationOptions<
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

export function createPostApiAdminSetLicensePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminSetLicensePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutApiAdminUpdateConfigPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiAdminUpdateConfigPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutApiAdminUpdateUserPermissionsPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiAdminUpdateUserPermissionsPhpMutationOptions<
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

export function createApiAdminVirusLogPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAdminVirusLogPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAuthAuthPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAuthAuthPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiAuthCheckAuthPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthCheckAuthPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiAuthLoginBasicPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthLoginBasicPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAuthLogoutPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAuthLogoutPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiAuthTokenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthTokenPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiFileCopyFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileCopyFilesPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFileCreateFilePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileCreateFilePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFileCreateShareLinkPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileCreateShareLinkPhpMutationOptions<
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

export function createPostApiFileDeleteFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileDeleteFilesPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFileDeleteShareLinkPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileDeleteShareLinkPhpMutationOptions<
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

export function createPostApiFileDeleteTrashFilesPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileDeleteTrashFilesPhpMutationOptions<
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

export function createApiFileDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileDownloadPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiFileDownloadZipPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileDownloadZipPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiFileDownloadZipFilePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFileDownloadZipFilePhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFileExtractZipPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileExtractZipPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiFileGetFileListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFileGetFileListPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFileGetFileTagPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFileGetFileTagPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFileGetShareLinksPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileGetShareLinksPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiFileGetTrashItemsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileGetTrashItemsPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiFileMoveFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileMoveFilesPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutApiFileRenameFilePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiFileRenameFilePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFileRestoreFilesPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileRestoreFilesPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutApiFileSaveFilePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiFileSaveFilePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFileSaveFileTagPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFileSaveFileTagPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiFileSharePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileSharePhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiFileSnippetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileSnippetPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiFileThumbnailPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileThumbnailPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiFileZipStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFileZipStatusPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiFolderCapabilitiesPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderCapabilitiesPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFolderCreateFolderPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderCreateFolderPhpMutationOptions<
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

export function createPostApiFolderCreateShareFolderLinkPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderCreateShareFolderLinkPhpMutationOptions<
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

export function createPostApiFolderDeleteFolderPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderDeleteFolderPhpMutationOptions<
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

export function createPostApiFolderDeleteShareFolderLinkPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderDeleteShareFolderLinkPhpMutationOptions<
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

export function createApiFolderDownloadSharedFilePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderDownloadSharedFilePhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFolderDownloadSharedFolderPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderDownloadSharedFolderPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFolderEncryptionJobStartPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderEncryptionJobStartPhpMutationOptions<
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

export function createApiFolderEncryptionJobStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderEncryptionJobStatusPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFolderEncryptionJobTickPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderEncryptionJobTickPhpMutationOptions<
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

export function createApiFolderEncryptionPlanPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderEncryptionPlanPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFolderGetFolderColorsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFolderGetFolderColorsPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiFolderGetFolderEncryptionPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderGetFolderEncryptionPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFolderGetFolderListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderGetFolderListPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFolderGetShareFolderLinksPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderGetShareFolderLinksPhpQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiFolderIsEmptyPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFolderIsEmptyPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiFolderListChildrenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderListChildrenPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFolderMoveFolderPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderMoveFolderPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiFolderRenameFolderPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderRenameFolderPhpMutationOptions<
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

export function createPostApiFolderSaveFolderColorPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderSaveFolderColorPhpMutationOptions<
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

export function createPostApiFolderSetFolderEncryptionPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderSetFolderEncryptionPhpMutationOptions<
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

export function createApiFolderShareFolderPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFolderShareFolderPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiFolderUploadToSharedFolderPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFolderUploadToSharedFolderPhpMutationOptions<
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

export function createApiMediaGetProgressPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMediaGetProgressPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiMediaGetViewedMapPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMediaGetViewedMapPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiMediaUpdateProgressPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiMediaUpdateProgressPhpMutationOptions<
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

export function createPostApiOnlyofficeCallbackPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOnlyofficeCallbackPhpMutationOptions<
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

export function createApiOnlyofficeConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOnlyofficeConfigPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiOnlyofficeSignedDownloadPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOnlyofficeSignedDownloadPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiOnlyofficeStatusPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOnlyofficeStatusPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiProAuditExportCsvPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProAuditExportCsvPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiProAuditListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProAuditListPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiProDiskUsageChildrenPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProDiskUsageChildrenPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiProDiskUsageDeleteFilePermanentPhp<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProDiskUsageDeleteFilePermanentPhpMutationOptions<
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

export function createPostApiProDiskUsageDeleteFolderRecursivePhp<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProDiskUsageDeleteFolderRecursivePhpMutationOptions<
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

export function createApiProDiskUsageTopFilesPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProDiskUsageTopFilesPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiProGroupsListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProGroupsListPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiProGroupsSavePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProGroupsSavePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiProPortalsGetPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProPortalsGetPhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiProPortalsListPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProPortalsListPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiProPortalsPublicMetaPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProPortalsPublicMetaPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiProPortalsSavePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProPortalsSavePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApiProPortalsSubmissionsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProPortalsSubmissionsPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiProPortalsSubmitFormPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProPortalsSubmitFormPhpMutationOptions<
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

export function createPostApiProPortalsUploadLogoPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProPortalsUploadLogoPhpMutationOptions<
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

export function createApiProSearchQueryPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProSearchQueryPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiProUploadBrandLogoPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProUploadBrandLogoPhpMutationOptions<
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

export function createPostApiProfileChangePasswordPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProfileChangePasswordPhpMutationOptions<
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

export function createApiProfileGetCurrentUserPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProfileGetCurrentUserPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createApiProfileGetUserPermissionsPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProfileGetUserPermissionsPhpQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiProfileTotpDisablePhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiProfileTotpDisablePhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiProfileTotpRecoverPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProfileTotpRecoverPhpMutationOptions<
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

export function createPostApiProfileTotpSaveCodePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProfileTotpSaveCodePhpMutationOptions<
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

export function createApiProfileTotpSetupPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProfileTotpSetupPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiProfileTotpVerifyPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProfileTotpVerifyPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutApiProfileUpdateUserPanelPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiProfileUpdateUserPanelPhpMutationOptions<
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

export function createPostApiProfileUploadPicturePhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiProfileUploadPicturePhpMutationOptions<
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

export function createApiPublicSiteConfigPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPublicSiteConfigPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiUploadCheckExistingPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUploadCheckExistingPhpMutationOptions<
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

export function createPostApiUploadRemoveChunksPhp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUploadRemoveChunksPhpMutationOptions<
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

export function createPostApiUploadUploadPhp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUploadUploadPhpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
