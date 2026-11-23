import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getActionTargetsKey() {
  return ['actionTargets'] as const
}

export function getAdministratorKey() {
  return ['administrator'] as const
}

export function getAssociationsKey() {
  return ['associations'] as const
}

export function getAssociationsSecurityControlIdKey() {
  return ['associations#SecurityControlId'] as const
}

export function getFindingAggregatorKey() {
  return ['findingAggregator'] as const
}

export function getFindingsKey() {
  return ['findings'] as const
}

export function getInsightsKey() {
  return ['insights'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getMasterKey() {
  return ['master'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getProductSubscriptionsKey() {
  return ['productSubscriptions'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSecurityControlsKey() {
  return ['securityControls'] as const
}

export function getStandardsKey() {
  return ['standards'] as const
}

export function getTagsKey() {
  return ['tags'] as const
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

export function getPostAdministratorKey() {
  return ['administrator', '/administrator', 'POST'] as const
}

export function usePostAdministrator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.administrator.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.administrator.$post> }) =>
        parseResponse(client.administrator.$post(arg, clientOptions)),
      restMutationOptions,
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

export function getPostMasterKey() {
  return ['master', '/master', 'POST'] as const
}

export function usePostMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.master.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.master.$post> }) =>
        parseResponse(client.master.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStandardsDeregisterKey() {
  return ['standards', '/standards/deregister', 'POST'] as const
}

export function usePostStandardsDeregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.standards.deregister.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.standards.deregister.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStandardsDeregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.standards.deregister.$post> },
      ) => parseResponse(client.standards.deregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStandardsRegisterKey() {
  return ['standards', '/standards/register', 'POST'] as const
}

export function usePostStandardsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.standards.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStandardsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.standards.register.$post> }) =>
        parseResponse(client.standards.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSecurityControlsBatchGetKey() {
  return ['securityControls', '/securityControls/batchGet', 'POST'] as const
}

export function usePostSecurityControlsBatchGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.batchGet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.securityControls.batchGet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityControlsBatchGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.securityControls.batchGet.$post> },
      ) => parseResponse(client.securityControls.batchGet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociationsBatchGetKey() {
  return ['associations', '/associations/batchGet', 'POST'] as const
}

export function usePostAssociationsBatchGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.batchGet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.associations.batchGet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociationsBatchGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.associations.batchGet.$post> },
      ) => parseResponse(client.associations.batchGet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingsImportKey() {
  return ['findings', '/findings/import', 'POST'] as const
}

export function usePostFindingsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.findings.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findings.import.$post> }) =>
        parseResponse(client.findings.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFindingsBatchupdateKey() {
  return ['findings', '/findings/batchupdate', 'PATCH'] as const
}

export function usePatchFindingsBatchupdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findings.batchupdate.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.findings.batchupdate.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFindingsBatchupdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.findings.batchupdate.$patch> },
      ) => parseResponse(client.findings.batchupdate.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAssociationsKey() {
  return ['associations', '/associations', 'PATCH'] as const
}

export function usePatchAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.associations.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.associations.$patch> }) =>
        parseResponse(client.associations.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionTargetsKey() {
  return ['actionTargets', '/actionTargets', 'POST'] as const
}

export function usePostActionTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actionTargets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.actionTargets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.actionTargets.$post> }) =>
        parseResponse(client.actionTargets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindingAggregatorCreateKey() {
  return ['findingAggregator', '/findingAggregator/create', 'POST'] as const
}

export function usePostFindingAggregatorCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.findingAggregator.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindingAggregatorCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.findingAggregator.create.$post> },
      ) => parseResponse(client.findingAggregator.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightsKey() {
  return ['insights', '/insights', 'POST'] as const
}

export function usePostInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.insights.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.insights.$post> }) =>
        parseResponse(client.insights.$post(arg, clientOptions)),
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

export function getDeleteActionTargetsActionTargetArnKey() {
  return ['actionTargets', '/actionTargets/:ActionTargetArn', 'DELETE'] as const
}

export function useDeleteActionTargetsActionTargetArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActionTargetsActionTargetArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']> },
      ) => parseResponse(client.actionTargets[':ActionTargetArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchActionTargetsActionTargetArnKey() {
  return ['actionTargets', '/actionTargets/:ActionTargetArn', 'PATCH'] as const
}

export function usePatchActionTargetsActionTargetArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchActionTargetsActionTargetArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']> },
      ) => parseResponse(client.actionTargets[':ActionTargetArn'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFindingAggregatorDeleteFindingAggregatorArnKey() {
  return ['findingAggregator', '/findingAggregator/delete/:FindingAggregatorArn', 'DELETE'] as const
}

export function useDeleteFindingAggregatorDeleteFindingAggregatorArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFindingAggregatorDeleteFindingAggregatorArnKey()
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
            (typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.findingAggregator.delete[':FindingAggregatorArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInsightsInsightArnKey() {
  return ['insights', '/insights/:InsightArn', 'DELETE'] as const
}

export function useDeleteInsightsInsightArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)[':InsightArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.insights)[':InsightArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInsightsInsightArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.insights)[':InsightArn']['$delete']> },
      ) => parseResponse(client.insights[':InsightArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchInsightsInsightArnKey() {
  return ['insights', '/insights/:InsightArn', 'PATCH'] as const
}

export function usePatchInsightsInsightArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':InsightArn']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.insights)[':InsightArn']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInsightsInsightArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.insights)[':InsightArn']['$patch']> },
      ) => parseResponse(client.insights[':InsightArn'].$patch(arg, clientOptions)),
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

export function getPostMembersDeleteKey() {
  return ['members', '/members/delete', 'POST'] as const
}

export function usePostMembersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.members.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.members.delete.$post> }) =>
        parseResponse(client.members.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionTargetsGetKey() {
  return ['actionTargets', '/actionTargets/get', 'POST'] as const
}

export function usePostActionTargetsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actionTargets.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.actionTargets.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTargetsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.actionTargets.get.$post> }) =>
        parseResponse(client.actionTargets.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsKey() {
  return ['accounts', '/accounts', 'DELETE'] as const
}

export function useDeleteAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$delete> }) =>
        parseResponse(client.accounts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsKey() {
  return ['accounts', '/accounts', 'PATCH'] as const
}

export function usePatchAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$patch> }) =>
        parseResponse(client.accounts.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationConfigurationKey(
  args: InferRequestType<typeof client.organization.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['organization', '/organization/configuration', keyArgs] as const
}

export function useGetOrganizationConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.organization.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.organization.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationConfigurationKey() {
  return ['organization', '/organization/configuration', 'POST'] as const
}

export function usePostOrganizationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.configuration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.configuration.$post> },
      ) => parseResponse(client.organization.configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function useGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStandardsKey(args: InferRequestType<typeof client.standards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards', keyArgs] as const
}

export function useGetStandards<TError = unknown>(
  args: InferRequestType<typeof client.standards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStandardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.standards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStandards<TError = unknown>(
  args: InferRequestType<typeof client.standards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStandardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.standards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStandardsControlsStandardsSubscriptionArnKey(
  args: InferRequestType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards/controls/:StandardsSubscriptionArn', keyArgs] as const
}

export function useGetStandardsControlsStandardsSubscriptionArn<TError = unknown>(
  args: InferRequestType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>
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
        ? getGetStandardsControlsStandardsSubscriptionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.standards.controls[':StandardsSubscriptionArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStandardsControlsStandardsSubscriptionArn<TError = unknown>(
  args: InferRequestType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>
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
        ? getGetStandardsControlsStandardsSubscriptionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.standards.controls[':StandardsSubscriptionArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProductSubscriptionsProductSubscriptionArnKey() {
  return [
    'productSubscriptions',
    '/productSubscriptions/:ProductSubscriptionArn',
    'DELETE',
  ] as const
}

export function useDeleteProductSubscriptionsProductSubscriptionArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductSubscriptionsProductSubscriptionArnKey()
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
            (typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.productSubscriptions[':ProductSubscriptionArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationAdminDisableKey() {
  return ['organization', '/organization/admin/disable', 'POST'] as const
}

export function usePostOrganizationAdminDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.disable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.admin.disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationAdminDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.admin.disable.$post> },
      ) => parseResponse(client.organization.admin.disable.$post(arg, clientOptions)),
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

export function getPostMembersDisassociateKey() {
  return ['members', '/members/disassociate', 'POST'] as const
}

export function usePostMembersDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.members.disassociate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.members.disassociate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersDisassociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.members.disassociate.$post> },
      ) => parseResponse(client.members.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductSubscriptionsKey(
  args: InferRequestType<typeof client.productSubscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['productSubscriptions', '/productSubscriptions', keyArgs] as const
}

export function useGetProductSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.productSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.productSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.productSubscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.productSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductSubscriptionsKey() {
  return ['productSubscriptions', '/productSubscriptions', 'POST'] as const
}

export function usePostProductSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.productSubscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.productSubscriptions.$post> },
      ) => parseResponse(client.productSubscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationAdminEnableKey() {
  return ['organization', '/organization/admin/enable', 'POST'] as const
}

export function usePostOrganizationAdminEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.enable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.admin.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationAdminEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.admin.enable.$post> },
      ) => parseResponse(client.organization.admin.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStandardsGetKey() {
  return ['standards', '/standards/get', 'POST'] as const
}

export function usePostStandardsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.standards.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStandardsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.standards.get.$post> }) =>
        parseResponse(client.standards.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindingAggregatorGetFindingAggregatorArnKey(
  args: InferRequestType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingAggregator', '/findingAggregator/get/:FindingAggregatorArn', keyArgs] as const
}

export function useGetFindingAggregatorGetFindingAggregatorArn<TError = unknown>(
  args: InferRequestType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>
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
        ? getGetFindingAggregatorGetFindingAggregatorArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.findingAggregator.get[':FindingAggregatorArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingAggregatorGetFindingAggregatorArn<TError = unknown>(
  args: InferRequestType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>
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
        ? getGetFindingAggregatorGetFindingAggregatorArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.findingAggregator.get[':FindingAggregatorArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
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

export function getPatchFindingsKey() {
  return ['findings', '/findings', 'PATCH'] as const
}

export function usePatchFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.findings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFindingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findings.$patch> }) =>
        parseResponse(client.findings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInsightsResultsInsightArnKey(
  args: InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/results/:InsightArn', keyArgs] as const
}

export function useGetInsightsResultsInsightArn<TError = unknown>(
  args: InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInsightsResultsInsightArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights.results[':InsightArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsResultsInsightArn<TError = unknown>(
  args: InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInsightsResultsInsightArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights.results[':InsightArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInsightsGetKey() {
  return ['insights', '/insights/get', 'POST'] as const
}

export function usePostInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.insights.get.$post> }) =>
        parseResponse(client.insights.get.$post(arg, clientOptions)),
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

export function getPostMembersGetKey() {
  return ['members', '/members/get', 'POST'] as const
}

export function usePostMembersGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.members.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.members.get.$post> }) =>
        parseResponse(client.members.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMembersInviteKey() {
  return ['members', '/members/invite', 'POST'] as const
}

export function usePostMembersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.invite.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.members.invite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.members.invite.$post> }) =>
        parseResponse(client.members.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindingAggregatorListKey(
  args: InferRequestType<typeof client.findingAggregator.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingAggregator', '/findingAggregator/list', keyArgs] as const
}

export function useGetFindingAggregatorList<TError = unknown>(
  args: InferRequestType<typeof client.findingAggregator.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingAggregatorListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findingAggregator.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindingAggregatorList<TError = unknown>(
  args: InferRequestType<typeof client.findingAggregator.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindingAggregatorListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findingAggregator.list.$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetOrganizationAdminKey(
  args: InferRequestType<typeof client.organization.admin.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['organization', '/organization/admin', keyArgs] as const
}

export function useGetOrganizationAdmin<TError = unknown>(
  args: InferRequestType<typeof client.organization.admin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.admin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationAdmin<TError = unknown>(
  args: InferRequestType<typeof client.organization.admin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.admin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSecurityControlsDefinitionsKey(
  args: InferRequestType<typeof client.securityControls.definitions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['securityControls', '/securityControls/definitions', keyArgs] as const
}

export function useGetSecurityControlsDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.securityControls.definitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityControlsDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.securityControls.definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityControlsDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.securityControls.definitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityControlsDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.securityControls.definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsSecurityControlIdKey(
  args: InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations#SecurityControlId', '/associations#SecurityControlId', keyArgs] as const
}

export function useGetAssociationsSecurityControlId<TError = unknown>(
  args: InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsSecurityControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['associations#SecurityControlId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsSecurityControlId<TError = unknown>(
  args: InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsSecurityControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['associations#SecurityControlId'].$get(args, clientOptions)),
      restSwrOptions,
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
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
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

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
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

export function getPatchFindingAggregatorUpdateKey() {
  return ['findingAggregator', '/findingAggregator/update', 'PATCH'] as const
}

export function usePatchFindingAggregatorUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.update.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.findingAggregator.update.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFindingAggregatorUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.findingAggregator.update.$patch> },
      ) => parseResponse(client.findingAggregator.update.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStandardsControlStandardsControlArnKey() {
  return ['standards', '/standards/control/:StandardsControlArn', 'PATCH'] as const
}

export function usePatchStandardsControlStandardsControlArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStandardsControlStandardsControlArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>
        },
      ) =>
        parseResponse(client.standards.control[':StandardsControlArn'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
