import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostInvitationsAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitationsAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCustomDataIdentifiersGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomDataIdentifiersGetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAllowLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['allow-lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAllowListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAllowLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAllowListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCustomDataIdentifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomDataIdentifiersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFindingsfilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.findingsfilters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindingsfiltersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFindingsfilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFindingsfiltersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.members.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$post>>>>>,
        TError,
        InferRequestType<typeof client.members.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFindingsSample<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFindingsSampleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostInvitationsDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitationsDeclineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAllowListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAllowListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAllowListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAllowListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAllowListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAllowListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectCustomDataIdentifiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomDataIdentifiersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCustomDataIdentifiersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomDataIdentifiersIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFindingsfiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindingsfiltersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteFindingsfiltersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFindingsfiltersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchFindingsfiltersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFindingsfiltersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostInvitationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMembersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMembersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatasourcesS3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasourcesS3MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchJobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAdminConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.configuration.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminConfigurationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchAdminConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMacie<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.macie.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMacieQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMacie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$post>>>>>,
        TError,
        InferRequestType<typeof client.macie.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMacieMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMacie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$delete>>>>>,
        TError,
        InferRequestType<typeof client.macie.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMacieMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMacie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$patch>>>>>,
        TError,
        InferRequestType<typeof client.macie.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMacieMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAdminAdminAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminAdminAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAdministratorDisassociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdministratorDisassociateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMasterDisassociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMasterDisassociateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMembersDisassociateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersDisassociateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAdmin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
        TError,
        InferRequestType<typeof client.admin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAdministrator<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.administrator.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdministratorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAutomatedDiscoveryConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutomatedDiscoveryConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAutomatedDiscoveryConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAutomatedDiscoveryConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatasourcesS3Statistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasourcesS3StatisticsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectClassificationExportConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationExportConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutClassificationExportConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutClassificationExportConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectClassificationScopesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationScopesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchClassificationScopesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchClassificationScopesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFindingsStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFindingsStatisticsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFindingsDescribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFindingsDescribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFindingsPublicationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFindingsPublicationConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutFindingsPublicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFindingsPublicationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectInvitationsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMaster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMasterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMasterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectResourceProfilesResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourceProfilesResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchResourceProfilesResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchResourceProfilesResourceArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectRevealConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRevealConfigurationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutRevealConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRevealConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFindingsFindingIdReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFindingsFindingIdRevealQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFindingsFindingIdRevealAvailability<
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
  args: () => InferRequestType<
    (typeof client.findings)[':findingId']['reveal']['availability']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFindingsFindingIdRevealAvailabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTemplatesSensitivityInspectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesSensitivityInspectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTemplatesSensitivityInspectionsId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTemplatesSensitivityInspectionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsageStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsageStatisticsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostJobsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectClassificationScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationScopesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCustomDataIdentifiersList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomDataIdentifiersListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFindingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostManagedDataIdentifiersList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostManagedDataIdentifiersListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectResourceProfilesArtifactsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['resource-profiles']['artifacts#resourceArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourceProfilesArtifactsResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectResourceProfilesDetectionsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['resource-profiles']['detections#resourceArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourceProfilesDetectionsResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchResourceProfilesDetectionsResourceArn<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchResourceProfilesDetectionsResourceArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTemplatesSensitivityInspections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTemplatesSensitivityInspectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatasourcesSearchResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasourcesSearchResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCustomDataIdentifiersTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomDataIdentifiersTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMacieMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMacieMembersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
