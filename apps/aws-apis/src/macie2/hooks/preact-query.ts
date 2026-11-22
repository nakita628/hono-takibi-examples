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

export function getAdminKey() {
  return ['admin'] as const
}

export function getAdminAdminAccountIdKey() {
  return ['admin#adminAccountId'] as const
}

export function getAdministratorKey() {
  return ['administrator'] as const
}

export function getAllowListsKey() {
  return ['allow-lists'] as const
}

export function getAutomatedDiscoveryKey() {
  return ['automated-discovery'] as const
}

export function getClassificationExportConfigurationKey() {
  return ['classification-export-configuration'] as const
}

export function getClassificationScopesKey() {
  return ['classification-scopes'] as const
}

export function getCustomDataIdentifiersKey() {
  return ['custom-data-identifiers'] as const
}

export function getDatasourcesKey() {
  return ['datasources'] as const
}

export function getFindingsKey() {
  return ['findings'] as const
}

export function getFindingsPublicationConfigurationKey() {
  return ['findings-publication-configuration'] as const
}

export function getFindingsfiltersKey() {
  return ['findingsfilters'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getMacieKey() {
  return ['macie'] as const
}

export function getManagedDataIdentifiersKey() {
  return ['managed-data-identifiers'] as const
}

export function getMasterKey() {
  return ['master'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getResourceProfilesKey() {
  return ['resource-profiles'] as const
}

export function getResourceProfilesResourceArnKey() {
  return ['resource-profiles#resourceArn'] as const
}

export function getRevealConfigurationKey() {
  return ['reveal-configuration'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUsageKey() {
  return ['usage'] as const
}

export function getPostInvitationsAcceptMutationKey() {
  return ['invitations', '/invitations/accept', 'POST'] as const
}

export function getPostInvitationsAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.accept.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.accept.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsAcceptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.accept.$post>) {
      return parseResponse(client.invitations.accept.$post(args, options))
    },
  })
}

export function usePostInvitationsAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.accept.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitations.accept.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvitationsAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getPostCustomDataIdentifiersGetMutationKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/get', 'POST'] as const
}

export function getPostCustomDataIdentifiersGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['get']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-data-identifiers']['get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomDataIdentifiersGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-data-identifiers']['get']['$post']>,
    ) {
      return parseResponse(client['custom-data-identifiers'].get.$post(args, options))
    },
  })
}

export function usePostCustomDataIdentifiersGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers']['get']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-data-identifiers']['get']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomDataIdentifiersGetMutationOptions<TError, TOnMutateResult>(
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

export function getAllowListsQueryKey(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allow-lists', '/allow-lists', keyArgs] as const
}

export function getAllowListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['allow-lists']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAllowListsQueryKey>
  >({
    queryKey: getAllowListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['allow-lists'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAllowLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllowListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAllowListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAllowLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllowListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAllowListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAllowListsMutationKey() {
  return ['allow-lists', '/allow-lists', 'POST'] as const
}

export function getPostAllowListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['allow-lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAllowListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['allow-lists']['$post']>) {
      return parseResponse(client['allow-lists'].$post(args, options))
    },
  })
}

export function usePostAllowLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['allow-lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAllowListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCustomDataIdentifiersMutationKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers', 'POST'] as const
}

export function getPostCustomDataIdentifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-data-identifiers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomDataIdentifiersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['custom-data-identifiers']['$post']>) {
      return parseResponse(client['custom-data-identifiers'].$post(args, options))
    },
  })
}

export function usePostCustomDataIdentifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-data-identifiers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomDataIdentifiersMutationOptions<TError, TOnMutateResult>(
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

export function getFindingsfiltersQueryKey(
  args: InferRequestType<typeof client.findingsfilters.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingsfilters', '/findingsfilters', keyArgs] as const
}

export function getFindingsfiltersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.findingsfilters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindingsfiltersQueryKey>
  >({
    queryKey: getFindingsfiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findingsfilters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFindingsfilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findingsfilters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsfiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindingsfiltersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindingsfilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findingsfilters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsfiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindingsfiltersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFindingsfiltersMutationKey() {
  return ['findingsfilters', '/findingsfilters', 'POST'] as const
}

export function getPostFindingsfiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.findingsfilters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsfiltersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findingsfilters.$post>) {
      return parseResponse(client.findingsfilters.$post(args, options))
    },
  })
}

export function usePostFindingsfilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findingsfilters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindingsfiltersMutationOptions<TError, TOnMutateResult>(
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

export function getInvitationsQueryKey(args: InferRequestType<typeof client.invitations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations', keyArgs] as const
}

export function getInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >({
    queryKey: getInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInvitationsMutationKey() {
  return ['invitations', '/invitations', 'POST'] as const
}

export function getPostInvitationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>>,
    TError,
    InferRequestType<typeof client.invitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.$post>) {
      return parseResponse(client.invitations.$post(args, options))
    },
  })
}

export function usePostInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.invitations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvitationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMembersQueryKey(args: InferRequestType<typeof client.members.$get>) {
  const { header: _, ...keyArgs } = args
  return ['members', '/members', keyArgs] as const
}

export function getMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMembersQueryKey>
  >({
    queryKey: getMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.members.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.members.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMembersMutationKey() {
  return ['members', '/members', 'POST'] as const
}

export function getPostMembersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$post>>>>>,
    TError,
    InferRequestType<typeof client.members.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.members.$post>) {
      return parseResponse(client.members.$post(args, options))
    },
  })
}

export function usePostMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$post>>>>>,
        TError,
        InferRequestType<typeof client.members.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFindingsSampleMutationKey() {
  return ['findings', '/findings/sample', 'POST'] as const
}

export function getPostFindingsSampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.sample.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.findings.sample.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsSampleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.sample.$post>) {
      return parseResponse(client.findings.sample.$post(args, options))
    },
  })
}

export function usePostFindingsSample<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.sample.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findings.sample.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindingsSampleMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvitationsDeclineMutationKey() {
  return ['invitations', '/invitations/decline', 'POST'] as const
}

export function getPostInvitationsDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.decline.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.decline.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsDeclineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.decline.$post>) {
      return parseResponse(client.invitations.decline.$post(args, options))
    },
  })
}

export function usePostInvitationsDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.decline.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitations.decline.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvitationsDeclineMutationOptions<TError, TOnMutateResult>(
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

export function getAllowListsIdQueryKey(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allow-lists', '/allow-lists/:id', keyArgs] as const
}

export function getAllowListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAllowListsIdQueryKey>
  >({
    queryKey: getAllowListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['allow-lists'][':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAllowListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllowListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAllowListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAllowListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllowListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAllowListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAllowListsIdMutationKey() {
  return ['allow-lists', '/allow-lists/:id', 'PUT'] as const
}

export function getPutAllowListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['allow-lists'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAllowListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['allow-lists'][':id']['$put']>) {
      return parseResponse(client['allow-lists'][':id'].$put(args, options))
    },
  })
}

export function usePutAllowListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['allow-lists'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAllowListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAllowListsIdMutationKey() {
  return ['allow-lists', '/allow-lists/:id', 'DELETE'] as const
}

export function getDeleteAllowListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['allow-lists'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAllowListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['allow-lists'][':id']['$delete']>) {
      return parseResponse(client['allow-lists'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAllowListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['allow-lists'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAllowListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomDataIdentifiersIdQueryKey(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-data-identifiers', '/custom-data-identifiers/:id', keyArgs] as const
}

export function getCustomDataIdentifiersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomDataIdentifiersIdQueryKey>
  >({
    queryKey: getCustomDataIdentifiersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['custom-data-identifiers'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomDataIdentifiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomDataIdentifiersIdQueryKey>
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
      ...getCustomDataIdentifiersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomDataIdentifiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomDataIdentifiersIdQueryKey>
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
      ...getCustomDataIdentifiersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCustomDataIdentifiersIdMutationKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/:id', 'DELETE'] as const
}

export function getDeleteCustomDataIdentifiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomDataIdentifiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$delete']>,
    ) {
      return parseResponse(client['custom-data-identifiers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomDataIdentifiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCustomDataIdentifiersIdMutationOptions<TError, TOnMutateResult>(
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

export function getFindingsfiltersIdQueryKey(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingsfilters', '/findingsfilters/:id', keyArgs] as const
}

export function getFindingsfiltersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingsfiltersIdQueryKey>
  >({
    queryKey: getFindingsfiltersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findingsfilters[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFindingsfiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsfiltersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindingsfiltersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindingsfiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsfiltersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindingsfiltersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteFindingsfiltersIdMutationKey() {
  return ['findingsfilters', '/findingsfilters/:id', 'DELETE'] as const
}

export function getDeleteFindingsfiltersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.findingsfilters)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFindingsfiltersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.findingsfilters)[':id']['$delete']>) {
      return parseResponse(client.findingsfilters[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFindingsfiltersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.findingsfilters)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFindingsfiltersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchFindingsfiltersIdMutationKey() {
  return ['findingsfilters', '/findingsfilters/:id', 'PATCH'] as const
}

export function getPatchFindingsfiltersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.findingsfilters)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFindingsfiltersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.findingsfilters)[':id']['$patch']>) {
      return parseResponse(client.findingsfilters[':id'].$patch(args, options))
    },
  })
}

export function usePatchFindingsfiltersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.findingsfilters)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFindingsfiltersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvitationsDeleteMutationKey() {
  return ['invitations', '/invitations/delete', 'POST'] as const
}

export function getPostInvitationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.delete.$post>) {
      return parseResponse(client.invitations.delete.$post(args, options))
    },
  })
}

export function usePostInvitationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitations.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvitationsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['members', '/members/:id', keyArgs] as const
}

export function getMembersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.members)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdQueryKey>
  >({
    queryKey: getMembersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMembersIdMutationKey() {
  return ['members', '/members/:id', 'DELETE'] as const
}

export function getDeleteMembersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':id']['$delete']>) {
      return parseResponse(client.members[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDatasourcesS3MutationKey() {
  return ['datasources', '/datasources/s3', 'POST'] as const
}

export function getPostDatasourcesS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.s3.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.datasources.s3.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesS3MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasources.s3.$post>) {
      return parseResponse(client.datasources.s3.$post(args, options))
    },
  })
}

export function usePostDatasourcesS3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.s3.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datasources.s3.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesS3MutationOptions<TError, TOnMutateResult>(
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

export function getJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function getJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >({
    queryKey: getJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchJobsJobIdMutationKey() {
  return ['jobs', '/jobs/:jobId', 'PATCH'] as const
}

export function getPatchJobsJobIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchJobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['$patch']>) {
      return parseResponse(client.jobs[':jobId'].$patch(args, options))
    },
  })
}

export function usePatchJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchJobsJobIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminConfigurationQueryKey(
  args: InferRequestType<typeof client.admin.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin', '/admin/configuration', keyArgs] as const
}

export function getAdminConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.configuration.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConfigurationQueryKey>
  >({
    queryKey: getAdminConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.configuration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.configuration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.configuration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchAdminConfigurationMutationKey() {
  return ['admin', '/admin/configuration', 'PATCH'] as const
}

export function getPatchAdminConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.configuration.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.configuration.$patch>) {
      return parseResponse(client.admin.configuration.$patch(args, options))
    },
  })
}

export function usePatchAdminConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.configuration.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdminConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getMacieQueryKey(args: InferRequestType<typeof client.macie.$get>) {
  const { header: _, ...keyArgs } = args
  return ['macie', '/macie', keyArgs] as const
}

export function getMacieQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.macie.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacieQueryKey>
  >({
    queryKey: getMacieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMacie<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.macie.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMacieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMacie<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.macie.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMacieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMacieMutationKey() {
  return ['macie', '/macie', 'POST'] as const
}

export function getPostMacieMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$post>>>>>,
    TError,
    InferRequestType<typeof client.macie.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMacieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.macie.$post>) {
      return parseResponse(client.macie.$post(args, options))
    },
  })
}

export function usePostMacie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$post>>>>>,
        TError,
        InferRequestType<typeof client.macie.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMacieMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMacieMutationKey() {
  return ['macie', '/macie', 'DELETE'] as const
}

export function getDeleteMacieMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$delete>>>>>,
    TError,
    InferRequestType<typeof client.macie.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMacieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.macie.$delete>) {
      return parseResponse(client.macie.$delete(args, options))
    },
  })
}

export function useDeleteMacie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$delete>>>>>,
        TError,
        InferRequestType<typeof client.macie.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMacieMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMacieMutationKey() {
  return ['macie', '/macie', 'PATCH'] as const
}

export function getPatchMacieMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$patch>>>>>,
    TError,
    InferRequestType<typeof client.macie.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchMacieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.macie.$patch>) {
      return parseResponse(client.macie.$patch(args, options))
    },
  })
}

export function usePatchMacie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$patch>>>>>,
        TError,
        InferRequestType<typeof client.macie.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMacieMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAdminAdminAccountIdMutationKey() {
  return ['admin#adminAccountId', '/admin#adminAccountId', 'DELETE'] as const
}

export function getDeleteAdminAdminAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin#adminAccountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin#adminAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminAdminAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin#adminAccountId']['$delete']>) {
      return parseResponse(client['admin#adminAccountId'].$delete(args, options))
    },
  })
}

export function useDeleteAdminAdminAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['admin#adminAccountId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['admin#adminAccountId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminAdminAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdministratorDisassociateMutationKey() {
  return ['administrator', '/administrator/disassociate', 'POST'] as const
}

export function getPostAdministratorDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administrator.disassociate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administrator.disassociate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministratorDisassociateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administrator.disassociate.$post>) {
      return parseResponse(client.administrator.disassociate.$post(args, options))
    },
  })
}

export function usePostAdministratorDisassociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.administrator.disassociate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.administrator.disassociate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdministratorDisassociateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMasterDisassociateMutationKey() {
  return ['master', '/master/disassociate', 'POST'] as const
}

export function getPostMasterDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.disassociate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.master.disassociate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMasterDisassociateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.master.disassociate.$post>) {
      return parseResponse(client.master.disassociate.$post(args, options))
    },
  })
}

export function usePostMasterDisassociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.master.disassociate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.master.disassociate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMasterDisassociateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMembersDisassociateIdMutationKey() {
  return ['members', '/members/disassociate/:id', 'POST'] as const
}

export function getPostMembersDisassociateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members.disassociate)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members.disassociate)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersDisassociateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members.disassociate)[':id']['$post']>) {
      return parseResponse(client.members.disassociate[':id'].$post(args, options))
    },
  })
}

export function usePostMembersDisassociateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members.disassociate)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members.disassociate)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersDisassociateIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminQueryKey(args: InferRequestType<typeof client.admin.$get>) {
  const { header: _, ...keyArgs } = args
  return ['admin', '/admin', keyArgs] as const
}

export function getAdminQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminQueryKey>
  >({
    queryKey: getAdminQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdmin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdmin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminMutationKey() {
  return ['admin', '/admin', 'POST'] as const
}

export function getPostAdminMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.$post>) {
      return parseResponse(client.admin.$post(args, options))
    },
  })
}

export function usePostAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
        TError,
        InferRequestType<typeof client.admin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdministratorQueryKey(args: InferRequestType<typeof client.administrator.$get>) {
  const { header: _, ...keyArgs } = args
  return ['administrator', '/administrator', keyArgs] as const
}

export function getAdministratorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.administrator.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdministratorQueryKey>
  >({
    queryKey: getAdministratorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.administrator.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdministrator<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.administrator.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdministratorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdministratorQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdministrator<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.administrator.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdministratorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdministratorQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAutomatedDiscoveryConfigurationQueryKey(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automated-discovery', '/automated-discovery/configuration', keyArgs] as const
}

export function getAutomatedDiscoveryConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomatedDiscoveryConfigurationQueryKey>
  >({
    queryKey: getAutomatedDiscoveryConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['automated-discovery'].configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomatedDiscoveryConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomatedDiscoveryConfigurationQueryKey>
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
      ...getAutomatedDiscoveryConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomatedDiscoveryConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomatedDiscoveryConfigurationQueryKey>
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
      ...getAutomatedDiscoveryConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAutomatedDiscoveryConfigurationMutationKey() {
  return ['automated-discovery', '/automated-discovery/configuration', 'PUT'] as const
}

export function getPutAutomatedDiscoveryConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['automated-discovery']['configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomatedDiscoveryConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$put']>,
    ) {
      return parseResponse(client['automated-discovery'].configuration.$put(args, options))
    },
  })
}

export function usePutAutomatedDiscoveryConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['automated-discovery']['configuration']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomatedDiscoveryConfigurationMutationOptions<
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

export function getPostDatasourcesS3StatisticsMutationKey() {
  return ['datasources', '/datasources/s3/statistics', 'POST'] as const
}

export function getPostDatasourcesS3StatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datasources.s3.statistics.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.datasources.s3.statistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesS3StatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasources.s3.statistics.$post>) {
      return parseResponse(client.datasources.s3.statistics.$post(args, options))
    },
  })
}

export function usePostDatasourcesS3Statistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datasources.s3.statistics.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.datasources.s3.statistics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesS3StatisticsMutationOptions<TError, TOnMutateResult>(
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

export function getClassificationExportConfigurationQueryKey(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'classification-export-configuration',
    '/classification-export-configuration',
    keyArgs,
  ] as const
}

export function getClassificationExportConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationExportConfigurationQueryKey>
  >({
    queryKey: getClassificationExportConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['classification-export-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassificationExportConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationExportConfigurationQueryKey>
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
      ...getClassificationExportConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationExportConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationExportConfigurationQueryKey>
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
      ...getClassificationExportConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClassificationExportConfigurationMutationKey() {
  return [
    'classification-export-configuration',
    '/classification-export-configuration',
    'PUT',
  ] as const
}

export function getPutClassificationExportConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['classification-export-configuration']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['classification-export-configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClassificationExportConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['classification-export-configuration']['$put']>,
    ) {
      return parseResponse(client['classification-export-configuration'].$put(args, options))
    },
  })
}

export function usePutClassificationExportConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-export-configuration']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['classification-export-configuration']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClassificationExportConfigurationMutationOptions<
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

export function getClassificationScopesIdQueryKey(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classification-scopes', '/classification-scopes/:id', keyArgs] as const
}

export function getClassificationScopesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationScopesIdQueryKey>
  >({
    queryKey: getClassificationScopesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['classification-scopes'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassificationScopesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationScopesIdQueryKey>
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
      ...getClassificationScopesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassificationScopesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationScopesIdQueryKey>
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
      ...getClassificationScopesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchClassificationScopesIdMutationKey() {
  return ['classification-scopes', '/classification-scopes/:id', 'PATCH'] as const
}

export function getPatchClassificationScopesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['classification-scopes'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClassificationScopesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['classification-scopes'][':id']['$patch']>,
    ) {
      return parseResponse(client['classification-scopes'][':id'].$patch(args, options))
    },
  })
}

export function usePatchClassificationScopesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['classification-scopes'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClassificationScopesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostFindingsStatisticsMutationKey() {
  return ['findings', '/findings/statistics', 'POST'] as const
}

export function getPostFindingsStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.statistics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.findings.statistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsStatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.statistics.$post>) {
      return parseResponse(client.findings.statistics.$post(args, options))
    },
  })
}

export function usePostFindingsStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findings.statistics.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.findings.statistics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindingsStatisticsMutationOptions<TError, TOnMutateResult>(
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

export function getPostFindingsDescribeMutationKey() {
  return ['findings', '/findings/describe', 'POST'] as const
}

export function getPostFindingsDescribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.describe.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.findings.describe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsDescribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.describe.$post>) {
      return parseResponse(client.findings.describe.$post(args, options))
    },
  })
}

export function usePostFindingsDescribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findings.describe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.findings.describe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindingsDescribeMutationOptions<TError, TOnMutateResult>(
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

export function getFindingsPublicationConfigurationQueryKey(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'findings-publication-configuration',
    '/findings-publication-configuration',
    keyArgs,
  ] as const
}

export function getFindingsPublicationConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingsPublicationConfigurationQueryKey>
  >({
    queryKey: getFindingsPublicationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['findings-publication-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFindingsPublicationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsPublicationConfigurationQueryKey>
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
      ...getFindingsPublicationConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFindingsPublicationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsPublicationConfigurationQueryKey>
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
      ...getFindingsPublicationConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFindingsPublicationConfigurationMutationKey() {
  return [
    'findings-publication-configuration',
    '/findings-publication-configuration',
    'PUT',
  ] as const
}

export function getPutFindingsPublicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['findings-publication-configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFindingsPublicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['findings-publication-configuration']['$put']>,
    ) {
      return parseResponse(client['findings-publication-configuration'].$put(args, options))
    },
  })
}

export function usePutFindingsPublicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['findings-publication-configuration']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFindingsPublicationConfigurationMutationOptions<
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

export function getInvitationsCountQueryKey(
  args: InferRequestType<typeof client.invitations.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations/count', keyArgs] as const
}

export function getInvitationsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvitationsCountQueryKey>
  >({
    queryKey: getInvitationsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInvitationsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invitations.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInvitationsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInvitationsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invitations.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInvitationsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMasterQueryKey(args: InferRequestType<typeof client.master.$get>) {
  const { header: _, ...keyArgs } = args
  return ['master', '/master', keyArgs] as const
}

export function getMasterQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.master.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMasterQueryKey>
  >({
    queryKey: getMasterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMaster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMasterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMaster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMasterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getResourceProfilesResourceArnQueryKey(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-profiles#resourceArn', '/resource-profiles#resourceArn', keyArgs] as const
}

export function getResourceProfilesResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourceProfilesResourceArnQueryKey>
  >({
    queryKey: getResourceProfilesResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resource-profiles#resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourceProfilesResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceProfilesResourceArnQueryKey>
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
      ...getResourceProfilesResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourceProfilesResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceProfilesResourceArnQueryKey>
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
      ...getResourceProfilesResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchResourceProfilesResourceArnMutationKey() {
  return ['resource-profiles#resourceArn', '/resource-profiles#resourceArn', 'PATCH'] as const
}

export function getPatchResourceProfilesResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['resource-profiles#resourceArn']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourceProfilesResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$patch']>,
    ) {
      return parseResponse(client['resource-profiles#resourceArn'].$patch(args, options))
    },
  })
}

export function usePatchResourceProfilesResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['resource-profiles#resourceArn']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchResourceProfilesResourceArnMutationOptions<
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

export function getRevealConfigurationQueryKey(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reveal-configuration', '/reveal-configuration', keyArgs] as const
}

export function getRevealConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRevealConfigurationQueryKey>
  >({
    queryKey: getRevealConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reveal-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRevealConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRevealConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRevealConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRevealConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRevealConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRevealConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRevealConfigurationMutationKey() {
  return ['reveal-configuration', '/reveal-configuration', 'PUT'] as const
}

export function getPutRevealConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reveal-configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRevealConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reveal-configuration']['$put']>) {
      return parseResponse(client['reveal-configuration'].$put(args, options))
    },
  })
}

export function usePutRevealConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['reveal-configuration']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['reveal-configuration']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRevealConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getFindingsFindingIdRevealQueryKey(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findings', '/findings/:findingId/reveal', keyArgs] as const
}

export function getFindingsFindingIdRevealQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingsFindingIdRevealQueryKey>
  >({
    queryKey: getFindingsFindingIdRevealQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findings[':findingId'].reveal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFindingsFindingIdReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsFindingIdRevealQueryKey>
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
      ...getFindingsFindingIdRevealQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFindingsFindingIdReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsFindingIdRevealQueryKey>
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
      ...getFindingsFindingIdRevealQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFindingsFindingIdRevealAvailabilityQueryKey(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findings', '/findings/:findingId/reveal/availability', keyArgs] as const
}

export function getFindingsFindingIdRevealAvailabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingsFindingIdRevealAvailabilityQueryKey>
  >({
    queryKey: getFindingsFindingIdRevealAvailabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findings[':findingId'].reveal.availability.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFindingsFindingIdRevealAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsFindingIdRevealAvailabilityQueryKey>
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
      ...getFindingsFindingIdRevealAvailabilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFindingsFindingIdRevealAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingsFindingIdRevealAvailabilityQueryKey>
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
      ...getFindingsFindingIdRevealAvailabilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesSensitivityInspectionsIdQueryKey(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/sensitivity-inspections/:id', keyArgs] as const
}

export function getTemplatesSensitivityInspectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesSensitivityInspectionsIdQueryKey>
  >({
    queryKey: getTemplatesSensitivityInspectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates['sensitivity-inspections'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesSensitivityInspectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesSensitivityInspectionsIdQueryKey>
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
      ...getTemplatesSensitivityInspectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesSensitivityInspectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesSensitivityInspectionsIdQueryKey>
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
      ...getTemplatesSensitivityInspectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTemplatesSensitivityInspectionsIdMutationKey() {
  return ['templates', '/templates/sensitivity-inspections/:id', 'PUT'] as const
}

export function getPutTemplatesSensitivityInspectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesSensitivityInspectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>,
    ) {
      return parseResponse(client.templates['sensitivity-inspections'][':id'].$put(args, options))
    },
  })
}

export function usePutTemplatesSensitivityInspectionsId<
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
                ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTemplatesSensitivityInspectionsIdMutationOptions<
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

export function getPostUsageStatisticsMutationKey() {
  return ['usage', '/usage/statistics', 'POST'] as const
}

export function getPostUsageStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.statistics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.usage.statistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsageStatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.usage.statistics.$post>) {
      return parseResponse(client.usage.statistics.$post(args, options))
    },
  })
}

export function usePostUsageStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.usage.statistics.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.usage.statistics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsageStatisticsMutationOptions<TError, TOnMutateResult>(
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

export function getUsageQueryKey(args: InferRequestType<typeof client.usage.$get>) {
  const { header: _, ...keyArgs } = args
  return ['usage', '/usage', keyArgs] as const
}

export function getUsageQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsageQueryKey>
  >({
    queryKey: getUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.usage.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.usage.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostJobsListMutationKey() {
  return ['jobs', '/jobs/list', 'POST'] as const
}

export function getPostJobsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.list.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.list.$post>) {
      return parseResponse(client.jobs.list.$post(args, options))
    },
  })
}

export function usePostJobsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.jobs.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClassificationScopesQueryKey(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classification-scopes', '/classification-scopes', keyArgs] as const
}

export function getClassificationScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationScopesQueryKey>
  >({
    queryKey: getClassificationScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['classification-scopes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassificationScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationScopesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClassificationScopesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClassificationScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassificationScopesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClassificationScopesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCustomDataIdentifiersListMutationKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/list', 'POST'] as const
}

export function getPostCustomDataIdentifiersListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['list']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-data-identifiers']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomDataIdentifiersListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-data-identifiers']['list']['$post']>,
    ) {
      return parseResponse(client['custom-data-identifiers'].list.$post(args, options))
    },
  })
}

export function usePostCustomDataIdentifiersList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers']['list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-data-identifiers']['list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomDataIdentifiersListMutationOptions<TError, TOnMutateResult>(
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

export function getPostFindingsMutationKey() {
  return ['findings', '/findings', 'POST'] as const
}

export function getPostFindingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$post>>>>>,
    TError,
    InferRequestType<typeof client.findings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.$post>) {
      return parseResponse(client.findings.$post(args, options))
    },
  })
}

export function usePostFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostManagedDataIdentifiersListMutationKey() {
  return ['managed-data-identifiers', '/managed-data-identifiers/list', 'POST'] as const
}

export function getPostManagedDataIdentifiersListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['managed-data-identifiers']['list']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['managed-data-identifiers']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedDataIdentifiersListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['managed-data-identifiers']['list']['$post']>,
    ) {
      return parseResponse(client['managed-data-identifiers'].list.$post(args, options))
    },
  })
}

export function usePostManagedDataIdentifiersList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['managed-data-identifiers']['list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['managed-data-identifiers']['list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedDataIdentifiersListMutationOptions<
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

export function getResourceProfilesArtifactsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-profiles', '/resource-profiles/artifacts#resourceArn', keyArgs] as const
}

export function getResourceProfilesArtifactsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourceProfilesArtifactsResourceArnQueryKey>
  >({
    queryKey: getResourceProfilesArtifactsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resource-profiles']['artifacts#resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourceProfilesArtifactsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceProfilesArtifactsResourceArnQueryKey>
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
      ...getResourceProfilesArtifactsResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourceProfilesArtifactsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceProfilesArtifactsResourceArnQueryKey>
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
      ...getResourceProfilesArtifactsResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getResourceProfilesDetectionsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-profiles', '/resource-profiles/detections#resourceArn', keyArgs] as const
}

export function getResourceProfilesDetectionsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourceProfilesDetectionsResourceArnQueryKey>
  >({
    queryKey: getResourceProfilesDetectionsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resource-profiles']['detections#resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourceProfilesDetectionsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceProfilesDetectionsResourceArnQueryKey>
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
      ...getResourceProfilesDetectionsResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourceProfilesDetectionsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceProfilesDetectionsResourceArnQueryKey>
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
      ...getResourceProfilesDetectionsResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchResourceProfilesDetectionsResourceArnMutationKey() {
  return ['resource-profiles', '/resource-profiles/detections#resourceArn', 'PATCH'] as const
}

export function getPatchResourceProfilesDetectionsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourceProfilesDetectionsResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['resource-profiles']['detections#resourceArn']['$patch']
      >,
    ) {
      return parseResponse(
        client['resource-profiles']['detections#resourceArn'].$patch(args, options),
      )
    },
  })
}

export function usePatchResourceProfilesDetectionsResourceArn<
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
                ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchResourceProfilesDetectionsResourceArnMutationOptions<
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

export function getTemplatesSensitivityInspectionsQueryKey(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/sensitivity-inspections', keyArgs] as const
}

export function getTemplatesSensitivityInspectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesSensitivityInspectionsQueryKey>
  >({
    queryKey: getTemplatesSensitivityInspectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates['sensitivity-inspections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesSensitivityInspections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesSensitivityInspectionsQueryKey>
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
      ...getTemplatesSensitivityInspectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesSensitivityInspections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesSensitivityInspectionsQueryKey>
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
      ...getTemplatesSensitivityInspectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatasourcesSearchResourcesMutationKey() {
  return ['datasources', '/datasources/search-resources', 'POST'] as const
}

export function getPostDatasourcesSearchResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)['search-resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources)['search-resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesSearchResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasources)['search-resources']['$post']>,
    ) {
      return parseResponse(client.datasources['search-resources'].$post(args, options))
    },
  })
}

export function usePostDatasourcesSearchResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)['search-resources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources)['search-resources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesSearchResourcesMutationOptions<
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

export function getPostCustomDataIdentifiersTestMutationKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/test', 'POST'] as const
}

export function getPostCustomDataIdentifiersTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-data-identifiers']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomDataIdentifiersTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-data-identifiers']['test']['$post']>,
    ) {
      return parseResponse(client['custom-data-identifiers'].test.$post(args, options))
    },
  })
}

export function usePostCustomDataIdentifiersTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['custom-data-identifiers']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-data-identifiers']['test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomDataIdentifiersTestMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMacieMembersIdMutationKey() {
  return ['macie', '/macie/members/:id', 'PATCH'] as const
}

export function getPatchMacieMembersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.macie.members)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.macie.members)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMacieMembersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.macie.members)[':id']['$patch']>) {
      return parseResponse(client.macie.members[':id'].$patch(args, options))
    },
  })
}

export function usePatchMacieMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.macie.members)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.macie.members)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMacieMembersIdMutationOptions<TError, TOnMutateResult>(
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
