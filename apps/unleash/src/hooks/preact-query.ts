import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getEdgeKey() {
  return ['edge'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInviteKey() {
  return ['invite'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getApiAdminProjectsQueryKey(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
) {
  return ['api', '/api/admin/projects', args] as const
}

export function getApiAdminProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.admin.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsQueryKey>
  >({
    queryKey: getApiAdminProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminProjectsMutationKey() {
  return ['api', '/api/admin/projects', 'POST'] as const
}

export function getPostApiAdminProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.projects.$post>) {
      return parseResponse(client.api.admin.projects.$post(args, options))
    },
  })
}

export function usePostApiAdminProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminProjectsValidateMutationKey() {
  return ['api', '/api/admin/projects/validate', 'POST'] as const
}

export function getPostApiAdminProjectsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.projects.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.projects.validate.$post>) {
      return parseResponse(client.api.admin.projects.validate.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.projects.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.projects.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiAdminProjectsProjectIdMutationKey() {
  return ['api', '/api/admin/projects/:projectId', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['$put']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].$put(args, options))
    },
  })
}

export function usePutApiAdminProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminProjectsProjectIdMutationKey() {
  return ['api', '/api/admin/projects/:projectId', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['$delete']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdMutationOptions<
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

export function getPutApiAdminProjectsProjectIdSettingsMutationKey() {
  return ['api', '/api/admin/projects/:projectId/settings', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].settings.$put(args, options))
    },
  })
}

export function usePutApiAdminProjectsProjectIdSettings<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdSettingsMutationOptions<
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

export function getPostApiAdminProjectsArchiveProjectIdMutationKey() {
  return ['api', '/api/admin/projects/archive/:projectId', 'POST'] as const
}

export function getPostApiAdminProjectsArchiveProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsArchiveProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects.archive[':projectId'].$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsArchiveProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsArchiveProjectIdMutationOptions<
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

export function getPostApiAdminProjectsReviveProjectIdMutationKey() {
  return ['api', '/api/admin/projects/revive/:projectId', 'POST'] as const
}

export function getPostApiAdminProjectsReviveProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsReviveProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects.revive[':projectId'].$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsReviveProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsReviveProjectIdMutationOptions<
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

export function getApiAdminProjectsProjectIdAccessQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/access', args] as const
}

export function getApiAdminProjectsProjectIdAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdAccessQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].access.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdAccessQueryKey>
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
      ...getApiAdminProjectsProjectIdAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdAccessQueryKey>
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
      ...getApiAdminProjectsProjectIdAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminProjectsProjectIdAccessMutationKey() {
  return ['api', '/api/admin/projects/:projectId/access', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].access.$put(args, options))
    },
  })
}

export function usePutApiAdminProjectsProjectIdAccess<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdAccessMutationOptions<
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

export function getPostApiAdminProjectsProjectIdAccessMutationKey() {
  return ['api', '/api/admin/projects/:projectId/access', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].access.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdAccess<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdAccessMutationOptions<
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

export function getApiAdminProjectsRolesRoleIdAccessQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
) {
  return ['api', '/api/admin/projects/roles/:roleId/access', args] as const
}

export function getApiAdminProjectsRolesRoleIdAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsRolesRoleIdAccessQueryKey>
  >({
    queryKey: getApiAdminProjectsRolesRoleIdAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects.roles[':roleId'].access.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsRolesRoleIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsRolesRoleIdAccessQueryKey>
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
      ...getApiAdminProjectsRolesRoleIdAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsRolesRoleIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsRolesRoleIdAccessQueryKey>
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
      ...getApiAdminProjectsRolesRoleIdAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminProjectsProjectIdUsersUserIdRolesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/users/:userId/roles', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].users[':userId'].roles.$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdUsersUserIdRoles<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdUsersUserIdRolesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdUsersUserIdRolesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/users/:userId/roles', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].users[':userId'].roles.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdUsersUserIdRoles<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdUsersUserIdRolesMutationOptions<
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

export function getPutApiAdminProjectsProjectIdGroupsGroupIdRolesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/groups/:groupId/roles', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdGroupsGroupIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdGroupsGroupIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].groups[':groupId'].roles.$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdGroupsGroupIdRoles<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdGroupsGroupIdRolesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdGroupsGroupIdRolesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/groups/:groupId/roles', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdGroupsGroupIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdGroupsGroupIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].groups[':groupId'].roles.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdGroupsGroupIdRoles<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdGroupsGroupIdRolesMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/changeProject',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].changeProject.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProject<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectMutationOptions<
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

export function getApiAdminPermissionsQueryKey() {
  return ['api', '/api/admin/permissions'] as const
}

export function getApiAdminPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminPermissionsQueryKey>
  >({
    queryKey: getApiAdminPermissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.permissions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminPermissionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminPermissionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminMetricsRpsQueryKey() {
  return ['api', '/api/admin/metrics/rps'] as const
}

export function getApiAdminMetricsRpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsRpsQueryKey>
  >({
    queryKey: getApiAdminMetricsRpsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.rps.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsRps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsRpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminMetricsRpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsRps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsRpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminMetricsRpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminMetricsTrafficQueryKey(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
) {
  return ['api', '/api/admin/metrics/traffic', args] as const
}

export function getApiAdminMetricsTrafficQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsTrafficQueryKey>
  >({
    queryKey: getApiAdminMetricsTrafficQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.traffic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsTraffic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsTrafficQueryKey>
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
      ...getApiAdminMetricsTrafficQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsTraffic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsTrafficQueryKey>
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
      ...getApiAdminMetricsTrafficQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminMetricsConnectionQueryKey(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
) {
  return ['api', '/api/admin/metrics/connection', args] as const
}

export function getApiAdminMetricsConnectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsConnectionQueryKey>
  >({
    queryKey: getApiAdminMetricsConnectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.connection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsConnectionQueryKey>
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
      ...getApiAdminMetricsConnectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsConnectionQueryKey>
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
      ...getApiAdminMetricsConnectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminMetricsRequestQueryKey(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
) {
  return ['api', '/api/admin/metrics/request', args] as const
}

export function getApiAdminMetricsRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsRequestQueryKey>
  >({
    queryKey: getApiAdminMetricsRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.request.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsRequestQueryKey>
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
      ...getApiAdminMetricsRequestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsRequestQueryKey>
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
      ...getApiAdminMetricsRequestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminNotificationsQueryKey() {
  return ['api', '/api/admin/notifications'] as const
}

export function getApiAdminNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminNotificationsQueryKey>
  >({
    queryKey: getApiAdminNotificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.notifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminNotificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminNotificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminNotificationsReadMutationKey() {
  return ['api', '/api/admin/notifications/read', 'POST'] as const
}

export function getPostApiAdminNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.read.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.notifications.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminNotificationsReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.notifications.read.$post>) {
      return parseResponse(client.api.admin.notifications.read.$post(args, options))
    },
  })
}

export function usePostApiAdminNotificationsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.notifications.read.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.notifications.read.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminNotificationsReadMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminInsightsLifecycleQueryKey(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
) {
  return ['api', '/api/admin/insights/lifecycle', args] as const
}

export function getApiAdminInsightsLifecycleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminInsightsLifecycleQueryKey>
  >({
    queryKey: getApiAdminInsightsLifecycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.insights.lifecycle.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminInsightsLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInsightsLifecycleQueryKey>
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
      ...getApiAdminInsightsLifecycleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminInsightsLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInsightsLifecycleQueryKey>
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
      ...getApiAdminInsightsLifecycleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminInsightsQueryKey(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
) {
  return ['api', '/api/admin/insights', args] as const
}

export function getApiAdminInsightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.admin.insights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminInsightsQueryKey>
  >({
    queryKey: getApiAdminInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.insights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminInsightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminInsightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiAdminEmailSubscriptionSubscriptionMutationKey() {
  return ['api', '/api/admin/email-subscription/:subscription', 'PUT'] as const
}

export function getPutApiAdminEmailSubscriptionSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminEmailSubscriptionSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin)['email-subscription'][':subscription']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin['email-subscription'][':subscription'].$put(args, options),
      )
    },
  })
}

export function usePutApiAdminEmailSubscriptionSubscription<
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
                ReturnType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminEmailSubscriptionSubscriptionMutationOptions<
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

export function getDeleteApiAdminEmailSubscriptionSubscriptionMutationKey() {
  return ['api', '/api/admin/email-subscription/:subscription', 'DELETE'] as const
}

export function getDeleteApiAdminEmailSubscriptionSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['email-subscription'][':subscription']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['email-subscription'][':subscription']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminEmailSubscriptionSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin)['email-subscription'][':subscription']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin['email-subscription'][':subscription'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminEmailSubscriptionSubscription<
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
                ReturnType<
                  (typeof client.api.admin)['email-subscription'][':subscription']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin)['email-subscription'][':subscription']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminEmailSubscriptionSubscriptionMutationOptions<
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

export function getApiAdminLicensedUsersQueryKey() {
  return ['api', '/api/admin/licensed-users'] as const
}

export function getApiAdminLicensedUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminLicensedUsersQueryKey>
  >({
    queryKey: getApiAdminLicensedUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['licensed-users'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminLicensedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminLicensedUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminLicensedUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminLicensedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminLicensedUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminLicensedUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiClientMetricsEdgeMutationKey() {
  return ['api', '/api/client/metrics/edge', 'POST'] as const
}

export function getPostApiClientMetricsEdgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.edge.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.client.metrics.edge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientMetricsEdgeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.metrics.edge.$post>) {
      return parseResponse(client.api.client.metrics.edge.$post(args, options))
    },
  })
}

export function usePostApiClientMetricsEdge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.edge.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.client.metrics.edge.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiClientMetricsEdgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiClientEdgeLicensingHeartbeatMutationKey() {
  return ['api', '/api/client/edge-licensing/heartbeat', 'POST'] as const
}

export function getPostApiClientEdgeLicensingHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.client)['edge-licensing']['heartbeat']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientEdgeLicensingHeartbeatMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.client['edge-licensing'].heartbeat.$post(undefined, options))
    },
  })
}

export function usePostApiClientEdgeLicensingHeartbeat<
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
                ReturnType<(typeof client.api.client)['edge-licensing']['heartbeat']['$post']>
              >
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
  const mutationDefaults = getPostApiClientEdgeLicensingHeartbeatMutationOptions<
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

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >({
    queryKey: getReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInviteTokenValidateQueryKey(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
) {
  return ['invite', '/invite/:token/validate', args] as const
}

export function getInviteTokenValidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInviteTokenValidateQueryKey>
  >({
    queryKey: getInviteTokenValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invite[':token'].validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInviteTokenValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInviteTokenValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInviteTokenValidateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInviteTokenValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInviteTokenValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInviteTokenValidateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInviteTokenSignupMutationKey() {
  return ['invite', '/invite/:token/signup', 'POST'] as const
}

export function getPostInviteTokenSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invite)[':token']['signup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invite)[':token']['signup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInviteTokenSignupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invite)[':token']['signup']['$post']>) {
      return parseResponse(client.invite[':token'].signup.$post(args, options))
    },
  })
}

export function usePostInviteTokenSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.invite)[':token']['signup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.invite)[':token']['signup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInviteTokenSignupMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSimpleLoginMutationKey() {
  return ['auth', '/auth/simple/login', 'POST'] as const
}

export function getPostAuthSimpleLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.simple.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.simple.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSimpleLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.simple.login.$post>) {
      return parseResponse(client.auth.simple.login.$post(args, options))
    },
  })
}

export function usePostAuthSimpleLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.simple.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.simple.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthSimpleLoginMutationOptions<TError, TOnMutateResult>(
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

export function getAuthResetValidateQueryKey() {
  return ['auth', '/auth/reset/validate'] as const
}

export function getAuthResetValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthResetValidateQueryKey>
  >({
    queryKey: getAuthResetValidateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.reset.validate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthResetValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthResetValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthResetValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthResetValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthResetValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthResetValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthResetPasswordMutationKey() {
  return ['auth', '/auth/reset/password', 'POST'] as const
}

export function getPostAuthResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.password.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.reset.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.reset.password.$post>) {
      return parseResponse(client.auth.reset.password.$post(args, options))
    },
  })
}

export function usePostAuthResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.password.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.reset.password.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthResetValidatePasswordMutationKey() {
  return ['auth', '/auth/reset/validate-password', 'POST'] as const
}

export function getPostAuthResetValidatePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.reset)['validate-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.reset)['validate-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthResetValidatePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.reset)['validate-password']['$post']>,
    ) {
      return parseResponse(client.auth.reset['validate-password'].$post(args, options))
    },
  })
}

export function usePostAuthResetValidatePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.reset)['validate-password']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.reset)['validate-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthResetValidatePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthResetPasswordEmailMutationKey() {
  return ['auth', '/auth/reset/password-email', 'POST'] as const
}

export function getPostAuthResetPasswordEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.reset)['password-email']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.reset)['password-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthResetPasswordEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.reset)['password-email']['$post']>,
    ) {
      return parseResponse(client.auth.reset['password-email'].$post(args, options))
    },
  })
}

export function usePostAuthResetPasswordEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.reset)['password-email']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.reset)['password-email']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthResetPasswordEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminFeaturesValidateMutationKey() {
  return ['api', '/api/admin/features/validate', 'POST'] as const
}

export function getPostApiAdminFeaturesValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.features.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.features.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminFeaturesValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.features.validate.$post>) {
      return parseResponse(client.api.admin.features.validate.$post(args, options))
    },
  })
}

export function usePostApiAdminFeaturesValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.features.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.features.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminFeaturesValidateMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminFeaturesFeatureNameTagsQueryKey(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
) {
  return ['api', '/api/admin/features/:featureName/tags', args] as const
}

export function getApiAdminFeaturesFeatureNameTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminFeaturesFeatureNameTagsQueryKey>
  >({
    queryKey: getApiAdminFeaturesFeatureNameTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.features[':featureName'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminFeaturesFeatureNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminFeaturesFeatureNameTagsQueryKey>
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
      ...getApiAdminFeaturesFeatureNameTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminFeaturesFeatureNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminFeaturesFeatureNameTagsQueryKey>
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
      ...getApiAdminFeaturesFeatureNameTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminFeaturesFeatureNameTagsMutationKey() {
  return ['api', '/api/admin/features/:featureName/tags', 'PUT'] as const
}

export function getPutApiAdminFeaturesFeatureNameTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminFeaturesFeatureNameTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>,
    ) {
      return parseResponse(client.api.admin.features[':featureName'].tags.$put(args, options))
    },
  })
}

export function usePutApiAdminFeaturesFeatureNameTags<
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
                ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminFeaturesFeatureNameTagsMutationOptions<
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

export function getPostApiAdminFeaturesFeatureNameTagsMutationKey() {
  return ['api', '/api/admin/features/:featureName/tags', 'POST'] as const
}

export function getPostApiAdminFeaturesFeatureNameTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminFeaturesFeatureNameTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>,
    ) {
      return parseResponse(client.api.admin.features[':featureName'].tags.$post(args, options))
    },
  })
}

export function usePostApiAdminFeaturesFeatureNameTags<
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
                ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminFeaturesFeatureNameTagsMutationOptions<
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

export function getDeleteApiAdminFeaturesFeatureNameTagsTypeValueMutationKey() {
  return ['api', '/api/admin/features/:featureName/tags/:type/:value', 'DELETE'] as const
}

export function getDeleteApiAdminFeaturesFeatureNameTagsTypeValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminFeaturesFeatureNameTagsTypeValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.features[':featureName'].tags[':type'][':value'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminFeaturesFeatureNameTagsTypeValue<
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
                ReturnType<
                  (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminFeaturesFeatureNameTagsTypeValueMutationOptions<
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

export function getApiAdminFeatureTypesQueryKey() {
  return ['api', '/api/admin/feature-types'] as const
}

export function getApiAdminFeatureTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminFeatureTypesQueryKey>
  >({
    queryKey: getApiAdminFeatureTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['feature-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminFeatureTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminFeatureTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminFeatureTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminFeatureTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminFeatureTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminFeatureTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiAdminFeatureTypesIdLifetimeMutationKey() {
  return ['api', '/api/admin/feature-types/:id/lifetime', 'PUT'] as const
}

export function getPutApiAdminFeatureTypesIdLifetimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminFeatureTypesIdLifetimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>,
    ) {
      return parseResponse(client.api.admin['feature-types'][':id'].lifetime.$put(args, options))
    },
  })
}

export function usePutApiAdminFeatureTypesIdLifetime<
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
                ReturnType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminFeatureTypesIdLifetimeMutationOptions<
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

export function getDeleteApiAdminArchiveFeatureNameMutationKey() {
  return ['api', '/api/admin/archive/:featureName', 'DELETE'] as const
}

export function getDeleteApiAdminArchiveFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.archive)[':featureName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.archive)[':featureName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminArchiveFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.archive)[':featureName']['$delete']>,
    ) {
      return parseResponse(client.api.admin.archive[':featureName'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminArchiveFeatureName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.archive)[':featureName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.archive)[':featureName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminArchiveFeatureNameMutationOptions<
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

export function getPostApiAdminArchiveReviveFeatureNameMutationKey() {
  return ['api', '/api/admin/archive/revive/:featureName', 'POST'] as const
}

export function getPostApiAdminArchiveReviveFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminArchiveReviveFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>,
    ) {
      return parseResponse(client.api.admin.archive.revive[':featureName'].$post(args, options))
    },
  })
}

export function usePostApiAdminArchiveReviveFeatureName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminArchiveReviveFeatureNameMutationOptions<
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

export function getApiAdminStrategiesQueryKey() {
  return ['api', '/api/admin/strategies'] as const
}

export function getApiAdminStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminStrategiesQueryKey>
  >({
    queryKey: getApiAdminStrategiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.strategies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminStrategiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminStrategiesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminStrategiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminStrategiesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminStrategiesMutationKey() {
  return ['api', '/api/admin/strategies', 'POST'] as const
}

export function getPostApiAdminStrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.strategies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminStrategiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.strategies.$post>) {
      return parseResponse(client.api.admin.strategies.$post(args, options))
    },
  })
}

export function usePostApiAdminStrategies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.strategies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminStrategiesMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminStrategiesNameQueryKey(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
) {
  return ['api', '/api/admin/strategies/:name', args] as const
}

export function getApiAdminStrategiesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminStrategiesNameQueryKey>
  >({
    queryKey: getApiAdminStrategiesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.strategies[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminStrategiesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminStrategiesNameQueryKey>
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
      ...getApiAdminStrategiesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminStrategiesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminStrategiesNameQueryKey>
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
      ...getApiAdminStrategiesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminStrategiesNameMutationKey() {
  return ['api', '/api/admin/strategies/:name', 'PUT'] as const
}

export function getPutApiAdminStrategiesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.strategies)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminStrategiesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$put']>,
    ) {
      return parseResponse(client.api.admin.strategies[':name'].$put(args, options))
    },
  })
}

export function usePutApiAdminStrategiesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.strategies)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminStrategiesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminStrategiesNameMutationKey() {
  return ['api', '/api/admin/strategies/:name', 'DELETE'] as const
}

export function getDeleteApiAdminStrategiesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.strategies)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminStrategiesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$delete']>,
    ) {
      return parseResponse(client.api.admin.strategies[':name'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminStrategiesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.strategies)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminStrategiesNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminStrategiesStrategyNameDeprecateMutationKey() {
  return ['api', '/api/admin/strategies/:strategyName/deprecate', 'POST'] as const
}

export function getPostApiAdminStrategiesStrategyNameDeprecateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminStrategiesStrategyNameDeprecateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.strategies[':strategyName'].deprecate.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminStrategiesStrategyNameDeprecate<
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
                ReturnType<
                  (typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminStrategiesStrategyNameDeprecateMutationOptions<
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

export function getPostApiAdminStrategiesStrategyNameReactivateMutationKey() {
  return ['api', '/api/admin/strategies/:strategyName/reactivate', 'POST'] as const
}

export function getPostApiAdminStrategiesStrategyNameReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminStrategiesStrategyNameReactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.strategies[':strategyName'].reactivate.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminStrategiesStrategyNameReactivate<
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
                ReturnType<
                  (typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminStrategiesStrategyNameReactivateMutationOptions<
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

export function getApiAdminEventsQueryKey(
  args: InferRequestType<typeof client.api.admin.events.$get>,
) {
  return ['api', '/api/admin/events', args] as const
}

export function getApiAdminEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.admin.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminEventsQueryKey>
  >({
    queryKey: getApiAdminEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminEventsFeatureNameQueryKey(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
) {
  return ['api', '/api/admin/events/:featureName', args] as const
}

export function getApiAdminEventsFeatureNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminEventsFeatureNameQueryKey>
  >({
    queryKey: getApiAdminEventsFeatureNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.events[':featureName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminEventsFeatureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEventsFeatureNameQueryKey>
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
      ...getApiAdminEventsFeatureNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminEventsFeatureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEventsFeatureNameQueryKey>
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
      ...getApiAdminEventsFeatureNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminEventCreatorsQueryKey() {
  return ['api', '/api/admin/event-creators'] as const
}

export function getApiAdminEventCreatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminEventCreatorsQueryKey>
  >({
    queryKey: getApiAdminEventCreatorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['event-creators'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminEventCreators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEventCreatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminEventCreatorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminEventCreators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEventCreatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminEventCreatorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminPlaygroundMutationKey() {
  return ['api', '/api/admin/playground', 'POST'] as const
}

export function getPostApiAdminPlaygroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.playground.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.playground.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminPlaygroundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.playground.$post>) {
      return parseResponse(client.api.admin.playground.$post(args, options))
    },
  })
}

export function usePostApiAdminPlayground<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.playground.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.playground.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminPlaygroundMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminPlaygroundAdvancedMutationKey() {
  return ['api', '/api/admin/playground/advanced', 'POST'] as const
}

export function getPostApiAdminPlaygroundAdvancedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.playground.advanced.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.playground.advanced.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminPlaygroundAdvancedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.playground.advanced.$post>) {
      return parseResponse(client.api.admin.playground.advanced.$post(args, options))
    },
  })
}

export function usePostApiAdminPlaygroundAdvanced<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.playground.advanced.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.playground.advanced.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminPlaygroundAdvancedMutationOptions<
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

export function getPostApiAdminPlaygroundFeaturesFeatureNameMutationKey() {
  return ['api', '/api/admin/playground/features/:featureName', 'POST'] as const
}

export function getPostApiAdminPlaygroundFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.playground.features)[':featureName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.playground.features)[':featureName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminPlaygroundFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.playground.features)[':featureName']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.playground.features[':featureName'].$post(args, options),
      )
    },
  })
}

export function usePostApiAdminPlaygroundFeaturesFeatureName<
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
                ReturnType<(typeof client.api.admin.playground.features)[':featureName']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.playground.features)[':featureName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminPlaygroundFeaturesFeatureNameMutationOptions<
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

export function getApiAdminMetricsUnknownFlagsQueryKey() {
  return ['api', '/api/admin/metrics/unknown-flags'] as const
}

export function getApiAdminMetricsUnknownFlagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsUnknownFlagsQueryKey>
  >({
    queryKey: getApiAdminMetricsUnknownFlagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics['unknown-flags'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsUnknownFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsUnknownFlagsQueryKey>
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
      ...getApiAdminMetricsUnknownFlagsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsUnknownFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsUnknownFlagsQueryKey>
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
      ...getApiAdminMetricsUnknownFlagsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminMetricsApplicationsAppNameQueryKey(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
) {
  return ['api', '/api/admin/metrics/applications/:appName', args] as const
}

export function getApiAdminMetricsApplicationsAppNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsApplicationsAppNameQueryKey>
  >({
    queryKey: getApiAdminMetricsApplicationsAppNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.applications[':appName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsApplicationsAppName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsApplicationsAppNameQueryKey>
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
      ...getApiAdminMetricsApplicationsAppNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsApplicationsAppName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsApplicationsAppNameQueryKey>
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
      ...getApiAdminMetricsApplicationsAppNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminMetricsApplicationsAppNameMutationKey() {
  return ['api', '/api/admin/metrics/applications/:appName', 'POST'] as const
}

export function getPostApiAdminMetricsApplicationsAppNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminMetricsApplicationsAppNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>,
    ) {
      return parseResponse(client.api.admin.metrics.applications[':appName'].$post(args, options))
    },
  })
}

export function usePostApiAdminMetricsApplicationsAppName<
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
                ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminMetricsApplicationsAppNameMutationOptions<
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

export function getDeleteApiAdminMetricsApplicationsAppNameMutationKey() {
  return ['api', '/api/admin/metrics/applications/:appName', 'DELETE'] as const
}

export function getDeleteApiAdminMetricsApplicationsAppNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminMetricsApplicationsAppNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>,
    ) {
      return parseResponse(client.api.admin.metrics.applications[':appName'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminMetricsApplicationsAppName<
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
                ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminMetricsApplicationsAppNameMutationOptions<
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

export function getApiAdminMetricsApplicationsQueryKey(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
) {
  return ['api', '/api/admin/metrics/applications', args] as const
}

export function getApiAdminMetricsApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsApplicationsQueryKey>
  >({
    queryKey: getApiAdminMetricsApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsApplicationsQueryKey>
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
      ...getApiAdminMetricsApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsApplicationsQueryKey>
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
      ...getApiAdminMetricsApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminMetricsApplicationsAppNameOverviewQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
) {
  return ['api', '/api/admin/metrics/applications/:appName/overview', args] as const
}

export function getApiAdminMetricsApplicationsAppNameOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsApplicationsAppNameOverviewQueryKey>
  >({
    queryKey: getApiAdminMetricsApplicationsAppNameOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.applications[':appName'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsApplicationsAppNameOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsApplicationsAppNameOverviewQueryKey>
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
      ...getApiAdminMetricsApplicationsAppNameOverviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsApplicationsAppNameOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsApplicationsAppNameOverviewQueryKey>
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
      ...getApiAdminMetricsApplicationsAppNameOverviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
) {
  return ['api', '/api/admin/metrics/instances/:appName/environment/:environment', args] as const
}

export function getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryKey>
  >({
    queryKey: getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.instances[':appName'].environment[':environment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsInstancesAppNameEnvironmentEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryKey>
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
      ...getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsInstancesAppNameEnvironmentEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryKey>
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
      ...getApiAdminMetricsInstancesAppNameEnvironmentEnvironmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminMetricsSdksOutdatedQueryKey() {
  return ['api', '/api/admin/metrics/sdks/outdated'] as const
}

export function getApiAdminMetricsSdksOutdatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMetricsSdksOutdatedQueryKey>
  >({
    queryKey: getApiAdminMetricsSdksOutdatedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.metrics.sdks.outdated.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMetricsSdksOutdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>>
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
              Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsSdksOutdatedQueryKey>
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
      ...getApiAdminMetricsSdksOutdatedQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminMetricsSdksOutdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>>
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
              Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMetricsSdksOutdatedQueryKey>
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
      ...getApiAdminMetricsSdksOutdatedQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminClientMetricsFeaturesNameRawQueryKey(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
) {
  return ['api', '/api/admin/client-metrics/features/:name/raw', args] as const
}

export function getApiAdminClientMetricsFeaturesNameRawQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminClientMetricsFeaturesNameRawQueryKey>
  >({
    queryKey: getApiAdminClientMetricsFeaturesNameRawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['client-metrics'].features[':name'].raw.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminClientMetricsFeaturesNameRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminClientMetricsFeaturesNameRawQueryKey>
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
      ...getApiAdminClientMetricsFeaturesNameRawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminClientMetricsFeaturesNameRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminClientMetricsFeaturesNameRawQueryKey>
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
      ...getApiAdminClientMetricsFeaturesNameRawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminClientMetricsFeaturesNameQueryKey(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
) {
  return ['api', '/api/admin/client-metrics/features/:name', args] as const
}

export function getApiAdminClientMetricsFeaturesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminClientMetricsFeaturesNameQueryKey>
  >({
    queryKey: getApiAdminClientMetricsFeaturesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['client-metrics'].features[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminClientMetricsFeaturesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminClientMetricsFeaturesNameQueryKey>
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
      ...getApiAdminClientMetricsFeaturesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminClientMetricsFeaturesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminClientMetricsFeaturesNameQueryKey>
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
      ...getApiAdminClientMetricsFeaturesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminUserQueryKey() {
  return ['api', '/api/admin/user'] as const
}

export function getApiAdminUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserQueryKey>
  >({
    queryKey: getApiAdminUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminUserProfileQueryKey() {
  return ['api', '/api/admin/user/profile'] as const
}

export function getApiAdminUserProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserProfileQueryKey>
  >({
    queryKey: getApiAdminUserProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.user.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminUserChangePasswordMutationKey() {
  return ['api', '/api/admin/user/change-password', 'POST'] as const
}

export function getPostApiAdminUserChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.user)['change-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.user)['change-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.user)['change-password']['$post']>,
    ) {
      return parseResponse(client.api.admin.user['change-password'].$post(args, options))
    },
  })
}

export function usePostApiAdminUserChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.user)['change-password']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.user)['change-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserChangePasswordMutationOptions<
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

export function getApiAdminUserRolesQueryKey(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
) {
  return ['api', '/api/admin/user/roles', args] as const
}

export function getApiAdminUserRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.admin.user.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserRolesQueryKey>
  >({
    queryKey: getApiAdminUserRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.user.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminUserRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminUserTokensQueryKey() {
  return ['api', '/api/admin/user/tokens'] as const
}

export function getApiAdminUserTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserTokensQueryKey>
  >({
    queryKey: getApiAdminUserTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.user.tokens.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminUserTokensMutationKey() {
  return ['api', '/api/admin/user/tokens', 'POST'] as const
}

export function getPostApiAdminUserTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.user.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.user.tokens.$post>) {
      return parseResponse(client.api.admin.user.tokens.$post(args, options))
    },
  })
}

export function usePostApiAdminUserTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.user.tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminUserTokensIdMutationKey() {
  return ['api', '/api/admin/user/tokens/:id', 'DELETE'] as const
}

export function getDeleteApiAdminUserTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.user.tokens)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.user.tokens)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminUserTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.user.tokens)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.admin.user.tokens[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminUserTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.user.tokens)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.user.tokens)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminUserTokensIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminUiConfigQueryKey() {
  return ['api', '/api/admin/ui-config'] as const
}

export function getApiAdminUiConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUiConfigQueryKey>
  >({
    queryKey: getApiAdminUiConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['ui-config'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUiConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUiConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUiConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUiConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUiConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUiConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminUiConfigCorsMutationKey() {
  return ['api', '/api/admin/ui-config/cors', 'POST'] as const
}

export function getPostApiAdminUiConfigCorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['ui-config']['cors']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.admin)['ui-config']['cors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUiConfigCorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['ui-config']['cors']['$post']>,
    ) {
      return parseResponse(client.api.admin['ui-config'].cors.$post(args, options))
    },
  })
}

export function usePostApiAdminUiConfigCors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['ui-config']['cors']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.admin)['ui-config']['cors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUiConfigCorsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminContextQueryKey(
  args: InferRequestType<typeof client.api.admin.context.$get>,
) {
  return ['api', '/api/admin/context', args] as const
}

export function getApiAdminContextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.admin.context.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminContextQueryKey>
  >({
    queryKey: getApiAdminContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminContext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.context.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminContext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.context.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminContextMutationKey() {
  return ['api', '/api/admin/context', 'POST'] as const
}

export function getPostApiAdminContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.context.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminContextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.context.$post>) {
      return parseResponse(client.api.admin.context.$post(args, options))
    },
  })
}

export function usePostApiAdminContext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.context.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminContextMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminContextContextFieldQueryKey(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
) {
  return ['api', '/api/admin/context/:contextField', args] as const
}

export function getApiAdminContextContextFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminContextContextFieldQueryKey>
  >({
    queryKey: getApiAdminContextContextFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.context[':contextField'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminContextContextField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminContextContextFieldQueryKey>
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
      ...getApiAdminContextContextFieldQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminContextContextField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminContextContextFieldQueryKey>
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
      ...getApiAdminContextContextFieldQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminContextContextFieldMutationKey() {
  return ['api', '/api/admin/context/:contextField', 'PUT'] as const
}

export function getPutApiAdminContextContextFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.context)[':contextField']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminContextContextFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$put']>,
    ) {
      return parseResponse(client.api.admin.context[':contextField'].$put(args, options))
    },
  })
}

export function usePutApiAdminContextContextField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.context)[':contextField']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminContextContextFieldMutationOptions<
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

export function getDeleteApiAdminContextContextFieldMutationKey() {
  return ['api', '/api/admin/context/:contextField', 'DELETE'] as const
}

export function getDeleteApiAdminContextContextFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.context)[':contextField']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminContextContextFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$delete']>,
    ) {
      return parseResponse(client.api.admin.context[':contextField'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminContextContextField<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.context)[':contextField']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminContextContextFieldMutationOptions<
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

export function getApiAdminContextContextFieldStrategiesQueryKey(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
) {
  return ['api', '/api/admin/context/:contextField/strategies', args] as const
}

export function getApiAdminContextContextFieldStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminContextContextFieldStrategiesQueryKey>
  >({
    queryKey: getApiAdminContextContextFieldStrategiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.context[':contextField'].strategies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminContextContextFieldStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminContextContextFieldStrategiesQueryKey>
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
      ...getApiAdminContextContextFieldStrategiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminContextContextFieldStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminContextContextFieldStrategiesQueryKey>
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
      ...getApiAdminContextContextFieldStrategiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminContextContextFieldLegalValuesMutationKey() {
  return ['api', '/api/admin/context/:contextField/legal-values', 'POST'] as const
}

export function getPostApiAdminContextContextFieldLegalValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.context)[':contextField']['legal-values']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.context)[':contextField']['legal-values']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminContextContextFieldLegalValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.context)[':contextField']['legal-values']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.context[':contextField']['legal-values'].$post(args, options),
      )
    },
  })
}

export function usePostApiAdminContextContextFieldLegalValues<
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
                ReturnType<
                  (typeof client.api.admin.context)[':contextField']['legal-values']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.context)[':contextField']['legal-values']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminContextContextFieldLegalValuesMutationOptions<
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

export function getDeleteApiAdminContextContextFieldLegalValuesLegalValueMutationKey() {
  return ['api', '/api/admin/context/:contextField/legal-values/:legalValue', 'DELETE'] as const
}

export function getDeleteApiAdminContextContextFieldLegalValuesLegalValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminContextContextFieldLegalValuesLegalValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.context[':contextField']['legal-values'][':legalValue'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiAdminContextContextFieldLegalValuesLegalValue<
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
                ReturnType<
                  (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminContextContextFieldLegalValuesLegalValueMutationOptions<
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

export function getPostApiAdminContextValidateMutationKey() {
  return ['api', '/api/admin/context/validate', 'POST'] as const
}

export function getPostApiAdminContextValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.context.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminContextValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.context.validate.$post>) {
      return parseResponse(client.api.admin.context.validate.$post(args, options))
    },
  })
}

export function usePostApiAdminContextValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.context.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.context.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminContextValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminFeaturesBatchExportMutationKey() {
  return ['api', '/api/admin/features-batch/export', 'POST'] as const
}

export function getPostApiAdminFeaturesBatchExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['features-batch']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['features-batch']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminFeaturesBatchExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['features-batch']['export']['$post']>,
    ) {
      return parseResponse(client.api.admin['features-batch'].export.$post(args, options))
    },
  })
}

export function usePostApiAdminFeaturesBatchExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['features-batch']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['features-batch']['export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminFeaturesBatchExportMutationOptions<
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

export function getPostApiAdminFeaturesBatchValidateMutationKey() {
  return ['api', '/api/admin/features-batch/validate', 'POST'] as const
}

export function getPostApiAdminFeaturesBatchValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['features-batch']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['features-batch']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminFeaturesBatchValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['features-batch']['validate']['$post']>,
    ) {
      return parseResponse(client.api.admin['features-batch'].validate.$post(args, options))
    },
  })
}

export function usePostApiAdminFeaturesBatchValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['features-batch']['validate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['features-batch']['validate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminFeaturesBatchValidateMutationOptions<
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

export function getPostApiAdminFeaturesBatchImportMutationKey() {
  return ['api', '/api/admin/features-batch/import', 'POST'] as const
}

export function getPostApiAdminFeaturesBatchImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['features-batch']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['features-batch']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminFeaturesBatchImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['features-batch']['import']['$post']>,
    ) {
      return parseResponse(client.api.admin['features-batch'].import.$post(args, options))
    },
  })
}

export function usePostApiAdminFeaturesBatchImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['features-batch']['import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['features-batch']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminFeaturesBatchImportMutationOptions<
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

export function getApiAdminTagsQueryKey() {
  return ['api', '/api/admin/tags'] as const
}

export function getApiAdminTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTagsQueryKey>
  >({
    queryKey: getApiAdminTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminTagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminTagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminTagsMutationKey() {
  return ['api', '/api/admin/tags', 'POST'] as const
}

export function getPostApiAdminTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.tags.$post>) {
      return parseResponse(client.api.admin.tags.$post(args, options))
    },
  })
}

export function usePostApiAdminTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.admin.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminTagsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminTagsTypeQueryKey(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
) {
  return ['api', '/api/admin/tags/:type', args] as const
}

export function getApiAdminTagsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTagsTypeQueryKey>
  >({
    queryKey: getApiAdminTagsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.tags[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminTagsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminTagsTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminTagsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminTagsTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminTagsTypeValueQueryKey(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
) {
  return ['api', '/api/admin/tags/:type/:value', args] as const
}

export function getApiAdminTagsTypeValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTagsTypeValueQueryKey>
  >({
    queryKey: getApiAdminTagsTypeValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.tags[':type'][':value'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminTagsTypeValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagsTypeValueQueryKey>
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
      ...getApiAdminTagsTypeValueQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminTagsTypeValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagsTypeValueQueryKey>
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
      ...getApiAdminTagsTypeValueQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiAdminTagsTypeValueMutationKey() {
  return ['api', '/api/admin/tags/:type/:value', 'DELETE'] as const
}

export function getDeleteApiAdminTagsTypeValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminTagsTypeValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>,
    ) {
      return parseResponse(client.api.admin.tags[':type'][':value'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminTagsTypeValue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminTagsTypeValueMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminTagsTypeValueRenameMutationKey() {
  return ['api', '/api/admin/tags/:type/:value/rename', 'POST'] as const
}

export function getPostApiAdminTagsTypeValueRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminTagsTypeValueRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>,
    ) {
      return parseResponse(client.api.admin.tags[':type'][':value'].rename.$post(args, options))
    },
  })
}

export function usePostApiAdminTagsTypeValueRename<
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
                ReturnType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminTagsTypeValueRenameMutationOptions<
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

export function getApiAdminTagTypesQueryKey() {
  return ['api', '/api/admin/tag-types'] as const
}

export function getApiAdminTagTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTagTypesQueryKey>
  >({
    queryKey: getApiAdminTagTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['tag-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminTagTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminTagTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminTagTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminTagTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminTagTypesMutationKey() {
  return ['api', '/api/admin/tag-types', 'POST'] as const
}

export function getPostApiAdminTagTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['tag-types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminTagTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin)['tag-types']['$post']>) {
      return parseResponse(client.api.admin['tag-types'].$post(args, options))
    },
  })
}

export function usePostApiAdminTagTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['tag-types']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminTagTypesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminTagTypesValidateMutationKey() {
  return ['api', '/api/admin/tag-types/validate', 'POST'] as const
}

export function getPostApiAdminTagTypesValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['tag-types']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminTagTypesValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['tag-types']['validate']['$post']>,
    ) {
      return parseResponse(client.api.admin['tag-types'].validate.$post(args, options))
    },
  })
}

export function usePostApiAdminTagTypesValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types']['validate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['tag-types']['validate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminTagTypesValidateMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminTagTypesNameQueryKey(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
) {
  return ['api', '/api/admin/tag-types/:name', args] as const
}

export function getApiAdminTagTypesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTagTypesNameQueryKey>
  >({
    queryKey: getApiAdminTagTypesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['tag-types'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminTagTypesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagTypesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminTagTypesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminTagTypesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagTypesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminTagTypesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiAdminTagTypesNameMutationKey() {
  return ['api', '/api/admin/tag-types/:name', 'PUT'] as const
}

export function getPutApiAdminTagTypesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminTagTypesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$put']>,
    ) {
      return parseResponse(client.api.admin['tag-types'][':name'].$put(args, options))
    },
  })
}

export function usePutApiAdminTagTypesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminTagTypesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminTagTypesNameMutationKey() {
  return ['api', '/api/admin/tag-types/:name', 'DELETE'] as const
}

export function getDeleteApiAdminTagTypesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminTagTypesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$delete']>,
    ) {
      return parseResponse(client.api.admin['tag-types'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminTagTypesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminTagTypesNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminTagTypesNameValuesQueryKey(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
) {
  return ['api', '/api/admin/tag-types/:name/values', args] as const
}

export function getApiAdminTagTypesNameValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTagTypesNameValuesQueryKey>
  >({
    queryKey: getApiAdminTagTypesNameValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['tag-types'][':name'].values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminTagTypesNameValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagTypesNameValuesQueryKey>
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
      ...getApiAdminTagTypesNameValuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminTagTypesNameValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTagTypesNameValuesQueryKey>
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
      ...getApiAdminTagTypesNameValuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminAddonsQueryKey(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
) {
  return ['api', '/api/admin/addons', args] as const
}

export function getApiAdminAddonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.admin.addons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminAddonsQueryKey>
  >({
    queryKey: getApiAdminAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.addons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminAddonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminAddonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminAddonsMutationKey() {
  return ['api', '/api/admin/addons', 'POST'] as const
}

export function getPostApiAdminAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.addons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminAddonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.addons.$post>) {
      return parseResponse(client.api.admin.addons.$post(args, options))
    },
  })
}

export function usePostApiAdminAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.addons.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminAddonsIdQueryKey(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
) {
  return ['api', '/api/admin/addons/:id', args] as const
}

export function getApiAdminAddonsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminAddonsIdQueryKey>
  >({
    queryKey: getApiAdminAddonsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.addons[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminAddonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAddonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminAddonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminAddonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAddonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminAddonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiAdminAddonsIdMutationKey() {
  return ['api', '/api/admin/addons/:id', 'PUT'] as const
}

export function getPutApiAdminAddonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.addons)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminAddonsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin.addons)[':id']['$put']>) {
      return parseResponse(client.api.admin.addons[':id'].$put(args, options))
    },
  })
}

export function usePutApiAdminAddonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.addons)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminAddonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminAddonsIdMutationKey() {
  return ['api', '/api/admin/addons/:id', 'DELETE'] as const
}

export function getDeleteApiAdminAddonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.addons)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminAddonsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin.addons)[':id']['$delete']>) {
      return parseResponse(client.api.admin.addons[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminAddonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.addons)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminAddonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminAddonsIdEventsQueryKey(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
) {
  return ['api', '/api/admin/addons/:id/events', args] as const
}

export function getApiAdminAddonsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminAddonsIdEventsQueryKey>
  >({
    queryKey: getApiAdminAddonsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.addons[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminAddonsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAddonsIdEventsQueryKey>
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
      ...getApiAdminAddonsIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminAddonsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminAddonsIdEventsQueryKey>
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
      ...getApiAdminAddonsIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminApiTokensQueryKey(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
) {
  return ['api', '/api/admin/api-tokens', args] as const
}

export function getApiAdminApiTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminApiTokensQueryKey>
  >({
    queryKey: getApiAdminApiTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['api-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminApiTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminApiTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminApiTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminApiTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminApiTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminApiTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminApiTokensMutationKey() {
  return ['api', '/api/admin/api-tokens', 'POST'] as const
}

export function getPostApiAdminApiTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['api-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminApiTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin)['api-tokens']['$post']>) {
      return parseResponse(client.api.admin['api-tokens'].$post(args, options))
    },
  })
}

export function usePostApiAdminApiTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['api-tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminApiTokensMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminApiTokensNameQueryKey(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
) {
  return ['api', '/api/admin/api-tokens/:name', args] as const
}

export function getApiAdminApiTokensNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminApiTokensNameQueryKey>
  >({
    queryKey: getApiAdminApiTokensNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['api-tokens'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminApiTokensName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminApiTokensNameQueryKey>
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
      ...getApiAdminApiTokensNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminApiTokensName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminApiTokensNameQueryKey>
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
      ...getApiAdminApiTokensNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminApiTokensTokenMutationKey() {
  return ['api', '/api/admin/api-tokens/:token', 'PUT'] as const
}

export function getPutApiAdminApiTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':token']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminApiTokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$put']>,
    ) {
      return parseResponse(client.api.admin['api-tokens'][':token'].$put(args, options))
    },
  })
}

export function usePutApiAdminApiTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':token']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminApiTokensTokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminApiTokensTokenMutationKey() {
  return ['api', '/api/admin/api-tokens/:token', 'DELETE'] as const
}

export function getDeleteApiAdminApiTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminApiTokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>,
    ) {
      return parseResponse(client.api.admin['api-tokens'][':token'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminApiTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminApiTokensTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminUserAdminInactiveQueryKey() {
  return ['api', '/api/admin/user-admin/inactive'] as const
}

export function getApiAdminUserAdminInactiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserAdminInactiveQueryKey>
  >({
    queryKey: getApiAdminUserAdminInactiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['user-admin'].inactive.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserAdminInactive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminInactiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserAdminInactiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserAdminInactive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminInactiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserAdminInactiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminUserAdminInactiveDeleteMutationKey() {
  return ['api', '/api/admin/user-admin/inactive/delete', 'POST'] as const
}

export function getPostApiAdminUserAdminInactiveDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserAdminInactiveDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin)['user-admin']['inactive']['delete']['$post']
      >,
    ) {
      return parseResponse(client.api.admin['user-admin'].inactive.delete.$post(args, options))
    },
  })
}

export function usePostApiAdminUserAdminInactiveDelete<
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
                ReturnType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserAdminInactiveDeleteMutationOptions<
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

export function getDeleteApiAdminUserAdminInactiveDeleteMutationKey() {
  return ['api', '/api/admin/user-admin/inactive/delete', 'DELETE'] as const
}

export function getDeleteApiAdminUserAdminInactiveDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$delete']>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminUserAdminInactiveDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.api.admin['user-admin'].inactive.delete.$delete(undefined, options),
      )
    },
  })
}

export function useDeleteApiAdminUserAdminInactiveDelete<
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
                ReturnType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$delete']>
              >
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
  const mutationDefaults = getDeleteApiAdminUserAdminInactiveDeleteMutationOptions<
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

export function getPostApiAdminUserAdminValidatePasswordMutationKey() {
  return ['api', '/api/admin/user-admin/validate-password', 'POST'] as const
}

export function getPostApiAdminUserAdminValidatePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserAdminValidatePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>,
    ) {
      return parseResponse(client.api.admin['user-admin']['validate-password'].$post(args, options))
    },
  })
}

export function usePostApiAdminUserAdminValidatePassword<
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
                ReturnType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserAdminValidatePasswordMutationOptions<
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

export function getPostApiAdminUserAdminIdChangePasswordMutationKey() {
  return ['api', '/api/admin/user-admin/:id/change-password', 'POST'] as const
}

export function getPostApiAdminUserAdminIdChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['user-admin'][':id']['change-password']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin'][':id']['change-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserAdminIdChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin)['user-admin'][':id']['change-password']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin['user-admin'][':id']['change-password'].$post(args, options),
      )
    },
  })
}

export function usePostApiAdminUserAdminIdChangePassword<
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
                ReturnType<
                  (typeof client.api.admin)['user-admin'][':id']['change-password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin)['user-admin'][':id']['change-password']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserAdminIdChangePasswordMutationOptions<
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

export function getPostApiAdminUserAdminResetPasswordMutationKey() {
  return ['api', '/api/admin/user-admin/reset-password', 'POST'] as const
}

export function getPostApiAdminUserAdminResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserAdminResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>,
    ) {
      return parseResponse(client.api.admin['user-admin']['reset-password'].$post(args, options))
    },
  })
}

export function usePostApiAdminUserAdminResetPassword<
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
                ReturnType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserAdminResetPasswordMutationOptions<
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

export function getApiAdminUserAdminQueryKey() {
  return ['api', '/api/admin/user-admin'] as const
}

export function getApiAdminUserAdminQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserAdminQueryKey>
  >({
    queryKey: getApiAdminUserAdminQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['user-admin'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserAdminQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserAdminQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminUserAdminMutationKey() {
  return ['api', '/api/admin/user-admin', 'POST'] as const
}

export function getPostApiAdminUserAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUserAdminMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin)['user-admin']['$post']>) {
      return parseResponse(client.api.admin['user-admin'].$post(args, options))
    },
  })
}

export function usePostApiAdminUserAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['user-admin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminUserAdminMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminUserAdminSearchQueryKey(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
) {
  return ['api', '/api/admin/user-admin/search', args] as const
}

export function getApiAdminUserAdminSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserAdminSearchQueryKey>
  >({
    queryKey: getApiAdminUserAdminSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['user-admin'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserAdminSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminSearchQueryKey>
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
      ...getApiAdminUserAdminSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminUserAdminSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminSearchQueryKey>
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
      ...getApiAdminUserAdminSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminUserAdminAccessQueryKey() {
  return ['api', '/api/admin/user-admin/access'] as const
}

export function getApiAdminUserAdminAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserAdminAccessQueryKey>
  >({
    queryKey: getApiAdminUserAdminAccessQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['user-admin'].access.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserAdminAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserAdminAccessQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserAdminAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserAdminAccessQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminUserAdminAdminCountQueryKey() {
  return ['api', '/api/admin/user-admin/admin-count'] as const
}

export function getApiAdminUserAdminAdminCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserAdminAdminCountQueryKey>
  >({
    queryKey: getApiAdminUserAdminAdminCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['user-admin']['admin-count'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserAdminAdminCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminAdminCountQueryKey>
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
      ...getApiAdminUserAdminAdminCountQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminUserAdminAdminCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminAdminCountQueryKey>
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
      ...getApiAdminUserAdminAdminCountQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminUserAdminIdQueryKey(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
) {
  return ['api', '/api/admin/user-admin/:id', args] as const
}

export function getApiAdminUserAdminIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminUserAdminIdQueryKey>
  >({
    queryKey: getApiAdminUserAdminIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['user-admin'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminUserAdminId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminUserAdminIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminUserAdminId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminUserAdminIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminUserAdminIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiAdminUserAdminIdMutationKey() {
  return ['api', '/api/admin/user-admin/:id', 'PUT'] as const
}

export function getPutApiAdminUserAdminIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminUserAdminIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$put']>,
    ) {
      return parseResponse(client.api.admin['user-admin'][':id'].$put(args, options))
    },
  })
}

export function usePutApiAdminUserAdminId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminUserAdminIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminUserAdminIdMutationKey() {
  return ['api', '/api/admin/user-admin/:id', 'DELETE'] as const
}

export function getDeleteApiAdminUserAdminIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminUserAdminIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$delete']>,
    ) {
      return parseResponse(client.api.admin['user-admin'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminUserAdminId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminUserAdminIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminUserAdminScimUsersMutationKey() {
  return ['api', '/api/admin/user-admin/scim-users', 'DELETE'] as const
}

export function getDeleteApiAdminUserAdminScimUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['scim-users']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminUserAdminScimUsersMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.admin['user-admin']['scim-users'].$delete(undefined, options))
    },
  })
}

export function useDeleteApiAdminUserAdminScimUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['user-admin']['scim-users']['$delete']>>
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
  const mutationDefaults = getDeleteApiAdminUserAdminScimUsersMutationOptions<
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

export function getPostApiAdminFeedbackMutationKey() {
  return ['api', '/api/admin/feedback', 'POST'] as const
}

export function getPostApiAdminFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.feedback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.feedback.$post>) {
      return parseResponse(client.api.admin.feedback.$post(args, options))
    },
  })
}

export function usePostApiAdminFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.feedback.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiAdminFeedbackIdMutationKey() {
  return ['api', '/api/admin/feedback/:id', 'PUT'] as const
}

export function getPutApiAdminFeedbackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.feedback)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.feedback)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminFeedbackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin.feedback)[':id']['$put']>) {
      return parseResponse(client.api.admin.feedback[':id'].$put(args, options))
    },
  })
}

export function usePutApiAdminFeedbackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.feedback)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.feedback)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminFeedbackIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminProjectsProjectIdOverviewQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/overview', args] as const
}

export function getApiAdminProjectsProjectIdOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdOverviewQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdOverviewQueryKey>
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
      ...getApiAdminProjectsProjectIdOverviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdOverviewQueryKey>
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
      ...getApiAdminProjectsProjectIdOverviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdDoraQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/dora', args] as const
}

export function getApiAdminProjectsProjectIdDoraQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdDoraQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdDoraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].dora.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdDora<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdDoraQueryKey>
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
      ...getApiAdminProjectsProjectIdDoraQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdDora<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdDoraQueryKey>
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
      ...getApiAdminProjectsProjectIdDoraQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/applications', args] as const
}

export function getApiAdminProjectsProjectIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdApplicationsQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdApplicationsQueryKey>
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
      ...getApiAdminProjectsProjectIdApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdApplicationsQueryKey>
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
      ...getApiAdminProjectsProjectIdApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdFlagCreatorsQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/flag-creators', args] as const
}

export function getApiAdminProjectsProjectIdFlagCreatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdFlagCreatorsQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdFlagCreatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId']['flag-creators'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFlagCreators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFlagCreatorsQueryKey>
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
      ...getApiAdminProjectsProjectIdFlagCreatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFlagCreators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFlagCreatorsQueryKey>
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
      ...getApiAdminProjectsProjectIdFlagCreatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdSdksOutdatedQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/sdks/outdated', args] as const
}

export function getApiAdminProjectsProjectIdSdksOutdatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdSdksOutdatedQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdSdksOutdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].sdks.outdated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdSdksOutdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdSdksOutdatedQueryKey>
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
      ...getApiAdminProjectsProjectIdSdksOutdatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdSdksOutdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdSdksOutdatedQueryKey>
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
      ...getApiAdminProjectsProjectIdSdksOutdatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment',
    args,
  ] as const
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryKey
    >
  >({
    queryKey: getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/off',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].off.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOff<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/on',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].on.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOn<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnMutationOptions<
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

export function getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/bulk_features/environments/:environment/on',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].bulk_features.environments[':environment'].on.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOn<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnMutationOptions<
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

export function getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/bulk_features/environments/:environment/off',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].bulk_features.environments[
          ':environment'
        ].off.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOff<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffMutationOptions<
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

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies',
    args,
  ] as const
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryKey
    >
  >({
    queryKey:
      getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesMutationOptions<
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

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    args,
  ] as const
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryKey
    >
  >({
    queryKey:
      getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies[':strategyId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    'PUT',
  ] as const
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies[':strategyId'].$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    'DELETE',
  ] as const
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies[':strategyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationOptions<
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

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    'PATCH',
  ] as const
}

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies[':strategyId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/set-sort-order',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].strategies['set-sort-order'].$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrder<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderMutationOptions<
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

export function getApiAdminProjectsProjectIdFeaturesQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/features', args] as const
}

export function getApiAdminProjectsProjectIdFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdFeaturesQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdFeaturesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].features.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeatures<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdFeaturesMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameCloneMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/clone', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesFeatureNameCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].clone.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameClone<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdFeaturesFeatureNameCloneMutationOptions<
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

export function getApiAdminProjectsProjectIdFeaturesFeatureNameQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', args] as const
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdFeaturesFeatureNameQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdFeaturesFeatureNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesFeatureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesFeatureNameQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesFeatureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesFeatureNameQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureName<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdFeaturesFeatureNameMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureName<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameMutationOptions<
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

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', 'PATCH'] as const
}

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAdminProjectsProjectIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiAdminProjectsProjectIdFeaturesFeatureName<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiAdminProjectsProjectIdFeaturesFeatureNameMutationOptions<
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

export function getPostApiAdminProjectsProjectIdStaleMutationKey() {
  return ['api', '/api/admin/projects/:projectId/stale', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdStaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdStaleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].stale.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdStale<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdStaleMutationOptions<
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

export function getPutApiAdminProjectsProjectIdTagsMutationKey() {
  return ['api', '/api/admin/projects/:projectId/tags', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].tags.$put(args, options))
    },
  })
}

export function usePutApiAdminProjectsProjectIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdTagsMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesChildDependenciesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:child/dependencies', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesChildDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesChildDependenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':child'].dependencies.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesChildDependencies<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdFeaturesChildDependenciesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:child/dependencies', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':child'].dependencies.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFeaturesChildDependencies<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:child/dependencies/:parent',
    'DELETE',
  ] as const
}

export function getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':child'].dependencies[':parent'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParent<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentMutationOptions<
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

export function getApiAdminProjectsProjectIdFeaturesChildParentsQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:child/parents', args] as const
}

export function getApiAdminProjectsProjectIdFeaturesChildParentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdFeaturesChildParentsQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdFeaturesChildParentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':child'].parents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesChildParents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesChildParentsQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesChildParentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesChildParents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesChildParentsQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesChildParentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:parent/parent-variants', args] as const
}

export function getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':parent']['parent-variants'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesParentParentVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesParentParentVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesParentParentVariantsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdDependenciesQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/dependencies', args] as const
}

export function getApiAdminProjectsProjectIdDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdDependenciesQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdDependenciesQueryKey>
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
      ...getApiAdminProjectsProjectIdDependenciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdDependenciesQueryKey>
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
      ...getApiAdminProjectsProjectIdDependenciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdEnvironmentsMutationKey() {
  return ['api', '/api/admin/projects/:projectId/environments', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['environments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['environments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].environments.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdEnvironments<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['environments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['environments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdEnvironmentsMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdEnvironmentsEnvironmentMutationKey() {
  return ['api', '/api/admin/projects/:projectId/environments/:environment', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdEnvironmentsEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdEnvironmentsEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].environments[':environment'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdEnvironmentsEnvironment<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdEnvironmentsEnvironmentMutationOptions<
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

export function getPostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/environments/:environment/default-strategy',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].environments[':environment'][
          'default-strategy'
        ].$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategy<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyMutationOptions<
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

export function getApiAdminProjectsProjectIdHealthReportQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/health-report', args] as const
}

export function getApiAdminProjectsProjectIdHealthReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdHealthReportQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdHealthReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId']['health-report'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdHealthReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['health-report']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdHealthReportQueryKey>
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
      ...getApiAdminProjectsProjectIdHealthReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdHealthReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['health-report']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdHealthReportQueryKey>
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
      ...getApiAdminProjectsProjectIdHealthReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants',
    args,
  ] as const
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryKey
    >
  >({
    queryKey:
      getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].variants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryKey
        >
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants',
    'PUT',
  ] as const
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].variants.$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationOptions<
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

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants',
    'PATCH',
  ] as const
}

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].environments[
          ':environment'
        ].variants.$patch(args, options),
      )
    },
  })
}

export function usePatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsMutationOptions<
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

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/variants-batch',
    'PUT',
  ] as const
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName']['variants-batch'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatch<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchMutationOptions<
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

export function getApiAdminProjectsProjectIdApiTokensQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/api-tokens', args] as const
}

export function getApiAdminProjectsProjectIdApiTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdApiTokensQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdApiTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId']['api-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdApiTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdApiTokensQueryKey>
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
      ...getApiAdminProjectsProjectIdApiTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdApiTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdApiTokensQueryKey>
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
      ...getApiAdminProjectsProjectIdApiTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdApiTokensMutationKey() {
  return ['api', '/api/admin/projects/:projectId/api-tokens', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdApiTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdApiTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId']['api-tokens'].$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdApiTokens<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdApiTokensMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdApiTokensTokenMutationKey() {
  return ['api', '/api/admin/projects/:projectId/api-tokens/:token', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdApiTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdApiTokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId']['api-tokens'][':token'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdApiTokensToken<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdApiTokensTokenMutationOptions<
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

export function getPostApiAdminProjectsProjectIdDeleteMutationKey() {
  return ['api', '/api/admin/projects/:projectId/delete', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].delete.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdDelete<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdDeleteMutationOptions<
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

export function getPostApiAdminProjectsProjectIdReviveMutationKey() {
  return ['api', '/api/admin/projects/:projectId/revive', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdReviveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdReviveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].revive.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdRevive<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdReviveMutationOptions<
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

export function getPostApiAdminProjectsProjectIdArchiveValidateMutationKey() {
  return ['api', '/api/admin/projects/:projectId/archive/validate', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdArchiveValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdArchiveValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].archive.validate.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdArchiveValidate<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdArchiveValidateMutationOptions<
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

export function getPostApiAdminProjectsProjectIdArchiveMutationKey() {
  return ['api', '/api/admin/projects/:projectId/archive', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].archive.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdArchive<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdArchiveMutationOptions<
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

export function getApiAdminProjectsProjectIdInsightsQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/insights', args] as const
}

export function getApiAdminProjectsProjectIdInsightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdInsightsQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].insights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdInsightsQueryKey>
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
      ...getApiAdminProjectsProjectIdInsightsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdInsightsQueryKey>
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
      ...getApiAdminProjectsProjectIdInsightsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdStatusQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/status', args] as const
}

export function getApiAdminProjectsProjectIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdStatusQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdStatusQueryKey>
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
      ...getApiAdminProjectsProjectIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdStatusQueryKey>
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
      ...getApiAdminProjectsProjectIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/lifecycle', args] as const
}

export function getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdFeaturesFeatureNameLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdFeaturesFeatureNameLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryKey>
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
      ...getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/lifecycle/complete',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.complete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleComplete<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/lifecycle/uncomplete',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.uncomplete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncomplete<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLinkMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/link', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesFeatureNameLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].link.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdFeaturesFeatureNameLinkMutationOptions<
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

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/link/:linkId',
    'PUT',
  ] as const
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].link[':linkId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/link/:linkId',
    'DELETE',
  ] as const
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].link[':linkId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdMutationOptions<
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

export function getApiAdminProjectsProjectIdContextQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/context', args] as const
}

export function getApiAdminProjectsProjectIdContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdContextQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdContextQueryKey>
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
      ...getApiAdminProjectsProjectIdContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdContextQueryKey>
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
      ...getApiAdminProjectsProjectIdContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdContextMutationKey() {
  return ['api', '/api/admin/projects/:projectId/context', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdContextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].context.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdContext<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdContextMutationOptions<
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

export function getApiAdminProjectsProjectIdContextContextFieldQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/context/:contextField', args] as const
}

export function getApiAdminProjectsProjectIdContextContextFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdContextContextFieldQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdContextContextFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context[':contextField'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdContextContextField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdContextContextFieldQueryKey>
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
      ...getApiAdminProjectsProjectIdContextContextFieldQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdContextContextField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdContextContextFieldQueryKey>
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
      ...getApiAdminProjectsProjectIdContextContextFieldQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminProjectsProjectIdContextContextFieldMutationKey() {
  return ['api', '/api/admin/projects/:projectId/context/:contextField', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdContextContextFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdContextContextFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context[':contextField'].$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdContextContextField<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdContextContextFieldMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdContextContextFieldMutationKey() {
  return ['api', '/api/admin/projects/:projectId/context/:contextField', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdContextContextFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdContextContextFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context[':contextField'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdContextContextField<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdContextContextFieldMutationOptions<
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

export function getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/context/:contextField/strategies', args] as const
}

export function getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context[':contextField'].strategies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdContextContextFieldStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryKey>
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
      ...getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdContextContextFieldStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryKey>
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
      ...getApiAdminProjectsProjectIdContextContextFieldStrategiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdContextContextFieldLegalValuesMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/context/:contextField/legal-values',
    'POST',
  ] as const
}

export function getPostApiAdminProjectsProjectIdContextContextFieldLegalValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdContextContextFieldLegalValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context[':contextField']['legal-values'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdContextContextFieldLegalValues<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdContextContextFieldLegalValuesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/context/:contextField/legal-values/:legalValue',
    'DELETE',
  ] as const
}

export function getDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context[':contextField']['legal-values'][
          ':legalValue'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValue<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueMutationOptions<
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

export function getPostApiAdminProjectsProjectIdContextValidateMutationKey() {
  return ['api', '/api/admin/projects/:projectId/context/validate', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdContextValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdContextValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].context.validate.$post(args, options),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdContextValidate<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdContextValidateMutationOptions<
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

export function getApiAdminProjectsProjectIdAddonsQueryKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/addons', args] as const
}

export function getApiAdminProjectsProjectIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminProjectsProjectIdAddonsQueryKey>
  >({
    queryKey: getApiAdminProjectsProjectIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.projects[':projectId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminProjectsProjectIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdAddonsQueryKey>
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
      ...getApiAdminProjectsProjectIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminProjectsProjectIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminProjectsProjectIdAddonsQueryKey>
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
      ...getApiAdminProjectsProjectIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdAddonsMutationKey() {
  return ['api', '/api/admin/projects/:projectId/addons', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].addons.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdAddons<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdAddonsMutationOptions<
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

export function getPutApiAdminProjectsProjectIdAddonsIdMutationKey() {
  return ['api', '/api/admin/projects/:projectId/addons/:id', 'PUT'] as const
}

export function getPutApiAdminProjectsProjectIdAddonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminProjectsProjectIdAddonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].addons[':id'].$put(args, options),
      )
    },
  })
}

export function usePutApiAdminProjectsProjectIdAddonsId<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminProjectsProjectIdAddonsIdMutationOptions<
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

export function getApiAdminLifecycleCountQueryKey() {
  return ['api', '/api/admin/lifecycle/count'] as const
}

export function getApiAdminLifecycleCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminLifecycleCountQueryKey>
  >({
    queryKey: getApiAdminLifecycleCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.lifecycle.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminLifecycleCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminLifecycleCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminLifecycleCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminLifecycleCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminLifecycleCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminLifecycleCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminPersonalDashboardQueryKey() {
  return ['api', '/api/admin/personal-dashboard'] as const
}

export function getApiAdminPersonalDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminPersonalDashboardQueryKey>
  >({
    queryKey: getApiAdminPersonalDashboardQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['personal-dashboard'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminPersonalDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminPersonalDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminPersonalDashboardQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminPersonalDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminPersonalDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminPersonalDashboardQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminPersonalDashboardProjectIdQueryKey(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
) {
  return ['api', '/api/admin/personal-dashboard/:projectId', args] as const
}

export function getApiAdminPersonalDashboardProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminPersonalDashboardProjectIdQueryKey>
  >({
    queryKey: getApiAdminPersonalDashboardProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['personal-dashboard'][':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminPersonalDashboardProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminPersonalDashboardProjectIdQueryKey>
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
      ...getApiAdminPersonalDashboardProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminPersonalDashboardProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminPersonalDashboardProjectIdQueryKey>
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
      ...getApiAdminPersonalDashboardProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminEnvironmentsQueryKey() {
  return ['api', '/api/admin/environments'] as const
}

export function getApiAdminEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminEnvironmentsQueryKey>
  >({
    queryKey: getApiAdminEnvironmentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.environments.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminEnvironmentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminEnvironmentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminEnvironmentsNameQueryKey(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
) {
  return ['api', '/api/admin/environments/:name', args] as const
}

export function getApiAdminEnvironmentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminEnvironmentsNameQueryKey>
  >({
    queryKey: getApiAdminEnvironmentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.environments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminEnvironmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEnvironmentsNameQueryKey>
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
      ...getApiAdminEnvironmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminEnvironmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEnvironmentsNameQueryKey>
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
      ...getApiAdminEnvironmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminEnvironmentsProjectProjectIdQueryKey(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
) {
  return ['api', '/api/admin/environments/project/:projectId', args] as const
}

export function getApiAdminEnvironmentsProjectProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminEnvironmentsProjectProjectIdQueryKey>
  >({
    queryKey: getApiAdminEnvironmentsProjectProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.environments.project[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminEnvironmentsProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEnvironmentsProjectProjectIdQueryKey>
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
      ...getApiAdminEnvironmentsProjectProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminEnvironmentsProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminEnvironmentsProjectProjectIdQueryKey>
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
      ...getApiAdminEnvironmentsProjectProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminEnvironmentsSortOrderMutationKey() {
  return ['api', '/api/admin/environments/sort-order', 'PUT'] as const
}

export function getPutApiAdminEnvironmentsSortOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.environments)['sort-order']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.environments)['sort-order']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminEnvironmentsSortOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.environments)['sort-order']['$put']>,
    ) {
      return parseResponse(client.api.admin.environments['sort-order'].$put(args, options))
    },
  })
}

export function usePutApiAdminEnvironmentsSortOrder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.environments)['sort-order']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.environments)['sort-order']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminEnvironmentsSortOrderMutationOptions<
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

export function getPostApiAdminEnvironmentsNameOnMutationKey() {
  return ['api', '/api/admin/environments/:name/on', 'POST'] as const
}

export function getPostApiAdminEnvironmentsNameOnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['on']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.admin.environments)[':name']['on']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminEnvironmentsNameOnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.environments)[':name']['on']['$post']>,
    ) {
      return parseResponse(client.api.admin.environments[':name'].on.$post(args, options))
    },
  })
}

export function usePostApiAdminEnvironmentsNameOn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['on']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.admin.environments)[':name']['on']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminEnvironmentsNameOnMutationOptions<
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

export function getPostApiAdminEnvironmentsNameOffMutationKey() {
  return ['api', '/api/admin/environments/:name/off', 'POST'] as const
}

export function getPostApiAdminEnvironmentsNameOffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['off']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.admin.environments)[':name']['off']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminEnvironmentsNameOffMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin.environments)[':name']['off']['$post']>,
    ) {
      return parseResponse(client.api.admin.environments[':name'].off.$post(args, options))
    },
  })
}

export function usePostApiAdminEnvironmentsNameOff<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['off']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.admin.environments)[':name']['off']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminEnvironmentsNameOffMutationOptions<
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

export function getPostApiAdminSplashIdMutationKey() {
  return ['api', '/api/admin/splash/:id', 'POST'] as const
}

export function getPostApiAdminSplashIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.splash)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.splash)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminSplashIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin.splash)[':id']['$post']>) {
      return parseResponse(client.api.admin.splash[':id'].$post(args, options))
    },
  })
}

export function usePostApiAdminSplashId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.splash)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.splash)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminSplashIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAdminConstraintsValidateMutationKey() {
  return ['api', '/api/admin/constraints/validate', 'POST'] as const
}

export function getPostApiAdminConstraintsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.constraints.validate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.admin.constraints.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminConstraintsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.constraints.validate.$post>) {
      return parseResponse(client.api.admin.constraints.validate.$post(args, options))
    },
  })
}

export function usePostApiAdminConstraintsValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.admin.constraints.validate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.admin.constraints.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminConstraintsValidateMutationOptions<
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

export function getApiAdminInviteLinkTokensQueryKey() {
  return ['api', '/api/admin/invite-link/tokens'] as const
}

export function getApiAdminInviteLinkTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminInviteLinkTokensQueryKey>
  >({
    queryKey: getApiAdminInviteLinkTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['invite-link'].tokens.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminInviteLinkTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInviteLinkTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminInviteLinkTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminInviteLinkTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInviteLinkTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminInviteLinkTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminInviteLinkTokensMutationKey() {
  return ['api', '/api/admin/invite-link/tokens', 'POST'] as const
}

export function getPostApiAdminInviteLinkTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['invite-link']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminInviteLinkTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens']['$post']>,
    ) {
      return parseResponse(client.api.admin['invite-link'].tokens.$post(args, options))
    },
  })
}

export function usePostApiAdminInviteLinkTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['invite-link']['tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminInviteLinkTokensMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminInviteLinkTokensTokenQueryKey(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
) {
  return ['api', '/api/admin/invite-link/tokens/:token', args] as const
}

export function getApiAdminInviteLinkTokensTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminInviteLinkTokensTokenQueryKey>
  >({
    queryKey: getApiAdminInviteLinkTokensTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['invite-link'].tokens[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminInviteLinkTokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInviteLinkTokensTokenQueryKey>
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
      ...getApiAdminInviteLinkTokensTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminInviteLinkTokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInviteLinkTokensTokenQueryKey>
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
      ...getApiAdminInviteLinkTokensTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiAdminInviteLinkTokensTokenMutationKey() {
  return ['api', '/api/admin/invite-link/tokens/:token', 'PUT'] as const
}

export function getPutApiAdminInviteLinkTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminInviteLinkTokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>,
    ) {
      return parseResponse(client.api.admin['invite-link'].tokens[':token'].$put(args, options))
    },
  })
}

export function usePutApiAdminInviteLinkTokensToken<
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
                ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminInviteLinkTokensTokenMutationOptions<
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

export function getApiAdminInstanceAdminStatisticsCsvQueryKey() {
  return ['api', '/api/admin/instance-admin/statistics/csv'] as const
}

export function getApiAdminInstanceAdminStatisticsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminInstanceAdminStatisticsCsvQueryKey>
  >({
    queryKey: getApiAdminInstanceAdminStatisticsCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['instance-admin'].statistics.csv.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminInstanceAdminStatisticsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
        >
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
              Awaited<
                ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInstanceAdminStatisticsCsvQueryKey>
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
      ...getApiAdminInstanceAdminStatisticsCsvQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminInstanceAdminStatisticsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
        >
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
              Awaited<
                ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInstanceAdminStatisticsCsvQueryKey>
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
      ...getApiAdminInstanceAdminStatisticsCsvQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminInstanceAdminStatisticsQueryKey() {
  return ['api', '/api/admin/instance-admin/statistics'] as const
}

export function getApiAdminInstanceAdminStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminInstanceAdminStatisticsQueryKey>
  >({
    queryKey: getApiAdminInstanceAdminStatisticsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['instance-admin'].statistics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminInstanceAdminStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInstanceAdminStatisticsQueryKey>
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
      ...getApiAdminInstanceAdminStatisticsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminInstanceAdminStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
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
              Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminInstanceAdminStatisticsQueryKey>
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
      ...getApiAdminInstanceAdminStatisticsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/favorites', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].favorites.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameFavorites<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/favorites',
    'DELETE',
  ] as const
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.admin.projects[':projectId'].features[':featureName'].favorites.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavorites<
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
                ReturnType<
                  (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesMutationOptions<
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

export function getPostApiAdminProjectsProjectIdFavoritesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/favorites', 'POST'] as const
}

export function getPostApiAdminProjectsProjectIdFavoritesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminProjectsProjectIdFavoritesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['favorites']['$post']
      >,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].favorites.$post(args, options))
    },
  })
}

export function usePostApiAdminProjectsProjectIdFavorites<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminProjectsProjectIdFavoritesMutationOptions<
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

export function getDeleteApiAdminProjectsProjectIdFavoritesMutationKey() {
  return ['api', '/api/admin/projects/:projectId/favorites', 'DELETE'] as const
}

export function getDeleteApiAdminProjectsProjectIdFavoritesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminProjectsProjectIdFavoritesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.admin.projects)[':projectId']['favorites']['$delete']
      >,
    ) {
      return parseResponse(client.api.admin.projects[':projectId'].favorites.$delete(args, options))
    },
  })
}

export function useDeleteApiAdminProjectsProjectIdFavorites<
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
                ReturnType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminProjectsProjectIdFavoritesMutationOptions<
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

export function getPostApiAdminSegmentsValidateMutationKey() {
  return ['api', '/api/admin/segments/validate', 'POST'] as const
}

export function getPostApiAdminSegmentsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.validate.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.admin.segments.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminSegmentsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.segments.validate.$post>) {
      return parseResponse(client.api.admin.segments.validate.$post(args, options))
    },
  })
}

export function usePostApiAdminSegmentsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.admin.segments.validate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.admin.segments.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminSegmentsValidateMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminSegmentsStrategiesStrategyIdQueryKey(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
) {
  return ['api', '/api/admin/segments/strategies/:strategyId', args] as const
}

export function getApiAdminSegmentsStrategiesStrategyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminSegmentsStrategiesStrategyIdQueryKey>
  >({
    queryKey: getApiAdminSegmentsStrategiesStrategyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.segments.strategies[':strategyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminSegmentsStrategiesStrategyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsStrategiesStrategyIdQueryKey>
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
      ...getApiAdminSegmentsStrategiesStrategyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminSegmentsStrategiesStrategyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsStrategiesStrategyIdQueryKey>
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
      ...getApiAdminSegmentsStrategiesStrategyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiAdminSegmentsStrategiesMutationKey() {
  return ['api', '/api/admin/segments/strategies', 'POST'] as const
}

export function getPostApiAdminSegmentsStrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.strategies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.admin.segments.strategies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminSegmentsStrategiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.segments.strategies.$post>) {
      return parseResponse(client.api.admin.segments.strategies.$post(args, options))
    },
  })
}

export function usePostApiAdminSegmentsStrategies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.admin.segments.strategies.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.segments.strategies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminSegmentsStrategiesMutationOptions<
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

export function getApiAdminSegmentsIdStrategiesQueryKey(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
) {
  return ['api', '/api/admin/segments/:id/strategies', args] as const
}

export function getApiAdminSegmentsIdStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminSegmentsIdStrategiesQueryKey>
  >({
    queryKey: getApiAdminSegmentsIdStrategiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.segments[':id'].strategies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminSegmentsIdStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsIdStrategiesQueryKey>
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
      ...getApiAdminSegmentsIdStrategiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminSegmentsIdStrategies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsIdStrategiesQueryKey>
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
      ...getApiAdminSegmentsIdStrategiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminSegmentsIdQueryKey(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
) {
  return ['api', '/api/admin/segments/:id', args] as const
}

export function getApiAdminSegmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminSegmentsIdQueryKey>
  >({
    queryKey: getApiAdminSegmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.segments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminSegmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminSegmentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminSegmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminSegmentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiAdminSegmentsIdMutationKey() {
  return ['api', '/api/admin/segments/:id', 'PUT'] as const
}

export function getPutApiAdminSegmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.admin.segments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAdminSegmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin.segments)[':id']['$put']>) {
      return parseResponse(client.api.admin.segments[':id'].$put(args, options))
    },
  })
}

export function usePutApiAdminSegmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.admin.segments)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAdminSegmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAdminSegmentsIdMutationKey() {
  return ['api', '/api/admin/segments/:id', 'DELETE'] as const
}

export function getDeleteApiAdminSegmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.admin.segments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAdminSegmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.admin.segments)[':id']['$delete']>) {
      return parseResponse(client.api.admin.segments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAdminSegmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.admin.segments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAdminSegmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminSegmentsQueryKey() {
  return ['api', '/api/admin/segments'] as const
}

export function getApiAdminSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminSegmentsQueryKey>
  >({
    queryKey: getApiAdminSegmentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.segments.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminSegmentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminSegmentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminSegmentsMutationKey() {
  return ['api', '/api/admin/segments', 'POST'] as const
}

export function getPostApiAdminSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.segments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminSegmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.segments.$post>) {
      return parseResponse(client.api.admin.segments.$post(args, options))
    },
  })
}

export function usePostApiAdminSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.admin.segments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminSegmentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminMaintenanceQueryKey() {
  return ['api', '/api/admin/maintenance'] as const
}

export function getApiAdminMaintenanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminMaintenanceQueryKey>
  >({
    queryKey: getApiAdminMaintenanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.maintenance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMaintenanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminMaintenanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminMaintenanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminMaintenanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminMaintenanceMutationKey() {
  return ['api', '/api/admin/maintenance', 'POST'] as const
}

export function getPostApiAdminMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.admin.maintenance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminMaintenanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.maintenance.$post>) {
      return parseResponse(client.api.admin.maintenance.$post(args, options))
    },
  })
}

export function usePostApiAdminMaintenance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.admin.maintenance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminMaintenanceMutationOptions<TError, TOnMutateResult>(
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

export function getApiAdminTelemetrySettingsQueryKey() {
  return ['api', '/api/admin/telemetry/settings'] as const
}

export function getApiAdminTelemetrySettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminTelemetrySettingsQueryKey>
  >({
    queryKey: getApiAdminTelemetrySettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.telemetry.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminTelemetrySettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
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
              Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTelemetrySettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminTelemetrySettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminTelemetrySettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
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
              Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminTelemetrySettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminTelemetrySettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminSearchFeaturesQueryKey(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
) {
  return ['api', '/api/admin/search/features', args] as const
}

export function getApiAdminSearchFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminSearchFeaturesQueryKey>
  >({
    queryKey: getApiAdminSearchFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.search.features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminSearchFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSearchFeaturesQueryKey>
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
      ...getApiAdminSearchFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAdminSearchFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSearchFeaturesQueryKey>
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
      ...getApiAdminSearchFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAdminSearchEventsQueryKey(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
) {
  return ['api', '/api/admin/search/events', args] as const
}

export function getApiAdminSearchEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminSearchEventsQueryKey>
  >({
    queryKey: getApiAdminSearchEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin.search.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminSearchEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSearchEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminSearchEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminSearchEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminSearchEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminSearchEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAdminFlagCreatorsQueryKey(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
) {
  return ['api', '/api/admin/flag-creators', args] as const
}

export function getApiAdminFlagCreatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdminFlagCreatorsQueryKey>
  >({
    queryKey: getApiAdminFlagCreatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.admin['flag-creators'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAdminFlagCreators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminFlagCreatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAdminFlagCreatorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAdminFlagCreators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdminFlagCreatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAdminFlagCreatorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiAdminRecordUiErrorMutationKey() {
  return ['api', '/api/admin/record-ui-error', 'POST'] as const
}

export function getPostApiAdminRecordUiErrorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['record-ui-error']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.admin)['record-ui-error']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminRecordUiErrorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.admin)['record-ui-error']['$post']>,
    ) {
      return parseResponse(client.api.admin['record-ui-error'].$post(args, options))
    },
  })
}

export function usePostApiAdminRecordUiError<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.admin)['record-ui-error']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.admin)['record-ui-error']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAdminRecordUiErrorMutationOptions<TError, TOnMutateResult>(
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

export function getApiClientFeaturesFeatureNameQueryKey(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
) {
  return ['api', '/api/client/features/:featureName', args] as const
}

export function getApiClientFeaturesFeatureNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientFeaturesFeatureNameQueryKey>
  >({
    queryKey: getApiClientFeaturesFeatureNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.features[':featureName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClientFeaturesFeatureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientFeaturesFeatureNameQueryKey>
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
      ...getApiClientFeaturesFeatureNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClientFeaturesFeatureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientFeaturesFeatureNameQueryKey>
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
      ...getApiClientFeaturesFeatureNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClientFeaturesQueryKey() {
  return ['api', '/api/client/features'] as const
}

export function getApiClientFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientFeaturesQueryKey>
  >({
    queryKey: getApiClientFeaturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.features.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClientFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiClientFeaturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiClientFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiClientFeaturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiClientMetricsMutationKey() {
  return ['api', '/api/client/metrics', 'POST'] as const
}

export function getPostApiClientMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.client.metrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.metrics.$post>) {
      return parseResponse(client.api.client.metrics.$post(args, options))
    },
  })
}

export function usePostApiClientMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.client.metrics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiClientMetricsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiClientMetricsBulkMutationKey() {
  return ['api', '/api/client/metrics/bulk', 'POST'] as const
}

export function getPostApiClientMetricsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.client.metrics.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientMetricsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.metrics.bulk.$post>) {
      return parseResponse(client.api.client.metrics.bulk.$post(args, options))
    },
  })
}

export function usePostApiClientMetricsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.client.metrics.bulk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiClientMetricsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiClientRegisterMutationKey() {
  return ['api', '/api/client/register', 'POST'] as const
}

export function getPostApiClientRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.client.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.register.$post>) {
      return parseResponse(client.api.client.register.$post(args, options))
    },
  })
}

export function usePostApiClientRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.client.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiClientRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getApiFrontendQueryKey() {
  return ['api', '/api/frontend'] as const
}

export function getApiFrontendQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiFrontendQueryKey>
  >({
    queryKey: getApiFrontendQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.frontend.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFrontend<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFrontendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFrontendQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFrontend<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFrontendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFrontendQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiFrontendMutationKey() {
  return ['api', '/api/frontend', 'POST'] as const
}

export function getPostApiFrontendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.frontend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFrontendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.frontend.$post>) {
      return parseResponse(client.api.frontend.$post(args, options))
    },
  })
}

export function usePostApiFrontend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.frontend.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFrontendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiFrontendClientMetricsMutationKey() {
  return ['api', '/api/frontend/client/metrics', 'POST'] as const
}

export function getPostApiFrontendClientMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.client.metrics.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.frontend.client.metrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFrontendClientMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.frontend.client.metrics.$post>) {
      return parseResponse(client.api.frontend.client.metrics.$post(args, options))
    },
  })
}

export function usePostApiFrontendClientMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.frontend.client.metrics.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.frontend.client.metrics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFrontendClientMetricsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiFrontendClientRegisterMutationKey() {
  return ['api', '/api/frontend/client/register', 'POST'] as const
}

export function getPostApiFrontendClientRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.client.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.frontend.client.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFrontendClientRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.frontend.client.register.$post>) {
      return parseResponse(client.api.frontend.client.register.$post(args, options))
    },
  })
}

export function usePostApiFrontendClientRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.frontend.client.register.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.frontend.client.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFrontendClientRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostEdgeValidateMutationKey() {
  return ['edge', '/edge/validate', 'POST'] as const
}

export function getPostEdgeValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge.validate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.edge.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge.validate.$post>) {
      return parseResponse(client.edge.validate.$post(args, options))
    },
  })
}

export function usePostEdgeValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge.validate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.edge.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEdgeValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostEdgeIssueTokenMutationKey() {
  return ['edge', '/edge/issue-token', 'POST'] as const
}

export function getPostEdgeIssueTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge)['issue-token']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.edge)['issue-token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeIssueTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge)['issue-token']['$post']>) {
      return parseResponse(client.edge['issue-token'].$post(args, options))
    },
  })
}

export function usePostEdgeIssueToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge)['issue-token']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.edge)['issue-token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEdgeIssueTokenMutationOptions<TError, TOnMutateResult>(
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
