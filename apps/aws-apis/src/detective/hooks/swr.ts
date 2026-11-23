import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGraphKey() {
  return ['graph'] as const
}

export function getGraphsKey() {
  return ['graphs'] as const
}

export function getInvitationKey() {
  return ['invitation'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getMembershipKey() {
  return ['membership'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutInvitationKey() {
  return ['invitation', '/invitation', 'PUT'] as const
}

export function usePutInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invitation.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitation.$put> }) =>
        parseResponse(client.invitation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphDatasourcesGetKey() {
  return ['graph', '/graph/datasources/get', 'POST'] as const
}

export function usePostGraphDatasourcesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.datasources.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphDatasourcesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.graph.datasources.get.$post> },
      ) => parseResponse(client.graph.datasources.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMembershipDatasourcesGetKey() {
  return ['membership', '/membership/datasources/get', 'POST'] as const
}

export function usePostMembershipDatasourcesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.membership.datasources.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.membership.datasources.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembershipDatasourcesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.membership.datasources.get.$post> },
      ) => parseResponse(client.membership.datasources.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphKey() {
  return ['graph', '/graph', 'POST'] as const
}

export function usePostGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.graph.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.graph.$post> }) =>
        parseResponse(client.graph.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphMembersKey() {
  return ['graph', '/graph/members', 'POST'] as const
}

export function usePostGraphMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.members.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.graph.members.$post> }) =>
        parseResponse(client.graph.members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphRemovalKey() {
  return ['graph', '/graph/removal', 'POST'] as const
}

export function usePostGraphRemoval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.removal.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.removal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphRemovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.graph.removal.$post> }) =>
        parseResponse(client.graph.removal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphMembersRemovalKey() {
  return ['graph', '/graph/members/removal', 'POST'] as const
}

export function usePostGraphMembersRemoval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.removal.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.members.removal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphMembersRemovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.graph.members.removal.$post> },
      ) => parseResponse(client.graph.members.removal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgsDescribeOrganizationConfigurationKey() {
  return ['orgs', '/orgs/describeOrganizationConfiguration', 'POST'] as const
}

export function usePostOrgsDescribeOrganizationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orgs.describeOrganizationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orgs.describeOrganizationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsDescribeOrganizationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.orgs.describeOrganizationConfiguration.$post> },
      ) => parseResponse(client.orgs.describeOrganizationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgsDisableAdminAccountKey() {
  return ['orgs', '/orgs/disableAdminAccount', 'POST'] as const
}

export function usePostOrgsDisableAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orgs.disableAdminAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orgs.disableAdminAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsDisableAdminAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.orgs.disableAdminAccount.$post> },
      ) => parseResponse(client.orgs.disableAdminAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMembershipRemovalKey() {
  return ['membership', '/membership/removal', 'POST'] as const
}

export function usePostMembershipRemoval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.membership.removal.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.membership.removal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembershipRemovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.membership.removal.$post> }) =>
        parseResponse(client.membership.removal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgsEnableAdminAccountKey() {
  return ['orgs', '/orgs/enableAdminAccount', 'POST'] as const
}

export function usePostOrgsEnableAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orgs.enableAdminAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orgs.enableAdminAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsEnableAdminAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.orgs.enableAdminAccount.$post> },
      ) => parseResponse(client.orgs.enableAdminAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphMembersGetKey() {
  return ['graph', '/graph/members/get', 'POST'] as const
}

export function usePostGraphMembersGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.members.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphMembersGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.graph.members.get.$post> }) =>
        parseResponse(client.graph.members.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphDatasourcesListKey() {
  return ['graph', '/graph/datasources/list', 'POST'] as const
}

export function usePostGraphDatasourcesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.datasources.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphDatasourcesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.graph.datasources.list.$post> },
      ) => parseResponse(client.graph.datasources.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphsListKey() {
  return ['graphs', '/graphs/list', 'POST'] as const
}

export function usePostGraphsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphs.list.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.graphs.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.graphs.list.$post> }) =>
        parseResponse(client.graphs.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationsListKey() {
  return ['invitations', '/invitations/list', 'POST'] as const
}

export function usePostInvitationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitations.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.list.$post> }) =>
        parseResponse(client.invitations.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphMembersListKey() {
  return ['graph', '/graph/members/list', 'POST'] as const
}

export function usePostGraphMembersList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.members.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphMembersListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.graph.members.list.$post> }) =>
        parseResponse(client.graph.members.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgsAdminAccountslistKey() {
  return ['orgs', '/orgs/adminAccountslist', 'POST'] as const
}

export function usePostOrgsAdminAccountslist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orgs.adminAccountslist.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orgs.adminAccountslist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsAdminAccountslistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.orgs.adminAccountslist.$post> },
      ) => parseResponse(client.orgs.adminAccountslist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationRemovalKey() {
  return ['invitation', '/invitation/removal', 'POST'] as const
}

export function usePostInvitationRemoval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.removal.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitation.removal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationRemovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitation.removal.$post> }) =>
        parseResponse(client.invitation.removal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphMemberMonitoringstateKey() {
  return ['graph', '/graph/member/monitoringstate', 'POST'] as const
}

export function usePostGraphMemberMonitoringstate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.member.monitoringstate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.member.monitoringstate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphMemberMonitoringstateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.graph.member.monitoringstate.$post> },
      ) => parseResponse(client.graph.member.monitoringstate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphDatasourcesUpdateKey() {
  return ['graph', '/graph/datasources/update', 'POST'] as const
}

export function usePostGraphDatasourcesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.graph.datasources.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphDatasourcesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.graph.datasources.update.$post> },
      ) => parseResponse(client.graph.datasources.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgsUpdateOrganizationConfigurationKey() {
  return ['orgs', '/orgs/updateOrganizationConfiguration', 'POST'] as const
}

export function usePostOrgsUpdateOrganizationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orgs.updateOrganizationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orgs.updateOrganizationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsUpdateOrganizationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.orgs.updateOrganizationConfiguration.$post> },
      ) => parseResponse(client.orgs.updateOrganizationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
