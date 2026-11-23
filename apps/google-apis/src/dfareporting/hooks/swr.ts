import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReportsKey() {
  return ['reports'] as const
}

export function getUserprofilesKey() {
  return ['userprofiles'] as const
}

export function getGetReportsReportIdFilesFileIdKey(
  args: InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
) {
  return ['reports', '/reports/:reportId/files/:fileId', args] as const
}

export function useGetReportsReportIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
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
        ? getGetReportsReportIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reports[':reportId'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsReportIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
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
        ? getGetReportsReportIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reports[':reportId'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesKey(args: InferRequestType<typeof client.userprofiles.$get>) {
  return ['userprofiles', '/userprofiles', args] as const
}

export function useGetUserprofiles<TError = unknown>(
  args: InferRequestType<typeof client.userprofiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserprofilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofiles<TError = unknown>(
  args: InferRequestType<typeof client.userprofiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserprofilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId', args] as const
}

export function useGetUserprofilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>
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
        ? getGetUserprofilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>
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
        ? getGetUserprofilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/accountActiveAdSummaries/:summaryAccountId',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountActiveAdSummaries[':summaryAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountActiveAdSummaries[':summaryAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountPermissionGroupsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissionGroups', args] as const
}

export function useGetUserprofilesProfileIdAccountPermissionGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissionGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountPermissionGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissionGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountPermissionGroupsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissionGroups/:id', args] as const
}

export function useGetUserprofilesProfileIdAccountPermissionGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissionGroups[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountPermissionGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissionGroups[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountPermissionsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissions', args] as const
}

export function useGetUserprofilesProfileIdAccountPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountPermissionsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissions/:id', args] as const
}

export function useGetUserprofilesProfileIdAccountPermissionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissions[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountPermissionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountPermissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountPermissions[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountUserProfilesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', args] as const
}

export function useGetUserprofilesProfileIdAccountUserProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAccountUserProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountUserProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAccountUserProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdAccountUserProfilesKey() {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', 'PUT'] as const
}

export function usePutUserprofilesProfileIdAccountUserProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdAccountUserProfilesKey()
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
            (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdAccountUserProfilesKey() {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', 'POST'] as const
}

export function usePostUserprofilesProfileIdAccountUserProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdAccountUserProfilesKey()
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
            (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdAccountUserProfilesKey() {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdAccountUserProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdAccountUserProfilesKey()
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
            (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountUserProfilesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles/:id', args] as const
}

export function useGetUserprofilesProfileIdAccountUserProfilesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountUserProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountUserProfilesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAccountUserProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].accountUserProfiles[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accounts', args] as const
}

export function useGetUserprofilesProfileIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
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
        ? getGetUserprofilesProfileIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
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
        ? getGetUserprofilesProfileIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdAccountsKey() {
  return ['userprofiles', '/userprofiles/:profileId/accounts', 'PUT'] as const
}

export function usePutUserprofilesProfileIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].accounts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdAccountsKey() {
  return ['userprofiles', '/userprofiles/:profileId/accounts', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].accounts.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAccountsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accounts/:id', args] as const
}

export function useGetUserprofilesProfileIdAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/ads', args] as const
}

export function useGetUserprofilesProfileIdAds<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
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
        ? getGetUserprofilesProfileIdAdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAds<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
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
        ? getGetUserprofilesProfileIdAdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdAdsKey() {
  return ['userprofiles', '/userprofiles/:profileId/ads', 'PUT'] as const
}

export function usePutUserprofilesProfileIdAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$put']> },
      ) => parseResponse(client.userprofiles[':profileId'].ads.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdAdsKey() {
  return ['userprofiles', '/userprofiles/:profileId/ads', 'POST'] as const
}

export function usePostUserprofilesProfileIdAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$post']> },
      ) => parseResponse(client.userprofiles[':profileId'].ads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdAdsKey() {
  return ['userprofiles', '/userprofiles/:profileId/ads', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$patch']> },
      ) => parseResponse(client.userprofiles[':profileId'].ads.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/ads/:id', args] as const
}

export function useGetUserprofilesProfileIdAdsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
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
        ? getGetUserprofilesProfileIdAdsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].ads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
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
        ? getGetUserprofilesProfileIdAdsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].ads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdvertiserGroupsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', args] as const
}

export function useGetUserprofilesProfileIdAdvertiserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAdvertiserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].advertiserGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdvertiserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAdvertiserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].advertiserGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdAdvertiserGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', 'PUT'] as const
}

export function usePutUserprofilesProfileIdAdvertiserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdAdvertiserGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].advertiserGroups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdAdvertiserGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', 'POST'] as const
}

export function usePostUserprofilesProfileIdAdvertiserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdAdvertiserGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].advertiserGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdAdvertiserGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdAdvertiserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdAdvertiserGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserGroups.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdvertiserGroupsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups/:id', args] as const
}

export function useGetUserprofilesProfileIdAdvertiserGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAdvertiserGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserGroups[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdvertiserGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAdvertiserGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserGroups[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdAdvertiserGroupsIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdAdvertiserGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdAdvertiserGroupsIdKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserGroups[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdvertiserLandingPagesKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', args] as const
}

export function useGetUserprofilesProfileIdAdvertiserLandingPages<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAdvertiserLandingPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdvertiserLandingPages<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAdvertiserLandingPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdAdvertiserLandingPagesKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', 'PUT'] as const
}

export function usePutUserprofilesProfileIdAdvertiserLandingPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdAdvertiserLandingPagesKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdAdvertiserLandingPagesKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', 'POST'] as const
}

export function usePostUserprofilesProfileIdAdvertiserLandingPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdAdvertiserLandingPagesKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdAdvertiserLandingPagesKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdAdvertiserLandingPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdAdvertiserLandingPagesKey()
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
            (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdvertiserLandingPagesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages/:id', args] as const
}

export function useGetUserprofilesProfileIdAdvertiserLandingPagesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAdvertiserLandingPagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdvertiserLandingPagesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdAdvertiserLandingPagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertiserLandingPages[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdvertisersKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', args] as const
}

export function useGetUserprofilesProfileIdAdvertisers<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
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
        ? getGetUserprofilesProfileIdAdvertisersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].advertisers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdvertisers<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
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
        ? getGetUserprofilesProfileIdAdvertisersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].advertisers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdAdvertisersKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', 'PUT'] as const
}

export function usePutUserprofilesProfileIdAdvertisers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdAdvertisersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].advertisers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdAdvertisersKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', 'POST'] as const
}

export function usePostUserprofilesProfileIdAdvertisers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdAdvertisersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].advertisers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdAdvertisersKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdAdvertisers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdAdvertisersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].advertisers.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdAdvertisersIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertisers/:id', args] as const
}

export function useGetUserprofilesProfileIdAdvertisersId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAdvertisersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertisers[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdAdvertisersId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdAdvertisersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].advertisers[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdBrowsersKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/browsers', args] as const
}

export function useGetUserprofilesProfileIdBrowsers<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
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
        ? getGetUserprofilesProfileIdBrowsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].browsers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdBrowsers<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
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
        ? getGetUserprofilesProfileIdBrowsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].browsers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCampaignsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', args] as const
}

export function useGetUserprofilesProfileIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
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
        ? getGetUserprofilesProfileIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
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
        ? getGetUserprofilesProfileIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdCampaignsKey() {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', 'PUT'] as const
}

export function usePutUserprofilesProfileIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].campaigns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCampaignsKey() {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', 'POST'] as const
}

export function usePostUserprofilesProfileIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdCampaignsKey() {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].campaigns.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/campaigns/:campaignId/campaignCreativeAssociations',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].campaigns[
            ':campaignId'
          ].campaignCreativeAssociations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].campaigns[
            ':campaignId'
          ].campaignCreativeAssociations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/campaigns/:campaignId/campaignCreativeAssociations',
    'POST',
  ] as const
}

export function usePostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsKey()
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
            (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].campaigns[
            ':campaignId'
          ].campaignCreativeAssociations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCampaignsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/campaigns/:id', args] as const
}

export function useGetUserprofilesProfileIdCampaignsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCampaignsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].campaigns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCampaignsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCampaignsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].campaigns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdChangeLogsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/changeLogs', args] as const
}

export function useGetUserprofilesProfileIdChangeLogs<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
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
        ? getGetUserprofilesProfileIdChangeLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].changeLogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdChangeLogs<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
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
        ? getGetUserprofilesProfileIdChangeLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].changeLogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdChangeLogsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/changeLogs/:id', args] as const
}

export function useGetUserprofilesProfileIdChangeLogsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdChangeLogsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].changeLogs[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdChangeLogsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdChangeLogsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].changeLogs[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCitiesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/cities', args] as const
}

export function useGetUserprofilesProfileIdCities<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
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
        ? getGetUserprofilesProfileIdCitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].cities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCities<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
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
        ? getGetUserprofilesProfileIdCitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].cities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdConnectionTypesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/connectionTypes', args] as const
}

export function useGetUserprofilesProfileIdConnectionTypes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>
            >
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
        ? getGetUserprofilesProfileIdConnectionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].connectionTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdConnectionTypes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>
            >
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
        ? getGetUserprofilesProfileIdConnectionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].connectionTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdConnectionTypesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/connectionTypes/:id', args] as const
}

export function useGetUserprofilesProfileIdConnectionTypesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdConnectionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].connectionTypes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdConnectionTypesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdConnectionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].connectionTypes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdContentCategoriesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', args] as const
}

export function useGetUserprofilesProfileIdContentCategories<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>
            >
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
        ? getGetUserprofilesProfileIdContentCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdContentCategories<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>
            >
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
        ? getGetUserprofilesProfileIdContentCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdContentCategoriesKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', 'PUT'] as const
}

export function usePutUserprofilesProfileIdContentCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdContentCategoriesKey()
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
            (typeof client.userprofiles)[':profileId']['contentCategories']['$put']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].contentCategories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdContentCategoriesKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', 'POST'] as const
}

export function usePostUserprofilesProfileIdContentCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdContentCategoriesKey()
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
            (typeof client.userprofiles)[':profileId']['contentCategories']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdContentCategoriesKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdContentCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdContentCategoriesKey()
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
            (typeof client.userprofiles)[':profileId']['contentCategories']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdContentCategoriesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories/:id', args] as const
}

export function useGetUserprofilesProfileIdContentCategoriesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdContentCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdContentCategoriesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdContentCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdContentCategoriesIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdContentCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdContentCategoriesIdKey()
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
            (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].contentCategories[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdConversionsBatchinsertKey() {
  return ['userprofiles', '/userprofiles/:profileId/conversions/batchinsert', 'POST'] as const
}

export function usePostUserprofilesProfileIdConversionsBatchinsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdConversionsBatchinsertKey()
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
            (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].conversions.batchinsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdConversionsBatchupdateKey() {
  return ['userprofiles', '/userprofiles/:profileId/conversions/batchupdate', 'POST'] as const
}

export function usePostUserprofilesProfileIdConversionsBatchupdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdConversionsBatchupdateKey()
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
            (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].conversions.batchupdate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCountriesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/countries', args] as const
}

export function useGetUserprofilesProfileIdCountries<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
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
        ? getGetUserprofilesProfileIdCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCountries<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
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
        ? getGetUserprofilesProfileIdCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCountriesDartIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/countries/:dartId', args] as const
}

export function useGetUserprofilesProfileIdCountriesDartId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCountriesDartIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].countries[':dartId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCountriesDartId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCountriesDartIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].countries[':dartId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeAssets/:advertiserId/creativeAssets',
    'POST',
  ] as const
}

export function usePostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].creativeAssets[':advertiserId'].creativeAssets.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativeFieldsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', args] as const
}

export function useGetUserprofilesProfileIdCreativeFields<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creativeFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativeFields<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creativeFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdCreativeFieldsKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', 'PUT'] as const
}

export function usePutUserprofilesProfileIdCreativeFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdCreativeFieldsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields']['$put']
          >
        },
      ) => parseResponse(client.userprofiles[':profileId'].creativeFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCreativeFieldsKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', 'POST'] as const
}

export function usePostUserprofilesProfileIdCreativeFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdCreativeFieldsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields']['$post']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].creativeFields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdCreativeFieldsKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdCreativeFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdCreativeFieldsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields']['$patch']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].creativeFields.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[
            ':creativeFieldId'
          ].creativeFieldValues.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[
            ':creativeFieldId'
          ].creativeFieldValues.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    'PUT',
  ] as const
}

export function usePutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[
            ':creativeFieldId'
          ].creativeFieldValues.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    'POST',
  ] as const
}

export function usePostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[
            ':creativeFieldId'
          ].creativeFieldValues.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    'PATCH',
  ] as const
}

export function usePatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[
            ':creativeFieldId'
          ].creativeFieldValues.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues/:id',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues/:id',
    'DELETE',
  ] as const
}

export function useDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativeFieldsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields/:id', args] as const
}

export function useGetUserprofilesProfileIdCreativeFieldsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativeFieldsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeFieldsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdCreativeFieldsIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdCreativeFieldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdCreativeFieldsIdKey()
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
            (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].creativeFields[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativeGroupsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', args] as const
}

export function useGetUserprofilesProfileIdCreativeGroups<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCreativeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creativeGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativeGroups<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCreativeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creativeGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdCreativeGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', 'PUT'] as const
}

export function usePutUserprofilesProfileIdCreativeGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdCreativeGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeGroups']['$put']
          >
        },
      ) => parseResponse(client.userprofiles[':profileId'].creativeGroups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCreativeGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', 'POST'] as const
}

export function usePostUserprofilesProfileIdCreativeGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdCreativeGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeGroups']['$post']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].creativeGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdCreativeGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdCreativeGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdCreativeGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].creativeGroups.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativeGroupsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups/:id', args] as const
}

export function useGetUserprofilesProfileIdCreativeGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeGroups[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativeGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdCreativeGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].creativeGroups[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creatives', args] as const
}

export function useGetUserprofilesProfileIdCreatives<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
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
        ? getGetUserprofilesProfileIdCreativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreatives<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
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
        ? getGetUserprofilesProfileIdCreativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdCreativesKey() {
  return ['userprofiles', '/userprofiles/:profileId/creatives', 'PUT'] as const
}

export function usePutUserprofilesProfileIdCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdCreativesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].creatives.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCreativesKey() {
  return ['userprofiles', '/userprofiles/:profileId/creatives', 'POST'] as const
}

export function usePostUserprofilesProfileIdCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdCreativesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].creatives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdCreativesKey() {
  return ['userprofiles', '/userprofiles/:profileId/creatives', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdCreativesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].creatives.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdCreativesIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creatives/:id', args] as const
}

export function useGetUserprofilesProfileIdCreativesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCreativesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creatives[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdCreativesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdCreativesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].creatives[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdCustomEventsBatchinsertKey() {
  return ['userprofiles', '/userprofiles/:profileId/customEvents/batchinsert', 'POST'] as const
}

export function usePostUserprofilesProfileIdCustomEventsBatchinsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdCustomEventsBatchinsertKey()
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
            (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].customEvents.batchinsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdDimensionvaluesQueryKey() {
  return ['userprofiles', '/userprofiles/:profileId/dimensionvalues/query', 'POST'] as const
}

export function usePostUserprofilesProfileIdDimensionvaluesQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdDimensionvaluesQueryKey()
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
            (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].dimensionvalues.query.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdDirectorySitesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/directorySites', args] as const
}

export function useGetUserprofilesProfileIdDirectorySites<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>
            >
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
        ? getGetUserprofilesProfileIdDirectorySitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].directorySites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdDirectorySites<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>
            >
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
        ? getGetUserprofilesProfileIdDirectorySitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].directorySites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdDirectorySitesKey() {
  return ['userprofiles', '/userprofiles/:profileId/directorySites', 'POST'] as const
}

export function usePostUserprofilesProfileIdDirectorySites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdDirectorySitesKey()
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
            (typeof client.userprofiles)[':profileId']['directorySites']['$post']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].directorySites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdDirectorySitesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/directorySites/:id', args] as const
}

export function useGetUserprofilesProfileIdDirectorySitesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdDirectorySitesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].directorySites[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdDirectorySitesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdDirectorySitesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].directorySites[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdDynamicTargetingKeysKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/dynamicTargetingKeys', args] as const
}

export function useGetUserprofilesProfileIdDynamicTargetingKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
            >
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
        ? getGetUserprofilesProfileIdDynamicTargetingKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].dynamicTargetingKeys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdDynamicTargetingKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
            >
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
        ? getGetUserprofilesProfileIdDynamicTargetingKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].dynamicTargetingKeys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdDynamicTargetingKeysKey() {
  return ['userprofiles', '/userprofiles/:profileId/dynamicTargetingKeys', 'POST'] as const
}

export function usePostUserprofilesProfileIdDynamicTargetingKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdDynamicTargetingKeysKey()
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
            (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].dynamicTargetingKeys.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdDynamicTargetingKeysObjectIdKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/dynamicTargetingKeys/:objectId',
    'DELETE',
  ] as const
}

export function useDeleteUserprofilesProfileIdDynamicTargetingKeysObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdDynamicTargetingKeysObjectIdKey()
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
            (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].dynamicTargetingKeys[':objectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdEventTagsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', args] as const
}

export function useGetUserprofilesProfileIdEventTags<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
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
        ? getGetUserprofilesProfileIdEventTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].eventTags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdEventTags<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
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
        ? getGetUserprofilesProfileIdEventTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].eventTags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdEventTagsKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', 'PUT'] as const
}

export function usePutUserprofilesProfileIdEventTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdEventTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].eventTags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdEventTagsKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', 'POST'] as const
}

export function usePostUserprofilesProfileIdEventTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdEventTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].eventTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdEventTagsKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdEventTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdEventTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].eventTags.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdEventTagsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/eventTags/:id', args] as const
}

export function useGetUserprofilesProfileIdEventTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdEventTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].eventTags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdEventTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdEventTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].eventTags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdEventTagsIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdEventTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdEventTagsIdKey()
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
            (typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].eventTags[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFilesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/files', args] as const
}

export function useGetUserprofilesProfileIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
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
        ? getGetUserprofilesProfileIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
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
        ? getGetUserprofilesProfileIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFloodlightActivitiesKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', args] as const
}

export function useGetUserprofilesProfileIdFloodlightActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFloodlightActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdFloodlightActivitiesKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', 'PUT'] as const
}

export function usePutUserprofilesProfileIdFloodlightActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdFloodlightActivitiesKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdFloodlightActivitiesKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', 'POST'] as const
}

export function usePostUserprofilesProfileIdFloodlightActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdFloodlightActivitiesKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdFloodlightActivitiesKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdFloodlightActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdFloodlightActivitiesKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdFloodlightActivitiesGeneratetagKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/floodlightActivities/generatetag',
    'POST',
  ] as const
}

export function usePostUserprofilesProfileIdFloodlightActivitiesGeneratetag<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdFloodlightActivitiesGeneratetagKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities.generatetag.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFloodlightActivitiesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities/:id', args] as const
}

export function useGetUserprofilesProfileIdFloodlightActivitiesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFloodlightActivitiesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdFloodlightActivitiesIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdFloodlightActivitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdFloodlightActivitiesIdKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivities[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFloodlightActivityGroupsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', args] as const
}

export function useGetUserprofilesProfileIdFloodlightActivityGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFloodlightActivityGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdFloodlightActivityGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', 'PUT'] as const
}

export function usePutUserprofilesProfileIdFloodlightActivityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdFloodlightActivityGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdFloodlightActivityGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', 'POST'] as const
}

export function usePostUserprofilesProfileIdFloodlightActivityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdFloodlightActivityGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdFloodlightActivityGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdFloodlightActivityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdFloodlightActivityGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFloodlightActivityGroupsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups/:id', args] as const
}

export function useGetUserprofilesProfileIdFloodlightActivityGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivityGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFloodlightActivityGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightActivityGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightActivityGroups[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFloodlightConfigurationsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations', args] as const
}

export function useGetUserprofilesProfileIdFloodlightConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightConfigurations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFloodlightConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightConfigurations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdFloodlightConfigurationsKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations', 'PUT'] as const
}

export function usePutUserprofilesProfileIdFloodlightConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdFloodlightConfigurationsKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightConfigurations.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdFloodlightConfigurationsKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdFloodlightConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdFloodlightConfigurationsKey()
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
            (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightConfigurations.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdFloodlightConfigurationsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations/:id', args] as const
}

export function useGetUserprofilesProfileIdFloodlightConfigurationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightConfigurationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightConfigurations[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdFloodlightConfigurationsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdFloodlightConfigurationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].floodlightConfigurations[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdLanguagesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/languages', args] as const
}

export function useGetUserprofilesProfileIdLanguages<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
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
        ? getGetUserprofilesProfileIdLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdLanguages<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
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
        ? getGetUserprofilesProfileIdLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdMetrosKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/metros', args] as const
}

export function useGetUserprofilesProfileIdMetros<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
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
        ? getGetUserprofilesProfileIdMetrosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].metros.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdMetros<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
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
        ? getGetUserprofilesProfileIdMetrosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].metros.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdMobileAppsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileApps', args] as const
}

export function useGetUserprofilesProfileIdMobileApps<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
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
        ? getGetUserprofilesProfileIdMobileAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].mobileApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdMobileApps<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
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
        ? getGetUserprofilesProfileIdMobileAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].mobileApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdMobileAppsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileApps/:id', args] as const
}

export function useGetUserprofilesProfileIdMobileAppsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdMobileAppsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].mobileApps[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdMobileAppsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdMobileAppsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].mobileApps[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdMobileCarriersKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileCarriers', args] as const
}

export function useGetUserprofilesProfileIdMobileCarriers<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>
            >
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
        ? getGetUserprofilesProfileIdMobileCarriersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].mobileCarriers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdMobileCarriers<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>
            >
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
        ? getGetUserprofilesProfileIdMobileCarriersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].mobileCarriers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdMobileCarriersIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileCarriers/:id', args] as const
}

export function useGetUserprofilesProfileIdMobileCarriersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdMobileCarriersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].mobileCarriers[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdMobileCarriersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdMobileCarriersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].mobileCarriers[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdOperatingSystemVersionsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystemVersions', args] as const
}

export function useGetUserprofilesProfileIdOperatingSystemVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].operatingSystemVersions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdOperatingSystemVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].operatingSystemVersions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdOperatingSystemVersionsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystemVersions/:id', args] as const
}

export function useGetUserprofilesProfileIdOperatingSystemVersionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].operatingSystemVersions[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdOperatingSystemVersionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].operatingSystemVersions[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdOperatingSystemsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystems', args] as const
}

export function useGetUserprofilesProfileIdOperatingSystems<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].operatingSystems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdOperatingSystems<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].operatingSystems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdOperatingSystemsDartIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystems/:dartId', args] as const
}

export function useGetUserprofilesProfileIdOperatingSystemsDartId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemsDartIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].operatingSystems[':dartId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdOperatingSystemsDartId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdOperatingSystemsDartIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].operatingSystems[':dartId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlacementGroupsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', args] as const
}

export function useGetUserprofilesProfileIdPlacementGroups<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlacementGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].placementGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlacementGroups<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlacementGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].placementGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdPlacementGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', 'PUT'] as const
}

export function usePutUserprofilesProfileIdPlacementGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdPlacementGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['placementGroups']['$put']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].placementGroups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdPlacementGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', 'POST'] as const
}

export function usePostUserprofilesProfileIdPlacementGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdPlacementGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['placementGroups']['$post']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].placementGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdPlacementGroupsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdPlacementGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdPlacementGroupsKey()
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
            (typeof client.userprofiles)[':profileId']['placementGroups']['$patch']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].placementGroups.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlacementGroupsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups/:id', args] as const
}

export function useGetUserprofilesProfileIdPlacementGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdPlacementGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placementGroups[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlacementGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdPlacementGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placementGroups[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlacementStrategiesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', args] as const
}

export function useGetUserprofilesProfileIdPlacementStrategies<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlacementStrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlacementStrategies<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlacementStrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdPlacementStrategiesKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', 'PUT'] as const
}

export function usePutUserprofilesProfileIdPlacementStrategies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdPlacementStrategiesKey()
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
            (typeof client.userprofiles)[':profileId']['placementStrategies']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdPlacementStrategiesKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', 'POST'] as const
}

export function usePostUserprofilesProfileIdPlacementStrategies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdPlacementStrategiesKey()
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
            (typeof client.userprofiles)[':profileId']['placementStrategies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdPlacementStrategiesKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdPlacementStrategies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdPlacementStrategiesKey()
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
            (typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlacementStrategiesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies/:id', args] as const
}

export function useGetUserprofilesProfileIdPlacementStrategiesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdPlacementStrategiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlacementStrategiesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdPlacementStrategiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdPlacementStrategiesIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdPlacementStrategiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdPlacementStrategiesIdKey()
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
            (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].placementStrategies[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlacementsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placements', args] as const
}

export function useGetUserprofilesProfileIdPlacements<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
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
        ? getGetUserprofilesProfileIdPlacementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].placements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlacements<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
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
        ? getGetUserprofilesProfileIdPlacementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].placements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdPlacementsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements', 'PUT'] as const
}

export function usePutUserprofilesProfileIdPlacements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdPlacementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].placements.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdPlacementsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements', 'POST'] as const
}

export function usePostUserprofilesProfileIdPlacements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdPlacementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].placements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdPlacementsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdPlacements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdPlacementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].placements.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdPlacementsGeneratetagsKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements/generatetags', 'POST'] as const
}

export function usePostUserprofilesProfileIdPlacementsGeneratetags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdPlacementsGeneratetagsKey()
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
            (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].placements.generatetags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlacementsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placements/:id', args] as const
}

export function useGetUserprofilesProfileIdPlacementsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlacementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placements[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlacementsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlacementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].placements[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlatformTypesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/platformTypes', args] as const
}

export function useGetUserprofilesProfileIdPlatformTypes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
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
        ? getGetUserprofilesProfileIdPlatformTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].platformTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlatformTypes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
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
        ? getGetUserprofilesProfileIdPlatformTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].platformTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPlatformTypesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/platformTypes/:id', args] as const
}

export function useGetUserprofilesProfileIdPlatformTypesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlatformTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].platformTypes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPlatformTypesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPlatformTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].platformTypes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPostalCodesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/postalCodes', args] as const
}

export function useGetUserprofilesProfileIdPostalCodes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
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
        ? getGetUserprofilesProfileIdPostalCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].postalCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPostalCodes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
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
        ? getGetUserprofilesProfileIdPostalCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].postalCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdPostalCodesCodeKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/postalCodes/:code', args] as const
}

export function useGetUserprofilesProfileIdPostalCodesCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPostalCodesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].postalCodes[':code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdPostalCodesCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
            >
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
        ? getGetUserprofilesProfileIdPostalCodesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].postalCodes[':code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects', args] as const
}

export function useGetUserprofilesProfileIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
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
        ? getGetUserprofilesProfileIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
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
        ? getGetUserprofilesProfileIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects/:id', args] as const
}

export function useGetUserprofilesProfileIdProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsProjectIdInventoryItemsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/projects/:projectId/inventoryItems',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdProjectsProjectIdInventoryItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdInventoryItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].inventoryItems.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsProjectIdInventoryItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdInventoryItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].inventoryItems.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsProjectIdInventoryItemsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/projects/:projectId/inventoryItems/:id',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdProjectsProjectIdInventoryItemsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdInventoryItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].inventoryItems[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsProjectIdInventoryItemsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdInventoryItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].inventoryItems[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/projects/:projectId/orderDocuments',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdProjectsProjectIdOrderDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orderDocuments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsProjectIdOrderDocuments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orderDocuments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/projects/:projectId/orderDocuments/:id',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orderDocuments[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orderDocuments[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsProjectIdOrdersKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects/:projectId/orders', args] as const
}

export function useGetUserprofilesProfileIdProjectsProjectIdOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsProjectIdOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdProjectsProjectIdOrdersIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects/:projectId/orders/:id', args] as const
}

export function useGetUserprofilesProfileIdProjectsProjectIdOrdersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orders[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdProjectsProjectIdOrdersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdProjectsProjectIdOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].projects[':projectId'].orders[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdRegionsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/regions', args] as const
}

export function useGetUserprofilesProfileIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
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
        ? getGetUserprofilesProfileIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
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
        ? getGetUserprofilesProfileIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdRemarketingListSharesKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingListShares', 'PUT'] as const
}

export function usePutUserprofilesProfileIdRemarketingListShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdRemarketingListSharesKey()
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
            (typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingListShares.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdRemarketingListSharesKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingListShares', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdRemarketingListShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdRemarketingListSharesKey()
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
            (typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingListShares.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdRemarketingListSharesRemarketingListIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
  >,
) {
  return [
    'userprofiles',
    '/userprofiles/:profileId/remarketingListShares/:remarketingListId',
    args,
  ] as const
}

export function useGetUserprofilesProfileIdRemarketingListSharesRemarketingListId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdRemarketingListSharesRemarketingListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingListShares[':remarketingListId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdRemarketingListSharesRemarketingListId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdRemarketingListSharesRemarketingListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingListShares[':remarketingListId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdRemarketingListsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', args] as const
}

export function useGetUserprofilesProfileIdRemarketingLists<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>
            >
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
        ? getGetUserprofilesProfileIdRemarketingListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].remarketingLists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdRemarketingLists<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>
            >
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
        ? getGetUserprofilesProfileIdRemarketingListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].remarketingLists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdRemarketingListsKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', 'PUT'] as const
}

export function usePutUserprofilesProfileIdRemarketingLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdRemarketingListsKey()
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
            (typeof client.userprofiles)[':profileId']['remarketingLists']['$put']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].remarketingLists.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdRemarketingListsKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', 'POST'] as const
}

export function usePostUserprofilesProfileIdRemarketingLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdRemarketingListsKey()
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
            (typeof client.userprofiles)[':profileId']['remarketingLists']['$post']
          >
        },
      ) =>
        parseResponse(client.userprofiles[':profileId'].remarketingLists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdRemarketingListsKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdRemarketingLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdRemarketingListsKey()
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
            (typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingLists.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdRemarketingListsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists/:id', args] as const
}

export function useGetUserprofilesProfileIdRemarketingListsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdRemarketingListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingLists[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdRemarketingListsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdRemarketingListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].remarketingLists[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdReportsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports', args] as const
}

export function useGetUserprofilesProfileIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
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
        ? getGetUserprofilesProfileIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
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
        ? getGetUserprofilesProfileIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdReportsKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports', 'POST'] as const
}

export function usePostUserprofilesProfileIdReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdReportsCompatiblefieldsQueryKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/reports/compatiblefields/query',
    'POST',
  ] as const
}

export function usePostUserprofilesProfileIdReportsCompatiblefieldsQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdReportsCompatiblefieldsQueryKey()
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
            (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].reports.compatiblefields.query.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdReportsReportIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', args] as const
}

export function useGetUserprofilesProfileIdReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
            >
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
        ? getGetUserprofilesProfileIdReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
            >
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
        ? getGetUserprofilesProfileIdReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdReportsReportIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', 'PUT'] as const
}

export function usePutUserprofilesProfileIdReportsReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdReportsReportIdKey()
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
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdReportsReportIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdReportsReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdReportsReportIdKey()
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
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdReportsReportIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdReportsReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdReportsReportIdKey()
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
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdReportsReportIdFilesKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId/files', args] as const
}

export function useGetUserprofilesProfileIdReportsReportIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdReportsReportIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdReportsReportIdFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdReportsReportIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdReportsReportIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId/files/:fileId', args] as const
}

export function useGetUserprofilesProfileIdReportsReportIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdReportsReportIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].files[':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdReportsReportIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdReportsReportIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].files[':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdReportsReportIdRunKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId/run', 'POST'] as const
}

export function usePostUserprofilesProfileIdReportsReportIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdReportsReportIdRunKey()
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
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].reports[':reportId'].run.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdSitesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sites', args] as const
}

export function useGetUserprofilesProfileIdSites<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
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
        ? getGetUserprofilesProfileIdSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdSites<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
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
        ? getGetUserprofilesProfileIdSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdSitesKey() {
  return ['userprofiles', '/userprofiles/:profileId/sites', 'PUT'] as const
}

export function usePutUserprofilesProfileIdSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$put']> },
      ) => parseResponse(client.userprofiles[':profileId'].sites.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdSitesKey() {
  return ['userprofiles', '/userprofiles/:profileId/sites', 'POST'] as const
}

export function usePostUserprofilesProfileIdSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$post']> },
      ) => parseResponse(client.userprofiles[':profileId'].sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdSitesKey() {
  return ['userprofiles', '/userprofiles/:profileId/sites', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$patch']> },
      ) => parseResponse(client.userprofiles[':profileId'].sites.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdSitesIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sites/:id', args] as const
}

export function useGetUserprofilesProfileIdSitesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
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
        ? getGetUserprofilesProfileIdSitesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].sites[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdSitesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
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
        ? getGetUserprofilesProfileIdSitesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].sites[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdSizesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sizes', args] as const
}

export function useGetUserprofilesProfileIdSizes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
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
        ? getGetUserprofilesProfileIdSizesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].sizes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdSizes<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
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
        ? getGetUserprofilesProfileIdSizesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userprofiles[':profileId'].sizes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdSizesKey() {
  return ['userprofiles', '/userprofiles/:profileId/sizes', 'POST'] as const
}

export function usePostUserprofilesProfileIdSizes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdSizesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$post']> },
      ) => parseResponse(client.userprofiles[':profileId'].sizes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdSizesIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sizes/:id', args] as const
}

export function useGetUserprofilesProfileIdSizesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
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
        ? getGetUserprofilesProfileIdSizesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].sizes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdSizesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
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
        ? getGetUserprofilesProfileIdSizesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].sizes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdSubaccountsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', args] as const
}

export function useGetUserprofilesProfileIdSubaccounts<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
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
        ? getGetUserprofilesProfileIdSubaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].subaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdSubaccounts<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
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
        ? getGetUserprofilesProfileIdSubaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].subaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdSubaccountsKey() {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', 'PUT'] as const
}

export function usePutUserprofilesProfileIdSubaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdSubaccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].subaccounts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdSubaccountsKey() {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', 'POST'] as const
}

export function usePostUserprofilesProfileIdSubaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdSubaccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].subaccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdSubaccountsKey() {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdSubaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdSubaccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].subaccounts.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdSubaccountsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts/:id', args] as const
}

export function useGetUserprofilesProfileIdSubaccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdSubaccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].subaccounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdSubaccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdSubaccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].subaccounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdTargetableRemarketingListsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetableRemarketingLists', args] as const
}

export function useGetUserprofilesProfileIdTargetableRemarketingLists<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdTargetableRemarketingListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetableRemarketingLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdTargetableRemarketingLists<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdTargetableRemarketingListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetableRemarketingLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdTargetableRemarketingListsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetableRemarketingLists/:id', args] as const
}

export function useGetUserprofilesProfileIdTargetableRemarketingListsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdTargetableRemarketingListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetableRemarketingLists[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdTargetableRemarketingListsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdTargetableRemarketingListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetableRemarketingLists[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdTargetingTemplatesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', args] as const
}

export function useGetUserprofilesProfileIdTargetingTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
            >
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
        ? getGetUserprofilesProfileIdTargetingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdTargetingTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
            >
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
        ? getGetUserprofilesProfileIdTargetingTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdTargetingTemplatesKey() {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', 'PUT'] as const
}

export function usePutUserprofilesProfileIdTargetingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdTargetingTemplatesKey()
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
            (typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdTargetingTemplatesKey() {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', 'POST'] as const
}

export function usePostUserprofilesProfileIdTargetingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdTargetingTemplatesKey()
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
            (typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdTargetingTemplatesKey() {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdTargetingTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdTargetingTemplatesKey()
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
            (typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdTargetingTemplatesIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates/:id', args] as const
}

export function useGetUserprofilesProfileIdTargetingTemplatesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdTargetingTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdTargetingTemplatesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdTargetingTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].targetingTemplates[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdUserRolePermissionGroupsKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissionGroups', args] as const
}

export function useGetUserprofilesProfileIdUserRolePermissionGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissionGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdUserRolePermissionGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissionGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdUserRolePermissionGroupsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissionGroups/:id', args] as const
}

export function useGetUserprofilesProfileIdUserRolePermissionGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissionGroups[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdUserRolePermissionGroupsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissionGroups[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdUserRolePermissionsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissions', args] as const
}

export function useGetUserprofilesProfileIdUserRolePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdUserRolePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdUserRolePermissionsIdKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissions/:id', args] as const
}

export function useGetUserprofilesProfileIdUserRolePermissionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissions[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdUserRolePermissionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
              >
            >
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
        ? getGetUserprofilesProfileIdUserRolePermissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].userRolePermissions[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdUserRolesKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', args] as const
}

export function useGetUserprofilesProfileIdUserRoles<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
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
        ? getGetUserprofilesProfileIdUserRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].userRoles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdUserRoles<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
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
        ? getGetUserprofilesProfileIdUserRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].userRoles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserprofilesProfileIdUserRolesKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', 'PUT'] as const
}

export function usePutUserprofilesProfileIdUserRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserprofilesProfileIdUserRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].userRoles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserprofilesProfileIdUserRolesKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', 'POST'] as const
}

export function usePostUserprofilesProfileIdUserRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserprofilesProfileIdUserRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].userRoles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserprofilesProfileIdUserRolesKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', 'PATCH'] as const
}

export function usePatchUserprofilesProfileIdUserRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserprofilesProfileIdUserRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>
        },
      ) => parseResponse(client.userprofiles[':profileId'].userRoles.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdUserRolesIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRoles/:id', args] as const
}

export function useGetUserprofilesProfileIdUserRolesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdUserRolesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].userRoles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdUserRolesId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdUserRolesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].userRoles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserprofilesProfileIdUserRolesIdKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles/:id', 'DELETE'] as const
}

export function useDeleteUserprofilesProfileIdUserRolesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserprofilesProfileIdUserRolesIdKey()
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
            (typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.userprofiles[':profileId'].userRoles[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdVideoFormatsKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/videoFormats', args] as const
}

export function useGetUserprofilesProfileIdVideoFormats<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
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
        ? getGetUserprofilesProfileIdVideoFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].videoFormats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdVideoFormats<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
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
        ? getGetUserprofilesProfileIdVideoFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.userprofiles[':profileId'].videoFormats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserprofilesProfileIdVideoFormatsIdKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/videoFormats/:id', args] as const
}

export function useGetUserprofilesProfileIdVideoFormatsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdVideoFormatsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].videoFormats[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserprofilesProfileIdVideoFormatsId<TError = unknown>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
            >
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
        ? getGetUserprofilesProfileIdVideoFormatsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.userprofiles[':profileId'].videoFormats[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
