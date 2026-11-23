import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiAdminAclGetGrantsPhpKey(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
) {
  return ['api', '/api/admin/acl/getGrants.php', args] as const
}

export function useGetApiAdminAclGetGrantsPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminAclGetGrantsPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.acl['getGrants.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminAclGetGrantsPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.acl)['getGrants.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminAclGetGrantsPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.acl)['getGrants.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.acl['getGrants.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminAclSaveGrantsPhpKey() {
  return ['api', '/api/admin/acl/saveGrants.php', 'POST'] as const
}

export function usePostApiAdminAclSaveGrantsPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.acl)['saveGrants.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminAclSaveGrantsPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.acl)['saveGrants.php']['$post']> },
      ) => parseResponse(client.api.admin.acl['saveGrants.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminAddUserPhpKey() {
  return ['api', '/api/admin/addUser.php', 'POST'] as const
}

export function usePostApiAdminAddUserPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['addUser.php']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['addUser.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminAddUserPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['addUser.php']['$post']> },
      ) => parseResponse(client.api.admin['addUser.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminChangeUserPasswordPhpKey() {
  return ['api', '/api/admin/changeUserPassword.php', 'POST'] as const
}

export function usePostApiAdminChangeUserPasswordPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['changeUserPassword.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['changeUserPassword.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminChangeUserPasswordPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['changeUserPassword.php']['$post']> },
      ) => parseResponse(client.api.admin['changeUserPassword.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminClamavTestPhpKey() {
  return ['api', '/api/admin/clamavTest.php', 'POST'] as const
}

export function usePostApiAdminClamavTestPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['clamavTest.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminClamavTestPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.admin['clamavTest.php'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminDiskUsageDeleteSnapshotPhpKey() {
  return ['api', '/api/admin/diskUsageDeleteSnapshot.php', 'POST'] as const
}

export function usePostApiAdminDiskUsageDeleteSnapshotPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminDiskUsageDeleteSnapshotPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['diskUsageDeleteSnapshot.php']['$post']>
        },
      ) => parseResponse(client.api.admin['diskUsageDeleteSnapshot.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminDiskUsageSummaryPhpKey(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
) {
  return ['api', '/api/admin/diskUsageSummary.php', args] as const
}

export function useGetApiAdminDiskUsageSummaryPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminDiskUsageSummaryPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['diskUsageSummary.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminDiskUsageSummaryPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminDiskUsageSummaryPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['diskUsageSummary.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['diskUsageSummary.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminDiskUsageTriggerScanPhpKey() {
  return ['api', '/api/admin/diskUsageTriggerScan.php', 'POST'] as const
}

export function usePostApiAdminDiskUsageTriggerScanPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminDiskUsageTriggerScanPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['diskUsageTriggerScan.php']['$post']>
        },
      ) => parseResponse(client.api.admin['diskUsageTriggerScan.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminDownloadProBundlePhpKey() {
  return ['api', '/api/admin/downloadProBundle.php', 'POST'] as const
}

export function usePostApiAdminDownloadProBundlePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['downloadProBundle.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['downloadProBundle.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminDownloadProBundlePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['downloadProBundle.php']['$post']> },
      ) => parseResponse(client.api.admin['downloadProBundle.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminGetConfigPhpKey() {
  return ['api', '/api/admin/getConfig.php'] as const
}

export function useGetApiAdminGetConfigPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminGetConfigPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['getConfig.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminGetConfigPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminGetConfigPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['getConfig.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['getConfig.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminGetUsersPhpKey() {
  return ['api', '/api/admin/getUsers.php'] as const
}

export function useGetApiAdminGetUsersPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminGetUsersPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['getUsers.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminGetUsersPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminGetUsersPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['getUsers.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['getUsers.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminInstallProBundlePhpKey() {
  return ['api', '/api/admin/installProBundle.php', 'POST'] as const
}

export function usePostApiAdminInstallProBundlePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['installProBundle.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['installProBundle.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminInstallProBundlePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['installProBundle.php']['$post']> },
      ) => parseResponse(client.api.admin['installProBundle.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminOidcDebugInfoPhpKey() {
  return ['api', '/api/admin/oidcDebugInfo.php'] as const
}

export function useGetApiAdminOidcDebugInfoPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminOidcDebugInfoPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['oidcDebugInfo.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminOidcDebugInfoPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminOidcDebugInfoPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['oidcDebugInfo.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['oidcDebugInfo.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminOidcTestPhpKey() {
  return ['api', '/api/admin/oidcTest.php', 'POST'] as const
}

export function usePostApiAdminOidcTestPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['oidcTest.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['oidcTest.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminOidcTestPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['oidcTest.php']['$post']> },
      ) => parseResponse(client.api.admin['oidcTest.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminReadMetadataPhpKey(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
) {
  return ['api', '/api/admin/readMetadata.php', args] as const
}

export function useGetApiAdminReadMetadataPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminReadMetadataPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['readMetadata.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminReadMetadataPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['readMetadata.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminReadMetadataPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['readMetadata.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['readMetadata.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiAdminRemoveUserPhpKey() {
  return ['api', '/api/admin/removeUser.php', 'DELETE'] as const
}

export function useDeleteApiAdminRemoveUserPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['removeUser.php']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['removeUser.php']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminRemoveUserPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['removeUser.php']['$delete']> },
      ) => parseResponse(client.api.admin['removeUser.php'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminResumableCleanupPhpKey() {
  return ['api', '/api/admin/resumableCleanup.php', 'POST'] as const
}

export function usePostApiAdminResumableCleanupPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['resumableCleanup.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['resumableCleanup.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminResumableCleanupPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['resumableCleanup.php']['$post']> },
      ) => parseResponse(client.api.admin['resumableCleanup.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminSetEncryptionKeyPhpKey() {
  return ['api', '/api/admin/setEncryptionKey.php', 'POST'] as const
}

export function usePostApiAdminSetEncryptionKeyPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['setEncryptionKey.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminSetEncryptionKeyPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['setEncryptionKey.php']['$post']> },
      ) => parseResponse(client.api.admin['setEncryptionKey.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminSetLicensePhpKey() {
  return ['api', '/api/admin/setLicense.php', 'POST'] as const
}

export function usePostApiAdminSetLicensePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['setLicense.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['setLicense.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminSetLicensePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['setLicense.php']['$post']> },
      ) => parseResponse(client.api.admin['setLicense.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminUpdateConfigPhpKey() {
  return ['api', '/api/admin/updateConfig.php', 'PUT'] as const
}

export function usePutApiAdminUpdateConfigPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['updateConfig.php']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['updateConfig.php']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminUpdateConfigPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['updateConfig.php']['$put']> },
      ) => parseResponse(client.api.admin['updateConfig.php'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminUpdateUserPermissionsPhpKey() {
  return ['api', '/api/admin/updateUserPermissions.php', 'PUT'] as const
}

export function usePutApiAdminUpdateUserPermissionsPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminUpdateUserPermissionsPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['updateUserPermissions.php']['$put']>
        },
      ) => parseResponse(client.api.admin['updateUserPermissions.php'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminVirusLogPhpKey(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
) {
  return ['api', '/api/admin/virusLog.php', args] as const
}

export function useGetApiAdminVirusLogPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminVirusLogPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['virusLog.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminVirusLogPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['virusLog.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminVirusLogPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['virusLog.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['virusLog.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAuthAuthPhpKey() {
  return ['api', '/api/auth/auth.php', 'POST'] as const
}

export function usePostApiAuthAuthPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['auth.php']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.auth)['auth.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAuthAuthPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.auth)['auth.php']['$post']> },
      ) => parseResponse(client.api.auth['auth.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAuthCheckAuthPhpKey() {
  return ['api', '/api/auth/checkAuth.php'] as const
}

export function useGetApiAuthCheckAuthPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAuthCheckAuthPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth['checkAuth.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAuthCheckAuthPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAuthCheckAuthPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.auth)['checkAuth.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth['checkAuth.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAuthLoginBasicPhpKey() {
  return ['api', '/api/auth/login_basic.php'] as const
}

export function useGetApiAuthLoginBasicPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAuthLoginBasicPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth['login_basic.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAuthLoginBasicPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAuthLoginBasicPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.auth)['login_basic.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth['login_basic.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAuthLogoutPhpKey() {
  return ['api', '/api/auth/logout.php', 'POST'] as const
}

export function usePostApiAuthLogoutPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['logout.php']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.auth)['logout.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAuthLogoutPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.auth)['logout.php']['$post']> },
      ) => parseResponse(client.api.auth['logout.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAuthTokenPhpKey() {
  return ['api', '/api/auth/token.php'] as const
}

export function useGetApiAuthTokenPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthTokenPhpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth['token.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAuthTokenPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthTokenPhpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.auth)['token.php']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth['token.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFileCopyFilesPhpKey() {
  return ['api', '/api/file/copyFiles.php', 'POST'] as const
}

export function usePostApiFileCopyFilesPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['copyFiles.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['copyFiles.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileCopyFilesPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['copyFiles.php']['$post']> },
      ) => parseResponse(client.api.file['copyFiles.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileCreateFilePhpKey() {
  return ['api', '/api/file/createFile.php', 'POST'] as const
}

export function usePostApiFileCreateFilePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['createFile.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['createFile.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileCreateFilePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['createFile.php']['$post']> },
      ) => parseResponse(client.api.file['createFile.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileCreateShareLinkPhpKey() {
  return ['api', '/api/file/createShareLink.php', 'POST'] as const
}

export function usePostApiFileCreateShareLinkPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['createShareLink.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['createShareLink.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileCreateShareLinkPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.file)['createShareLink.php']['$post']> },
      ) => parseResponse(client.api.file['createShareLink.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileDeleteFilesPhpKey() {
  return ['api', '/api/file/deleteFiles.php', 'POST'] as const
}

export function usePostApiFileDeleteFilesPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['deleteFiles.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['deleteFiles.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileDeleteFilesPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['deleteFiles.php']['$post']> },
      ) => parseResponse(client.api.file['deleteFiles.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileDeleteShareLinkPhpKey() {
  return ['api', '/api/file/deleteShareLink.php', 'POST'] as const
}

export function usePostApiFileDeleteShareLinkPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['deleteShareLink.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['deleteShareLink.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileDeleteShareLinkPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.file)['deleteShareLink.php']['$post']> },
      ) => parseResponse(client.api.file['deleteShareLink.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileDeleteTrashFilesPhpKey() {
  return ['api', '/api/file/deleteTrashFiles.php', 'POST'] as const
}

export function usePostApiFileDeleteTrashFilesPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['deleteTrashFiles.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileDeleteTrashFilesPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.file)['deleteTrashFiles.php']['$post']> },
      ) => parseResponse(client.api.file['deleteTrashFiles.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFileDownloadPhpKey(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
) {
  return ['api', '/api/file/download.php', args] as const
}

export function useGetApiFileDownloadPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileDownloadPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['download.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileDownloadPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['download.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileDownloadPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['download.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['download.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFileDownloadZipPhpKey() {
  return ['api', '/api/file/downloadZip.php', 'POST'] as const
}

export function usePostApiFileDownloadZipPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['downloadZip.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['downloadZip.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileDownloadZipPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['downloadZip.php']['$post']> },
      ) => parseResponse(client.api.file['downloadZip.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFileDownloadZipFilePhpKey(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
) {
  return ['api', '/api/file/downloadZipFile.php', args] as const
}

export function useGetApiFileDownloadZipFilePhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileDownloadZipFilePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['downloadZipFile.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileDownloadZipFilePhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['downloadZipFile.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileDownloadZipFilePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['downloadZipFile.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['downloadZipFile.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFileExtractZipPhpKey() {
  return ['api', '/api/file/extractZip.php', 'POST'] as const
}

export function usePostApiFileExtractZipPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['extractZip.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['extractZip.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileExtractZipPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['extractZip.php']['$post']> },
      ) => parseResponse(client.api.file['extractZip.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFileGetFileListPhpKey(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
) {
  return ['api', '/api/file/getFileList.php', args] as const
}

export function useGetApiFileGetFileListPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetFileListPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['getFileList.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileGetFileListPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['getFileList.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetFileListPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileList.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['getFileList.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFileGetFileTagPhpKey(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
) {
  return ['api', '/api/file/getFileTag.php', args] as const
}

export function useGetApiFileGetFileTagPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetFileTagPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['getFileTag.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileGetFileTagPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['getFileTag.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetFileTagPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getFileTag.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['getFileTag.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFileGetShareLinksPhpKey() {
  return ['api', '/api/file/getShareLinks.php'] as const
}

export function useGetApiFileGetShareLinksPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetShareLinksPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.file['getShareLinks.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileGetShareLinksPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetShareLinksPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getShareLinks.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.file['getShareLinks.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFileGetTrashItemsPhpKey() {
  return ['api', '/api/file/getTrashItems.php'] as const
}

export function useGetApiFileGetTrashItemsPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetTrashItemsPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.file['getTrashItems.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileGetTrashItemsPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileGetTrashItemsPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['getTrashItems.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.file['getTrashItems.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFileMoveFilesPhpKey() {
  return ['api', '/api/file/moveFiles.php', 'POST'] as const
}

export function usePostApiFileMoveFilesPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['moveFiles.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['moveFiles.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileMoveFilesPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['moveFiles.php']['$post']> },
      ) => parseResponse(client.api.file['moveFiles.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiFileRenameFilePhpKey() {
  return ['api', '/api/file/renameFile.php', 'PUT'] as const
}

export function usePutApiFileRenameFilePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['renameFile.php']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['renameFile.php']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiFileRenameFilePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['renameFile.php']['$put']> },
      ) => parseResponse(client.api.file['renameFile.php'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileRestoreFilesPhpKey() {
  return ['api', '/api/file/restoreFiles.php', 'POST'] as const
}

export function usePostApiFileRestoreFilesPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['restoreFiles.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['restoreFiles.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileRestoreFilesPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['restoreFiles.php']['$post']> },
      ) => parseResponse(client.api.file['restoreFiles.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiFileSaveFilePhpKey() {
  return ['api', '/api/file/saveFile.php', 'PUT'] as const
}

export function usePutApiFileSaveFilePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['saveFile.php']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['saveFile.php']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiFileSaveFilePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['saveFile.php']['$put']> },
      ) => parseResponse(client.api.file['saveFile.php'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFileSaveFileTagPhpKey() {
  return ['api', '/api/file/saveFileTag.php', 'POST'] as const
}

export function usePostApiFileSaveFileTagPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.file)['saveFileTag.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.file)['saveFileTag.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFileSaveFileTagPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.file)['saveFileTag.php']['$post']> },
      ) => parseResponse(client.api.file['saveFileTag.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFileSharePhpKey(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
) {
  return ['api', '/api/file/share.php', args] as const
}

export function useGetApiFileSharePhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileSharePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['share.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileSharePhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['share.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileSharePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['share.php']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['share.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFileSnippetPhpKey(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
) {
  return ['api', '/api/file/snippet.php', args] as const
}

export function useGetApiFileSnippetPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileSnippetPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['snippet.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileSnippetPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['snippet.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileSnippetPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.file)['snippet.php']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['snippet.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFileThumbnailPhpKey(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
) {
  return ['api', '/api/file/thumbnail.php', args] as const
}

export function useGetApiFileThumbnailPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileThumbnailPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['thumbnail.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileThumbnailPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['thumbnail.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileThumbnailPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['thumbnail.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['thumbnail.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFileZipStatusPhpKey(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
) {
  return ['api', '/api/file/zipStatus.php', args] as const
}

export function useGetApiFileZipStatusPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileZipStatusPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['zipStatus.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFileZipStatusPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.file)['zipStatus.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFileZipStatusPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.file)['zipStatus.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.file['zipStatus.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderCapabilitiesPhpKey(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
) {
  return ['api', '/api/folder/capabilities.php', args] as const
}

export function useGetApiFolderCapabilitiesPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderCapabilitiesPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['capabilities.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderCapabilitiesPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['capabilities.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderCapabilitiesPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['capabilities.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['capabilities.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderCreateFolderPhpKey() {
  return ['api', '/api/folder/createFolder.php', 'POST'] as const
}

export function usePostApiFolderCreateFolderPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['createFolder.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['createFolder.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderCreateFolderPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.folder)['createFolder.php']['$post']> },
      ) => parseResponse(client.api.folder['createFolder.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderCreateShareFolderLinkPhpKey() {
  return ['api', '/api/folder/createShareFolderLink.php', 'POST'] as const
}

export function usePostApiFolderCreateShareFolderLinkPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderCreateShareFolderLinkPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.folder)['createShareFolderLink.php']['$post']>
        },
      ) => parseResponse(client.api.folder['createShareFolderLink.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderDeleteFolderPhpKey() {
  return ['api', '/api/folder/deleteFolder.php', 'POST'] as const
}

export function usePostApiFolderDeleteFolderPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['deleteFolder.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['deleteFolder.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderDeleteFolderPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.folder)['deleteFolder.php']['$post']> },
      ) => parseResponse(client.api.folder['deleteFolder.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderDeleteShareFolderLinkPhpKey() {
  return ['api', '/api/folder/deleteShareFolderLink.php', 'POST'] as const
}

export function usePostApiFolderDeleteShareFolderLinkPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderDeleteShareFolderLinkPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.folder)['deleteShareFolderLink.php']['$post']>
        },
      ) => parseResponse(client.api.folder['deleteShareFolderLink.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFolderDownloadSharedFilePhpKey(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
) {
  return ['api', '/api/folder/downloadSharedFile.php', args] as const
}

export function useGetApiFolderDownloadSharedFilePhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderDownloadSharedFilePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['downloadSharedFile.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderDownloadSharedFilePhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderDownloadSharedFilePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFile.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['downloadSharedFile.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderDownloadSharedFolderPhpKey(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
) {
  return ['api', '/api/folder/downloadSharedFolder.php', args] as const
}

export function useGetApiFolderDownloadSharedFolderPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderDownloadSharedFolderPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['downloadSharedFolder.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderDownloadSharedFolderPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderDownloadSharedFolderPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['downloadSharedFolder.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['downloadSharedFolder.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderEncryptionJobStartPhpKey() {
  return ['api', '/api/folder/encryptionJobStart.php', 'POST'] as const
}

export function usePostApiFolderEncryptionJobStartPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['encryptionJobStart.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderEncryptionJobStartPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.folder)['encryptionJobStart.php']['$post']> },
      ) => parseResponse(client.api.folder['encryptionJobStart.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFolderEncryptionJobStatusPhpKey(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
) {
  return ['api', '/api/folder/encryptionJobStatus.php', args] as const
}

export function useGetApiFolderEncryptionJobStatusPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderEncryptionJobStatusPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['encryptionJobStatus.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderEncryptionJobStatusPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderEncryptionJobStatusPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionJobStatus.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['encryptionJobStatus.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderEncryptionJobTickPhpKey() {
  return ['api', '/api/folder/encryptionJobTick.php', 'POST'] as const
}

export function usePostApiFolderEncryptionJobTickPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['encryptionJobTick.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderEncryptionJobTickPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.folder)['encryptionJobTick.php']['$post']> },
      ) => parseResponse(client.api.folder['encryptionJobTick.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFolderEncryptionPlanPhpKey(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
) {
  return ['api', '/api/folder/encryptionPlan.php', args] as const
}

export function useGetApiFolderEncryptionPlanPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderEncryptionPlanPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['encryptionPlan.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderEncryptionPlanPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['encryptionPlan.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderEncryptionPlanPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['encryptionPlan.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['encryptionPlan.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderGetFolderColorsPhpKey() {
  return ['api', '/api/folder/getFolderColors.php'] as const
}

export function useGetApiFolderGetFolderColorsPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetFolderColorsPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['getFolderColors.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderGetFolderColorsPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetFolderColorsPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderColors.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['getFolderColors.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderGetFolderEncryptionPhpKey(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
) {
  return ['api', '/api/folder/getFolderEncryption.php', args] as const
}

export function useGetApiFolderGetFolderEncryptionPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetFolderEncryptionPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['getFolderEncryption.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderGetFolderEncryptionPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetFolderEncryptionPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderEncryption.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['getFolderEncryption.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderGetFolderListPhpKey(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
) {
  return ['api', '/api/folder/getFolderList.php', args] as const
}

export function useGetApiFolderGetFolderListPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetFolderListPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['getFolderList.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderGetFolderListPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['getFolderList.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetFolderListPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getFolderList.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['getFolderList.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderGetShareFolderLinksPhpKey() {
  return ['api', '/api/folder/getShareFolderLinks.php'] as const
}

export function useGetApiFolderGetShareFolderLinksPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetShareFolderLinksPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['getShareFolderLinks.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderGetShareFolderLinksPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderGetShareFolderLinksPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['getShareFolderLinks.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.folder['getShareFolderLinks.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderIsEmptyPhpKey(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
) {
  return ['api', '/api/folder/isEmpty.php', args] as const
}

export function useGetApiFolderIsEmptyPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderIsEmptyPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['isEmpty.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderIsEmptyPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['isEmpty.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderIsEmptyPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['isEmpty.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['isEmpty.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiFolderListChildrenPhpKey(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
) {
  return ['api', '/api/folder/listChildren.php', args] as const
}

export function useGetApiFolderListChildrenPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderListChildrenPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['listChildren.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderListChildrenPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['listChildren.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderListChildrenPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['listChildren.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['listChildren.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderMoveFolderPhpKey() {
  return ['api', '/api/folder/moveFolder.php', 'POST'] as const
}

export function usePostApiFolderMoveFolderPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['moveFolder.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['moveFolder.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderMoveFolderPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.folder)['moveFolder.php']['$post']> },
      ) => parseResponse(client.api.folder['moveFolder.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderRenameFolderPhpKey() {
  return ['api', '/api/folder/renameFolder.php', 'POST'] as const
}

export function usePostApiFolderRenameFolderPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['renameFolder.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['renameFolder.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderRenameFolderPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.folder)['renameFolder.php']['$post']> },
      ) => parseResponse(client.api.folder['renameFolder.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderSaveFolderColorPhpKey() {
  return ['api', '/api/folder/saveFolderColor.php', 'POST'] as const
}

export function usePostApiFolderSaveFolderColorPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['saveFolderColor.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['saveFolderColor.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderSaveFolderColorPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.folder)['saveFolderColor.php']['$post']> },
      ) => parseResponse(client.api.folder['saveFolderColor.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFolderSetFolderEncryptionPhpKey() {
  return ['api', '/api/folder/setFolderEncryption.php', 'POST'] as const
}

export function usePostApiFolderSetFolderEncryptionPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderSetFolderEncryptionPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.folder)['setFolderEncryption.php']['$post']>
        },
      ) => parseResponse(client.api.folder['setFolderEncryption.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFolderShareFolderPhpKey(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
) {
  return ['api', '/api/folder/shareFolder.php', args] as const
}

export function useGetApiFolderShareFolderPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderShareFolderPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['shareFolder.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFolderShareFolderPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.folder)['shareFolder.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFolderShareFolderPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.folder)['shareFolder.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.folder['shareFolder.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFolderUploadToSharedFolderPhpKey() {
  return ['api', '/api/folder/uploadToSharedFolder.php', 'POST'] as const
}

export function usePostApiFolderUploadToSharedFolderPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFolderUploadToSharedFolderPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.folder)['uploadToSharedFolder.php']['$post']>
        },
      ) => parseResponse(client.api.folder['uploadToSharedFolder.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMediaGetProgressPhpKey(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
) {
  return ['api', '/api/media/getProgress.php', args] as const
}

export function useGetApiMediaGetProgressPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMediaGetProgressPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.media['getProgress.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMediaGetProgressPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.media)['getProgress.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMediaGetProgressPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getProgress.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.media['getProgress.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMediaGetViewedMapPhpKey(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
) {
  return ['api', '/api/media/getViewedMap.php', args] as const
}

export function useGetApiMediaGetViewedMapPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMediaGetViewedMapPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.media['getViewedMap.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMediaGetViewedMapPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.media)['getViewedMap.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMediaGetViewedMapPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.media)['getViewedMap.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.media['getViewedMap.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiMediaUpdateProgressPhpKey() {
  return ['api', '/api/media/updateProgress.php', 'POST'] as const
}

export function usePostApiMediaUpdateProgressPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.media)['updateProgress.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.media)['updateProgress.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMediaUpdateProgressPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.media)['updateProgress.php']['$post']> },
      ) => parseResponse(client.api.media['updateProgress.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOnlyofficeCallbackPhpKey() {
  return ['api', '/api/onlyoffice/callback.php', 'POST'] as const
}

export function usePostApiOnlyofficeCallbackPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['callback.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.onlyoffice)['callback.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOnlyofficeCallbackPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.onlyoffice)['callback.php']['$post']> },
      ) => parseResponse(client.api.onlyoffice['callback.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOnlyofficeConfigPhpKey(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
) {
  return ['api', '/api/onlyoffice/config.php', args] as const
}

export function useGetApiOnlyofficeConfigPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOnlyofficeConfigPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.onlyoffice['config.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOnlyofficeConfigPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.onlyoffice)['config.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOnlyofficeConfigPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['config.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.onlyoffice['config.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOnlyofficeSignedDownloadPhpKey(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
) {
  return ['api', '/api/onlyoffice/signed-download.php', args] as const
}

export function useGetApiOnlyofficeSignedDownloadPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOnlyofficeSignedDownloadPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.onlyoffice['signed-download.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOnlyofficeSignedDownloadPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOnlyofficeSignedDownloadPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['signed-download.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.onlyoffice['signed-download.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOnlyofficeStatusPhpKey() {
  return ['api', '/api/onlyoffice/status.php'] as const
}

export function useGetApiOnlyofficeStatusPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOnlyofficeStatusPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.onlyoffice['status.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOnlyofficeStatusPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOnlyofficeStatusPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.onlyoffice)['status.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.onlyoffice['status.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProAuditExportCsvPhpKey(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
) {
  return ['api', '/api/pro/audit/exportCsv.php', args] as const
}

export function useGetApiProAuditExportCsvPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProAuditExportCsvPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.audit['exportCsv.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProAuditExportCsvPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProAuditExportCsvPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['exportCsv.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.audit['exportCsv.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProAuditListPhpKey(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
) {
  return ['api', '/api/pro/audit/list.php', args] as const
}

export function useGetApiProAuditListPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProAuditListPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.audit['list.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProAuditListPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.audit)['list.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProAuditListPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.audit)['list.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.audit['list.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProDiskUsageChildrenPhpKey(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
) {
  return ['api', '/api/pro/diskUsageChildren.php', args] as const
}

export function useGetApiProDiskUsageChildrenPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProDiskUsageChildrenPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro['diskUsageChildren.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProDiskUsageChildrenPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProDiskUsageChildrenPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageChildren.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro['diskUsageChildren.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProDiskUsageDeleteFilePermanentPhpKey() {
  return ['api', '/api/pro/diskUsageDeleteFilePermanent.php', 'POST'] as const
}

export function usePostApiProDiskUsageDeleteFilePermanentPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProDiskUsageDeleteFilePermanentPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.pro)['diskUsageDeleteFilePermanent.php']['$post']
          >
        },
      ) =>
        parseResponse(client.api.pro['diskUsageDeleteFilePermanent.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProDiskUsageDeleteFolderRecursivePhpKey() {
  return ['api', '/api/pro/diskUsageDeleteFolderRecursive.php', 'POST'] as const
}

export function usePostApiProDiskUsageDeleteFolderRecursivePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProDiskUsageDeleteFolderRecursivePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.pro)['diskUsageDeleteFolderRecursive.php']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pro['diskUsageDeleteFolderRecursive.php'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiProDiskUsageTopFilesPhpKey(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
) {
  return ['api', '/api/pro/diskUsageTopFiles.php', args] as const
}

export function useGetApiProDiskUsageTopFilesPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProDiskUsageTopFilesPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro['diskUsageTopFiles.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProDiskUsageTopFilesPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProDiskUsageTopFilesPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro)['diskUsageTopFiles.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro['diskUsageTopFiles.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProGroupsListPhpKey() {
  return ['api', '/api/pro/groups/list.php'] as const
}

export function useGetApiProGroupsListPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProGroupsListPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.groups['list.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProGroupsListPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProGroupsListPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.groups)['list.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.groups['list.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProGroupsSavePhpKey() {
  return ['api', '/api/pro/groups/save.php', 'POST'] as const
}

export function usePostApiProGroupsSavePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.groups)['save.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pro.groups)['save.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProGroupsSavePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pro.groups)['save.php']['$post']> },
      ) => parseResponse(client.api.pro.groups['save.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProPortalsGetPhpKey(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
) {
  return ['api', '/api/pro/portals/get.php', args] as const
}

export function useGetApiProPortalsGetPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsGetPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.portals['get.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProPortalsGetPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.portals)['get.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsGetPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['get.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.portals['get.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProPortalsListPhpKey() {
  return ['api', '/api/pro/portals/list.php'] as const
}

export function useGetApiProPortalsListPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsListPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.portals['list.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProPortalsListPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsListPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['list.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.portals['list.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProPortalsPublicMetaPhpKey(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
) {
  return ['api', '/api/pro/portals/publicMeta.php', args] as const
}

export function useGetApiProPortalsPublicMetaPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsPublicMetaPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.portals['publicMeta.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProPortalsPublicMetaPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsPublicMetaPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['publicMeta.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.portals['publicMeta.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProPortalsSavePhpKey() {
  return ['api', '/api/pro/portals/save.php', 'POST'] as const
}

export function usePostApiProPortalsSavePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['save.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pro.portals)['save.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProPortalsSavePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pro.portals)['save.php']['$post']> },
      ) => parseResponse(client.api.pro.portals['save.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProPortalsSubmissionsPhpKey(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
) {
  return ['api', '/api/pro/portals/submissions.php', args] as const
}

export function useGetApiProPortalsSubmissionsPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsSubmissionsPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pro.portals['submissions.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProPortalsSubmissionsPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.portals)['submissions.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProPortalsSubmissionsPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.portals)['submissions.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pro.portals['submissions.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProPortalsSubmitFormPhpKey() {
  return ['api', '/api/pro/portals/submitForm.php', 'POST'] as const
}

export function usePostApiProPortalsSubmitFormPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['submitForm.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pro.portals)['submitForm.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProPortalsSubmitFormPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.pro.portals)['submitForm.php']['$post']> },
      ) => parseResponse(client.api.pro.portals['submitForm.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProPortalsUploadLogoPhpKey() {
  return ['api', '/api/pro/portals/uploadLogo.php', 'POST'] as const
}

export function usePostApiProPortalsUploadLogoPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProPortalsUploadLogoPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.pro.portals)['uploadLogo.php']['$post']> },
      ) => parseResponse(client.api.pro.portals['uploadLogo.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProSearchQueryPhpKey(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
) {
  return ['api', '/api/pro/search/query.php', args] as const
}

export function useGetApiProSearchQueryPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProSearchQueryPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.search['query.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProSearchQueryPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.pro.search)['query.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProSearchQueryPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pro.search)['query.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pro.search['query.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProUploadBrandLogoPhpKey() {
  return ['api', '/api/pro/uploadBrandLogo.php', 'POST'] as const
}

export function usePostApiProUploadBrandLogoPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProUploadBrandLogoPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pro)['uploadBrandLogo.php']['$post']> },
      ) => parseResponse(client.api.pro['uploadBrandLogo.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProfileChangePasswordPhpKey() {
  return ['api', '/api/profile/changePassword.php', 'POST'] as const
}

export function usePostApiProfileChangePasswordPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['changePassword.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['changePassword.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProfileChangePasswordPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.profile)['changePassword.php']['$post']> },
      ) => parseResponse(client.api.profile['changePassword.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProfileGetCurrentUserPhpKey() {
  return ['api', '/api/profile/getCurrentUser.php'] as const
}

export function useGetApiProfileGetCurrentUserPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProfileGetCurrentUserPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.profile['getCurrentUser.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProfileGetCurrentUserPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProfileGetCurrentUserPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['getCurrentUser.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.profile['getCurrentUser.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProfileGetUserPermissionsPhpKey() {
  return ['api', '/api/profile/getUserPermissions.php'] as const
}

export function useGetApiProfileGetUserPermissionsPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProfileGetUserPermissionsPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.profile['getUserPermissions.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProfileGetUserPermissionsPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProfileGetUserPermissionsPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['getUserPermissions.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.profile['getUserPermissions.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiProfileTotpDisablePhpKey() {
  return ['api', '/api/profile/totp_disable.php', 'PUT'] as const
}

export function usePutApiProfileTotpDisablePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_disable.php']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['totp_disable.php']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiProfileTotpDisablePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.profile)['totp_disable.php']['$put']> },
      ) => parseResponse(client.api.profile['totp_disable.php'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProfileTotpRecoverPhpKey() {
  return ['api', '/api/profile/totp_recover.php', 'POST'] as const
}

export function usePostApiProfileTotpRecoverPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_recover.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['totp_recover.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProfileTotpRecoverPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.profile)['totp_recover.php']['$post']> },
      ) => parseResponse(client.api.profile['totp_recover.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProfileTotpSaveCodePhpKey() {
  return ['api', '/api/profile/totp_saveCode.php', 'POST'] as const
}

export function usePostApiProfileTotpSaveCodePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_saveCode.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['totp_saveCode.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProfileTotpSaveCodePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.profile)['totp_saveCode.php']['$post']> },
      ) => parseResponse(client.api.profile['totp_saveCode.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProfileTotpSetupPhpKey(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/profile/totp_setup.php', keyArgs] as const
}

export function useGetApiProfileTotpSetupPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProfileTotpSetupPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.profile['totp_setup.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProfileTotpSetupPhp<TError = unknown>(
  args: InferRequestType<(typeof client.api.profile)['totp_setup.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiProfileTotpSetupPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.profile)['totp_setup.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.profile['totp_setup.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProfileTotpVerifyPhpKey() {
  return ['api', '/api/profile/totp_verify.php', 'POST'] as const
}

export function usePostApiProfileTotpVerifyPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['totp_verify.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['totp_verify.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProfileTotpVerifyPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.profile)['totp_verify.php']['$post']> },
      ) => parseResponse(client.api.profile['totp_verify.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiProfileUpdateUserPanelPhpKey() {
  return ['api', '/api/profile/updateUserPanel.php', 'PUT'] as const
}

export function usePutApiProfileUpdateUserPanelPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['updateUserPanel.php']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['updateUserPanel.php']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiProfileUpdateUserPanelPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.profile)['updateUserPanel.php']['$put']> },
      ) => parseResponse(client.api.profile['updateUserPanel.php'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProfileUploadPicturePhpKey() {
  return ['api', '/api/profile/uploadPicture.php', 'POST'] as const
}

export function usePostApiProfileUploadPicturePhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile)['uploadPicture.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.profile)['uploadPicture.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProfileUploadPicturePhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.profile)['uploadPicture.php']['$post']> },
      ) => parseResponse(client.api.profile['uploadPicture.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicSiteConfigPhpKey() {
  return ['api', '/api/public/siteConfig.php'] as const
}

export function useGetApiPublicSiteConfigPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicSiteConfigPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['siteConfig.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicSiteConfigPhp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicSiteConfigPhpKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['siteConfig.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['siteConfig.php'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUploadCheckExistingPhpKey() {
  return ['api', '/api/upload/checkExisting.php', 'POST'] as const
}

export function usePostApiUploadCheckExistingPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.upload)['checkExisting.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.upload)['checkExisting.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUploadCheckExistingPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.upload)['checkExisting.php']['$post']> },
      ) => parseResponse(client.api.upload['checkExisting.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUploadRemoveChunksPhpKey() {
  return ['api', '/api/upload/removeChunks.php', 'POST'] as const
}

export function usePostApiUploadRemoveChunksPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.upload)['removeChunks.php']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.upload)['removeChunks.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUploadRemoveChunksPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.upload)['removeChunks.php']['$post']> },
      ) => parseResponse(client.api.upload['removeChunks.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUploadUploadPhpKey() {
  return ['api', '/api/upload/upload.php', 'POST'] as const
}

export function usePostApiUploadUploadPhp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.upload)['upload.php']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.upload)['upload.php']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUploadUploadPhpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.upload)['upload.php']['$post']> },
      ) => parseResponse(client.api.upload['upload.php'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
