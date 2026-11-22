import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReportsKey() {
  return ['reports'] as const
}

export function getUserprofilesKey() {
  return ['userprofiles'] as const
}

export function getReportsReportIdFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
) {
  return ['reports', '/reports/:reportId/files/:fileId', args] as const
}

export function getReportsReportIdFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdFilesFileIdQueryKey>
  >({
    queryKey: getReportsReportIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':reportId'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsReportIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportsReportIdFilesFileIdQueryKey>
        >
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
      ...getReportsReportIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesQueryKey(args: InferRequestType<typeof client.userprofiles.$get>) {
  return ['userprofiles', '/userprofiles', args] as const
}

export function getUserprofilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.userprofiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserprofilesQueryKey>
  >({
    queryKey: getUserprofilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserprofiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.userprofiles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userprofiles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserprofilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserprofilesProfileIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId', args] as const
}

export function getUserprofilesProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdQueryKey>
        >
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
      ...getUserprofilesProfileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdQueryKey(
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

export function getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountActiveAdSummaries[':summaryAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdQueryKey
          >
        >
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
      ...getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountPermissionGroupsQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissionGroups', args] as const
}

export function getUserprofilesProfileIdAccountPermissionGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountPermissionGroupsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountPermissionGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountPermissionGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountPermissionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountPermissionGroupsQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountPermissionGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountPermissionGroupsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissionGroups/:id', args] as const
}

export function getUserprofilesProfileIdAccountPermissionGroupsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountPermissionGroupsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountPermissionGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountPermissionGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountPermissionGroupsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountPermissionGroupsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountPermissionGroupsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountPermissionsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissions', args] as const
}

export function getUserprofilesProfileIdAccountPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountPermissionsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountPermissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['accountPermissions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountPermissionsQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountPermissionsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountPermissions/:id', args] as const
}

export function getUserprofilesProfileIdAccountPermissionsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountPermissionsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountPermissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountPermissions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountPermissionsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountPermissionsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountPermissionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountUserProfilesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', args] as const
}

export function getUserprofilesProfileIdAccountUserProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountUserProfilesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountUserProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountUserProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountUserProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountUserProfilesQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountUserProfilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdAccountUserProfilesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', 'PUT'] as const
}

export function getPutUserprofilesProfileIdAccountUserProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdAccountUserProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].accountUserProfiles.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdAccountUserProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdAccountUserProfilesMutationOptions<
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

export function getPostUserprofilesProfileIdAccountUserProfilesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', 'POST'] as const
}

export function getPostUserprofilesProfileIdAccountUserProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdAccountUserProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].accountUserProfiles.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdAccountUserProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdAccountUserProfilesMutationOptions<
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

export function getPatchUserprofilesProfileIdAccountUserProfilesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdAccountUserProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdAccountUserProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].accountUserProfiles.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdAccountUserProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdAccountUserProfilesMutationOptions<
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

export function getUserprofilesProfileIdAccountUserProfilesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/accountUserProfiles/:id', args] as const
}

export function getUserprofilesProfileIdAccountUserProfilesIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountUserProfilesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountUserProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accountUserProfiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountUserProfilesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountUserProfilesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountUserProfilesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAccountsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accounts', args] as const
}

export function getUserprofilesProfileIdAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountsQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdAccountsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/accounts', 'PUT'] as const
}

export function getPutUserprofilesProfileIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].accounts.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdAccountsMutationOptions<
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

export function getPatchUserprofilesProfileIdAccountsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/accounts', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].accounts.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdAccountsMutationOptions<
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

export function getUserprofilesProfileIdAccountsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/accounts/:id', args] as const
}

export function getUserprofilesProfileIdAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAccountsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAccountsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAccountsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAdsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/ads', args] as const
}

export function getUserprofilesProfileIdAdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].ads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdsQueryKey>
        >
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
      ...getUserprofilesProfileIdAdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdAdsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/ads', 'PUT'] as const
}

export function getPutUserprofilesProfileIdAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdAdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].ads.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdAdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdAdsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/ads', 'POST'] as const
}

export function getPostUserprofilesProfileIdAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdAdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].ads.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdAds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdAdsMutationOptions<
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

export function getPatchUserprofilesProfileIdAdsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/ads', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdAdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].ads.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdAds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdAdsMutationOptions<
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

export function getUserprofilesProfileIdAdsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/ads/:id', args] as const
}

export function getUserprofilesProfileIdAdsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].ads[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAdsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAdvertiserGroupsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', args] as const
}

export function getUserprofilesProfileIdAdvertiserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdvertiserGroupsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdvertiserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdvertiserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdvertiserGroupsQueryKey>
        >
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
      ...getUserprofilesProfileIdAdvertiserGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdAdvertiserGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', 'PUT'] as const
}

export function getPutUserprofilesProfileIdAdvertiserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdAdvertiserGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].advertiserGroups.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdAdvertiserGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdAdvertiserGroupsMutationOptions<
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

export function getPostUserprofilesProfileIdAdvertiserGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', 'POST'] as const
}

export function getPostUserprofilesProfileIdAdvertiserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdAdvertiserGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].advertiserGroups.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdAdvertiserGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdAdvertiserGroupsMutationOptions<
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

export function getPatchUserprofilesProfileIdAdvertiserGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdAdvertiserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdAdvertiserGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].advertiserGroups.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdAdvertiserGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdAdvertiserGroupsMutationOptions<
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

export function getUserprofilesProfileIdAdvertiserGroupsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups/:id', args] as const
}

export function getUserprofilesProfileIdAdvertiserGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdvertiserGroupsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdvertiserGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdvertiserGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdvertiserGroupsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAdvertiserGroupsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdAdvertiserGroupsIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserGroups/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdAdvertiserGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdAdvertiserGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserGroups[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdAdvertiserGroupsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdAdvertiserGroupsIdMutationOptions<
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

export function getUserprofilesProfileIdAdvertiserLandingPagesQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', args] as const
}

export function getUserprofilesProfileIdAdvertiserLandingPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdvertiserLandingPagesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdvertiserLandingPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserLandingPages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdvertiserLandingPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdvertiserLandingPagesQueryKey>
        >
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
      ...getUserprofilesProfileIdAdvertiserLandingPagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdAdvertiserLandingPagesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', 'PUT'] as const
}

export function getPutUserprofilesProfileIdAdvertiserLandingPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdAdvertiserLandingPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserLandingPages.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdAdvertiserLandingPages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdAdvertiserLandingPagesMutationOptions<
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

export function getPostUserprofilesProfileIdAdvertiserLandingPagesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', 'POST'] as const
}

export function getPostUserprofilesProfileIdAdvertiserLandingPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdAdvertiserLandingPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserLandingPages.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdAdvertiserLandingPages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdAdvertiserLandingPagesMutationOptions<
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

export function getPatchUserprofilesProfileIdAdvertiserLandingPagesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdAdvertiserLandingPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdAdvertiserLandingPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserLandingPages.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdAdvertiserLandingPages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdAdvertiserLandingPagesMutationOptions<
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

export function getUserprofilesProfileIdAdvertiserLandingPagesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertiserLandingPages/:id', args] as const
}

export function getUserprofilesProfileIdAdvertiserLandingPagesIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdvertiserLandingPagesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdvertiserLandingPagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].advertiserLandingPages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdvertiserLandingPagesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdvertiserLandingPagesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAdvertiserLandingPagesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdAdvertisersQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', args] as const
}

export function getUserprofilesProfileIdAdvertisersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdvertisersQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdvertisersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].advertisers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdvertisers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdvertisersQueryKey>
        >
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
      ...getUserprofilesProfileIdAdvertisersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdAdvertisersMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', 'PUT'] as const
}

export function getPutUserprofilesProfileIdAdvertisersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdAdvertisersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].advertisers.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdAdvertisers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdAdvertisersMutationOptions<
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

export function getPostUserprofilesProfileIdAdvertisersMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', 'POST'] as const
}

export function getPostUserprofilesProfileIdAdvertisersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdAdvertisersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].advertisers.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdAdvertisers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdAdvertisersMutationOptions<
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

export function getPatchUserprofilesProfileIdAdvertisersMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/advertisers', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdAdvertisersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdAdvertisersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].advertisers.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdAdvertisers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdAdvertisersMutationOptions<
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

export function getUserprofilesProfileIdAdvertisersIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/advertisers/:id', args] as const
}

export function getUserprofilesProfileIdAdvertisersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdAdvertisersIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdAdvertisersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].advertisers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdAdvertisersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdAdvertisersIdQueryKey>
        >
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
      ...getUserprofilesProfileIdAdvertisersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdBrowsersQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/browsers', args] as const
}

export function getUserprofilesProfileIdBrowsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdBrowsersQueryKey>
  >({
    queryKey: getUserprofilesProfileIdBrowsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].browsers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdBrowsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdBrowsersQueryKey>
        >
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
      ...getUserprofilesProfileIdBrowsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdCampaignsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', args] as const
}

export function getUserprofilesProfileIdCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCampaignsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].campaigns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCampaignsQueryKey>
        >
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
      ...getUserprofilesProfileIdCampaignsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdCampaignsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', 'PUT'] as const
}

export function getPutUserprofilesProfileIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].campaigns.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdCampaignsMutationOptions<
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

export function getPostUserprofilesProfileIdCampaignsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', 'POST'] as const
}

export function getPostUserprofilesProfileIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].campaigns.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdCampaignsMutationOptions<
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

export function getPatchUserprofilesProfileIdCampaignsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/campaigns', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].campaigns.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdCampaignsMutationOptions<
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

export function getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsQueryKey(
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

export function getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsQueryKey
    >
  >({
    queryKey: getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].campaigns[
          ':campaignId'
        ].campaignCreativeAssociations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsQueryKey
          >
        >
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
      ...getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/campaigns/:campaignId/campaignCreativeAssociations',
    'POST',
  ] as const
}

export function getPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].campaigns[
          ':campaignId'
        ].campaignCreativeAssociations.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
          >,
          TOnMutateResult
        >
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
      getPostUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsMutationOptions<
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

export function getUserprofilesProfileIdCampaignsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/campaigns/:id', args] as const
}

export function getUserprofilesProfileIdCampaignsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCampaignsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCampaignsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].campaigns[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCampaignsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCampaignsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdCampaignsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdChangeLogsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/changeLogs', args] as const
}

export function getUserprofilesProfileIdChangeLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdChangeLogsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdChangeLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].changeLogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdChangeLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdChangeLogsQueryKey>
        >
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
      ...getUserprofilesProfileIdChangeLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdChangeLogsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/changeLogs/:id', args] as const
}

export function getUserprofilesProfileIdChangeLogsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdChangeLogsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdChangeLogsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].changeLogs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdChangeLogsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdChangeLogsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdChangeLogsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdCitiesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/cities', args] as const
}

export function getUserprofilesProfileIdCitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCitiesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].cities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['cities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCitiesQueryKey>
        >
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
      ...getUserprofilesProfileIdCitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdConnectionTypesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/connectionTypes', args] as const
}

export function getUserprofilesProfileIdConnectionTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdConnectionTypesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdConnectionTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].connectionTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdConnectionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdConnectionTypesQueryKey>
        >
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
      ...getUserprofilesProfileIdConnectionTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdConnectionTypesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/connectionTypes/:id', args] as const
}

export function getUserprofilesProfileIdConnectionTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdConnectionTypesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdConnectionTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].connectionTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdConnectionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdConnectionTypesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdConnectionTypesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdContentCategoriesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', args] as const
}

export function getUserprofilesProfileIdContentCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdContentCategoriesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdContentCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].contentCategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdContentCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['contentCategories']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdContentCategoriesQueryKey>
        >
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
      ...getUserprofilesProfileIdContentCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdContentCategoriesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', 'PUT'] as const
}

export function getPutUserprofilesProfileIdContentCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdContentCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['contentCategories']['$put']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].contentCategories.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdContentCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['contentCategories']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdContentCategoriesMutationOptions<
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

export function getPostUserprofilesProfileIdContentCategoriesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', 'POST'] as const
}

export function getPostUserprofilesProfileIdContentCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdContentCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['contentCategories']['$post']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].contentCategories.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdContentCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['contentCategories']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['contentCategories']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdContentCategoriesMutationOptions<
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

export function getPatchUserprofilesProfileIdContentCategoriesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdContentCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdContentCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['contentCategories']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].contentCategories.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdContentCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['contentCategories']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['contentCategories']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdContentCategoriesMutationOptions<
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

export function getUserprofilesProfileIdContentCategoriesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories/:id', args] as const
}

export function getUserprofilesProfileIdContentCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdContentCategoriesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdContentCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].contentCategories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdContentCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdContentCategoriesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdContentCategoriesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdContentCategoriesIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/contentCategories/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdContentCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdContentCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].contentCategories[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdContentCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdContentCategoriesIdMutationOptions<
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

export function getPostUserprofilesProfileIdConversionsBatchinsertMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/conversions/batchinsert', 'POST'] as const
}

export function getPostUserprofilesProfileIdConversionsBatchinsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdConversionsBatchinsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].conversions.batchinsert.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdConversionsBatchinsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdConversionsBatchinsertMutationOptions<
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

export function getPostUserprofilesProfileIdConversionsBatchupdateMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/conversions/batchupdate', 'POST'] as const
}

export function getPostUserprofilesProfileIdConversionsBatchupdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdConversionsBatchupdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].conversions.batchupdate.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdConversionsBatchupdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdConversionsBatchupdateMutationOptions<
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

export function getUserprofilesProfileIdCountriesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/countries', args] as const
}

export function getUserprofilesProfileIdCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCountriesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].countries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['countries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCountriesQueryKey>
        >
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
      ...getUserprofilesProfileIdCountriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdCountriesDartIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/countries/:dartId', args] as const
}

export function getUserprofilesProfileIdCountriesDartIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCountriesDartIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCountriesDartIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].countries[':dartId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCountriesDartId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCountriesDartIdQueryKey>
        >
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
      ...getUserprofilesProfileIdCountriesDartIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeAssets/:advertiserId/creativeAssets',
    'POST',
  ] as const
}

export function getPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeAssets[':advertiserId'].creativeAssets.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
          >,
          TOnMutateResult
        >
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
      getPostUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsMutationOptions<
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

export function getUserprofilesProfileIdCreativeFieldsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', args] as const
}

export function getUserprofilesProfileIdCreativeFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCreativeFieldsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCreativeFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativeFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCreativeFieldsQueryKey>
        >
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
      ...getUserprofilesProfileIdCreativeFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdCreativeFieldsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', 'PUT'] as const
}

export function getPutUserprofilesProfileIdCreativeFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdCreativeFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creativeFields.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdCreativeFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdCreativeFieldsMutationOptions<
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

export function getPostUserprofilesProfileIdCreativeFieldsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', 'POST'] as const
}

export function getPostUserprofilesProfileIdCreativeFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdCreativeFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creativeFields.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdCreativeFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdCreativeFieldsMutationOptions<
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

export function getPatchUserprofilesProfileIdCreativeFieldsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdCreativeFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdCreativeFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeFields']['$patch']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creativeFields.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdCreativeFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdCreativeFieldsMutationOptions<
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

export function getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesQueryKey(
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

export function getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesQueryKey
    >
  >({
    queryKey:
      getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[
          ':creativeFieldId'
        ].creativeFieldValues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesQueryKey
          >
        >
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
      ...getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    'PUT',
  ] as const
}

export function getPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[
          ':creativeFieldId'
        ].creativeFieldValues.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
          >,
          TOnMutateResult
        >
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
      getPutUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationOptions<
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

export function getPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    'POST',
  ] as const
}

export function getPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[
          ':creativeFieldId'
        ].creativeFieldValues.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
          >,
          TOnMutateResult
        >
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
      getPostUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationOptions<
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

export function getPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues',
    'PATCH',
  ] as const
}

export function getPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[
          ':creativeFieldId'
        ].creativeFieldValues.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
          >,
          TOnMutateResult
        >
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
      getPatchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesMutationOptions<
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

export function getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdQueryKey(
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

export function getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdQueryKey
    >
  >({
    queryKey:
      getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
          ':id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdQueryKey
          >
        >
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
      ...getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues/:id',
    'DELETE',
  ] as const
}

export function getDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
          ':id'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdMutationOptions<
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

export function getUserprofilesProfileIdCreativeFieldsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields/:id', args] as const
}

export function getUserprofilesProfileIdCreativeFieldsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCreativeFieldsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCreativeFieldsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativeFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCreativeFieldsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdCreativeFieldsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdCreativeFieldsIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeFields/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdCreativeFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdCreativeFieldsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeFields[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdCreativeFieldsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdCreativeFieldsIdMutationOptions<
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

export function getUserprofilesProfileIdCreativeGroupsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', args] as const
}

export function getUserprofilesProfileIdCreativeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCreativeGroupsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCreativeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCreativeGroupsQueryKey>
        >
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
      ...getUserprofilesProfileIdCreativeGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdCreativeGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', 'PUT'] as const
}

export function getPutUserprofilesProfileIdCreativeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdCreativeGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creativeGroups.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdCreativeGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdCreativeGroupsMutationOptions<
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

export function getPostUserprofilesProfileIdCreativeGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', 'POST'] as const
}

export function getPostUserprofilesProfileIdCreativeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdCreativeGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creativeGroups.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdCreativeGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdCreativeGroupsMutationOptions<
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

export function getPatchUserprofilesProfileIdCreativeGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdCreativeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdCreativeGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creativeGroups.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdCreativeGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdCreativeGroupsMutationOptions<
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

export function getUserprofilesProfileIdCreativeGroupsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/creativeGroups/:id', args] as const
}

export function getUserprofilesProfileIdCreativeGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCreativeGroupsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCreativeGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creativeGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativeGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCreativeGroupsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdCreativeGroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdCreativesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creatives', args] as const
}

export function getUserprofilesProfileIdCreativesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCreativesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCreativesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creatives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCreativesQueryKey>
        >
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
      ...getUserprofilesProfileIdCreativesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdCreativesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creatives', 'PUT'] as const
}

export function getPutUserprofilesProfileIdCreativesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdCreativesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creatives.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdCreatives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdCreativesMutationOptions<
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

export function getPostUserprofilesProfileIdCreativesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creatives', 'POST'] as const
}

export function getPostUserprofilesProfileIdCreativesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdCreativesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creatives.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdCreatives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdCreativesMutationOptions<
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

export function getPatchUserprofilesProfileIdCreativesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/creatives', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdCreativesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdCreativesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].creatives.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdCreatives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdCreativesMutationOptions<
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

export function getUserprofilesProfileIdCreativesIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/creatives/:id', args] as const
}

export function getUserprofilesProfileIdCreativesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdCreativesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdCreativesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].creatives[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdCreativesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdCreativesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdCreativesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdCustomEventsBatchinsertMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/customEvents/batchinsert', 'POST'] as const
}

export function getPostUserprofilesProfileIdCustomEventsBatchinsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdCustomEventsBatchinsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].customEvents.batchinsert.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdCustomEventsBatchinsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdCustomEventsBatchinsertMutationOptions<
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

export function getPostUserprofilesProfileIdDimensionvaluesQueryMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/dimensionvalues/query', 'POST'] as const
}

export function getPostUserprofilesProfileIdDimensionvaluesQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdDimensionvaluesQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].dimensionvalues.query.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdDimensionvaluesQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdDimensionvaluesQueryMutationOptions<
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

export function getUserprofilesProfileIdDirectorySitesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/directorySites', args] as const
}

export function getUserprofilesProfileIdDirectorySitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdDirectorySitesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdDirectorySitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].directorySites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdDirectorySites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdDirectorySitesQueryKey>
        >
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
      ...getUserprofilesProfileIdDirectorySitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdDirectorySitesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/directorySites', 'POST'] as const
}

export function getPostUserprofilesProfileIdDirectorySitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdDirectorySitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].directorySites.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdDirectorySites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdDirectorySitesMutationOptions<
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

export function getUserprofilesProfileIdDirectorySitesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/directorySites/:id', args] as const
}

export function getUserprofilesProfileIdDirectorySitesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdDirectorySitesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdDirectorySitesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].directorySites[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdDirectorySitesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdDirectorySitesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdDirectorySitesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdDynamicTargetingKeysQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/dynamicTargetingKeys', args] as const
}

export function getUserprofilesProfileIdDynamicTargetingKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdDynamicTargetingKeysQueryKey>
  >({
    queryKey: getUserprofilesProfileIdDynamicTargetingKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].dynamicTargetingKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdDynamicTargetingKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdDynamicTargetingKeysQueryKey>
        >
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
      ...getUserprofilesProfileIdDynamicTargetingKeysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdDynamicTargetingKeysMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/dynamicTargetingKeys', 'POST'] as const
}

export function getPostUserprofilesProfileIdDynamicTargetingKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdDynamicTargetingKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].dynamicTargetingKeys.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdDynamicTargetingKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdDynamicTargetingKeysMutationOptions<
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

export function getDeleteUserprofilesProfileIdDynamicTargetingKeysObjectIdMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/dynamicTargetingKeys/:objectId',
    'DELETE',
  ] as const
}

export function getDeleteUserprofilesProfileIdDynamicTargetingKeysObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdDynamicTargetingKeysObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].dynamicTargetingKeys[':objectId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdDynamicTargetingKeysObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteUserprofilesProfileIdDynamicTargetingKeysObjectIdMutationOptions<
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

export function getUserprofilesProfileIdEventTagsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', args] as const
}

export function getUserprofilesProfileIdEventTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdEventTagsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdEventTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].eventTags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdEventTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdEventTagsQueryKey>
        >
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
      ...getUserprofilesProfileIdEventTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdEventTagsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', 'PUT'] as const
}

export function getPutUserprofilesProfileIdEventTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdEventTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].eventTags.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdEventTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdEventTagsMutationOptions<
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

export function getPostUserprofilesProfileIdEventTagsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', 'POST'] as const
}

export function getPostUserprofilesProfileIdEventTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdEventTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].eventTags.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdEventTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdEventTagsMutationOptions<
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

export function getPatchUserprofilesProfileIdEventTagsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdEventTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdEventTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].eventTags.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdEventTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdEventTagsMutationOptions<
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

export function getUserprofilesProfileIdEventTagsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/eventTags/:id', args] as const
}

export function getUserprofilesProfileIdEventTagsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdEventTagsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdEventTagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].eventTags[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdEventTagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdEventTagsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdEventTagsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdEventTagsIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/eventTags/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdEventTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdEventTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].eventTags[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdEventTagsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdEventTagsIdMutationOptions<
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

export function getUserprofilesProfileIdFilesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/files', args] as const
}

export function getUserprofilesProfileIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFilesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFilesQueryKey>
        >
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
      ...getUserprofilesProfileIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdFloodlightActivitiesQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', args] as const
}

export function getUserprofilesProfileIdFloodlightActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFloodlightActivitiesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFloodlightActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFloodlightActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFloodlightActivitiesQueryKey>
        >
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
      ...getUserprofilesProfileIdFloodlightActivitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdFloodlightActivitiesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', 'PUT'] as const
}

export function getPutUserprofilesProfileIdFloodlightActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdFloodlightActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdFloodlightActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdFloodlightActivitiesMutationOptions<
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

export function getPostUserprofilesProfileIdFloodlightActivitiesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', 'POST'] as const
}

export function getPostUserprofilesProfileIdFloodlightActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdFloodlightActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdFloodlightActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdFloodlightActivitiesMutationOptions<
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

export function getPatchUserprofilesProfileIdFloodlightActivitiesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdFloodlightActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdFloodlightActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdFloodlightActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdFloodlightActivitiesMutationOptions<
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

export function getPostUserprofilesProfileIdFloodlightActivitiesGeneratetagMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/floodlightActivities/generatetag',
    'POST',
  ] as const
}

export function getPostUserprofilesProfileIdFloodlightActivitiesGeneratetagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdFloodlightActivitiesGeneratetagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities.generatetag.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdFloodlightActivitiesGeneratetag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
          >,
          TOnMutateResult
        >
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
      getPostUserprofilesProfileIdFloodlightActivitiesGeneratetagMutationOptions<
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

export function getUserprofilesProfileIdFloodlightActivitiesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities/:id', args] as const
}

export function getUserprofilesProfileIdFloodlightActivitiesIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFloodlightActivitiesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFloodlightActivitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFloodlightActivitiesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFloodlightActivitiesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdFloodlightActivitiesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdFloodlightActivitiesIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivities/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdFloodlightActivitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdFloodlightActivitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivities[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdFloodlightActivitiesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdFloodlightActivitiesIdMutationOptions<
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

export function getUserprofilesProfileIdFloodlightActivityGroupsQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', args] as const
}

export function getUserprofilesProfileIdFloodlightActivityGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFloodlightActivityGroupsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFloodlightActivityGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivityGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFloodlightActivityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFloodlightActivityGroupsQueryKey>
        >
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
      ...getUserprofilesProfileIdFloodlightActivityGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdFloodlightActivityGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', 'PUT'] as const
}

export function getPutUserprofilesProfileIdFloodlightActivityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdFloodlightActivityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivityGroups.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdFloodlightActivityGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdFloodlightActivityGroupsMutationOptions<
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

export function getPostUserprofilesProfileIdFloodlightActivityGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', 'POST'] as const
}

export function getPostUserprofilesProfileIdFloodlightActivityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdFloodlightActivityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivityGroups.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdFloodlightActivityGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdFloodlightActivityGroupsMutationOptions<
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

export function getPatchUserprofilesProfileIdFloodlightActivityGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdFloodlightActivityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdFloodlightActivityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivityGroups.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdFloodlightActivityGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdFloodlightActivityGroupsMutationOptions<
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

export function getUserprofilesProfileIdFloodlightActivityGroupsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightActivityGroups/:id', args] as const
}

export function getUserprofilesProfileIdFloodlightActivityGroupsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFloodlightActivityGroupsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFloodlightActivityGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightActivityGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFloodlightActivityGroupsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFloodlightActivityGroupsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdFloodlightActivityGroupsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdFloodlightConfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations', args] as const
}

export function getUserprofilesProfileIdFloodlightConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFloodlightConfigurationsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFloodlightConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightConfigurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFloodlightConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFloodlightConfigurationsQueryKey>
        >
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
      ...getUserprofilesProfileIdFloodlightConfigurationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdFloodlightConfigurationsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations', 'PUT'] as const
}

export function getPutUserprofilesProfileIdFloodlightConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdFloodlightConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightConfigurations.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdFloodlightConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdFloodlightConfigurationsMutationOptions<
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

export function getPatchUserprofilesProfileIdFloodlightConfigurationsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdFloodlightConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdFloodlightConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightConfigurations.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdFloodlightConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdFloodlightConfigurationsMutationOptions<
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

export function getUserprofilesProfileIdFloodlightConfigurationsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/floodlightConfigurations/:id', args] as const
}

export function getUserprofilesProfileIdFloodlightConfigurationsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdFloodlightConfigurationsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdFloodlightConfigurationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].floodlightConfigurations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdFloodlightConfigurationsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdFloodlightConfigurationsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdFloodlightConfigurationsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdLanguagesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/languages', args] as const
}

export function getUserprofilesProfileIdLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdLanguagesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].languages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['languages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdLanguagesQueryKey>
        >
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
      ...getUserprofilesProfileIdLanguagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdMetrosQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/metros', args] as const
}

export function getUserprofilesProfileIdMetrosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdMetrosQueryKey>
  >({
    queryKey: getUserprofilesProfileIdMetrosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].metros.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdMetros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['metros']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdMetrosQueryKey>
        >
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
      ...getUserprofilesProfileIdMetrosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdMobileAppsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileApps', args] as const
}

export function getUserprofilesProfileIdMobileAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdMobileAppsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdMobileAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].mobileApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdMobileApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdMobileAppsQueryKey>
        >
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
      ...getUserprofilesProfileIdMobileAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdMobileAppsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileApps/:id', args] as const
}

export function getUserprofilesProfileIdMobileAppsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdMobileAppsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdMobileAppsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].mobileApps[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdMobileAppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdMobileAppsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdMobileAppsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdMobileCarriersQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileCarriers', args] as const
}

export function getUserprofilesProfileIdMobileCarriersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdMobileCarriersQueryKey>
  >({
    queryKey: getUserprofilesProfileIdMobileCarriersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].mobileCarriers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdMobileCarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdMobileCarriersQueryKey>
        >
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
      ...getUserprofilesProfileIdMobileCarriersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdMobileCarriersIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/mobileCarriers/:id', args] as const
}

export function getUserprofilesProfileIdMobileCarriersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdMobileCarriersIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdMobileCarriersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].mobileCarriers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdMobileCarriersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdMobileCarriersIdQueryKey>
        >
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
      ...getUserprofilesProfileIdMobileCarriersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdOperatingSystemVersionsQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystemVersions', args] as const
}

export function getUserprofilesProfileIdOperatingSystemVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdOperatingSystemVersionsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdOperatingSystemVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].operatingSystemVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdOperatingSystemVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdOperatingSystemVersionsQueryKey>
        >
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
      ...getUserprofilesProfileIdOperatingSystemVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdOperatingSystemVersionsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystemVersions/:id', args] as const
}

export function getUserprofilesProfileIdOperatingSystemVersionsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdOperatingSystemVersionsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdOperatingSystemVersionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].operatingSystemVersions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdOperatingSystemVersionsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdOperatingSystemVersionsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdOperatingSystemVersionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdOperatingSystemsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystems', args] as const
}

export function getUserprofilesProfileIdOperatingSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdOperatingSystemsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdOperatingSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].operatingSystems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdOperatingSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdOperatingSystemsQueryKey>
        >
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
      ...getUserprofilesProfileIdOperatingSystemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdOperatingSystemsDartIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/operatingSystems/:dartId', args] as const
}

export function getUserprofilesProfileIdOperatingSystemsDartIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdOperatingSystemsDartIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdOperatingSystemsDartIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].operatingSystems[':dartId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdOperatingSystemsDartId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdOperatingSystemsDartIdQueryKey>
        >
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
      ...getUserprofilesProfileIdOperatingSystemsDartIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdPlacementGroupsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', args] as const
}

export function getUserprofilesProfileIdPlacementGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlacementGroupsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlacementGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].placementGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlacementGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlacementGroupsQueryKey>
        >
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
      ...getUserprofilesProfileIdPlacementGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdPlacementGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', 'PUT'] as const
}

export function getPutUserprofilesProfileIdPlacementGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdPlacementGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].placementGroups.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdPlacementGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdPlacementGroupsMutationOptions<
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

export function getPostUserprofilesProfileIdPlacementGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', 'POST'] as const
}

export function getPostUserprofilesProfileIdPlacementGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdPlacementGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placementGroups']['$post']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].placementGroups.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdPlacementGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdPlacementGroupsMutationOptions<
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

export function getPatchUserprofilesProfileIdPlacementGroupsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdPlacementGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdPlacementGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placementGroups']['$patch']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].placementGroups.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdPlacementGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['placementGroups']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdPlacementGroupsMutationOptions<
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

export function getUserprofilesProfileIdPlacementGroupsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementGroups/:id', args] as const
}

export function getUserprofilesProfileIdPlacementGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlacementGroupsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlacementGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].placementGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlacementGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlacementGroupsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdPlacementGroupsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdPlacementStrategiesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', args] as const
}

export function getUserprofilesProfileIdPlacementStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlacementStrategiesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlacementStrategiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].placementStrategies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlacementStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['placementStrategies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlacementStrategiesQueryKey>
        >
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
      ...getUserprofilesProfileIdPlacementStrategiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdPlacementStrategiesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', 'PUT'] as const
}

export function getPutUserprofilesProfileIdPlacementStrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdPlacementStrategiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placementStrategies']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].placementStrategies.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdPlacementStrategies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['placementStrategies']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['placementStrategies']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdPlacementStrategiesMutationOptions<
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

export function getPostUserprofilesProfileIdPlacementStrategiesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', 'POST'] as const
}

export function getPostUserprofilesProfileIdPlacementStrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdPlacementStrategiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placementStrategies']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].placementStrategies.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdPlacementStrategies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['placementStrategies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['placementStrategies']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdPlacementStrategiesMutationOptions<
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

export function getPatchUserprofilesProfileIdPlacementStrategiesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdPlacementStrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdPlacementStrategiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].placementStrategies.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdPlacementStrategies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdPlacementStrategiesMutationOptions<
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

export function getUserprofilesProfileIdPlacementStrategiesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies/:id', args] as const
}

export function getUserprofilesProfileIdPlacementStrategiesIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlacementStrategiesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlacementStrategiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].placementStrategies[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlacementStrategiesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlacementStrategiesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdPlacementStrategiesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdPlacementStrategiesIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placementStrategies/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdPlacementStrategiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdPlacementStrategiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].placementStrategies[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdPlacementStrategiesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdPlacementStrategiesIdMutationOptions<
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

export function getUserprofilesProfileIdPlacementsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placements', args] as const
}

export function getUserprofilesProfileIdPlacementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlacementsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlacementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].placements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlacements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlacementsQueryKey>
        >
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
      ...getUserprofilesProfileIdPlacementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdPlacementsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements', 'PUT'] as const
}

export function getPutUserprofilesProfileIdPlacementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdPlacementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].placements.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdPlacements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdPlacementsMutationOptions<
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

export function getPostUserprofilesProfileIdPlacementsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements', 'POST'] as const
}

export function getPostUserprofilesProfileIdPlacementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdPlacementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].placements.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdPlacements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdPlacementsMutationOptions<
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

export function getPatchUserprofilesProfileIdPlacementsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdPlacementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdPlacementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].placements.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdPlacements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdPlacementsMutationOptions<
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

export function getPostUserprofilesProfileIdPlacementsGeneratetagsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/placements/generatetags', 'POST'] as const
}

export function getPostUserprofilesProfileIdPlacementsGeneratetagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdPlacementsGeneratetagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].placements.generatetags.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdPlacementsGeneratetags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdPlacementsGeneratetagsMutationOptions<
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

export function getUserprofilesProfileIdPlacementsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/placements/:id', args] as const
}

export function getUserprofilesProfileIdPlacementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlacementsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlacementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].placements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlacementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['placements'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['placements'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlacementsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdPlacementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdPlatformTypesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/platformTypes', args] as const
}

export function getUserprofilesProfileIdPlatformTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlatformTypesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlatformTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].platformTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlatformTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlatformTypesQueryKey>
        >
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
      ...getUserprofilesProfileIdPlatformTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdPlatformTypesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/platformTypes/:id', args] as const
}

export function getUserprofilesProfileIdPlatformTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPlatformTypesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPlatformTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].platformTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPlatformTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPlatformTypesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdPlatformTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdPostalCodesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/postalCodes', args] as const
}

export function getUserprofilesProfileIdPostalCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPostalCodesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPostalCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].postalCodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPostalCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPostalCodesQueryKey>
        >
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
      ...getUserprofilesProfileIdPostalCodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdPostalCodesCodeQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/postalCodes/:code', args] as const
}

export function getUserprofilesProfileIdPostalCodesCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdPostalCodesCodeQueryKey>
  >({
    queryKey: getUserprofilesProfileIdPostalCodesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].postalCodes[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdPostalCodesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdPostalCodesCodeQueryKey>
        >
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
      ...getUserprofilesProfileIdPostalCodesCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects', args] as const
}

export function getUserprofilesProfileIdProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects/:id', args] as const
}

export function getUserprofilesProfileIdProjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsProjectIdInventoryItemsQueryKey(
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

export function getUserprofilesProfileIdProjectsProjectIdInventoryItemsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdInventoryItemsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsProjectIdInventoryItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':projectId'].inventoryItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsProjectIdInventoryItems<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdInventoryItemsQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsProjectIdInventoryItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdQueryKey(
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

export function getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':projectId'].inventoryItems[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsProjectIdInventoryItemsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsProjectIdOrderDocumentsQueryKey(
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

export function getUserprofilesProfileIdProjectsProjectIdOrderDocumentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrderDocumentsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsProjectIdOrderDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':projectId'].orderDocuments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsProjectIdOrderDocuments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrderDocumentsQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsProjectIdOrderDocumentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdQueryKey(
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

export function getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':projectId'].orderDocuments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsProjectIdOrderDocumentsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsProjectIdOrdersQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects/:projectId/orders', args] as const
}

export function getUserprofilesProfileIdProjectsProjectIdOrdersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrdersQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsProjectIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':projectId'].orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsProjectIdOrders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrdersQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsProjectIdOrdersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdProjectsProjectIdOrdersIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/projects/:projectId/orders/:id', args] as const
}

export function getUserprofilesProfileIdProjectsProjectIdOrdersIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrdersIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdProjectsProjectIdOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].projects[':projectId'].orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdProjectsProjectIdOrdersId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdProjectsProjectIdOrdersIdQueryKey>
        >
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
      ...getUserprofilesProfileIdProjectsProjectIdOrdersIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdRegionsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/regions', args] as const
}

export function getUserprofilesProfileIdRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdRegionsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].regions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['regions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdRegionsQueryKey>
        >
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
      ...getUserprofilesProfileIdRegionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdRemarketingListSharesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingListShares', 'PUT'] as const
}

export function getPutUserprofilesProfileIdRemarketingListSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdRemarketingListSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].remarketingListShares.$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdRemarketingListShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdRemarketingListSharesMutationOptions<
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

export function getPatchUserprofilesProfileIdRemarketingListSharesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingListShares', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdRemarketingListSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdRemarketingListSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].remarketingListShares.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdRemarketingListShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdRemarketingListSharesMutationOptions<
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

export function getUserprofilesProfileIdRemarketingListSharesRemarketingListIdQueryKey(
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

export function getUserprofilesProfileIdRemarketingListSharesRemarketingListIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdRemarketingListSharesRemarketingListIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdRemarketingListSharesRemarketingListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].remarketingListShares[':remarketingListId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdRemarketingListSharesRemarketingListId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdRemarketingListSharesRemarketingListIdQueryKey>
        >
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
      ...getUserprofilesProfileIdRemarketingListSharesRemarketingListIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdRemarketingListsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', args] as const
}

export function getUserprofilesProfileIdRemarketingListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdRemarketingListsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdRemarketingListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].remarketingLists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdRemarketingLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdRemarketingListsQueryKey>
        >
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
      ...getUserprofilesProfileIdRemarketingListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdRemarketingListsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', 'PUT'] as const
}

export function getPutUserprofilesProfileIdRemarketingListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdRemarketingListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['remarketingLists']['$put']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].remarketingLists.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdRemarketingLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdRemarketingListsMutationOptions<
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

export function getPostUserprofilesProfileIdRemarketingListsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', 'POST'] as const
}

export function getPostUserprofilesProfileIdRemarketingListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdRemarketingListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['remarketingLists']['$post']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].remarketingLists.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdRemarketingLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['remarketingLists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdRemarketingListsMutationOptions<
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

export function getPatchUserprofilesProfileIdRemarketingListsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdRemarketingListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdRemarketingListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].remarketingLists.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdRemarketingLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdRemarketingListsMutationOptions<
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

export function getUserprofilesProfileIdRemarketingListsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/remarketingLists/:id', args] as const
}

export function getUserprofilesProfileIdRemarketingListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdRemarketingListsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdRemarketingListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].remarketingLists[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdRemarketingListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdRemarketingListsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdRemarketingListsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdReportsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports', args] as const
}

export function getUserprofilesProfileIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdReportsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdReportsQueryKey>
        >
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
      ...getUserprofilesProfileIdReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdReportsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports', 'POST'] as const
}

export function getPostUserprofilesProfileIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].reports.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['reports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdReportsMutationOptions<
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

export function getPostUserprofilesProfileIdReportsCompatiblefieldsQueryMutationKey() {
  return [
    'userprofiles',
    '/userprofiles/:profileId/reports/compatiblefields/query',
    'POST',
  ] as const
}

export function getPostUserprofilesProfileIdReportsCompatiblefieldsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdReportsCompatiblefieldsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].reports.compatiblefields.query.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdReportsCompatiblefieldsQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
          >,
          TOnMutateResult
        >
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
      getPostUserprofilesProfileIdReportsCompatiblefieldsQueryMutationOptions<
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

export function getUserprofilesProfileIdReportsReportIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', args] as const
}

export function getUserprofilesProfileIdReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdReportsReportIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdReportsReportIdQueryKey>
        >
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
      ...getUserprofilesProfileIdReportsReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdReportsReportIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', 'PUT'] as const
}

export function getPutUserprofilesProfileIdReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdReportsReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].$put(args, options),
      )
    },
  })
}

export function createPutUserprofilesProfileIdReportsReportId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdReportsReportIdMutationOptions<
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

export function getDeleteUserprofilesProfileIdReportsReportIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdReportsReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdReportsReportId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdReportsReportIdMutationOptions<
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

export function getPatchUserprofilesProfileIdReportsReportIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdReportsReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdReportsReportId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdReportsReportIdMutationOptions<
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

export function getUserprofilesProfileIdReportsReportIdFilesQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId/files', args] as const
}

export function getUserprofilesProfileIdReportsReportIdFilesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdReportsReportIdFilesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdReportsReportIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdReportsReportIdFiles<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdReportsReportIdFilesQueryKey>
        >
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
      ...getUserprofilesProfileIdReportsReportIdFilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdReportsReportIdFilesFileIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId/files/:fileId', args] as const
}

export function getUserprofilesProfileIdReportsReportIdFilesFileIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdReportsReportIdFilesFileIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdReportsReportIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdReportsReportIdFilesFileId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdReportsReportIdFilesFileIdQueryKey>
        >
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
      ...getUserprofilesProfileIdReportsReportIdFilesFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdReportsReportIdRunMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/reports/:reportId/run', 'POST'] as const
}

export function getPostUserprofilesProfileIdReportsReportIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdReportsReportIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].reports[':reportId'].run.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdReportsReportIdRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdReportsReportIdRunMutationOptions<
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

export function getUserprofilesProfileIdSitesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sites', args] as const
}

export function getUserprofilesProfileIdSitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdSitesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].sites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdSitesQueryKey>
        >
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
      ...getUserprofilesProfileIdSitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdSitesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/sites', 'PUT'] as const
}

export function getPutUserprofilesProfileIdSitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdSitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].sites.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdSites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdSitesMutationOptions<
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

export function getPostUserprofilesProfileIdSitesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/sites', 'POST'] as const
}

export function getPostUserprofilesProfileIdSitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdSitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].sites.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdSites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdSitesMutationOptions<
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

export function getPatchUserprofilesProfileIdSitesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/sites', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdSitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdSitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].sites.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdSites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdSitesMutationOptions<
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

export function getUserprofilesProfileIdSitesIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sites/:id', args] as const
}

export function getUserprofilesProfileIdSitesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdSitesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdSitesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].sites[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdSitesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdSitesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdSitesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdSizesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sizes', args] as const
}

export function getUserprofilesProfileIdSizesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdSizesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdSizesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].sizes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdSizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdSizesQueryKey>
        >
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
      ...getUserprofilesProfileIdSizesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserprofilesProfileIdSizesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/sizes', 'POST'] as const
}

export function getPostUserprofilesProfileIdSizesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdSizesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].sizes.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdSizes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdSizesMutationOptions<
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

export function getUserprofilesProfileIdSizesIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/sizes/:id', args] as const
}

export function getUserprofilesProfileIdSizesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdSizesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdSizesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].sizes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdSizesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdSizesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdSizesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdSubaccountsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', args] as const
}

export function getUserprofilesProfileIdSubaccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdSubaccountsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdSubaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].subaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdSubaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdSubaccountsQueryKey>
        >
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
      ...getUserprofilesProfileIdSubaccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdSubaccountsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', 'PUT'] as const
}

export function getPutUserprofilesProfileIdSubaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdSubaccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].subaccounts.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdSubaccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdSubaccountsMutationOptions<
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

export function getPostUserprofilesProfileIdSubaccountsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', 'POST'] as const
}

export function getPostUserprofilesProfileIdSubaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdSubaccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].subaccounts.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdSubaccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdSubaccountsMutationOptions<
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

export function getPatchUserprofilesProfileIdSubaccountsMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdSubaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdSubaccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].subaccounts.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdSubaccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdSubaccountsMutationOptions<
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

export function getUserprofilesProfileIdSubaccountsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/subaccounts/:id', args] as const
}

export function getUserprofilesProfileIdSubaccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdSubaccountsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdSubaccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].subaccounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdSubaccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdSubaccountsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdSubaccountsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdTargetableRemarketingListsQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetableRemarketingLists', args] as const
}

export function getUserprofilesProfileIdTargetableRemarketingListsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdTargetableRemarketingListsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdTargetableRemarketingListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].targetableRemarketingLists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdTargetableRemarketingLists<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdTargetableRemarketingListsQueryKey>
        >
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
      ...getUserprofilesProfileIdTargetableRemarketingListsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdTargetableRemarketingListsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetableRemarketingLists/:id', args] as const
}

export function getUserprofilesProfileIdTargetableRemarketingListsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdTargetableRemarketingListsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdTargetableRemarketingListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].targetableRemarketingLists[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdTargetableRemarketingListsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdTargetableRemarketingListsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdTargetableRemarketingListsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdTargetingTemplatesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', args] as const
}

export function getUserprofilesProfileIdTargetingTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdTargetingTemplatesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdTargetingTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].targetingTemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdTargetingTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdTargetingTemplatesQueryKey>
        >
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
      ...getUserprofilesProfileIdTargetingTemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdTargetingTemplatesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', 'PUT'] as const
}

export function getPutUserprofilesProfileIdTargetingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdTargetingTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']
      >,
    ) {
      return parseResponse(client.userprofiles[':profileId'].targetingTemplates.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdTargetingTemplatesMutationOptions<
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

export function getPostUserprofilesProfileIdTargetingTemplatesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', 'POST'] as const
}

export function getPostUserprofilesProfileIdTargetingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdTargetingTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].targetingTemplates.$post(args, options),
      )
    },
  })
}

export function createPostUserprofilesProfileIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdTargetingTemplatesMutationOptions<
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

export function getPatchUserprofilesProfileIdTargetingTemplatesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdTargetingTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdTargetingTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].targetingTemplates.$patch(args, options),
      )
    },
  })
}

export function createPatchUserprofilesProfileIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdTargetingTemplatesMutationOptions<
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

export function getUserprofilesProfileIdTargetingTemplatesIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/targetingTemplates/:id', args] as const
}

export function getUserprofilesProfileIdTargetingTemplatesIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdTargetingTemplatesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdTargetingTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].targetingTemplates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdTargetingTemplatesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdTargetingTemplatesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdTargetingTemplatesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdUserRolePermissionGroupsQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissionGroups', args] as const
}

export function getUserprofilesProfileIdUserRolePermissionGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdUserRolePermissionGroupsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdUserRolePermissionGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].userRolePermissionGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdUserRolePermissionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdUserRolePermissionGroupsQueryKey>
        >
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
      ...getUserprofilesProfileIdUserRolePermissionGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdUserRolePermissionGroupsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissionGroups/:id', args] as const
}

export function getUserprofilesProfileIdUserRolePermissionGroupsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdUserRolePermissionGroupsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdUserRolePermissionGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].userRolePermissionGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdUserRolePermissionGroupsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdUserRolePermissionGroupsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdUserRolePermissionGroupsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdUserRolePermissionsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissions', args] as const
}

export function getUserprofilesProfileIdUserRolePermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdUserRolePermissionsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdUserRolePermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].userRolePermissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdUserRolePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdUserRolePermissionsQueryKey>
        >
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
      ...getUserprofilesProfileIdUserRolePermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdUserRolePermissionsIdQueryKey(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRolePermissions/:id', args] as const
}

export function getUserprofilesProfileIdUserRolePermissionsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdUserRolePermissionsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdUserRolePermissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].userRolePermissions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdUserRolePermissionsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdUserRolePermissionsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdUserRolePermissionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdUserRolesQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', args] as const
}

export function getUserprofilesProfileIdUserRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdUserRolesQueryKey>
  >({
    queryKey: getUserprofilesProfileIdUserRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].userRoles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdUserRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdUserRolesQueryKey>
        >
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
      ...getUserprofilesProfileIdUserRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUserprofilesProfileIdUserRolesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', 'PUT'] as const
}

export function getPutUserprofilesProfileIdUserRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserprofilesProfileIdUserRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].userRoles.$put(args, options))
    },
  })
}

export function createPutUserprofilesProfileIdUserRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserprofilesProfileIdUserRolesMutationOptions<
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

export function getPostUserprofilesProfileIdUserRolesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', 'POST'] as const
}

export function getPostUserprofilesProfileIdUserRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserprofilesProfileIdUserRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].userRoles.$post(args, options))
    },
  })
}

export function createPostUserprofilesProfileIdUserRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserprofilesProfileIdUserRolesMutationOptions<
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

export function getPatchUserprofilesProfileIdUserRolesMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles', 'PATCH'] as const
}

export function getPatchUserprofilesProfileIdUserRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserprofilesProfileIdUserRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>,
    ) {
      return parseResponse(client.userprofiles[':profileId'].userRoles.$patch(args, options))
    },
  })
}

export function createPatchUserprofilesProfileIdUserRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserprofilesProfileIdUserRolesMutationOptions<
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

export function getUserprofilesProfileIdUserRolesIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/userRoles/:id', args] as const
}

export function getUserprofilesProfileIdUserRolesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdUserRolesIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdUserRolesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].userRoles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdUserRolesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdUserRolesIdQueryKey>
        >
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
      ...getUserprofilesProfileIdUserRolesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserprofilesProfileIdUserRolesIdMutationKey() {
  return ['userprofiles', '/userprofiles/:profileId/userRoles/:id', 'DELETE'] as const
}

export function getDeleteUserprofilesProfileIdUserRolesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserprofilesProfileIdUserRolesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.userprofiles[':profileId'].userRoles[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUserprofilesProfileIdUserRolesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserprofilesProfileIdUserRolesIdMutationOptions<
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

export function getUserprofilesProfileIdVideoFormatsQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/videoFormats', args] as const
}

export function getUserprofilesProfileIdVideoFormatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdVideoFormatsQueryKey>
  >({
    queryKey: getUserprofilesProfileIdVideoFormatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].videoFormats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdVideoFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdVideoFormatsQueryKey>
        >
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
      ...getUserprofilesProfileIdVideoFormatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserprofilesProfileIdVideoFormatsIdQueryKey(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>,
) {
  return ['userprofiles', '/userprofiles/:profileId/videoFormats/:id', args] as const
}

export function getUserprofilesProfileIdVideoFormatsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserprofilesProfileIdVideoFormatsIdQueryKey>
  >({
    queryKey: getUserprofilesProfileIdVideoFormatsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userprofiles[':profileId'].videoFormats[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserprofilesProfileIdVideoFormatsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserprofilesProfileIdVideoFormatsIdQueryKey>
        >
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
      ...getUserprofilesProfileIdVideoFormatsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
