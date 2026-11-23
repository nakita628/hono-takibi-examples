import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostInvitationsAcceptKey() {
  return ['invitations', '/invitations/accept', 'POST'] as const
}

export function usePostInvitationsAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.accept.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitations.accept.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.accept.$post> }) =>
        parseResponse(client.invitations.accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomDataIdentifiersGetKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/get', 'POST'] as const
}

export function usePostCustomDataIdentifiersGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['get']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-data-identifiers']['get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomDataIdentifiersGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-data-identifiers']['get']['$post']> },
      ) => parseResponse(client['custom-data-identifiers'].get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAllowListsKey(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allow-lists', '/allow-lists', keyArgs] as const
}

export function useGetAllowLists<TError = unknown>(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllowListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['allow-lists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllowLists<TError = unknown>(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllowListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['allow-lists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAllowListsKey() {
  return ['allow-lists', '/allow-lists', 'POST'] as const
}

export function usePostAllowLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['allow-lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAllowListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['allow-lists']['$post']> }) =>
        parseResponse(client['allow-lists'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobsKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function usePostJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jobs.$post> }) =>
        parseResponse(client.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomDataIdentifiersKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers', 'POST'] as const
}

export function usePostCustomDataIdentifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-data-identifiers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomDataIdentifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['custom-data-identifiers']['$post']> },
      ) => parseResponse(client['custom-data-identifiers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindingsfiltersKey(
  args: InferRequestType<typeof client.findingsfilters.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingsfilters', '/findingsfilters', keyArgs] as const
}

export function useGetFindingsfilters<TError = unknown>(
  args: InferRequestType<typeof client.findingsfilters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsfiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findingsfilters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingsfilters<TError = unknown>(
  args: InferRequestType<typeof client.findingsfilters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsfiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findingsfilters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFindingsfiltersKey() {
  return ['findingsfilters', '/findingsfilters', 'POST'] as const
}

export function usePostFindingsfilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingsfilters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.findingsfilters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingsfiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findingsfilters.$post> }) =>
        parseResponse(client.findingsfilters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvitationsKey(args: InferRequestType<typeof client.invitations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations', keyArgs] as const
}

export function useGetInvitations<TError = unknown>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitations<TError = unknown>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvitationsKey() {
  return ['invitations', '/invitations', 'POST'] as const
}

export function usePostInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.$post> }) =>
        parseResponse(client.invitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersKey(args: InferRequestType<typeof client.members.$get>) {
  const { header: _, ...keyArgs } = args
  return ['members', '/members', keyArgs] as const
}

export function useGetMembers<TError = unknown>(
  args: InferRequestType<typeof client.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.members.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMembers<TError = unknown>(
  args: InferRequestType<typeof client.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.members.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMembersKey() {
  return ['members', '/members', 'POST'] as const
}

export function usePostMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.members.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.members.$post> }) =>
        parseResponse(client.members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingsSampleKey() {
  return ['findings', '/findings/sample', 'POST'] as const
}

export function usePostFindingsSample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.sample.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.findings.sample.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingsSampleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findings.sample.$post> }) =>
        parseResponse(client.findings.sample.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationsDeclineKey() {
  return ['invitations', '/invitations/decline', 'POST'] as const
}

export function usePostInvitationsDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.decline.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitations.decline.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.decline.$post> }) =>
        parseResponse(client.invitations.decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAllowListsIdKey(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allow-lists', '/allow-lists/:id', keyArgs] as const
}

export function useGetAllowListsId<TError = unknown>(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllowListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['allow-lists'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllowListsId<TError = unknown>(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllowListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['allow-lists'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAllowListsIdKey() {
  return ['allow-lists', '/allow-lists/:id', 'PUT'] as const
}

export function usePutAllowListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['allow-lists'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAllowListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['allow-lists'][':id']['$put']> },
      ) => parseResponse(client['allow-lists'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAllowListsIdKey() {
  return ['allow-lists', '/allow-lists/:id', 'DELETE'] as const
}

export function useDeleteAllowListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['allow-lists'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['allow-lists'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAllowListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['allow-lists'][':id']['$delete']> },
      ) => parseResponse(client['allow-lists'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomDataIdentifiersIdKey(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-data-identifiers', '/custom-data-identifiers/:id', keyArgs] as const
}

export function useGetCustomDataIdentifiersId<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomDataIdentifiersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-data-identifiers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomDataIdentifiersId<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomDataIdentifiersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-data-identifiers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCustomDataIdentifiersIdKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/:id', 'DELETE'] as const
}

export function useDeleteCustomDataIdentifiersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomDataIdentifiersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$delete']> },
      ) => parseResponse(client['custom-data-identifiers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindingsfiltersIdKey(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingsfilters', '/findingsfilters/:id', keyArgs] as const
}

export function useGetFindingsfiltersId<TError = unknown>(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsfiltersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findingsfilters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingsfiltersId<TError = unknown>(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsfiltersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findingsfilters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFindingsfiltersIdKey() {
  return ['findingsfilters', '/findingsfilters/:id', 'DELETE'] as const
}

export function useDeleteFindingsfiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.findingsfilters)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFindingsfiltersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.findingsfilters)[':id']['$delete']> },
      ) => parseResponse(client.findingsfilters[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFindingsfiltersIdKey() {
  return ['findingsfilters', '/findingsfilters/:id', 'PATCH'] as const
}

export function usePatchFindingsfiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.findingsfilters)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.findingsfilters)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFindingsfiltersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.findingsfilters)[':id']['$patch']> },
      ) => parseResponse(client.findingsfilters[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationsDeleteKey() {
  return ['invitations', '/invitations/delete', 'POST'] as const
}

export function usePostInvitationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.delete.$post> }) =>
        parseResponse(client.invitations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdKey(args: InferRequestType<(typeof client.members)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['members', '/members/:id', keyArgs] as const
}

export function useGetMembersId<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersId<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMembersIdKey() {
  return ['members', '/members/:id', 'DELETE'] as const
}

export function useDeleteMembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':id']['$delete']> },
      ) => parseResponse(client.members[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesS3Key() {
  return ['datasources', '/datasources/s3', 'POST'] as const
}

export function usePostDatasourcesS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.s3.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.datasources.s3.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasources.s3.$post> }) =>
        parseResponse(client.datasources.s3.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdKey(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function useGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchJobsJobIdKey() {
  return ['jobs', '/jobs/:jobId', 'PATCH'] as const
}

export function usePatchJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['$patch']> },
      ) => parseResponse(client.jobs[':jobId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminConfigurationKey(
  args: InferRequestType<typeof client.admin.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin', '/admin/configuration', keyArgs] as const
}

export function useGetAdminConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.admin.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.admin.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAdminConfigurationKey() {
  return ['admin', '/admin/configuration', 'PATCH'] as const
}

export function usePatchAdminConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.configuration.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.configuration.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.configuration.$patch> },
      ) => parseResponse(client.admin.configuration.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMacieKey(args: InferRequestType<typeof client.macie.$get>) {
  const { header: _, ...keyArgs } = args
  return ['macie', '/macie', keyArgs] as const
}

export function useGetMacie<TError = unknown>(
  args: InferRequestType<typeof client.macie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macie.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMacie<TError = unknown>(
  args: InferRequestType<typeof client.macie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macie.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMacieKey() {
  return ['macie', '/macie', 'POST'] as const
}

export function usePostMacie<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.macie.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMacieKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.macie.$post> }) =>
        parseResponse(client.macie.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMacieKey() {
  return ['macie', '/macie', 'DELETE'] as const
}

export function useDeleteMacie<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.macie.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMacieKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.macie.$delete> }) =>
        parseResponse(client.macie.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMacieKey() {
  return ['macie', '/macie', 'PATCH'] as const
}

export function usePatchMacie<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macie.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.macie.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMacieKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.macie.$patch> }) =>
        parseResponse(client.macie.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminAdminAccountIdKey() {
  return ['admin#adminAccountId', '/admin#adminAccountId', 'DELETE'] as const
}

export function useDeleteAdminAdminAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin#adminAccountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin#adminAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminAdminAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin#adminAccountId']['$delete']> },
      ) => parseResponse(client['admin#adminAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdministratorDisassociateKey() {
  return ['administrator', '/administrator/disassociate', 'POST'] as const
}

export function usePostAdministratorDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administrator.disassociate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.administrator.disassociate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministratorDisassociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.administrator.disassociate.$post> },
      ) => parseResponse(client.administrator.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMasterDisassociateKey() {
  return ['master', '/master/disassociate', 'POST'] as const
}

export function usePostMasterDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.disassociate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.master.disassociate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMasterDisassociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.master.disassociate.$post> }) =>
        parseResponse(client.master.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMembersDisassociateIdKey() {
  return ['members', '/members/disassociate/:id', 'POST'] as const
}

export function usePostMembersDisassociateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members.disassociate)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members.disassociate)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersDisassociateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members.disassociate)[':id']['$post']> },
      ) => parseResponse(client.members.disassociate[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminKey(args: InferRequestType<typeof client.admin.$get>) {
  const { header: _, ...keyArgs } = args
  return ['admin', '/admin', keyArgs] as const
}

export function useGetAdmin<TError = unknown>(
  args: InferRequestType<typeof client.admin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.admin.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdmin<TError = unknown>(
  args: InferRequestType<typeof client.admin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.admin.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAdminKey() {
  return ['admin', '/admin', 'POST'] as const
}

export function usePostAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.admin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.$post> }) =>
        parseResponse(client.admin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdministratorKey(args: InferRequestType<typeof client.administrator.$get>) {
  const { header: _, ...keyArgs } = args
  return ['administrator', '/administrator', keyArgs] as const
}

export function useGetAdministrator<TError = unknown>(
  args: InferRequestType<typeof client.administrator.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdministratorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administrator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdministrator<TError = unknown>(
  args: InferRequestType<typeof client.administrator.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdministratorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administrator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomatedDiscoveryConfigurationKey(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['automated-discovery', '/automated-discovery/configuration', keyArgs] as const
}

export function useGetAutomatedDiscoveryConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomatedDiscoveryConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['automated-discovery'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomatedDiscoveryConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomatedDiscoveryConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['automated-discovery'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomatedDiscoveryConfigurationKey() {
  return ['automated-discovery', '/automated-discovery/configuration', 'PUT'] as const
}

export function usePutAutomatedDiscoveryConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['automated-discovery']['configuration']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['automated-discovery']['configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomatedDiscoveryConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['automated-discovery']['configuration']['$put']>
        },
      ) => parseResponse(client['automated-discovery'].configuration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesS3StatisticsKey() {
  return ['datasources', '/datasources/s3/statistics', 'POST'] as const
}

export function usePostDatasourcesS3Statistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datasources.s3.statistics.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.datasources.s3.statistics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesS3StatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.datasources.s3.statistics.$post> },
      ) => parseResponse(client.datasources.s3.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClassificationExportConfigurationKey(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'classification-export-configuration',
    '/classification-export-configuration',
    keyArgs,
  ] as const
}

export function useGetClassificationExportConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClassificationExportConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['classification-export-configuration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationExportConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClassificationExportConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-export-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['classification-export-configuration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClassificationExportConfigurationKey() {
  return [
    'classification-export-configuration',
    '/classification-export-configuration',
    'PUT',
  ] as const
}

export function usePutClassificationExportConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['classification-export-configuration']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['classification-export-configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClassificationExportConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['classification-export-configuration']['$put']>
        },
      ) => parseResponse(client['classification-export-configuration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClassificationScopesIdKey(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classification-scopes', '/classification-scopes/:id', keyArgs] as const
}

export function useGetClassificationScopesId<TError = unknown>(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClassificationScopesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['classification-scopes'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationScopesId<TError = unknown>(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClassificationScopesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['classification-scopes'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchClassificationScopesIdKey() {
  return ['classification-scopes', '/classification-scopes/:id', 'PATCH'] as const
}

export function usePatchClassificationScopesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['classification-scopes'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['classification-scopes'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClassificationScopesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['classification-scopes'][':id']['$patch']> },
      ) => parseResponse(client['classification-scopes'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingsStatisticsKey() {
  return ['findings', '/findings/statistics', 'POST'] as const
}

export function usePostFindingsStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.statistics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.findings.statistics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingsStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findings.statistics.$post> }) =>
        parseResponse(client.findings.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingsDescribeKey() {
  return ['findings', '/findings/describe', 'POST'] as const
}

export function usePostFindingsDescribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.describe.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.findings.describe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingsDescribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findings.describe.$post> }) =>
        parseResponse(client.findings.describe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindingsPublicationConfigurationKey(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'findings-publication-configuration',
    '/findings-publication-configuration',
    keyArgs,
  ] as const
}

export function useGetFindingsPublicationConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsPublicationConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['findings-publication-configuration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingsPublicationConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsPublicationConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['findings-publication-configuration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFindingsPublicationConfigurationKey() {
  return [
    'findings-publication-configuration',
    '/findings-publication-configuration',
    'PUT',
  ] as const
}

export function usePutFindingsPublicationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['findings-publication-configuration']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['findings-publication-configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFindingsPublicationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['findings-publication-configuration']['$put']> },
      ) => parseResponse(client['findings-publication-configuration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvitationsCountKey(
  args: InferRequestType<typeof client.invitations.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations/count', keyArgs] as const
}

export function useGetInvitationsCount<TError = unknown>(
  args: InferRequestType<typeof client.invitations.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvitationsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitationsCount<TError = unknown>(
  args: InferRequestType<typeof client.invitations.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvitationsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterKey(args: InferRequestType<typeof client.master.$get>) {
  const { header: _, ...keyArgs } = args
  return ['master', '/master', keyArgs] as const
}

export function useGetMaster<TError = unknown>(
  args: InferRequestType<typeof client.master.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMasterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.master.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMaster<TError = unknown>(
  args: InferRequestType<typeof client.master.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMasterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.master.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetResourceProfilesResourceArnKey(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-profiles#resourceArn', '/resource-profiles#resourceArn', keyArgs] as const
}

export function useGetResourceProfilesResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourceProfilesResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['resource-profiles#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceProfilesResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourceProfilesResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['resource-profiles#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchResourceProfilesResourceArnKey() {
  return ['resource-profiles#resourceArn', '/resource-profiles#resourceArn', 'PATCH'] as const
}

export function usePatchResourceProfilesResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resource-profiles#resourceArn']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['resource-profiles#resourceArn']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourceProfilesResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$patch']> },
      ) => parseResponse(client['resource-profiles#resourceArn'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRevealConfigurationKey(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reveal-configuration', '/reveal-configuration', keyArgs] as const
}

export function useGetRevealConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRevealConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reveal-configuration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRevealConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRevealConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reveal-configuration'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRevealConfigurationKey() {
  return ['reveal-configuration', '/reveal-configuration', 'PUT'] as const
}

export function usePutRevealConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reveal-configuration']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reveal-configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRevealConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reveal-configuration']['$put']> },
      ) => parseResponse(client['reveal-configuration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindingsFindingIdRevealKey(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findings', '/findings/:findingId/reveal', keyArgs] as const
}

export function useGetFindingsFindingIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsFindingIdRevealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findings[':findingId'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingsFindingIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingsFindingIdRevealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.findings)[':findingId']['reveal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findings[':findingId'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFindingsFindingIdRevealAvailabilityKey(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findings', '/findings/:findingId/reveal/availability', keyArgs] as const
}

export function useGetFindingsFindingIdRevealAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
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
        ? getGetFindingsFindingIdRevealAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.findings[':findingId'].reveal.availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingsFindingIdRevealAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
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
        ? getGetFindingsFindingIdRevealAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.findings[':findingId'].reveal.availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesSensitivityInspectionsIdKey(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/sensitivity-inspections/:id', keyArgs] as const
}

export function useGetTemplatesSensitivityInspectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesSensitivityInspectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates['sensitivity-inspections'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesSensitivityInspectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesSensitivityInspectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates['sensitivity-inspections'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTemplatesSensitivityInspectionsIdKey() {
  return ['templates', '/templates/sensitivity-inspections/:id', 'PUT'] as const
}

export function usePutTemplatesSensitivityInspectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplatesSensitivityInspectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>
        },
      ) =>
        parseResponse(client.templates['sensitivity-inspections'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsageStatisticsKey() {
  return ['usage', '/usage/statistics', 'POST'] as const
}

export function usePostUsageStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.statistics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.usage.statistics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsageStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.usage.statistics.$post> }) =>
        parseResponse(client.usage.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageKey(args: InferRequestType<typeof client.usage.$get>) {
  const { header: _, ...keyArgs } = args
  return ['usage', '/usage', keyArgs] as const
}

export function useGetUsage<TError = unknown>(
  args: InferRequestType<typeof client.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.usage.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsage<TError = unknown>(
  args: InferRequestType<typeof client.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.usage.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostJobsListKey() {
  return ['jobs', '/jobs/list', 'POST'] as const
}

export function usePostJobsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.list.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.jobs.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jobs.list.$post> }) =>
        parseResponse(client.jobs.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClassificationScopesKey(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['classification-scopes', '/classification-scopes', keyArgs] as const
}

export function useGetClassificationScopes<TError = unknown>(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClassificationScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['classification-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationScopes<TError = unknown>(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClassificationScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['classification-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['classification-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomDataIdentifiersListKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/list', 'POST'] as const
}

export function usePostCustomDataIdentifiersList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-data-identifiers']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomDataIdentifiersListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-data-identifiers']['list']['$post']> },
      ) => parseResponse(client['custom-data-identifiers'].list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingsKey() {
  return ['findings', '/findings', 'POST'] as const
}

export function usePostFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.findings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findings.$post> }) =>
        parseResponse(client.findings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostManagedDataIdentifiersListKey() {
  return ['managed-data-identifiers', '/managed-data-identifiers/list', 'POST'] as const
}

export function usePostManagedDataIdentifiersList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['managed-data-identifiers']['list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['managed-data-identifiers']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagedDataIdentifiersListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['managed-data-identifiers']['list']['$post']> },
      ) => parseResponse(client['managed-data-identifiers'].list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourceProfilesArtifactsResourceArnKey(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-profiles', '/resource-profiles/artifacts#resourceArn', keyArgs] as const
}

export function useGetResourceProfilesArtifactsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>
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
        ? getGetResourceProfilesArtifactsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['resource-profiles']['artifacts#resourceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceProfilesArtifactsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>
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
        ? getGetResourceProfilesArtifactsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['resource-profiles']['artifacts#resourceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourceProfilesDetectionsResourceArnKey(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-profiles', '/resource-profiles/detections#resourceArn', keyArgs] as const
}

export function useGetResourceProfilesDetectionsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
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
        ? getGetResourceProfilesDetectionsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['resource-profiles']['detections#resourceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceProfilesDetectionsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
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
        ? getGetResourceProfilesDetectionsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['resource-profiles']['detections#resourceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchResourceProfilesDetectionsResourceArnKey() {
  return ['resource-profiles', '/resource-profiles/detections#resourceArn', 'PATCH'] as const
}

export function usePatchResourceProfilesDetectionsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourceProfilesDetectionsResourceArnKey()
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
            (typeof client)['resource-profiles']['detections#resourceArn']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['resource-profiles']['detections#resourceArn'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesSensitivityInspectionsKey(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['templates', '/templates/sensitivity-inspections', keyArgs] as const
}

export function useGetTemplatesSensitivityInspections<TError = unknown>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesSensitivityInspectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates['sensitivity-inspections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesSensitivityInspections<TError = unknown>(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesSensitivityInspectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)['sensitivity-inspections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates['sensitivity-inspections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesSearchResourcesKey() {
  return ['datasources', '/datasources/search-resources', 'POST'] as const
}

export function usePostDatasourcesSearchResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)['search-resources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)['search-resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesSearchResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.datasources)['search-resources']['$post']> },
      ) => parseResponse(client.datasources['search-resources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomDataIdentifiersTestKey() {
  return ['custom-data-identifiers', '/custom-data-identifiers/test', 'POST'] as const
}

export function usePostCustomDataIdentifiersTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-data-identifiers']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-data-identifiers']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomDataIdentifiersTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-data-identifiers']['test']['$post']> },
      ) => parseResponse(client['custom-data-identifiers'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMacieMembersIdKey() {
  return ['macie', '/macie/members/:id', 'PATCH'] as const
}

export function usePatchMacieMembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.macie.members)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.macie.members)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMacieMembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.macie.members)[':id']['$patch']> },
      ) => parseResponse(client.macie.members[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
